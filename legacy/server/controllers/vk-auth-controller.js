var express = require('express'),
    router = express.Router()

module.exports = function (app) {
    app.use('/', router);
};

router.get('/', function (req, res, next) {
    var articles = [];
    // res.render('index', {
    //     title: 'Generator-Express MVC',
    //     articles: articles
    // });
});
