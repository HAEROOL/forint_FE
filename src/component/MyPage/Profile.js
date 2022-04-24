import React from "react";
import styled from "styled-components";

const ProfilePannel = styled.div`
    width: 458px;
    height: 687px;
    background: #fff;
    margin: 0 auto;
    margin-top: -100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 18px 17px 18px;
`
const ProfileImage = styled.img`
    width: 150px;
    height: 150px;
`
const ProfileContent = styled.div`
    width: 378px;
    margin-bottom: 27px;
`
const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const ProfileLabel = styled.label`
    width: 69px;
    font-size: 15px;
`
const ChangeBtn = styled.div`
    cursor: pointer;
    font-size: 12px;
`
const ProfileImagePannel = styled.div`
    width: 150px;
    text-align: right;
    margin-bottom: 20px;
`
const LabelContent = styled.span`
    font-size: 25px;
    margin-left: 22px;
    font-weight: 600;
`
const MyFontPannel = styled.div`
    width: 309px;
    height: 69px;
    border: 1px solid #707070;
    margin-bottom: 16px;
    padding: 30px 74px;
    text-align: center;
`
const SaveBtn = styled.div`
    width: 173px;
    height: 51px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
    color: #fff;
    cursor: pointer;
`
const Profile = () => {
    return(
        <ProfilePannel>
            <ProfileImagePannel>
                <ProfileImage/>
                <ChangeBtn>변경</ChangeBtn>
            </ProfileImagePannel>
            
            <ProfileContent>
                <Content>
                    <ProfileLabel>ID</ProfileLabel>
                    <ChangeBtn>변경</ChangeBtn>
                </Content>
                <LabelContent>testid0123</LabelContent>
            </ProfileContent>
            <ProfileContent>
                <Content>
                    <ProfileLabel>NICKNAME</ProfileLabel>
                    <ChangeBtn>변경</ChangeBtn>
                </Content>
                <LabelContent>NICKNAMEDEATH</LabelContent>
            </ProfileContent>
            <ProfileContent>
                <Content>
                    <ProfileLabel>EMAIL</ProfileLabel>
                    <ChangeBtn>변경</ChangeBtn>
                </Content>
                <LabelContent>EMAIL@123.COM</LabelContent>
            </ProfileContent>
            <ProfileContent>
                <Content>
                    <ProfileLabel>PASSWORD</ProfileLabel>
                    <ChangeBtn>변경</ChangeBtn>
                </Content>
            </ProfileContent>
            <MyFontPannel>당신의 글씨체를 담아드립니다.</MyFontPannel>
            <SaveBtn>저장</SaveBtn>
        </ProfilePannel>
    )
}

export default Profile;