/**
 * is-html-tag-opening
 * Is given opening bracket a beginning of a tag?
 * Version: 1.7.9
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/is-html-tag-opening
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isHtmlTagOpening=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(r){e(t,r,i[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function i(e){return e&&"object"===t(e)&&!Array.isArray(e)}function a(t){return"string"==typeof t}function o(t,e,r,n,i,a){var o="function"==typeof r?r():r;if(e<0&&i&&"EOL"===o)return o;if(e>=t.length&&!i)return!1;for(var c=i?1:r.length,s=!1,f=!1,h=n.maxMismatches,u=e,l=!1,g=!1,m=!1;t[u];){var p=a(u);if(n.trimBeforeMatching&&""===t[u].trim()){if(!t[p]&&i&&"EOL"===r)return!0;u=a(u)}else if(!n.i&&n.trimCharsBeforeMatching.includes(t[u])||n.i&&n.trimCharsBeforeMatching.map((function(t){return t.toLowerCase()})).includes(t[u].toLowerCase())){if(i&&"EOL"===r&&!t[p])return!0;u=a(u)}else{var b=p>u?r[r.length-c]:r[c-1];if(!n.i&&t[u]===b||n.i&&t[u].toLowerCase()===b.toLowerCase()){if(l||(l=!0),f||(f=!0),c===r.length?g=!0:1===c&&(m=!0),(c-=1)<1)return u}else{if(!(n.maxMismatches&&h&&u))return!(0!==u||1!==c||n.lastMustMatch||!f)&&0;h-=1;for(var y=0;y<=h;y++){var d=p>u?r[r.length-c+1+y]:r[c-2-y],w=t[a(u)];if(d&&(!n.i&&t[u]===d||n.i&&t[u].toLowerCase()===d.toLowerCase())&&(!n.firstMustMatch||c!==r.length)){c-=2,l=!0;break}if(w&&d&&(!n.i&&w===d||n.i&&w.toLowerCase()===d.toLowerCase())&&(!n.firstMustMatch||c!==r.length)){c-=1,l=!0;break}if(void 0===d&&h>=0&&l&&(!n.firstMustMatch||g)&&(!n.lastMustMatch||m))return u}l||(s=u)}if(!1!==s&&s!==u&&(s=!1),c<1)return u;u=a(u)}}return c>0?!(!i||"EOL"!==o)||!!(n.maxMismatches>=c&&f)&&(s||0):void 0}function c(e,r,c,s,f){if(i(f)&&Object.prototype.hasOwnProperty.call(f,"trimBeforeMatching")&&"boolean"!=typeof f.trimBeforeMatching)throw new Error("string-match-left-right/".concat(e,"(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!").concat(Array.isArray(f.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""));var h,u,l,g,m,p=n(n({},{i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],maxMismatches:0,firstMustMatch:!1,lastMustMatch:!1}),f);if(p.trimCharsBeforeMatching="string"==typeof(h=p.trimCharsBeforeMatching)?h.length>0?[h]:[]:h,p.trimCharsBeforeMatching=p.trimCharsBeforeMatching.map((function(t){return a(t)?t:String(t)})),!a(r))return!1;if(!r.length)return!1;if(!Number.isInteger(c)||c<0)throw new Error("string-match-left-right/".concat(e,"(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ").concat(t(c),", equal to:\n").concat(JSON.stringify(c,null,4)));if(a(s))u=[s];else if(Array.isArray(s))u=s;else if(s){if("function"!=typeof s)throw new Error("string-match-left-right/".concat(e,"(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ").concat(t(s),", equal to:\n").concat(JSON.stringify(s,null,4)));(u=[]).push(s)}else u=s;if(f&&!i(f))throw new Error("string-match-left-right/".concat(e,"(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type \"").concat(t(f),'", and equal to:\n').concat(JSON.stringify(f,null,4)));if(p.trimCharsBeforeMatching.some((function(t,e){return t.length>1&&(g=e,m=t,!0)})))throw new Error("string-match-left-right/".concat(e,"(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ").concat(g," is longer than 1 character, ").concat(m.length," (equals to ").concat(m,"). Please split it into separate characters and put into array as separate elements."));if(!u||!Array.isArray(u)||Array.isArray(u)&&!u.length||Array.isArray(u)&&1===u.length&&a(u[0])&&!u[0].trim()){if("function"==typeof p.cb){var b,y=c;if("matchLeftIncl"!==e&&"matchRight"!==e||(y+=1),"L"===e[5])for(var d=y;d--;){var w=r[d];if((!p.trimBeforeMatching||p.trimBeforeMatching&&void 0!==w&&w.trim())&&(!p.trimCharsBeforeMatching.length||void 0!==w&&!p.trimCharsBeforeMatching.includes(w))){b=d;break}}else if(e.startsWith("matchRight"))for(var M=y;M<r.length;M++){var O=r[M];if((!p.trimBeforeMatching||p.trimBeforeMatching&&O.trim())&&(!p.trimCharsBeforeMatching.length||!p.trimCharsBeforeMatching.includes(O))){b=M;break}}if(void 0===b)return!1;var v=r[b],B=b+1,k="";return B&&B>0&&(k=r.slice(0,B)),"L"===e[5]?p.cb(v,k,b):(b&&b>0&&(k=r.slice(b)),p.cb(v,k,b))}var C="";throw f||(C=" More so, the whole options object, the fourth input argument, is missing!"),new Error("string-match-left-right/".concat(e,'(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!').concat(C))}for(var E=0,L=u.length;E<L;E++){l="function"==typeof u[E];var j=u[E],R=void 0,x=void 0,T="",I=c;"matchRight"===e?I+=1:"matchLeft"===e&&(I-=1);var _=o(r,I,j,p,l,(function(t){return"L"===e[5]?t-1:t+1}));if(_&&l&&"function"==typeof j&&"EOL"===j())return!(!j()||p.cb&&!p.cb(R,T,x))&&j();if(Number.isInteger(_)&&(x=e.startsWith("matchLeft")?_-1:_+1,T="L"===e[5]?r.slice(0,_):r.slice(x)),x<0&&(x=void 0),r[x]&&(R=r[x]),Number.isInteger(_)&&(!p.cb||p.cb(R,T,x)))return j}return!1}function s(t,e,r,n){return c("matchRightIncl",t,e,r,n)}function f(t,e,r,n){return c("matchRight",t,e,r,n)}var h=["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","big","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","doctype","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h1 - h6","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xml"];function u(t){return"string"==typeof t}function l(t){return void 0===t||t.toUpperCase()===t.toLowerCase()&&!"0123456789".includes(t)&&"="!==t}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0,i={allowCustomTagNames:!1,skipOpeningBracket:!1},a=n(n({},i),r),o="[\\\\ \\t\\r\\n/]*",c="._a-z0-9·À-ÖØ-öø-ͽͿ-῿‌-‍‿-⁀⁰-￿",g=new RegExp("^".concat(a.skipOpeningBracket?"":"<").concat(o,"\\w+").concat(o,">"),"g"),m=new RegExp("^".concat(a.skipOpeningBracket?"":"<").concat(o,"[").concat(c,"]+[-").concat(c,"]*").concat(o,">"),"g"),p=new RegExp("^".concat(a.skipOpeningBracket?"":"<","\\s*\\w+\\s+\\w+(?:-\\w+)?\\s*=\\s*['\"\\w]"),"g"),b=new RegExp("^".concat(a.skipOpeningBracket?"":"<","\\s*\\w+\\s+[").concat(c,"]+[-").concat(c,"]*(?:-\\w+)?\\s*=\\s*['\"\\w]")),y=new RegExp("^".concat(a.skipOpeningBracket?"":"<","\\s*\\/?\\s*\\w+\\s*\\/?\\s*>"),"g"),d=new RegExp("^".concat(a.skipOpeningBracket?"":"<","\\s*\\/?\\s*[").concat(c,"]+[-").concat(c,"]*\\s*\\/?\\s*>"),"g"),w=new RegExp("^".concat(a.skipOpeningBracket?"":"<").concat(o,"\\w+(?:\\s*\\w+)*\\s*\\w+=['\"]"),"g"),M=new RegExp("^".concat(a.skipOpeningBracket?"":"<").concat(o,"[").concat(c,"]+[-").concat(c,"]*(?:\\s*\\w+)*\\s*\\w+=['\"]"),"g"),O=e?t.slice(e):t,v=!1,B={cb:l,i:!0,trimCharsBeforeMatching:["/","\\","!"," ","\t","\n","\r"]};a.allowCustomTagNames?(m.test(O)||b.test(O)||d.test(O)||M.test(O))&&(v=!0):s(t,e,h,{cb:l,i:!0,trimCharsBeforeMatching:["<","/","\\","!"," ","\t","\n","\r"]})&&(g.test(O)||p.test(O)||y.test(O)||w.test(O))&&(v=!0),!v&&!a.skipOpeningBracket&&"<"===t[e]&&t[e+1].trim()&&f(t,e,h,B)&&(v=!0);var k=u(t)&&e<t.length&&v;return k}}));
