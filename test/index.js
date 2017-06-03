'use strict';

import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

require(`./helpers`);
require(`./styles`);
require(`./actions`);
require(`./reducers`);

export { expect };
