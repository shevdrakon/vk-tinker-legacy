import Session from 'express-session'
import Passport from 'passport'

import {Strategy as CustomStrategy} from 'passport-custom'

import LoginController from '../api/login/login-controller'

const configureStrategy = () => {

    Passport.serializeUser(function (user, done) {
        done(null, user)
    })

    Passport.deserializeUser(function (obj, done) {
        done(null, obj)
    })

    Passport.use('custom', new CustomStrategy(
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

export default (app, configuration) => {
    configureStrategy(configuration)

    app.use(Session({
        resave: false,
        saveUninitialized: false,
        secret: 'keyboard cat'
    }))

// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
    app.use(Passport.initialize())
    app.use(Passport.session())

    app.use(function (req, res, next) {
        if (!req.user) {
            req.user = {
                photo_50: 'https://pp.userapi.com/c627916/v627916081/3b77a/W9MizWYPYMg.jpg',
                access_token: ''
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