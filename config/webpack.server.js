const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.base')

const serverConfig = merge(baseConfig, {
  target: 'node',
  entry: './entry/server',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../ssrbuild'),
    libraryTarget: 'commonjs',
  },
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
})
const publicConfig = merge(baseConfig, {
  entry: ['@babel/polyfill', './entry/client'],
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, '../public'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ManifestPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new BundleAnalyzerPlugin(),
  ],
})

module.exports = [publicConfig, serverConfig]
