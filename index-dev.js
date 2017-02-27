var app = require('./server/server.js');

var openBrowser = require('react-dev-utils/openBrowser');
openBrowser(app.configurationManager.configuration.siteFullUrl)