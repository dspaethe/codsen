import tap from "tap";
import { helga } from "../dist/helga.esm";

// 01. normal use
// -----------------------------------------------------------------------------

tap.test("01 - just a single word", (t) => {
  t.same(
    helga("abc"),
    {
      minified: "abc",
      beautified: "abc",
    },
    "01"
  );
  t.end();
});

tap.test("02 - converts line breaks - JSON off", (t) => {
  t.same(
    helga("abc\ndef", { targetJSON: false }),
    {
      minified: "abc\ndef",
      beautified: "abc\ndef",
    },
    "02"
  );
  t.end();
});

tap.test("03 - converts line breaks - JSON on", (t) => {
  // beautified as input:
  t.same(
    helga("abc\ndef", { targetJSON: true }),
    {
      minified: "abc\\ndef",
      beautified: "abc\ndef",
    },
    "03.01"
  );

  // minified as input:
  t.same(
    helga("abc\\ndef", { targetJSON: true }),
    {
      minified: "abc\\ndef",
      beautified: "abc\ndef",
    },
    "03.02"
  );
  t.end();
});
