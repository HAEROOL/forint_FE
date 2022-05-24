import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import logined from "../../api/logined";
import * as S from './Profile.Style'
const ContentWrapper = styled.div`
    hegiht: 150px;
    margin: 0 0 20px 0;
    padding: 0 0 20px 0;
`
const ProfileInfoChange = ({infoname, content}) => {
    const [infoState, setState] = useState('READ')
    const [info, setInfo] = useState(content)
    const [compPassword, setComp] = useState({
        password: null,
        passwordCheck: null
    })
    const changeInfo = useRef()
    const changeCheckInfo = useRef()
    const onClickChange = () => {
        switch(infoState){
            case 'READ':
                setState('CHANGE')
                break;
            case 'CHANGE':
                if(compPassword.password === compPassword.passwordCheck){
                    setInfo(changeInfo.current.value)
                }else{
                    alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.')
                }
                
                break;
            default:
                break;
        }
    }
    const onPasswordChange = (e) => {
        setComp({
            ...compPassword,
            password: e.target.value
        })
    }
    const onPasswordCheckChange = (e) => {
        setComp({
            ...compPassword,
            passwordCheck: e.target.value
        })
    }
    console.log(compPassword)
    useEffect(() => {
        if(info !== content){
            logined.post(`users/password/change/`, {new_password1:info,new_password2:info})
            .then((response) => {
                alert('비밀번호가 변경되었습니다.')
                setState('READ')
                setInfo(null)
            }).catch((error) => {
                alert('비밀번호가 너무 짧습니다. 비밀번호는 최소 8 문자를 포함해야 하며, 알파벳과 숫자를 포함해야 합니다. 너무 일상적인 단어는 사용 불가합니다.')
            })
        }
    },[info, content])
    return (
        <ContentWrapper>
    <S.ProfileContent>
        <S.Content>
            <S.ProfileLabel>{infoname}</S.ProfileLabel>
            {infoname==='PASSWORD'?
             <S.ChangeBtn onClick={()=>onClickChange()}>{infoState==='READ'?'변경':'완료'}</S.ChangeBtn>
            :null}
        </S.Content>
        {infoState==='READ'?
            (content?<S.LabelContent>{info}</S.LabelContent>:null)
        :
            (<>
            <S.FixInfoBox placeholder="비밀번호" defaultValue={info} onChange={onPasswordChange}type={infoname==='PASSWORD'?"password":null} ref={changeInfo}/>
            <S.FixInfoBox placeholder="비밀번호확인" defaultValue={info} onChange={onPasswordCheckChange} type={infoname==='PASSWORD'?"password":null} ref={changeCheckInfo}/>
            </>)}
        
    </S.ProfileContent>
    </ContentWrapper>
    )
}

export default ProfileInfoChange