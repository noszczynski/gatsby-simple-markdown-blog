import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    font-family: 'Montserrat', Arial, sans-serif;
  }
  
  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-family: 'Montserrat', Arial, sans-serif;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;
