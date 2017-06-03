'use strict';

let requireTest = require.context(`./`, true, /\.spec\.js$/);

requireTest.keys().forEach(requireTest);
