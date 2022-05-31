import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
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
    const location = useLocation()
    const STEP_ARRAY = ['/fontcreate', '/fontcreate/second','/fontcreate/fourth']
    console.log(STEP_ARRAY.indexOf(location.pathname), location.pathname)
    return(
        <PageWrapper>
            <StepBar step={STEP_ARRAY.indexOf(location.pathname)+1}/>
            <Routes>
                <Route path="/" element={<FirsrtPannel/>}/>
                <Route path="/second" element={<SecondPannel/>}/>
                <Route path="/fourth" element={<FourthPannel/>}/>
                <Route path="/fifth" element={<FifthPannel/>}/>
                <Route path="/final" element={<FinalPannel/>}/>
            </Routes>
        </PageWrapper>
    )
}

export default FontMakePage;