import React from "react";
import styled from "styled-components";
import DisplayPannel from "../component/LookOutPage/DisplayPannel";
import FontDisplay from "../component/LookOutPage/FontDisplay";
import SearcHeader from "../component/LookOutPage/SeachHeader";
import Header from "../component/Public/Header";


const PageWrapper = styled.div`
`

const PageContent = styled.div`
`
const LookOutPage = () => {
    return(
        <PageWrapper>
            <PageContent>
                <SearcHeader/>
            </PageContent>
            <DisplayPannel/>
        </PageWrapper>
    )
}

export default LookOutPage;