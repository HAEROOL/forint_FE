import React from "react";
import styled from "styled-components";
import * as S from './Public.style'

const TextContent = styled.div`
    width: 80%;
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
`
const LoadingBar = styled.div`
    width: ${props => {
        return props.loading*268;
    }}px;
    height: 15px;
    background: #707070;
`
const LoadingBarWrapper = styled.div`
    width: 268px;
    height: 15px;
    border: 1px solid #707070;
    margin: 40px 0 0 0;
`
const ThirdPannel = () => {
    return (
        <S.Container>
            <S.CommandText>step 3.잠시만 기다려 주세요</S.CommandText>
            <StyledPannel>
            <TextContent>
                폰트로 변환중이에요. 다른 페이지로 넘어가면 오류가 발생 할 수 있으니 잠시만 기다려주세요
                </TextContent>
            <iframe src="https://giphy.com/embed/KD7Ud1YX1nYRkb2r29" width="125" height="125" frameBorder="0" class="giphy-embed"></iframe>
            <LoadingBarWrapper>
                <LoadingBar loading={0.43}/>
            </LoadingBarWrapper>
            </StyledPannel>
        </S.Container>
    )
}

export default ThirdPannel;