import React from "react";
import { renderWithProviders, screen } from "setupTests";

import Skeleton from "./index";

describe("Skeleton component", () => {
  it("should render skeleton component", () => {
    renderWithProviders(
      <Skeleton width={10} height={10} data-testid="skeleton" />
    );

    expect(screen.queryByTestId("skeleton")).toBeDefined();
    expect(screen.queryByTestId("skeleton")).toHaveStyle("width: 10px;");
  });
});
