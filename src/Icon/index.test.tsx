import React from "react";
import { renderWithProviders, screen } from "setupTests";
import { colors } from "../theme";

import Icon from "./index";

describe("Icon Component", () => {
  it("should render close button with color neutrals-darkest-gray", () => {
    renderWithProviders(<Icon name="close" />);

    // screen.debug();
    expect(screen.getByText(/close.svg/g)).toBeInTheDocument();
  });
});
