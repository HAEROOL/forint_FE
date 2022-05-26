import React, { useEffect } from 'react';
import styled from "styled-components";
import { Routes, Route } from 'react-router';
import FontMakePage from './page/FontMakePage';
import LoginPage from './page/LoginPage';
import LookOutPage from './page/LookOutPage';
import MainPage from './page/MainPage';
import MyPage from './page/MyPage';
import SignPage from './page/SignPage';
import FifthPannel from "./component/FontMake/FifthPannel_DisplayFont";
import FinalPannel from "./component/FontMake/FinalPannel";
import FirsrtPannel from "./component/FontMake/FirstPannel_DownTemplete";
import FourthPannel from "./component/FontMake/FourthPage_CompleteFont";
import SecondPannel from "./component/FontMake/SecondPannel_Upload";
import ThirdPannel from "./component/FontMake/ThirdPannel_Loading";
import Header from './component/Public/Header';
import { useDispatch } from 'react-redux';
import { setRefreshOnHeader } from './api/logined';
import { refresh } from './store/auth';
import { getCookie } from './component/Shared/Cookies';
import './App.css';

const StyledContatiner = styled.div`
font-family: Noto Sans KR;
    font-weight: 500;
    `


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    setRefreshOnHeader();
    const refreshToken =  getCookie('refresh_token')
    if(refreshToken){
      dispatch(refresh(refreshToken))
    }
  },[]);
  
  return (
    <StyledContatiner>
    <Header/>
    <Routes>
    <Route path='/' element={<MainPage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    {/* <Route path='/lookout' element={<LookOutPage/>}/>
    <Route path='/signup' element={<SignPage/>}/>
    <Route path='/fontcreate/*' element={<FontMakePage/>}>
      <Route index element={<FirsrtPannel/>}/>
      <Route path="second" element={<SecondPannel/>}/>
      <Route path="third" element={<ThirdPannel/>}/>
      <Route path="fourth" element={<FourthPannel/>}/>
    </Route> */}
    <Route path='/mypage' element={<MyPage/>}/>
  </Routes>
  </StyledContatiner>
    
  );
}

export default App;
