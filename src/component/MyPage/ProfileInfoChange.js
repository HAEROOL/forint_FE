import React, { useEffect, useRef, useState } from "react";
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
            if(info.length > 1){
                alert('변경되었습니다')
                setState('READ')
                console.log(info)
            }else{alert('길이가 너무 짧아요')}
           
            //dispatch
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