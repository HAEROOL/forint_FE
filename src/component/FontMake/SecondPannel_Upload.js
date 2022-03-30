import React from "react";
import * as S from './Public.style'


const SecondPannel = () => {
    return (
        <S.Container>
            <S.CommandText>step 2. 작성한 템플릿을 업로드 해주세요!</S.CommandText>
            <S.Pannel>
                <S.DownloadBtnPannel>
                <S.DownloadBtn>템플릿 업로드</S.DownloadBtn>
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