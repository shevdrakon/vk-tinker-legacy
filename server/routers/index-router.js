const express = require('express')
const {matchPath} = require('react-router')

const IndexController = require('../controllers/index/index-controller')

const routes = [
    '/',
    '/login',
    '/dashboard',
    '/blacklist',
    '/requests',
    '/sample'
];

module.exports = function (configuration) {
    const router = express.Router()

    router.get('*', (req, res, next) => {
        const match = routes.reduce((acc, route) => matchPath(req.url, route, {exact: true}) || acc, null);

        if (match) {
            new IndexController(req, res, next, configuration).index()
        }
        else {
            res.status(404);
        }
    })

    return router
}