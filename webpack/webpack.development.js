const webpack = require('webpack')
const config = require('./webpack.config')

module.exports = config({
    devtool: 'eval-source-map',
    filename: '[name].js',
    chunkFilename: "[name].js",
    cssFilename: '[name].css',
    publicPath: 'http://localhost:8080/assets',
    plugins: [
        new webpack.NamedModulesPlugin(),
    ]
})