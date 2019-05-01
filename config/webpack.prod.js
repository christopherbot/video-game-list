const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const common = require('./webpack.common.js')
const paths = require('./paths')

module.exports = merge(common, {
  mode: 'production',

  plugins: [
    new CleanWebpackPlugin(),
  ],

  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].js',
    path: paths.dist,
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: /node_modules/,
          enforce: true,
        },
      },
    },
  },
})
