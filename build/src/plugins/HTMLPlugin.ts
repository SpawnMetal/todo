import {Plugin} from 'esbuild'
import {writeFile} from 'fs/promises'
import * as path from 'path'

interface HTMLPluginOptions {
  isDev?: boolean
  template?: string
  title?: string
  globalPrefix?: string
  jsPath?: string[]
  cssPath?: string[]
  serverPort?: number
}

const renderHtml = (options: HTMLPluginOptions): string => {
  const {isDev, template, title, jsPath, cssPath, globalPrefix, serverPort} = options
  return (
    template ||
    `
      <!doctype html>
      <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport"
                    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
              <meta http-equiv="X-UA-Compatible" content="ie=edge">
              <title>${title}</title>
              ${cssPath?.map(path => `<link href="${!isDev ? `/${globalPrefix}/` : ''}${path}" rel="stylesheet">`).join(' ')}
          </head>
          <body style="margin: 0">
              <div id="root"></div>
              ${jsPath?.map(path => `<script src="${!isDev ? `/${globalPrefix}/` : ''}${path}"></script>`).join(' ')}
              ${
                isDev
                  ? `<script>
              const evtSource = new EventSource('http://localhost:${serverPort}/hot_reload')
             evtSource.onopen = function () { console.log('hot reload gate active') }
             evtSource.onerror = function () { console.log('error hot reload gate') }
             evtSource.onmessage = function () { 
                  console.log('message')
                  window.location.reload();
              }
             
             </script>`
                  : ``
              }
          </body>
      </html>
                    `
  )
}

const preparePaths = (outputs: string[]) => {
  return outputs.reduce<Array<string[]>>(
    (acc, path) => {
      const [js, css] = acc
      const splittedFileName = path.split('/').pop()

      if (splittedFileName?.endsWith('.js')) {
        js.push(splittedFileName)
      } else if (splittedFileName?.endsWith('.css')) {
        css.push(splittedFileName)
      }
      return acc
    },
    [[], []],
  )
}

export const HTMLPlugin = (options: HTMLPluginOptions): Plugin => {
  return {
    name: 'HTMLPlugin',
    setup(build) {
      const outdir = build.initialOptions.outdir

      build.onEnd(async result => {
        const outputs = result.metafile?.outputs
        const [jsPath, cssPath] = preparePaths(Object.keys(outputs || {}))

        if (outdir) {
          await writeFile(path.resolve(outdir, 'index.html'), renderHtml({jsPath, cssPath, ...options}))
        }
      })
    },
  }
}
