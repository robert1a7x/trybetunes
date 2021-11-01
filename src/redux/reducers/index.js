import { combineReducers } from 'redux';
import userReducer from './userReducer';
import musicReducer from './musicReucer';

const rootReducer = combineReducers({ userReducer, musicReducer });

export default rootReducer;
