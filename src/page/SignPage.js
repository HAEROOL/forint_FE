import React from "react";
import styled from "styled-components";
import SignForm from "../component/SignPage/SignForm";

const SignPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
`
const SignPage = () => {
    return (
        <SignPageWrapper>
            <SignForm/>
        </SignPageWrapper>
    )
}

export default SignPage;