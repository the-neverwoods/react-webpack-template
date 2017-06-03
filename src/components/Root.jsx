'use strict';

import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Get all page wrapper components
import ComponentExample from './ComponentExample.jsx';

// Set up Redux
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers';
import persistState from 'redux-localstorage';

const enhancer = compose(persistState());
const store = createStore(reducer, enhancer);

const Root = () => (
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/" component={ ComponentExample } />
    </Router>
  </Provider>
);

export default Root;
