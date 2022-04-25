import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import auth, { login } from "../../store/auth";
import {useNavigate} from 'react-router-dom';
import * as S from './LoginForm.style';

const PageWrapper = styled.div`
`
const LoginForm = () => {
    const dispatch = useDispatch();
    const navigation = useNavigate()
    const {isLoggedIn} = useSelector((state) => state.auth)
    const [loginInfo, setInfo] = useState({
        account: null,
        password: null
    })
    useEffect(() => {
        if(isLoggedIn){
            navigation('/')
        }
    },[isLoggedIn])
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
        console.log(loginInfo.account,loginInfo.password)
        dispatch(login({
            account:loginInfo.account,
            password:loginInfo.password}
            ))
    }
    return (
        <PageWrapper>
            <S.LoginPlate>
                <S.LoginText>로그인</S.LoginText>
                <S.FormWrapper>
                    <S.Form>
                        <S.FormName>ID</S.FormName>
                        <S.FormInput onChange={onChange} name='account'/>
                    </S.Form>
                    <S.Form>
                        <S.FormName>PassWord</S.FormName>
                        <S.FormInput type="password" onChange={onChange} name='password'/>
                    </S.Form>
                </S.FormWrapper>
                <S.SubmitBtn onClick={clickLogin}>로그인</S.SubmitBtn>
            </S.LoginPlate>
        </PageWrapper>
    )
}

export default LoginForm