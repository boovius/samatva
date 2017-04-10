import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './index';
import Login from './components/login';
import requireAuth from './components/requireAuth';
import ActivityAdder from './components/activityAdder';

export default (
  <Route path='/' component={App} >
    <IndexRoute component={requireAuth(ActivityAdder)} />
    <Route path='login' component={Login} />
  </Route>
)
