'use strict';

import { ACTION_EXAMPLE } from '../actions';

const initialState = {
  example: false
};

export default function reducerExample(state = initialState, action) {
  switch(action.type) {
  case ACTION_EXAMPLE:
    return {
      ...state,
      example: action.example
    };
  default:
    return state;
  }
}
