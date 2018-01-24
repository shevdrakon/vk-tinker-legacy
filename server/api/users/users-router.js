import express from 'express'
//const passport = require('passport')
import UsersController from './users-controller'

module.exports = (configuration) => {
    const router = express.Router()

    router.get('/users/groups', (req, res, next) => {
        const payload = {
            access_token: req.user.access_token,
            userIds: req.query.userIds
        }

        const controller = new UsersController(req, res, next, configuration)

        return controller.getUsersGroups(payload)
            .then((response) => {
                res.json(response)
            }).catch((error) => {
                next(error)
            })
    })

    return router
}