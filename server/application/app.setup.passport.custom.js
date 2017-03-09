'use strict'

const session = require('express-session')
const passport = require('passport')
const CustomStrategy = require('passport-custom').Strategy

const LoginController = require('../api/login/login-controller')

const configureStrategy = () => {

    passport.serializeUser(function (user, done) {
        done(null, user)
    })

    passport.deserializeUser(function (obj, done) {
        done(null, obj)
    })

    passport.use('custom', new CustomStrategy(
        function (req, callback) {
            const controller = new LoginController(req)

            controller
                .tryToLogin()
                .then(response => {
                    response.access_token = req.params.access_token
                    callback(null, response)
                })
                .catch(() => {
                    callback(null, false)
                })
        }
    ))
}

module.exports = function (app, configuration) {
    configureStrategy(configuration)

    app.use(session({
        resave: false,
        saveUninitialized: false,
        secret: 'keyboard cat'
    }))

// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
    app.use(passport.initialize())
    app.use(passport.session())

    app.use(function (req, res, next) {
        if (!req.user) {
            req.user = {
                access_token: 'b3ac5def2b653718b5bed667767807f643b49b32863551a9177587a1d1b6dd35c158265f6f2c9dcc37648'
            }
        }

        next()
    })

    //app.use('', passport.authenticate('custom', {}))

    // GET /auth/vk
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in VK authentication will involve
//   redirecting the user to vk.com.  After authorization, VK will
//   redirect the user back to this application at /auth/vk/callback
//     app.use('*',
//         passport.authenticate('custom', {}),
//         (req, res) => {
//         debugger
//             // The request will be redirected to VK for authentication, so this
//             // function will not be called.
//         })

};