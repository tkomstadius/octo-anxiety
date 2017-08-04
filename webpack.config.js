const { resolve } = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: resolve('./src/index.js'),
    output: {
        path: resolve('./dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
      historyApiFallback: true
    },
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'eslint-loader'
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[name]-[local]-[hash:base64:6]',
                        camelCase: true
                    }
                }]
            })
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new HtmlPlugin({template: 'src/index.html', title: 'Octo Anxiety'}),
        new ExtractTextPlugin({filename: 'styles.css'})
    ]
}
