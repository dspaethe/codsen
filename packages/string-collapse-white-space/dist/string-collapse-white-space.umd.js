/**
 * string-collapse-white-space
 * Efficient collapsing of white space with optional outer- and/or line-trimming and HTML tag recognition
 * Version: 5.2.29
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/string-collapse-white-space/
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).stringCollapseWhiteSpace=r()}(this,(function(){"use strict";function t(r){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(r)}function r(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function e(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function n(t){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?e(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(i,r))}))}return t}function i(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],n=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(e.push(a.value),!r||e.length!==r);n=!0);}catch(t){i=!0,o=t}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}return e}(t,r)||a(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||a(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,r){if(t){if("string"==typeof t)return s(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?s(t,r):void 0}}function s(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function c(t,r){if(!Array.isArray(t)||!t.length)return t;var e,i,o=n(n({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null}),r);if(o.strictlyTwoElementsInRangeArrays&&!t.filter((function(t){return t})).every((function(t,r){return 2===t.length||(e=r,i=t.length,!1)})))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ".concat(e,"th range (").concat(JSON.stringify(t[e],null,4),") has not two but ").concat(i," elements!"));if(!t.filter((function(t){return t})).every((function(t,r){return!(!Number.isInteger(t[0])||t[0]<0||!Number.isInteger(t[1])||t[1]<0)||(e=r,!1)})))throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ".concat(e,"th range (").concat(JSON.stringify(t[e],null,4),") does not consist of only natural numbers!"));var a=Math.pow(t.filter((function(t){return t})).length,2),s=0;return Array.from(t).filter((function(t){return t})).sort((function(t,r){return o.progressFn&&(s+=1,o.progressFn(Math.floor(100*s/a))),t[0]===r[0]?t[1]<r[1]?-1:t[1]>r[1]?1:0:t[0]<r[0]?-1:1}))}function u(r,e){function i(t){return"string"==typeof t}function a(r){return r&&"object"===t(r)&&!Array.isArray(r)}if(!Array.isArray(r)||!r.length)return null;var s,u={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};if(e){if(!a(e))throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n".concat(JSON.stringify(e,null,4)," (type ").concat(t(e),")"));if((s=n(n({},u),e)).progressFn&&a(s.progressFn)&&!Object.keys(s.progressFn).length)s.progressFn=null;else if(s.progressFn&&"function"!=typeof s.progressFn)throw new Error('ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "'.concat(t(s.progressFn),'", equal to ').concat(JSON.stringify(s.progressFn,null,4)));if(s.mergeType&&1!==s.mergeType&&2!==s.mergeType)if(i(s.mergeType)&&"1"===s.mergeType.trim())s.mergeType=1;else{if(!i(s.mergeType)||"2"!==s.mergeType.trim())throw new Error('ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(t(s.mergeType),'", equal to ').concat(JSON.stringify(s.mergeType,null,4)));s.mergeType=2}if("boolean"!=typeof s.joinRangesThatTouchEdges)throw new Error('ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "'.concat(t(s.joinRangesThatTouchEdges),'", equal to ').concat(JSON.stringify(s.joinRangesThatTouchEdges,null,4)))}else s=n({},u);for(var l,f,h,g=r.filter((function(t){return t})).map((function(t){return o(t)})).filter((function(t){return void 0!==t[2]||t[0]!==t[1]})),m=(l=s.progressFn?c(g,{progressFn:function(t){(h=Math.floor(t/5))!==f&&(f=h,s.progressFn(h))}}):c(g)).length-1,p=m;p>0;p--)s.progressFn&&(h=Math.floor(78*(1-p/m))+21)!==f&&h>f&&(f=h,s.progressFn(h)),(l[p][0]<=l[p-1][0]||!s.joinRangesThatTouchEdges&&l[p][0]<l[p-1][1]||s.joinRangesThatTouchEdges&&l[p][0]<=l[p-1][1])&&(l[p-1][0]=Math.min(l[p][0],l[p-1][0]),l[p-1][1]=Math.max(l[p][1],l[p-1][1]),void 0!==l[p][2]&&(l[p-1][0]>=l[p][0]||l[p-1][1]<=l[p][1])&&null!==l[p-1][2]&&(null===l[p][2]&&null!==l[p-1][2]?l[p-1][2]=null:void 0!==l[p-1][2]?2===s.mergeType&&l[p-1][0]===l[p][0]?l[p-1][2]=l[p][2]:l[p-1][2]+=l[p][2]:l[p-1][2]=l[p][2]),l.splice(p,1),p=l.length);return l.length?l:null}function l(t){return null!=t}function f(t){return"string"==typeof t}function h(r){return r&&"object"===t(r)&&!Array.isArray(r)}function g(t){return"string"==typeof t}function m(t,r,e,n,i,o){var a="function"==typeof e?e():e;if(r<0&&i&&"EOL"===a)return a;if(r>=t.length&&!i)return!1;for(var s=i?1:e.length,c=!1,u=!1,l=n.maxMismatches,f=r,h=!1,g=!1,m=!1;t[f];){var p=o(f);if(n.trimBeforeMatching&&""===t[f].trim()){if(!t[p]&&i&&"EOL"===e)return!0;f=o(f)}else if(!n.i&&n.trimCharsBeforeMatching.includes(t[f])||n.i&&n.trimCharsBeforeMatching.map((function(t){return t.toLowerCase()})).includes(t[f].toLowerCase())){if(i&&"EOL"===e&&!t[p])return!0;f=o(f)}else{var y=p>f?e[e.length-s]:e[s-1];if(!n.i&&t[f]===y||n.i&&t[f].toLowerCase()===y.toLowerCase()){if(h||(h=!0),u||(u=!0),s===e.length?g=!0:1===s&&(m=!0),(s-=1)<1)return f}else{if(!(n.maxMismatches&&l&&f))return!(0!==f||1!==s||n.lastMustMatch||!u)&&0;l-=1;for(var b=0;b<=l;b++){var d=p>f?e[e.length-s+1+b]:e[s-2-b],w=t[o(f)];if(d&&(!n.i&&t[f]===d||n.i&&t[f].toLowerCase()===d.toLowerCase())&&(!n.firstMustMatch||s!==e.length)){s-=2,h=!0;break}if(w&&d&&(!n.i&&w===d||n.i&&w.toLowerCase()===d.toLowerCase())&&(!n.firstMustMatch||s!==e.length)){s-=1,h=!0;break}if(void 0===d&&l>=0&&h&&(!n.firstMustMatch||g)&&(!n.lastMustMatch||m))return f}h||(c=f)}if(!1!==c&&c!==f&&(c=!1),s<1)return f;f=o(f)}}return s>0?!(!i||"EOL"!==a)||!!(n.maxMismatches>=s&&u)&&(c||0):void 0}function p(r,e,i,o){return function(r,e,i,o,a){var s={cb:void 0,i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],maxMismatches:0,firstMustMatch:!1,lastMustMatch:!1};if(h(a)&&Object.prototype.hasOwnProperty.call(a,"trimBeforeMatching")&&"boolean"!=typeof a.trimBeforeMatching)throw new Error("string-match-left-right/".concat(r,"(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!").concat(Array.isArray(a.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""));var c,u,l,f,p,y=n(n({},s),a);if(y.trimCharsBeforeMatching="string"==typeof(c=y.trimCharsBeforeMatching)?c.length>0?[c]:[]:c,y.trimCharsBeforeMatching=y.trimCharsBeforeMatching.map((function(t){return g(t)?t:String(t)})),!g(e))return!1;if(!e.length)return!1;if(!Number.isInteger(i)||i<0)throw new Error("string-match-left-right/".concat(r,"(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ").concat(t(i),", equal to:\n").concat(JSON.stringify(i,null,4)));if(g(o))u=[o];else if(Array.isArray(o))u=o;else if(o){if("function"!=typeof o)throw new Error("string-match-left-right/".concat(r,"(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ").concat(t(o),", equal to:\n").concat(JSON.stringify(o,null,4)));(u=[]).push(o)}else u=o;if(a&&!h(a))throw new Error("string-match-left-right/".concat(r,"(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type \"").concat(t(a),'", and equal to:\n').concat(JSON.stringify(a,null,4)));if(y.trimCharsBeforeMatching.some((function(t,r){return t.length>1&&(f=r,p=t,!0)})))throw new Error("string-match-left-right/".concat(r,"(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ").concat(f," is longer than 1 character, ").concat(p.length," (equals to ").concat(p,"). Please split it into separate characters and put into array as separate elements."));if(!u||!Array.isArray(u)||Array.isArray(u)&&!u.length||Array.isArray(u)&&1===u.length&&g(u[0])&&!u[0].trim()){if("function"==typeof y.cb){var b,d=i;if("matchLeftIncl"!==r&&"matchRight"!==r||(d+=1),"L"===r[5])for(var w=d;w--;){var v=e[w];if((!y.trimBeforeMatching||y.trimBeforeMatching&&void 0!==v&&v.trim())&&(!y.trimCharsBeforeMatching.length||void 0!==v&&!y.trimCharsBeforeMatching.includes(v))){b=w;break}}else if(r.startsWith("matchRight"))for(var T=d;T<e.length;T++){var O=e[T];if((!y.trimBeforeMatching||y.trimBeforeMatching&&O.trim())&&(!y.trimCharsBeforeMatching.length||!y.trimCharsBeforeMatching.includes(O))){b=T;break}}if(void 0===b)return!1;var M=e[b],I=b+1,E="";return I&&I>0&&(E=e.slice(0,I)),"L"===r[5]||b&&b>0&&(E=e.slice(b)),y.cb(M,E,b)}var C="";throw a||(C=" More so, the whole options object, the fourth input argument, is missing!"),new Error("string-match-left-right/".concat(r,'(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!').concat(C))}for(var _=0,A=u.length;_<A;_++){l="function"==typeof u[_];var j=u[_],S=void 0,L=void 0,R="",D=i;"matchRight"===r?D+=1:"matchLeft"===r&&(D-=1);var N=m(e,D,j,y,l,(function(t){return"L"===r[5]?t-1:t+1}));if(N&&l&&"function"==typeof j&&"EOL"===j())return!(!j()||y.cb&&!y.cb(S,R,L))&&j();if(Number.isInteger(N)&&(L=r.startsWith("matchLeft")?N-1:N+1,R="L"===r[5]?e.slice(0,N):e.slice(L)),L<0&&(L=void 0),e[L]&&(S=e[L]),Number.isInteger(N)&&(!y.cb||y.cb(S,R,L)))return j}return!1}("matchLeftIncl",r,e,i,o)}return function(r,e){function o(t,r,e){return t.charCodeAt(0)>=r&&t.charCodeAt(0)<=e}function a(t){return"string"==typeof t&&("<"===t||!t.trim())}if("string"!=typeof r)throw new Error("string-collapse-white-space/collapse(): [THROW_ID_01] The input is not string but ".concat(t(r),", equal to: ").concat(JSON.stringify(r,null,4)));if(e&&"object"!==t(e))throw new Error("string-collapse-white-space/collapse(): [THROW_ID_02] The opts is not a plain object but ".concat(t(e),", equal to:\n").concat(JSON.stringify(e,null,4)));if(!r.length)return"";var s,c=[],h=n(n({},{trimStart:!0,trimEnd:!0,trimLines:!1,trimnbsp:!1,recogniseHTML:!0,removeEmptyLines:!1,returnRangesOnly:!1,limitConsecutiveEmptyLinesTo:0}),e);h.recogniseHTML&&(s=[]);var g,m=null,y=null,b=null,d=!1,w=!1,v=null,T=!1,O=!1,M={},I=!1,E=function(t){t.equalDoubleQuoteCombo=0,t.equalOnly=0,t.doubleQuoteOnly=0,t.spacesBetweenLetterChunks=0,t.linebreaks=0},C=!1;h.recogniseHTML&&E(M);for(var _=0,A=r.length;A--;){if("\n"===r[A]||"\r"===r[A]&&"\n"!==r[A+1]?_+=1:r[A].trim()&&(_=0)," "===r[A]?null===m&&(m=A):null!==m&&(A+1!==m&&c.push([A+1,m]),m=null),""===r[A].trim()&&(!h.trimnbsp&&" "!==r[A]||h.trimnbsp)){if(null===y&&(y=A),"\n"!==r[A]&&"\r"!==r[A]&&null===b&&(b=A+1),"\n"!==r[A]&&"\r"!==r[A]||(null!==b&&(h.trimLines&&c.push([A+1,b]),b=null),"\n"!==r[A-1]&&"\r"!==r[A-1]&&(b=A,d=!0)),"\n"===r[A]||"\r"===r[A]&&"\n"!==r[A+1]){var j=A+1,S=void 0;Number.isInteger(g)&&(S=g+1,h.removeEmptyLines&&void 0!==g&&""===r.slice(j,S).trim()&&_>h.limitConsecutiveEmptyLinesTo+1&&c.push([A+1,g+1])),g=A}}else null!==y&&(A+1!==y+1&&y===r.length-1&&h.trimEnd&&c.push([A+1,y+1]),y=null),null!==b&&(d&&h.trimLines&&(d=!1,b!==A+1&&c.push([A+1,b])),b=null);if(0===A&&(null!==y&&h.trimStart?c.push([0,y+1]):null!==m&&c.push([A+1,m+1])),h.recogniseHTML)if(""===r[A].trim()){if(w&&!O&&(O=!0),T&&!v&&(v=A+1),T&&void 0!==r[A-1]&&""!==r[A-1].trim()&&"<"!==r[A-1]&&"/"!==r[A-1]&&(T=!1,w=!1,s=[]),!I&&!C&&""===r[A].trim()&&"<"!==r[A-1]&&(void 0===r[A+1]||""!==r[A+1].trim()&&"/"!==r[A+1].trim()))if(void 0===r[A-1]||""!==r[A-1].trim()&&"<"!==r[A-1]&&"/"!==r[A-1])M.spacesBetweenLetterChunks+=1;else for(var L=A-1;L--;)if(""!==r[L].trim()){"<"===r[L]?I=!0:"/"!==r[L]&&(M.spacesBetweenLetterChunks+=A-L);break}}else"="===r[A]?(M.equalOnly+=1,'"'===r[A+1]&&(M.equalDoubleQuoteCombo+=1)):'"'===r[A]&&(M.doubleQuoteOnly+=1),C&&(C=!1),null!==v&&(s.push([A+1,v]),v=null),">"===r[A]?(E(M),C=!0,w?s=[]:(w=!0,void 0===r[A-1]||""!==r[A-1].trim()||v||(v=A)),O||(O=!0)):"<"===r[A]?(w=!1,I&&(I=!1),M.spacesBetweenLetterChunks>0&&0===M.equalDoubleQuoteCombo&&(T=!1,s=[]),T&&(s.length&&s.forEach((function(t){var r=i(t,2),e=r[0],n=r[1];return c.push([e,n])})),T=!1),E(M)):w&&"/"===r[A]?v=A:w&&!T&&(O&&o(r[A],97,122)?(O=!1,o(r[A],97,110)?("a"===r[A]&&("e"===r[A-1]&&p(r,A,["area","textarea"],{cb:a,i:!0})||"t"===r[A-1]&&p(r,A,["data","meta"],{cb:a,i:!0})||a(r[A-1]))||"b"===r[A]&&(p(r,A,["rb","sub"],{cb:a,i:!0})||a(r[A-1]))||"c"===r[A]&&p(r,A,"rtc",{cb:a,i:!0})||"d"===r[A]&&("a"===r[A-1]&&p(r,A,["head","thead"],{cb:a,i:!0})||p(r,A,["kbd","dd","embed","legend","td"],{cb:a,i:!0}))||"e"===r[A]&&(p(r,A,"source",{cb:a,i:!0})||"d"===r[A-1]&&p(r,A,["aside","code"],{cb:a,i:!0})||"l"===r[A-1]&&p(r,A,["table","article","title","style"],{cb:a,i:!0})||"m"===r[A-1]&&p(r,A,["iframe","time"],{cb:a,i:!0})||"r"===r[A-1]&&p(r,A,["pre","figure","picture"],{cb:a,i:!0})||"t"===r[A-1]&&p(r,A,["template","cite","blockquote"],{cb:a,i:!0})||p(r,A,"base",{cb:a,i:!0})||a(r[A-1]))||"g"===r[A]&&p(r,A,["img","strong","dialog","svg"],{cb:a,i:!0})||"h"===r[A]&&p(r,A,["th","math"],{cb:a,i:!0})||"i"===r[A]&&(p(r,A,["bdi","li"],{cb:a,i:!0})||a(r[A-1]))||"k"===r[A]&&p(r,A,["track","link","mark"],{cb:a,i:!0})||"l"===r[A]&&p(r,A,["html","ol","ul","dl","label","del","small","col"],{cb:a,i:!0})||"m"===r[A]&&p(r,A,["param","em","menuitem","form"],{cb:a,i:!0})||"n"===r[A]&&("o"===r[A-1]&&p(r,A,["section","caption","figcaption","option","button"],{cb:a,i:!0})||p(r,A,["span","keygen","dfn","main"],{cb:a,i:!0})))&&(T=!0):("o"===r[A]&&p(r,A,["bdo","video","audio"],{cb:a,i:!0})||"p"===r[A]&&(a(r[A-1])||"u"===r[A-1]&&p(r,A,["hgroup","colgroup","optgroup","sup"],{cb:a,i:!0})||p(r,A,["map","samp","rp"],{cb:a,i:!0}))||"q"===r[A]&&a(r[A-1])||"r"===r[A]&&("e"===r[A-1]&&p(r,A,["header","meter","footer"],{cb:a,i:!0})||p(r,A,["var","br","abbr","wbr","hr","tr"],{cb:a,i:!0}))||"s"===r[A]&&("s"===r[A-1]&&p(r,A,["address","progress"],{cb:a,i:!0})||p(r,A,["canvas","details","ins"],{cb:a,i:!0})||a(r[A-1]))||"t"===r[A]&&("c"===r[A-1]&&p(r,A,["object","select"],{cb:a,i:!0})||"o"===r[A-1]&&p(r,A,["slot","tfoot"],{cb:a,i:!0})||"p"===r[A-1]&&p(r,A,["script","noscript"],{cb:a,i:!0})||"u"===r[A-1]&&p(r,A,["input","output"],{cb:a,i:!0})||p(r,A,["fieldset","rt","datalist","dt"],{cb:a,i:!0}))||"u"===r[A]&&(a(r[A-1])||p(r,A,"menu",{cb:a,i:!0}))||"v"===r[A]&&p(r,A,["nav","div"],{cb:a,i:!0})||"y"===r[A]&&p(r,A,["ruby","body","tbody","summary"],{cb:a,i:!0}))&&(T=!0)):O&&o(r[A],49,54)?(O=!1,"h"!==r[A-1]||"<"!==r[A-2]&&""!==r[A-2].trim()||(T=!0)):"="!==r[A]&&'"'!==r[A]||(O=!1))}return h.returnRangesOnly?u(c):c.length?function(r,e,n){var i,o=0,a=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if(!f(r))throw new TypeError("ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ".concat(t(r),", equal to: ").concat(JSON.stringify(r,null,4)));if(e&&!Array.isArray(e))throw new TypeError("ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ".concat(t(e),", equal to: ").concat(JSON.stringify(e,null,4)));if(n&&"function"!=typeof n)throw new TypeError("ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ".concat(t(n),", equal to: ").concat(JSON.stringify(n,null,4)));if(!e||!e.filter((function(t){return t})).length)return r;var s=(i=Array.isArray(e)&&(Number.isInteger(e[0])&&e[0]>=0||/^\d*$/.test(e[0]))&&(Number.isInteger(e[1])&&e[1]>=0||/^\d*$/.test(e[1]))?[Array.from(e)]:Array.from(e)).length,c=0;i.filter((function(t){return t})).forEach((function(r,e){if(n&&(o=Math.floor(c/s*10))!==a&&(a=o,n(o)),!Array.isArray(r))throw new TypeError("ranges-apply: [THROW_ID_05] ranges array, second input arg., has ".concat(e,"th element not an array: ").concat(JSON.stringify(r,null,4),", which is ").concat(t(r)));if(!Number.isInteger(r[0])||r[0]<0){if(!/^\d*$/.test(r[0]))throw new TypeError("ranges-apply: [THROW_ID_06] ranges array, second input arg. has ".concat(e,"th element, array [").concat(r[0],",").concat(r[1],"]. That array has first element not an integer, but ").concat(t(r[0]),", equal to: ").concat(JSON.stringify(r[0],null,4),". Computer doesn't like this."));i[e][0]=Number.parseInt(i[e][0],10)}if(!Number.isInteger(r[1])){if(!/^\d*$/.test(r[1]))throw new TypeError("ranges-apply: [THROW_ID_07] ranges array, second input arg. has ".concat(e,"th element, array [").concat(r[0],",").concat(r[1],"]. That array has second element not an integer, but ").concat(t(r[1]),", equal to: ").concat(JSON.stringify(r[1],null,4),". Computer doesn't like this."));i[e][1]=Number.parseInt(i[e][1],10)}c+=1}));var h=u(i,{progressFn:function(t){n&&(o=10+Math.floor(t/10))!==a&&(a=o,n(o))}});if(!h)return r;var g=h.length;if(g>0){var m=r.slice(h[g-1][1]);r=h.reduce((function(t,e,i,s){n&&(o=20+Math.floor(i/g*80))!==a&&(a=o,n(o));var c=0===i?0:s[i-1][1],u=s[i][0];return t+r.slice(c,u)+(l(s[i][2])?s[i][2]:"")}),""),r+=m}return r}(r,c):r}}));
