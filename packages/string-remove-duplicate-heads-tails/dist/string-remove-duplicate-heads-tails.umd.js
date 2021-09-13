/**
 * @name string-remove-duplicate-heads-tails
 * @fileoverview Detect and (recursively) remove head and tail wrappings around the input string
 * @version 6.0.1
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-remove-duplicate-heads-tails/}
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).stringRemoveDuplicateHeadsTails={})}(this,(function(e){"use strict";var t,r,n=Object.prototype,s=Function.prototype.toString,i=n.hasOwnProperty,o=s.call(Object),a=n.toString,l=(t=Object.getPrototypeOf,r=Object,function(e){return t(r(e))});var g=function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||"[object Object]"!=a.call(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1;var t=l(e);if(null===t)return!0;var r=i.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&s.call(r)==o};
/**
 * @name arrayiffy-if-string
 * @fileoverview Put non-empty strings into arrays, turn empty-ones into empty arrays. Bypass everything else.
 * @version 4.0.1
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/arrayiffy-if-string/}
 */function h(e){return"string"==typeof e?e.length?[e]:[]:e}
/**
 * @name string-match-left-right
 * @fileoverview Match substrings on the left or right of a given index, ignoring whitespace
 * @version 8.0.1
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-match-left-right/}
 */function u(e){return e&&"object"==typeof e&&!Array.isArray(e)}function f(e){return"string"==typeof e}const c={cb:void 0,i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],maxMismatches:0,firstMustMatch:!1,lastMustMatch:!1,hungry:!1},p=e=>e+1;function y(e,t,r,n,s=!1,i=p){const o="function"==typeof r?r():r;if(+t<0&&s&&"EOL"===o)return o;const a={...c,...n};if(t>=e.length&&!s)return!1;let l=s?1:r.length,g=0,h=!1,u=!1,f=!1,y=a.maxMismatches,m=t,d=!1,T=!1,w=!1;function b(){return 1===g&&y<a.maxMismatches-1}for(;e[m];){const t=i(m);if(a.trimBeforeMatching&&""===e[m].trim()){if(!e[t]&&s&&"EOL"===r)return!0;m=i(m);continue}if(a&&!a.i&&a.trimCharsBeforeMatching&&a.trimCharsBeforeMatching.includes(e[m])||a&&a.i&&a.trimCharsBeforeMatching&&a.trimCharsBeforeMatching.map((e=>e.toLowerCase())).includes(e[m].toLowerCase())){if(s&&"EOL"===r&&!e[t])return!0;m=i(m);continue}const n=t>m?r[r.length-l]:r[l-1];if(!a.i&&e[m]===n||a.i&&e[m].toLowerCase()===n.toLowerCase()){if(d||(d=!0),f||(f=!0),l===r.length){if(T=!0,y!==a.maxMismatches)return!1}else 1===l&&(w=!0);if(l-=1,g++,b())return!1;if(!l)return(g!==r.length||y===a.maxMismatches||!h)&&m}else{if(h||g||(h=!0),!(a.maxMismatches&&y&&m))return!(0!==m||1!==l||a.lastMustMatch||!f)&&0;y-=1;for(let n=0;n<=y;n++){const s=t>m?r[r.length-l+1+n]:r[l-2-n],o=e[i(m)];if(s&&(!a.i&&e[m]===s||a.i&&e[m].toLowerCase()===s.toLowerCase())&&(!a.firstMustMatch||l!==r.length)){if(g++,b())return!1;l-=2,d=!0;break}if(o&&s&&(!a.i&&o===s||a.i&&o.toLowerCase()===s.toLowerCase())&&(!a.firstMustMatch||l!==r.length)){if(!g&&!a.hungry)return!1;l-=1,d=!0;break}if(void 0===s&&y>=0&&d&&(!a.firstMustMatch||T)&&(!a.lastMustMatch||w))return m}d||(u=m)}if(!1!==u&&u!==m&&(u=!1),l<1)return m;m=i(m)}return l>0?!(!s||"EOL"!==o)||!!(a&&a.maxMismatches>=l&&f)&&(u||0):void 0}function m(e,t,r,n,s){if(u(s)&&Object.prototype.hasOwnProperty.call(s,"trimBeforeMatching")&&"boolean"!=typeof s.trimBeforeMatching)throw new Error(`string-match-left-right/${e}(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!${Array.isArray(s.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""}`);const i={...c,...s};if("string"==typeof i.trimCharsBeforeMatching&&(i.trimCharsBeforeMatching=h(i.trimCharsBeforeMatching)),i.trimCharsBeforeMatching=i.trimCharsBeforeMatching.map((e=>f(e)?e:String(e))),!f(t))return!1;if(!t.length)return!1;if(!Number.isInteger(r)||r<0)throw new Error(`string-match-left-right/${e}(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ${typeof r}, equal to:\n${JSON.stringify(r,null,4)}`);let o,a;if(f(n))o=[n];else if(Array.isArray(n))o=n;else if(n){if("function"!=typeof n)throw new Error(`string-match-left-right/${e}(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ${typeof n}, equal to:\n${JSON.stringify(n,null,4)}`);o=[],o.push(n)}else o=n;if(s&&!u(s))throw new Error(`string-match-left-right/${e}(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type "${typeof s}", and equal to:\n${JSON.stringify(s,null,4)}`);let l=0,g="";if(i&&i.trimCharsBeforeMatching&&i.trimCharsBeforeMatching.some(((e,t)=>e.length>1&&(l=t,g=e,!0))))throw new Error(`string-match-left-right/${e}(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ${l} is longer than 1 character, ${g.length} (equals to ${g}). Please split it into separate characters and put into array as separate elements.`);if(!o||!Array.isArray(o)||Array.isArray(o)&&!o.length||Array.isArray(o)&&1===o.length&&f(o[0])&&!o[0].trim()){if("function"==typeof i.cb){let n,s=r;if("matchLeftIncl"!==e&&"matchRight"!==e||(s+=1),"L"===e[5])for(let e=s;e--;){const r=t[e];if((!i.trimBeforeMatching||i.trimBeforeMatching&&void 0!==r&&r.trim())&&(!i.trimCharsBeforeMatching||!i.trimCharsBeforeMatching.length||void 0!==r&&!i.trimCharsBeforeMatching.includes(r))){n=e;break}}else if(e.startsWith("matchRight"))for(let e=s;e<t.length;e++){const r=t[e];if((!i.trimBeforeMatching||i.trimBeforeMatching&&r.trim())&&(!i.trimCharsBeforeMatching||!i.trimCharsBeforeMatching.length||!i.trimCharsBeforeMatching.includes(r))){n=e;break}}if(void 0===n)return!1;const o=t[n],a=n+1;let l="";return a&&a>0&&(l=t.slice(0,a)),"L"===e[5]?i.cb(o,l,n):(n&&n>0&&(l=t.slice(n)),i.cb(o,l,n))}let n="";throw s||(n=" More so, the whole options object, the fourth input argument, is missing!"),new Error(`string-match-left-right/${e}(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!${n}`)}for(let n=0,s=o.length;n<s;n++){a="function"==typeof o[n];const s=o[n];let l,g,h="",u=r;"matchRight"===e?u+=1:"matchLeft"===e&&(u-=1);const f=y(t,u,s,i,a,(t=>"L"===e[5]?t-1:t+1));if(f&&a&&"function"==typeof s&&"EOL"===s())return!(!s()||i.cb&&!i.cb(l,h,g))&&s();if(Number.isInteger(f)&&(g=e.startsWith("matchLeft")?f-1:f+1,h="L"===e[5]?t.slice(0,f):t.slice(g)),g<0&&(g=void 0),t[g]&&(l=t[g]),Number.isInteger(f)&&(!i.cb||i.cb(l,h,g)))return s}return!1}function d(e,t,r,n){return m("matchLeftIncl",e,t,r,n)}function T(e,t,r,n){return m("matchRightIncl",e,t,r,n)}
