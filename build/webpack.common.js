const path = require('path')

const Resolve = require('./resolve.js')


module.exports = {
  entry: [
    './src/index.ts'
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
        test: /\.(js|ts)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { 
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              camelCase: true,
              localIdentName: '[local]__[hash:base64:5]',
              sourceMap: false,
            }
          },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
}