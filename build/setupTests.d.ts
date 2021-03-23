import "@testing-library/jest-dom";
import React from "react";
import { RenderOptions } from "@testing-library/react";
declare function renderWithProviders(ui: React.ReactElement, { ...renderOptions }?: RenderOptions): import("@testing-library/react").RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement>;
declare function createRootContainer(): HTMLElement;
export * from "@testing-library/react";
export { renderWithProviders, createRootContainer };
