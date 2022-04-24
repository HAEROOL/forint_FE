import React from "react";
import styled from "styled-components";
import DisplayPannel from "../component/LookOutPage/DisplayPannel";
import FontDisplay from "../component/LookOutPage/FontDisplay";
import SearcHeader from "../component/LookOutPage/SeachHeader";
import Header from "../component/Public/Header";


const PageWrapper = styled.div`
    width: 100%;
    // height: 937px;
    background: #000;
`

const PageContent = styled.div`
`
const LookOutPage = () => {
    return(
        <PageWrapper>
            <Header/>
            <PageContent>
                <SearcHeader/>
            </PageContent>
            <DisplayPannel/>
        </PageWrapper>
    )
}

export default LookOutPage;