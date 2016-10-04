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
        'backbone-extensions': 'public/js/backbone-extensions',
        'application': 'public/js/application',
        'backbone.validation.bootstrap': 'public/libs/backbone/backbone.validation.bootstrap.js',
        'jquery-simplepagination': 'public/libs/jquery.simplepagination/jquery.simplePagination.js',
        'jquery-filedownload': 'public/libs/jquery.filedownload/jquery.fileDownload.js',
        'jquery-form': 'public/libs/jquery.form/jquery.form.js',
        'jquery-hoverintent': 'public/libs/jquery-hoverintent/jquery-hoverintent.js',
        'jquery-ui-datepicker': 'jquery-ui/ui/widgets/datepicker',
        'jquery-ui-draggable': 'jquery-ui/ui/widgets/draggable',
        'backbone.validation': 'backbone-validation',
        'backbone.localStorage': 'public/libs/backbone/backbone.localStorage.js',

        'mixwith': 'public/react/utils/mixwith.js',
    }
}