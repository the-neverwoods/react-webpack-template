'use strict';

import { SET_ACCOUNT_INFO } from './index.js';

export function setAccountInfo(info) {
  return {
    type: SET_ACCOUNT_INFO,
    info: typeof info === `string` ? 
              info : 
              JSON.stringify(info)
  };
}
