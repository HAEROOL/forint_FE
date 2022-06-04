import styled from "styled-components";
import {COLOR} from '../../staticColor'
export const Form = styled.div`
    width: 360px;
    heigth: 72px;
    margin-bottom: 15px;
`
export const FormInput = styled.input`
    width: 320px;
    height: 50px;
    padding: 0 20px;
    border: 1px solid ${COLOR.lightgray};
    corlor: ${COLOR.gray};
    border-radius: 5px;
    font-size: 25px;
   
`
export const FormName = styled.span`
    font-size: 20px;
    font-weight: 600;
`