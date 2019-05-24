/*
 * Import all *.js files in this directory and export as an array.
 * The regex here excludes files that start with "index".
 *
 * See: https://webpack.js.org/guides/dependency-management/#requirecontext
 */
const req = require.context('./', false, /^((?!index).)*\.js$/im)

const systems = req
  .keys()
  .map(req)
  .map(mod => mod.default)

export default systems
