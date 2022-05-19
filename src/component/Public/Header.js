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

const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: Noto Sans KR;
    font-weight: 500;
    margin-bottom: 60px;
`
const LogoWrapper = styled(Link)`
    width: 216px;
    margin: 0 auto;
    color: black;
    text-decoration: none;
    text-align: center;
`
const Logo = styled.div`
    font-size: 55px;
    font-family: SueEllenFrancisco;
    font-weight: 500;
    font-display: swap;
`
const HeaderMenuList = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    max-width: 700px;
    margin: 0 auto;
    font-weight: 400;
`
const Menu = styled(Link)`
    font-size: 20px;
    color: black;
    text-decoration: none;
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
        <HeaderWrapper location={location.pathname==='/'?1:0}>
            <LogoWrapper to='/'>
                <Logo>MR.Hant</Logo>
            </LogoWrapper>
            <HeaderMenuList>
                <Menu to='/fontcreate' location={location.pathname==='/'?1:0}>폰트 만들기</Menu>
                <Menu to='/lookout' location={location.pathname==='/'?1:0}>둘러보기</Menu>
                {isLog?
                    <>
                    <Menu to='/mypage' location={location.pathname==='/'?1:0}>마이페이지</Menu>
                    <LogoutBtn onClick={() => clickLogout()}>로그아웃</LogoutBtn>
                    </>
                    :
                    <>
                    <Menu to='/login' location={location.pathname==='/'?1:0}>로그인</Menu>
                    <Menu to='/signup' location={location.pathname==='/'?1:0}>회원가입</Menu>
                    </>
                }
            </HeaderMenuList>
        </HeaderWrapper>
    )
}

export default Header;


