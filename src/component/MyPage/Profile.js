import React, { useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import * as S from './Profile.Style'
import ProfileInfoChange from "./ProfileInfoChange";
import ProfileInfoNotChange from "./PrifileInfoNotChange";
import { useDispatch } from "react-redux";
import logined from "../../api/logined";
import { useSelector } from "react-redux";
import MypageHeader from "./MypageHeader";
import { COLOR } from "../../staticColor";
const PageWrapper = styled.div`
    width: 600px;
    margin: 0 auto;
    margin-top: -1px;
    &:before{
        width: 480px;
        margin-left: 166px;
        display: block;
        content:"";
        border-top: 1px solid ${COLOR.lightgray};
    }
`
const Profile = ({userInfo}) => {
    return(
        <PageWrapper>
        <S.ProfilePannel>
            <S.ProfileWrapper>
                {userInfo.name?
                <>
                <S.Comment>{userInfo.name}님 안녕하세요</S.Comment>
                <ProfileInfoNotChange infoname={'이름'} content={userInfo.name}/>
                <ProfileInfoNotChange infoname={'닉네임'} content={userInfo.nickname}/>
                <ProfileInfoNotChange infoname={'이메일'} content={userInfo.email}/>
                <ProfileInfoChange infoname={'비밀번호'} content={null}/>
                </>
                :
                <div style={{fontSize:'25px'}}>로딩중입니다...</div>}
                
            </S.ProfileWrapper>
        </S.ProfilePannel>
        </PageWrapper>
        
    )
}

export default Profile;