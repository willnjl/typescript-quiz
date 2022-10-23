import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/rohit-tandon.jpg"


export const GlobalStyle = createGlobalStyle`
    html {
        height : 100%
    }

    body{
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }


    *{
        box-sizing: border-box;
        font-family: Inter, sans-serif;
    }

    li{
        list-style: none;
    }
`