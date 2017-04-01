import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './index';
import Login from './components/login';
import requireAuth from './components/requireAuth';
import Chat from './components/chat';

export default (
  <Route path='/' component={App} >
    <IndexRoute component={requireAuth(Chat)} />
    <Route path='login' component={Login} />
  </Route>
)
