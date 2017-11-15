// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import Routes from './routes';
import reducer from './reducer'
import { compose, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import './index.css';

//create store
//TODO: add logger
let store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}> 
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
