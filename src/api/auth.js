import logined from './logined';
import axios from 'axios';
// export const login = ({ account, password }) => logined.post('user/login', { account, password });
export const login = ( {account, password} ) => axios.post('https://www.mecallapi.com/api/login', { username:account, password });
export const register = ({account, password, username, nickname}) => logined.post('user/register', { account, password, username, nickname })
export const refresh = () => logined.post('user/refresh');
export const fixUserInfo = ({password}) => logined.post('user/fix', {password:password});