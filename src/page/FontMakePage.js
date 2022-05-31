import React from "react";
import { Route, Routes } from "react-router";
import styled from "styled-components";
import FifthPannel from "../component/FontMake/FifthPannel_DisplayFont";
import FinalPannel from "../component/FontMake/FinalPannel";
import FirsrtPannel from "../component/FontMake/FirstPannel_DownTemplete";
import FourthPannel from "../component/FontMake/FourthPage_CompleteFont";
import SecondPannel from "../component/FontMake/SecondPannel_Upload";
import StepBar from "../component/FontMake/StepBar";
import ThirdPannel from "../component/FontMake/ThirdPannel_Loading";
import Header from "../component/Public/Header";

const PageWrapper = styled.div`
`
const FontMakePage = () => {
    return(
        <PageWrapper>
            <StepBar step={1}/>
            <Routes>
                <Route path="/" element={<FirsrtPannel/>}/>
                <Route path="/second" element={<SecondPannel/>}/>
                {/* <Route path="/third" element={<ThirdPannel/>}/> */}
                <Route path="/fourth" element={<FourthPannel/>}/>
                <Route path="/fifth" element={<FifthPannel/>}/>
                <Route path="/final" element={<FinalPannel/>}/>
            </Routes>
        </PageWrapper>
    )
}

export default FontMakePage;