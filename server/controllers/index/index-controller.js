import BaseController from '../../lib/base-controller'
import GroupService from '../../api/vk-api/group-service'

export default class IndexController extends BaseController {
    constructor(request, response, next, configuration) {
        super(request, response, next, configuration)
    }

    index() {
        const payload = {
            access_token: this.request.user.access_token,
            skip: 0,
            top: 20,
            groupId: this.configuration.groupId
        }

        new GroupService()
            .getRequests(payload)
            .then((response) => {
                return response.count
            }, () => {
                return 0
            })
            .then((requestsCount) => {
                this.response.render('index.jsx', {
                    apiUrl: this.configuration.apiUrl,
                    assetsRoot: this.configuration.assetsRoot,
                    stats: this.configuration.stats,
                    vkAppId: this.configuration.app_id,
                    user: this.request.user,
                    status: {
                        requestsCount: requestsCount
                    }
                })
            })
    }
}