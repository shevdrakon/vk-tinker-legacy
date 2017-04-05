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
            fields: 'photo_50',
            access_token
        })

        return this.get(url)
            .then(this.handleError)
            .then(response => {
                return response.response
            })
    }

    getRequests({top, skip, groupId, access_token}) {
        const url = this.getUrl('groups.getRequests', {
            group_id: groupId,
            count: top,
            offset: skip,
            fields: 'photo_50,domain',
            access_token
        })

        return Promise.resolve({
            "count": 5,
            "items": [
                {
                    "id": 185014511,
                    "first_name": "Gendalf",
                    "last_name": "The Gray",
                    "domain": "id185014511",
                    "photo_50": "http://avatars.mitosa.net/ring/sm070.jpg"
                },
                {
                    "id": 185014512,
                    "first_name": "Gendalf",
                    "last_name": "The Gray",
                    "domain": "pendalf",
                    "photo_50": "http://avatars.mitosa.net/ring/sm070.jpg"
                },
                {
                    "id": 185014513,
                    "first_name": "Gendalf",
                    "last_name": "The Gray",
                    "domain": "gendel",
                    "photo_50": "http://avatars.mitosa.net/ring/sm070.jpg"
                },
                {
                    "id": 185014514,
                    "first_name": "Gendalf",
                    "last_name": "The Gray",
                    "domain": "id185014511",
                    "photo_50": "http://avatars.mitosa.net/ring/sm070.jpg"
                },
                {
                    "id": 185014515,
                    "first_name": "Gendalf",
                    "last_name": "The Gray",
                    "domain": "id185014511",
                    "photo_50": "http://avatars.mitosa.net/ring/sm070.jpg"
                }
            ]
        })



/*
        return this.get(url)
            .then(this.handleError)
            .then(response => {
                return response.response
            })
            */
    }
}

module.exports = GroupService