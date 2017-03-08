const BaseController = require('../../lib/base-controller')
const GroupService = require('../vk-api/group-service')

class BlacklistController extends BaseController {
    constructor(request, response, next, configuration) {
        super(request, response, next, configuration)

        this.configuration = configuration
    }

    getBanned(payload) {
        return new GroupService()
            .getBanned(payload)
            .then((response) => {

            debugger
                const [count, ...items] = response

                // return {
                //     count: response[0],
                //     items: [...response]
                // }
            })
    }
}

module.exports = BlacklistController