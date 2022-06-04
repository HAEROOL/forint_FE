import styled from "styled-components";
import {COLOR} from '../../staticColor'


export const LoginPlate = styled.div`
    width: 453px;
    border: 1px solid ${COLOR.lightgray};
    margin: 0 auto;
    margin-top: 100px;
    padding: 37px 22px 50px 22px;
`
export const LoginText = styled.div`
    display: block;
    margin-top: 15px;
    font-size: 40px;
    text-align: center;
`
export const FormWrapper = styled.div`
    width: 360px;
    height: 170px;
    margin: 0 auto;
    padding: 55px 0 0 0;
`

export const Form = styled.div`
    width: 360px;
    heigth: 72px;
    margin: 0 0 22px 0;
`
export const FormInput = styled.input`
    width: 320px;
    height: 50px;
    padding: 0 20px;
    border: 1px solid ${COLOR.lightgray};
    corlor: ${COLOR.lightgray};
    border-radius: 5px;
    font-size: 25px;
    margin-bottom: 25px;
`
export const FormName = styled.span`
    font-size: 20px;
    font-weight: 600;
`

export const DeleteAll = styled.div`
    width: 16px;
    height: 16px;
    margin-left: 20px;
    position: relative;
    left: 85%;
    bottom: 34%;
    cursor: pointer;
    background: #fff;
`
export const SubmitBtn = styled.div`
    width: 360px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: ${COLOR.yellow};
    border-radius: 5px;
    margin: 0 auto;
    font-size: 35px;
    margin-top: 25px;
`

export const LogoImg = styled.img`
    width: 150px;
`
export const LogoPannel = styled.div`
    width: 150px;
    margin: 0 auto;
`