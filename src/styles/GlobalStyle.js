import { createGlobalStyle } from "styled-components"
import "fontsource-montserrat"
export const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a{
        text-decoration: none;
    }
`
