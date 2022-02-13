import React from "react";
import styled from "styled-components";
import * as S from './SignForm.style'
import * as P from '../Public/FormStyle'

const SignFormPageWrapper = styled.div`
    width: 1920px;
    height: 853px;
    background: #000;
`

const SignForm = () => {
    return(
        <SignFormPageWrapper>
            <S.SignFromWrapper>
            <S.FormText>회원가입</S.FormText>
            <S.FormWrapper>
                <P.Form>
                    <P.FormName>Email</P.FormName>
                    <P.FormInput/>
                    <S.CheckboxWrapper>
                        <S.CheckBox>
                            중복확인
                            <S.CheckButton/>
                        </S.CheckBox>
                        <S.CheckText>확인되었습니다!</S.CheckText>
                    </S.CheckboxWrapper>
                    
                </P.Form>
                <P.Form>
                    <P.FormName>PassWord</P.FormName>
                    <P.FormInput type="password"/>
                </P.Form>
                <P.Form>
                    <P.FormName>PassWord Check</P.FormName>
                    <P.FormInput type="password"/>
                </P.Form>
                <P.Form>
                    <P.FormName>Name</P.FormName>
                    <P.FormInput/>
                </P.Form>
                <P.Form>
                    <P.FormName>NickName</P.FormName>
                    <P.FormInput/>
                </P.Form>
            </S.FormWrapper>
            <S.SubmitBtn>회원가입</S.SubmitBtn>
        </S.SignFromWrapper>
        </SignFormPageWrapper>
    )
}

export default SignForm