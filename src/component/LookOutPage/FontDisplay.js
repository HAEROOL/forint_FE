import React from "react";
import styled from "styled-components";
const DisplayWrapper = styled.div`
    width: 400px;
    height: 340px;
    position: relative;
    margin: 0 7px 30px 7px;
    @font-face {
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 400;
        font-display: block;
        src: url(https://fonts.gstatic.com/l/font?kit=4iCs6KVjbNBYlgo6fRzll2CmVuUF5-hvgDxg32eKctQUSyiDGQ&skey=7e59fc036a1a8481&v=v20) format('woff2');
      }
`

const AnimationWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    right: 0px;
    border: 1px solid #ddd;
    border-radius: 10px;
    transition: all 0.3s;
    padding-bottom: 5px;
    &:hover{
        box-shadow: 2px 2px 10px silver;
        top: -2px;
        right: 2px;
    }
`
const FontTitle = styled.div`
    font-size: 15px;
    color: #fff;
    overflow: visible;
    margin-bottom: 14px;
`
const FontPannel = styled.div`
    height: 212px;
    padding: 22px 14px;
    background: #fff;
    font-size: 30px;
    text-align: center;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    &:after{
        content: "";
        display: block;
        border-bottom: 1px solid #ddd;
        width: 98%;
        margin: 0 auto;
        margin-top: 153px;
    }
    
`
const DetailContainer = styled.div`
    display: flex;
    width: 90%;
    margin: 0 auto;
    justify-content: space-between;
`
const GoodBtn = styled.div`
    display: flex;
    width: 56px;
    justify-content: space-between;
    align-items: center;
    
`
const Icon = styled.img`
    width: 18px;
    height: 18px;
    cursor: pointer;
    margin-top: 4px;
`
const Rate = styled.span`
    font-size: 18px;
    font-weight: 700;
    margin-left: 1px;
`
const DownloadBtn = styled.div`
    padding: 2px 6px;
    border: 2px solid #fff;
    cursor: pointer;
`


const FontDisplay = ({data}) => {
    return(
        <DisplayWrapper>
            <AnimationWrapper>
            <FontTitle>{data.title}</FontTitle>
            <FontPannel>This is your font, guys.</FontPannel>
            <DetailContainer>
                <GoodBtn>
                    <Icon src="/asset/image/HeartIcon.svg"/>
                    <Rate>{data.like}</Rate>
                </GoodBtn>
                <DownloadBtn>다운로드</DownloadBtn>
            </DetailContainer>
            </AnimationWrapper>
        </DisplayWrapper>
    )
}

export default FontDisplay;