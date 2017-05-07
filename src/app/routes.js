import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './index';
import Login from './components/login';
import requireAuth from './components/requireAuth';
import ActivitiesList from './components/activitiesList';

export default (
  <Route path='/' component={App} >
    <IndexRoute component={requireAuth(ActivitiesList)} />
    <Route path='login' component={Login} />
  </Route>
)
