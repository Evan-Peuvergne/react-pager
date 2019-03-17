const path = require('path')

module.exports = {
  extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.scss', '.css'],
  alias: {
    src: path.resolve('src'),
    route: path.resolve('src/route'),
    router: path.resolve('src/router'),
    link: path.resolve('src/link'),
  },
}
