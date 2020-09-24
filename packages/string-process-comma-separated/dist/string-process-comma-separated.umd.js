/**
 * string-process-comma-separated
 * Extracts chunks from possibly comma or whatever-separated string
 * Version: 1.2.12
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/string-process-comma-separated/
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).stringProcessCommaSeparated=t()}(this,(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function o(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?r(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}return function(t,r){if("string"!=typeof t)throw new Error("string-process-comma-separated: [THROW_ID_01] input must be string! It was given as ".concat(e(t),", equal to:\n").concat(JSON.stringify(t,null,4)));if(t.length&&(r.cb||r.errCb)){var n=o(o({},{from:0,to:t.length,offset:0,leadingWhitespaceOK:!1,trailingWhitespaceOK:!1,oneSpaceAfterCommaOK:!1,innerWhitespaceAllowed:!1,separator:",",cb:null,errCb:null}),r);Number.isInteger(r.from)||(n.from=0),Number.isInteger(r.to)||(n.to=t.length),Number.isInteger(r.offset)||(n.offset=0);for(var f=null,i=null,a=!1,s=[],c=null,p=!0,l=n.from;l<n.to;l++){if(t[l].trim()&&t[l]!==n.separator&&(c=l),null!==f||!t[l].trim()||n.separator&&t[l]===n.separator||(a||(a=!0),s.length&&(s.length>1&&s.forEach((function(e,t){t&&n.errCb([[e+n.offset,e+1+n.offset]],"Remove separator.",p)})),s=[]),f=l),Number.isInteger(f)&&(l>f&&n.separator&&t[l]===n.separator||l+1===n.to)){t.slice(f,l+1===n.to&&t[l]!==n.separator&&t[l].trim()?l+1:l);"function"==typeof n.cb&&n.cb(f+n.offset,(l+1===n.to&&t[l]!==n.separator&&t[l].trim()?l+1:c+1)+n.offset),f=null}if(t[l].trim()||null!==i||(i=l),null!==i&&(t[l].trim()||l+1===n.to)){if(i===n.from)n.leadingWhitespaceOK||"function"!=typeof n.errCb||n.errCb([[i+n.offset,(l+1===n.to?l+1:l)+n.offset]],"Remove whitespace.",p);else if(t[l].trim()||l+1!==n.to){if(!(n.oneSpaceAfterCommaOK&&t[l].trim()&&l>n.from+1&&" "===t[l-1]&&","===t[l-2]||n.innerWhitespaceAllowed&&a&&t[i-1]&&t[l].trim()&&t[l]!==n.separator&&t[i-1]!==n.separator)){var u=i,m=l;l+1!==n.to||t[l]===n.separator||t[l].trim()||(m+=1);var b="";n.oneSpaceAfterCommaOK&&(" "===t[i]&&t[i-1]===n.separator?u+=1:" "!==t[i]&&(b=" "));var y="Remove whitespace.";!n.innerWhitespaceAllowed&&a&&t[i-1]&&t[l].trim()&&t[l]!==n.separator&&t[i-1]!==n.separator&&(p=!1,y="Bad whitespace."),b.length?n.errCb([[u+n.offset,m+n.offset,b]],y,p):n.errCb([[u+n.offset,m+n.offset]],y,p),p=!0}}else n.trailingWhitespaceOK||"function"!=typeof n.errCb||n.errCb([[i+n.offset,l+1+n.offset]],"Remove whitespace.",p);i=null}t[l]===n.separator&&(a?s.push(l):n.errCb([[l+n.offset,l+1+n.offset]],"Remove separator.",p)),l+1===n.to&&s.forEach((function(e){n.errCb([[e+n.offset,e+1+n.offset]],"Remove separator.",p)}))}}}}));
