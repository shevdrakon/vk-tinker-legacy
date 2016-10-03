var ConfirmitLogger = require('./lib/ConfirmitLogger');
var Logger = require('./util/logger');
var Application = require('./application/app.js');

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
    //ConfirmitLogger.logError(configuration, __filename, request, error);
});

var environment;
if (process.argv && process.argv[2]) {
    environment = process.argv[2];
}

if (!environment)
    environment = process.env.HUB_ENV;

var app = new Application(environment, process.env.PORT);

app.init().listen();