
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {

	target: 'node',
	mode: 'development',
	entry: './server/src/index.js',
	output: {
		path: path.resolve(__dirname, './server/build'),
		filename: 'bundle.js'
	},
	externals: [nodeExternals()],
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









