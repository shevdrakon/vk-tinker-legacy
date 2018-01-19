import fs from 'fs'
import path from 'path'

export default class ConfigurationManager {
    static get defaults() {
        return {
            // app_id: 5653171, // vk application Id
            app_id: 5737599, // vk application Id
            app_secret: 'jqbQwO3G69OlVzU7Fp3I', // vk application secret key,
            groupId: 106168410,
            siteFullUrl: 'http://localhost:1338'
        }
    }

    constructor(args) {
        this.env = args.env
        this.assetsRoot = args.assetsRoot
        //this.statsPath = args.statsPath
        this.configuration = this.load()
    }

    load() {
        const configurationFilePath = this.getConfigurationFilePath()
        if (!fs.existsSync(configurationFilePath))
            throw new Error('Could not find the configuration file.')

        return this.loadDefaults(require(configurationFilePath))
    }

    loadDefaults(config) {
        const result = Object.assign({},
            ConfigurationManager.defaults,
            config)

        result.assetsRoot = this.assetsRoot || result.assetsRoot
        result.stats = require(path.join(__dirname, `../stats/stats.${this.env}.json`))

        return result
    }

    getConfigurationFilePath() {
        const fileName = this.env + '.json'

        return path.join(__dirname, fileName)
    }
}