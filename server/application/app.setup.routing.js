'use strict';

const express = require('express')
const path = require('path')
const glob = require('glob')

module.exports = function (app, configurationManager) {
    const configuration = configurationManager.configuration

    const publicPath = path.join(__dirname, '../../public/assets')
    app.use(configuration.assetsRoot, express.static(publicPath))

    const templatePath = path.join(__dirname, '../../public')
    app.use(express.static(templatePath))

    const controllersPath = path.join(__dirname, '../controllers/*.js')
    const controllers = glob.sync(controllersPath);
    controllers.forEach(function (controller) {
        require(controller)(app, configuration);
    });
}