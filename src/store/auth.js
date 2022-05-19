import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestSagaActionTypes } from './createRequestSaga';
import { takeLatest } from '@redux-saga/core/effects';
import { setCookie } from '../component/Shared/Cookies';
import { setAccessTokenOnHeader } from '../api/logined';
import * as authAPI from '../api/auth';

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestSagaActionTypes('auth/LOGIN');
const [REFRESH, REFRESH_SUCCESS, REFRESH_FAILURE] = createRequestSagaActionTypes('auth/REFRESH');
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestSagaActionTypes('auth/REGISTER')
const [CHECKEMAIL,CHECKEMAIL_SUCCESS, CHECKEMAIL_FAILURE] = createRequestSagaActionTypes('auth/CHECKEMAIL')
const [CHECKNICKNAME,CHECKNICKNAME_SUCCESS, CHECKNICKNAME_FAILURE] = createRequestSagaActionTypes('auth/CHECKNICKNAME')
const [CHANGEINFO, CHANGEINFO_SUCCESS, CHANGEINFO_FAILURE] = createRequestSagaActionTypes('auth/CHANGEINFO')
const [GETINFO, GETINFO_SUCCESS, GETINFO_FAILURE] = createRequestSagaActionTypes('auth/GETINFO')

export const login = createAction(LOGIN, ({ account, password }) => ({
  account,
  password,
}));
export const refresh = createAction(REFRESH);
export const register = createAction(REGISTER, (signInfo) => (signInfo))
export const change = createAction(CHANGEINFO, ({password}) => ({
  password
}))
export const checkEmail = createAction(CHECKEMAIL, ({email}) => ({email}))
export const checkNickname = createAction(CHECKNICKNAME, ({nickname}) => ({nickname}))
export const getUserInfo = createAction(GETINFO, ({email}) => (email))

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
const checkNicknameSaga = createRequestSaga(CHECKNICKNAME, authAPI.checkNickname)
export function* checkUserNicknameSaga(){
  yield takeLatest(CHECKNICKNAME, checkNicknameSaga)
}
const getInfoSaga = createRequestSaga(GETINFO, authAPI.getUserInfo)
export function* getUserInfoSaga(){
  yield takeLatest(GETINFO, getInfoSaga)
}

const initialState = {
  isLoggedIn: false,
  authError: null,
  isRegister: false,
  isChanged: false,
  isEmailDuplicate: null,
  isNicknameDuplicate: null,
  userInfo: null
};

const auth = handleActions(
  {
    [LOGIN_SUCCESS]: (state, { payload: token }) => ({
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

    [REFRESH_SUCCESS]: (state, { payload: token }) => ({
      ...state,
      authError: null,
      accessToken: setAccessTokenOnHeader(token.access),
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

    [CHECKEMAIL_SUCCESS]: (state, payload) => ({
      ...state,
      isEmailDuplicate: payload.detail === "You can use this email :)"?false:true
    }),
    [CHECKEMAIL_FAILURE]:(state) => ({
      ...state
    }),

    [CHECKNICKNAME_SUCCESS]: (state, payload) => ({
      ...state,
      isNicknameDuplicate: payload.detail === "You can use this email :)"?false:true
    }),
    [CHECKNICKNAME_FAILURE]:(state) => ({
      ...state
    }),

    [GETINFO_SUCCESS]: (state, payload) => ({
      ...state,
      userInfo: payload.body
    }),
    [GETINFO_FAILURE]:(state) => ({
      ...state,
      userInfo: null
    })


  },
  initialState
);

export default auth;