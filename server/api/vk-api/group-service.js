const VkApiServiceBase = require('./vk-api-service-base')

class GroupService extends VkApiServiceBase {
    constructor() {
        super({})
    }

    getBanned({top, skip, groupId, access_token}) {
        const url = this.getUrl('groups.getBanned', {
            group_id: groupId,
            count: top,
            offset: skip,
            access_token
        })

        return this.get(url)
            .then(this.handleError)
            .then(response => {
                return response.response
            })
    }
}

module.exports = GroupService