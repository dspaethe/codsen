import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import cleanup from "rollup-plugin-cleanup";
import license from "rollup-plugin-license";
import strip from "rollup-plugin-strip";
import babel from "rollup-plugin-babel";
import json from "rollup-plugin-json";
import pkg from "./package.json";

const licensePiece = `${pkg.name}
${pkg.description}
Version: ${pkg.version}
Author: Roy Revelt, Codsen Ltd
License: ${pkg.license}
Homepage: ${pkg.homepage}`;

export default commandLineArgs => {
  const finalConfig = [
    // browser-friendly UMD build
    {
      input: "src/main.js",
      output: {
        file: pkg.browser,
        format: "umd",
        name: "astMonkey"
      },
      plugins: [
        strip({
          sourceMap: false
        }),
        resolve(),
        json(),
        commonjs(),
        babel(),
        terser(),
        license({
          banner: licensePiece
        })
      ]
    },

    // CommonJS build (for Node)
    {
      input: "src/main.js",
      output: [{ file: pkg.main, format: "cjs" }],
      external: [
        "ast-compare",
        "ast-monkey-traverse",
        "check-types-mini",
        "is-natural-number",
        "is-natural-number-string",
        "lodash.clonedeep",
        "type-detect",
        "util-array-object-or-both"
      ],
      plugins: [
        strip({
          sourceMap: false
        }),
        json(),
        babel(),
        cleanup(),
        license({
          banner: licensePiece
        })
      ]
    },

    // ES module build (for bundlers)
    {
      input: "src/main.js",
      output: [{ file: pkg.module, format: "es" }],
      external: [
        "ast-compare",
        "ast-monkey-traverse",
        "check-types-mini",
        "is-natural-number",
        "is-natural-number-string",
        "lodash.clonedeep",
        "type-detect",
        "util-array-object-or-both"
      ],
      plugins: [
        strip({
          sourceMap: false
        }),
        json(),
        cleanup(),
        license({
          banner: licensePiece
        })
      ]
    }
  ];

  if (commandLineArgs.dev) {
    // if rollup was called without a --dev flag,
    // dispose of a comment removal, strip():
    finalConfig.forEach((singleConfigVal, i) => {
      finalConfig[i].plugins.shift();
    });
    // https://github.com/rollup/rollup/issues/2694#issuecomment-463915954
    delete commandLineArgs.dev;
  }
  return finalConfig;
};
