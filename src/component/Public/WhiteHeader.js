import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
    width: 1788px;
    height: 107px;
    position: fixed;
    top: 0;
    padding: 0 66px 0 66px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000;
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

const Menu = styled.div`
    font-size: 20px;
`

const WhiteHeader = () => {
    return (
        <HeaderWrapper>
            <Logo/>
            <HeaderMenuList>
                <Menu>홈</Menu>
                <Menu>폰트 만들기</Menu>
                <Menu>둘러보기</Menu>
                <Menu>로그인</Menu>
                <Menu>회원가입</Menu>
            </HeaderMenuList>
        </HeaderWrapper>
    )
}

export default WhiteHeader;