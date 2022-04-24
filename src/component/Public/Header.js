import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import styled from "styled-components";

const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: NotoSansKR;
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

const Header = () => {
    const location = useLocation();
    return (
        <HeaderWrapper location={location.pathname==='/'?1:0}>
            <LogoWrapper to='/'>
                <Logo>MR.Hant</Logo>
            </LogoWrapper>
            <HeaderMenuList>
                <Menu to='/fontcreate' location={location.pathname==='/'?1:0}>폰트 만들기</Menu>
                <Menu to='/lookout' location={location.pathname==='/'?1:0}>둘러보기</Menu>
                <Menu to='/login' location={location.pathname==='/'?1:0}>마이페이지</Menu>
                <Menu to='/signup' location={location.pathname==='/'?1:0}>로그아웃</Menu>
            </HeaderMenuList>
        </HeaderWrapper>
    )
}

export default Header;


