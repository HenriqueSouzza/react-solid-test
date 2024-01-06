import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, table, dialog, button {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active{
    -webkit-background-clip: text;
    -webkit-text-fill-color: #ffffff;
    transition: background-color 5000s ease-in-out 0s;
  }

  @keyframes shake {
    0% {
      margin-left: 0;
    }
    25% {
      margin-left: 5px;
    }
    50% {
      margin-left: 0;
    }
    75% {
      margin-left: -5px;
    }
    100% {
      margin-left: 0;
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default GlobalStyle;