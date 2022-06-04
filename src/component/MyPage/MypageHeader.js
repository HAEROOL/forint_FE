import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router";
import { COLOR } from "../../staticColor";
const Header = styled.div`
    width: 600px;
    display: flex;
`
const HeaderElement = styled(Link)`
    width: 100px;
    border: 1px solid ${COLOR.lightgray};
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px 5px 0 0;
    border-bottom: ${props => props.selected?'none':'1px solid'+COLOR.lightgray};
    text-decoration-line: none;
    color: black;
`

const MypageHeader = () => {
    const location = useLocation()
    console.log(location)
    return(
        <>
        <Header>
            <HeaderElement to='/mypage' selected={location.pathname==='/mypage'}>내 정보</HeaderElement>
            <HeaderElement to='/mypage/fonts' selected={location.pathname==='/mypage/fonts'}>폰트보기</HeaderElement>
        </Header>
        </>
    )
}

export default MypageHeader