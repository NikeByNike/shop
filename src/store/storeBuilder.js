import { applyMiddleware, createStore } from 'redux';
// import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers/index';

const middleware = applyMiddleware(...[thunk]);

// const logger = createLogger();

const reduxDevTools =
  process.env.NODE_ENV === 'production'
    ? middleware
    : composeWithDevTools(middleware);

const getStore = preLoadedState =>
  createStore(rootReducer, preLoadedState, reduxDevTools);

export default getStore();
