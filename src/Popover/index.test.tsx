import React from "react";
import { renderWithProviders, screen } from "setupTests";

import Popover from "./index";

describe("Popover Component", () => {
  it("should render foo text correctly", () => {
    renderWithProviders(<Popover />);
    
    const component = screen.getByTestId("Popover");
    
    expect(component).toHaveTextContent("harvey was here");
  });
});
