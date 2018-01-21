import path from 'path'
import glob from 'glob'

export default (app, configuration) => {

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