import React, { useState } from "react";
import styled from "styled-components";
import * as S from './SignForm.style'
import * as P from '../Public/FormStyle'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const SignFormPageWrapper = styled.div`
    width: 1920px;
    height: 853px;
    background: #000;
`


// 정규표현식 넣어야됨
// 중복체크는 차후 구현
// api 관련 확인해야 함
const SignForm = () => {
    const dispatch = useDispatch()
    const {form, auth, authError} = useSelector(({auth}) => ({
        form: auth.register
    }))

    const onChange = (e) => {
        const {value, name} = e.target;
    }
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

    const clickSign = (e) => {
        // if(permitSign.passwordSame && permitSign.emailDuplicate){
            const {username, password, passwordConfirm, name, nickname} = form
            if (password !== passwordConfirm){
                alert('패스워드가 서로 다릅니다')
                return;
            }
        // }else{
        //     if(!permitSign.emailDuplicate){
        //         alert('E-Mail 중복 확인을 해주세요')
        //     }
        //     if(!permitSign.passwordSame){
        //         alert('비밀번호를 다시 확인해주세요')
        //     }
        //     if(!signInfo.name || !signInfo.nickname || !signInfo.password || !signInfo.email){
        //         alert('모두 작성해주세요')
        //     }
        // }
    }


    useEffect(() => {
        if(authError){
            console.log('오류')
            console.log(authError)
            return
        }
        if(auth){
            console.log('성공')
            console.log(auth)
        }
    },[auth, authError])
    
    const changeEmailform = (e) => {
        setInfo({
            ...signInfo,
            email: e.target.value
        })
    }
    const changePasswordform = (e) => {
        setInfo({
            ...signInfo,
            password: e.target.value
        })
    }
    const changeNameform = (e) => {
        setInfo({
            ...signInfo,
            name: e.target.value
        })
    }
    const changeNickNameform = (e) => {
        setInfo({
            ...signInfo,
            nickname: e.target.value
        })
    }
    const comparePassword = (e) => {
        if(e.target.value === signInfo.password){
            setPermit({
                ...permitSign,
                passwordSame: true
            })
            e.target.style.border = '2px solid black'
        }else{
            setPermit({
                ...permitSign,
                passwordSame: false
            })
            e.target.style.border = '2px solid red'
        }
        
    }
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
                    <P.FormInput onChange={onChange} name='username' value={form.username}/>
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
                    <P.FormInput type="password" onChange={onChange} name='password' value={form.password}/>
                </P.Form>
                <P.Form checkPass={permitSign.passwordSame}>
                    <P.FormName>PassWord Check</P.FormName>
                    <P.FormInput type="password" onChange={onChange} name='passwordConfirm' value={form.passwordConfirm}/>
                </P.Form>
                <P.Form>
                    <P.FormName >Name</P.FormName>
                    <P.FormInput onChange={onChange} name='name' value={form.name}/>
                </P.Form>
                <P.Form>
                    <P.FormName>NickName</P.FormName>
                    <P.FormInput onChange={onChange} name='nickname' value={form.nickname}/>
                </P.Form>
            </S.FormWrapper>
            <S.SubmitBtn onClick={(e) => clickSign(e)}>회원가입</S.SubmitBtn>
        </S.SignFromWrapper>
        </SignFormPageWrapper>
    )
}

export default SignForm