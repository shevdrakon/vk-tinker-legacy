'use strict'

var consolidate = require('consolidate');
var path = require('path');
var bodyParser = require('body-parser');

module.exports = function (app, configurationManager) {
    app.set('views', path.join(__dirname, '../views'));

    app.engine('html', consolidate.underscore);
    app.set('view engine', 'html');

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({
        extended: true
    }))
}