const path = require('path')

const Resolve = require('./resolve.js')


module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: '[name].js',
    publicPath: '/',
    libraryTarget: 'umd',
    library: 'Router'
  },
  resolve: Resolve,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        enforce: 'pre'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}