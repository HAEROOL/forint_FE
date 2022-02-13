import React from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
    width: 100%;
    height: 937px;
    background-color: #000;
    color: #fff;
`
const DescriptionWrapper = styled.div`
    width: 80%;
    height: 566px;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    border: solid 1px white;
`
const DesScriptionContent = styled.div`
    width: 360px;
    height: 566px;
    font-size: 25px;
    text-align: center;
    border: 1px solid white;
`
const Title = styled.span`
    display: block;
    border: 1px solid white;
    margin-bottom: 13px;
`
const DescriptionText = styled.span`
    display: block;
    border: 1px solid white;
    font-size: 20px;

`
const DescriptionPage = () => {
    return(
        <PageWrapper>
            <DescriptionWrapper>
                <DesScriptionContent>
                    <Title>제작방법</Title>
                    <DescriptionText>테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.</DescriptionText>
                </DesScriptionContent>
                <DesScriptionContent>
                    <Title>사용방법</Title>
                    <DescriptionText>테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다..테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.테스트페이지입니다.</DescriptionText>
                </DesScriptionContent>
            </DescriptionWrapper>
        </PageWrapper>
    )
}

export default DescriptionPage