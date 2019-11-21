// avanotonly

// rule: bad-named-html-entity-malformed-nbsp
// -----------------------------------------------------------------------------

import test from "ava";
import { Linter } from "../../../dist/emlint.esm";
import deepContains from "ast-deep-contains";
import { applyFixes } from "../../../t-util/util";

// 01. missing letters
// -----------------------------------------------------------------------------

test(`01.01 - ${`\u001b[${33}m${`nbsp`}\u001b[${39}m`} - group rule`, t => {
  const str = `abc&nsp;def`;
  const linter = new Linter();
  const messages = linter.verify(str, {
    rules: {
      "bad-html-entity": 2
    }
  });
  t.is(applyFixes(str, messages), "abc&nbsp;def");
  deepContains(
    messages,
    [
      {
        ruleId: "bad-named-html-entity-malformed-nbsp",
        severity: 2,
        idxFrom: 3,
        idxTo: 8,
        message: "Malformed NBSP entity.",
        fix: {
          ranges: [[3, 8, "&nbsp;"]]
        }
      }
    ],
    t.is,
    t.fail
  );
});

test(`01.02 - ${`\u001b[${33}m${`nbsp`}\u001b[${39}m`} - exact rule`, t => {
  const str = `abc&nsp;def`;
  const linter = new Linter();
  const messages = linter.verify(str, {
    rules: {
      "bad-named-html-entity-malformed-nbsp": 2
    }
  });
  t.is(applyFixes(str, messages), "abc&nbsp;def");
  deepContains(
    messages,
    [
      {
        ruleId: "bad-named-html-entity-malformed-nbsp",
        severity: 2,
        idxFrom: 3,
        idxTo: 8,
        message: "Malformed NBSP entity.",
        fix: {
          ranges: [[3, 8, "&nbsp;"]]
        }
      }
    ],
    t.is,
    t.fail
  );
});

test(`01.03 - ${`\u001b[${33}m${`nbsp`}\u001b[${39}m`} - rule by wildcard`, t => {
  const str = `abc&nsp;def`;
  const linter = new Linter();
  const messages = linter.verify(str, {
    rules: {
      "bad-named-html-entity-*": 2
    }
  });
  t.is(applyFixes(str, messages), "abc&nbsp;def");
  deepContains(
    messages,
    [
      {
        ruleId: "bad-named-html-entity-malformed-nbsp",
        severity: 2,
        idxFrom: 3,
        idxTo: 8,
        message: "Malformed NBSP entity.",
        fix: {
          ranges: [[3, 8, "&nbsp;"]]
        }
      }
    ],
    t.is,
    t.fail
  );
});

// 02. other malformed entities
// -----------------------------------------------------------------------------

test(`02.01 - ${`\u001b[${33}m${`pound`}\u001b[${39}m`} - rule by wildcard`, t => {
  const str = `&pond;1000`;
  const linter = new Linter();
  const messages = linter.verify(str, {
    rules: {
      "bad-named-html-entity-*": 2
    }
  });
  t.is(applyFixes(str, messages), "&pound;1000");
  deepContains(
    messages,
    [
      {
        ruleId: "bad-named-html-entity-malformed-pound",
        severity: 2,
        idxFrom: 0,
        idxTo: 6,
        message: "Malformed pound entity.",
        fix: {
          ranges: [[0, 6, "&pound;"]]
        }
      }
    ],
    t.is,
    t.fail
  );
});

test(`02.02 - ${`\u001b[${33}m${`pound`}\u001b[${39}m`} - rule by group rule`, t => {
  const str = `&pond;1000`;
  const linter = new Linter();
  const messages = linter.verify(str, {
    rules: {
      "bad-html-entity": 2
    }
  });
  t.is(applyFixes(str, messages), "&pound;1000");
  deepContains(
    messages,
    [
      {
        ruleId: "bad-named-html-entity-malformed-pound",
        severity: 2,
        idxFrom: 0,
        idxTo: 6,
        message: "Malformed pound entity.",
        fix: {
          ranges: [[0, 6, "&pound;"]]
        }
      }
    ],
    t.is,
    t.fail
  );
});

test(`02.03 - ${`\u001b[${33}m${`pound`}\u001b[${39}m`} - rule by exact rule`, t => {
  const str = `&pond;1000`;
  const linter = new Linter();
  const messages = linter.verify(str, {
    rules: {
      "bad-named-html-entity-malformed-pound": 2
    }
  });
  t.is(applyFixes(str, messages), "&pound;1000");
  deepContains(
    messages,
    [
      {
        ruleId: "bad-named-html-entity-malformed-pound",
        severity: 2,
        idxFrom: 0,
        idxTo: 6,
        message: "Malformed pound entity.",
        fix: {
          ranges: [[0, 6, "&pound;"]]
        }
      }
    ],
    t.is,
    t.fail
  );
});
