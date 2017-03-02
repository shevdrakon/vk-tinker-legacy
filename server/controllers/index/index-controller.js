'use strict';

const BaseController = require('../../lib/base-controller')

class Controller extends BaseController {
    constructor(request, response, next, configuration) {
        super(request, response, next, configuration)

        this.configuration = configuration
    }

    index() {
        this.response.render('index.jsx', {
            apiUrl: this.configuration.apiUrl,
            assetsRoot: this.configuration.assetsRoot,
            stats: this.configuration.stats,
            vkAppId: this.configuration.app_id
        })
    }
}

module.exports = Controller