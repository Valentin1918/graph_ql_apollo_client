import { createStore, applyMiddleware, combineReducers } from 'redux';

export default (reducers, middlewares, initialState = {}) => createStore(
  combineReducers(reducers),
  initialState,
  applyMiddleware(...middlewares),
);
