import React from "react";
import styled from "styled-components";
import LoginForm from "../component/LoginPage/LoginForm";
import Header from "../component/Public/Header";

const LoginPageWrapper = styled.div`
    background: #fff;
    height: 100%;
`
const LoginPage = () => {
    return (
        <LoginPageWrapper>
            <Header/>
            <LoginForm/>
        </LoginPageWrapper>
    )
}

export default LoginPage;