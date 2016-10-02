"use strict";

import express from 'express'
import config from './config/config'

var app = express();

require('./config/express')(app, config);

app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});

