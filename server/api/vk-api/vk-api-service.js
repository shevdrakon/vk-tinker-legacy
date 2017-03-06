const Logger = require('../../utils/logger')
const BaseService = require('../../lib/base-service')

class VkApiService extends BaseService {
    constructor() {
        super({})
    }

    handleError(response) {
        if (response.error) {
            const {error_msg, error_code} = response.error
            const error = new Error(`${error_msg} (code: ${error_code})`)

            error.status = error_code === 5 ? 401 : 500
            error.response = response

            Logger.log('Error', error)

            throw error
        }

        return response
    }
}

module.exports = VkApiService