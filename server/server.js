require('babel-polyfill')

var minimist = require('minimist')
var Logger = require('./utils/logger')
var Application = require('./application/app.js')

process.on('uncaughtException', (err) => {
    var request, error;

    if (err instanceof Error) {
        error = err;
        request = {};
    } else if (err.headers) {
        error = {};
        request = err;
    }

    Logger.error(err.message);
    Logger.error(err.stack);
});

var args = minimist(process.argv.slice(2));

if(!args.env)
    args.env = process.env.NODE_ENV;

var app = new Application(args, process.env.PORT);

app.init().listen();