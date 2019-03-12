// ====== THIS IS THE ROOT REDUCER ======

// To make a RootReducer:
// 1. Get combineReducers method from redux
// 2. Call combineReducers method an pass it an object
// 3. Each key/property of the object, will be a single piece of application/redux state
// 4. Each value will be a single reducer (imported)

import { combineReducers } from 'redux';
import authReducer from './authReducer';
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    movie: movieReducer,
})

export default rootReducer;