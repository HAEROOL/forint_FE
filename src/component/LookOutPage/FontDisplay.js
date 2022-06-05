import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import logined from "../../api/logined";
const DisplayWrapper = styled.div`
    width: 400px;
    height: 340px;
    position: relative;
    margin: 0 7px 30px 7px;
    
`

const AnimationWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    right: 0px;
    border: 1px solid #ddd;
    border-radius: 10px;
    transition: all 0.3s;
    padding-bottom: 5px;
    &:hover{
        box-shadow: 2px 2px 10px silver;
        top: -2px;
        right: 2px;
    }
`
const FontTitle = styled.div`
    font-size: 15px;
    color: #ddd;
    overflow: visible;
    margin-bottom: 14px;
    
`
const FontPannel = styled.div`
    height: 212px;
    padding: 22px 14px;
    background: #fff;
    font-size: 30px;
    text-align: center;
    &:after{
        content: "";
        display: block;
        border-bottom: 1px solid #ddd;
        width: 98%;
        margin: 0 auto;
        margin-top: 153px;
    }
`
const DetailContainer = styled.div`
    display: flex;
    width: 90%;
    margin: 0 auto;
    justify-content: space-between;
    &:hover{
        cursor: pointer;
    }
`
const GoodBtn = styled.div`
    display: flex;
    width: 56px;
    align-items: center;
    
`
const Icon = styled.img`
    width: 18px;
    height: 18px;
    cursor: pointer;
    margin-top: 4px;
`
const Rate = styled.span`
    font-size: 18px;
    font-weight: 700;
    margin-left: 5px;
`
const DownloadBtn = styled.div`
    padding: 2px 6px;
    border: 2px solid #fff;
    cursor: pointer;
`

const FontView = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const FontDisplay = ({data}) => {
    const [likeRate, setRate] = useState(data.like_num)
    const [isLiked, setLike] = useState(false)
    const [fileData, setData] = useState(null)
    const userFont = {
        fontFamily: data.name,
        fontStyle: 'normal',
        fontWeight: 400,
        fontDisplay: 'swap',
        src: data.fontSrc
    }

    const clickLikeBtn = () => {
        if(!isLiked){
            setRate(likeRate+1)
            setLike(true)
        }else{
            setRate(likeRate-1)
            setLike(false)
        }
        
    }

    const downloadFile = (file) => {
        const filename = 'source.ttf'
        axios.get('http://127.0.0.1:8000/media/font/admin%40admin.com/jua.ttf',{
            responseType: 'arraybuffer',
            // data: ""
        })
        .then((response) => {
            console.log(response)
            const blob = new Blob([response.data])
            const path = window.URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = path
            link.download = filename
            link.click()
            link.remove()
        })
    }
    return(
        <DisplayWrapper>
            <AnimationWrapper>
            <FontPannel fontsrc={userFont}>
            < FontView src={data.file} alt="asdf"/>
            </FontPannel>

            <DetailContainer>
                <GoodBtn onClick={() => clickLikeBtn()}>
                    {isLiked?<Icon src="/asset/image/HeartIcon_FILL.svg"/>:<Icon src="/asset/image/HeartIcon.svg"/>}
                    <Rate>{likeRate}</Rate>
                </GoodBtn>
                <DownloadBtn onClick={() =>downloadFile(data.file)}>다운로드</DownloadBtn>
            </DetailContainer>
            </AnimationWrapper>
        </DisplayWrapper>
    )
}

export default FontDisplay;