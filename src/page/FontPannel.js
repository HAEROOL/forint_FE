import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";


const FontImage = styled.img`

`

const FontPannel = ({fontUrl}) => {
    const [img, setImg] = useState(null)
    axios.get(fontUrl)
    .then(response => {
        setImg(response.data)
    })
    return(
        <>
            <FontImage src={img} alt='fontimage'/>
        </>
    )
}

export default FontPannel