// @flow

import React from 'react';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';
import {MainContainer} from '../containers/mainContainer';
import {HomeContainer} from '../containers/homeContainer';
import {AboutContainer} from '../containers/aboutContainer';

export const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={MainContainer}>
    	<IndexRoute component={HomeContainer}/>
    	<Route path='/about' component={AboutContainer}/>
    </Route>
  </Router>
);
