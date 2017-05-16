const BaseController = require('../../lib/base-controller')
const PhotosService = require('../vk-api/photos-service')

class PhotosController extends BaseController {
    constructor(request, response, next, configuration) {
        super(request, response, next, configuration)

        this.configuration = configuration
    }

    getAll(payload) {
        const service = new PhotosService()
        const p = service.getAll(payload)

        return p.then((response) => {
            response.items.forEach( photo => {
                const {comments} = photo

                const hash = comments.users.reduce((result,current) =>{
                    result[current.id] = current
                    return result
                },{})

                comments.items.forEach( comment => {
                    comment.user = hash[comment.from_id]
                })

            })

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