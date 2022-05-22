import { Link } from "react-router-dom";
import styled from "styled-components";
export const Container = styled.div`
    width: 494px;
    margin: 0 auto;
    margin-top: 50px;
`
export const CommandText = styled.span`
    display: block;
    width: 494px;
    font-size: 20px;
    text-align: center;
    margin-bottom: 9px;
`
export const Pannel = styled.div`
    width: 472px;
    height: 647px;
    padding: 0 11px 19px 11px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 2px 2px 10px silver;
`
export const DownloadBtnPannel = styled.div`
    width: 100%;
    height: 596px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`
export const DownloadBtn = styled.a`
    width: 172px;
    height: 51px;
    display: flex;
    top: 270px;
    position: absolute;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    text-align: center;
    margin: 0 auto;
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid #ddd;
    transition: all 0.2s;
    text-decoration-line: none;
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
    font-size: 15px;
    color: #fff;
    background: #000;
    cursor: pointer;
    border-radius: 10px;
    text-decoration-line: none;
`
export const PrevBtn = styled(Link)`
    width: 172px;
    height: 51px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    color: #fff;
    background: #000;
    cursor: pointer;
    border-radius: 10px;
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