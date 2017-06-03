'use strict';

import { ACTION_EXAMPLE } from './index.js';

export function actionExample(param = true) {
  return {
    type: ACTION_EXAMPLE,
    example: param
  };
}
