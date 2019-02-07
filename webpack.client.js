
const path = require('path');

module.exports = {

	mode: 'development',
	entry: './server/src/client/index.js',
	output: {
		path: path.resolve(__dirname, './server/public'),
		filename: 'index.js'
	},
	module: {
		rules: [{
			test: /\.js?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			options: {
				presets: ['react', 'stage-0', 'es2015', 'es2017', ['env', {
					targets: {
						browsers: ['last 2 versions']
					}
				}]]
			}
		}]
	}
}









