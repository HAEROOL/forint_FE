import React from "react";
import styled from "styled-components";
import * as S from './LoginForm.style';

const PageWrapper = styled.div`
    background: #000;
    width: 1920px;
    height: 937px;
    position: alsolute;
`
const LoginForm = () => {
    return (
        <PageWrapper>
            <S.LoginPlate>
                <S.LoginText>로그인</S.LoginText>
                <S.FormWrapper>
                    <S.Form>
                        <S.FormName>ID</S.FormName>
                        <S.FormInput/>
                    </S.Form>
                    <S.Form>
                        <S.FormName>PassWord</S.FormName>
                        <S.FormInput type="password"/>
                    </S.Form>
                    <S.DeleteAll><img src="asset/image/X.png" alt="x"/></S.DeleteAll>
                </S.FormWrapper>
            </S.LoginPlate>
        </PageWrapper>
    )
}

export default LoginForm