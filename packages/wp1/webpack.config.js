const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './lib/wp1.js',
  output: {
    filename: 'js/[name].[contenthash].js',
    path: path.resolve(__dirname, './dist/'), // 绝对路径
    publicPath: '/'
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html'
    })
  ]
}
