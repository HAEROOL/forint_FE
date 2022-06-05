import styled from "styled-components";
import {COLOR} from '../../staticColor'

export const FormText = styled.span`
display: block;
margin-top: 15px;
font-size: 40px;
text-align: center;
`
export const SignFromWrapper = styled.div`
width: 453px;
border: 1px solid ${COLOR.lightgray};
margin: 0 auto;
margin-top: 20px;
padding: 37px 22px 30px 22px;
`

export const FormWrapper = styled.form`
    width: 360px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
`

export const CheckButton = styled.div`
    width: 16px;
    height: 16px;
    border: solid black 1px;
    margin: 3px 10px 0 0;
    cursor: pointer;
`
export const CheckBox = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    color: ${COLOR.gray}
`
export const CheckboxWrapper = styled.div`
    width: 370px;
    display: flex;
    justify-content: space-between;
`
export const CheckText = styled.div`
    margin-right: 5px;
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