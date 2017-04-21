const VkApiServiceBase = require('./vk-api-service-base')

class PhotosService extends VkApiServiceBase {
    constructor() {
        super({})
    }

    getAll({top, skip, groupId, access_token}) {
        const url = this.getUrl('photos.getAll', {
            owner_id: '-' + groupId,
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

    getAlbums({groupId, top, skip, access_token}) {
        const url = this.getUrl('photos.getAlbums', {
            owner_id: '-' + groupId,
            count: top,
            offset: skip,
            need_covers: true,
            access_token
        })

        return Promise.resolve([
            {
                aid: 12345,
                title: "album1"
            },
            {
                aid: 12346,
                title: "album 2"
            }
        ])/*this.get(url)
            .then(this.handleError)
            .then(response => {
                return response.response
            })*/
    }
}

module.exports = PhotosService