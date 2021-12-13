import { createGlobalStyle } from "styled-components";
import BackgroundImage from "../assets/BackgroundImage.jpg";
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0 ;
        padding: 0;
        outline: 0;
    }
    #root {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-family: "Orbitron", sans-serif;
    }
    html{
        background : url(${BackgroundImage}) no-repeat center center fixed;
        background-size: cover;
    }
`;
