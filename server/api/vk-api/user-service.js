const VkApiServiceBase = require('./vk-api-service-base')

class UserSevice extends VkApiServiceBase {
    constructor() {
        super({})
    }

    getCurrentUserInfo({access_token}) {
        const url = this.getUrl('users.get', {
            fields: 'photo_50',
            access_token
        })

        return this.get(url)
            .then(this.handleError)
            .then(response => {
                return response.response[0]
            })
    }
}

module.exports = UserSevice