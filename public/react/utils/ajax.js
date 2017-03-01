export default ({fetch}) => {
    return {
        handleStatus(response) {
            if (response.status >= 200 && response.status < 300)
                return response

            const error = new Error(response.statusText)
            error.response = response
            error.status = response && response.status

            throw error
        },

        parseJSON(response) {
            if (response.status === 204)
                return undefined

            return response.json()
        },

        request(url, method, headers, data) {
            return fetch(url, {
                method,
                credentials: 'same-origin',
                headers: {
                    ...headers,
                    // [tokenHeader]: token,
                    // [initiatingServiceHeader]: initiatingService,
                },
                body: data
            }).then(this.handleStatus)
        },

        json(url, method, data) {
            return this.request(url, method, {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, JSON.stringify(data)).then(this.parseJSON)
        },

        patch(url, data) {
            return this.json(url, 'PATCH', data)
        },
        put(url, data) {
            return this.json(url, 'PUT', data)
        },
        post(url, data) {
            return this.json(url, 'POST', data)
        },
        del(url) {
            return this.json(url, 'DELETE')
        },
        get(url) {
            return this.json(url, 'GET')
        },

        upload(url, files = [], data = {}) {
            const formData = new FormData()

            files.forEach(file => {
                formData.append('file', file)
            })

            for (const name of Object.keys(data)) {
                const value = data[name]
                formData.append(name, value)
            }

            return this.request(url, 'POST', {}, formData)
        }
    }
}