
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {

  target: 'node', // for node server
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [nodeExternals()], // index中 express仍然保持之前的引用形式，而不会打包到文件中
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['react', 'stage-0', ['env', {
          target: {
            browsers: ['last 2 versions']
          }
        }]]
      }
    }]
  }
}