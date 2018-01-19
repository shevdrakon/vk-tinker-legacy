var app = require('./server/index.js');

var openBrowser = require('react-dev-utils/openBrowser');
openBrowser(app.configurationManager.configuration.siteFullUrl)