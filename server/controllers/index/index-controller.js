'use strict';

const BaseController = require('../../lib/base-controller')
const GroupService = require('../../api/vk-api/group-service')

class Controller extends BaseController {
    constructor(request, response, next, configuration) {
        super(request, response, next, configuration)

        this.configuration = configuration
    }

    index() {
        var payload = {
            access_token: this.request.user.access_token,
            skip: 0,
            top: 20,
            groupId: this.configuration.groupId
        }
        new GroupService().getRequests(payload).then((resp) => {
            var requestsCount =  2
            this.response.render('index.jsx', {
                apiUrl: this.configuration.apiUrl,
                assetsRoot: this.configuration.assetsRoot,
                stats: this.configuration.stats,
                vkAppId: this.configuration.app_id,
                user: this.request.user,
                status: {
                    requestsCount: resp.count
                }
            })
       })

    }
}

module.exports = Controller