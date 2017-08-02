const { resolve } = require('path');

module.exports = {
  entry: resolve('./src/index.js'),
  output: {
    path: resolve('./dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        include: resolve('./src'),
        loader: 'babel-loader'
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
}
