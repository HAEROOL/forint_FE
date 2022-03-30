import React, { useState } from "react";
import styled from "styled-components";
import * as S from './LoginForm.style';

const PageWrapper = styled.div`
    background: #000;
    width: 1920px;
    height: 937px;
`
const LoginForm = () => {
    const [loginInfo, setInfo] = useState({
        id: null,
        password: null
    })

    const inputId = (e) => {
        setInfo({
            ...loginInfo,
            id: e.target.value
        })
    }
    const inputPw = (e) => {
        setInfo({
            ...loginInfo,
            password: e.target.value
        })
    }
    const clickLogin = () => {
        if(!loginInfo.id || !loginInfo.password){
            alert('로그인정보를 입력해주세요')
        }
        if(loginInfo.id && loginInfo.password){
            alert('로그인했습니다')
            console.log(loginInfo)
        }
    }
    return (
        <PageWrapper>
            <S.LoginPlate>
                <S.LoginText>로그인</S.LoginText>
                <S.FormWrapper>
                    <S.Form>
                        <S.FormName>ID</S.FormName>
                        <S.FormInput onChange={inputId}/>
                    </S.Form>
                    <S.Form>
                        <S.FormName>PassWord</S.FormName>
                        <S.FormInput type="password" onChange={inputPw}/>
                    </S.Form>
                </S.FormWrapper>
                <S.SubmitBtn onClick={clickLogin}>로그인</S.SubmitBtn>
            </S.LoginPlate>
        </PageWrapper>
    )
}

export default LoginForm