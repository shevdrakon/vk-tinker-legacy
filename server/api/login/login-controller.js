const BaseController = require('../../lib/base-controller')
const UserService = require('../vk-api/user-service')

class LoginController extends BaseController {
    constructor(request, response, next, configuration) {
        super(request, response, next, configuration)

        this.configuration = configuration
    }

    tryToLogin() {
        const access_token = this.request.params.access_token

        return new UserService()
            .getCurrentUserInfo({access_token})
    }
}

module.exports = LoginController