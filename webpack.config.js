const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry:{
    index:'./src/index2.js',
    // another:'./src/runoob1.js'
  },
  plugins:[
    new HTMLWebpackPlugin({
      title:'Code spliting'
    }),
  ],
  optimization:{
    splitChunks:{
      cacheGroups: {
        commons: {
            name: "commons",
            chunks: "initial",
            minChunks: 2
        }
    }
    }
  },
  output:{
    path:path.resolve(__dirname, 'dist'),
    chunkFilename:'[name].bundle.js',
    filename:'[name].bundle.js'
  },
  module:{
    rules: [
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use:[
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          }
        ]
      },
      {
        test:/\.(woff|woff2|eot|ttf|otf)$/,
        use:[
          'file-loader'
        ]
      },
      {
        test:/\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test:/\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  }
}