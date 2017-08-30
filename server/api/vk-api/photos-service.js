const VkApiServiceBase = require('./vk-api-service-base')
const Logger = require('../../utils/logger')

class PhotosService extends VkApiServiceBase {
    constructor() {
        super({})
    }

    getByAlbum({top, skip, groupId, albumId, access_token}) {
        const url = this.getUrl('photos.get', {
            owner_id: '-' + groupId,
            album_id: albumId,
            count: top,
            offset: skip,
            extended: 1,
            access_token
        })

        return this.get(url)
            .then(this.handleError)
            .then(response => {
                return response.response
            })
    }

    getAll({top, skip, albumId, access_token}) {
        const url = this.getUrl('execute.photosWithMeta', {
            offset: skip,
            count: top,
            album_id: albumId,
            access_token
        })

        Logger.log(`exec: ${url}.`)

        return this.get(url)
            .then(this.handleError)
            .then(response => {
                return response.response
            })
    }

    getByCommentsBatch({skip, albumId, access_token}) {
        const url = this.getUrl('execute.photosCommentsBatch', {
            offset: skip,
            album_id: albumId,
            access_token
        })

        Logger.log("exec: " + url)

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

        // return Promise.resolve(
        //     {
        //         "count": 2,
        //         "items": [
        //             {
        //                 aid: 12345,
        //                 title: "album1"
        //             },
        //             {
        //                 aid: 12346,
        //                 title: "album 2"
        //             }
        //         ]
        //     })

        return this.get(url)
            .then(this.handleError)
            .then(response => {
                return response.response
            })
    }

    getById({groupId, access_token, ids}) {
        const photos = ids.reduce((str, id) => {
            if (str.length)
                str += ','

            str += `-${groupId}_${id}`

            return str
        }, '')

        const url = this.getUrl('photos.getById', {
            photos,
            access_token
        })

        return this.get(url)
            .then(this.handleError)
            .then(response => {
                return response.response
            })
    }
}

module.exports = PhotosService