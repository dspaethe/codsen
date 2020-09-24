/**
 * is-html-tag-opening
 * Is given opening bracket a beginning of a tag?
 * Version: 1.8.1
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/is-html-tag-opening/
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isHtmlTagOpening=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(r){e(t,r,i[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function i(e){return e&&"object"===t(e)&&!Array.isArray(e)}function a(t){return"string"==typeof t}function o(t,e,r,n,i,a){var o="function"==typeof r?r():r;if(e<0&&i&&"EOL"===o)return o;if(e>=t.length&&!i)return!1;for(var c=i?1:r.length,s=!1,h=!1,f=n.maxMismatches,u=e,g=!1,l=!1,m=!1;t[u];){var p=a(u);if(n.trimBeforeMatching&&""===t[u].trim()){if(!t[p]&&i&&"EOL"===r)return!0;u=a(u)}else if(!n.i&&n.trimCharsBeforeMatching.includes(t[u])||n.i&&n.trimCharsBeforeMatching.map((function(t){return t.toLowerCase()})).includes(t[u].toLowerCase())){if(i&&"EOL"===r&&!t[p])return!0;u=a(u)}else{var b=p>u?r[r.length-c]:r[c-1];if(!n.i&&t[u]===b||n.i&&t[u].toLowerCase()===b.toLowerCase()){if(g||(g=!0),h||(h=!0),c===r.length?l=!0:1===c&&(m=!0),(c-=1)<1)return u}else{if(!(n.maxMismatches&&f&&u))return!(0!==u||1!==c||n.lastMustMatch||!h)&&0;f-=1;for(var y=0;y<=f;y++){var d=p>u?r[r.length-c+1+y]:r[c-2-y],w=t[a(u)];if(d&&(!n.i&&t[u]===d||n.i&&t[u].toLowerCase()===d.toLowerCase())&&(!n.firstMustMatch||c!==r.length)){c-=2,g=!0;break}if(w&&d&&(!n.i&&w===d||n.i&&w.toLowerCase()===d.toLowerCase())&&(!n.firstMustMatch||c!==r.length)){c-=1,g=!0;break}if(void 0===d&&f>=0&&g&&(!n.firstMustMatch||l)&&(!n.lastMustMatch||m))return u}g||(s=u)}if(!1!==s&&s!==u&&(s=!1),c<1)return u;u=a(u)}}return c>0?!(!i||"EOL"!==o)||!!(n.maxMismatches>=c&&h)&&(s||0):void 0}function c(e,r,c,s,h){var f={cb:void 0,i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],maxMismatches:0,firstMustMatch:!1,lastMustMatch:!1};if(i(h)&&Object.prototype.hasOwnProperty.call(h,"trimBeforeMatching")&&"boolean"!=typeof h.trimBeforeMatching)throw new Error("string-match-left-right/".concat(e,"(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!").concat(Array.isArray(h.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""));var u,g,l,m,p,b=n(n({},f),h);if(b.trimCharsBeforeMatching="string"==typeof(u=b.trimCharsBeforeMatching)?u.length>0?[u]:[]:u,b.trimCharsBeforeMatching=b.trimCharsBeforeMatching.map((function(t){return a(t)?t:String(t)})),!a(r))return!1;if(!r.length)return!1;if(!Number.isInteger(c)||c<0)throw new Error("string-match-left-right/".concat(e,"(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ").concat(t(c),", equal to:\n").concat(JSON.stringify(c,null,4)));if(a(s))g=[s];else if(Array.isArray(s))g=s;else if(s){if("function"!=typeof s)throw new Error("string-match-left-right/".concat(e,"(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ").concat(t(s),", equal to:\n").concat(JSON.stringify(s,null,4)));(g=[]).push(s)}else g=s;if(h&&!i(h))throw new Error("string-match-left-right/".concat(e,"(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type \"").concat(t(h),'", and equal to:\n').concat(JSON.stringify(h,null,4)));if(b.trimCharsBeforeMatching.some((function(t,e){return t.length>1&&(m=e,p=t,!0)})))throw new Error("string-match-left-right/".concat(e,"(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ").concat(m," is longer than 1 character, ").concat(p.length," (equals to ").concat(p,"). Please split it into separate characters and put into array as separate elements."));if(!g||!Array.isArray(g)||Array.isArray(g)&&!g.length||Array.isArray(g)&&1===g.length&&a(g[0])&&!g[0].trim()){if("function"==typeof b.cb){var y,d=c;if("matchLeftIncl"!==e&&"matchRight"!==e||(d+=1),"L"===e[5])for(var w=d;w--;){var v=r[w];if((!b.trimBeforeMatching||b.trimBeforeMatching&&void 0!==v&&v.trim())&&(!b.trimCharsBeforeMatching.length||void 0!==v&&!b.trimCharsBeforeMatching.includes(v))){y=w;break}}else if(e.startsWith("matchRight"))for(var O=d;O<r.length;O++){var M=r[O];if((!b.trimBeforeMatching||b.trimBeforeMatching&&M.trim())&&(!b.trimCharsBeforeMatching.length||!b.trimCharsBeforeMatching.includes(M))){y=O;break}}if(void 0===y)return!1;var B=r[y],k=y+1,C="";return k&&k>0&&(C=r.slice(0,k)),"L"===e[5]?b.cb(B,C,y):(y&&y>0&&(C=r.slice(y)),b.cb(B,C,y))}var E="";throw h||(E=" More so, the whole options object, the fourth input argument, is missing!"),new Error("string-match-left-right/".concat(e,'(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!').concat(E))}for(var L=0,R=g.length;L<R;L++){l="function"==typeof g[L];var j=g[L],x=void 0,T=void 0,_="",I=c;"matchRight"===e?I+=1:"matchLeft"===e&&(I-=1);var D=o(r,I,j,b,l,(function(t){return"L"===e[5]?t-1:t+1}));if(D&&l&&"function"==typeof j&&"EOL"===j())return!(!j()||b.cb&&!b.cb(x,_,T))&&j();if(Number.isInteger(D)&&(T=e.startsWith("matchLeft")?D-1:D+1,_="L"===e[5]?r.slice(0,D):r.slice(T)),T<0&&(T=void 0),r[T]&&(x=r[T]),Number.isInteger(D)&&(!b.cb||b.cb(x,_,T)))return j}return!1}function s(t,e,r,n){return c("matchRightIncl",t,e,r,n)}function h(t,e,r,n){return c("matchRight",t,e,r,n)}var f="\\",u=["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","big","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","doctype","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h1 - h6","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xml"];function g(t){return void 0===t||t.toUpperCase()===t.toLowerCase()&&!"0123456789".includes(t)&&"="!==t}return function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0;if("string"!=typeof e)throw new Error('is-html-tag-opening: [THROW_ID_01] the first input argument should have been a string but it was given as "'.concat(t(e),'", value being ').concat(JSON.stringify(e,null,4)));if(!Number.isInteger(r)||r<0)throw new Error('is-html-tag-opening: [THROW_ID_02] the second input argument should have been a natural number string index but it was given as "'.concat(t(r),'", value being ').concat(JSON.stringify(r,null,4)));var a={allowCustomTagNames:!1,skipOpeningBracket:!1},o=n(n({},a),i),c="[\\\\ \\t\\r\\n/]*",l="._a-z0-9·À-ÖØ-öø-ͽͿ-῿‌-‍‿-⁀⁰-￿",m=new RegExp("^".concat(o.skipOpeningBracket?"":"<").concat(c,"\\w+").concat(c,">"),"g"),p=new RegExp("^".concat(o.skipOpeningBracket?"":"<").concat(c,"[").concat(l,"]+[-").concat(l,"]*").concat(c,">"),"g"),b=new RegExp("^".concat(o.skipOpeningBracket?"":"<","\\s*\\w+\\s+\\w+(?:-\\w+)?\\s*=\\s*['\"\\w]"),"g"),y=new RegExp("^".concat(o.skipOpeningBracket?"":"<","\\s*\\w+\\s+[").concat(l,"]+[-").concat(l,"]*(?:-\\w+)?\\s*=\\s*['\"\\w]")),d=new RegExp("^".concat(o.skipOpeningBracket?"":"<","\\s*\\/?\\s*\\w+\\s*\\/?\\s*>"),"g"),w=new RegExp("^".concat(o.skipOpeningBracket?"":"<","\\s*\\/?\\s*[").concat(l,"]+[-").concat(l,"]*\\s*\\/?\\s*>"),"g"),v=new RegExp("^".concat(o.skipOpeningBracket?"":"<").concat(c,"\\w+(?:\\s*\\w+)*\\s*\\w+=['\"]"),"g"),O=new RegExp("^".concat(o.skipOpeningBracket?"":"<").concat(c,"[").concat(l,"]+[-").concat(l,"]*(?:\\s*\\w+)*\\s*\\w+=['\"]"),"g"),M=r?e.slice(r):e,B=!1,k={cb:g,i:!0,trimCharsBeforeMatching:["/",f,"!"," ","\t","\n","\r"]};o.allowCustomTagNames?(p.test(M)||y.test(M)||w.test(M)||O.test(M))&&(B=!0):s(e,r,u,{cb:g,i:!0,trimCharsBeforeMatching:["<","/",f,"!"," ","\t","\n","\r"]})&&(m.test(M)||b.test(M)||d.test(M)||v.test(M))&&(B=!0),!B&&!o.skipOpeningBracket&&"<"===e[r]&&e[r+1]&&e[r+1].trim()&&h(e,r,u,k)&&(B=!0);var C="string"==typeof e&&r<e.length&&B;return C}}));
