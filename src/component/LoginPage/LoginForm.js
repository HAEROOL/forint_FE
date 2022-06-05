import React, { useReducer, useRef, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import auth, { login } from "../../store/auth";
import {useNavigate} from 'react-router-dom';
import * as S from './LoginForm.style';
import { userAccount } from "../../store/user";
import { COLOR } from "../../staticColor";
import useDidMountEffect from "../../hooks/useDidMountEffect";

const PageWrapper = styled.div`
`
const AlertWrapper = styled.div`
    text-align: center;
    color: ${COLOR.red};
    width: 100%;
    margin: -35px 0 0 0;
`
const LoginForm = () => {
    const dispatch = useDispatch();
    const navigation = useNavigate()
    const {isLoggedIn, authError} = useSelector((state) => state.auth)
    const [loginInfo, setInfo] = useState({
        account: null,
        password: null
    })
    const [alertMsg, setAlert] = useState(null)
    useDidMountEffect(() => {
        if(isLoggedIn){
            dispatch(userAccount(loginInfo.account))
            navigation('/')
        }else if(authError ==='아이디 또는 비밀번호가 다릅니다'){
            setAlert(true)
        }
    },[isLoggedIn, authError])

    const onChange = (e) => {
        const name = e.target.name;
        switch(name){
            case 'account':
                setInfo({
                    ...loginInfo,
                    account: e.target.value
                })
                break;
            case 'password':
                setInfo({
                    ...loginInfo,
                    password: e.target.value
                })
                break;
            default:
                break;
        }
    }
    const clickLogin = () => {
        dispatch(login({
            account:loginInfo.account,
            password:loginInfo.password}
            ))
    }
    return (
        <PageWrapper>
            <S.LoginPlate>
                <S.LogoPannel>
                <S.LogoImg src="/asset/image/Forint_logo.png" alt="logo"/>
                </S.LogoPannel>
                <S.LoginText>로그인</S.LoginText>
                <S.FormWrapper>
                    <S.Form>
                        <S.FormInput onChange={onChange} name='account' placeholder="아이디"/>
                        <S.FormInput type="password" onChange={onChange} placeholder="비밀번호" name='password'/>
                    </S.Form>
                    {alertMsg?<AlertWrapper><span>아이디 또는 비밀번호가 다릅니다</span></AlertWrapper>:null}
                </S.FormWrapper>
                <S.SubmitBtn onClick={clickLogin}>로그인</S.SubmitBtn>
            </S.LoginPlate>
        </PageWrapper>
    )
}

export default LoginForm