import BaseController from '../../lib/base-controller'

import GroupService from '../vk-api/group-service'
import UserService from '../vk-api/user-service'

export default class BlacklistController extends BaseController {
    constructor(request, response, next, configuration) {
        super(request, response, next, configuration)
    }

    getBanned(payload) {
        let banned = {}

        return new GroupService()
            .getBanned(payload)
            .then((response) => {
                banned = response

                const adminIds = response.items.reduce((previous, user) => {
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
                    result[current.id] = current

                    return result
                }, {})

                const count = banned.count
                const items = banned.items

                items.forEach((user) => {
                    const adminId = user.ban_info.admin_id
                    user.ban_info.admin = hash[adminId]
                })

                return {
                    count,
                    items
                }
            })
    }
}