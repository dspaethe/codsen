/**
 * email-all-chars-within-ascii
 * Scans all characters within a string and checks are they within ASCII range
 * Version: 2.9.66
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/email-all-chars-within-ascii
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).emailAllCharsWithinAscii=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function n(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function o(t){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?n(Object(r),!0).forEach((function(n){e(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var r,i,c=Function.prototype,a=Object.prototype,l=c.toString,u=a.hasOwnProperty,f=l.call(Object),s=a.toString,y=(r=Object.getPrototypeOf,i=Object,function(t){return r(i(t))});var p=function(e){if(!function(e){return!!e&&"object"==t(e)}(e)||"[object Object]"!=s.call(e)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(e))return!1;var n=y(e);if(null===n)return!0;var o=u.call(n,"constructor")&&n.constructor;return"function"==typeof o&&o instanceof o&&l.call(o)==f};return function(e,n){if("string"!=typeof e)throw new Error("email-all-chars-within-ascii/within(): [THROW_ID_01] The input is not string but ".concat(t(e),", equal to: ").concat(JSON.stringify(e,null,4)));if(null!=n&&!p(n))throw new Error("email-all-chars-within-ascii/within(): [THROW_ID_02] The opts is not a plain object but ".concat(t(n),", equal to:\n").concat(JSON.stringify(n,null,4)));for(var r=o(o({},{messageOnly:!1,checkLineLength:!0}),n),i=0,c=0,a=e.length;c<a;c++){if(i+=1,e[c].codePointAt(0)>126||e[c].codePointAt(0)<9||11===e[c].codePointAt(0)||12===e[c].codePointAt(0)||e[c].codePointAt(0)>13&&e[c].codePointAt(0)<32)throw new Error("".concat(r.messageOnly?"":"email-all-chars-within-ascii: ","Non ascii character found at index ").concat(c,", equal to: ").concat(JSON.stringify(e[c],null,4),", its decimal code point is ").concat(e[c].codePointAt(0),"."));if(i>997&&r.checkLineLength)throw new Error("".concat(r.messageOnly?"":"email-all-chars-within-ascii: ","Line length is beyond 999 characters!"));"\r"!==e[c]&&"\n"!==e[c]||(i=0)}}}));
