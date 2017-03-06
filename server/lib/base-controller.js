function BaseController(request, response, next) {
    this.request = request;
    this.response = response;
    this.next = next;

    this._responseBody = null;
    this._responseStatus = null;
}

BaseController.prototype.end = function (responseData, statusCode, headers) {
    var requestMethod = this.request.method.toUpperCase();

    statusCode = statusCode || this._responseStatus || 200;
    headers = headers || {};
    responseData = responseData || this._responseBody || '';

    if (!responseData.length && !this._responseStatus) {
        switch (requestMethod) {
            case 'PUT':
            case 'DELETE':
                statusCode = 204;
                break;

            case 'POST':
                statusCode = 201;
                break;
        }
    }

    var date = new Date();
    date.setFullYear(1970);

    if (requestMethod === 'GET') {
        headers['cache-control'] = 'max-age=0';
        headers['expires'] = date.toUTCString();
    }

    for (var header in headers) {
        this.response.setHeader(header, headers[header]);
    }
    this.response.status(statusCode);

    if (typeof responseData === 'object') {
        this.response.json(responseData);
    } else {
        if (!this.response.getHeader('Content-type')) {
            this.response.setHeader('Content-Type', 'text/plain');
        }
        this.response.setHeader('Content-Length', responseData.length);

        this.response.send(responseData);
    }
};

/**
 * @param {object|string} body
 */
BaseController.prototype.setResponseBody = function (body) {
    this._responseBody = body;

    return this;
};

/**
 * @param {number} statusCode
 */
BaseController.prototype.setResponseStatus = function (statusCode) {
    this._responseStatus = statusCode;

    return this;
};

BaseController.prototype.handleError = function (error, message) {
    this.setResponseStatus(error.statusCode);
    this.setResponseBody(message || error.body);

    return this;
};

module.exports = BaseController;