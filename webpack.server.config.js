
const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base.config.js');
const nodeExternals = require('webpack-node-externals');

const server = {
	target: 'node',
	mode: 'development',
	entry: './src/server/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './build')
	},
	externals : [nodeExternals()]

};

module.exports = merge(base, server);








