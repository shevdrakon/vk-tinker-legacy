const BaseController = require('../../lib/base-controller')

const UserService = require('../vk-api/user-service')

class PhotosController extends BaseController {
    constructor(request, response, next, configuration) {
        super(request, response, next, configuration)

        this.configuration = configuration
    }

    getUsersGroups(payload) {
        return new UserService().getUsersGroups(payload)
    }
}

module.exports = PhotosController