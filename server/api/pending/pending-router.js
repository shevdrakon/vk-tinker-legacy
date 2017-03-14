const express = require('express')
//const passport = require('passport')
const PendingController = require('./pending-controller')

module.exports = (configuration) => {
    const router = express.Router()

    router.get('/pending', (req, res, next) => {
        const payload = {
            access_token: req.user.access_token,
            skip: Number(req.query.skip),
            top: Number(req.query.top),
            groupId: configuration.groupId
        }

        const controller = new PendingController(req, res, next, configuration)
        controller.getPending(payload)
            .then((response) => {
                res.json(response)
            })
    })

    return router
}