import tap from "tap";
import { Linter } from "../../../dist/emlint.esm";
import { applyFixes } from "../../../t-util/util";

// 01. validation
// -----------------------------------------------------------------------------

tap.test(
  `01.01 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - no accesskey, error level 0`,
  (t) => {
    const str = `<a>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-accesskey": 0,
      },
    });
    t.equal(applyFixes(str, messages), str);
    t.same(messages, []);
    t.end();
  }
);

tap.test(
  `01.02 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - no accesskey, error level 1`,
  (t) => {
    const str = `<a>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-accesskey": 1,
      },
    });
    t.equal(applyFixes(str, messages), str);
    t.same(messages, []);
    t.end();
  }
);

tap.test(
  `01.03 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - no accesskey, error level 2`,
  (t) => {
    const str = `<a>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-accesskey": 2,
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
    const str = `<a accesskey='z'>`; // <-- notice single quotes
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-accesskey": 2,
      },
    });
    t.equal(applyFixes(str, messages), str);
    t.same(messages, []);
    t.end();
  }
);

tap.test(
  `01.05 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - healthy attribute, encoded`,
  (t) => {
    const str = `<a accesskey="&pound;">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-accesskey": 2,
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
    const str = `<div accesskey="z">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-accesskey": 2,
      },
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-accesskey",
        idxFrom: 5,
        idxTo: 18,
        fix: null,
      },
    ]);
    t.end();
  }
);

tap.test(
  `02.02 - ${`\u001b[${35}m${`parent`}\u001b[${39}m`} - unrecognised tag`,
  (t) => {
    const str = `<zzz accesskey="z" yyy>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-accesskey": 2,
      },
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-accesskey",
        idxFrom: 5,
        idxTo: 18,
        fix: null,
      },
    ]);
    t.end();
  }
);

// 03. wrong value
// -----------------------------------------------------------------------------

tap.test(
  `03.01 - ${`\u001b[${35}m${`a wrong value`}\u001b[${39}m`} - more than 1 char, raw`,
  (t) => {
    const str = `z <a accesskey="abc" yyy>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-accesskey": 2,
      },
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-accesskey",
        idxFrom: 16,
        idxTo: 19,
        message: `Should be a single character (escaped or not).`,
        fix: null,
      },
    ]);
    t.end();
  }
);

tap.test(
  `03.02 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - healthy attribute, encoded`,
  (t) => {
    const str = `z <a accesskey=" &pound;">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-accesskey": 2,
      },
    });
    t.equal(applyFixes(str, messages), `z <a accesskey="&pound;">`);
    t.match(messages, [
      {
        ruleId: "attribute-validate-accesskey",
        idxFrom: 16,
        idxTo: 17,
        message: `Remove whitespace.`,
        fix: {
          ranges: [[16, 17]],
        },
      },
    ]);
    t.end();
  }
);
