import React,{useState, useEffect} from "react";
import styled from "styled-components";
import { Route, Routes, useNavigate } from "react-router";
import MyFontPage from "../component/MyPage/MyfontPage";
import Profile from "../component/MyPage/Profile";
import MypageHeader from "../component/MyPage/MypageHeader";
import logined from "../api/logined";
import { useSelector } from "react-redux";
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
        fonts: []
    })
    const navigation = useNavigate()
    const {isLoggedIn} = useSelector((state) => state.auth)
    const userAccount = sessionStorage.getItem('userAccount')
    useEffect(() => {
        if(!isLoggedIn && !userAccount){
            alert('로그인 해주세요')
            navigation('/')
        }else{
            logined.get(`users/${userAccount}/`)
            .then((response) => {
                setInfo({
                    ...response.data
                })
            })
        }
    },[isLoggedIn])
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