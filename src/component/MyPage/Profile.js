import React, { useState } from "react";
import * as S from './Profile.Style'
import ProfileInfoChange from "./ProfileInfoChange";
const dummy = {
    account: 'test@testID.com',
    nickname: 'dummyNick',
    name: 'dummyname'
}


const Profile = () => {
    return(
        <S.ProfilePannel>
            <S.ProfileImagePannel>
                <S.ProfileImage/>
                <S.ChangeBtn>변경</S.ChangeBtn>
            </S.ProfileImagePannel>
            
            <S.ProfileContent>
                <S.Content>
                    <S.ProfileLabel>EMAIL</S.ProfileLabel>
                </S.Content>
                <S.LabelContent>{dummy.account}</S.LabelContent>
            </S.ProfileContent>
            <ProfileInfoChange infoname={'NAME'} content={dummy.name}/>
            <ProfileInfoChange infoname={'NICKNAME'} content={dummy.nickname}/>
            <ProfileInfoChange infoname={'PASSWORD'} content={null}/>
            <S.MyFontPannel>당신의 글씨체를 담아드립니다.</S.MyFontPannel>
        </S.ProfilePannel>
    )
}

export default Profile;