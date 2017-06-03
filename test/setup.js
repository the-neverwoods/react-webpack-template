'use strict';

var jsdom = require(`jsdom`);

global.document = jsdom.jsdom(`<!doctype html><html><body></body></html>`);
global.window = document.defaultView;
global.navigator = { userAgent: `node.js` };

global.getComputedStyle = global.window.getComputedStyle;

global.XMLHttpRequest = require(`xmlhttprequest`).XMLHttpRequest;
global.localStorage = window.sessionStorage = {
  getItem: function (key) {
    return `{}`;
  },
  setItem: function (key, value) {
    this[key] = value;
  }
};
