import React from "react";
import styled from "styled-components";
import { COLOR } from "../../staticColor";

const BarContainer = styled.div`
    width: 780px;
    margin: 0 auto;
    display: flex;
    margin: 100px auto 0 auto;
`
const StepCircle = styled.div`
    background-color: ${props=>props.isStep?COLOR.yellow:'white'};
    border: 2px solid ${COLOR.yellow};
    width: 60px;
    height: 60px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: white;
`
const BarPannel = styled.div`
    width: 300px;
    height: 10px;
    border: 2px solid ${COLOR.yellow};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 25px -4px 0 -2px;
`
const Bar = styled.div`
    width: 300px;
    height: 20px;
`
const StepBar = ({step}) => {
    return(
        <BarContainer>
        <StepCircle isStep={step>=1}>1</StepCircle>
        <BarPannel>
        <Bar isStep={step>=2}/>
        </BarPannel>
        <StepCircle isStep={step>=2}>2</StepCircle>
        <BarPannel>
        <Bar isStep={step>=3}/>
        </BarPannel>
        <StepCircle isStep={step>=3}>3</StepCircle>
        
        </BarContainer>
    )
}

export default StepBar