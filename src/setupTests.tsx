// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import React from "react";
import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
// import { StylesProvider } from "@material-ui/core";

import theme from "./theme";

function renderWithProviders(
  ui: React.ReactElement,
  { ...renderOptions }: RenderOptions = {}
) {
  function Wrapper({ children }: { children: React.ComponentType }) {
    return (
      <ThemeProvider theme={theme}>
        {/* <StylesProvider injectFirst> */}
        {children}
        {/* </StylesProvider> */}
      </ThemeProvider>
    );
  }
  return rtlRender(ui, {
    wrapper: Wrapper as React.ComponentType,
    ...renderOptions,
  });
}

function createRootContainer() {
  let container = document.getElementById("root");

  if (!container) {
    container = document.createElement("div");
    container.setAttribute("id", "root");
    container.setAttribute("role", "main");
    document.body.appendChild(container);
  }

  return container;
}

// re-export everything
export * from "@testing-library/react";

// override render method - render with redux
export { renderWithProviders, createRootContainer };
