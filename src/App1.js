import React from 'react';
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
import './App.css'
import Header from './component/Public/Header';
function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<MainPage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/lookout' element={<LookOutPage/>}/>
    <Route path='/signup' element={<SignPage/>}/>
    <Route path='/fontcreate/*' element={<FontMakePage/>}>
      <Route index element={<FirsrtPannel/>}/>
      <Route path="second" element={<SecondPannel/>}/>
      <Route path="third" element={<ThirdPannel/>}/>
      <Route path="fourth" element={<FourthPannel/>}/>
      <Route path="fifth" element={<FifthPannel/>}/>
      <Route path='final' element={<FinalPannel/>}/>
    </Route>
    <Route path='/mypage' element={<MyPage/>}/>
  </Routes>
  </>
    
  );
}

export default App;
