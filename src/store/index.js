import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga, checkUserEmailSaga, checkUserNicknameSaga, refreshLoginSaga, registerUserSaga } from './auth';
import loading from './loading';

const rootReducer = combineReducers({
  loading,
  auth,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    refreshLoginSaga(),
    registerUserSaga(),
    checkUserEmailSaga(),
    checkUserNicknameSaga()
  ]);
}

export default rootReducer;