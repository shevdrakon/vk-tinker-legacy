import 'babel-polyfill'
import minimist from 'minimist'

import Logger from './utils/logger'
import Application from './application/app'

process.on('uncaughtException', (err) => {
    // let request, error;
    //
    // if (err instanceof Error) {
    //     error = err
    //     request = {}
    // } else if (err.headers) {
    //     error = {}
    //     request = err
    // }

    Logger.error(err.message)
    Logger.error(err.stack)
})

const args = minimist(process.argv.slice(2))

if(!args.env)
    args.env = process.env.NODE_ENV

const app = new Application(args, process.env.PORT)

// const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware');
// const config = require('../webpack/webpack.development');
// const compiler = webpack(config);
//
// // Tell express to use the webpack-dev-middleware and use the webpack.config.js
// // configuration file as a base.
// app.app.use(webpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath
// }));

app.init().listen()