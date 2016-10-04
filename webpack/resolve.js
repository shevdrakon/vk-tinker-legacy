var path = require('path')

module.exports = {
    root: path.resolve(path.join(__dirname, '../')),
    alias: {
        'modules': 'public/js/modules',
        'base': 'public/js/base',
        'mixins': 'public/js/mixins',
        'plugins': 'public/js/plugins',
        'utils': 'public/js/utils',
        'styles': 'public/styles',
        'application': 'public/js/application',

        'mixwith': 'public/react/utils/mixwith.js',
    }
}