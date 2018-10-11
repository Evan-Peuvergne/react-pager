const Merge = require('webpack-merge')

const Common = require('./webpack.common')


module.exports = Merge(Common, {
  mode: 'development',
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        enforce: 'pre'
      }
    ]
  }
})