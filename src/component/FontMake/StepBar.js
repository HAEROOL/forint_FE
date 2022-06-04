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
    background-color: ${props=>props.isStep?COLOR.heavyyellow:'white'};
    border: 2px solid ${COLOR.heavyyellow};
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
    border: 2px solid ${COLOR.heavyyellow};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${props=>props.isStep?'25px -4px 0 -3px':'25px -4px 0 -2px'};
`
const Bar = styled.div`
    width: 300px;
    height: 20px;
    background-color: ${props=>props.isStep?COLOR.heavyyellow:''};
`
const StepBar = ({step}) => {
    return(
        <BarContainer>
        <StepCircle isStep={step>=1}>1</StepCircle>
        <BarPannel isStep={step>=2}>
        <Bar isStep={step>=2}/>
        </BarPannel>
        <StepCircle isStep={step>=2}>2</StepCircle>
        <BarPannel isStep={step>=3}>
        <Bar isStep={step>=3}/>
        </BarPannel>
        <StepCircle isStep={step>=3}>3</StepCircle>
        
        </BarContainer>
    )
}

export default StepBar