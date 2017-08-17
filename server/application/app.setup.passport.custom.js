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
                photo_50: 'https://pp.userapi.com/c627916/v627916081/3b77a/W9MizWYPYMg.jpg',
                access_token: 'b003e51591129d3e39f12e80b16a0ccfb6b9a92012605861dc4610ff58583f450cd6065062187c6d2c83a'
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