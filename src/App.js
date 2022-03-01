import React from 'react';
import { Routes, Route } from 'react-router';
import FontMakePage from './page/FontMakePage';
import LoginPage from './page/LoginPage';
import LookOutPage from './page/LookOutPage';
import MainPage from './page/MainPage';
import MyPage from './page/MyPage';
import SignPage from './page/SignPage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/lookout' element={<LookOutPage/>}/>
      <Route path='/signup' element={<SignPage/>}/>
      <Route path='/fontcreate' element={<FontMakePage/>}/>
      <Route path='/mypage' element={<MyPage/>}/>
    </Routes>
  );
}

export default App;
