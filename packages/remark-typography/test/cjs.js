/* eslint-disable no-prototype-builtins */
import fs from "fs";
import path from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

const { test } = require("uvu");
// eslint-disable-next-line no-unused-vars
const { equal, is, ok, throws, type, not, match } = require("uvu/assert");
// the CJS imported file can't be ".cjs.js", so we rename temporarily:
fs.renameSync(
  path.resolve("dist/remark-typography.cjs.js"),
  path.resolve("dist/remark-typography.cjs")
);
const api = require("../dist/remark-typography.cjs");

test.after(() => {
  fs.renameSync(
    path.resolve("dist/remark-typography.cjs"),
    path.resolve("dist/remark-typography.cjs.js")
  );
});

// -----------------------------------------------------------------------------

test("01 - a function is exported", () => {
  equal(typeof api, "function", "01.01");
});

test.run();
