const express = require('express')
//const passport = require('passport')
const PhotosController = require('./photos-controller')

module.exports = (configuration) => {
    const router = express.Router()

    router.get('/photos', (req, res, next) => {
        const payload = {
            access_token: req.user.access_token,
            skip: Number(req.query.skip),
            top: Number(req.query.top),
            groupId: configuration.groupId
        }

        const controller = new PhotosController(req, res, next, configuration)

        controller
            .getAll(payload)
            .then((response) => {
                res.json(response)
            })
            .catch((error) => {
                next(error)
            })
    })

    router.get('/albums', (req, res, next) => {
        const payload = {
            access_token: req.user.access_token,
            groupId: configuration.groupId
        }

        if (req.query.skip)
            payload.skip = Number(req.query.skip)

        if (req.query.top)
            payload.top = Number(req.query.top)

        const controller = new PhotosController(req, res, next, configuration)

        controller
            .getAlbums(payload)
            .then((response) => {
                res.json(response)
            })
            .catch((error) => {
                next(error)
            })
    })

    return router
}