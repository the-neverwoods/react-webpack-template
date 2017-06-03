'use strict';

let removeZeroes = (n) => {
  if (n.match(/\./)) {
    n = n.replace(/\.?0+$/, ``);
  }
  return n;
};

export { removeZeroes };
