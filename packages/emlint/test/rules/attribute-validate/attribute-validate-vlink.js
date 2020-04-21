import tap from "tap";
import { Linter } from "../../../dist/emlint.esm";
import { applyFixes } from "../../../t-util/util";

// 01. validation
// -----------------------------------------------------------------------------

tap.test(
  `01.01 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - no vlink, error level 0`,
  (t) => {
    const str = `<body>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-vlink": 0,
      },
    });
    t.equal(applyFixes(str, messages), str);
    t.same(messages, []);
    t.end();
  }
);

tap.test(
  `01.02 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - no vlink, error level 1`,
  (t) => {
    const str = `<body>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-vlink": 1,
      },
    });
    t.equal(applyFixes(str, messages), str);
    t.same(messages, []);
    t.end();
  }
);

tap.test(
  `01.03 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - no vlink, error level 2`,
  (t) => {
    const str = `<body>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-vlink": 2,
      },
    });
    t.equal(applyFixes(str, messages), str);
    t.same(messages, []);
    t.end();
  }
);

tap.test(
  `01.04 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - healthy vlink`,
  (t) => {
    const str = `<body class='zz' vlink='#CCCCCC' id='yy aa'>`; // <-- notice single quotes
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-vlink": 2,
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
    const str = `<body vlink=" #CCCCCC">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-vlink": 2,
      },
    });
    t.equal(applyFixes(str, messages), `<body vlink="#CCCCCC">`);
    t.match(messages, [
      {
        ruleId: "attribute-validate-vlink",
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
    const str = `<body vlink="#CCCCCC ">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-vlink": 2,
      },
    });
    t.equal(applyFixes(str, messages), `<body vlink="#CCCCCC">`);
    t.match(messages, [
      {
        ruleId: "attribute-validate-vlink",
        idxFrom: 20,
        idxTo: 21,
        message: `Remove whitespace.`,
        fix: {
          ranges: [[20, 21]],
        },
      },
    ]);
    t.end();
  }
);

tap.test(
  `02.03 - ${`\u001b[${36}m${`whitespace`}\u001b[${39}m`} - copious whitespace around - 6 digit hex`,
  (t) => {
    const str = `<body vlink="  #CCCCCC  ">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-vlink": 2,
      },
    });
    t.equal(applyFixes(str, messages), `<body vlink="#CCCCCC">`);
    t.match(messages, [
      {
        ruleId: "attribute-validate-vlink",
        idxFrom: 13,
        idxTo: 24,
        message: `Remove whitespace.`,
        fix: {
          ranges: [
            [13, 15],
            [22, 24],
          ],
        },
      },
    ]);
    t.end();
  }
);

tap.test(
  `02.04 - ${`\u001b[${36}m${`whitespace`}\u001b[${39}m`} - copious whitespace around - named`,
  (t) => {
    const str = `<body vlink="  PeachPuff  ">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-vlink": 2,
      },
    });
    t.equal(applyFixes(str, messages), `<body vlink="PeachPuff">`);
    t.match(messages, [
      {
        ruleId: "attribute-validate-vlink",
        idxFrom: 13,
        idxTo: 26,
        message: `Remove whitespace.`,
        fix: {
          ranges: [
            [13, 15],
            [24, 26],
          ],
        },
      },
    ]);
    t.end();
  }
);

tap.test(
  `02.05 - ${`\u001b[${36}m${`whitespace`}\u001b[${39}m`} - only trimmable whitespace as a value`,
  (t) => {
    const str = `<body vlink="  \t">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-vlink": 2,
      },
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-vlink",
        idxFrom: 13,
        idxTo: 16,
        message: `Missing value.`,
        fix: null,
      },
    ]);
    t.end();
  }
);

