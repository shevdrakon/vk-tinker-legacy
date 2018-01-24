import express from 'express'
//const passport = require('passport')
import RequestsController from './requests-controller'

module.exports = (configuration) => {
    const router = express.Router()

    router.get('/requests', (req, res, next) => {
        const payload = {
            access_token: req.user.access_token,
            skip: Number(req.query.skip),
            top: Number(req.query.top),
            groupId: configuration.groupId
        }

        const controller = new RequestsController(req, res, next, configuration)
        controller.getRequests(payload)
            .then((response) => {
                res.json(response)
            })
    })

    router.get('/requests/approve', (req, res, next) => {
        const payload = {
            access_token: req.user.access_token,
            groupId: configuration.groupId,
            users: req.query.users
        }

        const controller = new RequestsController(req, res, next, configuration)
        controller.approveRequests(payload)
            .then((response) => {
                res.json(response)
            })
    })

    return router
}