import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body, #app{
    min-height: 100%;
  }

  body {
    background-color: #EC3648;
    background-size: 100vw 100vh;
    font-family: "Rubik", sans-serif;
    font-size: 0.75em;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;

  }

  @media (min-width: 320px) {
    body {
      font-size: 1em;
    }
  }

  @media (min-width: 768px) {
    body {
      font-size: 1.5em;
    }
  }

  @media (min-width: 1024px) {
    body {
      font-size: 2em;
    }
  }

`;
