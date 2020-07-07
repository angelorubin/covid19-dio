import { createGlobalStyle } from "styled-components";
import CovidBg from "assets/images/bg.jpg";

const globalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {

  }

  html, body {
    width: 100%;
    min-height: 100%;
    display: flex;

  }

  #root {
    height: 100%;
    width: 100%;
    background-image: url(${CovidBg});
    background-repeat: none;
    background-position: center center;
    background-size: cover;
  }

`;

export default globalStyle;
