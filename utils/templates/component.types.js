module.exports = (componentName) => ({
  fileName: "types",
  content: `export interface I${componentName}Props {}
`,
  extension: `.ts`,
});
