import React from "react";
import { renderWithProviders, screen } from "setupTests";

import Avatar from "./index";

describe("Avatar Component", () => {
  it("should render foo text correctly", () => {
    renderWithProviders(<Avatar />);
    
    const component = screen.getByTestId("Avatar");
    
    expect(component).toHaveTextContent("harvey was here");
  });
});
