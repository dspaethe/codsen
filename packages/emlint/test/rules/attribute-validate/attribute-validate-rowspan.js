import tap from "tap";
import { Linter } from "../../../dist/emlint.esm";
import { applyFixes } from "../../../t-util/util";

// 01. validation
// -----------------------------------------------------------------------------

tap.test(
  `01.01 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - no rowspan, error level 0`,
  (t) => {
    const str = `<td>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-rowspan": 0,
      },
    });
    t.equal(applyFixes(str, messages), str);
    t.same(messages, []);
    t.end();
  }
);

tap.test(
  `01.02 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - no rowspan, error level 1`,
  (t) => {
    const str = `<td>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-rowspan": 1,
      },
    });
    t.equal(applyFixes(str, messages), str);
    t.same(messages, []);
    t.end();
  }
);

tap.test(
  `01.03 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - no rowspan, error level 2`,
  (t) => {
    const str = `<td>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-rowspan": 2,
      },
    });
    t.equal(applyFixes(str, messages), str);
    t.same(messages, []);
    t.end();
  }
);

tap.test(
  `01.04 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - healthy rowspan, zero`,
  (t) => {
    const str = `<td rowspan='0'>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-rowspan": 2,
      },
    });
    t.equal(applyFixes(str, messages), str);
    t.same(messages, []);
    t.end();
  }
);

tap.test(
  `01.05 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - healthy rowspan, non-zero`,
  (t) => {
    const str = `<td rowspan="3">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-rowspan": 2,
      },
    });
    t.equal(applyFixes(str, messages), str);
    t.same(messages, []);
    t.end();
  }
);

// 02. rogue whitespace
// -----------------------------------------------------------------------------

tap.test(
  `02.01 - ${`\u001b[${36}m${`whitespace`}\u001b[${39}m`} - space in front`,
  (t) => {
    const str = `<td rowspan=" 0">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-rowspan": 2,
      },
    });
    t.equal(applyFixes(str, messages), `<td rowspan="0">`);
    t.match(messages, [
      {
        ruleId: "attribute-validate-rowspan",
        idxFrom: 13,
        idxTo: 14,
        message: `Remove whitespace.`,
        fix: {
          ranges: [[13, 14]],
        },
      },
    ]);
    t.end();
  }
);

tap.test(
  `02.02 - ${`\u001b[${36}m${`whitespace`}\u001b[${39}m`} - space after`,
  (t) => {
    const str = `<td rowspan="0 ">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-rowspan": 2,
      },
    });
    t.equal(applyFixes(str, messages), `<td rowspan="0">`);
    t.match(messages, [
      {
        ruleId: "attribute-validate-rowspan",
        idxFrom: 14,
        idxTo: 15,
        message: `Remove whitespace.`,
        fix: {
          ranges: [[14, 15]],
        },
      },
    ]);
    t.end();
  }
);

tap.test(
  `02.03 - ${`\u001b[${36}m${`whitespace`}\u001b[${39}m`} - copious whitespace around`,
  (t) => {
    const str = `<td rowspan="  0  ">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-rowspan": 2,
      },
    });
    t.equal(applyFixes(str, messages), `<td rowspan="0">`);
    t.match(messages, [
      {
        ruleId: "attribute-validate-rowspan",
        idxFrom: 13,
        idxTo: 18,
        message: `Remove whitespace.`,
        fix: {
          ranges: [
            [13, 15],
            [16, 18],
          ],
        },
      },
    ]);
    t.end();
  }
);

tap.test(
  `02.04 - ${`\u001b[${36}m${`whitespace`}\u001b[${39}m`} - only trimmable whitespace as a value`,
  (t) => {
    const str = `<td rowspan="  \t">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-rowspan": 2,
      },
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-rowspan",
        idxFrom: 13,
        idxTo: 16,
        message: `Missing value.`,
        fix: null,
      },
    ]);
    t.end();
  }
);

// 03. wrong value
// -----------------------------------------------------------------------------

tap.test(
  `03.01 - ${`\u001b[${35}m${`value`}\u001b[${39}m`} - string as value`,
  (t) => {
    const str = `<td rowspan="z">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-rowspan": 2,
      },
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-rowspan",
        idxFrom: 13,
        idxTo: 14,
        message: `Should be integer, no units.`,
        fix: null,
      },
    ]);
    t.end();
  }
);

tap.test(
  `03.02 - ${`\u001b[${35}m${`value`}\u001b[${39}m`} - dot as value`,
  (t) => {
    const str = `<td rowspan=".">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-rowspan": 2,
      },
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-rowspan",
        idxFrom: 13,
        idxTo: 14,
        message: `Should be integer, no units.`,
        fix: null,
      },
    ]);
    t.end();
  }
);

tap.test(
  `03.03 - ${`\u001b[${35}m${`value`}\u001b[${39}m`} - a rational number`,
  (t) => {
    const str = `<td rowspan="1.5">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-rowspan": 2,
      },
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-rowspan",
        idxFrom: 14, // <--- starts at the first non-digit char
        idxTo: 16,
        message: `Should be integer, no units.`,
        fix: null,
      },
    ]);
    t.end();
  }
);

tap.test(
  `03.04 - ${`\u001b[${35}m${`value`}\u001b[${39}m`} - with units`,
  (t) => {
    const str = `<td rowspan="1px">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-rowspan": 2,
      },
    });
    // will fix:
    t.equal(applyFixes(str, messages), `<td rowspan="1">`);
    t.match(messages, [
      {
        ruleId: "attribute-validate-rowspan",
        idxFrom: 14, // <--- starts at the first non-digit char
        idxTo: 16,
        message: `Remove px.`,
        fix: {
          ranges: [[14, 16]],
        },
      },
    ]);
    t.end();
  }
);

// 04. wrong parent tag
// -----------------------------------------------------------------------------

tap.test(
  `04.01 - ${`\u001b[${35}m${`parent`}\u001b[${39}m`} - recognised tag`,
  (t) => {
    const str = `<div rowspan="0">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-rowspan": 2,
      },
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-rowspan",
        idxFrom: 5,
        idxTo: 16,
        fix: null,
      },
    ]);
    t.end();
  }
);

tap.test(
  `04.02 - ${`\u001b[${35}m${`parent`}\u001b[${39}m`} - unrecognised tag`,
  (t) => {
    const str = `<zzz rowspan="0" yyy>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-rowspan": 2,
      },
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-rowspan",
        idxFrom: 5,
        idxTo: 16,
        fix: null,
      },
    ]);
    t.end();
  }
);
