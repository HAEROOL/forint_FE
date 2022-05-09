import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga, refreshLoginSaga, registerUserSaga } from './auth';
import loading from './loading';

const rootReducer = combineReducers({
  auth,
  loading,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    refreshLoginSaga(),
    registerUserSaga()    
  ]);
}

export default rootReducer;