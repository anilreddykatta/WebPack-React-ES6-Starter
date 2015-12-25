'use strict';

global.PATHS = {
    app: './app',
    build: './build'
};

global.ExtractTextPlugin = require('extract-text-webpack-plugin');

var devServer = require('./components/dev-server');
var plugins = require('./components/plugins');

var webpackConfig = {
    entry: PATHS.app,
    output: {
        path: PATHS.build,
        filename: 'app.js'
    },
    module: {
        preloaders: [{
            test: /\.scss$/,
            loaders: "import-glob-loader"
        }],
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: "babel",
            query: {
                presets: ['react']
            }
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css!sass!import-glob-loader')
        }]
    },
    devtool: "source-map",
    plugins: plugins,
    devServer: devServer
};

module.exports = webpackConfig;