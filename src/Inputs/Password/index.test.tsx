import React from "react";
import { renderWithProviders, screen } from "setupTests";

import Password from "./index";

describe("Password Component", () => {
  it("should render foo text correctly", () => {
    renderWithProviders(<Password />);
    
    const component = screen.getByTestId("Password");
    
    expect(component).toHaveTextContent("harvey was here");
  });
});
