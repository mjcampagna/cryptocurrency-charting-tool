const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				include: /src/,
				options: {
					presets: ['env', 'react']
				}
			}
		]
	}, // module

	plugins: [
		
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: false
		})
	
	] // plugins

};
