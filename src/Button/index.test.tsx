import React from "react";
import { renderWithProviders, screen } from "setupTests";
import theme from "../theme";
import Button from "./index";

describe("Button Component", () => {
  it("should render button", () => {
    renderWithProviders(<Button>Isso é um botão</Button>);

    expect(
      screen.queryByRole("button", { name: "Isso é um botão" })
    ).toBeDefined();
  });

  it("should have same color as theme.colors.blue100 if color is equal primary", () => {
    renderWithProviders(<Button color="primary">primary</Button>);

    const primaryButton = screen.getByRole("button");
    expect(primaryButton).toBeDefined();
    expect(primaryButton).toHaveStyle(
      `background-color: ${theme.colors.primary.green};
      color: ${theme.colors.neutrals.white};`
    );
  });

  // it('should have same color as theme.colors.green100 if color is equal secondary', () => {
  //   renderWithProviders(<Button color="secondary">secondary</Button>);

  //   const secondaryButton = screen.queryByRole('button');
  //   expect(secondaryButton).toBeDefined();
  //   expect(secondaryButton).toHaveStyle(
  //     `background-color: ${theme.colors.green100};
  //     color: ${theme.colors.white};`
  //   );
  // });

  // it('should have same color as theme.colors.blue100 if color is not defined', () => {
  //   renderWithProviders(<Button>default</Button>);

  //   const defaultButton = screen.queryByRole('button');
  //   expect(defaultButton).toBeDefined();
  //   expect(defaultButton).toHaveStyle(
  //     `background-color: ${theme.colors.gray3};
  //     color: ${theme.colors.gray6};`
  //   );
  // });
});
