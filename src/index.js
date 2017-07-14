import './index.html';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './initializers';

console.log('initial state', store.getState());

import { Router, browserHistory } from 'react-router';
import routes from './app/routes';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('container')
);

//update this to cache reduction for redux playback
if (module.hot) {
  module.hot.accept();
}

