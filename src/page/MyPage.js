import React from "react";
import styled from "styled-components";
import Profile from "../component/MyPage/Profile";

const PageWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-item: center;
`

const MyPage = () =>{
    return(
        <PageWrapper>
            <Profile/>
        </PageWrapper>
    )
}

export default MyPage;