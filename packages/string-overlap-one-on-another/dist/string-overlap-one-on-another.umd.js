/**
 * string-overlap-one-on-another
 * Lay one string on top of another, with an optional offset
 * Version: 1.5.61
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-overlap-one-on-another
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).stringOverlapOneOnAnother=t()}(this,(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}return function(t,n,o){if("string"!=typeof t)throw new Error("string-overlap-one-on-another: [THROW_ID_01] The first input argument must be a string but it was given as ".concat(JSON.stringify(t,null,4),', which is type "').concat(e(t),'"'));if("string"!=typeof n)throw new Error("string-overlap-one-on-another: [THROW_ID_02] The second input argument must be a string but it was given as ".concat(JSON.stringify(n,null,4),', which is type "').concat(e(n),'"'));var i,f={offset:0,offsetFillerCharacter:" "};if(o){if("object"!==e(o))throw new Error("string-overlap-one-on-another: [THROW_ID_03] The third input argument must be a plain object but it was given as ".concat(JSON.stringify(n,null,4),', which is type "').concat(e(o),'"'));if((i=r(r({},f),o)).offset){if(!Number.isInteger(Math.abs(i.offset)))throw new Error("string-overlap-one-on-another: [THROW_ID_04] The second input argument must be a string but it was given as ".concat(JSON.stringify(n,null,4),', which is type "').concat(e(n),'"'))}else i.offset=0;i.offsetFillerCharacter||""===i.offsetFillerCharacter||(i.offsetFillerCharacter=" ")}else i=f;return 0===n.length?t:0===t.length?n:i.offset<0?n+(Math.abs(i.offset)>n.length?i.offsetFillerCharacter.repeat(Math.abs(i.offset)-n.length):"")+t.slice(n.length-Math.abs(i.offset)>0?n.length-Math.abs(i.offset):0):i.offset>0?t.slice(0,i.offset)+(i.offset>t.length?i.offsetFillerCharacter.repeat(Math.abs(i.offset)-t.length):"")+n+(t.length-i.offset-n.length>0?t.slice(t.length-i.offset-n.length+1):""):n+(t.length>n.length?t.slice(n.length):"")}}));
