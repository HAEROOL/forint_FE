import React, { useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import * as S from './Profile.Style'
import { COLOR } from "../../staticColor";
import FontPannel from "../../page/FontPannel";
import { Link } from "react-router-dom";
import FontDetailPannel from "./FontDetailPannel";
const PageWrapper = styled.div`
&:before{
    width: 443px;
    margin-left: 203px;
    margin-top: -1px;
    display: block;
    content:"";
    border-top: 1px solid ${COLOR.lightgray};
}
`
const RecommendPannel = styled.div`
    display: flex;
    width: 100%;
    font-size: 25px;
`
const MovaPageButton = styled(Link)`
    background-color: ${COLOR.yellow};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    width: 150px;
    height: 40px;
    margin-left: 130px;
    text-decoration-line: none;
    color: black;
    &:hover{
        cursor: pointer;
    }
`
const MyFontPage = ({fonts}) => {
    return(
        <PageWrapper>
        <S.ProfilePannel>
            {fonts?<FontDetailPannel fontList={fonts}/>
            :
            <RecommendPannel>
                <span>
                아직 당신의 폰트가 없군요?
                </span>
                <MovaPageButton to='/fontcreate'>만들기</MovaPageButton>
            </RecommendPannel>
            }
        </S.ProfilePannel>
        </PageWrapper>
        
    )
}

export default MyFontPage;