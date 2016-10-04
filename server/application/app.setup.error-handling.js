'use strict';

var ConfirmitLogger = require('../lib/ConfirmitLogger');
var Logger = require('../util/logger');

module.exports = function (app, configuration) {
// Error handlers

// Since this is the last non-error-handling
// middleware use()d, we assume 404, as nothing else
// responded.

// $ curl http://localhost:3000/notfound
// $ curl http://localhost:3000/notfound -H "Accept: application/json"
// $ curl http://localhost:3000/notfound -H "Accept: text/plain"

    app.use(function (req, res, next) {
        res.status(404);

        // respond with html page
        if (req.accepts('html')) {
            res.send(`Route not found: ${req.url}`);
            return;
        }

        // respond with json
        if (req.accepts('json')) {
            res.send({error: 'Not found'});
            return;
        }

        // default to plain-text. send()
        res.type('txt').send('Not found');
    });

// error-handling middleware, take the same form
// as regular middleware, however they require an
// arity of 4, aka the signature (err, req, res, next).
// when connect has an error, it will invoke ONLY error-handling
// middleware.

// If we were to next() here any remaining non-error-handling
// middleware would then be executed, or if we next(err) to
// continue passing the error, only error-handling middleware
// would remain being executed, however here
// we simply respond with an error page.

    app.use(ConfirmitLogger.errorLogger(configuration, __filename));

    app.use(function (err, req, res, next) {
        if (err.status !== 401)
            return next(err);

        res.status(401);

        var loginUrl = `${configuration.loginUrl}?ReturnUrl=${req.protocol}://${req.get('host')}${req.url}`;

        // respond with html page
        if (req.accepts('html')) {
            res.redirect(loginUrl);
            return;
        }

        // respond with json
        if (req.accepts('json')) {
            res.send({error: 'Unauthorized'});
            return;
        }

        // default to plain-text. send()
        res.redirect(loginUrl);
    });

    app.use(function (err, req, res, next) {
        // we may use properties of the error object
        // here and next(err) appropriately, or if
        // we possibly recovered from the error, simply next().
        res.sendStatus(err.status || 500);

        Logger.error(err.message);
        Logger.error(err.stack);
    });
};