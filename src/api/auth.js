import logined from './logined';
import axios from 'axios';
export const login = ({ account, password }) => axios.post('http://127.0.0.1:8000/users/login/', { email:account, password:password });
export const register = ({signInfo}) => 
axios.post('http://127.0.0.1:8000/users/registration/', {
    username: signInfo.name,
    email: signInfo.email,
    password1: signInfo.password,
    password2: signInfo.password,
    Nickname: signInfo.nickname,
    profile_image: null
})
export const checkEmail = (email) => {
    console.log(email,'asdfasdf')
    axios.post('http://127.0.0.1:8000/users/registration/email-check/',{email})
}
export const refresh = (token) => logined.post('users/token/refresh/',{refresh:token});
export const fixUserInfo = ({password}) => logined.post('user/fix', {password:password});