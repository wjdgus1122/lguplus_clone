import { createGlobalStyle } from "styled-components";

export const globalstyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        word-break: keep-all;
        font-family: 'Noto Sans KR', sans-serif;
    }

    a{
        text-decoration: none;
        color: #1d1d1d;
    }
`;
