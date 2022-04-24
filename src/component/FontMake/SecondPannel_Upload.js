import React from "react";
import styled from "styled-components";
import * as S from './Public.style'

export const UploadBtn = styled.label`
    width: 172px;
    height: 51px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    color: #fff;
    background: #000;
    margin: 0 auto;
    cursor: pointer;
`
const SecondPannel = () => {
    return (
        <S.Container>
            <S.CommandText>step 2. 작성한 템플릿을 업로드 해주세요!</S.CommandText>
            <S.Pannel>
                <S.DownloadBtnPannel>
                <UploadBtn for='upload-file'>템플릿 업로드</UploadBtn>
                <input type="file" id="upload-file" style={{display:"none"}}/>
                </S.DownloadBtnPannel>
                <S.StepPannel>
                <S.PrevBtn to='/fontcreate'>PREV</S.PrevBtn>
                <S.NextBtn to='/fontcreate/third'>NEXT</S.NextBtn>
                </S.StepPannel>
            </S.Pannel>
        </S.Container>
    )
}

export default SecondPannel;