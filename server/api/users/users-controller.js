import BaseController from '../../lib/base-controller'
import UserService from '../vk-api/user-service'

export default class PhotosController extends BaseController {
    constructor(request, response, next, configuration) {
        super(request, response, next, configuration)

        this.configuration = configuration
    }

    getUsersGroups(payload) {
        return new UserService().getUsersGroups(payload)
    }
}