let path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let conf = {
	optimization: {
		minimize: false
	},
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'build.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		]
	},
	plugins: [
		new MiniCssExtractPlugin({filename: "build.css"})
	],
};

module.exports = conf;