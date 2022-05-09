import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestSagaActionTypes } from './createRequestSaga';
import { takeLatest } from '@redux-saga/core/effects';
import { setCookie } from '../component/Shared/Cookies';
import { setAccessTokenOnHeader } from '../api/logined';
import * as authAPI from '../api/auth';

const [LOGIN, LOGIN_SUCESS, LOGIN_FAILURE] = createRequestSagaActionTypes('auth/LOGIN');
const [REFRESH, REFRESH_SUCESS, REFRESH_FAILURE] = createRequestSagaActionTypes('auth/REFRESH');
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestSagaActionTypes('auth/REGISTER')
export const login = createAction(LOGIN, ({ account, password }) => ({
  account,
  password,
}));
export const refresh = createAction(REFRESH);
export const register = createAction(REGISTER)

const loginSaga = createRequestSaga(LOGIN, authAPI.login);
export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
}
const refreshSaga = createRequestSaga(REFRESH, authAPI.refresh);
export function* refreshLoginSaga() {
  yield takeLatest(REFRESH, refreshSaga);
}
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
export function* registerUserSaga(){
  yield takeLatest(REGISTER, registerSaga)
}
const initialState = {
  isLoggedIn: false,
  authError: null,
  isRegister: false
};

const auth = handleActions(
  {
    [LOGIN_SUCESS]: (state, { payload: token }) => ({
      ...state,
      authError: null,
      token: setCookie('refresh_token', `${token.refresh_token}`, {
        path: '/',
      }),
      accessToken: setAccessTokenOnHeader(token.accessToken),
      isLoggedIn: true,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),

    [REFRESH_SUCESS]: (state, { payload: token }) => ({
      ...state,
      authError: null,
      token: setCookie('refresh_token', `${token.refresh_token}`, {
        path: '/',
      }),
      accessToken: setAccessTokenOnHeader(token.accessToken),
      isLoggedIn: true,
    }),
    [REFRESH_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),

    [REGISTER_SUCCESS]:(state) => ({
      ...state,
      isRegister: true
    }),
    [REGISTER_FAILURE]: (state) => ({
      ...state,
      isRegister: false
    })

  },
  initialState
);

export default auth;