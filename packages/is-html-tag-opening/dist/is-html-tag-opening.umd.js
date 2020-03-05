/**
 * is-html-tag-opening
 * Is given opening bracket a beginning of a tag?
 * Version: 1.6.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/is-html-tag-opening
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).isHtmlTagOpening=e()}(this,(function(){"use strict";function t(t){if("string"==typeof t)return 0!==t.length&&(t.charCodeAt(0)>=55296&&t.charCodeAt(0)<=56319);if(void 0===t)return!1;throw new TypeError(`string-character-is-astral-surrogate/isHighSurrogate(): the input is not string but ${typeof t}`)}function e(t){if("string"==typeof t)return 0!==t.length&&(t.charCodeAt(0)>=56320&&t.charCodeAt(0)<=57343);if(void 0===t)return!1;throw new TypeError(`string-character-is-astral-surrogate/isLowSurrogate(): the input is not string but ${typeof t}`)}function r(t){return null!=t}function n(t){return"string"==typeof t&&(t.charCodeAt(0)>=55296&&t.charCodeAt(0)<=57343)}function i(n,i,o,a,s){const c="function"==typeof o?o():o;if(i>=n.length&&s&&"EOL"===c)return c;if(!(i<=n.length)){if(a.relaxedApi)return!1;throw new Error(`string-match-left-right/marchForward(): [THROW_ID_102] second argument, fromIndexInclusive is ${i} beyond the input string length, ${n.length}.`)}{let h=s?1:o.length;for(let s=i,c=n.length;s<c;s++){let i=n[s];if(t(n[s])&&e(n[s+1])&&(i=n[s]+n[s+1]),e(n[s])&&t(n[s-1])&&(i=n[s-1]+n[s]),a.trimBeforeMatching&&""===n[s].trim())continue;if(!a.i&&a.trimCharsBeforeMatching.includes(i)||a.i&&a.trimCharsBeforeMatching.map(t=>t.toLowerCase()).includes(i.toLowerCase())){2===i.length&&(s+=1);continue}let c=o[o.length-h];if(t(c)&&r(o[o.length-h+1])&&e(o[o.length-h+1])&&(c=o[o.length-h]+o[o.length-h+1]),!(!a.i&&i===c||a.i&&i.toLowerCase()===c.toLowerCase()))return!1;if(h-=i.length,h<1){let a=s-o.length+i.length;return a>=0&&e(n[a])&&r(n[a-1])&&t(n[a-1])&&(a-=1),a>=0?a:0}2===i.length&&t(n[s])&&(s+=1)}if(h>0)return!(!s||"EOL"!==c)}}function o(r,n,i,o,a){const s="function"==typeof i?i():i;if(n<0&&a&&"EOL"===s)return s;if(n>=r.length){if(o.relaxedApi)return!1;throw new Error(`string-match-left-right/marchBackward(): [THROW_ID_203] second argument, starting index, should not be beyond the last character of the input string! Currently the first argument's last character's index is ${r.length} but the second argument is beyond it:\n${JSON.stringify(n,null,4)}`)}let c=a?1:i.length;for(let s=n+1;s--;){if(o.trimBeforeMatching&&""===r[s].trim()){if(0===s&&a&&"EOL"===i)return!0;continue}let n=r[s];if(e(r[s])&&t(r[s-1])?n=r[s-1]+r[s]:t(r[s])&&e(r[s+1])&&(n=r[s]+r[s+1]),!o.i&&o.trimCharsBeforeMatching.includes(n)||o.i&&o.trimCharsBeforeMatching.map(t=>t.toLowerCase()).includes(n.toLowerCase())){if(2===n.length&&(s-=1),a&&"EOL"===i&&0===s)return!0;continue}let h=i[c-1];if(e(h)&&(h=`${i[c-2]}${i[c-1]}`,c-=1,s-=1),!(!o.i&&n===h||o.i&&n.toLowerCase()===h.toLowerCase()))return!1;if(c-=1,c<1)return s>=0?s:0}return c>0?!(!a||"EOL"!==s):void 0}function a(a,s,c,h,g){if("object"==typeof g&&null!==g&&Object.prototype.hasOwnProperty.call(g,"trimBeforeMatching")&&"boolean"!=typeof g.trimBeforeMatching)throw new Error(`string-match-left-right/${a}(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!${Array.isArray(g.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""}`);const l=Object.assign({},{i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],relaxedApi:!1},g);var f;let u,p,m,d;if(l.trimCharsBeforeMatching="string"==typeof(f=l.trimCharsBeforeMatching)?f.length>0?[f]:[]:f,l.trimCharsBeforeMatching=l.trimCharsBeforeMatching.map(t=>"string"==typeof t?t:String(t)),l.trimCharsBeforeMatching.some((t,e)=>t.length>1&&!n(t)&&(u=e,p=t,!0)))throw new Error(`string-match-left-right/${a}(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ${u} is longer than 1 character, ${p.length} (equals to ${p}). Please split it into separate characters and put into array as separate elements.`);if("string"!=typeof s){if(l.relaxedApi)return!1;throw new Error(`string-match-left-right/${a}(): [THROW_ID_01] the first argument should be a string. Currently it's of a type: ${typeof s}, equal to:\n${JSON.stringify(s,null,4)}`)}if(0===s.length){if(l.relaxedApi)return!1;throw new Error(`string-match-left-right/${a}(): [THROW_ID_02] the first argument should be a non-empty string. Currently it's empty!`)}if(!(Number.isInteger(c)&&c>=0)){if(l.relaxedApi)return!1;throw new Error(`string-match-left-right/${a}(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ${typeof c}, equal to:\n${JSON.stringify(c,null,4)}`)}if("string"==typeof h)m=[h];else if(Array.isArray(h))m=h;else if(r(h)){if("function"!=typeof h)throw new Error(`string-match-left-right/${a}(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ${typeof h}, equal to:\n${JSON.stringify(h,null,4)}`);m=[],m.push(h)}else m=h;if(r(g)&&"object"!=typeof g)throw new Error(`string-match-left-right/${a}(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type "${typeof g}", and equal to:\n${JSON.stringify(g,null,4)}`);if(!r(m)||!Array.isArray(m)||Array.isArray(m)&&!m.length||Array.isArray(m)&&1===m.length&&"string"==typeof m[0]&&0===m[0].trim().length){if("function"==typeof l.cb){let r,n=c;if("matchRight"===a&&t(s[c])&&e(s[c+1])&&(n+=1),"matchLeftIncl"!==a&&"matchRight"!==a||(n+=1),a.startsWith("matchLeft"))for(let i=n;i--;){if(e(s[i])&&t(s[i-1]))continue;let n=s[i];if(t(s[i])&&e(s[i+1])&&(n=s[i]+s[i+1]),(!l.trimBeforeMatching||l.trimBeforeMatching&&void 0!==n&&""!==n.trim())&&(0===l.trimCharsBeforeMatching.length||void 0!==n&&!l.trimCharsBeforeMatching.includes(n))){r=i;break}e(s[i-1])&&t(s[i-2])&&(i-=1)}else if(a.startsWith("matchRight"))for(let i=n;i<s.length;i++){let n=s[i];if(t(s[i])&&e(s[i+1])&&(n=s[i]+s[i+1]),(!l.trimBeforeMatching||l.trimBeforeMatching&&""!==n.trim())&&(0===l.trimCharsBeforeMatching.length||!l.trimCharsBeforeMatching.includes(n))){r=i;break}t(s[i])&&e(s[i+1])&&(i+=1)}if(void 0===r)return!1;let i=s[r];t(s[r])&&e(s[r+1])&&(i=s[r]+s[r+1]),e(s[r])&&t(s[r-1])&&(i=s[r-1]+s[r],r-=1);let o,h=r+1;return t(s[r])&&e(s[r+1])&&(h+=1),h&&h>0&&(o=s.slice(0,h)),a.startsWith("matchLeft")?l.cb(i,o,r):(r&&r>0&&(o=s.slice(r)),l.cb(i,o,r))}let n="";throw r(g)||(n=" More so, the whole options object, the fourth input argument, is missing!"),new Error(`string-match-left-right/${a}(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!${n}`)}if(a.startsWith("matchLeft")){for(let i=0,h=m.length;i<h;i++){d="function"==typeof m[i];const h=m[i];let g,f,u="",p=c;"matchLeft"===a&&(n(s[i-1])&&n(s[i-2])?p-=2:p-=1);const y=o(s,p,h,l,d);if(y&&d&&"function"==typeof h&&"EOL"===h())return!(!h()||l.cb&&!l.cb(g,u,f))&&h();if(r(y)&&y>0&&(f=y-1,g=s[f],u=s.slice(0,y)),e(s[f])&&r(s[f-1])&&t(s[f-1])&&(f-=1,g=s[f-1]+s[f]),t(s[f])&&r(s[f+1])&&e(s[f+1])&&(g=s[f]+s[f+1],u=s.slice(0,f+2)),!1!==y&&(!l.cb||l.cb(g,u,f)))return h}return!1}for(let n=0,o=m.length;n<o;n++){d="function"==typeof m[n];const o=m[n];let h=c+("matchRight"===a?1:0);"matchRight"===a&&t(s[h-1])&&e(s[h])&&(h+=1);const g=i(s,h,o,l,d);if(g&&d&&"function"==typeof o&&"EOL"===o()){let t,e,r;return!(!o()||l.cb&&!l.cb(t,e,r))&&o()}let f,u,p;if(r(g)&&r(s[g+o.length-1])&&(f=g+o.length,u=s[f],t(s[f])&&e(s[f+1])&&(u=s[f]+s[f+1])),r(f)&&f>=0&&(p=s.slice(f)),!1!==g&&(!l.cb||l.cb(u,p,f)))return o}return!1}function s(t,e,r,n){return a("matchRightIncl",t,e,r,n)}function c(t,e,r,n){return a("matchRight",t,e,r,n)}var h=["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","big","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","doctype","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h1 - h6","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xml"];function g(t){return"string"==typeof t}function l(t){return void 0===t||t.toUpperCase()===t.toLowerCase()&&!"0123456789".includes(t)}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0,n={allowCustomTagNames:!1,skipOpeningBracket:!1},i=Object.assign({},n,r),o="[\\\\ \\t\\r\\n/]*",a="._a-z0-9·À-ÖØ-öø-ͽͿ-῿‌-‍‿-⁀⁰-￿",f=new RegExp("^".concat(i.skipOpeningBracket?"":"<").concat(o,"\\w+").concat(o,">"),"g"),u=new RegExp("^".concat(i.skipOpeningBracket?"":"<").concat(o,"[").concat(a,"]+[-").concat(a,"]*").concat(o,">"),"g"),p=new RegExp("^".concat(i.skipOpeningBracket?"":"<","\\s*\\w+\\s+\\w+(?:-\\w+)?\\s*=\\s*['\"\\w]"),"g"),m=new RegExp("^".concat(i.skipOpeningBracket?"":"<","\\s*\\w+\\s+[").concat(a,"]+[-").concat(a,"]*(?:-\\w+)?\\s*=\\s*['\"\\w]")),d=new RegExp("^".concat(i.skipOpeningBracket?"":"<","\\s*\\/?\\s*\\w+\\s*\\/?\\s*>"),"g"),y=new RegExp("^".concat(i.skipOpeningBracket?"":"<","\\s*\\/?\\s*[").concat(a,"]+[-").concat(a,"]*\\s*\\/?\\s*>"),"g"),b=new RegExp("^".concat(i.skipOpeningBracket?"":"<").concat(o,"\\w+(?:\\s*\\w+)*\\s*\\w+=['\"]"),"g"),w=new RegExp("^".concat(i.skipOpeningBracket?"":"<").concat(o,"[").concat(a,"]+[-").concat(a,"]*(?:\\s*\\w+)*\\s*\\w+=['\"]"),"g"),C=e?t.slice(e):t,B=!1,O={cb:l,i:!0,trimCharsBeforeMatching:["/","\\","!"," ","\t","\n","\r"]};i.allowCustomTagNames?u.test(C)?B=!0:m.test(C)?B=!0:y.test(C)?B=!0:w.test(C)&&(B=!0):s(t,e,h,{cb:l,i:!0,trimCharsBeforeMatching:["<","/","\\","!"," ","\t","\n","\r"]})&&(f.test(C)?B=!0:p.test(C)?B=!0:d.test(C)?B=!0:b.test(C)&&(B=!0)),!B&&!i.skipOpeningBracket&&"<"===t[e]&&t[e+1].trim().length&&c(t,e,h,O)&&(B=!0);var k=g(t)&&e<t.length&&B;return k}}));
