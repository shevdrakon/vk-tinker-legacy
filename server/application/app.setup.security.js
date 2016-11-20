'use strict';

const cookieParser = require('cookie-parser')
const logger = require('morgan');

module.exports = function (app, configuration) {
    app.use(logger('dev'))
    app.use(cookieParser())

    // Disable reporting of framework information
    app.disable('x-powered-by')

}