const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('./paths')

module.exports = {
  entry: {
    app: paths.app.entry,
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [paths.src, 'node_modules'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader'],
        include: paths.src,
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Chris\' VGL',
      template: paths.app.template,
      chunks: [
        'vendor',
        'app',
      ],
      chunksSortMode: 'manual',
      filename: paths.app.htmlOutput,
    }),
  ],
}
