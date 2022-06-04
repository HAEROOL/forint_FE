import React from "react";
import styled from "styled-components";

const TestDiv = styled.input`
    width: 500px;
    height: 300px;
    border: 2px solid black;
    @font-face{
        font-family: East Sea Dokdo;
        src: url("/asset/font/123example.ttf");
        font-weight: 500;
    }
    font-family: East Sea Dokdo;
    font-size: 45px;
`
const TestPannel = () =>{
    return(
        <>
        <TestDiv/>
        </>
    )
}

export default TestPannel  