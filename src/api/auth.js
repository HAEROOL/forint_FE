import logined from './logined';
import axios from 'axios';
export const login = ({ account, password }) => axios.post(`${process.env.REACT_APP_API_URL}/users/login/`, { email:account, password:password });
export const register = ({signInfo}) => 
axios.post(`${process.env.REACT_APP_API_URL}/users/registration/`, {
    username: signInfo.name,
    email: signInfo.email,
    password1: signInfo.password,
    password2: signInfo.password,
    Nickname: signInfo.nickname,
    profile_image: null
})
export const checkEmail = ({email}) => {
    axios.post(`${process.env.REACT_APP_API_URL}/users/registration/email-check/`,{email: email})
}
export const checkNickname = ({nickname}) => {
    axios.post(`${process.env.REACT_APP_API_URL}/users/registration/nickname-check/`,{nickname: nickname})
}
export const refresh = (token) => logined.post('users/token/refresh/',{refresh:token});
export const getUserInfo = (email) => {
    logined.get(`users/${email}/`)};
export const fixUserInfo = ({password}) => logined.post('user/fix', {password:password});