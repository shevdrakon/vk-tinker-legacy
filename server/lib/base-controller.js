export default class BaseController {
    constructor(request, response, next, configuration) {
        this.request = request
        this.response = response
        this.next = next
        this.configuration = configuration
    }

    end(responseData, statusCode, headers) {
        const requestMethod = this.request.method.toUpperCase()

        statusCode = statusCode || 200
        headers = headers || {}
        responseData = responseData || ''

        if (!responseData) {
            switch (requestMethod) {
                case 'PUT':
                case 'DELETE':
                case 'POST':
                case 'PATCH': {
                    statusCode = 204
                    break
                }
                default:
                    statusCode = 200
            }
        }

        const date = new Date()
        date.setFullYear(1970)

        if (requestMethod === 'GET') {
            headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
            headers['Pragma'] = 'no-cache'
            headers['Expires'] = 0
        }

        for (const header in headers) {
            this.response.setHeader(header, headers[header])
        }
        this.response.status(statusCode)

        if (typeof responseData === 'object') {
            this.response.json(responseData)
        } else {
            if (!this.response.getHeader('Content-type')) {
                this.response.setHeader('Content-Type', 'text/plain')
            }
            this.response.setHeader('Content-Length', responseData.length)

            this.response.send(responseData)
        }
    }
}