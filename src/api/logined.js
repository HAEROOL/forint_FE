import axios from 'axios';
import { getCookie } from '../component/Shared/Cookies';


const check = getCookie('refresh_token');

const logined = axios.create({});

logined.defaults.baseURL = 'http://127.0.0.1:8000/';

export const setRefreshOnHeader = () => {
  logined.defaults.headers.common['Authorization'] = `Bearer ${check}`;
};

export const setAccessTokenOnHeader = (token) => {
  console.log(token, 'asdf')
  logined.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export default logined;