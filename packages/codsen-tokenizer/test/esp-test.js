import tap from "tap";
import ct from "../dist/codsen-tokenizer.esm";

// ESP stands for Email Service Provider
// in practice, we cover all other templating languages too, for example,
// Moustache, Liquid or Jinja or even PHP - it's the same principle - "special"
// heads and tails surrounding some string, which can be placed anywhere in HTML

// 01. ESP tag + something, no overlap
// -----------------------------------------------------------------------------

tap.test(
  `01 - ${`\u001b[${33}m${`no overlap`}\u001b[${39}m`} - only an ESP tag`,
  (t) => {
    const gathered = [];
    ct(`{% zz %}`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.same(
      gathered,
      [
        {
          type: "esp",
          start: 0,
          end: 8,
          value: "{% zz %}",
          head: "{%",
          tail: "%}",
          kind: null,
        },
      ],
      "01.01"
    );
    t.end();
  }
);

tap.test(
  `02 - ${`\u001b[${33}m${`no overlap`}\u001b[${39}m`} - text and ESP tag`,
  (t) => {
    const gathered = [];
    ct(`a{% zz %}`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.same(
      gathered,
      [
        {
          type: "text",
          start: 0,
          end: 1,
          value: "a",
        },
        {
          type: "esp",
          start: 1,
          end: 9,
          value: "{% zz %}",
          head: "{%",
          tail: "%}",
          kind: null,
        },
      ],
      "02.01"
    );
    t.end();
  }
);

tap.test(
  `03 - ${`\u001b[${33}m${`no overlap`}\u001b[${39}m`} - text-ESP-text`,
  (t) => {
    const gathered = [];
    ct(`ab {% if something %} cd`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(
      gathered,
      [
        {
          type: "text",
          start: 0,
          end: 3,
        },
        {
          type: "esp",
          start: 3,
          end: 21,
          tail: "%}",
        },
        {
          type: "text",
          start: 21,
          end: 24,
        },
      ],
      "03.01"
    );
    t.end();
  }
);

tap.test(
  `04 - ${`\u001b[${33}m${`no overlap`}\u001b[${39}m`} - tag-ESP-tag`,
  (t) => {
    const gathered = [];
    ct(`<a>{% if something %}<b>`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(
      gathered,
      [
        {
          type: "tag",
          start: 0,
          end: 3,
        },
        {
          type: "esp",
          start: 3,
          end: 21,
          tail: "%}",
        },
        {
          type: "tag",
          start: 21,
          end: 24,
        },
      ],
      "04.01"
    );
    t.end();
  }
);

tap.test(
  `05 - ${`\u001b[${33}m${`no overlap`}\u001b[${39}m`} - Responsys-style ESP tag`,
  (t) => {
    const gathered = [];
    ct(`<a>$(something)<b>`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(
      gathered,
      [
        {
          type: "tag",
          start: 0,
          end: 3,
        },
        {
          type: "esp",
          start: 3,
          end: 15,
          tail: ")$",
        },
        {
          type: "tag",
          start: 15,
          end: 18,
        },
      ],
      "05.01"
    );
    t.end();
  }
);

// heuristically detecting tails and again new heads
tap.test(
  `06 - ${`\u001b[${33}m${`no overlap`}\u001b[${39}m`} - two Nunjucks tags, same pattern set of two, tight`,
  (t) => {
    const gathered = [];
    ct(`{%- a -%}{%- b -%}`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(
      gathered,
      [
        {
          type: "esp",
          start: 0,
          end: 9,
        },
        {
          type: "esp",
          start: 9,
          end: 18,
        },
      ],
      "06.01"
    );
    t.end();
  }
);

// heuristically detecting tails and again new heads, this time slightly different
tap.test(
  `07 - ${`\u001b[${33}m${`no overlap`}\u001b[${39}m`} - two nunjucks tags, different pattern set of two, tight`,
  (t) => {
    const gathered = [];
    ct(`{%- if count > 1 -%}{% if count > 1 %}`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(
      gathered,
      [
        {
          type: "esp",
          start: 0,
          end: 20,
        },
        {
          type: "esp",
          start: 20,
          end: 38,
        },
      ],
      "07.01"
    );
    t.end();
  }
);

// heuristically detecting tails and again new heads
tap.test(
  `08 - ${`\u001b[${33}m${`no overlap`}\u001b[${39}m`} - different set, *|zzz|*`,
  (t) => {
    const gathered = [];
    ct(`*|zzz|**|yyy|*`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(
      gathered,
      [
        {
          type: "esp",
          start: 0,
          end: 7,
        },
        {
          type: "esp",
          start: 7,
          end: 14,
        },
      ],
      "08.01"
    );
    t.end();
  }
);

tap.test(
  `09 - ${`\u001b[${33}m${`no overlap`}\u001b[${39}m`} - error, two ESP tags joined, first one ends with heads instead of tails`,
  (t) => {
    const gathered = [];
    ct(`*|zzz*|*|yyy|*`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(
      gathered,
      [
        {
          type: "esp",
          start: 0,
          end: 7,
        },
        {
          type: "esp",
          start: 7,
          end: 14,
        },
      ],
      "09.01"
    );
    t.end();
  }
);

// 02. false positives
// -----------------------------------------------------------------------------

tap.test(
  `10 - ${`\u001b[${31}m${`false positives`}\u001b[${39}m`} - double percentage`,
  (t) => {
    const gathered = [];
    ct(`<table width="100%%">`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(
      gathered,
      [
        {
          type: "tag",
          tagName: "table",
          start: 0,
          end: 21,
          attribs: [
            {
              attribName: "width",
              attribNameStartsAt: 7,
              attribNameEndsAt: 12,
              attribOpeningQuoteAt: 13,
              attribClosingQuoteAt: 19,
              attribValueRaw: "100%%",
              attribValue: [
                {
                  type: "text",
                  start: 14,
                  end: 19,
                  value: "100%%",
                },
              ],
              attribValueStartsAt: 14,
              attribValueEndsAt: 19,
              attribStart: 7,
              attribEnd: 20,
            },
          ],
        },
      ],
      "10.01"
    );
    t.end();
  }
);

// 03. ESP tags in the attributes
// -----------------------------------------------------------------------------

tap.test(
  `11 - ${`\u001b[${36}m${`basic`}\u001b[${39}m`} - one Nunjucks tag goes in as attribute`,
  (t) => {
    const gathered = [];
    ct(`<td{% z %}>`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });

    t.match(
      gathered,
      [
        {
          type: "tag",
          start: 0,
          end: 11,
          value: `<td{% z %}>`,
          attribs: [
            {
              type: "esp",
              start: 3,
              end: 10,
              value: "{% z %}",
              head: "{%",
              tail: "%}",
              kind: null,
            },
          ],
        },
      ],
      "11.01"
    );
    t.end();
  }
);

tap.test(
  `12 - ${`\u001b[${36}m${`basic`}\u001b[${39}m`} - Nunjucks conditionals wrapping an attr`,
  (t) => {
    const gathered = [];
    ct(`<td{% x %} class="z"{% y %} id="z">`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });

    t.match(
      gathered,
      [
        {
          type: "tag",
          start: 0,
          end: 35,
          value: `<td{% x %} class="z"{% y %} id="z">`,
          attribs: [
            {
              type: "esp",
              start: 3,
              end: 10,
              value: "{% x %}",
              head: "{%",
              tail: "%}",
              kind: null,
            },
            {
              attribName: "class",
              attribNameRecognised: true,
              attribNameStartsAt: 11,
              attribNameEndsAt: 16,
              attribOpeningQuoteAt: 17,
              attribClosingQuoteAt: 19,
              attribValueRaw: "z",
              attribValue: [
                {
                  type: "text",
                  start: 18,
                  end: 19,
                  value: "z",
                },
              ],
              attribValueStartsAt: 18,
              attribValueEndsAt: 19,
              attribStart: 11,
              attribEnd: 20,
            },
            {
              type: "esp",
              start: 20,
              end: 27,
              value: "{% y %}",
              head: "{%",
              tail: "%}",
              kind: null,
            },
            {
              attribName: "id",
              attribNameRecognised: true,
              attribNameStartsAt: 28,
              attribNameEndsAt: 30,
              attribOpeningQuoteAt: 31,
              attribClosingQuoteAt: 33,
              attribValueRaw: "z",
              attribValue: [
                {
                  type: "text",
                  start: 32,
                  end: 33,
                  value: "z",
                },
              ],
              attribValueStartsAt: 32,
              attribValueEndsAt: 33,
              attribStart: 28,
              attribEnd: 34,
            },
          ],
        },
      ],
      "12.01"
    );
    t.end();
  }
);

tap.test(
  `13 - ${`\u001b[${36}m${`basic`}\u001b[${39}m`} - Nunjucks conditionals wrapping an attr`,
  (t) => {
    const gathered = [];
    ct(`<td{% if something %} class="z"{% endif %} id="y">`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });

    t.match(
      gathered,
      [
        {
          type: "tag",
          start: 0,
          end: 50,
          value: '<td{% if something %} class="z"{% endif %} id="y">',
          tagNameStartsAt: 1,
          tagNameEndsAt: 3,
          tagName: "td",
          recognised: true,
          closing: false,
          void: false,
          pureHTML: false,
          kind: null,
          attribs: [
            {
              type: "esp",
              start: 3,
              end: 21,
              value: "{% if something %}",
              head: "{%",
              tail: "%}",
              kind: null,
            },
            {
              attribName: "class",
              attribNameRecognised: true,
              attribNameStartsAt: 22,
              attribNameEndsAt: 27,
              attribOpeningQuoteAt: 28,
              attribClosingQuoteAt: 30,
              attribValueRaw: "z",
              attribValue: [
                {
                  type: "text",
                  start: 29,
                  end: 30,
                  value: "z",
                },
              ],
              attribValueStartsAt: 29,
              attribValueEndsAt: 30,
              attribStart: 22,
              attribEnd: 31,
            },
            {
              type: "esp",
              start: 31,
              end: 42,
              value: "{% endif %}",
              head: "{%",
              tail: "%}",
              kind: null,
            },
            {
              attribName: "id",
              attribNameRecognised: true,
              attribNameStartsAt: 43,
              attribNameEndsAt: 45,
              attribOpeningQuoteAt: 46,
              attribClosingQuoteAt: 48,
              attribValueRaw: "y",
              attribValue: [
                {
                  type: "text",
                  start: 47,
                  end: 48,
                  value: "y",
                },
              ],
              attribValueStartsAt: 47,
              attribValueEndsAt: 48,
              attribStart: 43,
              attribEnd: 49,
            },
          ],
        },
      ],
      "13.01"
    );
    t.end();
  }
);

// 04. ESP tags within attribute values
// -----------------------------------------------------------------------------

tap.test(
  `14 - ${`\u001b[${35}m${`ESP tags within attr values`}\u001b[${39}m`} - one ESP tag inside`,
  (t) => {
    const gathered = [];
    ct(`<a b="{% if something %}"><c>`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.same(
      gathered,
      [
        {
          type: "tag",
          start: 0,
          end: 26,
          value: '<a b="{% if something %}">',
          tagNameStartsAt: 1,
          tagNameEndsAt: 2,
          tagName: "a",
          recognised: true,
          closing: false,
          void: false,
          pureHTML: false, // <---- means there are ESP bits inside this tag
          kind: null,
          attribs: [
            {
              attribName: "b",
              attribNameRecognised: false,
              attribNameStartsAt: 3,
              attribNameEndsAt: 4,
              attribOpeningQuoteAt: 5,
              attribClosingQuoteAt: 24,
              attribValueRaw: "{% if something %}",
              attribValue: [
                {
                  type: "esp",
                  start: 6,
                  end: 24,
                  value: "{% if something %}",
                  head: "{%",
                  tail: "%}",
                  kind: null,
                },
              ],
              attribValueStartsAt: 6,
              attribValueEndsAt: 24,
              attribStart: 3,
              attribEnd: 25,
            },
          ],
        },
        {
          type: "tag",
          start: 26,
          end: 29,
          value: "<c>",
          tagNameStartsAt: 27,
          tagNameEndsAt: 28,
          tagName: "c",
          recognised: false,
          closing: false,
          void: false,
          pureHTML: true,
          kind: null,
          attribs: [],
        },
      ],
      "14.01"
    );
    t.end();
  }
);

tap.test(
  `15 - ${`\u001b[${35}m${`ESP tags within attr values`}\u001b[${39}m`} - one ESP tag + text`,
  (t) => {
    const gathered = [];
    ct(`<a b="{{ c }}d">`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(
      gathered,
      [
        {
          type: "tag",
          start: 0,
          end: 16,
          value: `<a b="{{ c }}d">`,
          attribs: [
            {
              attribName: "b",
              attribValueRaw: `{{ c }}d`,
              attribValue: [
                {
                  type: "esp",
                  start: 6,
                  end: 13,
                  value: "{{ c }}",
                  head: "{{",
                  tail: "}}",
                },
                {
                  type: "text",
                  start: 13,
                  end: 14,
                  value: "d",
                },
              ],
              attribValueStartsAt: 6,
              attribValueEndsAt: 14,
              attribStart: 3,
              attribEnd: 15,
            },
          ],
        },
      ],
      "15.01"
    );
    t.end();
  }
);

tap.test(
  `16 - ${`\u001b[${35}m${`ESP tags within attr values`}\u001b[${39}m`} - one ESP tag + text`,
  (t) => {
    const gathered = [];
    ct(`<img src="{{ root }}z" width="9"/>`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(
      gathered,
      [
        {
          type: "tag",
          start: 0,
          end: 34,
          value: `<img src="{{ root }}z" width="9"/>`,
          tagNameStartsAt: 1,
          tagNameEndsAt: 4,
          tagName: "img",
          recognised: true,
          closing: false,
          void: true,
          pureHTML: false,
          kind: null,
          attribs: [
            {
              attribName: "src",
              attribNameRecognised: true,
              attribNameStartsAt: 5,
              attribNameEndsAt: 8,
              attribOpeningQuoteAt: 9,
              attribClosingQuoteAt: 21,
              attribValueRaw: `{{ root }}z`,
              attribValue: [
                {
                  type: "esp",
                  start: 10,
                  end: 20,
                  value: "{{ root }}",
                  head: "{{",
                  tail: "}}",
                },
                {
                  type: "text",
                  start: 20,
                  end: 21,
                  value: "z",
                },
              ],
              attribValueStartsAt: 10,
              attribValueEndsAt: 21,
              attribStart: 5,
              attribEnd: 22,
            },
            // then,
            // continues recording attributes as normal:
            {
              attribName: "width",
              attribNameRecognised: true,
              attribNameStartsAt: 23,
              attribNameEndsAt: 28,
              attribOpeningQuoteAt: 29,
              attribClosingQuoteAt: 31,
              attribValueRaw: "9",
              attribValue: [
                {
                  type: "text",
                  start: 30,
                  end: 31,
                  value: "9",
                },
              ],
              attribValueStartsAt: 30,
              attribValueEndsAt: 31,
              attribStart: 23,
              attribEnd: 32,
            },
          ],
        },
      ],
      "16.01"
    );
    t.end();
  }
);

tap.test(
  `17 - ${`\u001b[${35}m${`ESP tags within attr values`}\u001b[${39}m`} - esp-text-esp-text`,
  (t) => {
    const gathered = [];
    ct(`<a b="{% x %}1{% y %}2">`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(
      gathered,
      [
        {
          type: "tag",
          start: 0,
          end: 24,
          value: '<a b="{% x %}1{% y %}2">',
          tagNameStartsAt: 1,
          tagNameEndsAt: 2,
          tagName: "a",
          recognised: true,
          closing: false,
          void: false,
          pureHTML: false,
          kind: null,
          attribs: [
            {
              attribName: "b",
              attribNameRecognised: false,
              attribNameStartsAt: 3,
              attribNameEndsAt: 4,
              attribOpeningQuoteAt: 5,
              attribClosingQuoteAt: 22,
              attribValueRaw: "{% x %}1{% y %}2",
              attribValue: [
                {
                  type: "esp",
                  start: 6,
                  end: 13,
                  value: "{% x %}",
                  head: "{%",
                  tail: "%}",
                },
                {
                  type: "text",
                  start: 13,
                  end: 14,
                  value: "1",
                },
                {
                  type: "esp",
                  start: 14,
                  end: 21,
                  value: "{% y %}",
                  head: "{%",
                  tail: "%}",
                },
                {
                  type: "text",
                  start: 21,
                  end: 22,
                  value: "2",
                },
              ],
              attribValueStartsAt: 6,
              attribValueEndsAt: 22,
              attribStart: 3,
              attribEnd: 23,
            },
          ],
        },
      ],
      "17.01"
    );
    t.end();
  }
);

tap.test(
  `18 - ${`\u001b[${35}m${`ESP tags within attr values`}\u001b[${39}m`} - chain of text and ESP tag`,
  (t) => {
    const gathered = [];
    ct(`<a z="{% if something %}1{% else %}2{% endif %}" y="x"/>`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(
      gathered,
      [
        {
          type: "tag",
          start: 0,
          end: 56,
          value: `<a z="{% if something %}1{% else %}2{% endif %}" y="x"/>`,
          attribs: [
            {
              attribName: "z",
              attribNameRecognised: false,
              attribNameStartsAt: 3,
              attribNameEndsAt: 4,
              attribOpeningQuoteAt: 5,
              attribClosingQuoteAt: 47,
              attribValueRaw: `{% if something %}1{% else %}2{% endif %}`,
              attribValue: [
                {
                  type: "esp",
                  start: 6,
                  end: 24,
                  value: "{% if something %}",
                  head: "{%",
                  tail: "%}",
                },
                {
                  type: "text",
                  start: 24,
                  end: 25,
                  value: "1",
                },
                {
                  type: "esp",
                  start: 25,
                  end: 35,
                  value: "{% else %}",
                  head: "{%",
                  tail: "%}",
                },
                {
                  type: "text",
                  start: 35,
                  end: 36,
                  value: "2",
                },
                {
                  type: "esp",
                  start: 36,
                  end: 47,
                  value: "{% endif %}",
                  head: "{%",
                  tail: "%}",
                },
              ],
              attribValueStartsAt: 6,
              attribValueEndsAt: 47,
              attribStart: 3,
              attribEnd: 48,
            },
            {
              attribName: "y",
              attribNameRecognised: false,
              attribNameStartsAt: 49,
              attribNameEndsAt: 50,
              attribOpeningQuoteAt: 51,
              attribClosingQuoteAt: 53,
              attribValueRaw: "x",
              attribValue: [
                {
                  type: "text",
                  start: 52,
                  end: 53,
                  value: "x",
                },
              ],
              attribValueStartsAt: 52,
              attribValueEndsAt: 53,
              attribStart: 49,
              attribEnd: 54,
            },
          ],
        },
      ],
      "18.01"
    );
    t.end();
  }
);

tap.test(
  `19 - ${`\u001b[${35}m${`ESP tags within attr values`}\u001b[${39}m`} - otherwise a sensitive characters inside ESP tag`,
  (t) => {
    const gathered = [];
    ct(`<a>{% if a<b and c>d '"'''' ><>< %}<b>`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(
      gathered,
      [
        {
          type: "tag",
          start: 0,
          end: 3,
        },
        {
          type: "esp",
          start: 3,
          end: 35,
          tail: "%}",
        },
        {
          type: "tag",
          start: 35,
          end: 38,
        },
      ],
      "19.01"
    );
    t.end();
  }
);

tap.test(
  `20 - ${`\u001b[${35}m${`ESP tags within attr values`}\u001b[${39}m`} - The Killer Triplet, mini extract`,
  (t) => {
    const gathered = [];
    ct(`<a b="c{{ z("'") }}"><b>`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(
      gathered,
      [
        {
          type: "tag",
          start: 0,
          end: 21,
        },
        {
          type: "tag",
          start: 21,
          end: 24,
        },
      ],
      "20.01"
    );
    t.end();
  }
);

tap.test(
  `21 - ${`\u001b[${35}m${`ESP tags within attr values`}\u001b[${39}m`} - The Killer Triplet, midi extract`,
  (t) => {
    const gathered = [];
    ct(`<a href="https://z.y/?a=1&q={{ r("'", "%27") }}"><b>`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(
      gathered,
      [
        {
          type: "tag",
          start: 0,
          end: 49,
        },
        {
          type: "tag",
          start: 49,
          end: 52,
        },
      ],
      "21.01"
    );
    t.end();
  }
);

tap.test(
  `22 - ${`\u001b[${35}m${`ESP tags within attr values`}\u001b[${39}m`} - The Killer Triplet, maxi extract`,
  (t) => {
    const gathered = [];
    ct(
      `<a href="https://z.y/?a=1&q={{ r(" ", "+") | r("'", "%27") | r("&", "%26") | r("(", "%28") | r(")", "%29") }}"><b>`,
      {
        tagCb: (obj) => {
          gathered.push(obj);
        },
      }
    );
    t.match(
      gathered,
      [
        {
          type: "tag",
          start: 0,
          end: 111,
        },
        {
          type: "tag",
          start: 111,
          end: 114,
        },
      ],
      "22.01"
    );
    t.end();
  }
);

// 05. broken
// -----------------------------------------------------------------------------

tap.test(
  `23 - ${`\u001b[${35}m${`broken ESP tags`}\u001b[${39}m`} - tails missing a character - mini`,
  (t) => {
    const gathered = [];
    ct(`<a b="{% x }">`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.same(
      gathered,
      [
        {
          type: "tag",
          start: 0,
          end: 14,
          value: '<a b="{% x }">',
          tagNameStartsAt: 1,
          tagNameEndsAt: 2,
          tagName: "a",
          recognised: true,
          closing: false,
          void: false,
          pureHTML: false,
          kind: null,
          attribs: [
            {
              attribName: "b",
              attribNameRecognised: false,
              attribNameStartsAt: 3,
              attribNameEndsAt: 4,
              attribOpeningQuoteAt: 5,
              attribClosingQuoteAt: 12,
              attribValueRaw: "{% x }",
              attribValue: [
                {
                  type: "esp",
                  start: 6,
                  end: 12,
                  value: "{% x }",
                  kind: null,
                  head: "{%",
                  tail: "%}",
                },
              ],
              attribValueStartsAt: 6,
              attribValueEndsAt: 12,
              attribStart: 3,
              attribEnd: 13,
            },
          ],
        },
      ],
      "23.01"
    );
    t.end();
  }
);

tap.test(
  `24 - ${`\u001b[${35}m${`broken ESP tags`}\u001b[${39}m`} - tails missing a character - midi`,
  (t) => {
    const gathered = [];
    ct(`<a b="{% x }1{% y %}2">`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(
      gathered,
      [
        {
          type: "tag",
          start: 0,
          end: 23,
          value: '<a b="{% x }1{% y %}2">',
          tagNameStartsAt: 1,
          tagNameEndsAt: 2,
          tagName: "a",
          recognised: true,
          closing: false,
          void: false,
          pureHTML: false,
          kind: null,
          attribs: [
            {
              attribName: "b",
              attribNameRecognised: false,
              attribNameStartsAt: 3,
              attribNameEndsAt: 4,
              attribOpeningQuoteAt: 5,
              attribClosingQuoteAt: 21,
              attribValueRaw: "{% x }1{% y %}2",
              attribValue: [
                {
                  type: "esp",
                  start: 6,
                  end: 12,
                  value: "{% x }",
                  kind: null,
                  head: "{%",
                  tail: "}", // <----- error in Nunjucks/Jinja
                },
                {
                  type: "text",
                  start: 12,
                  end: 13,
                  value: "1",
                },
                {
                  type: "esp",
                  start: 13,
                  end: 20,
                  value: "{% y %}",
                  kind: null,
                  head: "{%",
                  tail: "%}",
                },
                {
                  type: "text",
                  start: 20,
                  end: 21,
                  value: "2",
                },
              ],
              attribValueStartsAt: 6,
              attribValueEndsAt: 21,
              attribStart: 3,
              attribEnd: 22,
            },
          ],
        },
      ],
      "24.01"
    );
    t.end();
  }
);

tap.todo(
  `05.03 - ${`\u001b[${35}m${`broken ESP tags`}\u001b[${39}m`} - tails missing completely - new heads follow`,
  (t) => {
    const gathered = [];
    ct(`<a b="{% x {% y %}2">`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(gathered, [], "05.03");
    t.end();
  }
);

tap.todo(
  `05.04 - ${`\u001b[${35}m${`broken ESP tags`}\u001b[${39}m`} - tails missing completely - attr end follows`,
  (t) => {
    const gathered = [];
    ct(`<a b="{% x">`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(gathered, [], "05.04");
    t.end();
  }
);

tap.todo(
  `05.05 - ${`\u001b[${35}m${`broken ESP tags`}\u001b[${39}m`} - heads missing character`,
  (t) => {
    const gathered = [];
    ct(`<a b="{ x %}1{% y %}2">`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(gathered, [], "05.05");
    t.end();
  }
);

tap.todo(
  `05.06 - ${`\u001b[${35}m${`broken ESP tags`}\u001b[${39}m`} - heads missing completely`,
  (t) => {
    const gathered = [];
    ct(`<a b="x %}1{% y %}2">`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(gathered, [], "05.06");
    t.end();
  }
);

tap.todo(
  `05.07 - ${`\u001b[${35}m${`broken ESP tags`}\u001b[${39}m`} - Venn`,
  (t) => {
    const gathered = [];
    ct(`<a b="{% x"><b c="y %}">`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(gathered, [], "05.07");
    t.end();
  }
);

tap.todo(
  `05.08 - ${`\u001b[${35}m${`broken ESP tags`}\u001b[${39}m`} - two heads, one tail only`,
  (t) => {
    const gathered = [];
    ct(`<a b="{% {% %}">`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(gathered, [], "05.08");
    t.end();
  }
);

tap.todo(
  `05.09 - ${`\u001b[${35}m${`broken ESP tags`}\u001b[${39}m`} - two tails`,
  (t) => {
    const gathered = [];
    ct(`<a b="%} %}">`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(gathered, [], "05.09");
    t.end();
  }
);

// -----------------------------------------------------------------------------

// Java:
// <%@ ... %>
// <c:forEach ... > (no slash)
// <jsp:useBean ... />
// <c:set ... />
