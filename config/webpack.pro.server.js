const path = require('path')
const nodeExternals = require('webpack-node-externals')
const ManifestPlugin = require('webpack-manifest-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const serverConfig = merge(baseConfig, {
  target: 'node',
  entry: './entry/server',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../build'),
    libraryTarget: 'commonjs',
  },
  externals: [nodeExternals()],
  plugins: [new ManifestPlugin(), new ExtractTextPlugin('[name].css')],
})

module.exports = serverConfig
