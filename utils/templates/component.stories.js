module.exports = (componentName) => ({
  content: `import React from "react";

import ${componentName} from "./index";

export default {
    title: "${componentName}"
};

export const WithBar = () => <${componentName} foo="bar" />;

export const WithBaz = () => <${componentName} foo="baz" />;
`,
  extension: `.stories.tsx`,
});
