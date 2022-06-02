import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import FifthPannel from "../component/FontMake/FifthPannel_DisplayFont";
import FinalPannel from "../component/FontMake/FinalPannel";
import FirsrtPannel from "../component/FontMake/FirstPannel_DownTemplete";
import FourthPannel from "../component/FontMake/FourthPage_CompleteFont";
import SecondPannel from "../component/FontMake/SecondPannel_Upload";
import StepBar from "../component/FontMake/StepBar";

const PageWrapper = styled.div`
`
const FontMakePage = () => {
    const location = useLocation()
    const STEP_ARRAY = ['/fontcreate', '/fontcreate/second','/fontcreate/fourth']
    const {isLoggedIn} = useSelector((state) => state.auth)
    const navigation = useNavigate()
    useEffect(() => {
        if(!isLoggedIn){
            alert('로그인 해주세요')
            navigation('/')
        }
    },[isLoggedIn, navigation])
    return(
        <PageWrapper>
            {isLoggedIn?
            <> <StepBar step={STEP_ARRAY.indexOf(location.pathname)+1}/>
            <Routes>
                <Route path="/" element={<FirsrtPannel/>}/>
                <Route path="/second" element={<SecondPannel/>}/>
                <Route path="/fourth" element={<FourthPannel/>}/>
            </Routes>
            </>:null}
            
        </PageWrapper>
    )
}

export default FontMakePage;