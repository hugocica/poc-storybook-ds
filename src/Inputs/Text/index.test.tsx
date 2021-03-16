import React from "react";
import { renderWithProviders, screen } from "setupTests";

import Text from "./index";

describe("Text Component", () => {
  it("should render foo text correctly", () => {
    renderWithProviders(<Text />);

    const component = screen.getByTestId("Text");

    expect(component).toHaveTextContent("harvey was here");
  });
});
