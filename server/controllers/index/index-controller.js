'use strict';

const BaseController = require('../../lib/base-controller')

class Controller extends BaseController {
    constructor(request, response, next, configuration) {
        super(request, response, next, configuration)

        this.configuration = configuration
    }

    index() {

        this.response.render('index', {
            assetsRoot: this.configuration.assetsRoot,
            stats: this.configuration.stats
        })
    }
}

module.exports = Controller