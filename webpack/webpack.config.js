const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const resolve = require('./resolve')

module.exports = (config) => {
    return {
        cache: true,
        devtool: config.devtool,
        entry: {
            'vendor': ['babel-polyfill', 'jquery', 'react', 'react-mdl', 'mobx', 'mobx-react'],
            'main': ['public/js/main']
        },
        output: {
            publicPath: '/assets/',
            path: './public/assets',
            filename: config.filename,
            chunkFilename: config.chunkFilename
        },
        module: {
            preLoaders: [
                {test: /\.jsx?$/, loader: 'eslint', exclude: /(node_modules|libs)/}
            ],
            loaders: [
                {
                    test: /\.jsx?$/,
                    exclude: /(node_modules|libs)/,
                    loader: 'babel',
                    query: {
                        cacheDirectory: true,
                    }
                },
                {test: /\.css$/, loader: 'style!css'},
                {test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass')},
                {
                    test: /\.html/,
                    loader: 'underscore-template'
                },
                {test: /\.json$/, loader: 'json'},
                {test: /\.png$/, loader: 'url?limit=1000&mimetype=image/png'},
                {test: /\.gif$/, loader: 'url?limit=1000&mimetype=image/gif'},
                {test: /\.woff2?(\?.+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
                {test: /\.ttf(\?.+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
                {test: /\.eot(\?.+)?$/, loader: 'file'},
                {test: /\.svg(\?.+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
            ]
        },
        resolve,
        plugins: [
            new CleanWebpackPlugin(['./public/assets'], {
                root: path.join(__dirname, '/..')
            }),
            new ExtractTextPlugin(config.cssFilename),
            // new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
            }),
            new webpack.optimize.CommonsChunkPlugin('vendor', config.chunkFilename),
            new webpack.optimize.CommonsChunkPlugin({
                children: true,
                async: true,
            }),
        ].concat(config.plugins || [])
    }
}