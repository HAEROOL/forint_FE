import React from "react";
import styled from "styled-components";
import DisplayPannel from "../component/LookOutPage/DisplayPannel";

const PageWrapper = styled.div`
`
const LookOutPage = () => {
    return(
        <PageWrapper>
            <DisplayPannel/>
        </PageWrapper>
    )
}

export default LookOutPage;