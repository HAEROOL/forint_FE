import logined from './logined';
import axios from 'axios';
// export const login = ({ account, password }) => logined.post('user/login', { account, password });
export const login = ( {account, password} ) => axios.post('https://www.mecallapi.com/api/login', { username:account, password });

export const refresh = () => logined.post('user/refresh');