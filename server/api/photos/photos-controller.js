const BaseController = require('../../lib/base-controller')
const PhotosService = require('../vk-api/photos-service')

class PhotosController extends BaseController {
    constructor(request, response, next, configuration) {
        super(request, response, next, configuration)

        this.configuration = configuration
    }

    getAll(payload) {
        const service = new PhotosService()
        const p = payload.albumId
            ? service.getByAlbum(payload)
            : service.getAll(payload)

        return p.then((response) => {
            return {
                count: response.count,
                items: response.items
            }
        })
    }

    getAlbums(payload) {
        return new PhotosService()
            .getAlbums(payload)
    }
}

module.exports = PhotosController