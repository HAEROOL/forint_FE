import React from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router";
import MyFontPage from "../component/MyPage/MyfontPage";
import Profile from "../component/MyPage/Profile";
import MypageHeader from "../component/MyPage/MypageHeader";
const PageWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-item: center;

`
const PageContent = styled.div`
width: 600px;
margin: 0 auto;
margin-top: 50px;
`

const MyPage = () =>{
    return(
        <PageWrapper>
            <PageContent>
            <MypageHeader/>
            <Routes>
                <Route index element={<Profile/>}/>
                <Route path="fonts" element={<MyFontPage/>}/>
            </Routes>
            </PageContent>
        </PageWrapper>
    )
}

export default MyPage;