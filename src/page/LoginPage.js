import React from "react";
import styled from "styled-components";
import LoginForm from "../component/LoginPage/LoginForm";
import WhiteHeader from "../component/Public/WhiteHeader";

const LoginPageWrapper = styled.div`
    background: #fff;
    height: 100%;
`
const LoginPage = () => {
    return (
        <LoginPageWrapper>
            <WhiteHeader/>
            <LoginForm/>
        </LoginPageWrapper>
    )
}

export default LoginPage;