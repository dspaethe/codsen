import { test } from "uvu";
// eslint-disable-next-line no-unused-vars
import { equal, is, ok, throws, type, not, match } from "uvu/assert";

import { compare } from "../../../ops/helpers/shallow-compare.js";
import { tokenizer as ct } from "../dist/codsen-tokenizer.esm.js";

test("01", () => {
  let gathered = [];
  ct("abc", {
    reportProgressFunc: null,
    tagCb: (token) => {
      gathered.push(token);
    },
  });

  compare(ok, gathered, [
    {
      type: "text",
      start: 0,
      end: 3,
    },
  ]);
});

test("02", () => {
  let gathered = [];
  ct("abc", {
    reportProgressFunc: false,
    tagCb: (token) => {
      gathered.push(token);
    },
  });
  compare(ok, gathered, [
    {
      type: "text",
      start: 0,
      end: 3,
    },
  ]);
});

test("03", () => {
  let gathered = [];
  function shouldveBeenCalled(val) {
    throw new Error(val);
  }

  // short input string should report only when passing at 50%:
  throws(
    () => {
      ct("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\n".repeat(30), {
        reportProgressFunc: shouldveBeenCalled,
        tagCb: (token) => {
          gathered.push(token);
        },
      });
    },
    /50/,
    "03.01"
  );
});

test("04", () => {
  let counter = 0;
  let countingFunction = () => {
    // const countingFunction = val => {
    //   console.log(`val received: ${val}`);
    counter += 1;
  };
  // long input (>1000 chars long) should report at each natural number percentage passed:

  // 1. our function will mutate the counter variable:
  ct("aaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaa\n".repeat(50), {
    reportProgressFunc: countingFunction,
  });

  // 2. check the counter variable:
  ok(counter, "04.01");
});

test("05", () => {
  function shouldveBeenCalled(val) {
    throw new Error(val);
  }

  // short input string should report only when passing at 50%:
  throws(
    () => {
      ct("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\n".repeat(20), {
        reportProgressFunc: shouldveBeenCalled,
        reportProgressFuncFrom: 21,
        reportProgressFuncTo: 86,
      });
    },
    /32/g,
    "05.01"
  );
});

test("06", () => {
  let gather = [];
  let countingFunction = (val) => {
    // const countingFunction = val => {
    // console.log(`val received: ${val}`);
    gather.push(val);
  };

  // long input (>1000 chars long) should report at each natural number percentage passed:
  // our function will mutate the "gather" variable:
  ct(
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa\n".repeat(
      50
    ),
    {
      reportProgressFunc: countingFunction,
      reportProgressFuncFrom: 21,
      reportProgressFuncTo: 86,
    }
  );

  // 2. check the counter variable:
  let compareTo = [];
  for (let i = 21; i < 86; i++) {
    compareTo.push(i);
  }
  // since we use Math.floor, some percentages can be skipped, so let's just
  // confirm that no numbers outside of permitted values are reported
  gather.forEach((perc) => {
    ok(compareTo.includes(perc), String(perc));
  });
  equal(gather.length, 86 - 21, "06.01");

  equal(gather, compareTo, "06.02");
});

test.run();
