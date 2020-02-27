/**
 * is-html-tag-opening
 * Is given opening bracket a beginning of a tag?
 * Version: 1.6.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/is-html-tag-opening
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).isHtmlTagOpening=e()}(this,(function(){"use strict";function t(t){if("string"==typeof t)return 0!==t.length&&(t.charCodeAt(0)>=55296&&t.charCodeAt(0)<=56319);if(void 0===t)return!1;throw new TypeError(`string-character-is-astral-surrogate/isHighSurrogate(): the input is not string but ${typeof t}`)}function e(t){if("string"==typeof t)return 0!==t.length&&(t.charCodeAt(0)>=56320&&t.charCodeAt(0)<=57343);if(void 0===t)return!1;throw new TypeError(`string-character-is-astral-surrogate/isLowSurrogate(): the input is not string but ${typeof t}`)}function r(t){return null!=t}function n(t){return"string"==typeof t&&(t.charCodeAt(0)>=55296&&t.charCodeAt(0)<=57343)}function o(n,o,i,a,c){const u="function"==typeof i?i():i;if(o>=n.length&&c&&"EOL"===u)return u;if(!(o<=n.length)){if(a.relaxedApi)return!1;throw new Error(`string-match-left-right/marchForward(): [THROW_ID_102] second argument, fromIndexInclusive is ${o} beyond the input string length, ${n.length}.`)}{let s=c?1:i.length;for(let c=o,u=n.length;c<u;c++){let o=n[c];if(t(n[c])&&e(n[c+1])&&(o=n[c]+n[c+1]),e(n[c])&&t(n[c-1])&&(o=n[c-1]+n[c]),a.trimBeforeMatching&&""===n[c].trim())continue;if(!a.i&&a.trimCharsBeforeMatching.includes(o)||a.i&&a.trimCharsBeforeMatching.map(t=>t.toLowerCase()).includes(o.toLowerCase())){2===o.length&&(c+=1);continue}let u=i[i.length-s];if(t(u)&&r(i[i.length-s+1])&&e(i[i.length-s+1])&&(u=i[i.length-s]+i[i.length-s+1]),!(!a.i&&o===u||a.i&&o.toLowerCase()===u.toLowerCase()))return!1;if(s-=o.length,s<1){let a=c-i.length+o.length;return a>=0&&e(n[a])&&r(n[a-1])&&t(n[a-1])&&(a-=1),a>=0?a:0}2===o.length&&t(n[c])&&(c+=1)}if(s>0)return!(!c||"EOL"!==u)}}function i(r,n,o,i,a){const c="function"==typeof o?o():o;if(n<0&&a&&"EOL"===c)return c;if(n>=r.length){if(i.relaxedApi)return!1;throw new Error(`string-match-left-right/marchBackward(): [THROW_ID_203] second argument, starting index, should not be beyond the last character of the input string! Currently the first argument's last character's index is ${r.length} but the second argument is beyond it:\n${JSON.stringify(n,null,4)}`)}let u=a?1:o.length;for(let c=n+1;c--;){if(i.trimBeforeMatching&&""===r[c].trim()){if(0===c&&a&&"EOL"===o)return!0;continue}let n=r[c];if(e(r[c])&&t(r[c-1])?n=r[c-1]+r[c]:t(r[c])&&e(r[c+1])&&(n=r[c]+r[c+1]),!i.i&&i.trimCharsBeforeMatching.includes(n)||i.i&&i.trimCharsBeforeMatching.map(t=>t.toLowerCase()).includes(n.toLowerCase())){if(2===n.length&&(c-=1),a&&"EOL"===o&&0===c)return!0;continue}let s=o[u-1];if(e(s)&&(s=`${o[u-2]}${o[u-1]}`,u-=1,c-=1),!(!i.i&&n===s||i.i&&n.toLowerCase()===s.toLowerCase()))return!1;if(u-=1,u<1)return c>=0?c:0}return u>0?!(!a||"EOL"!==c):void 0}function a(a,c,u,s){return function(a,c,u,s,f){if("object"==typeof f&&null!==f&&Object.prototype.hasOwnProperty.call(f,"trimBeforeMatching")&&"boolean"!=typeof f.trimBeforeMatching)throw new Error(`string-match-left-right/${a}(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!${Array.isArray(f.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""}`);const l=Object.assign({},{i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],relaxedApi:!1},f);var h;let g,p,y,d;if(l.trimCharsBeforeMatching="string"==typeof(h=l.trimCharsBeforeMatching)?h.length>0?[h]:[]:h,l.trimCharsBeforeMatching=l.trimCharsBeforeMatching.map(t=>"string"==typeof t?t:String(t)),l.trimCharsBeforeMatching.some((t,e)=>t.length>1&&!n(t)&&(g=e,p=t,!0)))throw new Error(`string-match-left-right/${a}(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ${g} is longer than 1 character, ${p.length} (equals to ${p}). Please split it into separate characters and put into array as separate elements.`);if("string"!=typeof c){if(l.relaxedApi)return!1;throw new Error(`string-match-left-right/${a}(): [THROW_ID_01] the first argument should be a string. Currently it's of a type: ${typeof c}, equal to:\n${JSON.stringify(c,null,4)}`)}if(0===c.length){if(l.relaxedApi)return!1;throw new Error(`string-match-left-right/${a}(): [THROW_ID_02] the first argument should be a non-empty string. Currently it's empty!`)}if(!(Number.isInteger(u)&&u>=0)){if(l.relaxedApi)return!1;throw new Error(`string-match-left-right/${a}(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ${typeof u}, equal to:\n${JSON.stringify(u,null,4)}`)}if("string"==typeof s)y=[s];else if(Array.isArray(s))y=s;else if(r(s)){if("function"!=typeof s)throw new Error(`string-match-left-right/${a}(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ${typeof s}, equal to:\n${JSON.stringify(s,null,4)}`);y=[],y.push(s)}else y=s;if(r(f)&&"object"!=typeof f)throw new Error(`string-match-left-right/${a}(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type "${typeof f}", and equal to:\n${JSON.stringify(f,null,4)}`);if(!r(y)||!Array.isArray(y)||Array.isArray(y)&&!y.length||Array.isArray(y)&&1===y.length&&"string"==typeof y[0]&&0===y[0].trim().length){if("function"==typeof l.cb){let r,n=u;if("matchRight"===a&&t(c[u])&&e(c[u+1])&&(n+=1),"matchLeftIncl"!==a&&"matchRight"!==a||(n+=1),a.startsWith("matchLeft"))for(let o=n;o--;){if(e(c[o])&&t(c[o-1]))continue;let n=c[o];if(t(c[o])&&e(c[o+1])&&(n=c[o]+c[o+1]),(!l.trimBeforeMatching||l.trimBeforeMatching&&void 0!==n&&""!==n.trim())&&(0===l.trimCharsBeforeMatching.length||void 0!==n&&!l.trimCharsBeforeMatching.includes(n))){r=o;break}e(c[o-1])&&t(c[o-2])&&(o-=1)}else if(a.startsWith("matchRight"))for(let o=n;o<c.length;o++){let n=c[o];if(t(c[o])&&e(c[o+1])&&(n=c[o]+c[o+1]),(!l.trimBeforeMatching||l.trimBeforeMatching&&""!==n.trim())&&(0===l.trimCharsBeforeMatching.length||!l.trimCharsBeforeMatching.includes(n))){r=o;break}t(c[o])&&e(c[o+1])&&(o+=1)}if(void 0===r)return!1;let o=c[r];t(c[r])&&e(c[r+1])&&(o=c[r]+c[r+1]),e(c[r])&&t(c[r-1])&&(o=c[r-1]+c[r],r-=1);let i,s=r+1;return t(c[r])&&e(c[r+1])&&(s+=1),s&&s>0&&(i=c.slice(0,s)),a.startsWith("matchLeft")?l.cb(o,i,r):(r&&r>0&&(i=c.slice(r)),l.cb(o,i,r))}let n="";throw r(f)||(n=" More so, the whole options object, the fourth input argument, is missing!"),new Error(`string-match-left-right/${a}(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!${n}`)}if(a.startsWith("matchLeft")){for(let o=0,s=y.length;o<s;o++){d="function"==typeof y[o];const s=y[o];let f,h,g="",p=u;"matchLeft"===a&&(n(c[o-1])&&n(c[o-2])?p-=2:p-=1);const b=i(c,p,s,l,d);if(b&&d&&"function"==typeof s&&"EOL"===s())return!(!s()||l.cb&&!l.cb(f,g,h))&&s();if(r(b)&&b>0&&(h=b-1,f=c[h],g=c.slice(0,b)),e(c[h])&&r(c[h-1])&&t(c[h-1])&&(h-=1,f=c[h-1]+c[h]),t(c[h])&&r(c[h+1])&&e(c[h+1])&&(f=c[h]+c[h+1],g=c.slice(0,h+2)),!1!==b&&(!l.cb||l.cb(f,g,h)))return s}return!1}for(let n=0,i=y.length;n<i;n++){d="function"==typeof y[n];const i=y[n];let s=u+("matchRight"===a?1:0);"matchRight"===a&&t(c[s-1])&&e(c[s])&&(s+=1);const f=o(c,s,i,l,d);if(f&&d&&"function"==typeof i&&"EOL"===i()){let t,e,r;return!(!i()||l.cb&&!l.cb(t,e,r))&&i()}let h,g,p;if(r(f)&&r(c[f+i.length-1])&&(h=f+i.length,g=c[h],t(c[h])&&e(c[h+1])&&(g=c[h]+c[h+1])),r(h)&&h>=0&&(p=c.slice(h)),!1!==f&&(!l.cb||l.cb(g,p,h)))return i}return!1}("matchRight",a,c,u,s)}Function.prototype.toString.call(Object);var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(t,e){t(e={exports:{}},e.exports)}((function(t,e){var r="[object Arguments]",n="[object Function]",o="[object GeneratorFunction]",i="[object Map]",a="[object Set]",u=/\w*$/,s=/^\[object .+?Constructor\]$/,f=/^(?:0|[1-9]\d*)$/,l={};l[r]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object DataView]"]=l["[object Boolean]"]=l["[object Date]"]=l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l[i]=l["[object Number]"]=l["[object Object]"]=l["[object RegExp]"]=l[a]=l["[object String]"]=l["[object Symbol]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l["[object Error]"]=l[n]=l["[object WeakMap]"]=!1;var h="object"==typeof c&&c&&c.Object===Object&&c,g="object"==typeof self&&self&&self.Object===Object&&self,p=h||g||Function("return this")(),y=e&&!e.nodeType&&e,d=y&&t&&!t.nodeType&&t,b=d&&d.exports===y;function m(t,e){return t.set(e[0],e[1]),t}function _(t,e){return t.add(e),t}function w(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function v(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function j(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function O(t,e){return function(r){return t(e(r))}}function A(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var C,M=Array.prototype,B=Function.prototype,$=Object.prototype,x=p["__core-js_shared__"],E=(C=/[^.]+$/.exec(x&&x.keys&&x.keys.IE_PROTO||""))?"Symbol(src)_1."+C:"",R=B.toString,I=$.hasOwnProperty,L=$.toString,T=RegExp("^"+R.call(I).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),S=b?p.Buffer:void 0,k=p.Symbol,D=p.Uint8Array,W=O(Object.getPrototypeOf,Object),H=Object.create,U=$.propertyIsEnumerable,F=M.splice,N=Object.getOwnPropertySymbols,P=S?S.isBuffer:void 0,q=O(Object.keys,Object),J=dt(p,"DataView"),V=dt(p,"Map"),z=dt(p,"Promise"),G=dt(p,"Set"),K=dt(p,"WeakMap"),Q=dt(Object,"create"),X=vt(J),Y=vt(V),Z=vt(z),tt=vt(G),et=vt(K),rt=k?k.prototype:void 0,nt=rt?rt.valueOf:void 0;function ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function it(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function at(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ct(t){this.__data__=new it(t)}function ut(t,e){var n=Ot(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&At(t)}(t)&&I.call(t,"callee")&&(!U.call(t,"callee")||L.call(t)==r)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],o=n.length,i=!!o;for(var a in t)!e&&!I.call(t,a)||i&&("length"==a||_t(a,o))||n.push(a);return n}function st(t,e,r){var n=t[e];I.call(t,e)&&jt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function ft(t,e){for(var r=t.length;r--;)if(jt(t[r][0],e))return r;return-1}function lt(t,e,c,s,f,h,g){var p;if(s&&(p=h?s(t,f,h,g):s(t)),void 0!==p)return p;if(!Bt(t))return t;var y=Ot(t);if(y){if(p=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&I.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,p)}else{var d=mt(t),b=d==n||d==o;if(Ct(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if("[object Object]"==d||d==r||b&&!h){if(v(t))return h?t:{};if(p=function(t){return"function"!=typeof t.constructor||wt(t)?{}:(e=W(t),Bt(e)?H(e):{});var e}(b?{}:t),!e)return function(t,e){return pt(t,bt(t),e)}(t,function(t,e){return t&&pt(e,$t(e),t)}(p,t))}else{if(!l[d])return h?t:{};p=function(t,e,r,n){var o=t.constructor;switch(e){case"[object ArrayBuffer]":return gt(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,e){var r=e?gt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var r=e?gt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case i:return function(t,e,r){return w(e?r(j(t),!0):j(t),m,new t.constructor)}(t,n,r);case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,u.exec(t));return e.lastIndex=t.lastIndex,e}(t);case a:return function(t,e,r){return w(e?r(A(t),!0):A(t),_,new t.constructor)}(t,n,r);case"[object Symbol]":return c=t,nt?Object(nt.call(c)):{}}var c}(t,d,lt,e)}}g||(g=new ct);var O=g.get(t);if(O)return O;if(g.set(t,p),!y)var C=c?function(t){return function(t,e,r){var n=e(t);return Ot(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,$t,bt)}(t):$t(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(C||t,(function(r,n){C&&(r=t[n=r]),st(p,n,lt(r,e,c,s,n,t,g))})),p}function ht(t){return!(!Bt(t)||(e=t,E&&E in e))&&(Mt(t)||v(t)?T:s).test(vt(t));var e}function gt(t){var e=new t.constructor(t.byteLength);return new D(e).set(new D(t)),e}function pt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],c=n?n(r[a],t[a],a,r,t):void 0;st(r,a,void 0===c?t[a]:c)}return r}function yt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function dt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return ht(r)?r:void 0}ot.prototype.clear=function(){this.__data__=Q?Q(null):{}},ot.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},ot.prototype.get=function(t){var e=this.__data__;if(Q){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return I.call(e,t)?e[t]:void 0},ot.prototype.has=function(t){var e=this.__data__;return Q?void 0!==e[t]:I.call(e,t)},ot.prototype.set=function(t,e){return this.__data__[t]=Q&&void 0===e?"__lodash_hash_undefined__":e,this},it.prototype.clear=function(){this.__data__=[]},it.prototype.delete=function(t){var e=this.__data__,r=ft(e,t);return!(r<0)&&(r==e.length-1?e.pop():F.call(e,r,1),!0)},it.prototype.get=function(t){var e=this.__data__,r=ft(e,t);return r<0?void 0:e[r][1]},it.prototype.has=function(t){return ft(this.__data__,t)>-1},it.prototype.set=function(t,e){var r=this.__data__,n=ft(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},at.prototype.clear=function(){this.__data__={hash:new ot,map:new(V||it),string:new ot}},at.prototype.delete=function(t){return yt(this,t).delete(t)},at.prototype.get=function(t){return yt(this,t).get(t)},at.prototype.has=function(t){return yt(this,t).has(t)},at.prototype.set=function(t,e){return yt(this,t).set(t,e),this},ct.prototype.clear=function(){this.__data__=new it},ct.prototype.delete=function(t){return this.__data__.delete(t)},ct.prototype.get=function(t){return this.__data__.get(t)},ct.prototype.has=function(t){return this.__data__.has(t)},ct.prototype.set=function(t,e){var r=this.__data__;if(r instanceof it){var n=r.__data__;if(!V||n.length<199)return n.push([t,e]),this;r=this.__data__=new at(n)}return r.set(t,e),this};var bt=N?O(N,Object):function(){return[]},mt=function(t){return L.call(t)};function _t(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||f.test(t))&&t>-1&&t%1==0&&t<e}function wt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||$)}function vt(t){if(null!=t){try{return R.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function jt(t,e){return t===e||t!=t&&e!=e}(J&&"[object DataView]"!=mt(new J(new ArrayBuffer(1)))||V&&mt(new V)!=i||z&&"[object Promise]"!=mt(z.resolve())||G&&mt(new G)!=a||K&&"[object WeakMap]"!=mt(new K))&&(mt=function(t){var e=L.call(t),r="[object Object]"==e?t.constructor:void 0,n=r?vt(r):void 0;if(n)switch(n){case X:return"[object DataView]";case Y:return i;case Z:return"[object Promise]";case tt:return a;case et:return"[object WeakMap]"}return e});var Ot=Array.isArray;function At(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!Mt(t)}var Ct=P||function(){return!1};function Mt(t){var e=Bt(t)?L.call(t):"";return e==n||e==o}function Bt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function $t(t){return At(t)?ut(t):function(t){if(!wt(t))return q(t);var e=[];for(var r in Object(t))I.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return lt(t,!0,!0)}}));function u(t,e){return function(t,e,r){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),!t[e+1])return null;if(t[e+1]&&(!r&&t[e+1].trim().length||r&&(t[e+1].trim().length||"\n\r".includes(t[e+1]))))return e+1;if(t[e+2]&&(!r&&t[e+2].trim().length||r&&(t[e+2].trim().length||"\n\r".includes(t[e+2]))))return e+2;for(let n=e+1,o=t.length;n<o;n++)if(t[n]&&(!r&&t[n].trim().length||r&&(t[n].trim().length||"\n\r".includes(t[n]))))return n;return null}(t,e,!1)}var s="\\",f=["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","big","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","doctype","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h1 - h6","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xml"];function l(t){return"string"==typeof t}function h(t){return void 0===t||t.toUpperCase()===t.toLowerCase()&&!"0123456789".includes(t)}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0,n={allowCustomTagNames:!1},o=Object.assign({},n,r),i="[\\\\ \\t\\r\\n/]*",c="._a-z0-9·À-ÖØ-öø-ͽͿ-῿‌-‍‿-⁀⁰-￿",g=new RegExp("^<".concat(i,"\\w+").concat(i,">"),"g"),p=new RegExp("^<".concat(i,"[").concat(c,"]+[-").concat(c,"]*").concat(i,">"),"g"),y=new RegExp("^<\\s*\\w+\\s+\\w+(?:-\\w+)?\\s*=\\s*['\"\\w]","g"),d=new RegExp("^<\\s*\\w+\\s+[".concat(c,"]+[-").concat(c,"]*(?:-\\w+)?\\s*=\\s*['\"\\w]")),b=new RegExp("^<\\s*\\/?\\s*\\w+\\s*\\/?\\s*>","g"),m=new RegExp("^<\\s*\\/?\\s*[".concat(c,"]+[-").concat(c,"]*\\s*\\/?\\s*>"),"g"),_=new RegExp("^<".concat(i,"\\w+(?:\\s*\\w+)*\\s*\\w+=['\"]"),"g"),w=new RegExp("^<".concat(i,"[").concat(c,"]+[-").concat(c,"]*(?:\\s*\\w+)*\\s*\\w+=['\"]"),"g"),v=e?t.slice(e):t,j=!1;o.allowCustomTagNames?p.test(v)?j=!0:d.test(v)?j=!0:m.test(v)?j=!0:w.test(v)&&(j=!0):g.test(v)?j=!0:y.test(v)?j=!0:b.test(v)?j=!0:_.test(v)&&(j=!0),!j&&"<"===t[e]&&t[e+1]&&(["/",s].includes(t[e+1])&&a(t,e+1,f,{cb:h,i:!0})||!h(t[e+1])&&a(t,e,f,{cb:h,i:!0,trimCharsBeforeMatching:["/",s,"!"," ","\t","\n","\r"]})||h(t[e+1])&&a(t,e,f,{cb:function(e,r,n){return(void 0===e||e.toUpperCase()===e.toLowerCase()&&!"0123456789".includes(e))&&("/"===t[u(t,n-1)]||">"===t[u(t,n-1)])},i:!0,trimCharsBeforeMatching:["/",s,"!"," ","\t","\n","\r"]}))&&(j=!0);var O=l(t)&&e<t.length&&j;return O}}));
