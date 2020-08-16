/**
 * array-includes-with-glob
 * like _.includes but with wildcards
 * Version: 2.12.38
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/array-includes-with-glob
 */

!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).arrayIncludesWithGlob=e()}(this,(function(){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(e)}function e(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function t(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function n(r){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){e(r,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))}))}return r}function o(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function a(r,e){var t;if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(t=function(r,e){if(r){if("string"==typeof r)return o(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(r,e):void 0}}(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var n=0,a=function(){};return{s:a,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){t=r[Symbol.iterator]()},n:function(){var r=t.next();return u=r.done,r},e:function(r){c=!0,i=r},f:function(){try{u||null==t.return||t.return()}finally{if(c)throw i}}}}var i=new Map;function u(r,e){e=n({caseSensitive:!1},e);var t=r+JSON.stringify(e);if(i.has(t))return i.get(t);var o="!"===r[0];o&&(r=r.slice(1)),r=function(r){if("string"!=typeof r)throw new TypeError("Expected a string");return r.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}(r).replace(/\\\*/g,"[\\s\\S]*");var a=new RegExp("^".concat(r,"$"),e.caseSensitive?"":"i");return a.negated=o,i.set(t,a),a}var c=function(e,t,n){if(!Array.isArray(e)||!Array.isArray(t))throw new TypeError("Expected two arrays, got ".concat(r(e)," ").concat(r(t)));if(0===t.length)return e;var o="!"===t[0][0];t=t.map((function(r){return u(r,n)}));var i,c=[],s=a(e);try{for(s.s();!(i=s.n()).done;){var l,f=i.value,y=o,b=a(t);try{for(b.s();!(l=b.n()).done;){var p=l.value;p.test(f)&&(y=!p.negated)}}catch(r){b.e(r)}finally{b.f()}y&&c.push(f)}}catch(r){s.e(r)}finally{s.f()}return c};c.isMatch=function(r,e,t){var n=Array.isArray(r)?r:[r],o=Array.isArray(e)?e:[e];return n.some((function(r){return o.every((function(e){var n=u(e,t),o=n.test(r);return n.negated?!o:o}))}))};var s=Array.isArray;return function(e,t,o){function a(r){return null!=r}function i(r){return"string"==typeof r}var u={arrayVsArrayAllMustBeFound:"any"},l=n(n({},u),o);if(0===arguments.length)throw new Error("array-includes-with-glob/arrayIncludesWithGlob(): [THROW_ID_01] all inputs missing!");if(1===arguments.length)throw new Error("array-includes-with-glob/arrayIncludesWithGlob(): [THROW_ID_02] second argument missing!");if(!s(e)){if(!i(e))throw new Error("array-includes-with-glob/arrayIncludesWithGlob(): [THROW_ID_03] first argument must be an array! It was given as ".concat(r(e)));e=[e]}if(!i(t)&&!s(t))throw new Error("array-includes-with-glob/arrayIncludesWithGlob(): [THROW_ID_04] second argument must be a string or array of strings! It was given as ".concat(r(t)));if("any"!==l.arrayVsArrayAllMustBeFound&&"all"!==l.arrayVsArrayAllMustBeFound)throw new Error("array-includes-with-glob/arrayIncludesWithGlob(): [THROW_ID_05] opts.arrayVsArrayAllMustBeFound was customised to an unrecognised value, ".concat(l.arrayVsArrayAllMustBeFound,'. It must be equal to either "any" or "all".'));if(0===e.length)return!1;var f=e.filter((function(r){return a(r)}));return 0!==f.length&&(i(t)?f.some((function(r){return c.isMatch(r,t,{caseSensitive:!0})})):"any"===l.arrayVsArrayAllMustBeFound?t.some((function(r){return f.some((function(e){return c.isMatch(e,r,{caseSensitive:!0})}))})):t.every((function(r){return f.some((function(e){return c.isMatch(e,r,{caseSensitive:!0})}))})))}}));
