import thunk from 'redux-thunk';
import logger from 'redux-logger';

const __DEV__ = process.env.NODE_ENV !== 'production';
const middlewares = [thunk];
if (__DEV__) middlewares.push(logger);

export default middlewares;
