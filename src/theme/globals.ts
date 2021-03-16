import { createGlobalStyle } from "styled-components";
import { genericFontProps } from "./index";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&display=swap');

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
  }

  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    overflow: hidden;
  }

  h1, h2, h3, h4, h5, h6, p, span {
    font-family: ${genericFontProps.fontFamily};
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.primary.green};
  }

  ::-webkit-scrollbar {
    background-color: ${({ theme }) => theme.colors.neutrals.lightergrey};
    border-radius: 8px;
    height: 8px;
    position: absolute;
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.neutrals.lightgrey};
    border-radius: 8px;
  }

  body {
    background-color: ${({ theme }) => theme.colors.neutrals.white};
  }
`;
