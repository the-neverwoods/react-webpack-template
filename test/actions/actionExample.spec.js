/* eslint-env node, mocha */
'use strict'; 

import { expect } from '../index.js';

import { ACTION_EXAMPLE } from 'actions';
import { actionExample } from 'actions/actionExample.js';

describe(`example action creator`, () => {
  it(`should create an example action`, () => {
    const expected = {
      type: ACTION_EXAMPLE,
      example: `Hello World!`
    };

    expect(JSON.stringify(actionExample(`Hello World!`)) === JSON.stringify(expected)).to.equal(true);
  });
});
