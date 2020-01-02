# html-all-known-attributes

> All HTML attributes known to the humanity

[![Minimum Node version required][node-img]][node-url]
[![Repository is on GitLab][gitlab-img]][gitlab-url]
[![Coverage][cov-img]][cov-url]
[![View dependencies as 2D chart][deps2d-img]][deps2d-url]
[![Downloads/Month][downloads-img]][downloads-url]
[![Test in browser][runkit-img]][runkit-url]
[![Code style: prettier][prettier-img]][prettier-url]
[![MIT License][license-img]][license-url]

## Table of Contents

- [Install](#install)
- [Idea](#idea)
- [API](#api)
- [Example](#example)
- [Contributing](#contributing)
- [Licence](#licence)

## Install

```bash
npm i html-all-known-attributes
```

Consume via a `require()`:

```js
const { allHtmlAttribs } = require("html-all-known-attributes");
```

or as an ES Module:

```js
import { allHtmlAttribs } from "html-all-known-attributes";
```

or for web pages, as a production-ready minified script file (so-called "UMD build"), straight from CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/html-all-known-attributes/dist/html-all-known-attributes.umd.js"></script>
```

```js
// in which case you get a global variable "htmlAllKnownAttributes" which you consume like this:
const { allHtmlAttribs } = htmlAllKnownAttributes;
```

This package has three builds in `dist/` folder:

| Type                                                                                                    | Key in `package.json` | Path                                    | Size  |
| ------------------------------------------------------------------------------------------------------- | --------------------- | --------------------------------------- | ----- |
| Main export - **CommonJS version**, transpiled to ES5, contains `require` and `module.exports`          | `main`                | `dist/html-all-known-attributes.cjs.js` | 14 KB |
| **ES module** build that Webpack/Rollup understands. Untranspiled ES6 code with `import`/`export`.      | `module`              | `dist/html-all-known-attributes.esm.js` | 14 KB |
| **UMD build** for browsers, transpiled, minified, containing `iife`'s and has all dependencies baked-in | `browser`             | `dist/html-all-known-attributes.umd.js` | 13 KB |

**[⬆ back to top](#)**

## Idea

This package aims to have the most excessive list of all legit attribute names that can be put into HTML. Currently we have a list of 701 attribute names.

This includes deprecated attributes, Microsoft-proprietary-ones that email templates use (like `mso-line-height-rule`) and other-ones you've probably never seen before.

**[⬆ back to top](#)**

## API

This package exports a plain object with a single key, `allHtmlAttribs`. Its value is an array of 701 strings, all known attributes.

## Example

```js
const { allHtmlAttribs } = require("html-all-known-attributes");

// allHtmlAttribs is an array of strings
console.log(allHtmlAttribs[0]);
// => abbr

console.log(JSON.stringify(allHtmlAttribs, null, 4));
// => [
//      "abbr",
//      "accept",
//      "accept-charset",
//      ...
```

**[⬆ back to top](#)**

## Contributing

- If you see an error, [raise an issue](<https://gitlab.com/codsen/codsen/issues/new?issue[title]=html-all-known-attributes%20package%20-%20put%20title%20here&issue[description]=**Which%20package%20is%20this%20issue%20for**%3A%20%0Ahtml-all-known-attributes%0A%0A**Describe%20the%20issue%20(if%20necessary)**%3A%20%0A%0A%0A%2Fassign%20%40revelt>).
- If you want a new feature but can't code it up yourself, also [raise an issue](<https://gitlab.com/codsen/codsen/issues/new?issue[title]=html-all-known-attributes%20package%20-%20put%20title%20here&issue[description]=**Which%20package%20is%20this%20issue%20for**%3A%20%0Ahtml-all-known-attributes%0A%0A**Describe%20the%20issue%20(if%20necessary)**%3A%20%0A%0A%0A%2Fassign%20%40revelt>). Let's discuss it.
- If you tried to use this package, but something didn't work out, also [raise an issue](<https://gitlab.com/codsen/codsen/issues/new?issue[title]=html-all-known-attributes%20package%20-%20put%20title%20here&issue[description]=**Which%20package%20is%20this%20issue%20for**%3A%20%0Ahtml-all-known-attributes%0A%0A**Describe%20the%20issue%20(if%20necessary)**%3A%20%0A%0A%0A%2Fassign%20%40revelt>). We'll try to help.
- If you want to contribute some code, fork the [monorepo](https://gitlab.com/codsen/codsen/) via GitLab, then write code, then file a pull request on GitLab. We'll merge it in and release.

In monorepo, npm libraries are located in `packages/` folder. Inside, the source code is located either in `src/` folder (normal npm library) or in the root, `cli.js` (if it's a command-line application).

The npm script "`dev`", the `"dev": "rollup -c --dev"` builds the development version retaining all `console.log`s with row numbers. It's handy to have [js-row-num-cli](https://www.npmjs.com/package/js-row-num-cli) installed globally so you can automatically update the row numbers on all `console.log`s.

**[⬆ back to top](#)**

## Licence

MIT License

Copyright (c) 2015-2020 Roy Revelt and other contributors

[node-img]: https://img.shields.io/node/v/html-all-known-attributes.svg?style=flat-square&label=works%20on%20node
[node-url]: https://www.npmjs.com/package/html-all-known-attributes
[gitlab-img]: https://img.shields.io/badge/repo-on%20GitLab-brightgreen.svg?style=flat-square
[gitlab-url]: https://gitlab.com/codsen/codsen/tree/master/packages/html-all-known-attributes
[cov-img]: https://img.shields.io/badge/coverage-100%25-brightgreen.svg?style=flat-square
[cov-url]: https://gitlab.com/codsen/codsen/tree/master/packages/html-all-known-attributes
[deps2d-img]: https://img.shields.io/badge/deps%20in%202D-see_here-08f0fd.svg?style=flat-square
[deps2d-url]: http://npm.anvaka.com/#/view/2d/html-all-known-attributes
[downloads-img]: https://img.shields.io/npm/dm/html-all-known-attributes.svg?style=flat-square
[downloads-url]: https://npmcharts.com/compare/html-all-known-attributes
[runkit-img]: https://img.shields.io/badge/runkit-test_in_browser-a853ff.svg?style=flat-square
[runkit-url]: https://npm.runkit.com/html-all-known-attributes
[prettier-img]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[prettier-url]: https://prettier.io
[license-img]: https://img.shields.io/badge/licence-MIT-51c838.svg?style=flat-square
[license-url]: https://gitlab.com/codsen/codsen/blob/master/LICENSE