/**
 * @name string-collapse-leading-whitespace
 * @fileoverview Collapse the leading and trailing whitespace of a string
 * @version 6.0.1
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-collapse-leading-whitespace/}
 */function w(e,t=1){function r(e){return Array.from(e).reverse().join("")}function n(e,t,r){const n=r?"\n":"\r",s=r?"\r":"\n";if(!e)return e;let i=0,o="";for(let r=0,a=e.length;r<a;r++)(e[r]===n||e[r]===s&&e[r-1]!==n)&&i++,"\r\n".includes(e[r])||" "===e[r]?" "===e[r]?o+=e[r]:e[r]===n?i<=t&&(o+=e[r],e[r+1]===s&&(o+=e[r+1],r++)):e[r]===s&&(!e[r-1]||e[r-1]!==n)&&i<=t&&(o+=e[r]):e[r+1]||i||(o+=" ");return o}if("string"==typeof e&&e.length){let s=1;"number"==typeof+t&&Number.isInteger(+t)&&+t>=0&&(s=+t);let i="",o="";if(e.trim()){if(!e[0].trim())for(let t=0,r=e.length;t<r;t++)if(e[t].trim()){i=e.slice(0,t);break}}else i=e;if(e.trim()&&(""===e.slice(-1).trim()||" "===e.slice(-1)))for(let t=e.length;t--;)if(e[t].trim()){o=e.slice(t+1);break}return`${n(i,s,!1)}${e.trim()}${r(n(r(o),s,!0))}`}return e}
