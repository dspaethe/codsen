/**
 * string-find-heads-tails
 * Search for string pairs. A special case of string search algorithm.
 * Version: 3.14.44
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-find-heads-tails
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).stringFindHeadsTails=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1},n=function(t,e){if("string"!=typeof t)return!1;if(e&&"includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(t)}return/^[1-9]\d*(\.0+)?$/.test(t)},r="[object Object]";var i,o,a=Function.prototype,c=Object.prototype,s=a.toString,l=c.hasOwnProperty,u=s.call(Object),f=c.toString,h=(i=Object.getPrototypeOf,o=Object,function(t){return i(o(t))});var g=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||f.call(t)!=r||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=h(t);if(null===e)return!0;var n=l.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&s.call(n)==u},d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},y="[object AsyncFunction]",p="[object Function]",m="[object GeneratorFunction]",b="[object Null]",w="[object Proxy]",O="[object Undefined]",T="object"==typeof d&&d&&d.Object===Object&&d,I="object"==typeof self&&self&&self.Object===Object&&self,v=T||I||Function("return this")(),_=Object.prototype,W=_.hasOwnProperty,A=_.toString,x=v.Symbol,C=x?x.toStringTag:void 0;function S(t){return null==t?void 0===t?O:b:C&&C in Object(t)?function(t){var e=W.call(t,C),n=t[C];try{t[C]=void 0;var r=!0}catch(t){}var i=A.call(t);r&&(e?t[C]=n:delete t[C]);return i}(t):function(t){return A.call(t)}(t)}var E=function(t){if(!function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}(t))return!1;var e=S(t);return e==p||e==m||e==y||e==w};function j(t){return"string"==typeof t?t.length>0?[t]:[]:t}function H(t){if("string"==typeof t)return 0!==t.length&&(t.charCodeAt(0)>=55296&&t.charCodeAt(0)<=56319);if(void 0===t)return!1;throw new TypeError(`string-character-is-astral-surrogate/isHighSurrogate(): the input is not string but ${typeof t}`)}function D(t){if("string"==typeof t)return 0!==t.length&&(t.charCodeAt(0)>=56320&&t.charCodeAt(0)<=57343);if(void 0===t)return!1;throw new TypeError(`string-character-is-astral-surrogate/isLowSurrogate(): the input is not string but ${typeof t}`)}const R=Array.isArray;function $(t){return null!=t}function B(t){return"string"==typeof t}function M(t){return"string"==typeof t&&(t.charCodeAt(0)>=55296&&t.charCodeAt(0)<=57343)}function P(t,e,n,r,i){const o="function"==typeof n?n():n;if(e>=t.length&&i&&"EOL"===o)return o;if(!(e<=t.length)){if(r.relaxedApi)return!1;throw new Error(`string-match-left-right/marchForward(): [THROW_ID_102] second argument, fromIndexInclusive is ${e} beyond the input string length, ${t.length}.`)}{let a=i?1:n.length;for(let i=e,o=t.length;i<o;i++){let e=t[i];if(H(t[i])&&D(t[i+1])&&(e=t[i]+t[i+1]),D(t[i])&&H(t[i-1])&&(e=t[i-1]+t[i]),r.trimBeforeMatching&&""===t[i].trim())continue;if(!r.i&&r.trimCharsBeforeMatching.includes(e)||r.i&&r.trimCharsBeforeMatching.map(t=>t.toLowerCase()).includes(e.toLowerCase())){2===e.length&&(i+=1);continue}let o=n[n.length-a];if(H(o)&&$(n[n.length-a+1])&&D(n[n.length-a+1])&&(o=n[n.length-a]+n[n.length-a+1]),!(!r.i&&e===o||r.i&&e.toLowerCase()===o.toLowerCase()))return!1;if((a-=e.length)<1){let r=i-n.length+e.length;return r>=0&&D(t[r])&&$(t[r-1])&&H(t[r-1])&&(r-=1),r>=0?r:0}2===e.length&&H(t[i])&&(i+=1)}if(a>0)return!(!i||"EOL"!==o)}}function L(t,e,n,r,i){const o="function"==typeof n?n():n;if(e<0&&i&&"EOL"===o)return o;if(e>=t.length){if(r.relaxedApi)return!1;throw new Error(`string-match-left-right/marchBackward(): [THROW_ID_203] second argument, starting index, should not be beyond the last character of the input string! Currently the first argument's last character's index is ${t.length} but the second argument is beyond it:\n${JSON.stringify(e,null,4)}`)}let a=i?1:n.length;for(let o=e+1;o--;){if(r.trimBeforeMatching&&""===t[o].trim()){if(0===o&&i&&"EOL"===n)return!0;continue}let e=t[o];if(D(t[o])&&H(t[o-1])?e=t[o-1]+t[o]:H(t[o])&&D(t[o+1])&&(e=t[o]+t[o+1]),!r.i&&r.trimCharsBeforeMatching.includes(e)||r.i&&r.trimCharsBeforeMatching.map(t=>t.toLowerCase()).includes(e.toLowerCase())){if(2===e.length&&(o-=1),i&&"EOL"===n&&0===o)return!0;continue}let c=n[a-1];if(D(c)&&(c=`${n[a-2]}${n[a-1]}`,a-=1,o-=1),!(!r.i&&e===c||r.i&&e.toLowerCase()===c.toLowerCase()))return!1;if((a-=1)<1)return o>=0?o:0}return a>0?!(!i||"EOL"!==o):void 0}function N(t,n,r,i){return function(t,n,r,i,o){const a=Object.assign({},{i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],relaxedApi:!1},o);let c,s,l,u;if(a.trimCharsBeforeMatching=j(a.trimCharsBeforeMatching),a.trimCharsBeforeMatching=a.trimCharsBeforeMatching.map(t=>B(t)?t:String(t)),a.trimCharsBeforeMatching.some((t,e)=>t.length>1&&!M(t)&&(c=e,s=t,!0)))throw new Error(`string-match-left-right/${t}(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ${c} is longer than 1 character, ${s.length} (equals to ${s}). Please split it into separate characters and put into array as separate elements.`);if(!B(n)){if(a.relaxedApi)return!1;throw new Error(`string-match-left-right/${t}(): [THROW_ID_01] the first argument should be a string. Currently it's of a type: ${typeof n}, equal to:\n${JSON.stringify(n,null,4)}`)}if(0===n.length){if(a.relaxedApi)return!1;throw new Error(`string-match-left-right/${t}(): [THROW_ID_02] the first argument should be a non-empty string. Currently it's empty!`)}if(!e(r,{includeZero:!0})){if(a.relaxedApi)return!1;throw new Error(`string-match-left-right/${t}(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ${typeof r}, equal to:\n${JSON.stringify(r,null,4)}`)}if(B(i))l=[i];else if(R(i))l=i;else if($(i)){if(!E(i))throw new Error(`string-match-left-right/${t}(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ${typeof i}, equal to:\n${JSON.stringify(i,null,4)}`);(l=[]).push(i)}else l=i;if($(o)&&!g(o))throw new Error(`string-match-left-right/${t}(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type "${typeof o}", and equal to:\n${JSON.stringify(o,null,4)}`);if(!$(l)||!R(l)||R(l)&&!l.length||R(l)&&1===l.length&&B(l[0])&&0===l[0].trim().length){if("function"==typeof a.cb){let e,i=r;if("matchRight"===t&&H(n[r])&&D(n[r+1])&&(i+=1),"matchLeftIncl"!==t&&"matchRight"!==t||(i+=1),t.startsWith("matchLeft"))for(let t=i;t--;){if(D(n[t])&&H(n[t-1]))continue;let r=n[t];if(H(n[t])&&D(n[t+1])&&(r=n[t]+n[t+1]),(!a.trimBeforeMatching||a.trimBeforeMatching&&void 0!==r&&""!==r.trim())&&(0===a.trimCharsBeforeMatching.length||void 0!==r&&!a.trimCharsBeforeMatching.includes(r))){e=t;break}D(n[t-1])&&H(n[t-2])&&(t-=1)}else if(t.startsWith("matchRight"))for(let t=i;t<n.length;t++){let r=n[t];if(H(n[t])&&D(n[t+1])&&(r=n[t]+n[t+1]),(!a.trimBeforeMatching||a.trimBeforeMatching&&""!==r.trim())&&(0===a.trimCharsBeforeMatching.length||!a.trimCharsBeforeMatching.includes(r))){e=t;break}H(n[t])&&D(n[t+1])&&(t+=1)}if(void 0===e)return!1;let o=n[e];H(n[e])&&D(n[e+1])&&(o=n[e]+n[e+1]),D(n[e])&&H(n[e-1])&&(o=n[e-1]+n[e],e-=1);let c,s=e+1;return H(n[e])&&D(n[e+1])&&(s+=1),s&&s>0&&(c=n.slice(0,s)),t.startsWith("matchLeft")?a.cb(o,c,e):(e&&e>0&&(c=n.slice(e)),a.cb(o,c,e))}let e="";throw $(o)||(e=" More so, the whole options object, the fourth input argument, is missing!"),new Error(`string-match-left-right/${t}(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!${e}`)}if(t.startsWith("matchLeft")){for(let e=0,i=l.length;e<i;e++){u="function"==typeof l[e];const i=l[e];let o=r;"matchLeft"===t&&(M(n[e-1])&&M(n[e-2])?o-=2:o-=1);const c=L(n,o,i,a,u);if(c&&u&&"function"==typeof i&&"EOL"===i())return!(!i()||a.cb&&!a.cb(f,h,s))&&i();let s,f,h="";if($(c)&&c>0&&(f=n[s=c-1],h=n.slice(0,c)),D(n[s])&&$(n[s-1])&&H(n[s-1])&&(f=n[(s-=1)-1]+n[s]),H(n[s])&&$(n[s+1])&&D(n[s+1])&&(f=n[s]+n[s+1],h=n.slice(0,s+2)),!1!==c&&(!a.cb||a.cb(f,h,s)))return i}return!1}for(let e=0,i=l.length;e<i;e++){u="function"==typeof l[e];const i=l[e];let o=r+("matchRight"===t?1:0);"matchRight"===t&&H(n[o-1])&&D(n[o])&&(o+=1);const c=P(n,o,i,a,u);if(c&&u&&"function"==typeof i&&"EOL"===i()){let t,e,n;return!(!i()||a.cb&&!a.cb(t,e,n))&&i()}let s,f,h;if($(c)&&$(n[c+i.length-1])&&(f=n[s=c+i.length],H(n[s])&&D(n[s+1])&&(f=n[s]+n[s+1])),$(s)&&s>=0&&(h=n.slice(s)),!1!==c&&(!a.cb||a.cb(f,h,s)))return i}return!1}("matchRightIncl",t,n,r,i)}var q=1/0,Z=9007199254740991,k=17976931348623157e292,J=NaN,F="[object Arguments]",G="[object Function]",V="[object GeneratorFunction]",z="[object String]",U="[object Symbol]",K=/^\s+|\s+$/g,Q=/^[-+]0x[0-9a-f]+$/i,X=/^0b[01]+$/i,Y=/^0o[0-7]+$/i,tt=/^(?:0|[1-9]\d*)$/,et=parseInt;function nt(t){return t!=t}function rt(t,e){return function(t,e){for(var n=-1,r=t?t.length:0,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}(e,(function(e){return t[e]}))}var it=Object.prototype,ot=it.hasOwnProperty,at=it.toString,ct=it.propertyIsEnumerable,st=function(t,e){return function(n){return t(e(n))}}(Object.keys,Object),lt=Math.max;function ut(t,e){var n=gt(t)||function(t){return function(t){return pt(t)&&dt(t)}(t)&&ot.call(t,"callee")&&(!ct.call(t,"callee")||at.call(t)==F)}(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,i=!!r;for(var o in t)!e&&!ot.call(t,o)||i&&("length"==o||ht(o,r))||n.push(o);return n}function ft(t){if(n=(e=t)&&e.constructor,r="function"==typeof n&&n.prototype||it,e!==r)return st(t);var e,n,r,i=[];for(var o in Object(t))ot.call(t,o)&&"constructor"!=o&&i.push(o);return i}function ht(t,e){return!!(e=null==e?Z:e)&&("number"==typeof t||tt.test(t))&&t>-1&&t%1==0&&t<e}var gt=Array.isArray;function dt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=Z}(t.length)&&!function(t){var e=yt(t)?at.call(t):"";return e==G||e==V}(t)}function yt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function pt(t){return!!t&&"object"==typeof t}var mt=function(t,e,n,r){var i;t=dt(t)?t:(i=t)?rt(i,function(t){return dt(t)?ut(t):ft(t)}(i)):[],n=n&&!r?function(t){var e=function(t){if(!t)return 0===t?t:0;if((t=function(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||pt(t)&&at.call(t)==U}(t))return J;if(yt(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=yt(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(K,"");var n=X.test(t);return n||Y.test(t)?et(t.slice(2),n?2:8):Q.test(t)?J:+t}(t))===q||t===-q){return(t<0?-1:1)*k}return t==t?t:0}(t),n=e%1;return e==e?n?e-n:e:0}(n):0;var o=t.length;return n<0&&(n=lt(o+n,0)),function(t){return"string"==typeof t||!gt(t)&&pt(t)&&at.call(t)==z}(t)?n<=o&&t.indexOf(e,n)>-1:!!o&&function(t,e,n){if(e!=e)return function(t,e,n,r){for(var i=t.length,o=n+(r?1:-1);r?o--:++o<i;)if(e(t[o],o,t))return o;return-1}(t,nt,n);for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}(t,e,n)>-1};function bt(t){return"string"==typeof t}var wt=Array.isArray;function Ot(t){throw new Error("string-find-heads-tails: [THROW_ID_01*] Missing ".concat(t,"th parameter!"))}return function(r,i,o,a){if(null!=a){if(!g(a))throw new TypeError("string-find-heads-tails: [THROW_ID_13] the fourth input argument, Optional Options Object, must be a plain object! Currently it's: ".concat(t(a),", equal to: ").concat(a));n(a.fromIndex,{includeZero:!0})&&(a.fromIndex=Number(a.fromIndex))}var c,s,l={fromIndex:0,throwWhenSomethingWrongIsDetected:!0,allowWholeValueToBeOnlyHeadsOrTails:!0,source:"string-find-heads-tails",matchHeadsAndTailsStrictlyInPairsByTheirOrder:!1,relaxedAPI:!1};if((a=Object.assign({},l,a)).relaxedAPI||(void 0===r&&Ot(1),void 0===i&&Ot(2),void 0===o&&Ot(3)),!bt(r)||0===r.length){if(a.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_02] the first input argument, input string, must be a non-zero-length string! Currently it's: ".concat(t(r),", equal to: ").concat(r))}if(!bt(i)&&!wt(i)){if(a.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_03] the second input argument, heads, must be either a string or an array of strings! Currently it's: ".concat(t(i),", equal to:\n").concat(JSON.stringify(i,null,4)))}if(bt(i)){if(0===i.length){if(a.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_04] the second input argument, heads, must be a non-empty string! Currently it's empty.")}i=j(i)}else if(wt(i)){if(0===i.length){if(a.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_05] the second input argument, heads, must be a non-empty array and contain at least one string! Currently it's empty.")}if(i.every((function(t,e){return c=t,s=e,bt(t)}))){if(!i.every((function(t,e){return s=e,bt(t)&&t.length>0&&""!==t.trim()}))){if(!a.relaxedAPI)throw new TypeError("string-find-heads-tails: [THROW_ID_07] the second input argument, heads, should not contain empty strings! For example, there's one detected at index ".concat(s," of heads array:\n").concat(JSON.stringify(i,null,4),"."));if(0===(i=i.filter((function(t){return bt(t)&&t.length>0}))).length)return[]}}else{if(!a.relaxedAPI)throw new TypeError("string-find-heads-tails: [THROW_ID_06] the second input argument, heads, contains non-string elements! For example, element at ".concat(s,"th index is ").concat(t(c),", equal to:\n").concat(JSON.stringify(c,null,4),". Whole heads array looks like:\n").concat(JSON.stringify(i,null,4)));if(0===(i=i.filter((function(t){return bt(t)&&t.length>0}))).length)return[]}}if(!bt(o)&&!wt(o)){if(a.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_08] the third input argument, tails, must be either a string or an array of strings! Currently it's: ".concat(t(o),", equal to:\n").concat(JSON.stringify(o,null,4)))}if(bt(o)){if(0===o.length){if(a.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_09] the third input argument, tails, must be a non-empty string! Currently it's empty.")}o=j(o)}else if(wt(o)){if(0===o.length){if(a.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_10] the third input argument, tails, must be a non-empty array and contain at least one string! Currently it's empty.")}if(o.every((function(t,e){return c=t,s=e,bt(t)}))){if(!o.every((function(t,e){return s=e,bt(t)&&t.length>0&&""!==t.trim()}))){if(!a.relaxedAPI)throw new TypeError("string-find-heads-tails: [THROW_ID_12] the third input argument, tails, should not contain empty strings! For example, there's one detected at index ".concat(s,". Whole tails array is equal to:\n").concat(JSON.stringify(o,null,4)));if(0===(o=o.filter((function(t){return bt(t)&&t.length>0}))).length)return[]}}else{if(!a.relaxedAPI)throw new TypeError("string-find-heads-tails: [THROW_ID_11] the third input argument, tails, contains non-string elements! For example, element at ".concat(s,"th index is ").concat(t(c),", equal to:\n").concat(JSON.stringify(c,null,4),". Whole tails array is equal to:\n").concat(JSON.stringify(o,null,4)));if(0===(o=o.filter((function(t){return bt(t)&&t.length>0}))).length)return[]}}var u=a.source===l.source;if(a.throwWhenSomethingWrongIsDetected&&!a.allowWholeValueToBeOnlyHeadsOrTails){if(mt(j(i),r))throw new Error("".concat(a.source).concat(u?": [THROW_ID_16]":""," the whole input string can't be equal to ").concat(bt(i)?"":"one of ","heads (").concat(r,")!"));if(mt(j(o),r))throw new Error("".concat(a.source).concat(u?": [THROW_ID_17]":""," the whole input string can't be equal to ").concat(bt(o)?"":"one of ","tails (").concat(r,")!"))}if(!e(a.fromIndex,{includeZero:!0})&&!n(a.fromIndex,{includeZero:!0}))throw new TypeError("".concat(a.source).concat(u?": [THROW_ID_18]":""," the fourth input argument must be a natural number! Currently it's: ").concat(a.fromIndex));for(var f,h=i.concat(o).map((function(t){return t.charAt(0)})).reduce((function(t,e){return e.charCodeAt(0)>t[1]?[t[0],e.charCodeAt(0)]:e.charCodeAt(0)<t[0]?[e.charCodeAt(0),t[1]]:t}),[i[0].charCodeAt(0),i[0].charCodeAt(0)]),d=[],y=!1,p={},m=!1,b=a.fromIndex,w=r.length;b<w;b++){var O=r[b].charCodeAt(0);if(O<=h[1]&&O>=h[0]){var T=N(r,b,i);if(T&&a.matchHeadsAndTailsStrictlyInPairsByTheirOrder)for(var I=i.length;I--;)if(i[I]===T){f=I;break}if(T){if(!y){(p={}).headsStartAt=b,p.headsEndAt=b+T.length,y=!0,b+=T.length-1,m&&(m=!1);continue}if(a.throwWhenSomethingWrongIsDetected)throw new TypeError("".concat(a.source).concat(u?": [THROW_ID_19]":"",' When processing "').concat(r,'", we found heads (').concat(r.slice(b,b+T.length),') starting at character with index number "').concat(b,'" and there was another set of heads before it! Generally speaking, there should be "heads-tails-heads-tails", not "heads-heads-tails"!\nWe\'re talking about the area of the code:\n\n\n--------------------------------------starts\n').concat(r.slice(Math.max(b-200,0),b),"\n      ","[".concat(33,"m-------\x3e[",39,"m")," ","[".concat(31,"m",r.slice(b,b+T.length),"[",39,"m")," [",33,"m","<-------","[",39,"m\n").concat(r.slice(b+T.length,Math.min(w,b+200)),"\n--------------------------------------ends\n\n\nTo turn off this error being thrown, set opts.throwWhenSomethingWrongIsDetected to Boolean false."))}var v=N(r,b,o);if(y&&v&&a.matchHeadsAndTailsStrictlyInPairsByTheirOrder&&void 0!==f&&void 0!==o[f]&&o[f]!==v){for(var _=void 0,W=o.length;W--;)if(o[W]===v){_=W;break}throw new TypeError("".concat(a.source).concat(u?": [THROW_ID_20]":"",' When processing "').concat(r,'", we had "opts.matchHeadsAndTailsStrictlyInPairsByTheirOrder" on. We found heads (').concat(i[f],") but the tails the followed it were not of the same index, ").concat(f," (").concat(o[f],") but ").concat(_," (").concat(v,")."))}if(v){if(y){p.tailsStartAt=b,p.tailsEndAt=b+v.length,d.push(p),p={},y=!1,b+=v.length-1;continue}a.throwWhenSomethingWrongIsDetected&&(m="".concat(a.source).concat(u?": [THROW_ID_21]":"",' When processing "').concat(r,'", we found tails (').concat(r.slice(b,b+v.length),') starting at character with index number "').concat(b,"\" but there were no heads preceding it. That's very naughty!"))}}if(a.throwWhenSomethingWrongIsDetected&&b===w-1){if(0!==Object.keys(p).length)throw new TypeError("".concat(a.source).concat(u?": [THROW_ID_22]":"",' When processing "').concat(r,"\", we reached the end of the string and yet didn't find any tails (").concat(JSON.stringify(o,null,4),") to match the last detected heads (").concat(r.slice(p.headsStartAt,p.headsEndAt),")!"));if(m)throw new Error(m)}}return d}}));
