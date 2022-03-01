import React from "react";
import styled from "styled-components";
import WhiteHeader from "../component/Public/WhiteHeader";
import SignForm from "../component/SignPage/SignForm";

const SignPageWrapper = styled.div`
    background: #fff;
`
const SignPage = () => {
    return (
        <SignPageWrapper>
            <WhiteHeader/>
            <SignForm/>
        </SignPageWrapper>
    )
}

export default SignPage;