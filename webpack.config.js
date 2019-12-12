const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
    entry: {
        index: "./main.js"
    }, //入口文件
    module: {
        rules: [{
            test: /\.vue$/,
            use: ['vue-loader']
        }, {
            test: /\.js$/,
            use: ['babel-loader'],
            exclude: /node_modules/
        }, {
            test: /\.less$/,
            loaders: ["style-loader", "css-loader", "less-loader"]
        }, {
            test: /\.css$/,
            loaders: ["style-loader", "css-loader"]
        }]
    },
    plugins: [
        // 添加VueLoaderPlugin，以响应vue-loader
        new VueLoaderPlugin()
    ]
};