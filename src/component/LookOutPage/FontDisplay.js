import React from "react";
import styled from "styled-components";

const DisplayWrapper = styled.div`
    width: 400px;
    height: 315px;
    margin: 0 145px 50px 0;
`
const FontTitle = styled.div`
    font-size: 15px;
    color: #fff;
    overflow: visible;
    margin-bottom: 14px;
`
const FontPannel = styled.div`
    width: 382px;
    height: 212px;
    padding: 22px 14px;
    background: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 14px;
`
const DetailContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`
const GoodBtn = styled.div`
    display: flex;
    width: 50px;
    justify-content: space-between;
    align-items: center;
`
const Icon = styled.img`
    width: 18px;
    height: 18px;
    cursor: pointer;
`
const Rate = styled.span`
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    margin-left: 5px;
`
const DownloadBtn = styled.div`
    padding: 2px 6px;
    border: 2px solid #fff;
    color: #fff;
    cursor: pointer;
`

const FontDisplay = ({data}) => {
    return(
        <DisplayWrapper>
            <FontTitle>{data.title}</FontTitle>
            <FontPannel>폰트가 적용된 텍스트를 Display</FontPannel>
            <DetailContainer>
                <GoodBtn>
                    <Icon src="/asset/image/HeartIcon.svg"/>
                    <Rate>{data.like}</Rate>
                </GoodBtn>
                <DownloadBtn>다운로드</DownloadBtn>
            </DetailContainer>
        </DisplayWrapper>
    )
}

export default FontDisplay;