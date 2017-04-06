const qs = require('qs')

const Logger = require('../../utils/logger')
const BaseService = require('../../lib/base-service')

class VkApiServiceBase extends BaseService {
    constructor() {
        super({})
    }

    get vkApiBaseUrl() {
        return 'https://api.vk.com/method'
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

    getUrl(method, payload) {
        Object.assign(payload, {v: '5.63'})

        const query = qs.stringify(payload, {skipNulls: true})

        return `${this.vkApiBaseUrl}/${method}?${query}`
    }
}

module.exports = VkApiServiceBase