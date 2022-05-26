import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { removeCookie } from "../Shared/Cookies";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import { useDispatch } from "react-redux";
import { logout } from "../../store/auth";

const Pannel = styled.div`
width: 100%;
&:after{
    content: "";
    display: block;
    width: 93%;
    margin: 0 auto;
    border-bottom: 1px solid rgb(191,191,191);
}
`
const HeaderWrapper = styled.div`
    width: 90%;
    display: flex;
    margin: 0 auto;
    font-family: Noto Sans KR;
    font-weight: 500;
    margin-bottom: 30px;
    margin-top: 50px;
`
const LogoWrapper = styled(Link)`
    margin: 0 auto;
    color: black;
    text-decoration: none;
    text-align: center;
    margin-right: 40px;
`
const Logo = styled.img`
    width: 100px;
`
const HeaderMenuList = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    font-weight: 400;
    align-items: end;
`
const Menu = styled(Link)`
    font-size: 20px;
    color: black;
    text-decoration: none;
`

const MainMenu = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-between;
`
const UserMenu = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;
`
const LogoutBtn = styled.div`
font-size: 20px;
    color: black;
    &:hover{
        cursor: pointer;
    }

`
const Header = () => {
    const location = useLocation();
    const navigation = useNavigate();
    const dispatch = useDispatch()
    const {isLoggedIn} = useSelector((state) => state.auth)
    const [isLog, setLog] = useState(isLoggedIn)
    const clickLogout = () => {
        removeCookie('refresh_token')
        navigation('/')
        setLog(false)
        localStorage.removeItem('userAccount')
        dispatch(logout())
    }
    useEffect(() => {
        setLog(isLoggedIn)
    },[isLoggedIn])
    return (
        <Pannel>
        <HeaderWrapper location={location.pathname==='/'?1:0}>
            <LogoWrapper to='/'>
                <Logo src="/asset/image/Forint_logo.png"/>
            </LogoWrapper>
            <HeaderMenuList>
                <MainMenu>
                <Menu to='/fontcreate' location={location.pathname==='/'?1:0}>폰트 만들기</Menu>
                <Menu to='/lookout' location={location.pathname==='/'?1:0}>둘러보기</Menu>
                </MainMenu>
                
                {isLog?
                    <UserMenu>
                        <Menu to='/mypage' location={location.pathname==='/'?1:0}>마이페이지</Menu>
                        <LogoutBtn onClick={() => clickLogout()}>로그아웃</LogoutBtn>
                    </UserMenu>
                    :
                    <UserMenu>
                        <Menu to='/login' location={location.pathname==='/'?1:0}>로그인</Menu>
                        <Menu to='/signup' location={location.pathname==='/'?1:0}>회원가입</Menu>
                    </UserMenu>
                }
            </HeaderMenuList>
        </HeaderWrapper>
        </Pannel>
    )
}

export default Header;


