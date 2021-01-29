import {terser} from 'rollup-plugin-terser';

export default {
  input: ['scripts/script.js'],
  output: [
    {
      file: "_site/static/js/script.js",
      format: "iife",
      plugins: [terser()],
    },
  ],
};
