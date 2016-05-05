'use strict';

var webpack = require('webpack');

module.exports = {
    entry: {
        'is-url-umd': './index.js',
        'is-url-umd.min': './index.js'
    },

    devtool: 'source-map',

    output: {
        library: 'isURL',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        filename: '[name].js',
        path: 'dist/'
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        })
    ]
};
