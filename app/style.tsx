import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    border: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
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