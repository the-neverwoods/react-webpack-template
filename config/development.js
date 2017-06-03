'use strict';

var webpack = require('webpack');
var config = require('./base.js');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

config.plugins.push(
  new CopyWebpackPlugin([
    {
      from: './src/index-dev.html',
      to: './index.html'
    }
  ])
);

config.module.loaders.push(
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loaders: ['babel-loader', 'eslint-loader']
  }
);

config.module.loaders.push(
  {
    test: /\.jsx$/,
    exclude: /node_modules/,
    loaders: ['babel-loader', 'eslint-loader']
  }
);

config.devServer = {
  outputPath: path.join(__dirname, 'dist')
};

config.eslint = {
  configFile: './.eslintrc',
  fix: true
};

config.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': `'development'`
  })
);

module.exports = config;
