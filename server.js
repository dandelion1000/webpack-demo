const express = require('express');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server')
const webpackDevMiddleWare = require('webpack-dev-middleware');
const app = express();
const config = require('./webpack.config.js');
const options = {
  contentBase:'./dist',
  hot: true,
  host:'localhost'
}
webpackDevServer.addDevServerEntrypoints(config,options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler,options);

app.use(webpackDevMiddleWare(compiler,{
  publicPath: config.output.publicPath
}))
app.listen(5000, 'localhost', function(){
  console.log('Example app listening on port 3000!')
})