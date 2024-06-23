import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import authReducer from './slices/authSlice';
import studentReducer from './slices/studentSlice';


const rootReducer = combineReducers({
  authReducer,
  studentReducer,                                             
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});