var Logger = module.exports = require('caroline');

Logger.info = function(message) {
    this.logMessage('info', message, {
        text : 'cyan',
        prefix : 'white'
    }, Array.prototype.slice.call(arguments, 1));
};

Logger.response = function(method, url, status_code, http_version, content_length, timeMs) {
    status_code = String(status_code);
    var isSuccess = status_code.indexOf('2') === 0;
    var isRedirect = status_code.indexOf('3') === 0;

    if (this.disabled && (isSuccess || isRedirect)) {
        return;
    }

    var statusColor = (isSuccess || isRedirect) ? 'green' : 'red';
    console.log(this.color[statusColor](method.toUpperCase()), this.logTimestamp() + this.color[statusColor](status_code),
        url, 'HTTP/' + http_version, content_length + 'bytes', '(' + timeMs + 'ms)');
};