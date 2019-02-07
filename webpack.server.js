
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const serverConfig = {

	target: 'node',
	mode: 'development',
	entry: './src/server/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	externals: [nodeExternals()],
}

module.exports = merge(baseConfig, serverConfig);







