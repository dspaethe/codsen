/**
 * ranges-invert
 * Invert string index ranges [ [1, 3] ] => [ [0, 1], [3, ...] ]
 * Version: 2.1.43
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ranges-invert
 */

!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).rangesInvert=e()}(this,(function(){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(e)}function e(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function n(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.push.apply(n,t)}return n}function t(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(n){e(r,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))}))}return r}function o(r){return function(r){if(Array.isArray(r))return s(r)}(r)||function(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}(r)||function(r,e){if(!r)return;if("string"==typeof r)return s(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(r,e)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}function a(r,e){if(!Array.isArray(r)||!r.length)return r;var n,o,s=t(t({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null}),e);if(s.strictlyTwoElementsInRangeArrays&&!r.every((function(r,e){return 2===r.length||(n=e,o=r.length,!1)})))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ".concat(n,"th range (").concat(JSON.stringify(r[n],null,4),") has not two but ").concat(o," elements!"));if(!r.every((function(r,e){return!(!Number.isInteger(r[0])||r[0]<0||!Number.isInteger(r[1])||r[1]<0)||(n=e,!1)})))throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ".concat(n,"th range (").concat(JSON.stringify(r[n],null,4),") does not consist of only natural numbers!"));var a=r.length*r.length,i=0;return Array.from(r).sort((function(r,e){return s.progressFn&&(i+=1,s.progressFn(Math.floor(100*i/a))),r[0]===e[0]?r[1]<e[1]?-1:r[1]>e[1]?1:0:r[0]<e[0]?-1:1}))}function i(e,n){function s(r){return"string"==typeof r}function i(e){return e&&"object"===r(e)&&!Array.isArray(e)}if(!Array.isArray(e)||!e.length)return e;var u,c={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};if(n){if(!i(n))throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n".concat(JSON.stringify(n,null,4)," (type ").concat(r(n),")"));if((u=t(t({},c),n)).progressFn&&i(u.progressFn)&&!Object.keys(u.progressFn).length)u.progressFn=null;else if(u.progressFn&&"function"!=typeof u.progressFn)throw new Error('ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "'.concat(r(u.progressFn),'", equal to ').concat(JSON.stringify(u.progressFn,null,4)));if(u.mergeType&&1!==u.mergeType&&2!==u.mergeType)if(s(u.mergeType)&&"1"===u.mergeType.trim())u.mergeType=1;else{if(!s(u.mergeType)||"2"!==u.mergeType.trim())throw new Error('ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(r(u.mergeType),'", equal to ').concat(JSON.stringify(u.mergeType,null,4)));u.mergeType=2}if("boolean"!=typeof u.joinRangesThatTouchEdges)throw new Error('ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "'.concat(r(u.joinRangesThatTouchEdges),'", equal to ').concat(JSON.stringify(u.joinRangesThatTouchEdges,null,4)))}else u=t({},c);for(var g,l,f,y=e.map((function(r){return o(r)})).filter((function(r){return void 0!==r[2]||r[0]!==r[1]})),p=(g=u.progressFn?a(y,{progressFn:function(r){(f=Math.floor(r/5))!==l&&(l=f,u.progressFn(f))}}):a(y)).length-1,h=p;h>0;h--)u.progressFn&&(f=Math.floor(78*(1-h/p))+21)!==l&&f>l&&(l=f,u.progressFn(f)),(g[h][0]<=g[h-1][0]||!u.joinRangesThatTouchEdges&&g[h][0]<g[h-1][1]||u.joinRangesThatTouchEdges&&g[h][0]<=g[h-1][1])&&(g[h-1][0]=Math.min(g[h][0],g[h-1][0]),g[h-1][1]=Math.max(g[h][1],g[h-1][1]),void 0!==g[h][2]&&(g[h-1][0]>=g[h][0]||g[h-1][1]<=g[h][1])&&null!==g[h-1][2]&&(null===g[h][2]&&null!==g[h-1][2]?g[h-1][2]=null:void 0!==g[h-1][2]?2===u.mergeType&&g[h-1][0]===g[h][0]?g[h-1][2]=g[h][2]:g[h-1][2]+=g[h][2]:g[h-1][2]=g[h][2]),g.splice(h,1),h=g.length);return g}var u=Array.isArray;var c=Array.isArray;return function(e,n,o){if(!c(e)&&null!==e)throw new TypeError("ranges-invert: [THROW_ID_01] Input's first argument must be an array, consisting of range arrays! Currently its type is: ".concat(r(e),", equal to: ").concat(JSON.stringify(e,null,4)));if(!Number.isInteger(n)||n<0)throw new TypeError("ranges-invert: [THROW_ID_02] Input's second argument must be a natural number or zero (coming from String.length)! Currently its type is: ".concat(r(n),", equal to: ").concat(JSON.stringify(n,null,4)));if(null===e)return 0===n?[]:[[0,n]];if(0===e.length)return[];var s,a,g,l=t(t({},{strictlyTwoElementsInRangeArrays:!1,skipChecks:!1}),o);if(!l.skipChecks&&l.strictlyTwoElementsInRangeArrays&&!e.every((function(r,e){return 2===r.length||(s=e,a=r.length,!1)})))throw new TypeError("ranges-invert: [THROW_ID_04] Because opts.strictlyTwoElementsInRangeArrays was enabled, all ranges must be strictly two-element-long. However, the ".concat(s,"th range (").concat(JSON.stringify(e[s],null,0),") has not two but ").concat(a," elements!"));if(!l.skipChecks&&!e.every((function(r,e){return!(!Number.isInteger(r[0])||r[0]<0||!Number.isInteger(r[1])||r[1]<0)||(s=e,!1)}))){if(Array.isArray(e)&&"number"==typeof e[0]&&"number"==typeof e[1])throw new TypeError("ranges-invert: [THROW_ID_07] The first argument should be AN ARRAY OF RANGES, not a single range! Currently arrOfRanges = ".concat(JSON.stringify(e,null,0),"!"));throw new TypeError("ranges-invert: [THROW_ID_05] The first argument should be AN ARRAY OF ARRAYS! Each sub-array means string slice indexes. In our case, here ".concat(s+1,"th range (").concat(JSON.stringify(e[s],null,0),") does not consist of only natural numbers!"))}return 0===(g=l.skipChecks?e.filter((function(r){return r[0]!==r[1]})):i(e.filter((function(r){return r[0]!==r[1]})))).length?0===n?[]:[[0,n]]:function(e,n){if(!u(e))throw new TypeError("ranges-crop: [THROW_ID_01] The first input's argument must be an array, consisting of range arrays! Currently its type is: ".concat(r(e),", equal to: ").concat(JSON.stringify(e,null,4)));if(!Number.isInteger(n))throw new TypeError("ranges-crop: [THROW_ID_02] The second input's argument must be a natural number or zero (coming from String.length)! Currently its type is: ".concat(r(n),", equal to: ").concat(JSON.stringify(n,null,4)));if(0===e.length)return e;var t;if(!e.every((function(r,e){return!(!Number.isInteger(r[0])||!Number.isInteger(r[1]))||(t=e,!1)}))){if(Array.isArray(e)&&"number"==typeof e[0]&&"number"==typeof e[1])throw new TypeError("ranges-crop: [THROW_ID_03] The first argument should be AN ARRAY OF RANGES, not a single range! Currently arrOfRanges = ".concat(JSON.stringify(e,null,0),"!"));throw new TypeError("ranges-crop: [THROW_ID_04] The first argument should be AN ARRAY OF ARRAYS! Each sub-array means string slice indexes. In our case, here ".concat(t+1,"th range (").concat(JSON.stringify(e[t],null,0),") does not consist of only natural numbers!"))}if(!e.every((function(r,e){return null==r[2]||"string"==typeof r[2]||(t=e,!1)})))throw new TypeError("ranges-crop: [THROW_ID_05] The third argument, if present at all, should be of a string-type or null. Currently the ".concat(t,"th range ").concat(JSON.stringify(e[t],null,0)," has a argument in the range of a type ").concat(r(e[t][2])));return i(e).filter((function(r){return r[0]<=n&&(void 0!==r[2]||r[0]<n)})).map((function(r){return r[1]>n?void 0!==r[2]?[r[0],n,r[2]]:[r[0],n]:r}))}(g.reduce((function(r,e,t,o){var s=[];0===t&&0!==o[0][0]&&s.push([0,o[0][0]]);var a=t<o.length-1?o[t+1][0]:n;if(e[1]!==a){if(l.skipChecks&&e[1]>a)throw new TypeError("ranges-invert: [THROW_ID_08] The checking (opts.skipChecks) is off and input ranges were not sorted! We nearly wrote range [".concat(e[1],", ").concat(a,"] which is backwards. For investigation, whole ranges array is:\n").concat(JSON.stringify(o,null,0)));s.push([e[1],a])}return r.concat(s)}),[]),n)}}));
