import React,{useState, useLayoutEffect} from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router";
import MyFontPage from "../component/MyPage/MyfontPage";
import Profile from "../component/MyPage/Profile";
import MypageHeader from "../component/MyPage/MypageHeader";
import logined from "../api/logined";
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
    const [userInfo, setInfo] = useState({
        email: '',
        nickname: '',
        password: null,
        name: '',
        fonts: ['https://picsum.photos/200']
    })
    const userAccount = localStorage.getItem('userAccount')
    useLayoutEffect(() => {
        logined.get(`users/${userAccount}/`)
        .then((response) => {
            setInfo({
                ...userInfo,
                ...response.data
            })
        })
    },[])
    return(
        <PageWrapper>
            <PageContent>
            <MypageHeader/>
            <Routes>
                <Route index element={<Profile userInfo={userInfo} />}/>
                <Route path="fonts" element={<MyFontPage fonts={userInfo.fonts}/>}/>
            </Routes>
            </PageContent>
        </PageWrapper>
    )
}

export default MyPage;