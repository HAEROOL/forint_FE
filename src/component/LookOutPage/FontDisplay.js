import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
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
    transition: all 0.2s ease;
    padding-bottom: 5px;
    &:hover{
        box-shadow: 2px 2px 10px silver;
        top: -2px;
        right: 2px;
    }
`

const FontPannel = styled.div`
    height: 212px;
    background: #fff;
    font-size: 30px;
    text-align: center;
    border-radius: 10px;
    margin: 70px 0 0 0;
    &:after{
        content: "";
        display: block;
        border-bottom: 1px solid #ddd;
        width: 98%;
        margin: 0 auto;
        margin-top: 0px;
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

const NameWrapper = styled.div`
    font-size: 20px;
    text-align: center;
    margin-top: 50px;
`
const FontDisplay = ({data}) => {
    const [fontData, setData] = useState(null)
    const [likeRate, setRate] = useState(data.like_num)
    const [isLiked, setLike] = useState(false)


    const clickLikeBtn = () => {
        if(!isLiked){
            setRate(likeRate+1)
            setLike(true)
            const account = sessionStorage.getItem('userAccount')
            console.log([...data.like_users,account])
            if(sessionStorage.getItem('userAccount')){
                axios.patch(`${process.env.REACT_APP_API_URL}fonts/${data.name}/`,{like_users:[...data.like_users,account]})
            }else{
                alert('로그인 해주세요')
            }
        }else{
            setRate(likeRate-1)
            setLike(false)
            const account = sessionStorage.getItem('userAccount')
            const deleteAccountList = data.like_users.filter((useraccount) => useraccount !== account)
            if(sessionStorage.getItem('userAccount')){
                axios.patch(`${process.env.REACT_APP_API_URL}/fonts/${data.name}/`,{like_users:deleteAccountList})
            }else{
                alert('로그인 해주세요')
            }
        }
        
    }
    const downloadFile = () => {
        const filename = `${data.name}.ttf`
        axios.get(data.ttf_file,{
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

    useEffect(() => {
        if(Object.keys(data).length > 0){
            data.like_users.indexOf(sessionStorage.getItem('userAccount'))===-1?setLike(false):setLike(true)
            setRate(data.like_num)
        }
    }, [data])
    return(
        data.previews?
        <DisplayWrapper>
            <AnimationWrapper>
            <FontPannel>
            {data.previews?.map((img) => (
                <>
                <img src={img.path} style={{width: '45px'}}alt="font" key={img.id}/>
                {img.name==='요'?<br/>:null}
                </>
            ))}
            <NameWrapper>{data.name}</NameWrapper>
            </FontPannel>

            <DetailContainer>
                <GoodBtn onClick={clickLikeBtn}>
                    {isLiked?<Icon src="/asset/image/HeartIcon_FILL.svg"/>:<Icon src="/asset/image/HeartIcon.svg"/>}
                    <Rate>{likeRate}</Rate>
                </GoodBtn>
                <DownloadBtn onClick={() =>downloadFile()}>다운로드</DownloadBtn>
            </DetailContainer>
            </AnimationWrapper>
        </DisplayWrapper>
        :null
    )
}

export default FontDisplay;