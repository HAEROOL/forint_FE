import React from "react";
import styled from "styled-components";
import axios from "axios";
import { COLOR } from "../../staticColor";

const Pannel = styled.div`
    width: 80%;
    height: 100px;
    border: 1px solid ${COLOR.lightgray};
    border-radius: 5px;
    margin: 0 auto 10px auto;
    transition: 0.2s ease;
    &:hover{
        box-shadow: 2px 2px 10px silver;
    }
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;

`
const FontImg = styled.img`
    width: 30%;
`
const Icon = styled.img`
    width: 18px;
    height: 18px;
    cursor: pointer;
    margin-top: 4px;
`
const Rate = styled.span`
    font-size: 18px;
    display: block; 
    font-weight: 700;
    margin-left: 5px;
    margin-top: -2px;
`
const DownloadBtn = styled.div`
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    background-color: ${COLOR.heavyyellow};
    border-radius: 5px;
    margin-bottom: 15px;
    &:hover{
        cursor: pointer;
    }
`
const Detail = styled.div`
    width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const FontDetail = ({font}) => {
    const downloadFile = (file) => {
        const filename = 'source.ttf'
        axios.get('http://127.0.0.1:8000/media/font/admin%40admin.com/jua.ttf',{
            responseType: 'arraybuffer',
            // data: ""
        })
        .then((response) => {
            const blob = new Blob([response.data])
            const path = window.URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = path
            link.download = filename
            link.click()
            link.remove()
        })
    }
    return (
        <Pannel>
            <FontImg src={font.file} alt="font"/>
            <Detail>
            <div style={{display: 'flex',justifyContent: 'end'}}>
                <Icon src="/asset/image/HeartIcon_FILL.svg" alt="heart"/>
                <Rate>{font.like_users.length}</Rate>
            </div>
            <DownloadBtn onClick={downloadFile}>다운로드</DownloadBtn>
            </Detail>
            
        </Pannel>
    )
}

export default FontDetail;