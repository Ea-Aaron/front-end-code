// 这是webpack 生产环境配置文件
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // 开发环境 'production' 生产环境
  entry: path.join(__dirname, 'src', 'index.js'), // 入口文件  __dirname 指的是根目录
  // 输出文件位置
  output: {
    filename: 'build.[contenthash].js', // 生产中的文件名字带有hash值
    path: path.join(__dirname, 'dist') // 输出文件位置
  },
  module: {
    // 配置babel 将es6的语法转化为es5
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        },
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/ // 该文件不参与babel转义
      }
    ]
  },
  plugins: [
    // 编译html文件
    new htmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'), // 编译的html模板
      filename: 'index.html' // 打包后的html文件名
    })
  ]
};