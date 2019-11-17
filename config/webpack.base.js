const path = require('path')
const nodeExternals = require('webpack-node-externals')
const ManifestPlugin = require('webpack-manifest-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const resolve = {
  extensions: ['.js', '.jsx'],
}
const baseConfig = {
  resolve,
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader',
        },
      },
    ],
  },
  plugins: [new ManifestPlugin()],
}
const clientConfig = merge(baseConfig, {
  entry: './entry/client',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
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
  ],
})

const serverConfig = merge(baseConfig, {
  target: 'node',
  entry: './entry/server',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../build'),
    libraryTarget: 'commonjs',
  },
  externals: [nodeExternals()],
})

module.exports = [clientConfig, serverConfig]
