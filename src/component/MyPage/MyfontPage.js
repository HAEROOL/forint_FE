import React, { useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import * as S from './Profile.Style'
import { COLOR } from "../../staticColor";
const PageWrapper = styled.div`
&:before{
    width: 443px;
    margin-left: 203px;
    margin-top: -2px;
    display: block;
    content:"";
    border-top: 1px solid ${COLOR.lightgray};
}
`
const dummy = {
    email:'asdasdfasdff@aasdfasdfdsf.com',
    name: 'LEess',
    nickname: 'cococo',
    password: null,
    fonts:[]
}
const MyFontPage = () => {

    return(
        <PageWrapper>
        <S.ProfilePannel>
            vhsxmvpdp
        </S.ProfilePannel>
        </PageWrapper>
        
    )
}

export default MyFontPage;