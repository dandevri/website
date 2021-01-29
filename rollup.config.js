import {terser} from 'rollup-plugin-terser';

export default {
  input: ['scripts/main.js'],
  output: [
    {
      file: "scripts/script.js",
      format: "iife",
      plugins: [terser()],
    },
  ],
};
