import express from 'express'

import Logger from '../utils/logger'
import ConfigurationManager from '../configuration/configuration-manager'

import SecurityConfig from './app.setup.security.js'
import PassportConfig from './app.setup.passport.custom.js'
import RenderingConfig from './app.setup.rendering.jsx.js'
import RoutingConfig from './app.setup.routing.js'
import ErrorHandlingConfig from './app.setup.error-handling.js'

export default class Application2 {
    constructor(env, port) {
        this.configurationManager = new ConfigurationManager(env, port);

        Logger.log('Loaded configuration\n', this.configurationManager.configuration);

        this.app = express();
    }

    init() {
        const configuration = this.configurationManager.configuration

        SecurityConfig(this.app, configuration)
        PassportConfig(this.app, configuration)
        RenderingConfig(this.app, configuration)

        RoutingConfig(this.app, configuration)
        ErrorHandlingConfig(this.app, configuration)

        return this;
    }

    listen() {
        const configuration = this.configurationManager.configuration
        const result = this.server = this.app.listen(configuration.serverPort);

        Logger.log(`Application has been started on ${configuration.serverPort} port.`);

        return result;
    }
}