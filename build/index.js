const chalk = require('chalk')
const { run } = require('runjs')
const config = require('../vue.config.js')
const rawArgv = process.argv.slice(0)
const args = rawArgv.join(' ')

if (process.env.npm_conifg_preview || rawArg.includes('--preview')) {
  const report = rawArgv.includes('report')

  run(`vue-cli-service build ${args}`)

  const port = 9526
  const publicPath = config.publicPath

  var connect = require('connect')
  var serveStatic = require('serve-static')
  const app = connect()

  app.use(
    publicPath,
    serveStatic('./dist', {
      index: ['index.html', '/']
    })
  )

  app.listen(port, function () {
    console.log(chalk.green(`> Preview at http://localhost${port}${publicPath}`))
    if (report) {
      console.log(chalk.green(`> Preview at localhost${port}${publicPath}report.html`))
    }
  })
} else {
  run(`run-cli-server buils${args}`)
}