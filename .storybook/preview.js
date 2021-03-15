import React from "react";
import { ThemeProvider } from "styled-components";
// import { MemoryRouter } from 'react-router-dom';
// import { StylesProvider } from '@material-ui/core';

import theme from "../src/theme";

export const decorators = [
  (Story) => {
    // As this decorator gets called before each story,
    // MSW registers and activates repeatedly.
    return (
      <ThemeProvider theme={theme}>
        {/* <StylesProvider injectFirst> */}
        {/* <MemoryRouter> */}
        <Story />
        {/* </MemoryRouter> */}
        {/* </StylesProvider> */}
      </ThemeProvider>
    );
  },
];
