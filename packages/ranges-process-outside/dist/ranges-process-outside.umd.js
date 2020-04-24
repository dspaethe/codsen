/**
 * ranges-process-outside
 * Iterate through string and optionally a given ranges as if they were one
 * Version: 2.2.22
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ranges-process-outside
 */

!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r=r||self).rangesProcessOutside=e()}(this,(function(){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(e)}function e(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],t=!0,o=!1,s=void 0;try{for(var i,a=r[Symbol.iterator]();!(t=(i=a.next()).done)&&(n.push(i.value),!e||n.length!==e);t=!0);}catch(r){o=!0,s=r}finally{try{t||null==a.return||a.return()}finally{if(o)throw s}}return n}(r,e)||function(r,e){if(!r)return;if("string"==typeof r)return n(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);"Object"===t&&r.constructor&&(t=r.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(r,e)}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}function t(r,e){if(!Array.isArray(r))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);if(0===r.length)return r;const n={strictlyTwoElementsInRangeArrays:!1,progressFn:null,...e};let t,o;if(n.strictlyTwoElementsInRangeArrays&&!r.every((r,e)=>2===r.length||(t=e,o=r.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${t}th range (${JSON.stringify(r[t],null,4)}) has not two but ${o} elements!`);if(!r.every((r,e)=>!(!Number.isInteger(r[0])||r[0]<0||!Number.isInteger(r[1])||r[1]<0)||(t=e,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${t}th range (${JSON.stringify(r[t],null,4)}) does not consist of only natural numbers!`);const s=r.length*r.length;let i=0;return Array.from(r).sort((r,e)=>(n.progressFn&&(i+=1,n.progressFn(Math.floor(100*i/s))),r[0]===e[0]?r[1]<e[1]?-1:r[1]>e[1]?1:0:r[0]<e[0]?-1:1))}function o(r,e){function n(r){return"string"==typeof r}function o(r){return r&&"object"==typeof r&&!Array.isArray(r)}if(!Array.isArray(r))return r;const s={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let i;if(e){if(!o(e))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(e,null,4)} (type ${typeof e})`);if(i={...s,...e},i.progressFn&&o(i.progressFn)&&!Object.keys(i.progressFn).length)i.progressFn=null;else if(i.progressFn&&"function"!=typeof i.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof i.progressFn}", equal to ${JSON.stringify(i.progressFn,null,4)}`);if(i.mergeType&&1!==i.mergeType&&2!==i.mergeType)if(n(i.mergeType)&&"1"===i.mergeType.trim())i.mergeType=1;else{if(!n(i.mergeType)||"2"!==i.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof i.mergeType}", equal to ${JSON.stringify(i.mergeType,null,4)}`);i.mergeType=2}if("boolean"!=typeof i.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof i.joinRangesThatTouchEdges}", equal to ${JSON.stringify(i.joinRangesThatTouchEdges,null,4)}`)}else i={...s};const a=r.map(r=>[...r]).filter(r=>void 0!==r[2]||r[0]!==r[1]);let u,g,l;u=i.progressFn?t(a,{progressFn:r=>{l=Math.floor(r/5),l!==g&&(g=l,i.progressFn(l))}}):t(a);const f=u.length-1;for(let r=f;r>0;r--)i.progressFn&&(l=Math.floor(78*(1-r/f))+21,l!==g&&l>g&&(g=l,i.progressFn(l))),(u[r][0]<=u[r-1][0]||!i.joinRangesThatTouchEdges&&u[r][0]<u[r-1][1]||i.joinRangesThatTouchEdges&&u[r][0]<=u[r-1][1])&&(u[r-1][0]=Math.min(u[r][0],u[r-1][0]),u[r-1][1]=Math.max(u[r][1],u[r-1][1]),void 0!==u[r][2]&&(u[r-1][0]>=u[r][0]||u[r-1][1]<=u[r][1])&&null!==u[r-1][2]&&(null===u[r][2]&&null!==u[r-1][2]?u[r-1][2]=null:void 0!==u[r-1][2]?2===i.mergeType&&u[r-1][0]===u[r][0]?u[r-1][2]=u[r][2]:u[r-1][2]+=u[r][2]:u[r-1][2]=u[r][2]),u.splice(r,1),r=u.length);return u}const s=Array.isArray;function i(r,e){if(!s(r))throw new TypeError(`ranges-crop: [THROW_ID_01] The first input's argument must be an array, consisting of range arrays! Currently its type is: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);if(!Number.isInteger(e))throw new TypeError(`ranges-crop: [THROW_ID_02] The second input's argument must be a natural number or zero (coming from String.length)! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(0===r.length)return r;let n;if(!r.every((r,e)=>!(!Number.isInteger(r[0])||!Number.isInteger(r[1]))||(n=e,!1))){if(Array.isArray(r)&&"number"==typeof r[0]&&"number"==typeof r[1])throw new TypeError(`ranges-crop: [THROW_ID_03] The first argument should be AN ARRAY OF RANGES, not a single range! Currently arrOfRanges = ${JSON.stringify(r,null,0)}!`);throw new TypeError(`ranges-crop: [THROW_ID_04] The first argument should be AN ARRAY OF ARRAYS! Each sub-array means string slice indexes. In our case, here ${n+1}th range (${JSON.stringify(r[n],null,0)}) does not consist of only natural numbers!`)}if(!r.every((r,e)=>null==r[2]||"string"==typeof r[2]||(n=e,!1)))throw new TypeError(`ranges-crop: [THROW_ID_05] The third argument, if present at all, should be of a string-type or null. Currently the ${n}th range ${JSON.stringify(r[n],null,0)} has a argument in the range of a type ${typeof r[n][2]}`);return o(r).filter(r=>r[0]<=e&&(void 0!==r[2]||r[0]<e)).map(r=>r[1]>e?void 0!==r[2]?[r[0],e,r[2]]:[r[0],e]:r)}const a=Array.isArray;function u(r,e,n){if(!a(r)&&null!==r)throw new TypeError(`ranges-invert: [THROW_ID_01] Input's first argument must be an array, consisting of range arrays! Currently its type is: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);if(!Number.isInteger(e)||e<0)throw new TypeError(`ranges-invert: [THROW_ID_02] Input's second argument must be a natural number or zero (coming from String.length)! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(null===r)return 0===e?[]:[[0,e]];if(0===r.length)return[];const t={strictlyTwoElementsInRangeArrays:!1,skipChecks:!1,...n};let s,u,g;if(!t.skipChecks&&t.strictlyTwoElementsInRangeArrays&&!r.every((r,e)=>2===r.length||(s=e,u=r.length,!1)))throw new TypeError(`ranges-invert: [THROW_ID_04] Because opts.strictlyTwoElementsInRangeArrays was enabled, all ranges must be strictly two-element-long. However, the ${s}th range (${JSON.stringify(r[s],null,0)}) has not two but ${u} elements!`);if(!t.skipChecks&&!r.every((r,e)=>!(!Number.isInteger(r[0])||r[0]<0||!Number.isInteger(r[1])||r[1]<0)||(s=e,!1))){if(Array.isArray(r)&&"number"==typeof r[0]&&"number"==typeof r[1])throw new TypeError(`ranges-invert: [THROW_ID_07] The first argument should be AN ARRAY OF RANGES, not a single range! Currently arrOfRanges = ${JSON.stringify(r,null,0)}!`);throw new TypeError(`ranges-invert: [THROW_ID_05] The first argument should be AN ARRAY OF ARRAYS! Each sub-array means string slice indexes. In our case, here ${s+1}th range (${JSON.stringify(r[s],null,0)}) does not consist of only natural numbers!`)}if(g=t.skipChecks?r.filter(r=>r[0]!==r[1]):o(r.filter(r=>r[0]!==r[1])),0===g.length)return 0===e?[]:[[0,e]];return i(g.reduce((r,n,o,s)=>{const i=[];0===o&&0!==s[0][0]&&i.push([0,s[0][0]]);const a=o<s.length-1?s[o+1][0]:e;if(n[1]!==a){if(t.skipChecks&&n[1]>a)throw new TypeError(`ranges-invert: [THROW_ID_08] The checking (opts.skipChecks) is off and input ranges were not sorted! We nearly wrote range [${n[1]}, ${a}] which is backwards. For investigation, whole ranges array is:\n${JSON.stringify(s,null,0)}`);i.push([n[1],a])}return r.concat(i)},[]),e)}const g=[776,2359,2359,2367,2367,2984,3007,3021,3633,3635,3648,3657,4352,4449,4520];function l(r){if("string"!=typeof r)throw new Error("string cannot be undefined or null");const e=[];let n=0,t=0;for(;n<r.length;)t+=f(n+t,r),h(r[n+t])&&t++,c(r[n+t])&&t++,p(r[n+t])&&t++,m(r[n+t])?t++:(e.push(r.substring(n,n+t)),n+=t,t=0);return e}function f(r,e){const n=e[r];if(!function(r){return r&&T(r[0].charCodeAt(0),55296,56319)}(n)||r===e.length-1)return 1;const t=n+e[r+1];let o=e.substring(r+2,r+5);return y(t)&&y(o)||function(r){return T(d(r),127995,127999)}(o)?4:2}function y(r){return T(d(r),127462,127487)}function c(r){return"string"==typeof r&&T(r.charCodeAt(0),65024,65039)}function p(r){return"string"==typeof r&&T(r.charCodeAt(0),8400,8447)}function h(r){return"string"==typeof r&&-1!==g.indexOf(r.charCodeAt(0))}function m(r){return"string"==typeof r&&8205===r.charCodeAt(0)}function d(r){return(r.charCodeAt(0)-55296<<10)+(r.charCodeAt(1)-56320)+65536}function T(r,e,n){return r>=e&&r<=n}var w=l,b=function(r,e,n){const t=l(r);if(void 0===e)return r;if(e>=t.length)return"";const o=t.length-e;let s=e+(void 0===n?o:n);return s>e+o&&(s=void 0),t.slice(e,s).join("")};w.substr=b;var O=Array.isArray;return function(n,t,o){var s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];function a(r){return r&&"[object Function]"==={}.toString.call(r)}if("string"!=typeof n)throw void 0===n?new Error("ranges-process-outside: [THROW_ID_01] the first input argument must be string! It's missing currently (undefined)!"):new Error("ranges-process-outside: [THROW_ID_02] the first input argument must be string! It was given as:\n".concat(JSON.stringify(n,null,4)," (type ").concat(r(n),")"));if(t&&!O(t))throw new Error("ranges-process-outside: [THROW_ID_03] the second input argument must be array of ranges or null! It was given as:\n".concat(JSON.stringify(t,null,4)," (type ").concat(r(t),")"));if(!a(o))throw new Error("ranges-process-outside: [THROW_ID_04] the third input argument must be a function! It was given as:\n".concat(JSON.stringify(o,null,4)," (type ").concat(r(o),")"));function g(r,n){n.forEach((function(n){for(var t=e(n,2),s=t[0],i=t[1],a=s;a<i;a++){var u=w(r.slice(a))[0].length;o(a,a+u,(function(r){null!=r&&(a+=r)})),u&&u>1&&(a+=u-1)}}))}if(t&&t.length){var l=i(u(t,n.length,{skipChecks:!!s}),n.length);g(n,l)}else g(n,[[0,n.length]])}}));
