import React from "react";
import styled from "styled-components";
import { COLOR } from "../../staticColor";
import * as S from './Public.style'

const WarningText = styled.div`
    width: 100%;
    display: flex;;
    justify-content: center;
    align-items: center;
    color: ${COLOR.red};
    font-size: 30px;
`

const WarnDetail = styled.div`
    width: 80%;
    font-size: 25px;
`
const TextPannel = styled.div`
    width: 100%;
    display: flex;;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const FirsrtPannel = () => {
    return (
        <S.Container>
            <S.CommandText>템플릿을 다운받아주세요.</S.CommandText>
            <S.Pannel>
                <WarningText>
                    <img src="/asset/image/Bulb.png" alt="warn"/>
                    템플릿 작성시 주의사항
                </WarningText>
                <TextPannel>
                <WarnDetail>1. &nbsp;  칸 가운데에 맞춰 최대한 반듯하게 글자를 작성해 주세요.</WarnDetail>
                <WarnDetail>2.  &nbsp; 템플릿 스캔 시 반듯한 종이를 사용해 주세요.<br/> &nbsp;  &nbsp;  &nbsp; ( 안드로이드 및 ios 문서스캔 기능 사용 필수 )</WarnDetail>
                <br/>
                <WarnDetail style={{textAlign: 'center;'}}>* 태블릿을 이용해 작성하는 것을 추천</WarnDetail>
                </TextPannel>
            </S.Pannel>
            <S.DownloadBtnPannel>
                <S.DownloadBtn href="/asset/image/Template.jpg" type="media_type" download={'Template.jpg'}>템플릿 다운로드</S.DownloadBtn>
                </S.DownloadBtnPannel>
                <S.NextPannel>
                <S.NextBtn to='/fontcreate/second'>NEXT</S.NextBtn>
                </S.NextPannel>
        </S.Container>
    )
}

export default FirsrtPannel;