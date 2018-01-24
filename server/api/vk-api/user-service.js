import VkApiServiceBase from './vk-api-service-base'

export default class UserService extends VkApiServiceBase {
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

    getUsers({userIds, access_token}) {
        const url = this.getUrl('users.get', {
            user_ids: userIds,
            fields: 'photo_50',
            access_token
        })

        return this.get(url)
            .then(this.handleError)
            .then(response => {
                return response.response
            })
    }

    getUsersGroups({userIds, access_token}) {
        const url = this.getUrl('execute.usersGroups', {
            user_ids: userIds,
            access_token
        })

        return this.get(url)
            .then(this.handleError)
            .then(response => {
                return response.response
            })
    }
}