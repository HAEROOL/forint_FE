import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const ContentPanel = styled.div`
    width: 70%;
    margin: 0 auto;
    margin-top: 150px;
`
const MainImage = styled.img`
    width: 500px;
`
const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const ImageWrapper = styled.div`
   display: flex;
   justify-content: end;
   margin: auto 0;
`
const Comment = styled.div`
    font-size: 50px;
    margin: auto 0;
    min-width: 794px;
`
const InitialPage = () =>{

    return (
        <ContentPanel>
            <Content>
                <Comment>당신의 손글씨<br/>폰트로 만들어지는 상상을 해보셨나요?</Comment>
                <ImageWrapper>
                <MainImage src="/asset/image/mainPageImg.svg"/>
                </ImageWrapper>
            </Content>
            
        </ContentPanel>
            
    )   
}

export default InitialPage;