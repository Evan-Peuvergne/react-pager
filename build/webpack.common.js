const path = require('path')

const Resolve = require('./resolve.js')

module.exports = {
  entry: ['./src/index.ts'],
  output: {
    filename: '[name].js',
    publicPath: '/',
    libraryTarget: 'umd',
    library: 'Router',
  },
  resolve: Resolve,
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }],
        exclude: /node_modules|\.d\.ts$/,
      },
    ],
  },
}
