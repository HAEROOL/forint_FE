import React, { useState } from "react";
import styled from "styled-components";
import logined from "../../api/logined";
import * as S from './Public.style'
import { COLOR } from "../../staticColor";
export const UploadBtn = styled.label`
    width: 172px;
    height: 51px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    color: #fff;
    background: #000;
    margin: 0 auto;
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid #ddd;
    transition: all 0.2s;
    text-decoration-line: none;
    &:hover{
        top: 265px;
        box-shadow: 2px 2px 10px silver;
    }
`
const FontNameInput = styled.input`
    width: 216px;
    height: 48px;
    border: 1px solid #ddd;
    text-align: center;
    font-size: 15px;
    outline: none;
    border-radius: 10px;
    margin: 15px 0 0 0;
`
const WarningText = styled.div`
    width: 100%;
    display: flex;;
    justify-content: center;
    align-items: center;
    color: ${COLOR.red};
    font-size: 30px;
`

const WarnDetail = styled.div`
    width: 80%;
    font-size: 25px;
`
const TextPannel = styled.div`
    width: 100%;
    display: flex;;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const SecondPannel = () => {
    const [img, setImage] = useState(null)
    const [name, setName] = useState(null)
    const onChange = (e) => {
        setImage(e.target.files[0])
    }
    const nameChange = (e) => {
        setName(e.target.value)
    }
    const onClick = async() => {
        const formData = new FormData();
        formData.append('file', img)
        formData.append('name', name)
        formData.append('owner', localStorage.getItem('userAccount'))
        logined.post('/fonts/',formData)
        .then((response) => {
            console.log('success')
        }).catch(e => {
            console.log(e)
        })
    }
    return (
        <S.Container>
            <S.CommandText>작성한 템플릿을 업로드 해주세요.</S.CommandText>
            <S.Pannel>
            <WarningText>
                    <img src="/asset/image/Bulb.png" alt="warn"/>
                    템플릿 작성시 주의사항
                </WarningText>
                <TextPannel>
                <WarnDetail>1. &nbsp;  칸 가운데에 맞춰 최대한 반듯하게 글자를 작성해 주세요.</WarnDetail>
                <WarnDetail>2.  &nbsp; 템플릿 스캔 시 반듯한 종이를 사용해 주세요.<br/> &nbsp;  &nbsp;  &nbsp; ( 안드로이드 및 ios 문서스캔 기능 사용 필수 )</WarnDetail>
                <br/>
                <WarnDetail style={{textAlign: 'center;'}}>* 태블릿을 이용해 작성하는 것을 추천</WarnDetail>
                </TextPannel>
            </S.Pannel>
            <S.DownloadBtnPannel>
                <form>
                    <UploadBtn htmlFor='upload-file'>템플릿 업로드</UploadBtn>
                    <input type="file" id="upload-file" onChange={onChange} style={{display:"none"}} required/>
                    <FontNameInput placeholder="폰트 이름을 정해주세요" required onChange={nameChange}/>
                </form>
                <button onClick={onClick}>제출</button>
                </S.DownloadBtnPannel>
                <S.StepPannel>
                <S.PrevBtn to='/fontcreate'>PREV</S.PrevBtn>
                <S.NextBtn to='/fontcreate/fourth'>NEXT</S.NextBtn>
                </S.StepPannel>
        </S.Container>
    )
}

export default SecondPannel;