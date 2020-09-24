/**
 * string-split-by-whitespace
 * Split string into array by chunks of whitespace
 * Version: 1.6.70
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/string-split-by-whitespace/
 */

!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).stringSplitByWhitespace=n()}(this,(function(){"use strict";function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(n)}function n(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function r(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function t(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(r){n(e,r,i[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function i(n,r,i){var o=t(t({},{inclusiveRangeEnds:!1,returnMatchedRangeInsteadOfTrue:!1}),i);if(!Number.isInteger(n))throw new Error("ranges-is-index-within: [THROW_ID_01] the first input argument should be string index, a natural number (or zero). It was given as ".concat(n," (type ").concat(e(n),")"));return!!Array.isArray(r)&&(o.returnMatchedRangeInsteadOfTrue?r.find((function(e){return o.inclusiveRangeEnds?n>=e[0]&&n<=e[1]:n>e[0]&&n<e[1]}))||!1:r.some((function(e){return o.inclusiveRangeEnds?n>=e[0]&&n<=e[1]:n>e[0]&&n<e[1]})))}return function(e,n){if(void 0===e)throw new Error("string-split-by-whitespace: [THROW_ID_01] The input is missing!");if("string"!=typeof e)return e;if(""===e.trim())return[];var r=t(t({},{ignoreRanges:[]}),n);if(r.ignoreRanges.length>0&&!r.ignoreRanges.every((function(e){return Array.isArray(e)})))throw new Error("string-split-by-whitespace: [THROW_ID_03] The opts.ignoreRanges contains elements which are not arrays!");for(var o=null,s=[],u=0,c=e.length;u<c;u++)null===o&&e[u].trim()&&(!r.ignoreRanges.length||r.ignoreRanges.length&&!i(u,r.ignoreRanges.map((function(e){return[e[0],e[1]-1]})),{inclusiveRangeEnds:!0}))&&(o=u),null!==o&&(e[u].trim()?r.ignoreRanges.length&&i(u,r.ignoreRanges)?(s.push(e.slice(o,u-1)),o=null):void 0===e[u+1]&&s.push(e.slice(o,u+1)):(s.push(e.slice(o,u)),o=null));return s}}));
