import React from "react";
import * as S from './Profile.Style'
const ProfileInfoNotChange = ({infoname, content}) => {
    return (
    <S.ProfileContent>
        <S.Content>
            <S.ProfileLabel>{infoname}</S.ProfileLabel>
        </S.Content>
       { content?<S.LabelContent>{content}</S.LabelContent>:null}
    </S.ProfileContent>
    )
}

export default ProfileInfoNotChange