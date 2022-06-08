import React, { useState } from "react";
import styled from "styled-components";
import logined from "../../api/logined";
import * as S from './Public.style'
import { COLOR } from "../../staticColor";
import axios from "axios";
export const UploadBtn = styled.label`
    width: 300px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    color: black;
    background: ${COLOR.yellow};
    margin: 0 auto;
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid #ddd;
    transition: all 0.2s;
    text-decoration-line: none;
    font-weight: 600;
    font-size: 25px;
    &:hover{
        box-shadow: 2px 2px 10px silver;
    }
`
const FontNameInput = styled.input`
    width: 300px;
    height: 70px;
    border: 1px solid #ddd;
    text-align: center;
    font-size: 15px;
    outline: none;
    border-radius: 10px;
    margin: 15px 0 0 0;
`
const DisableBtn = styled.div`
width: 172px;
height: 51px;
display: flex;
justify-content: center;
align-items: center;
font-size: 25px;
color: #dddddd;
cursor: default;
background: #eeeeee;
border-radius: 10px;
font-weight: 600;
text-decoration-line: none;
`
const SubmitBtn = styled.div`
width: 400px;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 30px;
text-align: center;
margin: 0 auto;
margin-top: 20px;
cursor: pointer;
border-radius: 10px;
border: 1px solid #ddd;
transition: all 0.2s;
text-decoration-line: none;
color: black;
font-weight: 600;
background-color: ${COLOR.heavyyellow};
&:hover{
    box-shadow: 2px 2px 10px silver;
}
`
const WarningText = styled.div`
    width: 100%;
    display: flex;;
    justify-content: center;
    align-items: center;
    color: ${COLOR.red};
    font-size: 20px;
`
const CheckBox = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    color: ${COLOR.gray};
    cursor: pointer;
    &:hover{
        color: black;
    }
`

const BoxWrapper = styled.div`
    width: 39%;
    display: flex;
    justify-content: space-between;
`
const SecondPannel = () => {
    const [img, setImage] = useState(null)
    const [name, setName] = useState(null)
    const [isComplete, setComplete] = useState(false);
    const [isNotDup, setDup] = useState(false)
    const onChange = (e) => {
        setImage(e.target.files[0])
    }
    const nameChange = (e) => {
        setName(e.target.value)
    }
    const onClick = async() => {
        if(name && img && isNotDup){
            const formData = new FormData();
            formData.append('file', img)
            formData.append('name', name)
            formData.append('ttf_file', "")
            formData.append('woff_file', "")
            formData.append('owner', sessionStorage.getItem('userAccount'))
            logined.post('/fonts/',formData)
            setComplete(true)
            alert('제출되었습니다!')
            .then((response) => {

            }).catch(e => {
                alert('오류 발생! 다시 시도해주세요')
            })
        }else{
            alert('작성한 템플릿을 업로드 하고 원하는 폰트 이름을 입력해주세요. 이름이 중복되었는지 확인해주세요.')
        }
    }
    const checkDuplicate = () => {
        if(name){
            axios.post('http://218.150.183.52:8000/fonts/name-check/',{name:name})
            .then((response) => {
                console.log(response)
                if(response.data.detail==='You can use this Name :)'){
                    setDup(true)
                    alert('사용가능한 이름입니다!')
                }else{
                    alert('중복되었거나 불가능한 이름입니다.')
                }
            })
            .catch(e => {
                alert('오류가 발생했습니다. 다시 시도해주세요')
            })
        }else{
            alert('닉네임을 작성해주세요')
        }
    }
    return (
        <S.Container>
            <S.CommandText>작성한 템플릿을 업로드 해주세요.</S.CommandText>
            <S.Pannel>
            <WarningText>
                    <img src="/asset/image/Bulb.png" alt="warn"/>
                    템플릿을 업로드 하고 폰트 이름을 입력한 뒤, 제출 버튼을 눌러주세요
                </WarningText>
            <S.DownloadBtnPannel>
                <form>
                    <UploadBtn htmlFor='upload-file'>템플릿 업로드</UploadBtn>
                    <input type="file" id="upload-file" onChange={onChange} style={{display:"none"}} required/>
                    <FontNameInput placeholder="폰트 이름을 정해주세요" required onChange={nameChange}/>
                </form>
                <BoxWrapper>
                <CheckBox onClick={checkDuplicate}>중복확인</CheckBox>
                <span style={{color:COLOR.red, marginTop:'2px'}}>폰트이름은 영어로 작성해주세요</span>
                </BoxWrapper>
                
                
                </S.DownloadBtnPannel>
            </S.Pannel>
            <SubmitBtn onClick={onClick}>제출</SubmitBtn>
                <S.StepPannel>
                <S.PrevBtn to='/fontcreate'>PREV</S.PrevBtn>
                {isComplete?
                <S.NextBtn to='/fontcreate/fourth'>NEXT</S.NextBtn>:
                <DisableBtn>NEXT</DisableBtn>
                }
                
                </S.StepPannel>
        </S.Container>
    )
}

export default SecondPannel;