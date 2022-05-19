import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestSagaActionTypes } from './createRequestSaga';
import { takeLatest } from '@redux-saga/core/effects';
import * as authAPI from '../api/auth';

const [CHECKEMAIL,CHECKEMAIL_SUCCESS, CHECKEMAIL_FAILURE] = createRequestSagaActionTypes('auth/CHECKEMAIL')
const [CHECKNICKNAME,CHECKNICKNAME_SUCCESS, CHECKNICKNAME_FAILURE] = createRequestSagaActionTypes('auth/CHECKNICKNAME')
const [CHANGEINFO, CHANGEINFO_SUCCESS, CHANGEINFO_FAILURE] = createRequestSagaActionTypes('auth/CHANGEINFO')
const [GETINFO, GETINFO_SUCCESS, GETINFO_FAILURE] = createRequestSagaActionTypes('auth/GETINFO')

export const change = createAction(CHANGEINFO, ({password}) => ({
    password
  }))
export const checkEmail = createAction(CHECKEMAIL, ({email}) => ({email}))
export const checkNickname = createAction(CHECKNICKNAME, ({nickname}) => ({nickname}))
export const getUserInfo = createAction(GETINFO, ({email}) => (email))

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
    isChanged: false,
    isEmailDuplicate: null,
    isNicknameDuplicate: null,
    userInfo: null
};

const user = handleActions(
    {
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
)

export default user