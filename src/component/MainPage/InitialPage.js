import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const ContentPanel = styled.div`
    width: 65%;
    height: 30vw;
    border: 1px #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    @media screen and (max-width: 1050px){
        display: block;
        width: 90%;
        height: auto;
    }
`
const LeftElement = styled.div`
    width: 50%;
    height: 100%;
    @media screen and (max-width: 1050px){
        width: 100%;
        margin: 0 auto;
    }
`
const RightElement = styled.div`
    width: 45%;
    height: 100%;
    overflow-x: hidden;
    max-width: 561px;
    @media screen and (max-width: 1050px){
        width: 100%;
        height: auto;
        margin: 0 auto;
    }
`
const CardWrapper=styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`
const ImageBox = styled.div`
    height: 100%;
    // border: 1px solid;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 1050px){
        margin: 25px auto;
        width: 100%;
        border-radius: 10px;
    }
`
const Background = styled.img`
    width: 70%;
    height: 100%;
    margin: 0 auto;
`
const IntorduceBox = styled.div`
    width: 100%;
    display: ${props => props.isPage?'flex':'none'};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 10px;
    @media screen and (max-width: 1050px){
        margin: 25px auto;
        width: 100%;
        height: 30vh;
        border-radius: 10px;
    }

`
const IntroduceText = styled.span`
    width: 90%;
    display: block;
    font-size: 24px;
    @media screen and (max-width: 1050px){
        width: 100%;
        text-align: center;
    }

`
const TryButton = styled(Link)`
    display: flex;
    justify-content: center;
    width: 140px;
    height: 45px;
    font-size: 19px;
    align-items: center;
    background: #000;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    text-decoration-line: none;
    margin: 50px 0 0 0;
`
const MainText = styled.span`
    font-weight: 700;
    font-size: 50px;
`
const MoveBtn = styled.button`
`
const InitialPage = () =>{
    const [number, setPage] = useState(1);
    const moveLeft = () => {
        if(number - 1 > 0){
            setPage(number - 1);
        }else{
            setPage(4)
        }
    }
    const moveRight = () => {
        if(number + 1 > 4){
            setPage(1);
        }else{
            setPage(number + 1)
        }
        
    }
    console.log(number)
    return (
        <ContentPanel>
            <LeftElement>
            <ImageBox>
                <Background  alt = 'backgroundImg' src="/asset/image/feather-g20853671a_1920.jpg"/>
            </ImageBox>
            </LeftElement>
            <MoveBtn onClick={moveLeft}>left</MoveBtn>
            <RightElement>
                <CardWrapper>
                <IntorduceBox isPage={number === 1}>
                    <IntroduceText><MainText>Mr.Hant는</MainText><br/><br/>직접 적은 글자를 폰트로 바꿔주는 친구에오</IntroduceText>
                </IntorduceBox>
                <IntorduceBox isPage={number === 2}>
                    <IntroduceText>글을 써서 Hant에게 보여주면<br/><br/><MainText>폰트로 만들어 줘요!</MainText></IntroduceText>
                </IntorduceBox>
                <IntorduceBox isPage={number === 3}>
                    <IntroduceText><MainText>뭐라적지</MainText><br/><br/>슬슬 할말이 없달까</IntroduceText>
                </IntorduceBox>
                <IntorduceBox isPage={number === 4}>
                    <IntroduceText><MainText>해보죠</MainText><br/><br/>버튼을 누르면 페이지로 이동해요</IntroduceText>
                    <TryButton to='/fontcreate'>Try it</TryButton>
                </IntorduceBox>                    
                </CardWrapper>
            </RightElement>
            <MoveBtn onClick={moveRight}>right</MoveBtn>
        </ContentPanel>
            
    )   
}

export default InitialPage;