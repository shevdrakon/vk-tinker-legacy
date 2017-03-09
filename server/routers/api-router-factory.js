const path = require('path')
const glob = require('glob')

module.exports = (app, configuration) => {

    const options = {
        cwd: path.join(__dirname, '../api'),
    }

    const apiUrl = configuration.apiUrl
    const files = glob.sync("**/*-router.js", options)

    if (files.length) {
        files.forEach((file) => {
            const router = require(options.cwd + '/' + file)(configuration)

            app.use(apiUrl, router)
        })
    }
}