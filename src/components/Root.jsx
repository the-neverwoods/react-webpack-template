'use strict';

import React from 'react';
import { Router, browserHistory } from 'react-router';

// Get routes for app
import routes from '../routes/routes.js';

// Set up Redux
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers';
import persistState from 'redux-localstorage';


let enhancer = compose(persistState());
const store = createStore(reducer, enhancer);

// Set up Google Analytics
import GoogleAnalytics from 'react-ga';
// GoogleAnalytics.initialize(`UA-XXXXXXXX-X`);

const log = () => {
  GoogleAnalytics.set({ page: window.location.pathname });
  GoogleAnalytics.pageview(window.location.pathname);
};

const Root = () => (
  <Provider store={ store }>
    <Router history={ browserHistory } routes={ routes } onUpdate={ log } />
  </Provider>
);

export default Root;
