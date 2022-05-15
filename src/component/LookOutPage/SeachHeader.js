import React from "react";
import styled from "styled-components";

const SearchheaderWrapper = styled.div`
    display: flex;
    justify-content: end;
    margin: 0 auto;
    @font-face {
        font-family: SueEllenFrancisco;
        src: url('../public/asset/font/SueEllenFrancisco-Regular.ttf');
        font-weight: 500;
    }
`
const SearchInput = styled.input`
    width: 242px;
    height: 30px;
    background: #fff;
    font-size: 15px;
    padding: 0 5px;
`
const SearchBtn = styled.div`
    height: 30px;
    border: 1px solid #fff;
    cursor: pointer;
    color: #fff;
    padding: 0 5px;
`
const Search = styled.div`
    display: flex;
    width: 350px;
    justify-content: space-between;
    margin: 44px 0 44px 0;
`
const SearcHeader = () => {
    return(
        <SearchheaderWrapper>
            <Search>
            <SearchInput/>
            <SearchBtn>Search</SearchBtn>
            </Search>
            
        </SearchheaderWrapper>
    )
} 

export default SearcHeader