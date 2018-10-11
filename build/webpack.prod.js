const Merge = require('webpack-merge')

const Common = require('./webpack.common')


module.exports = Merge(Common, {
  mode: 'production',
  devtool: 'source-map'
})