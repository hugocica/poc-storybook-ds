import React from "react";
import { renderWithProviders, screen } from "setupTests";

import Loading from "./index";

describe("Loading Component", () => {
  it("should render foo text correctly", () => {
    renderWithProviders(<Loading />);
    
    const component = screen.getByTestId("Loading");
    
    expect(component).toHaveTextContent("harvey was here");
  });
});
