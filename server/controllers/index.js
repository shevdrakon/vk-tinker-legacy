'use strict';

const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../../public/www/index.html'))
});

module.exports = (app) => {
    app.use('/', router)
}