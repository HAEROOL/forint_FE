import React from "react";
import styled from "styled-components";
import FontDisplay from "./FontDisplay";

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
const DummyData = new Array(12).fill({
    title: "테스트용폰트이름",
    like: 537
});
const DisplayPannel = () => {
    return(
        <Pannel>
            <RowPannel>
            {DummyData.map((data) => (
                <FontDisplay data={data}/>
            ))}
            </RowPannel>
            
        </Pannel>
    )
}

export default DisplayPannel;