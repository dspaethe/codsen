import tap from "tap";
import { Linter } from "../../../dist/emlint.esm";
import { applyFixes } from "../../../t-util/util";

// 01. validation
// -----------------------------------------------------------------------------

tap.test(
  `01.01 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - no onreset, error level 0`,
  (t) => {
    const str = `<form class="z">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-onreset": 0,
      },
    });
    t.equal(applyFixes(str, messages), str);
    t.same(messages, []);
    t.end();
  }
);

tap.test(
  `01.02 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - no onreset, error level 1`,
  (t) => {
    const str = `<form class="z">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-onreset": 1,
      },
    });
    t.equal(applyFixes(str, messages), str);
    t.same(messages, []);
    t.end();
  }
);

tap.test(
  `01.03 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - no onreset, error level 2`,
  (t) => {
    const str = `<form class="z">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-onreset": 2,
      },
    });
    t.equal(applyFixes(str, messages), str);
    t.same(messages, []);
    t.end();
  }
);

tap.test(
  `01.04 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - healthy attribute`,
  (t) => {
    const str = `<form onreset='js'>`; // <-- notice single quotes
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-onreset": 2,
      },
    });
    t.equal(applyFixes(str, messages), str);
    t.same(messages, []);
    t.end();
  }
);

// 02. wrong parent tag
// -----------------------------------------------------------------------------

tap.test(
  `02.01 - ${`\u001b[${35}m${`parent`}\u001b[${39}m`} - recognised tag`,
  (t) => {
    const str = `<div onreset="something">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-onreset": 2,
      },
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-onreset",
        idxFrom: 5,
        idxTo: 24,
        fix: null,
      },
    ]);
    t.end();
  }
);

tap.test(
  `02.02 - ${`\u001b[${35}m${`parent`}\u001b[${39}m`} - unrecognised tag`,
  (t) => {
    const str = `<zzz onreset="something" yyy>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-onreset": 2,
      },
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-onreset",
        idxFrom: 5,
        idxTo: 24,
        fix: null,
      },
    ]);
    t.end();
  }
);

// 03. whitespace
// -----------------------------------------------------------------------------

tap.test(
  `03.01 - ${`\u001b[${35}m${`parent`}\u001b[${39}m`} - empty value`,
  (t) => {
    const str = `<form onreset="">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-onreset": 2,
      },
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-onreset",
        idxFrom: 15,
        idxTo: 15,
        message: `Missing value.`,
        fix: null,
      },
    ]);
    t.end();
  }
);

tap.test(
  `03.02 - ${`\u001b[${35}m${`parent`}\u001b[${39}m`} - surrounding whitespace`,
  (t) => {
    const str = `<form onreset=" something ">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-onreset": 2,
      },
    });
    t.equal(applyFixes(str, messages), `<form onreset="something">`);
    t.match(messages, [
      {
        ruleId: "attribute-validate-onreset",
        idxFrom: 15,
        idxTo: 26,
        message: `Remove whitespace.`,
        fix: {
          ranges: [
            [15, 16],
            [25, 26],
          ],
        },
      },
    ]);
    t.end();
  }
);
