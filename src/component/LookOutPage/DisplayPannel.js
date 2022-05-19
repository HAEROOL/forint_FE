import React, { useEffect } from "react";
import styled from "styled-components";
import FontDisplay from "./FontDisplay";
import { DummyData } from "./dummyData";
import axios from "axios";
const Pannel = styled.div`
    width: 90%;
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
    // useEffect(() => {
    //     axios.get
    // },[])
    return(
        <Pannel>
            <RowPannel>
            {DummyData.map((data,index) => (
                <FontDisplay key={index} data={data}/>
            ))}
            </RowPannel>
            
        </Pannel>
    )
}

export default DisplayPannel;