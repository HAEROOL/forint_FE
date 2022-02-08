import React from "react";
import styled from "styled-components";

const VideoPageWrapper = styled.div`
    width: 100%;
    height: 937px;
    background-color: #000;
`
const VideoWrapper = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
`
const VideoContent = styled.iframe`
    border: none;
`
const VideoPage = () => {
    return (
        <VideoPageWrapper>
            <VideoWrapper>
            <VideoContent width="100%" height="80%" src="https://www.youtube.com/embed/LXb3EKWsInQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></VideoContent>
            </VideoWrapper>
            </VideoPageWrapper>
    )
}

export default VideoPage;