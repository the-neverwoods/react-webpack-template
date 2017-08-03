'use strict';

var webpack = require('webpack');
var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');

module.exports = {
  cache: true,
  entry: {
    js: [
      './src/index.jsx'
    ],
    vendor: [
      'react', 
      'react-dom',
      'react-redux',
      'react-router'
    ]
  },
  output: {
    path: 'dist',
    filename: 'app.bundle.min.js',
    chunkFilename: '[id].[hash].bundle.min.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/, 
        loader: 'babel-loader', 
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.js$/, 
        loader: 'babel-loader', 
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  performance: {
    hints: false
  },
  plugins: [
    new webpack.ExtendedAPIPlugin()
  ]
};
