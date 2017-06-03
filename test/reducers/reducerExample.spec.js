/* eslint-env node, mocha */
'use strict';

import { expect } from '../index.js';

import reducerExample from 'reducers/reducerExample.js';
import { actionExample } from 'actions/actionExample.js';

describe(`reducer example`, () => {
  it(`should return the initial state`, () => {
    const expected = {
      example: false
    };

    expect(JSON.stringify(reducerExample(undefined, {})) === JSON.stringify(expected)).to.equal(true);
  });

  it(`should handle ACTION_EXAMPLE`, () => {
    const last = {
      example: false
    };

    const expected = {
      example: `Hello World!`
    };

    expect(
      JSON.stringify(reducerExample(last, actionExample(`Hello World!`))) 
      === 
      JSON.stringify(expected)
    ).to.equal(true);
  });
});
