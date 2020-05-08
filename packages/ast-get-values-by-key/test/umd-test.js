import tap from "tap";
import get1 from "../dist/ast-get-values-by-key.umd";

const source = [
  {
    tag: ["html1"],
    attrs: {
      lang: "en",
    },
    content: ["\n"],
  },
  {
    tag: { html2: "html2" },
    attrs: {
      lang: "en",
    },
    content: ["\n"],
  },
  {
    tag: "html3",
    attrs: {
      lang: "en",
    },
    content: ["\n"],
  },
];
const target = "tag";
const res = [
  { val: ["html1"], path: "0.tag" },
  { val: { html2: "html2" }, path: "1.tag" },
  { val: "html3", path: "2.tag" },
];

tap.test("UMD build works fine", (t) => {
  t.same(get1(source, target), res, "01");
  t.end();
});
