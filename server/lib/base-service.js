'use strict';

const fetch = require('isomorphic-fetch')
const Logger = require('../utils/logger')

const handleStatus = (response) => {
    if (response.status >= 200 && response.status < 300)
        return response

    const error = new Error(response.statusText)
    error.status = response.status
    error.response = response
    throw error
}

const parseJSON = (response) => {
    if (response.status === 204)
        return undefined

    return response.json()
}

class BaseService {
    constructor(options) {
        this.options = options
        // this.apis = apis
    }

    request(url, method, headers, data) {
        const options = {
            method,
            headers: Object.assign({}, this.options.headers, headers),
            body: data
        }

        return fetch(url, options)
            .then(handleStatus)
            .catch(error => {
                Logger.log('Error', error);

                throw error
            })
    }

    json(url, method, data) {
        return this.request(url, method, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, JSON.stringify(data)).then(parseJSON)
    }

    patch(url, data) {
        return this.json(url, 'PATCH', data)
    }

    put(url, data) {
        return this.json(url, 'PUT', data)
    }

    post(url, data) {
        return this.json(url, 'POST', data)
    }

    del(url) {
        return this.json(url, 'DELETE')
    }

    get(url) {
        return this.json(url, 'GET')
    }
}

module.exports = BaseService