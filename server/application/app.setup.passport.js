'use strict'

const session = require('express-session')
const passport = require('passport')
const VkStrategy = require('passport-vkontakte').Strategy

const configureStrategy = (configuration) => {
    if (!configuration.app_id || !configuration.app_secret)
        throw new Error('Set app_id and app_secret vars in configuration file')

    // Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete VK profile is serialized
//   and deserialized.
    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (obj, done) {
        done(null, obj);
    });

    // Use the VkStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and VK
//   profile), and invoke a callback with a user object.
    passport.use(new VkStrategy(
        {
            apiVersion: '5.60',
            clientID: configuration.app_id,
            clientSecret: configuration.app_secret,
            callbackURL: `http://localhost:1338/auth/vk/callback`,
            scope: ['email'],
            profileFields: ['email'],
        },
        function (accessToken, refreshToken, params, profile, done) {

            configuration.access_token = accessToken

            // asynchronous verification, for effect...
            process.nextTick(function () {

                // To keep the example simple, the user's VK profile is returned to
                // represent the logged-in user.  In a typical application, you would want
                // to associate the VK account with a user record in your database,
                // and return that user instead.
                return done(null, profile)
            })
        }
    ))
}

module.exports = function (app, configuration) {
    configureStrategy(configuration)

    app.use(session({
        resave: true,
        saveUninitialized: false,
        secret: 'keyboard cat'
    }))

// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
    app.use(passport.initialize())
    app.use(passport.session())

    // GET /auth/vk
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in VK authentication will involve
//   redirecting the user to vk.com.  After authorization, VK will
//   redirect the user back to this application at /auth/vk/callback
    app.get('/auth/vk',
        passport.authenticate('vkontakte', {
            display: 'page'
        }),
        (req, res) => {
            // The request will be redirected to VK for authentication, so this
            // function will not be called.
        })

    // GET /auth/vk/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
    app.get('/auth/vk/callback',
        passport.authenticate('vkontakte', {failureRedirect: '/login'}),
        (req, res) => {
            res.redirect('/')
        },
        (err, req, res, next) => {
            res.redirect('/login');
        })

    app.get('/logout', (req, res) => {
        req.logout()
        res.redirect('/')
    })
};