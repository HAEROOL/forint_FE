import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as S from './Public.style'

const TextContent = styled.div`
    width: 80%;
    height: 556px;
    font-size: 25px;
    color: #707070;
    text-align: center;
    margin: 0 0 40px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
const StyledPannel = styled(S.Pannel)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const MoveBtn = styled(Link)`
    width: 172px;
    height: 51px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    color: #fff;
    background: #000;
    cursor: pointer;
`
const FinalPannel = () => {
    return (
        <S.Container>
            <StyledPannel>
            <TextContent>
            (설정한 이름)이 공유됐어요 다른사람들의 폰트도 보러갈까요?
            </TextContent>
            <MoveBtn to='/lookout'>보러가기</MoveBtn>
            </StyledPannel>
        </S.Container>
    )
}

export default FinalPannel;