const express = require('express')
//const passport = require('passport')
const BlacklistController = require('./blacklist-controller')

module.exports = (configuration) => {
    const router = express.Router()

    router.get('/blacklist', (req, res, next) => {
        const payload = {
            access_token: req.user.access_token,
            skip: Number(req.query.skip),
            top: Number(req.query.top),
            groupId: configuration.groupId
        }
        const controller = new BlacklistController(req, res, next, configuration)
        controller
            .getBanned(payload)
            .then((response) => {
                res.json(response)
            })
            .catch((error) => {
                next(error)
            })
    })

    return router
}