/**
 * @name ranges-push
 * @fileoverview Gather string index ranges
 * @version 6.0.1
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-push/}
 */const b={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function O(e,t){if(!Array.isArray(e)||!e.length)return e;const r={...b,...t};let n,s;if(r.strictlyTwoElementsInRangeArrays&&!e.filter((e=>e)).every(((e,t)=>2===e.length||(n=t,s=e.length,!1))))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${n}th range (${JSON.stringify(e[n],null,4)}) has not two but ${s} elements!`);if(!e.filter((e=>e)).every(((e,t)=>!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(n=t,!1))))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${n}th range (${JSON.stringify(e[n],null,4)}) does not consist of only natural numbers!`);const i=e.filter((e=>e)).length**2;let o=0;return Array.from(e).filter((e=>e)).sort(((e,t)=>(r.progressFn&&(o+=1,r.progressFn(Math.floor(100*o/i))),e[0]===t[0]?e[1]<t[1]?-1:e[1]>t[1]?1:0:e[0]<t[0]?-1:1)))}const $={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function M(e){return null!=e}function _(e){return Number.isInteger(e)&&e>=0}function I(e){return"string"==typeof e}const A={limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1};class R{constructor(e){const t={...A,...e};if(t.mergeType&&1!==t.mergeType&&2!==t.mergeType)if(I(t.mergeType)&&"1"===t.mergeType.trim())t.mergeType=1;else{if(!I(t.mergeType)||"2"!==t.mergeType.trim())throw new Error(`ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof t.mergeType}", equal to ${JSON.stringify(t.mergeType,null,4)}`);t.mergeType=2}this.opts=t,this.ranges=[]}ranges;opts;add(e,t,r){if(null==e&&null==t)return;if(M(e)&&!M(t)){if(Array.isArray(e)){if(e.length){if(e.some((e=>Array.isArray(e))))return void e.forEach((e=>{Array.isArray(e)&&this.add(...e)}));e.length&&_(+e[0])&&_(+e[1])&&this.add(...e)}return}throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set (${JSON.stringify(e,null,0)}) but second-one, "to" is not (${JSON.stringify(t,null,0)})`)}if(!M(e)&&M(t))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set (${JSON.stringify(t,null,0)}) but first-one, "from" is not (${JSON.stringify(e,null,0)})`);const n=+e,s=+t;if(_(r)&&(r=String(r)),!_(n)||!_(s))throw _(n)&&n>=0?new TypeError(`ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it's of a type "${typeof s}" equal to: ${JSON.stringify(s,null,4)}`):new TypeError(`ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it's of a type "${typeof n}" equal to: ${JSON.stringify(n,null,4)}`);if(M(r)&&!I(r)&&!_(r))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ${typeof r}, equal to:\n${JSON.stringify(r,null,4)}`);if(M(this.ranges)&&Array.isArray(this.last())&&n===this.last()[1]){if(this.last()[1]=s,this.last(),null!==this.last()[2]&&M(r)){let e=!(this.last()[2]&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?r:this.last()[2]+r;this.opts.limitToBeAddedWhitespace&&(e=w(e,this.opts.limitLinebreaksCount)),I(e)&&!e.length||(this.last()[2]=e)}}else{this.ranges||(this.ranges=[]);const e=void 0===r||I(r)&&!r.length?[n,s]:[n,s,r&&this.opts.limitToBeAddedWhitespace?w(r,this.opts.limitLinebreaksCount):r];this.ranges.push(e)}}push(e,t,r){this.add(e,t,r)}current(){return Array.isArray(this.ranges)&&this.ranges.length?(this.ranges=function(e,t){function r(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e)||!e.length)return null;let n;if(t){if(!r(t))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(t,null,4)} (type ${typeof t})`);if(n={...$,...t},n.progressFn&&r(n.progressFn)&&!Object.keys(n.progressFn).length)n.progressFn=null;else if(n.progressFn&&"function"!=typeof n.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof n.progressFn}", equal to ${JSON.stringify(n.progressFn,null,4)}`);if(n.mergeType&&1!=+n.mergeType&&2!=+n.mergeType)throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof n.mergeType}", equal to ${JSON.stringify(n.mergeType,null,4)}`);if("boolean"!=typeof n.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof n.joinRangesThatTouchEdges}", equal to ${JSON.stringify(n.joinRangesThatTouchEdges,null,4)}`)}else n={...$};const s=e.filter((e=>e)).map((e=>[...e])).filter((e=>void 0!==e[2]||e[0]!==e[1]));let i,o,a;if(i=n.progressFn?O(s,{progressFn:e=>{a=Math.floor(e/5),a!==o&&(o=a,n.progressFn(a))}}):O(s),!i)return null;const l=i.length-1;for(let e=l;e>0;e--)n.progressFn&&(a=Math.floor(78*(1-e/l))+21,a!==o&&a>o&&(o=a,n.progressFn(a))),(i[e][0]<=i[e-1][0]||!n.joinRangesThatTouchEdges&&i[e][0]<i[e-1][1]||n.joinRangesThatTouchEdges&&i[e][0]<=i[e-1][1])&&(i[e-1][0]=Math.min(i[e][0],i[e-1][0]),i[e-1][1]=Math.max(i[e][1],i[e-1][1]),void 0!==i[e][2]&&(i[e-1][0]>=i[e][0]||i[e-1][1]<=i[e][1])&&null!==i[e-1][2]&&(null===i[e][2]&&null!==i[e-1][2]?i[e-1][2]=null:null!=i[e-1][2]?2==+n.mergeType&&i[e-1][0]===i[e][0]?i[e-1][2]=i[e][2]:i[e-1][2]+=i[e][2]:i[e-1][2]=i[e][2]),i.splice(e,1),e=i.length);return i.length?i:null}(this.ranges,{mergeType:this.opts.mergeType}),this.ranges&&this.opts.limitToBeAddedWhitespace?this.ranges.map((e=>M(e[2])?[e[0],e[1],w(e[2],this.opts.limitLinebreaksCount)]:e)):this.ranges):null}wipe(){this.ranges=[]}replace(e){if(Array.isArray(e)&&e.length){if(!Array.isArray(e[0])||!_(e[0][0]))throw new Error(`ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ${JSON.stringify(e[0],null,4)} should be an array and its first element should be an integer, a string index.`);this.ranges=Array.from(e)}else this.ranges=[]}last(){return Array.isArray(this.ranges)&&this.ranges.length?this.ranges[this.ranges.length-1]:null}}
