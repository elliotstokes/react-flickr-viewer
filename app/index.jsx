import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {routes} from './config/routes';
import flickrApp from './reducers';

let store = createStore(flickrApp);

ReactDOM.render(routes, document.getElementById('app'))