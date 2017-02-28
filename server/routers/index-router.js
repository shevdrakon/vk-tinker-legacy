const express = require('express')
const {match, createRoutes} = require('react-router')

const routes = require('../../public/react/routes.jsx')
const IndexController = require('../controllers/index/index-controller')

module.exports = function (configuration) {
    const router = express.Router()

    router.get('*', (req, res, next) => {
        match({
            routes: createRoutes(routes()),
            location: req.url
        }, (error, redirectLocation, renderProps) => {
            if (error && error.statusCode !== 404) {
                next(error)
            } else if (redirectLocation) {
                res.redirect(302, redirectLocation.pathname + redirectLocation.search)
            } else if (renderProps) {
                new IndexController(req, res, next, configuration).index()
            } else {
                next()
            }
        })
    })

    return router
}