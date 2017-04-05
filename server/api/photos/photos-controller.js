const BaseController = require('../../lib/base-controller')
const PhotosService = require('../vk-api/photos-service')

class BlacklistController extends BaseController {
    constructor(request, response, next, configuration) {
        super(request, response, next, configuration)

        this.configuration = configuration
    }

    getAll(payload) {
        return new PhotosService()
            .getAll(payload)
            .then((response) => {
                const [count, ...items] = response

                return {
                    count: count,
                    items
                }
            })
    }

    getAlbums(payload) {
        return new PhotosService().getAlbums(payload)
    }
}

module.exports = BlacklistController