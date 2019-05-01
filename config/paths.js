const { resolve } = require('path')

const rootDir = resolve(__dirname, '..')
const src = resolve(rootDir, 'src')
const dist = resolve(rootDir, 'dist')

module.exports = {
  rootDir,
  src,
  dist,

  app: {
    entry: resolve(src, 'index.jsx'),
    template: resolve(src, 'index.ejs'),
    htmlOutput: resolve(dist, 'index.html'),
  },
}
