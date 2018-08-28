import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import createHistory from 'history/createBrowserHistory';

// import the root reducer
import rootReducer from './reducers/index';

export const history = createHistory();

// create an object for the default data
const defaultState = {};

const enhancers = [];
const middleware = [promise(), thunk, routerMiddleware(history)];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  ...enhancers,
);

export default createStore(
  connectRouter(history)(rootReducer),
  defaultState,
  composedEnhancers,
);
