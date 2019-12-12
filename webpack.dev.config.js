const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.config.js');
module.exports = merge(common, {
    output: {
        path:  "/",
        filename: "[name].js"
    },
    devServer: {
        host: 'localhost',
        port: 8099,
        open: true,
        contentBase: './',
        inline: true,
        proxy: {
            '/': {
                target: 'http://localhost:9876'
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '首页',
            template: 'index.html',
            filename: 'index.html',
            hash:true,
            chunks: ["index"],
            chunksSortMode:'manual'
        })
    ],
    devtool: 'inline-source-map'
});