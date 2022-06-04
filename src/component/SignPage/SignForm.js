import React, { useRef, useState } from "react";
import styled from "styled-components";
import * as S from './SignForm.style'
import * as P from '../Public/FormStyle'
import { useDispatch } from "react-redux";
import { register} from "../../store/auth";
import { useEffect } from "react";
import { checkEmailRegEx } from "../utils/checkRefExp";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router";
const SignFormPageWrapper = styled.div`
`
// api 관련 확인해야 함
const SignForm = () => {
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const pwdRef = useRef()
    const [signInfo,setInfo] = useState({
        name:null,
        email: null,
        password: null,
        nickname: null
    })
    const [permitSign, setPermit] = useState({
        passwordSame: false,
        emailDuplicate: null,
        nicknameDuplicate: null
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


    const checkDuplicateEmail = (e) => {
        if(checkEmailRegEx(signInfo.email)){
            axios.post('http://127.0.0.1:8000/users/registration/email-check/',{email:signInfo.email})
            .then(function(response){
                setPermit({
                    ...permitSign,
                    emailDuplicate: true
                })
            })
            .catch(function(error){
                setPermit({
                    ...permitSign,
                    emailDuplicate: false
                })
            })
        }else{
            alert('이메일 형식에 맞지 않습니다')
        }
    }
    const checkDuplicateNickname = (e) => {
        console.log(signInfo.nickname)
        axios.post('http://127.0.0.1:8000/users/registration/nickname-check/',{nickname: signInfo.nickname})
        .then(function(response){
            setPermit({
                ...permitSign,
                nicknameDuplicate: true
            })
        })
        .catch(function(error){
            setPermit({
                ...permitSign,
                nicknameDuplicate: false
            })
        })
    }

    
    const submitSignInfo = () => {
        // console.log('회원가입 정보를 넘겨줍니다')
        // if(!(signInfo.email && signInfo.name && signInfo.nickname && signInfo.password)){
        //     alert('모두 입력해주세요')
        // }else if(!permitSign.emailDuplicate){
        //     alert('중복된 계정입니다. 다른 계정을 사용해주세요')
        // }else if(!permitSign.passwordSame){
        //     alert('비밀번호와 비밀번호 확인이 맞지 않습니다')
        // }else{
        //     dispatch(register(signInfo))
        //     console.log('회원가입을 진행합니다.')
        //     console.log(signInfo)
        // }
        // dispatch(register(signInfo))
        axios.post('http://127.0.0.1:8000/users/registration/',{
            username: signInfo.name,
            email: signInfo.email,
            password1: signInfo.password,
            password2: signInfo.password,
            nickname: signInfo.nickname,
            profile_image: null
        }).then(function(response){
            alert('회원가입 성공!')
            navigation('/')
        })
        .catch(function(error){
            alert('실패했습니다. 다시 시도해주세요')
        })
    }
    return(
        <SignFormPageWrapper>
            <S.SignFromWrapper>
                <S.LogoPannel>
            <S.LogoImg src='/asset/image/Forint_logo.png'/>
            </S.LogoPannel>
            <S.FormText>회원가입</S.FormText>
            <S.FormWrapper>
                <P.Form>
                    <P.FormInput onChange={onChange} name='email' placeholder='이메일'/>
                    <S.CheckboxWrapper>
                        <S.CheckBox onClick={checkDuplicateEmail}>
                        <S.CheckButton/>
                            중복확인
                        </S.CheckBox>
                        {permitSign.emailDuplicate && <S.CheckText>확인되었습니다!</S.CheckText>}
                        {permitSign.emailDuplicate!==null && !permitSign.emailDuplicate && <S.CheckText>중복된 계정이 존재합니다.</S.CheckText>}
                    </S.CheckboxWrapper>
                </P.Form>
                <P.Form>
                    <P.FormInput type="password" onChange={onChange} name='password'placeholder='비밀번호'/>
                </P.Form>
                <P.Form checkPass={permitSign.passwordSame}>
                    <P.FormInput type="password" onChange={onChange} name='passwordConfirm' ref={pwdRef}placeholder='비밀번호 확인'/>
                </P.Form>
                <P.Form>
                    <P.FormInput onChange={onChange} name='name'placeholder='이름'/>
                </P.Form>
                <P.Form>
                    <P.FormInput onChange={onChange} name='nickname' placeholder='닉네임'/>
                    <S.CheckboxWrapper>
                        <S.CheckBox onClick={checkDuplicateNickname}>
                        <S.CheckButton/>
                            중복확인
                        </S.CheckBox>
                        {permitSign.nicknameDuplicate && <S.CheckText>확인되었습니다!</S.CheckText>}
                        {permitSign.nicknameDuplicate!==null && !permitSign.nicknameDuplicate && <S.CheckText>중복된 닉네임이 존재합니다.</S.CheckText>}
                    </S.CheckboxWrapper>
                </P.Form>
            </S.FormWrapper>
            <S.SubmitBtn onClick={() => submitSignInfo()} >회원가입</S.SubmitBtn>
        </S.SignFromWrapper>
        </SignFormPageWrapper>
    )
}

export default SignForm