import fs from 'node:fs'
import path from 'node:path'
import {EventEmitter} from 'node:stream'
import esbuildEnvPlugin from 'esbuild-envfile-plugin'
import {build, BuildOptions, BuildResult, WatchMode} from 'esbuild'
import {HTMLPlugin} from './plugins/HTMLPlugin'
import {BuilderOptions} from './build.option'
import {initializeStaticServer} from './dev-server'
import {CleanPlugin} from './plugins/cleanPlugin'
import copyStaticFiles from 'esbuild-copy-static-files'

export default (async () => {
  const configPath = pathFromRootDir(process.argv[2])
  const isDevServer = process.argv[3] === '--serve'

  const builderOptions: BuilderOptions = await loadConfig(configPath)
  const {applicationName, pathName, projectType, webPageTittle, servePort} = builderOptions

  let options: BuildOptions = {
    outdir: pathFromRootDir('dist', projectType, pathName),
    allowOverwrite: true,
    tsconfig: pathFromRootDir('tsconfig.json'),
    bundle: true,
  }

  options = {
    ...options,
    entryPoints: [pathFromRootDir('client', applicationName, 'components', 'main', 'main.tsx')],
    entryNames: '[dir]/bundle.[hash]',
    sourcemap: true,
    metafile: true,
    platform: 'browser',
    plugins: [CleanPlugin, esbuildEnvPlugin, copyStaticFiles({src: pathFromRootDir('public'), dest: pathFromRootDir('dist', `${projectType}`, `${pathName}`)})],
    loader: {
      '.png': 'file',
      '.svg': 'file',
      '.jpg': 'file',
      '.jpeg': 'file',
      '.xlsx': 'file',
    },
  }

  const plugins = options.plugins ? options.plugins : []

  if (isDevServer) {
    const emitter = new EventEmitter()
    options = {
      ...options,
      plugins: [...plugins, HTMLPlugin({isDev: true, title: webPageTittle, globalPrefix: pathName, serverPort: servePort})],
      watch: watcher(emitter),
    }
    initializeStaticServer(emitter, options, builderOptions)
  } else if (projectType === 'front-end') {
    options = {
      ...options,
      plugins: [...plugins, HTMLPlugin({isDev: false, title: webPageTittle, globalPrefix: `project/${pathName}`})],
      minify: true,
      sourcemap: false,
    }
  }

  build(options)
    .then(result => {
      resultLog(result, applicationName, isDevServer)
    })
    .catch(err => {
      console.error('Build error ' + err)
      throw err
    })
    .finally(() => {
      finalization(options)
    })
})()

function pathFromRootDir(...pathParts: string[]): string {
  return path.join(__dirname, '..', '..', ...pathParts)
}

async function loadConfig(configPath): Promise<BuilderOptions> {
  fs.stat(configPath, (error, stats) => {
    if (error) {
      console.error(error)
      process.exit(1)
    } else if (stats.isDirectory()) {
      console.error('config is a directory')
      process.exit(1)
    }
  })

  return (await import(configPath)).default
}

function resultLog(result: BuildResult, applicationName, isDevServer = false): void {
  return isDevServer ? console.log({...result}) : console.log('\n' + '\x1b[32m' + 'Success build: ' + applicationName + '\x1b[0m')
}

function watcher(emitter: EventEmitter): WatchMode {
  return {
    onRebuild(error, result) {
      if (error) {
        console.error(error)
      } else {
        console.log('build...')
        emitter.emit('refresh')
      }
    },
  }
}

function finalization(options: BuildOptions): void {
  const {outdir} = options
  if (outdir?.includes('back-end')) fs.copyFileSync(pathFromRootDir('node_modules', 'sql.js', 'dist', 'sql-wasm.wasm'), path.join(outdir, 'sql-wasm.wasm'))
}
