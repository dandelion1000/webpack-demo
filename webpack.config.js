const path = require('path');
const  HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  // entry:'./src/index.js',
  entry:{
    //webpack 分离入口
    app: './src/index.js',
    print:'./src/print.js'
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'output management'
    })
  ],
  output:{
    // filename:'bundle.js',
    filename: '[name].bundle.js',
    path:path.resolve(__dirname, 'dist'),
  },
}