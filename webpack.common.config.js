const path = require('path');
const webpack = require('webpack');
let prod = process.env.NODE_ENV === 'production';

const static1 = [
    "./public/js/vendor/jquery.easing/js/jquery.easing.js",
    "./public/js/js/hs.core.js",
    "./public/js/js/components/hs.header.js",
    "./public/js/js/helpers/hs.hamburgers.js",
    "./public/js/js/components/hs.scroll-nav.js",
]
module.exports = {
    entry: {
        'vendor': static1,
        "bundle": "./src/index.js",
        "main": "./public/js/main.js",
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].[chunkhash:8].js",
        publicPath: prod ? "https://investdigital.info/" : ""
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        },{test: /\.css$/,
            loader: 'style-loader!css-loader'},
        {
            test: /\.(png|jpg|gif|jpeg)$/,
            loader: 'url-loader',
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: 'vendor',
            minChunks: Infinity
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    }
};
