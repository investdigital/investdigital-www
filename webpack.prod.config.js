const path = require('path');
const common = require('./webpack.common.config.js');
const Merge = require('webpack-merge');
const webpack=require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = Merge(common,{
    plugins: [
        new HtmlWebpackPlugin({
            title: "One-stop investment platform for cryptocurrencies.",
            template: path.join(__dirname, 'index.ejs'),
            publicPath: 'https://static-cdn.oxchains.com/investdigital-www/',
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
        }),
        new CleanWebpackPlugin(
            ['dist/bundle.*.js', 'dist/main.*.js', 'dist/vendor.*.js'],　 //匹配删除的文件
            {
                root: __dirname,         　　　　　　　　　　//根目录
                verbose:  false,        　　　　　　　　　　//开启在控制台输出信息
                dry:      false        　　　　　　　　　　//启用删除文件
            }
        )
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: './',
    }
});
