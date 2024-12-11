import {BuildOptions} from 'esbuild'
import express from 'express'
import {EventEmitter} from 'stream'
import {BuilderOptions} from './build.option'

export async function initializeStaticServer(emitter: EventEmitter, options: BuildOptions, projectOptions: BuilderOptions) {
  const {outdir} = options
  const {applicationName, servePort} = projectOptions

  const app = express()

  if (outdir) app.use(express.static(outdir))

  app.get('/hot_reload', (req, res) => {
    const headers = {
      'Content-Type': 'text/event-stream',
      Connection: 'keep-alive',
      'Cache-Control': 'no-cache',
    }
    res.writeHead(200, headers)
    res.write('data: {}')

    emitter.on('refresh', () => {
      res.write('data: message \n\n')
    })
  })

  app.listen(servePort, () => {
    console.log('\n' + '\x1b[32m' + `Server ${applicationName} has been started at port ${servePort}` + '\x1b[0m')
  })
}