/**
 * @name ranges-sort
 * @fileoverview Sort string index ranges
 * @version 5.0.1
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-sort/}
 */const E={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function v(e,t){if(!Array.isArray(e)||!e.length)return e;const r={...E,...t};let n,s;if(r.strictlyTwoElementsInRangeArrays&&!e.filter((e=>e)).every(((e,t)=>2===e.length||(n=t,s=e.length,!1))))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${n}th range (${JSON.stringify(e[n],null,4)}) has not two but ${s} elements!`);if(!e.filter((e=>e)).every(((e,t)=>!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(n=t,!1))))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${n}th range (${JSON.stringify(e[n],null,4)}) does not consist of only natural numbers!`);const i=e.filter((e=>e)).length**2;let o=0;return Array.from(e).filter((e=>e)).sort(((e,t)=>(r.progressFn&&(o+=1,r.progressFn(Math.floor(100*o/i))),e[0]===t[0]?e[1]<t[1]?-1:e[1]>t[1]?1:0:e[0]<t[0]?-1:1)))}
/**
 * @name ranges-merge
 * @fileoverview Merge and sort string index ranges
 * @version 8.0.1
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-merge/}
 */const N={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function W(e,t){function r(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e)||!e.length)return null;let n;if(t){if(!r(t))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(t,null,4)} (type ${typeof t})`);if(n={...N,...t},n.progressFn&&r(n.progressFn)&&!Object.keys(n.progressFn).length)n.progressFn=null;else if(n.progressFn&&"function"!=typeof n.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof n.progressFn}", equal to ${JSON.stringify(n.progressFn,null,4)}`);if(n.mergeType&&1!=+n.mergeType&&2!=+n.mergeType)throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof n.mergeType}", equal to ${JSON.stringify(n.mergeType,null,4)}`);if("boolean"!=typeof n.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof n.joinRangesThatTouchEdges}", equal to ${JSON.stringify(n.joinRangesThatTouchEdges,null,4)}`)}else n={...N};const s=e.filter((e=>e)).map((e=>[...e])).filter((e=>void 0!==e[2]||e[0]!==e[1]));let i,o,a;if(i=n.progressFn?v(s,{progressFn:e=>{a=Math.floor(e/5),a!==o&&(o=a,n.progressFn(a))}}):v(s),!i)return null;const l=i.length-1;for(let e=l;e>0;e--)n.progressFn&&(a=Math.floor(78*(1-e/l))+21,a!==o&&a>o&&(o=a,n.progressFn(a))),(i[e][0]<=i[e-1][0]||!n.joinRangesThatTouchEdges&&i[e][0]<i[e-1][1]||n.joinRangesThatTouchEdges&&i[e][0]<=i[e-1][1])&&(i[e-1][0]=Math.min(i[e][0],i[e-1][0]),i[e-1][1]=Math.max(i[e][1],i[e-1][1]),void 0!==i[e][2]&&(i[e-1][0]>=i[e][0]||i[e-1][1]<=i[e][1])&&null!==i[e-1][2]&&(null===i[e][2]&&null!==i[e-1][2]?i[e-1][2]=null:null!=i[e-1][2]?2==+n.mergeType&&i[e-1][0]===i[e][0]?i[e-1][2]=i[e][2]:i[e-1][2]+=i[e][2]:i[e-1][2]=i[e][2]),i.splice(e,1),e=i.length);return i.length?i:null}
/**
 * @name ranges-apply
 * @fileoverview Take an array of string index ranges, delete/replace the string according to them
 * @version 6.0.1
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-apply/}
 */
/**
 * @name string-trim-spaces-only
 * @fileoverview Like String.trim() but you can choose granularly what to trim
 * @version 4.0.1
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-trim-spaces-only/}
 */
const B={classicTrim:!1,cr:!1,lf:!1,tab:!1,space:!0,nbsp:!1};function H(e,t){if("string"!=typeof e)throw new Error(`string-trim-spaces-only: [THROW_ID_01] input must be string! It was given as ${typeof e}, equal to:\n${JSON.stringify(e,null,4)}`);const r={...B,...t};function n(e){return r.classicTrim&&!e.trim()||!r.classicTrim&&(r.space&&" "===e||r.cr&&"\r"===e||r.lf&&"\n"===e||r.tab&&"\t"===e||r.nbsp&&" "===e)}let s,i;if(e.length){if(n(e[0]))for(let t=0,r=e.length;t<r;t++){if(!n(e[t])){s=t;break}if(t===e.length-1)return{res:"",ranges:[[0,e.length]]}}if(n(e[e.length-1]))for(let t=e.length;t--;)if(!n(e[t])){i=t+1;break}return s?i?{res:e.slice(s,i),ranges:[[0,s],[i,e.length]]}:{res:e.slice(s),ranges:[[0,s]]}:i?{res:e.slice(0,i),ranges:[[i,e.length]]}:{res:e,ranges:[]}}return{res:"",ranges:[]}}e.defaults={heads:["{{"],tails:["}}"]},e.remDup=function(e,t){const r=Object.prototype.hasOwnProperty;if(void 0===e)throw new Error("string-remove-duplicate-heads-tails: [THROW_ID_01] The input is missing!");if("string"!=typeof e)return e;if(t&&!g(t))throw new Error(`string-remove-duplicate-heads-tails: [THROW_ID_03] The given options are not a plain object but ${typeof t}!`);const n={...t};if(n&&r.call(n,"heads")){if(!h(n.heads).every((e=>"string"==typeof e||Array.isArray(e))))throw new Error("string-remove-duplicate-heads-tails: [THROW_ID_04] The opts.heads contains elements which are not string-type!");"string"==typeof n.heads&&(n.heads=h(n.heads))}if(n&&r.call(n,"tails")){if(!h(n.tails).every((e=>"string"==typeof e||Array.isArray(e))))throw new Error("string-remove-duplicate-heads-tails: [THROW_ID_05] The opts.tails contains elements which are not string-type!");"string"==typeof n.tails&&(n.tails=h(n.tails))}const s=H(e).res;if(0===s.length)return e;e=s;const i={heads:["{{"],tails:["}}"],...n};i.heads=i.heads.map((e=>e.trim())),i.tails=i.tails.map((e=>e.trim()));let o=!1,a=!1;const l=new R({limitToBeAddedWhitespace:!0}),u=new R({limitToBeAddedWhitespace:!0});let f=!0,c=!0,p="";function y(e,t){let r;if(!T(e,0,t.heads,{trimBeforeMatching:!0,cb:(e,t,n)=>(r=n,!0)}))return e;return T(e,r,t.tails,{trimBeforeMatching:!0,cb:(e,t,n)=>(r=n,!0)})?e.slice(r):e}for(;e!==y(e,i);)e=H(y(e,i)).res;function m(e,t){let r;if(!d(e,e.length-1,t.tails,{trimBeforeMatching:!0,cb:(e,t,n)=>(r=n,!0)})||!r)return e;return d(e,r,t.heads,{trimBeforeMatching:!0,cb:(e,t,n)=>(r=n,!0)})?e.slice(0,r+1):e}for(;e!==m(e,i);)e=H(m(e,i)).res;if(!(i.heads.length&&T(e,0,i.heads,{trimBeforeMatching:!0})&&i.tails.length&&d(e,e.length-1,i.tails,{trimBeforeMatching:!0})))return H(e).res;for(let t=0,r=e.length;t<r;t++)if(""===e[t].trim());else{let r;if(T(e,t,i.heads,{trimBeforeMatching:!0,cb:(e,t,n)=>(r=n,!0)})&&r){let n;c=!0,f&&(f=!0);T(e,r,i.tails,{trimBeforeMatching:!0,cb:(e,t,r)=>(n=r,!0)})&&l.push(t,n),u.current()&&o&&"tails"!==p&&l.push(u.current()),o||u.current()&&(l.push(u.current()),u.wipe()),u.push(t,r),p="heads",t=r-1;continue}if(T(e,t,i.tails,{trimBeforeMatching:!0,cb:(t,n,s)=>(r=Number.isInteger(s)?s:e.length,!0)})&&r){c=!0,f?("heads"===p&&u.wipe(),f=!1):u.push(t,r),p="tails",t=r-1;continue}f&&(f=!0),c&&!o?(o=!0,c=!1):c&&!a?(a=!0,f=!0,c=!1,"heads"===p&&u.wipe()):c&&a&&u.wipe()}return u.current()&&l.push(u.current()),l.current()?function(e,t,r){let n,s=0,i=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof e)throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(t&&!Array.isArray(t))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(r&&"function"!=typeof r)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);if(!t||!t.filter((e=>e)).length)return e;n=Array.isArray(t)&&Number.isInteger(t[0])&&Number.isInteger(t[1])?[Array.from(t)]:Array.from(t);const o=n.length;let a=0;n.filter((e=>e)).forEach(((e,t)=>{if(r&&(s=Math.floor(a/o*10),s!==i&&(i=s,r(s))),!Array.isArray(e))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${t}th element not an array: ${JSON.stringify(e,null,4)}, which is ${typeof e}`);if(!Number.isInteger(e[0])){if(!Number.isInteger(+e[0])||+e[0]<0)throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${t}th element, array ${JSON.stringify(e,null,0)}. Its first element is not an integer, string index, but ${typeof e[0]}, equal to: ${JSON.stringify(e[0],null,4)}.`);n[t][0]=+n[t][0]}if(!Number.isInteger(e[1])){if(!Number.isInteger(+e[1])||+e[1]<0)throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${t}th element, array ${JSON.stringify(e,null,0)}. Its second element is not an integer, string index, but ${typeof e[1]}, equal to: ${JSON.stringify(e[1],null,4)}.`);n[t][1]=+n[t][1]}a+=1}));const l=W(n,{progressFn:e=>{r&&(s=10+Math.floor(e/10),s!==i&&(i=s,r(s)))}}),g=Array.isArray(l)?l.length:0;if(g>0){const t=e.slice(l[g-1][1]);e=l.reduce(((t,n,o,a)=>(r&&(s=20+Math.floor(o/g*80),s!==i&&(i=s,r(s))),t+e.slice(0===o?0:a[o-1][1],a[o][0])+(a[o][2]||""))),""),e+=t}return e}(e,l.current()).trim():e.trim()},e.version="6.0.1",Object.defineProperty(e,"__esModule",{value:!0})}));
