import React from "react";
import styled from "styled-components";
import FontDetail from "./FontDetail";

const Pannel = styled.div`
    height: 500px;
    overflow-y: scroll;
    margin: -130px 0 0 0;
`
const FontDetailPannel = ({fontList}) => {
    return (
        <Pannel>
            {fontList.map((font) => (
                <FontDetail font={font} key={font.name}/>
            ))}
        </Pannel>
    )
}
export default FontDetailPannel