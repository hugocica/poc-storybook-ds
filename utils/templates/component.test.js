module.exports = (componentName) => ({
  content: `import React from "react";
import { renderWithProviders, screen } from "../setupTests";

import ${componentName} from "./index";

describe("${componentName} Component", () => {
  it("should render foo text correctly", () => {
    renderWithProviders(<${componentName} />);
    
    const component = screen.getByTestId("${componentName}");
    
    expect(component).toHaveTextContent("harvey was here");
  });
});
`,
  extension: `.test.tsx`,
});
