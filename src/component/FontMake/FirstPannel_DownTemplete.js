import React from "react";
import * as S from './Public.style'

const FirsrtPannel = () => {
    return (
        <S.Container>
            <S.CommandText>step 1. 템플릿을 다운받아주세요!</S.CommandText>
            <S.Pannel>
                <S.DownloadBtnPannel>
                <S.DownloadBtn href="/asset/image/Template.jpg" type="media_type" download={'Template.jpg'}>템플릿 다운로드</S.DownloadBtn>
                </S.DownloadBtnPannel>
                <S.NextPannel>
                <S.NextBtn to='/fontcreate/second'>NEXT</S.NextBtn>
                </S.NextPannel>
            </S.Pannel>
        </S.Container>
    )
}

export default FirsrtPannel;