const express = require('express')
const passport = require('passport')

module.exports = () => {
    const router = express.Router()

    router.get('/login/:access_token', passport.authenticate('custom'), (req, res, next) => {
        res.status(200)
        const user = req.user
        delete user.access_token

        res.send(user)
    })

    return router
}