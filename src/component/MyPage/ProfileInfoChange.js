import React, { useEffect, useRef, useState } from "react";
import logined from "../../api/logined";
import * as S from './Profile.Style'
const ProfileInfoChange = ({infoname, content}) => {
    const [infoState, setState] = useState('READ')
    const [info, setInfo] = useState(content)
    const changeInfo = useRef()
    const onClickChange = () => {
        switch(infoState){
            case 'READ':
                setState('CHANGE')
                break;
            case 'CHANGE':
                setInfo(changeInfo.current.value)
                break;
            default:
                break;
        }
    }

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
            (<S.FixInfoBox defaultValue={info} type={infoname==='PASSWORD'?"password":null} ref={changeInfo}/>)}
        
    </S.ProfileContent>
    )
}

export default ProfileInfoChange