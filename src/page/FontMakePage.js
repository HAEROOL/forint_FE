import React from "react";
import styled from "styled-components";
import FifthPannel from "../component/FontMake/FifthPannel_DisplayFont";
import FinalPannel from "../component/FontMake/FinalPannel";
import FirsrtPannel from "../component/FontMake/FirstPannel_DownTemplete";
import FourthPannel from "../component/FontMake/FourthPage_CompleteFont";
import SecondPannel from "../component/FontMake/SecondPannel_Upload";
import ThirdPannel from "../component/FontMake/ThirdPannel_Loading";
import WhiteHeader from "../component/Public/WhiteHeader";

const PageWrapper = styled.div`
    width: 100%;
    // height: 937px;
    background: #000;
`
const FontMakePage = () => {
    return(
        <PageWrapper>
            <WhiteHeader/>
            <FirsrtPannel/>
            <SecondPannel/>
            <ThirdPannel/>
            <FourthPannel/>
            <FifthPannel/>
            <FinalPannel/>
        </PageWrapper>
    )
}

export default FontMakePage;