import React, { useEffect, useLayoutEffect, useState } from "react";
import * as S from './Profile.Style'
import ProfileInfoChange from "./ProfileInfoChange";
import ProfileInfoNotChange from "./PrifileInfoNotChange";
import { useDispatch } from "react-redux";
import logined from "../../api/logined";
import { useSelector } from "react-redux";


const Profile = () => {
    const [userInfo, setInfo] = useState({
        email: '',
        nickname: '',
        password: null,
        name: '',
        fonts: []
    })
    const userAccount = localStorage.getItem('userAccount')
    const dispatch = useDispatch()
    
    useLayoutEffect(() => {
        // dispatch(getUserInfo({email:'admin@admin.com'}))
        logined.get(`users/${userAccount}/`)
        .then((response) => {
            setInfo({
                ...userInfo,
                ...response.data
            })
        })
    },[])

    return(
        <S.ProfilePannel>
            <ProfileInfoNotChange infoname={'EMAIL'} content={userInfo.email}/>
            <ProfileInfoNotChange infoname={'NAME'} content={userInfo.name}/>
            <ProfileInfoNotChange infoname={'NICKNAME'} content={userInfo.nickname}/>
            <ProfileInfoChange infoname={'PASSWORD'} content={null}/>
            <S.MyFontPannel>{userInfo.fonts.length>0?'당신의 글씨체를 담아드립니다.':'아직 폰트를 생성하지 않았습니다'}</S.MyFontPannel>
        </S.ProfilePannel>
    )
}

export default Profile;