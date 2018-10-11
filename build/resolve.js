const path = require('path')


module.exports = {
  extensions: ['*', '.js', '.jsx', '.scss', '.css' ],
  alias: {
    src: path.resolve('src'),
    router: path.resolve('src/router'),
    link: path.resolve('src/link')
  }
}