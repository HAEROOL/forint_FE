import logined from "./logined";


export const fixUserInfo = ({password}) => logined.post('user/fix', {password:password});