import express from 'express'
import {matchPath} from 'react-router'

import IndexController from '../controllers/index/index-controller'

const routes = [
    '/',
    '/login',
    '/dashboard',
    '/blacklist',
    '/requests',
    '/sample'
];

export default (configuration) => {
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