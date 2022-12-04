import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    min-height: 840px;
    min-width: 600px;
    background: ${({ theme }) => theme.body};
    color: #687787;
    font-family: 'Inter', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.2s linear;
  }
`;

export default GlobalStyles;
