import React, { useRef, useState } from "react";
import styled from "styled-components";
import * as S from './SignForm.style'
import * as P from '../Public/FormStyle'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkEmailRegEx } from "../utils/checkRefExp";
const SignFormPageWrapper = styled.div`
`
// api 관련 확인해야 함
const SignForm = () => {
    const dispatch = useDispatch()
    const pwdRef = useRef()
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
                if(pwdRef.current.value !== e.target.value){
                    pwdRef.current.style.border = '3px solid red';
                    setPermit({
                        ...permitSign,
                        passwordSame: false
                    })
                }else{
                    pwdRef.current.style.border = '3px solid green';
                    setPermit({
                        ...permitSign,
                        passwordSame: true
                    })
                }
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
                    setPermit({
                        ...permitSign,
                        passwordSame: false
                    })
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
        console.log('계정 중복을 체크합니다.')
        console.log(signInfo.email)
        if(checkEmailRegEx(signInfo.email)){
            // dispatch(checkDuplicate(e.target.email))
            alert('맞는 형식입니다')
        }else{
            alert('이메일 형식에 맞지 않습니다')
        }
    }
    // useEffect(() => {
    //     if(isDuplicate){
    //         alert('중복된 계정이 존재합니다')
            // setPermit({
            //     ...permitSign,
            //     emailDuplicate: true
            // })
    //     }else{
            // setPermit({
            //     ...permitSign,
            //     emailDuplicate: false
            // })
    //     }
    // },[isDuplicateResponse])
    
    const submitSignInfo = () => {
        console.log('회원가입 정보를 넘겨줍니다')
        if(!(signInfo.email && signInfo.name && signInfo.nickname && signInfo.password)){
            alert('모두 입력해주세요')
        }else if(!permitSign.emailDuplicate){
            alert('중복된 계정입니다. 다른 계정을 사용해주세요')
        }else if(!permitSign.passwordSame){
            alert('비밀번호와 비밀번호 확인이 맞지 않습니다')
        }else{
            // dispatch(register(signInfo))
            console.log('회원가입을 진행합니다.')
        }
    }
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
                    <P.FormInput type="password" onChange={onChange} name='passwordConfirm' ref={pwdRef}/>
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
            <S.SubmitBtn onClick={() => submitSignInfo()} >회원가입</S.SubmitBtn>
        </S.SignFromWrapper>
        </SignFormPageWrapper>
    )
}

export default SignForm