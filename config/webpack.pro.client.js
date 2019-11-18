const path = require('path')
const nodeExternals = require('webpack-node-externals')
const ManifestPlugin = require('webpack-manifest-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const clientConfig = merge(baseConfig, {
  entry: './entry/client',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../public'),
  },
  plugins: [
    new ManifestPlugin(),
    new HtmlWebpackPlugin({
      templateParameters: {
        server: false,
        title: 'client',
      },
      template: './template/index.pug',
    }),
    new ExtractTextPlugin('[name].css'),
  ],
})

module.exports = clientConfig
