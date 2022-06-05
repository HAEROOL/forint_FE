import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga,   refreshLoginSaga, registerUserSaga } from './auth';
import user, {checkUserEmailSaga,checkUserNicknameSaga, getUserInfoSaga,} from './user'
import loading from './loading';

const rootReducer = combineReducers({
  loading,
  auth,
  user
});

export function* rootSaga() {
  yield all([
    authSaga(),
    refreshLoginSaga(),
    registerUserSaga(),
    checkUserEmailSaga(),
    checkUserNicknameSaga(),
    getUserInfoSaga()
  ]);
}

export default rootReducer;