import { createGlobalStyle } from 'styled-components'
import HarryFont from 'assets/harryfont.TTF'

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'harry';
    src: url(${HarryFont});
}

    *,*::before,*::after{
        box-sizing:border-box;
        margin:0;
        cursor: url(http://cur.cursors-4u.net/user/use-1/use160.cur), auto !important;
    }
    html {
        font-size: 62.5%; 
    }

    body{
        font-size:1.6rem;
        margin:0;    
        font-family: harry
    }

    `;

export default GlobalStyles;
