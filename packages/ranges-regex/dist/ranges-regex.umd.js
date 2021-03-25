/**
 * ranges-regex
 * Integrate regex operations into Ranges workflow
 * Version: 4.0.10
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ranges-regex/
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).rangesRegex={})}(this,(function(e){"use strict";const r={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function n(e,n){if(!Array.isArray(e)||!e.length)return e;const t={...r,...n};let s,o;if(t.strictlyTwoElementsInRangeArrays&&!e.filter((e=>e)).every(((e,r)=>2===e.length||(s=r,o=e.length,!1))))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${s}th range (${JSON.stringify(e[s],null,4)}) has not two but ${o} elements!`);if(!e.filter((e=>e)).every(((e,r)=>!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(s=r,!1))))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${s}th range (${JSON.stringify(e[s],null,4)}) does not consist of only natural numbers!`);const i=e.filter((e=>e)).length**2;let l=0;return Array.from(e).filter((e=>e)).sort(((e,r)=>(t.progressFn&&(l+=1,t.progressFn(Math.floor(100*l/i))),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1)))}const t={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var o=function(e){var r={exports:{}};return e(r,r.exports),r.exports}((function(e,r){var n=r&&!r.nodeType&&r,t=n&&e&&!e.nodeType&&e,o=t&&t.exports===n&&("object"==typeof s&&s&&s.Object===Object&&s).process,i=function(){try{return o&&o.binding("util")}catch(e){}}(),l=i&&i.isRegExp;var g=Object.prototype.toString;var a,u=l?(a=l,function(e){return a(e)}):function(e){return function(e){var r=typeof e;return!!e&&("object"==r||"function"==r)}(e)&&"[object RegExp]"==g.call(e)};e.exports=u}));e.rRegex=function(e,r,s){if(void 0===e)throw new TypeError("ranges-regex: [THROW_ID_01] The first input's argument must be a regex object! Currently it is missing!");if(!o(e))throw new TypeError(`ranges-regex: [THROW_ID_02] The first input's argument must be a regex object! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if("string"!=typeof r)throw new TypeError(`ranges-regex: [THROW_ID_03] The second input's argument must be a string! Currently its type is: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);if(s&&"string"!=typeof s)throw new TypeError(`ranges-regex: [THROW_ID_04] The third input's argument must be a string or null! Currently its type is: ${typeof s}, equal to: ${JSON.stringify(s,null,4)}`);if(!r.length)return null;let i;const l=[];if(null===s||"string"==typeof s&&s.length)for(;null!==(i=e.exec(r));)l.push([e.lastIndex-i[0].length,e.lastIndex,s]);else for(;null!==(i=e.exec(r));)l.push([e.lastIndex-i[0].length,e.lastIndex]);return l.length?function(e,r){function s(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e)||!e.length)return null;let o;if(r){if(!s(r))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(r,null,4)} (type ${typeof r})`);if(o={...t,...r},o.progressFn&&s(o.progressFn)&&!Object.keys(o.progressFn).length)o.progressFn=null;else if(o.progressFn&&"function"!=typeof o.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof o.progressFn}", equal to ${JSON.stringify(o.progressFn,null,4)}`);if(o.mergeType&&1!=+o.mergeType&&2!=+o.mergeType)throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof o.mergeType}", equal to ${JSON.stringify(o.mergeType,null,4)}`);if("boolean"!=typeof o.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof o.joinRangesThatTouchEdges}", equal to ${JSON.stringify(o.joinRangesThatTouchEdges,null,4)}`)}else o={...t};const i=e.filter((e=>e)).map((e=>[...e])).filter((e=>void 0!==e[2]||e[0]!==e[1]));let l,g,a;if(l=o.progressFn?n(i,{progressFn:e=>{a=Math.floor(e/5),a!==g&&(g=a,o.progressFn(a))}}):n(i),!l)return null;const u=l.length-1;for(let e=u;e>0;e--)o.progressFn&&(a=Math.floor(78*(1-e/u))+21,a!==g&&a>g&&(g=a,o.progressFn(a))),(l[e][0]<=l[e-1][0]||!o.joinRangesThatTouchEdges&&l[e][0]<l[e-1][1]||o.joinRangesThatTouchEdges&&l[e][0]<=l[e-1][1])&&(l[e-1][0]=Math.min(l[e][0],l[e-1][0]),l[e-1][1]=Math.max(l[e][1],l[e-1][1]),void 0!==l[e][2]&&(l[e-1][0]>=l[e][0]||l[e-1][1]<=l[e][1])&&null!==l[e-1][2]&&(null===l[e][2]&&null!==l[e-1][2]?l[e-1][2]=null:null!=l[e-1][2]?2==+o.mergeType&&l[e-1][0]===l[e][0]?l[e-1][2]=l[e][2]:l[e-1][2]+=l[e][2]:l[e-1][2]=l[e][2]),l.splice(e,1),e=l.length);return l.length?l:null}(l):null},e.version="4.0.10",Object.defineProperty(e,"__esModule",{value:!0})}));
