import React, { useState } from "react";
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

const PageBtn = styled.div`
    display: flex;
    width: 130px;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    transition: 0.2s ease;
    cursor: pointer;
    bottom: 8px;
    right:${props => props.page?'0px':''};
    left:${props => !props.page?'0px':''};
    &:hover{
        right:${props => props.page?'-2px':''};
        left:${props => !props.page?'-2px':''};
    }
`
const Arrow = styled.div`
position: relative;
&:after {
    position: absolute;
    left: ${props => props.page?'-40px': '15px'}; 
    top: -10px; 
    content: '';
    width: 20px;
    height: 20px;
    border-top: 5px solid #000;
    border-right: 5px solid #000;
    transform: ${props => props.page?'rotate(45deg)':'rotate(225deg)'};
    transition: 0.2 ease;
}
`
const FirsrtPannel = () => {
    const [page, setPage] = useState(0)
    const clickBtn = () => {
        setPage(page+1)
    }
    return (
        <S.Container>
            <S.CommandText>템플릿을 다운받아 작성 해주세요.</S.CommandText>
            <S.Pannel>
            {page%2 === 0?
            <>
            <PageBtn onClick={clickBtn} page={page%2 === 0}>
                작성예시 보기
                <Arrow page={page%2 === 0}/>
            </PageBtn>
                <WarningText>
                    <img src="/asset/image/Bulb.png" alt="warn"/>
                    템플릿 작성시 주의사항
                </WarningText>
                <TextPannel>
                <WarnDetail>1. &nbsp;  칸 가운데에 맞춰 최대한 반듯하게 글자를 작성해 주세요.</WarnDetail>
                <WarnDetail>2.  &nbsp; 템플릿 스캔 시 반듯한 종이를 사용해 주세요.<br/> &nbsp;  &nbsp;  &nbsp; ( 안드로이드 및 ios 문서스캔 기능 사용 필수 )</WarnDetail>
                <br/>
                <WarnDetail style={{textAlign: 'center'}}>* 태블릿을 이용해 작성하는 것을 추천</WarnDetail>
                </TextPannel>
                </>
            :<>
                <PageBtn onClick={clickBtn} page={page%2 === 0}>
                    <Arrow page={page%2 === 0}/>
                    주의사항 보기
                </PageBtn>
                <WarningText>
                    <img src="/asset/image/Bulb.png" alt="warn"/>
                    작성예시
                </WarningText>
            </>}
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