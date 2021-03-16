import React from "react";
import { renderWithProviders, screen } from "setupTests";

import Typography from "./index";

describe("Typography Component", () => {
  it("should render foo text correctly", () => {
    renderWithProviders(<Typography />);
    
    const component = screen.getByTestId("Typography");
    
    expect(component).toHaveTextContent("harvey was here");
  });
});
