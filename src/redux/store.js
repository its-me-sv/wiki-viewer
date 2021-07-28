import {createStore, applyMiddleware} from 'redux';

// Middlewares
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from "./rootReducer";

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === 'development')
    middlewares.push(logger);

export const store = createStore(rootReducer, applyMiddleware(...middlewares));