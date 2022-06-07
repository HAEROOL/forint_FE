import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FontDisplay from "./FontDisplay";
import axios from "axios";
const Pannel = styled.div`
    width: 90%;
    max-width: 1920px;
    padding: 10px 20px;
    display: flex;
    margin: 0 auto;
    margin-top: 44px;
`
const RowPannel = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
`

const DisplayPannel = () => {
    const [fontDataArray, setArray] = useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/fonts/')
        .then((response) => {
            setArray(response.data)
        })
    },[])
    return(
        <Pannel>
            <RowPannel>
            {fontDataArray.length > 0?fontDataArray.map((data,index) => (
                <FontDisplay key={index} data={data}/>
            )):
            <div>아직 등록된 폰트가 없습니다</div>
            }
            </RowPannel>
        </Pannel>
    )
}

export default DisplayPannel;