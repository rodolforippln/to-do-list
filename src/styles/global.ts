import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --white: #ffffff;

        --gray-500: #6b7280;
        --gray-700: #334155;
        --gray-800: #1f2937;
        --gray-900: #111827;

        --yellow-400: #facc15;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }
    
    body {
        background-color: var(--background);
        -webkik-font-smoothing: antialiased;
        background-color: var(--gray-900);
        color: var(--white);
        
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        
        
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    
    button {
        cursor: pointer;
    }
`