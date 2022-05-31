import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as S from './Public.style'
import { COLOR } from "../../staticColor";
const TextContent = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 596px;
    font-size: 25px;
    color: #707070;
    text-align: center;
    margin: 0 0 40px 0;
`
const StyledPannel = styled(S.Pannel)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 2px 2px 10px silver;
`

const GoMyPageBtn = styled(Link)`
width: 500px;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
font-size: 25px;
color: black;
background: ${COLOR.heavyyellow};
cursor: pointer;
border-radius: 10px;
font-weight: 600;
text-decoration-line: none;
font-size: 40px;
`
const FourthPannel = () => {
    return (
        <S.Container>
            <S.CommandText>당신의 인생폰트가 제작되고 있습니다!</S.CommandText>
            <S.CommandText style={{fontSize:'25px'}}>제작 소요시간 : 5 ~ 10분</S.CommandText>
            <GoMyPageBtn to='/mypage' style={{margin:'0 auto'}}>마이페이지 바로가기</GoMyPageBtn>
        </S.Container>
    )
}

export default FourthPannel;