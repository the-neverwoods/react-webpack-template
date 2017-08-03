'use strict';

import { SET_ACCOUNT_INFO } from '../actions';

const initialState = {
  info: `{}`
};

export default function example(state = initialState, action) {
  switch(action.type) {
  case SET_ACCOUNT_INFO:
    return {
      ...state,
      info: action.info
    };
  default: 
    return state;
  }
}
