import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import includePaths from "rollup-plugin-includepaths";
import svg from "rollup-plugin-svg";
import svgr from "@svgr/rollup";

const packageJson = require("./package.json");

let includePathOptions = {
  include: {},
  paths: ["src"],
  external: [],
  extensions: [".js", ".jsx", ".ts", ".tsx", ".svg"],
};

export default {
  input: "src/index.tsx",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    includePaths(includePathOptions),
    svg(),
    svgr(),
  ],
};
