const path = require('path');
const common = require('./webpack.common.config.js');
const Merge = require('webpack-merge');
const webpack=require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = Merge(common,{
    plugins: [
        new HtmlWebpackPlugin({
            title: "数字货币一站式投资服务平台",
            template: path.join(__dirname, 'index.ejs'),
            publicPath: 'https://investdigital.info/',
            filename: 'index.html',
            inject: 'body',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            chunksSortMode: 'dependency'
        }),
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: '"production"'}
        })
    ],
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: './',
    }
});
