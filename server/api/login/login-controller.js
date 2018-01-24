import BaseController from '../../lib/base-controller'
import UserService from '../vk-api/user-service'

export default class LoginController extends BaseController {
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