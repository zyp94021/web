const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolve = {
  extensions: ['.js', '.jsx'],
}
module.exports = {
  entry: ['@babel/polyfill', './entry/client'],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    historyApiFallback: true,
    hot: true,
  },
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
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateParameters: {
        server: false,
        title: 'development',
      },
      template: './template/index.pug',
    }),
  ],
}
