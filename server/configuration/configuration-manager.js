'use strict';

var fs = require('fs');
var path = require('path');

module.exports = class ConfigurationManager {
    static get DEFAULTS() {
        return {
            app_id: 5653171, // vk application Id
            app_secret: '57e5u3RCrakfO0nAGknE', // vk application secret key,
            siteFullUrl: 'http://localhost:1338'
        }
    }

    constructor(args) {
        this.env = args.env;
        this.assetsRoot = args.assetsRoot;
        //this.statsPath = args.statsPath;
        this.configuration = this.load();
    }

    load() {
        var configurationFilePath = this.getConfigurationFilePath();
        if (fs.existsSync(configurationFilePath))
            return this.loadDefaults(require(configurationFilePath));

        throw new Error('Could not find the configuration file.');
    }

    loadDefaults(config) {
        var result = Object.assign({},
            ConfigurationManager.DEFAULTS,
            config)

        result.assetsRoot = this.assetsRoot || result.assetsRoot
        //result.stats = require(path.join(__dirname, `../stats/stats.${this.env}.json`))

        return result;
    }

    getConfigurationFilePath() {
        var fileName = this.env + '.json';

        return path.join(__dirname, fileName);
    }
};