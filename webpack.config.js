const devConfig = require('./build/webpack.dev.js')
const prodConfig = require('./build/webpack.prod.js')

module.exports = function (env) {
    return env.production ? prodConfig : devConfig
}