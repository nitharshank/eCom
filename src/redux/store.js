import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import productReducer from './reducers/reducers';

const rootReducer = combineReducers({productReducer});

export const Store = configureStore({reducer:rootReducer}, applyMiddleware(thunk));