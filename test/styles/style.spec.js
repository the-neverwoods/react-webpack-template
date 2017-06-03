/* eslint-env node, mocha */
'use strict'; 

import { expect } from '../index.js';

import Styles from 'styles';

describe(`Single selector style`, () => {
  let styles;

  beforeEach(() => {
    styles = Styles(`.testingselector`);
  });

  it(`Should be an object`, () => {
    expect(styles).to.be.an(`object`);
  });

  it(`Should have \`background\` set to \`black\``, () => {
    expect(styles.background).to.equal(`black`);
  });
});

describe(`Nested selector style`, () => {
  let styles;

  beforeEach(() => {
    styles = Styles(`.testingselector .nested`);
  });

  it(`Should be an object`, () => {
    expect(styles).to.be.an(`object`);
  });

  it(`Should have \`color\` set to \`blue\``, () => {
    expect(styles.color).to.equal(`blue`);
  });
});
