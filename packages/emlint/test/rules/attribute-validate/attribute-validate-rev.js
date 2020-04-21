import tap from "tap";
import { Linter } from "../../../dist/emlint.esm";
import { applyFixes } from "../../../t-util/util";

// 01. validation
// -----------------------------------------------------------------------------

tap.test(
  `01.01 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - no rev, error level 0`,
  (t) => {
    const str = `<a>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-rev": 0,
      },
    });
    t.equal(applyFixes(str, messages), str);
    t.same(messages, []);
    t.end();
  }
);

tap.test(
  `01.02 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - no rev, error level 1`,
  (t) => {
    const str = `<a>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-rev": 1,
      },
    });
    t.equal(applyFixes(str, messages), str);
    t.same(messages, []);
    t.end();
  }
);

tap.test(
  `01.03 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - no rev, error level 2`,
  (t) => {
    const str = `<a>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-rev": 2,
      },
    });
    t.equal(applyFixes(str, messages), str);
    t.same(messages, []);
    t.end();
  }
);

tap.test(
  `01.04 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - healthy attribute, a`,
  (t) => {
    const str = `<a rev='nofollow'>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-rev": 2,
      },
    });
    t.equal(applyFixes(str, messages), str);
    t.same(messages, []);
    t.end();
  }
);

tap.test(
  `01.05 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - healthy attribute, link`,
  (t) => {
    const str = `<link rev='nofollow'>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-rev": 2,
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
    const str = `<a rev=' nofollow'>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-rev": 2,
      },
    });
    t.equal(applyFixes(str, messages), `<a rev='nofollow'>`);
    t.match(messages, [
      {
        ruleId: "attribute-validate-rev",
        idxFrom: 8,
        idxTo: 9,
        message: `Remove whitespace.`,
        fix: {
          ranges: [[8, 9]],
        },
      },
    ]);
    t.end();
  }
);

tap.test(
  `02.02 - ${`\u001b[${36}m${`whitespace`}\u001b[${39}m`} - space after`,
  (t) => {
    const str = `<a rev='nofollow '>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-rev": 2,
      },
    });
    t.equal(applyFixes(str, messages), `<a rev='nofollow'>`);
    t.match(messages, [
      {
        ruleId: "attribute-validate-rev",
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

tap.test(
  `02.03 - ${`\u001b[${36}m${`whitespace`}\u001b[${39}m`} - copious whitespace around`,
  (t) => {
    const str = `<a rev='  nofollow  \t'>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-rev": 2,
      },
    });
    t.equal(applyFixes(str, messages), `<a rev='nofollow'>`);
    t.match(messages, [
      {
        ruleId: "attribute-validate-rev",
        idxFrom: 8,
        idxTo: 21,
        message: `Remove whitespace.`,
        fix: {
          ranges: [
            [8, 10],
            [18, 21],
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
    const str = `<a rev="  \t">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-rev": 2,
      },
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-rev",
        idxFrom: 8,
        idxTo: 11,
        message: `Missing value.`,
        fix: null,
      },
    ]);
    t.end();
  }
);

// 03. wrong parent tag
// -----------------------------------------------------------------------------

tap.test(
  `03.01 - ${`\u001b[${35}m${`parent`}\u001b[${39}m`} - recognised tag`,
  (t) => {
    const str = `<div rev="nofollow">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-rev": 2,
      },
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-rev",
        idxFrom: 5,
        idxTo: 19,
        fix: null,
      },
    ]);
    t.end();
  }
);

tap.test(
  `03.02 - ${`\u001b[${35}m${`parent`}\u001b[${39}m`} - unrecognised tag`,
  (t) => {
    const str = `<zzz rev="nofollow">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-rev": 2,
      },
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-rev",
        idxFrom: 5,
        idxTo: 19,
        fix: null,
      },
    ]);
    t.end();
  }
);

// 04. wrong value
// -----------------------------------------------------------------------------

tap.test(
  `04.01 - ${`\u001b[${35}m${`validation`}\u001b[${39}m`} - out of whack value`,
  (t) => {
    const str = `<a rev="tralala">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-rev": 2,
      },
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-rev",
        idxFrom: 8,
        idxTo: 15,
        message: `Unrecognised value: "tralala".`,
        fix: null,
      },
    ]);
    t.end();
  }
);

tap.test(
  `04.02 - ${`\u001b[${35}m${`validation`}\u001b[${39}m`} - wrong case nofollow`,
  (t) => {
    const str = `<a rev="NOFOLLOW">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-rev": 2,
      },
    });
    // all fine
    t.equal(applyFixes(str, messages), str);
    t.match(messages, []);
    t.end();
  }
);

tap.test(
  `04.03 - ${`\u001b[${35}m${`validation`}\u001b[${39}m`} - wrong case nofollow`,
  (t) => {
    const str = `<a rev="NOFOLLOW">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-rev": [2, "enforceLowercase"],
      },
    });
    // can fix:
    t.equal(applyFixes(str, messages), `<a rev="nofollow">`);
    t.match(messages, [
      {
        ruleId: "attribute-validate-rev",
        idxFrom: 8,
        idxTo: 16,
        message: `Should be lowercase.`,
        fix: {
          ranges: [[8, 16, "nofollow"]],
        },
      },
    ]);
    t.end();
  }
);
