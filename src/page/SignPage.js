import React from "react";
import styled from "styled-components";
import Header from "../component/Public/Header";
import SignForm from "../component/SignPage/SignForm";

const SignPageWrapper = styled.div`
    background: #fff;
`
const SignPage = () => {
    return (
        <SignPageWrapper>
            <Header/>
            <SignForm/>
        </SignPageWrapper>
    )
}

export default SignPage;