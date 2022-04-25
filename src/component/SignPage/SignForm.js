import React, { useState } from "react";
import styled from "styled-components";
import * as S from './SignForm.style'
import * as P from '../Public/FormStyle'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const SignFormPageWrapper = styled.div`
`
// 정규표현식 넣어야됨
// 중복체크는 차후 구현
// api 관련 확인해야 함
const SignForm = () => {
    const dispatch = useDispatch()
    const [signInfo,setInfo] = useState({
        name:null,
        email: null,
        password: null,
        nickname: null
    })
    const [permitSign, setPermit] = useState({
        passwordSame: false,
        emailDuplicate: false,
    })
    const onChange = (e) => {
        const name = e.target.name;
        switch(name){
            case 'name':
                setInfo({
                    ...signInfo,
                    name:e.target.value
                })
                break;
            case 'email':
                setInfo({
                    ...signInfo,
                    email:e.target.value
                })
                break;
            case 'password':
                setInfo({
                    ...signInfo,
                    password:e.target.value
                })
                break;
            case 'nickname':
                setInfo({
                    ...signInfo,
                    nickname:e.target.value
                })
                break;
            case 'passwordConfirm':
                if(signInfo.password !== e.target.value){
                    e.target.style.border = '3px solid red';
                }else{
                    e.target.style.border = '3px solid green';
                    setPermit({
                        ...permitSign,
                        passwordSame: true
                    })
                }
                break;
            default:
                break;
        }
    }


   console.log(signInfo)
    const checkDuplicateEmail = (e) => {
        setPermit({
            ...permitSign,
            emailDuplicate: true
        })
    }
    console.log(permitSign)
    return(
        <SignFormPageWrapper>
            <S.SignFromWrapper>
            <S.FormText>회원가입</S.FormText>
            <S.FormWrapper>
                <P.Form>
                    <P.FormName>Email</P.FormName>
                    <P.FormInput onChange={onChange} name='email'/>
                    <S.CheckboxWrapper>
                        <S.CheckBox onClick={checkDuplicateEmail}>
                            중복확인
                            <S.CheckButton/>
                        </S.CheckBox>
                        {permitSign.emailDuplicate && <S.CheckText>확인되었습니다!</S.CheckText>}
                    </S.CheckboxWrapper>
                    
                </P.Form>
                <P.Form>
                    <P.FormName >PassWord</P.FormName>
                    <P.FormInput type="password" onChange={onChange} name='password'/>
                </P.Form>
                <P.Form checkPass={permitSign.passwordSame}>
                    <P.FormName>PassWord Check</P.FormName>
                    <P.FormInput type="password" onChange={onChange} name='passwordConfirm'/>
                </P.Form>
                <P.Form>
                    <P.FormName >Name</P.FormName>
                    <P.FormInput onChange={onChange} name='name'/>
                </P.Form>
                <P.Form>
                    <P.FormName>NickName</P.FormName>
                    <P.FormInput onChange={onChange} name='nickname'/>
                </P.Form>
            </S.FormWrapper>
            <S.SubmitBtn >회원가입</S.SubmitBtn>
        </S.SignFromWrapper>
        </SignFormPageWrapper>
    )
}

export default SignForm