tap.test(
  `02.06 - ${`\u001b[${36}m${`whitespace`}\u001b[${39}m`} - empty value`,
  (t) => {
    const str = `<body vlink="">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-vlink": 2,
      },
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-vlink",
        idxFrom: 13,
        idxTo: 13,
        message: `Missing value.`,
        fix: null,
      },
    ]);
    t.end();
  }
);

// 03. named colors
// -----------------------------------------------------------------------------

tap.test(`03.01 - ${`\u001b[${35}m${`named`}\u001b[${39}m`} - healthy`, (t) => {
  const str = `<body class='zz' vlink='blue' id='yy aa'>`; // <-- notice single quotes
  const linter = new Linter();
  const messages = linter.verify(str, {
    rules: {
      "attribute-validate-vlink": 2,
    },
  });
  t.equal(applyFixes(str, messages), str);
  t.same(messages, []);
  t.end();
});

tap.test(
  `03.02 - ${`\u001b[${35}m${`named`}\u001b[${39}m`} - unrecognised`,
  (t) => {
    const str = `<body vlink="nearlyRed">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-vlink": 2,
      },
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-vlink",
        idxFrom: 13,
        idxTo: 22,
        message: `Unrecognised color value.`,
        fix: null,
      },
    ]);
    t.end();
  }
);

// 04. hex colors
// -----------------------------------------------------------------------------

tap.test(
  `04.01 - ${`\u001b[${35}m${`hex`}\u001b[${39}m`} - unrecognised`,
  (t) => {
    const str = `<body vlink="#gg0000">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-vlink": 2,
      },
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-vlink",
        idxFrom: 13,
        idxTo: 20,
        message: `Unrecognised hex code.`,
        fix: null,
      },
    ]);
    t.end();
  }
);

tap.test(`04.02 - ${`\u001b[${35}m${`hex`}\u001b[${39}m`} - bad hex`, (t) => {
  const str = `<body vlink="#ccc">`;
  const linter = new Linter();
  const messages = linter.verify(str, {
    rules: {
      "attribute-validate-vlink": 2,
    },
  });
  // can't fix:
  t.equal(applyFixes(str, messages), str);
  t.match(messages, [
    {
      ruleId: "attribute-validate-vlink",
      idxFrom: 13,
      idxTo: 17,
      message: `Hex color code should be 6 digits-long.`,
      fix: null,
    },
  ]);
  t.end();
});

tap.test(`04.03 - ${`\u001b[${35}m${`hex`}\u001b[${39}m`} - bad hex`, (t) => {
  const str = `<body vlink="#aaaa">`;
  const linter = new Linter();
  const messages = linter.verify(str, {
    rules: {
      "attribute-validate-vlink": 2,
    },
  });
  // can't fix:
  t.equal(applyFixes(str, messages), str);
  t.match(messages, [
    {
      ruleId: "attribute-validate-vlink",
      idxFrom: 13,
      idxTo: 18,
      message: `Hex color code should be 6 digits-long.`,
      fix: null,
    },
  ]);
  t.end();
});

// 05. hex colors
// -----------------------------------------------------------------------------

tap.test(`05.01 - ${`\u001b[${35}m${`rgba`}\u001b[${39}m`} - healthy`, (t) => {
  const str = `<body vlink="rgb(255, 0, 153)">`;
  const linter = new Linter();
  const messages = linter.verify(str, {
    rules: {
      "attribute-validate-vlink": 2,
    },
  });
  // can't fix:
  t.equal(applyFixes(str, messages), str);
  t.match(messages, [
    {
      ruleId: "attribute-validate-vlink",
      idxFrom: 13,
      idxTo: 29,
      message: `rgb() is not allowed.`,
      fix: null,
    },
  ]);
  t.end();
});

tap.test(`05.02 - ${`\u001b[${35}m${`rgba`}\u001b[${39}m`} - broken`, (t) => {
  const str = `<body vlink="rgb(255)">`;
  const linter = new Linter();
  const messages = linter.verify(str, {
    rules: {
      "attribute-validate-vlink": 2,
    },
  });
  // can't fix:
  t.equal(applyFixes(str, messages), str);
  t.match(messages, [
    {
      ruleId: "attribute-validate-vlink",
      idxFrom: 13,
      idxTo: 21,
      message: `rgb() is not allowed.`,
      fix: null,
    },
  ]);
  t.end();
});

tap.test(`05.03 - ${`\u001b[${35}m${`rgba`}\u001b[${39}m`} - broken`, (t) => {
  const str = `<body vlink="rgb()">`;
  const linter = new Linter();
  const messages = linter.verify(str, {
    rules: {
      "attribute-validate-vlink": 2,
    },
  });
  // can't fix:
  t.equal(applyFixes(str, messages), str);
  t.match(messages, [
    {
      ruleId: "attribute-validate-vlink",
      idxFrom: 13,
      idxTo: 18,
      message: `rgb() is not allowed.`,
      fix: null,
    },
  ]);
  t.end();
});
