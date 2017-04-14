const BaseController = require('../../lib/base-controller')
const GroupService = require('../vk-api/group-service')

class RequestsController extends BaseController {
    constructor(request, response, next, configuration) {
        super(request, response, next, configuration)

        this.configuration = configuration
    }

    getRequests(payload) {
        let requests = {}
        return new GroupService()
            .getRequests(payload)
         .then((response) => {

                const {count, items} = response

                return {
                    count,
                    items
                }
                return response
            })
            .catch((error) => {
                this.end(null, 500)

                throw error
            })

    }
}

module.exports = RequestsController