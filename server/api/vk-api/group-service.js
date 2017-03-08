const VkApiService = require('./vk-api-service')

class UserSevice extends VkApiService {
    constructor() {
        super({})
    }

    getBanned({top, skip, groupId, access_token}) {
        const url = `https://api.vk.com/method/groups.getBanned?group_id=${groupId}&count=${top}&offset=${skip}&access_token=${access_token}`

        return this.get(url)
            .then(this.handleError)
            .then(response => {
                return response.response
            })
    }
}

module.exports = UserSevice