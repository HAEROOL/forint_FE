import React from "react";
import styled from "styled-components";
import * as S from './Public.style'

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
const FourthPannel = () => {
    return (
        <S.Container>
            <S.CommandText>step 4.폰트가 완성됐어요!</S.CommandText>
            <StyledPannel>
            <TextContent>
            폰트가 완성됐어요! 확인하러 가볼까요?
            </TextContent>
            <S.NextPannel>
                <S.NextBtn to='/fontcreate/fifth'>NEXT</S.NextBtn>
            </S.NextPannel>
            </StyledPannel>
            
        </S.Container>
    )
}

export default FourthPannel;