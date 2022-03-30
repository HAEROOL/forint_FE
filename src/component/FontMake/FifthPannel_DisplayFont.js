import React from "react";
import * as S from './Public.style'
import styled from "styled-components";


const DisplayPannel = styled.textarea`
    width: 402px;
    height: 429px;
    borderLL 1px solid #000;
    text-align: center;
    font-size: 20px;
    padding: 31px 34px;
    resize: none;
    margin-top: 12px;
    outline: none;
`
const FontNameInput = styled.input`
    width: 216px;
    height: 48px;
    border: 1px solid #707070;
    text-align: center;
    font-size: 15px;
    outline: none;
`
const InputWrapper = styled.div`
    width: 216px;
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 22px;
`
const FifthPannel = () => {
    return (
        <S.Container>
            <S.CommandText>step 4. 폰트가 완성됐어요!</S.CommandText>
            <S.Pannel>
                <DisplayPannel placeholder='직접 입력해볼 수도 있어요!'/>
                <InputWrapper>
                <FontNameInput placeholder="나만의 폰트 이름을 정해주세요"/>
                </InputWrapper>
                <S.StepPannel>
                <S.PrevBtn to='/fontcreate/final'>공유하기</S.PrevBtn>
                <S.NextBtn to='/'>다운로드</S.NextBtn>
                </S.StepPannel>
            </S.Pannel>
        </S.Container>
    )
}

export default FifthPannel;