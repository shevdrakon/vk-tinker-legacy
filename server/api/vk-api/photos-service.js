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

    getAll({top, skip, groupId, albumId, access_token}) {
        const method = albumId ? "get" : "getAll"
        const album_id = albumId ? `"album_id": ${albumId},` : ``

        const parameters = `{
                "owner_id": -${groupId},
                ${album_id}
                "count": ${top},
                "offset": ${skip}
            }`

        const script = `           
            var photosRequest = API.photos.${method}(${parameters});
            
            var count = photosRequest.count;
            var requestItems = photosRequest.items;
            var length = requestItems.length;
            var items = [];
            var i = 0;

            while( i < ${top} && i < length){
                var item = requestItems[i];
                var comments = API.photos.getComments({
                    "photo_id": item.id,
                    "owner_id": item.owner_id
                });
                
                var users = API.users.get({
                    "user_ids": comments.items@.from_id,
                    "fields": ["photo_50", "domain"]
                });
                               
                comments.users = users;
                
                item.comments = comments;
                items = items + [item];
                i=i+1;
            }

            var resp = {
                "count": count,
                "items": items
            };
            
            return resp;
        `
        const url = this.getUrl('execute', {
            code: script,
            access_token
        })

        Logger.log("exec: " + url)

        return this.get(url)
            .then(this.handleError)
            .then(response => {
                Logger.log("resp: " + JSON.stringify(response.response))
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