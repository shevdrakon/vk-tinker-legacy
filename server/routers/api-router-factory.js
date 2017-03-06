const path = require('path')
const glob = require('glob')

// const walk = function(dir, done) {
//     const results = []
//
//     fs.readdir(dir, function(err, list) {
//         if (err)
//             return done(err)
//
//         const pending = list.length
//         if (!pending)
//             return done(null, results)
//
//         list.forEach(function(file) {
//             file = path.resolve(dir, file)
//
//             fs.stat(file, function(err, stat) {
//                 if (stat && stat.isDirectory()) {
//                     walk(file, function(err, res) {
//                         results = results.concat(res)
//                         if (!--pending) done(null, results)
//                     })
//                 } else {
//                     results.push(file)
//                     if (!--pending) done(null, results)
//                 }
//             });
//         });
//     });
// };

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