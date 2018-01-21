import express from 'express'
import path from 'path'

import ApiRouterFactory from './../routers/api-router-factory'
import IndexRouter from './../routers/index-router'

export default (app, configuration) => {
    const publicPath = path.join(__dirname, '../../public/assets')
    app.use(configuration.assetsRoot, express.static(publicPath))

    const templatePath = path.join(__dirname, '../../public')
    app.use(express.static(templatePath))

    ApiRouterFactory(app, configuration)
    //app.use(configuration.apiUrl, ApiRouterFactory(configuration))
    app.use('/', IndexRouter(configuration))
}