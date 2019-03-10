const Merge = require('webpack-merge')

const Common = require('./webpack.common')

module.exports = Merge(Common, {
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
})
