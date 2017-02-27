const webpack = require('webpack')
const StatsWriterPlugin = require('webpack-stats-plugin').StatsWriterPlugin

const config = require('./webpack.config')

module.exports = config({
    devtool: '',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    cssFilename: '[name].[chunkhash].css',
    plugins: [
        new StatsWriterPlugin({
            filename: '../../server/stats/stats.production.json'
        }),
        new webpack.optimize.UglifyJsPlugin({
            'screw-ie8': true,
            compress: {
                warnings: false,
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.NoErrorsPlugin()
    ]
})