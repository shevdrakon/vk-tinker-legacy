require('babel-polyfill')

const minimist = require('minimist')
const Logger = require('./utils/logger')
const Application = require('./application/app.js')

process.on('uncaughtException', (err) => {
    let request, error;

    if (err instanceof Error) {
        error = err
        request = {}
    } else if (err.headers) {
        error = {}
        request = err
    }

    Logger.error(err.message)
    Logger.error(err.stack)
})

const args = minimist(process.argv.slice(2))

if(!args.env)
    args.env = process.env.NODE_ENV

const app = new Application(args, process.env.PORT)

app.init().listen()