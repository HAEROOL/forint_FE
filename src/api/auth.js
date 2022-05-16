import logined from './logined';
import axios from 'axios';
export const login = ({ account, password }) => axios.post('http://127.0.0.1:8000/users/login/', { email:account, password:password });
export const register = ({account, password, username, nickname}) => logined.post('users/registration/', { email: account, password: password, username: username, nickname: nickname })
export const refresh = (token) => logined.post('users/token/refresh/',{refresh:token});
export const fixUserInfo = ({password}) => logined.post('user/fix', {password:password});