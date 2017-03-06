const express = require('express')
const path = require('path')

const ApiRouterFactory = require('./../routers/api-router-factory')
const IndexRouter = require('./../routers/index-router')

module.exports = function (app, configurationManager) {
    const configuration = configurationManager.configuration

    const publicPath = path.join(__dirname, '../../public/assets')
    app.use(configuration.assetsRoot, express.static(publicPath))

    const templatePath = path.join(__dirname, '../../public')
    app.use(express.static(templatePath))

    ApiRouterFactory(app, configuration)
    //app.use(configuration.apiUrl, ApiRouterFactory(configuration))
    app.use('/', IndexRouter(configuration))
}