import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import svg from 'rollup-plugin-svg';
import svgr from '@svgr/rollup';

const packageJson = require('./package.json');

const includePathOptions = {
  include: {},
  paths: ['src'],
  external: [],
  extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg'],
};

const globals = {
  ...packageJson.devDependencies,
  ...packageJson.peerDependencies,
};

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        exclude: ['**/*.stories.*'],
      },
      typescript: require('typescript'),
    }),
    commonjs({
      exclude: 'node_modules',
      ignoreGlobal: true,
    }),
    svg(),
    svgr(),
  ],
  external: Object.keys(globals),
};
