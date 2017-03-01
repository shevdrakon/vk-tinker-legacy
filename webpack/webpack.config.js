const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (config) => {
    return {
        cache: true,
        devtool: config.devtool,
        entry: {
            'vendor': ['babel-polyfill', 'jquery', 'react', 'react-mdl', 'mobx', 'mobx-react'],
            'main': ['./public/react/entry']
        },
        output: {
            publicPath: config.publicPath || '/assets/',
            path: path.join(__dirname, '../public/assets'),
            // path: '/public/assets',
            // Add /* filename */ comments to generated require()s in the output.
            pathinfo: true,
            filename: config.filename,
            chunkFilename: config.chunkFilename
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    enforce: 'pre',
                    loader: 'eslint-loader',
                    exclude: /(node_modules|www)/,
                    options: {
                        cache: true,
                        emitWarning: true, // hmr is working only there no errors
                        formatter: require('eslint-friendly-formatter'),
                    }
                },
                {
                    test: /\.jsx?$/,
                    exclude: /(node_modules|www)/,
                    loader: 'babel-loader',
                    query: {
                        // This is a feature of `babel-loader` for webpack (not Babel itself).
                        // It enables caching results in ./node_modules/.cache/babel-loader/
                        // directory for faster rebuilds.
                        cacheDirectory: true,
                    }
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader']
                    })
                },
                {test: /\.png$/, loader: 'url-loader?limit=1000&mimetype=image/png'},
                {test: /\.gif$/, loader: 'url-loader?limit=1000&mimetype=image/gif'},
                {test: /\.woff2?(\?.+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
                {test: /\.ttf(\?.+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
                {test: /\.eot(\?.+)?$/, loader: 'file-loader'},
                {test: /\.svg(\?.+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'}
            ]
        },
        resolve: {
            modules: [
                //path.resolve(path.join(__dirname, '../')),
                path.join(__dirname, '../public'),
                'node_modules'
            ],
            extensions: ['.js', '.jsx'],
            // alias: {
            //     'modules': 'public/js/modules',
            //     'base': 'public/js/base',
            //     'mixins': 'public/js/mixins',
            //     'plugins': 'public/js/plugins',
            //     'utils': 'public/js/utils',
            //     'styles': 'public/styles',
            //     'application': 'public/js/application',
            //
            //     'mixwith': 'public/react/utils/mixwith.js',
            // }

            alias: {
                base: path.resolve(__dirname, '../public/js/base'),
                components: path.resolve(__dirname, '../public/react/components'),
                constants: path.resolve(__dirname, '../public/react/constants'),
                layout: path.resolve(__dirname, '../public/js/layout'),
                mixins: path.resolve(__dirname, '../public/js/mixins'),
                modules: path.resolve(__dirname, '../public/react/modules'),
                utils: path.resolve(__dirname, '../public/react/utils'),
                styles: path.resolve(__dirname, '../public/styles'),
            }
        },
        plugins: [
            // Makes some environment variables available in index.html.
            // The public URL is available as %PUBLIC_URL% in index.html, e.g.:
            // <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
            // In development, this will be an empty string.
            // new InterpolateHtmlPlugin(env.raw),

            new CleanWebpackPlugin(['./public/assets'], {
                root: path.join(__dirname, '/..')
            }),
            new ExtractTextPlugin(config.cssFilename),
            // new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
            // new webpack.ProvidePlugin({
            //     $: 'jquery',
            //     jQuery: 'jquery',
            //     'window.jQuery': 'jquery',
            // }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filename: config.chunkFilename
            }),
            new webpack.optimize.CommonsChunkPlugin({
                children: true,
                async: true,
            }),
        ].concat(config.plugins || []),
        devServer: {
            stats: {
                assets: false,
                chunks: false,
                chunkModules: false,
            }
        }
    }
}