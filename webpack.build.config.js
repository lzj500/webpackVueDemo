const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = merge(common, {
	output: {
		path: __dirname + "/publish/webapp",
		filename: "[name].js"
	},
	
	plugins: [
		new HtmlWebpackPlugin({
			title: '首页',
			template: 'index.html',
			filename: 'index.html',
			hash: true,
			chunks: ["index"],
			chunksSortMode: 'manual'
		}),
		new webpack.NamedModulesPlugin(),

	],
	


	devtool: 'inline-source-map'
});
