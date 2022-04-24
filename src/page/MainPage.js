import React from "react";
import styled from 'styled-components';

import InitialPage from "../component/MainPage/InitialPage";
const MainPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
`

const MainPage = () => {
    return (
        <MainPageWrapper>
            <InitialPage/>
        </MainPageWrapper>
    )
}

export default MainPage;