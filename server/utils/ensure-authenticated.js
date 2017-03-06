module.exports = function (req, res, next) {
    if (req.isAuthenticated())
        return next()

    const error = new Error('Unauthorized.')
    error.status = 401
    error.response = response
    throw error
}