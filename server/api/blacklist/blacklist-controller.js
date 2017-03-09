const BaseController = require('../../lib/base-controller')
const GroupService = require('../vk-api/group-service')
const UserService = require('../vk-api/user-service')

class BlacklistController extends BaseController {
    constructor(request, response, next, configuration) {
        super(request, response, next, configuration)

        this.configuration = configuration
    }

    getBanned(payload) {
        let banned = {}

        return new GroupService()
            .getBanned(payload)
            .then((response) => {
                banned = response

                const [, ...items] = response
                const adminIds = items.reduce((previous, user) => {
                    const adminId = user.ban_info.admin_id

                    if (previous.indexOf(adminId) === -1)
                        previous.push(adminId)

                    return [...previous]
                }, [])

                return new UserService().getUsers({
                    userIds: adminIds.join(),
                    access_token: payload.access_token
                })
            })
            .then((response) => {
                const hash = response.reduce((result, current) => {
                    result[current.uid] = current

                    return result
                }, {})

                const [count, ...items] = banned

                items.forEach((user) => {
                    const adminId = user.ban_info.admin_id
                    user.ban_info.admin = hash[adminId]
                })

                return {
                    count,
                    items
                }
            })
            .catch((error) => {
                this.end(null, 500)

                throw error
            })
    }
}

module.exports = BlacklistController