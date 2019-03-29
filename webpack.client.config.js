
const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base.config.js');

const client = {
	
	mode: 'development',
	entry: './src/client/index.js',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, './public')
	}

}

module.exports = merge(base, client);








