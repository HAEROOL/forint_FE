import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import styled from "styled-components";

const HeaderWrapper = styled.div`
    width: 1788px;
    height: 107px;
    padding: 0 66px 0 66px;
    background: ${props => props.location?'#000':'#fff'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
`
const LogoWrapper = styled(Link)`
`
const Logo = styled.img`
    width: 83px;
    height: 83px;
`
const HeaderMenuList = styled.div`
    display: flex;
    justify-content: space-between;
    width: 640px;
`

const Menu = styled(Link)`
    font-size: 20px;
    color: ${props => !props.location?'#000':'#fff'};
    text-decoration-line: none;

`

const Header = () => {
    const location = useLocation();
    return (
        <HeaderWrapper location={location.pathname==='/'?1:0}>
            <LogoWrapper to='/'>
            <Logo/>
            </LogoWrapper>
            <HeaderMenuList>
                <Menu to='/' location={location.pathname==='/'?1:0}>홈</Menu>
                <Menu to='/fontcreate' location={location.pathname==='/'?1:0}>폰트 만들기</Menu>
                <Menu to='/lookout' location={location.pathname==='/'?1:0}>둘러보기</Menu>
                <Menu to='/login' location={location.pathname==='/'?1:0}>로그인</Menu>
                <Menu to='/signup' location={location.pathname==='/'?1:0}>회원가입</Menu>
            </HeaderMenuList>
        </HeaderWrapper>
    )
}

export default Header;