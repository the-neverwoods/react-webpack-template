'use strict';

require('dotenv').config();

var ENV = process.env.NODE_ENV ? process.env.NODE_ENV : `development`;

console.log('Building ' + ENV.toLowerCase() + ' bundle.');
module.exports = require('./config/' + ENV.toLowerCase() + '.js');
