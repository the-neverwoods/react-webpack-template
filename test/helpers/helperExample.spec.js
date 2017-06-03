/* eslint-env node, mocha */
'use strict';

import { expect } from '../index.js';
import { removeZeroes } from 'helpers/helperExample.js';

describe(`removeZeroes`, () => {
  it(`should trim trailing zeros off of floats`, () => {
    expect(removeZeroes(`0.000000`)).to.equal(`0`);
  });

  it(`should not remove trailing zeros off of non-floats`, () => {
    expect(removeZeroes(`10000`)).to.equal(`10000`);
  });
});
