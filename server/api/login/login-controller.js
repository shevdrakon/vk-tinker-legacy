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

    setAuthCookie() {
        const access_token = this.request.params.access_token
        const ttl = 24 * 60 * 60 * 1000

       // this.response.cookie('vk-tinker-idp', access_token, {maxAge: ttl})

        return this
    }
}

module.exports = LoginController