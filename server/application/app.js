var express = require('express');
var Logger = require('../utils/logger');
var ConfigurationManager = require('../configuration/configuration-manager');

function Application(env, port) {
    this.configurationManager = new ConfigurationManager(env);

    if (port)
        this.configurationManager.configuration.serverPort = port;

    Logger.log('Loaded configuration\n', this.configurationManager.configuration);

    this.app = express();
}

Application.prototype.init = function () {
    const configuration = this.configurationManager.configuration

    require('./app.setup.security.js')(this.app, configuration);
    // require('./app.setup.passport.js')(this.app, configuration);
    require('./app.setup.rendering.js')(this.app);
    require('./app.setup.routing.js')(this.app, this.configurationManager);
    require('./app.setup.error-handling.js')(this.app, configuration);

    return this;
};

Application.prototype.listen = function (callback) {
    const configuration = this.configurationManager.configuration

    var result = this.server = this.app.listen(configuration.serverPort, callback);

    Logger.log('Application has been started on ' + configuration.serverPort + ' port.');

    return result;
};

Application.prototype.close = function (callback) {
    if (this.server) {
        this.server.close(callback);
        delete this.server;
    }
};

module.exports = Application;