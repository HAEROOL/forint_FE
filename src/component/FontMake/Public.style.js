import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR } from "../../staticColor";
export const Container = styled.div`
    width: 780px;
    margin: 0 auto;
    margin-top: 50px;
`
export const CommandText = styled.span`
    display: block;
    width: 780px;
    font-size: 35px;
    text-align: center;
    margin-bottom: 15px;
`
export const Pannel = styled.div`
    width: 780px;
    height: 247px;
    border: 1px solid ${COLOR.gray};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const DownloadBtnPannel = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const DownloadBtn = styled.a`
    width: 400px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    text-align: center;
    margin: 0 auto;
    margin: 20px 0 0 0;
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid #ddd;
    transition: all 0.2s;
    text-decoration-line: none;
    color: black;
    font-weight: 600;
    background-color: ${COLOR.heavyyellow};
    &:hover{
        top: 265px;
        box-shadow: 2px 2px 10px silver;
    }
    `
export const NextBtn = styled(Link)`
    width: 172px;
    height: 51px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    color: black;
    background: ${COLOR.yellow};
    cursor: pointer;
    border-radius: 10px;
    font-weight: 600;
    text-decoration-line: none;
`
export const PrevBtn = styled(Link)`
width: 172px;
height: 51px;
display: flex;
justify-content: center;
align-items: center;
font-size: 25px;
color: black;
background: ${COLOR.yellow};
cursor: pointer;
border-radius: 10px;
font-weight: 600;
text-decoration-line: none;
`
export const NextPannel = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    
`
export const StepPannel = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`