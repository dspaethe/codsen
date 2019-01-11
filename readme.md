# 📦 Codsen 📦

    A lerna monorepo for our 76 npm libraries

## 💡 Table of Contents

- [Flagship Libraries](#markdown-header-flagship-libraries)
- [Range Libraries](#markdown-header-range-libraries)
- [String Processing Libraries](#markdown-header-string-processing-libraries)
- [Object Processing Libraries](#markdown-header-object-processing-libraries)
- [CLI Apps](#markdown-header-cli-apps)
- [Miscellaneous Libraries](#markdown-header-miscellaneous-libraries)
- [Licence](#markdown-header-licence)

## 🚢 Flagship Libraries

These libraries are the largest and most complex of them all. Their web apps are driven by UMD builds, usually consumed straight from npm, via the [unpkg CDN](https://unpkg.com).

| Library's name | Purpose |Web app | Link on npm | Source code in monorepo |
| -------------- | ------- | ------- | ----------- | ----------------------- |
| `email-comb` | Remove unused CSS from email templates | [emailcomb.com](https://emailcomb.com) | [![email-comb on npm](https://img.shields.io/npm/v/email-comb.svg?style=flat-square)](https://www.npmjs.com/package/email-comb) | [packages/email-comb](https://bitbucket.org/codsen/codsen/src/master/packages/email-comb/) |
| `html-crush` | Minifies HTML/CSS: valid or broken, pure or mixed with other languages | [htmlcrush.com](https://htmlcrush.com) | [![html-crush on npm](https://img.shields.io/npm/v/html-crush.svg?style=flat-square)](https://www.npmjs.com/package/html-crush) | [packages/html-crush](https://bitbucket.org/codsen/codsen/src/master/packages/html-crush/) |

There are quite a few small libraries, so let's group them by a common purpose.

## 🎯 10 Range Libraries

> _Range_ means an array of two text character index numbers, "from" and "to" (plus optional third element, string, which marks "what to add").

For example, "from the third character to the fourth character" could be marked with array `[3, 4]`.

There can be a **third element** in a range array, what to add instead of the range. For example, `[10, 12, "add this"]`. When there is no third element in the range array, like `[10, 12]`, that would mean "delete from index 10 to index 12". Empty third element is the same as if it was missing.

For example, a range `[1, 3]` in a string "`abcdef`" would mean `bc` because "b" is at index number 1 (counting starts at zero) and 3rd is "d". The beginning of the range is inclusive, and the ending is not. Hence, the result "bc".

Another example, if you want to replace "`<placeholder>`" with "John" in a string "`Hi <placeholder>!`", the range would be `[3, 16, "John"]`.

Now, if you have **many ranges**, you put them into an array. You get _an array of ranges_. Majority of `range-` libraries process such arrays of ranges: sort bunch of ranges, fix overlapping ranges and so on.

Practically, we need ranges when we process strings and want to "keep a note" of what needs to be deleted or replaced later. The idea is, instead of processing the string many times:

    "find out what needs to be done with a string" ->
    "mutate the string" ->
    "find out what more needs to be done with a string" ->
    "mutate the mutated string" ->
    ... and so on,

We only "compile a to-do list" — [push the ranges](https://bitbucket.org/codsen/codsen/src/master/packages/ranges-push/) into an array. When we finish gathering them, we **do all the actions in one go**.

Performing string processing only once is better for both **performance** reasons (fewer actions = faster) and for **consistency** (in-between taking the notes, we operate on the original string instead of its previously mutated version).

If you think, strings are immutable in JavaScript — each change of a string means rewriting it in a computer memory. Let's say you want to add a letter and delete the same letter in a string which consists of a thousand characters. Both actions cancel each other out. However, if you do the string edits sequentially, you write a thousand characters to memory two times, after every amend. On the other hand, if you use _ranges_ approach, you'd only [create a new record](https://bitbucket.org/codsen/codsen/src/master/packages/ranges-push/) in the computer memory, housing a couple of arrays, each consisting of couple index numbers. When you [process the ranges](https://bitbucket.org/codsen/codsen/src/master/packages/ranges-apply), they would cancel each other out, and we would not write anything to the memory at all. Now, if you scale this — longer strings, more amends, and done many times — you'll soon feel the difference in performance.

| Library's name | Purpose | Link on npm | Source code in monorepo |
| -------------- | ------- | ----------- | ----------------------- |
| `ranges-push` | Manage the array of slices referencing the index ranges within the string | [![ranges-push on npm](https://img.shields.io/npm/v/ranges-push.svg?style=flat-square)](https://www.npmjs.com/package/ranges-push) | [packages/ranges-push](https://bitbucket.org/codsen/codsen/src/master/packages/ranges-push/) |
| `ranges-apply` | Take an array of string slice ranges, delete/replace the string according to them | [![ranges-apply on npm](https://img.shields.io/npm/v/ranges-apply.svg?style=flat-square)](https://www.npmjs.com/package/ranges-apply) | [packages/ranges-apply](https://bitbucket.org/codsen/codsen/src/master/packages/ranges-apply/) |
| `ranges-merge` | Merge and sort arrays which mean string slice ranges | [![ranges-merge on npm](https://img.shields.io/npm/v/ranges-merge.svg?style=flat-square)](https://www.npmjs.com/package/ranges-merge) | [packages/ranges-merge](https://bitbucket.org/codsen/codsen/src/master/packages/ranges-merge/) |
| `ranges-sort` | Sort natural number index ranges [ [5, 6], [1, 3] ] => [ [1, 3], [5, 6] ] | [![ranges-sort on npm](https://img.shields.io/npm/v/ranges-sort.svg?style=flat-square)](https://www.npmjs.com/package/ranges-sort) | [packages/ranges-sort](https://bitbucket.org/codsen/codsen/src/master/packages/ranges-sort/) |
| `string-range-expander` | Expands string index ranges within whitespace boundaries until letters are met | [![string-range-expander on npm](https://img.shields.io/npm/v/string-range-expander.svg?style=flat-square)](https://www.npmjs.com/package/string-range-expander) | [packages/string-range-expander](https://bitbucket.org/codsen/codsen/src/master/packages/string-range-expander/) |
| `ranges-crop` | Crop array of ranges when they go beyond the reference string's length | [![ranges-crop on npm](https://img.shields.io/npm/v/ranges-crop.svg?style=flat-square)](https://www.npmjs.com/package/ranges-crop) | [packages/ranges-crop](https://bitbucket.org/codsen/codsen/src/master/packages/ranges-crop/) |
| `ranges-ent-decode` | Decode HTML entities recursively, get string index ranges of what needs to be replaced where | [![ranges-ent-decode on npm](https://img.shields.io/npm/v/ranges-ent-decode.svg?style=flat-square)](https://www.npmjs.com/package/ranges-ent-decode) | [packages/ranges-ent-decode](https://bitbucket.org/codsen/codsen/src/master/packages/ranges-ent-decode/) |
| `ranges-invert` | Invert string index ranges [ [1, 3] ] => [ [0, 1], [3, ...] ] | [![ranges-invert on npm](https://img.shields.io/npm/v/ranges-invert.svg?style=flat-square)](https://www.npmjs.com/package/ranges-invert) | [packages/ranges-invert](https://bitbucket.org/codsen/codsen/src/master/packages/ranges-invert/) |
| `ranges-is-index-within` | Efficiently checks if index is within any of the given ranges | [![ranges-is-index-within on npm](https://img.shields.io/npm/v/ranges-is-index-within.svg?style=flat-square)](https://www.npmjs.com/package/ranges-is-index-within) | [packages/ranges-is-index-within](https://bitbucket.org/codsen/codsen/src/master/packages/ranges-is-index-within/) |
| `ranges-regex` | Perform a regex search on string and get a ranges array of findings (or null) | [![ranges-regex on npm](https://img.shields.io/npm/v/ranges-regex.svg?style=flat-square)](https://www.npmjs.com/package/ranges-regex) | [packages/ranges-regex](https://bitbucket.org/codsen/codsen/src/master/packages/ranges-regex/) |

## 🎻 25 String Processing Libraries

They process string inputs, which might be text, code or something else as long as it is of a string type.

| Library's name | Purpose | Link on npm | Source code in monorepo |
| -------------- | ------- | ----------- | ----------------------- |
| `string-strip-html` | Strips HTML tags from strings. Detects legit unencoded brackets. | [![string-strip-html on npm](https://img.shields.io/npm/v/string-strip-html.svg?style=flat-square)](https://www.npmjs.com/package/string-strip-html) | [packages/string-strip-html](https://bitbucket.org/codsen/codsen/src/master/packages/string-strip-html/) |
| `easy-replace` | Replace strings with optional lookarounds, but without regexes | [![easy-replace on npm](https://img.shields.io/npm/v/easy-replace.svg?style=flat-square)](https://www.npmjs.com/package/easy-replace) | [packages/easy-replace](https://bitbucket.org/codsen/codsen/src/master/packages/easy-replace/) |
| `str-indexes-of-plus` | Search for a string in another string. Get array of indexes. Full Unicode support. | [![str-indexes-of-plus on npm](https://img.shields.io/npm/v/str-indexes-of-plus.svg?style=flat-square)](https://www.npmjs.com/package/str-indexes-of-plus) | [packages/str-indexes-of-plus](https://bitbucket.org/codsen/codsen/src/master/packages/str-indexes-of-plus/) |
| `bitbucket-slug` | Generate BitBucket readme header anchor slug URLs. Unofficial, covers whole ASCII and a bit beyond. | [![bitbucket-slug on npm](https://img.shields.io/npm/v/bitbucket-slug.svg?style=flat-square)](https://www.npmjs.com/package/bitbucket-slug) | [packages/bitbucket-slug](https://bitbucket.org/codsen/codsen/src/master/packages/bitbucket-slug/) |
| `detect-is-it-html-or-xhtml` | Answers, is the string input string more an HTML or XHTML (or neither) | [![detect-is-it-html-or-xhtml on npm](https://img.shields.io/npm/v/detect-is-it-html-or-xhtml.svg?style=flat-square)](https://www.npmjs.com/package/detect-is-it-html-or-xhtml) | [packages/detect-is-it-html-or-xhtml](https://bitbucket.org/codsen/codsen/src/master/packages/detect-is-it-html-or-xhtml/) |
| `email-all-chars-within-ascii` | Scans all characters within a string and checks are they within ASCII range | [![email-all-chars-within-ascii on npm](https://img.shields.io/npm/v/email-all-chars-within-ascii.svg?style=flat-square)](https://www.npmjs.com/package/email-all-chars-within-ascii) | [packages/email-all-chars-within-ascii](https://bitbucket.org/codsen/codsen/src/master/packages/email-all-chars-within-ascii/) |
| `html-table-patcher` | Wraps any content between TR/TD tags in additional rows/columns to appear in browser correctly | [![html-table-patcher on npm](https://img.shields.io/npm/v/html-table-patcher.svg?style=flat-square)](https://www.npmjs.com/package/html-table-patcher) | [packages/html-table-patcher](https://bitbucket.org/codsen/codsen/src/master/packages/html-table-patcher/) |
| `js-row-num` | Update all row numbers in all console.logs in JS code | [![js-row-num on npm](https://img.shields.io/npm/v/js-row-num.svg?style=flat-square)](https://www.npmjs.com/package/js-row-num) | [packages/js-row-num](https://bitbucket.org/codsen/codsen/src/master/packages/js-row-num/) |
| `csv-sort` | Sorts double-entry bookkeeping CSV coming from internet banking | [![csv-sort on npm](https://img.shields.io/npm/v/csv-sort.svg?style=flat-square)](https://www.npmjs.com/package/csv-sort) | [packages/csv-sort](https://bitbucket.org/codsen/codsen/src/master/packages/csv-sort/) |
| `csv-sort-cli` | Command line app to sort double-entry CSVs coming from internet banking statements | [![csv-sort-cli on npm](https://img.shields.io/npm/v/csv-sort-cli.svg?style=flat-square)](https://www.npmjs.com/package/csv-sort-cli) | [packages/csv-sort-cli](https://bitbucket.org/codsen/codsen/src/master/packages/csv-sort-cli/) |
| `csv-split-easy` | Splits the CSV string into array of arrays, each representing a row of columns | [![csv-split-easy on npm](https://img.shields.io/npm/v/csv-split-easy.svg?style=flat-square)](https://www.npmjs.com/package/csv-split-easy) | [packages/csv-split-easy](https://bitbucket.org/codsen/codsen/src/master/packages/csv-split-easy/) |
| `string-character-is-astral-surrogate` | Tells, is given character a part of astral character, specifically, a high and low surrogate | [![string-character-is-astral-surrogate on npm](https://img.shields.io/npm/v/string-character-is-astral-surrogate.svg?style=flat-square)](https://www.npmjs.com/package/string-character-is-astral-surrogate) | [packages/string-character-is-astral-surrogate](https://bitbucket.org/codsen/codsen/src/master/packages/string-character-is-astral-surrogate/) |
| `string-collapse-leading-whitespace` | Collapse the leading and trailing whitespace of a string | [![string-collapse-leading-whitespace on npm](https://img.shields.io/npm/v/string-collapse-leading-whitespace.svg?style=flat-square)](https://www.npmjs.com/package/string-collapse-leading-whitespace) | [packages/string-collapse-leading-whitespace](https://bitbucket.org/codsen/codsen/src/master/packages/string-collapse-leading-whitespace/) |
| `string-collapse-white-space` | Efficient collapsing of white space with optional outer- and/or line-trimming and HTML tag recognition | [![string-collapse-white-space on npm](https://img.shields.io/npm/v/string-collapse-white-space.svg?style=flat-square)](https://www.npmjs.com/package/string-collapse-white-space) | [packages/string-collapse-white-space](https://bitbucket.org/codsen/codsen/src/master/packages/string-collapse-white-space/) |
| `string-convert-indexes` | Convert string character indexes from JS native index-based to Unicode character-count-based and backwards. | [![string-convert-indexes on npm](https://img.shields.io/npm/v/string-convert-indexes.svg?style=flat-square)](https://www.npmjs.com/package/string-convert-indexes) | [packages/string-convert-indexes](https://bitbucket.org/codsen/codsen/src/master/packages/string-convert-indexes/) |
| `string-extract-class-names` | Extract class (or id) name from a string | [![string-extract-class-names on npm](https://img.shields.io/npm/v/string-extract-class-names.svg?style=flat-square)](https://www.npmjs.com/package/string-extract-class-names) | [packages/string-extract-class-names](https://bitbucket.org/codsen/codsen/src/master/packages/string-extract-class-names/) |
| `string-find-heads-tails` | Search for string pairs. A special case of string search algorithm. | [![string-find-heads-tails on npm](https://img.shields.io/npm/v/string-find-heads-tails.svg?style=flat-square)](https://www.npmjs.com/package/string-find-heads-tails) | [packages/string-find-heads-tails](https://bitbucket.org/codsen/codsen/src/master/packages/string-find-heads-tails/) |
| `string-fix-broken-named-entities` | Finds and fixes common and not so common broken named HTML entities, returns ranges array of fixes | [![string-fix-broken-named-entities on npm](https://img.shields.io/npm/v/string-fix-broken-named-entities.svg?style=flat-square)](https://www.npmjs.com/package/string-fix-broken-named-entities) | [packages/string-fix-broken-named-entities](https://bitbucket.org/codsen/codsen/src/master/packages/string-fix-broken-named-entities/) |
| `string-match-left-right` | Do substrings match what's on the left or right of a given index? | [![string-match-left-right on npm](https://img.shields.io/npm/v/string-match-left-right.svg?style=flat-square)](https://www.npmjs.com/package/string-match-left-right) | [packages/string-match-left-right](https://bitbucket.org/codsen/codsen/src/master/packages/string-match-left-right/) |
| `string-overlap-one-on-another` | Lay one string on top of another, with an optional offset | [![string-overlap-one-on-another on npm](https://img.shields.io/npm/v/string-overlap-one-on-another.svg?style=flat-square)](https://www.npmjs.com/package/string-overlap-one-on-another) | [packages/string-overlap-one-on-another](https://bitbucket.org/codsen/codsen/src/master/packages/string-overlap-one-on-another/) |
| `string-remove-duplicate-heads-tails` | Detect and (recursively) remove head and tail wrappings around the input string | [![string-remove-duplicate-heads-tails on npm](https://img.shields.io/npm/v/string-remove-duplicate-heads-tails.svg?style=flat-square)](https://www.npmjs.com/package/string-remove-duplicate-heads-tails) | [packages/string-remove-duplicate-heads-tails](https://bitbucket.org/codsen/codsen/src/master/packages/string-remove-duplicate-heads-tails/) |
| `string-remove-thousand-separators` | Detects and removes thousand separators (dot/comma/quote/space) from string-type digits | [![string-remove-thousand-separators on npm](https://img.shields.io/npm/v/string-remove-thousand-separators.svg?style=flat-square)](https://www.npmjs.com/package/string-remove-thousand-separators) | [packages/string-remove-thousand-separators](https://bitbucket.org/codsen/codsen/src/master/packages/string-remove-thousand-separators/) |
| `string-split-by-whitespace` | Split string into array by chunks of whitespace | [![string-split-by-whitespace on npm](https://img.shields.io/npm/v/string-split-by-whitespace.svg?style=flat-square)](https://www.npmjs.com/package/string-split-by-whitespace) | [packages/string-split-by-whitespace](https://bitbucket.org/codsen/codsen/src/master/packages/string-split-by-whitespace/) |
| `string-trim-spaces-only` | Like `String.trim()` but trims only spaces | [![string-trim-spaces-only on npm](https://img.shields.io/npm/v/string-trim-spaces-only.svg?style=flat-square)](https://www.npmjs.com/package/string-trim-spaces-only) | [packages/string-trim-spaces-only](https://bitbucket.org/codsen/codsen/src/master/packages/string-trim-spaces-only/) |
| `string-unfancy` | Replace all fancy dashes, quotes etc with their simpler equivalents | [![string-unfancy on npm](https://img.shields.io/npm/v/string-unfancy.svg?style=flat-square)](https://www.npmjs.com/package/string-unfancy) | [packages/string-unfancy](https://bitbucket.org/codsen/codsen/src/master/packages/string-unfancy/) |

## 🔮 20 Object Processing Libraries

When we say "object" we mean _a plain object_ in JavaScript, for example, `{ name: "Bob" }`. Usually, plain objects come from JSON files, and often they are deeply nested. The following libraries help us to traverse them, set and delete keys and compare objects.

"`ast-`" in the library's name below just emphasises that it really works on nested objects (so-called Abstract Syntax Trees that come from parsed things).

| Library's name | Purpose | Link on npm | Source code in monorepo |
| -------------- | ------- | ----------- | ----------------------- |
| `ast-monkey` | Utility library for ops on parsed HTML (AST's) or anything nested (plain objects within arrays within plain objects) | [![ast-monkey on npm](https://img.shields.io/npm/v/ast-monkey.svg?style=flat-square)](https://www.npmjs.com/package/ast-monkey) | [packages/ast-monkey](https://bitbucket.org/codsen/codsen/src/master/packages/ast-monkey/) |
| `ast-monkey-traverse` | Utility library to traverse parsed HTML (AST's) or anything nested (plain objects within arrays within plain objects) | [![ast-monkey-traverse on npm](https://img.shields.io/npm/v/ast-monkey-traverse.svg?style=flat-square)](https://www.npmjs.com/package/ast-monkey-traverse) | [packages/ast-monkey-traverse](https://bitbucket.org/codsen/codsen/src/master/packages/ast-monkey-traverse/) |
| `json-comb-core` | The inner core of json-comb | [![json-comb-core on npm](https://img.shields.io/npm/v/json-comb-core.svg?style=flat-square)](https://www.npmjs.com/package/json-comb-core) | [packages/json-comb-core](https://bitbucket.org/codsen/codsen/src/master/packages/json-comb-core/) |
| `json-variables` | Preprocessor for JSON to allow keys referencing keys | [![json-variables on npm](https://img.shields.io/npm/v/json-variables.svg?style=flat-square)](https://www.npmjs.com/package/json-variables) | [packages/json-variables](https://bitbucket.org/codsen/codsen/src/master/packages/json-variables/) |
| `object-merge-advanced` | Recursive, deep merge of anything (objects, arrays, strings or nested thereof), which weighs contents by type hierarchy to ensure the maximum content is retained | [![object-merge-advanced on npm](https://img.shields.io/npm/v/object-merge-advanced.svg?style=flat-square)](https://www.npmjs.com/package/object-merge-advanced) | [packages/object-merge-advanced](https://bitbucket.org/codsen/codsen/src/master/packages/object-merge-advanced/) |
| `ast-compare` | Compare anything: AST, objects, arrays, strings and nested thereof | [![ast-compare on npm](https://img.shields.io/npm/v/ast-compare.svg?style=flat-square)](https://www.npmjs.com/package/ast-compare) | [packages/ast-compare](https://bitbucket.org/codsen/codsen/src/master/packages/ast-compare/) |
| `ast-contains-only-empty-space` | Returns Boolean depending if passed AST contain only empty space | [![ast-contains-only-empty-space on npm](https://img.shields.io/npm/v/ast-contains-only-empty-space.svg?style=flat-square)](https://www.npmjs.com/package/ast-contains-only-empty-space) | [packages/ast-contains-only-empty-space](https://bitbucket.org/codsen/codsen/src/master/packages/ast-contains-only-empty-space/) |
| `ast-delete-object` | Delete all plain objects that contain a certain key/value pair | [![ast-delete-object on npm](https://img.shields.io/npm/v/ast-delete-object.svg?style=flat-square)](https://www.npmjs.com/package/ast-delete-object) | [packages/ast-delete-object](https://bitbucket.org/codsen/codsen/src/master/packages/ast-delete-object/) |
| `ast-get-object` | Getter/setter for nested parsed HTML AST's, querying objects by key/value pairs | [![ast-get-object on npm](https://img.shields.io/npm/v/ast-get-object.svg?style=flat-square)](https://www.npmjs.com/package/ast-get-object) | [packages/ast-get-object](https://bitbucket.org/codsen/codsen/src/master/packages/ast-get-object/) |
| `ast-get-values-by-key` | Read or edit parsed HTML (or AST in general) | [![ast-get-values-by-key on npm](https://img.shields.io/npm/v/ast-get-values-by-key.svg?style=flat-square)](https://www.npmjs.com/package/ast-get-values-by-key) | [packages/ast-get-values-by-key](https://bitbucket.org/codsen/codsen/src/master/packages/ast-get-values-by-key/) |
| `ast-is-empty` | Find out, is nested array/object/string/AST tree is empty | [![ast-is-empty on npm](https://img.shields.io/npm/v/ast-is-empty.svg?style=flat-square)](https://www.npmjs.com/package/ast-is-empty) | [packages/ast-is-empty](https://bitbucket.org/codsen/codsen/src/master/packages/ast-is-empty/) |
| `ast-loose-compare` | Compare anything: AST, objects, arrays and strings | [![ast-loose-compare on npm](https://img.shields.io/npm/v/ast-loose-compare.svg?style=flat-square)](https://www.npmjs.com/package/ast-loose-compare) | [packages/ast-loose-compare](https://bitbucket.org/codsen/codsen/src/master/packages/ast-loose-compare/) |
| `object-all-values-equal-to` | Does the AST/nested-plain-object/array/whatever contain only one kind of value? | [![object-all-values-equal-to on npm](https://img.shields.io/npm/v/object-all-values-equal-to.svg?style=flat-square)](https://www.npmjs.com/package/object-all-values-equal-to) | [packages/object-all-values-equal-to](https://bitbucket.org/codsen/codsen/src/master/packages/object-all-values-equal-to/) |
| `object-boolean-combinations` | Generate an array full of object copies, each containing a unique Boolean value combination. Includes overrides. | [![object-boolean-combinations on npm](https://img.shields.io/npm/v/object-boolean-combinations.svg?style=flat-square)](https://www.npmjs.com/package/object-boolean-combinations) | [packages/object-boolean-combinations](https://bitbucket.org/codsen/codsen/src/master/packages/object-boolean-combinations/) |
| `object-delete-key` | Delete keys from all arrays or plain objects, nested within anything, by key or by value or by both, and clean up afterwards. Accepts wildcards. | [![object-delete-key on npm](https://img.shields.io/npm/v/object-delete-key.svg?style=flat-square)](https://www.npmjs.com/package/object-delete-key) | [packages/object-delete-key](https://bitbucket.org/codsen/codsen/src/master/packages/object-delete-key/) |
| `object-fill-missing-keys` | Add missing keys into plain objects, according to a reference object | [![object-fill-missing-keys on npm](https://img.shields.io/npm/v/object-fill-missing-keys.svg?style=flat-square)](https://www.npmjs.com/package/object-fill-missing-keys) | [packages/object-fill-missing-keys](https://bitbucket.org/codsen/codsen/src/master/packages/object-fill-missing-keys/) |
| `object-flatten-all-arrays` | Merge and flatten any arrays found in all values within plain objects | [![object-flatten-all-arrays on npm](https://img.shields.io/npm/v/object-flatten-all-arrays.svg?style=flat-square)](https://www.npmjs.com/package/object-flatten-all-arrays) | [packages/object-flatten-all-arrays](https://bitbucket.org/codsen/codsen/src/master/packages/object-flatten-all-arrays/) |
| `object-flatten-referencing` | Flatten complex nested objects according to a reference objects | [![object-flatten-referencing on npm](https://img.shields.io/npm/v/object-flatten-referencing.svg?style=flat-square)](https://www.npmjs.com/package/object-flatten-referencing) | [packages/object-flatten-referencing](https://bitbucket.org/codsen/codsen/src/master/packages/object-flatten-referencing/) |
| `object-no-new-keys` | Check, does a plain object (AST/JSON) has any unique keys, not present in a reference object (another AST/JSON) | [![object-no-new-keys on npm](https://img.shields.io/npm/v/object-no-new-keys.svg?style=flat-square)](https://www.npmjs.com/package/object-no-new-keys) | [packages/object-no-new-keys](https://bitbucket.org/codsen/codsen/src/master/packages/object-no-new-keys/) |
| `object-set-all-values-to` | Recursively walk the input and set all found values in plain objects to something | [![object-set-all-values-to on npm](https://img.shields.io/npm/v/object-set-all-values-to.svg?style=flat-square)](https://www.npmjs.com/package/object-set-all-values-to) | [packages/object-set-all-values-to](https://bitbucket.org/codsen/codsen/src/master/packages/object-set-all-values-to/) |

## ✂️ 5 CLI Apps

All the following libraries are command line applications. You install them using `-g` flag, for example, `npm i -g json-sort-cli`.

You use them in the Terminal (command line), for example:

![CLI app](https://bitbucket.org/codsen/codsen/raw/dcd51a7a32ee052e41cfaca3d0cbe8e606337c82/packages/email-all-chars-within-ascii-cli/media/mov2.gif)

| Library's name | Purpose | Link on npm | Source code in monorepo |
| -------------- | ------- | ----------- | ----------------------- |
| `chlu-cli` | CH-ange-L-og U-pdate — Automatically fix errors in your changelog file | [![chlu-cli on npm](https://img.shields.io/npm/v/chlu-cli.svg?style=flat-square)](https://www.npmjs.com/package/chlu-cli) | [packages/chlu-cli](https://bitbucket.org/codsen/codsen/src/master/packages/chlu-cli/) |
| `csv-sort-cli` | Command line app to sort double-entry CSVs coming from internet banking statements | [![csv-sort-cli on npm](https://img.shields.io/npm/v/csv-sort-cli.svg?style=flat-square)](https://www.npmjs.com/package/csv-sort-cli) | [packages/csv-sort-cli](https://bitbucket.org/codsen/codsen/src/master/packages/csv-sort-cli/) |
| `email-all-chars-within-ascii-cli` | Command line app to scan email templates, are all their characters within ASCII range | [![email-all-chars-within-ascii-cli on npm](https://img.shields.io/npm/v/email-all-chars-within-ascii-cli.svg?style=flat-square)](https://www.npmjs.com/package/email-all-chars-within-ascii-cli) | [packages/email-all-chars-within-ascii-cli](https://bitbucket.org/codsen/codsen/src/master/packages/email-all-chars-within-ascii-cli/) |
| `js-row-num-cli` | Update all row numbers in all console.logs in JS code | [![js-row-num-cli on npm](https://img.shields.io/npm/v/js-row-num-cli.svg?style=flat-square)](https://www.npmjs.com/package/js-row-num-cli) | [packages/js-row-num-cli](https://bitbucket.org/codsen/codsen/src/master/packages/js-row-num-cli/) |
| `json-sort-cli` | Command line app to deep sort JSON files, also dot-files as long as they are valid JSON | [![json-sort-cli on npm](https://img.shields.io/npm/v/json-sort-cli.svg?style=flat-square)](https://www.npmjs.com/package/json-sort-cli) | [packages/json-sort-cli](https://bitbucket.org/codsen/codsen/src/master/packages/json-sort-cli/) |

## 🛠️ 15 Miscellaneous Libraries

| Library's name | Purpose | Link on npm | Source code in monorepo |
| -------------- | ------- | ----------- | ----------------------- |
| `array-group-str-omit-num-char` | Groups array of strings by omitting number characters | [![array-group-str-omit-num-char on npm](https://img.shields.io/npm/v/array-group-str-omit-num-char.svg?style=flat-square)](https://www.npmjs.com/package/array-group-str-omit-num-char) | [packages/array-group-str-omit-num-char](https://bitbucket.org/codsen/codsen/src/master/packages/array-group-str-omit-num-char/) |
| `array-includes-with-glob` | like `_.includes` but with wildcards | [![array-includes-with-glob on npm](https://img.shields.io/npm/v/array-includes-with-glob.svg?style=flat-square)](https://www.npmjs.com/package/array-includes-with-glob) | [packages/array-includes-with-glob](https://bitbucket.org/codsen/codsen/src/master/packages/array-includes-with-glob/) |
| `array-of-arrays-into-ast` | turns an array of arrays of data into a nested tree of plain objects | [![array-of-arrays-into-ast on npm](https://img.shields.io/npm/v/array-of-arrays-into-ast.svg?style=flat-square)](https://www.npmjs.com/package/array-of-arrays-into-ast) | [packages/array-of-arrays-into-ast](https://bitbucket.org/codsen/codsen/src/master/packages/array-of-arrays-into-ast/) |
| `array-of-arrays-sort-by-col` | sort array of arrays by column, rippling the sorting outwards from that column | [![array-of-arrays-sort-by-col on npm](https://img.shields.io/npm/v/array-of-arrays-sort-by-col.svg?style=flat-square)](https://www.npmjs.com/package/array-of-arrays-sort-by-col) | [packages/array-of-arrays-sort-by-col](https://bitbucket.org/codsen/codsen/src/master/packages/array-of-arrays-sort-by-col/) |
| `array-pull-all-with-glob` | pullAllWithGlob — like `_.pullAll` but pulling stronger, with globs | [![array-pull-all-with-glob on npm](https://img.shields.io/npm/v/array-pull-all-with-glob.svg?style=flat-square)](https://www.npmjs.com/package/array-pull-all-with-glob) | [packages/array-pull-all-with-glob](https://bitbucket.org/codsen/codsen/src/master/packages/array-pull-all-with-glob/) |
| `arrayiffy-if-string` | Put non-empty strings into arrays, turn empty-ones into empty arrays. Bypass everything else. | [![arrayiffy-if-string on npm](https://img.shields.io/npm/v/arrayiffy-if-string.svg?style=flat-square)](https://www.npmjs.com/package/arrayiffy-if-string) | [packages/arrayiffy-if-string](https://bitbucket.org/codsen/codsen/src/master/packages/arrayiffy-if-string/) |
| `charcode-is-valid-xml-name-character` | Does a given character belong to XML spec's "Production 4 OR 4a" type (is acceptable for XML element's name) | [![charcode-is-valid-xml-name-character on npm](https://img.shields.io/npm/v/charcode-is-valid-xml-name-character.svg?style=flat-square)](https://www.npmjs.com/package/charcode-is-valid-xml-name-character) | [packages/charcode-is-valid-xml-name-character](https://bitbucket.org/codsen/codsen/src/master/packages/charcode-is-valid-xml-name-character/) |
| `check-types-mini` | Check the types of your options object's values after user has customised them | [![check-types-mini on npm](https://img.shields.io/npm/v/check-types-mini.svg?style=flat-square)](https://www.npmjs.com/package/check-types-mini) | [packages/check-types-mini](https://bitbucket.org/codsen/codsen/src/master/packages/check-types-mini/) |
| `chlu` | CH-ange-L-og U-pdate — Automatically fix errors in your changelog file | [![chlu on npm](https://img.shields.io/npm/v/chlu.svg?style=flat-square)](https://www.npmjs.com/package/chlu) | [packages/chlu](https://bitbucket.org/codsen/codsen/src/master/packages/chlu/) |
| `color-shorthand-hex-to-six-digit` | Convert shorthand hex color codes into full | [![color-shorthand-hex-to-six-digit on npm](https://img.shields.io/npm/v/color-shorthand-hex-to-six-digit.svg?style=flat-square)](https://www.npmjs.com/package/color-shorthand-hex-to-six-digit) | [packages/color-shorthand-hex-to-six-digit](https://bitbucket.org/codsen/codsen/src/master/packages/color-shorthand-hex-to-six-digit/) |
| `email-homey` | Generate homepage in the Browsersync root with links/screenshots to all your email templates | [![email-homey on npm](https://img.shields.io/npm/v/email-homey.svg?style=flat-square)](https://www.npmjs.com/package/email-homey) | [packages/email-homey](https://bitbucket.org/codsen/codsen/src/master/packages/email-homey/) |
| `gulp-email-remove-unused-css` | Gulp plugin to remove unused CSS classes/id's from styles in HTML HEAD and inline within BODY | [![gulp-email-remove-unused-css on npm](https://img.shields.io/npm/v/gulp-email-remove-unused-css.svg?style=flat-square)](https://www.npmjs.com/package/gulp-email-remove-unused-css) | [packages/gulp-email-remove-unused-css](https://bitbucket.org/codsen/codsen/src/master/packages/gulp-email-remove-unused-css/) |
| `regex-empty-conditional-comments` | Regular expression for matching HTML empty conditional comments | [![regex-empty-conditional-comments on npm](https://img.shields.io/npm/v/regex-empty-conditional-comments.svg?style=flat-square)](https://www.npmjs.com/package/regex-empty-conditional-comments) | [packages/regex-empty-conditional-comments](https://bitbucket.org/codsen/codsen/src/master/packages/regex-empty-conditional-comments/) |
| `util-array-object-or-both` | Validate and normalise user choice: array, object or both? | [![util-array-object-or-both on npm](https://img.shields.io/npm/v/util-array-object-or-both.svg?style=flat-square)](https://www.npmjs.com/package/util-array-object-or-both) | [packages/util-array-object-or-both](https://bitbucket.org/codsen/codsen/src/master/packages/util-array-object-or-both/) |
| `util-nonempty` | Is the input (plain object, array, string or whatever) not empty? | [![util-nonempty on npm](https://img.shields.io/npm/v/util-nonempty.svg?style=flat-square)](https://www.npmjs.com/package/util-nonempty) | [packages/util-nonempty](https://bitbucket.org/codsen/codsen/src/master/packages/util-nonempty/) |

## 🤝 Contributing
* If you see an error, [raise an issue](https://bitbucket.org/codsen/codsen/issues/new?title=put%20package%20name%20here-%20put%20issue%20title%20here).
* If you want a new feature but can't code it up yourself, also [raise an issue](https://bitbucket.org/codsen/codsen/issues/new?title=put%20package%20name%20here-%20put%20issue%20title%20here). Let's discuss it.
* If you tried to use a package, but something didn't work out, also [raise an issue](https://bitbucket.org/codsen/codsen/issues/new?title=put%20package%20name%20here-%20put%20issue%20title%20here). We'll try to help.
* If you want to contribute some code, fork the [monorepo](https://bitbucket.org/codsen/codsen/src/) via BitBucket, then write code, then file a pull request via BitBucket. We'll merge it in and release.

In monorepo, npm libraries are located in `packages/` folder. Inside, the source code is located either in `src/` folder (normal npm library) or in the root, `cli.js` (if it's a command line application).

The npm script within each package's `package.json` "`dev`", the `"dev": "rollup -c --dev --silent"` builds the development version retaining all `console.log`s with row numbers. It's handy to have [js-row-num-cli](https://www.npmjs.com/package/js-row-num-cli) installed globally so you can automatically update the row numbers on all `console.log`s.

## 💼 Licence

MIT License

Copyright (c) 2015-2019 Roy Revelt and other contributors

