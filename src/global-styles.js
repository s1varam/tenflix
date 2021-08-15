import { createGlobalStyle } from "styled-components";
import NetflixSansRegular from './fonts/netflix-sans/NetflixSansRegular.ttf'

export const GlobalStyle = createGlobalStyle`

    html,body{
        font-family: 'netflixsans';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: black;
        color: #fff;
    }
    @font-face {
        font-family: 'netflixsans';
        src: url(${NetflixSansRegular}); 
    }
    
`;