import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';

let store = createStore(rootReducer);
if (__DEV__) {
  store = createStore(rootReducer, applyMiddleware(logger));
}

export default store;
