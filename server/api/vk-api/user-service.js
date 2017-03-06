const VkApiService = require('./vk-api-service')

class UserSevice extends VkApiService {
    constructor() {
        super({})
    }

    getCurrentUserInfo({access_token}) {
        const url = `https://api.vk.com/method/users.get?fields=photo_50&access_token=${access_token}`

        return this.get(url)
            .then(this.handleError)
            .then(response => {
                return response.response[0]
            })
    }
}

module.exports = UserSevice