'use strict';

const express = require('express')
const router = express.Router()
const path = require('path')

const {ensureAuthenticated} = require('../utils/ensure-authenticated')

router.get('/home', ensureAuthenticated, function (req, res) {
    res.send('hello')
});

router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
});

module.exports = (app) => {
    app.use('/', router)
}