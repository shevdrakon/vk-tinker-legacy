const BaseController = require('../../lib/base-controller')

const Logger = require('../../utils/logger')

const PhotosService = require('../vk-api/photos-service')
const UserService = require('../vk-api/user-service')

const {hasSoldOutText} = require('./utils')

class PhotosController extends BaseController {
    constructor(request, response, next, configuration) {
        super(request, response, next, configuration)

        this.configuration = configuration
    }

    fillUpPhoto(photo, index, offset) {
        const {comments} = photo
        const hash = {}

        comments.users.reduce((result, current) => {
            result[current.id] = current
            return result
        }, {})

        photo.isSoldOut = false
        photo.offset = offset + index

        comments.items.forEach(comment => {
            comment.user = hash[comment.from_id]

            if (!photo.isSoldOut && hasSoldOutText(comment.text))
                photo.isSoldOut = true
        })
    }

    getAll(payload) {
        const service = new PhotosService()

        return service
            .getAll(payload)
            .then((response) => {
                response.items.forEach((photo, index) => this.fillUpPhoto(photo, index, payload.skip))

                return {
                    count: response.count,
                    items: response.items
                }
            })
    }

    getAllSoldOutOnly({top, skip, albumId, access_token}) {
        const service = new PhotosService()

        let result = []

        const batchSize = 400
        const start = new Date()

        const loadByComments = (commentsOffset) => {
            return new Promise((resolve, reject) => {
                const nextPayload = {
                    skip: commentsOffset,
                    albumId,
                    access_token
                }

                service
                    .getByCommentsBatch(nextPayload)
                    .then((response) => {
                        return response
                            .comments
                            .filter(comment => hasSoldOutText(comment.text))
                            .map(c => c.pid)
                            .reduce((uniqueIds, id) => {
                                if (!uniqueIds.some(item => item === id))
                                    uniqueIds.push(id)
                                return uniqueIds
                            }, [])
                    })
                    .then((photoIds) => {
                        result = result.concat(photoIds)

                        if (result.length < top) {
                            Logger.log(`Received: ${photoIds.length}. Total: ${result.length}. Ask for more ...`)

                            setTimeout(() => {
                                loadByComments(commentsOffset + batchSize)
                                    .then((data) => {
                                        resolve(data)
                                    })
                                    .catch((error) => reject(error))
                            }, 200)
                        }
                        else
                            resolve(result)
                    })
                    .catch((error) => reject(error))
            })
                .then(items => {
                    Logger.log(`GET enough photos has taken: ${new Date() - start}`)
                    Logger.log(`Total received count: ${items.length}`)

                    return items.splice(0, top)
                })
                .then(photoIds => {
                    return service

                    debugger
                })
        }

        return loadByComments(skip).then((items) => {
            return {
                count: 999,
                items: items
            }
        })
    }

    getAlbums(payload) {
        return new PhotosService()
            .getAlbums(payload)
    }
}

module.exports = PhotosController