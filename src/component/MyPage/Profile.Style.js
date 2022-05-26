import styled from "styled-components"
import {COLOR} from '../../staticColor'
export const ProfilePannel = styled.div`
width: 600px;
background-color: white;
max-height: 638px;
border: 1px solid ${COLOR.lightgray};
border-top: none;
margin: 0 auto;
padding: 170px 22px 100px 22px;
`
export const ProfileWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
`
export const ProfileImage = styled.img`
width: 150px;
height: 150px;
`
export const ProfileContent = styled.div`
display: flex;
margin-bottom: 40px;
width: 100%;
display: flex;
`
export const Content = styled.div`

`
export const ProfileLabel = styled.label`
display: block;
width: 170px;
max-width: 170px;
font-size: 20px;
`
export const ChangeBtn = styled.div`
cursor: pointer;
font-size: 20px;
width: 70px;
height: 30px;
border-radius: 5px;
text-align: center;
background-color: ${COLOR.yellow};
`
export const ProfileImagePannel = styled.div`
width: 150px;
text-align: right;
margin-bottom: 20px;
`
export const LabelContent = styled.span`
font-size: 20px;
margin-left: 22px;
font-weight: 600;
`
export const FixInfoBox = styled.input`
font-size: 25px;
width: 250px;
height: 25px;
padding-left: 10px;
font-weight: 600;
border: 1px solid #ddd;
border: none;
border-bottom: 1px solid ${COLOR.gray};
outline: none;
&::placeholder{
    font-size: 15px;
}
&:last-child{
    margin-top: 6px;
}
`
export const MyFontPannel = styled.div`
width: 309px;
height: 69px;
border: 1px solid #707070;
margin-bottom: 16px;
padding: 30px 74px;
text-align: center;
`
export const SaveBtn = styled.div`
width: 173px;
height: 51px;
display: flex;
justify-content: center;
align-items: center;
background: #000;
color: #fff;
cursor: pointer;
`

export const Comment = styled.div`
    font-size: 25px;
    margin-bottom: 35px;
`