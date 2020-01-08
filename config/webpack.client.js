const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const ManifestPlugin = require('webpack-manifest-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const baseConfig = require('./webpack.base')
const clientConfig = merge(baseConfig, {
  entry: ['@babel/polyfill', './entry/client'],
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ManifestPlugin(),
    new HtmlWebpackPlugin({
      templateParameters: {
        server: false,
        title: 'client',
      },
      template: './template/index.pug',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CopyPlugin([{ from: 'public', to: '' }]),
    new BundleAnalyzerPlugin(),
  ],
})

module.exports = clientConfig
