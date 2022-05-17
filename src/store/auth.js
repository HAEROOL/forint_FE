import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestSagaActionTypes } from './createRequestSaga';
import { takeLatest } from '@redux-saga/core/effects';
import { setCookie } from '../component/Shared/Cookies';
import { setAccessTokenOnHeader } from '../api/logined';
import * as authAPI from '../api/auth';

const [LOGIN, LOGIN_SUCESS, LOGIN_FAILURE] = createRequestSagaActionTypes('auth/LOGIN');
const [REFRESH, REFRESH_SUCESS, REFRESH_FAILURE] = createRequestSagaActionTypes('auth/REFRESH');
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestSagaActionTypes('auth/REGISTER')
const [CHECKEMAIL,CHECKEMAIL_SUCCESS, CHECKEMAIL_FAILURE] = createRequestSagaActionTypes('auth/CHECKEMAIL')
const [CHANGEINFO, CHANGEINFO_SUCCESS, CHANGEINFO_FAILURE] = createRequestSagaActionTypes('auth/CHANGEINF')

export const login = createAction(LOGIN, ({ account, password }) => ({
  account,
  password,
}));
export const refresh = createAction(REFRESH);
export const register = createAction(REGISTER, (signInfo) => (signInfo))
export const change = createAction(CHANGEINFO, ({password}) => ({
  password
}))
export const checkEmail = createAction(CHECKEMAIL, (email) => (email))


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
const changeSaga = createRequestSaga(CHANGEINFO, authAPI.fixUserInfo);
export function* changeUserInfoSaga(){
  yield takeLatest(CHANGEINFO, changeSaga)
}
const checkEmailSaga = createRequestSaga(CHECKEMAIL, authAPI.checkEmail)
export function* checkUserEmailSaga(){
  yield takeLatest(CHECKEMAIL, checkEmailSaga)
}

const initialState = {
  isLoggedIn: false,
  authError: null,
  isRegister: false,
  isChanged: false,
  isEmailDuplicate: true
};

const auth = handleActions(
  {
    [LOGIN_SUCESS]: (state, { payload: token }) => ({
      ...state,
      authError: null,
      token: setCookie('refresh_token', `${token.refresh_token}`, {
        path: '/',
      }),
      accessToken: setAccessTokenOnHeader(token.access_token),
      isLoggedIn: true,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),

    [REFRESH_SUCESS]: (state, { payload: token }) => ({
      ...state,
      authError: null,
      accessToken: setAccessTokenOnHeader(token.access_token),
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
    }),

    [CHANGEINFO_SUCCESS]: (state) => ({
      ...state,
      isChanged: true
    }),
    [CHANGEINFO_FAILURE]: (state) => ({
      ...state,
      isChanged: false
    }),

    [CHECKEMAIL_SUCCESS]: (state) => ({
      ...state,
      isEmailDuplicate: state.detail === "You can use this email :)"?false:true
    }),
    [CHECKEMAIL_FAILURE]:(state) => ({
      ...state,
      isEmailDuplicate: true
    })

  },
  initialState
);

export default auth;