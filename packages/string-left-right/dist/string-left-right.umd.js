/**
 * string-left-right
 * Look what's to the left or the right of a given index within a string
 * Version: 2.3.23
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-left-right
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).stringLeftRight={})}(this,(function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var c,a,f=Function.prototype,l=Object.prototype,s=f.toString,p=l.hasOwnProperty,h=s.call(Object),y=l.toString,d=(c=Object.getPrototypeOf,a=Object,function(t){return c(a(t))});var b=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=y.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=d(t);if(null===e)return!0;var r=p.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&s.call(r)==h},v="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var g=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t,e){var r="[object Arguments]",n="[object Function]",o="[object GeneratorFunction]",i="[object Map]",u="[object Set]",c=/\w*$/,a=/^\[object .+?Constructor\]$/,f=/^(?:0|[1-9]\d*)$/,l={};l[r]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object DataView]"]=l["[object Boolean]"]=l["[object Date]"]=l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l[i]=l["[object Number]"]=l["[object Object]"]=l["[object RegExp]"]=l[u]=l["[object String]"]=l["[object Symbol]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l["[object Error]"]=l[n]=l["[object WeakMap]"]=!1;var s="object"==typeof v&&v&&v.Object===Object&&v,p="object"==typeof self&&self&&self.Object===Object&&self,h=s||p||Function("return this")(),y=e&&!e.nodeType&&e,d=y&&t&&!t.nodeType&&t,b=d&&d.exports===y;function g(t,e){return t.set(e[0],e[1]),t}function m(t,e){return t.add(e),t}function _(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function j(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function w(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function O(t,e){return function(r){return t(e(r))}}function A(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var S,I=Array.prototype,P=Function.prototype,x=Object.prototype,D=h["__core-js_shared__"],E=(S=/[^.]+$/.exec(D&&D.keys&&D.keys.IE_PROTO||""))?"Symbol(src)_1."+S:"",C=P.toString,L=x.hasOwnProperty,U=x.toString,W=RegExp("^"+C.call(L).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),F=b?h.Buffer:void 0,R=h.Symbol,$=h.Uint8Array,k=O(Object.getPrototypeOf,Object),M=Object.create,T=x.propertyIsEnumerable,B=I.splice,N=Object.getOwnPropertySymbols,V=F?F.isBuffer:void 0,q=O(Object.keys,Object),z=bt(h,"DataView"),H=bt(h,"Map"),G=bt(h,"Promise"),J=bt(h,"Set"),K=bt(h,"WeakMap"),Q=bt(Object,"create"),X=jt(z),Y=jt(H),Z=jt(G),tt=jt(J),et=jt(K),rt=R?R.prototype:void 0,nt=rt?rt.valueOf:void 0;function ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function it(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ut(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ct(t){this.__data__=new it(t)}function at(t,e){var n=Ot(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&At(t)}(t)&&L.call(t,"callee")&&(!T.call(t,"callee")||U.call(t)==r)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],o=n.length,i=!!o;for(var u in t)!e&&!L.call(t,u)||i&&("length"==u||mt(u,o))||n.push(u);return n}function ft(t,e,r){var n=t[e];L.call(t,e)&&wt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function lt(t,e){for(var r=t.length;r--;)if(wt(t[r][0],e))return r;return-1}function st(t,e,a,f,s,p,h){var y;if(f&&(y=p?f(t,s,p,h):f(t)),void 0!==y)return y;if(!Pt(t))return t;var d=Ot(t);if(d){if(y=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&L.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,y)}else{var b=gt(t),v=b==n||b==o;if(St(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if("[object Object]"==b||b==r||v&&!p){if(j(t))return p?t:{};if(y=function(t){return"function"!=typeof t.constructor||_t(t)?{}:(e=k(t),Pt(e)?M(e):{});var e}(v?{}:t),!e)return function(t,e){return yt(t,vt(t),e)}(t,function(t,e){return t&&yt(e,xt(e),t)}(y,t))}else{if(!l[b])return p?t:{};y=function(t,e,r,n){var o=t.constructor;switch(e){case"[object ArrayBuffer]":return ht(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,e){var r=e?ht(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var r=e?ht(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case i:return function(t,e,r){return _(e?r(w(t),!0):w(t),g,new t.constructor)}(t,n,r);case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,c.exec(t));return e.lastIndex=t.lastIndex,e}(t);case u:return function(t,e,r){return _(e?r(A(t),!0):A(t),m,new t.constructor)}(t,n,r);case"[object Symbol]":return a=t,nt?Object(nt.call(a)):{}}var a}(t,b,st,e)}}h||(h=new ct);var O=h.get(t);if(O)return O;if(h.set(t,y),!d)var S=a?function(t){return function(t,e,r){var n=e(t);return Ot(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,xt,vt)}(t):xt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(S||t,(function(r,n){S&&(r=t[n=r]),ft(y,n,st(r,e,a,f,n,t,h))})),y}function pt(t){return!(!Pt(t)||function(t){return!!E&&E in t}(t))&&(It(t)||j(t)?W:a).test(jt(t))}function ht(t){var e=new t.constructor(t.byteLength);return new $(e).set(new $(t)),e}function yt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var u=e[o],c=n?n(r[u],t[u],u,r,t):void 0;ft(r,u,void 0===c?t[u]:c)}return r}function dt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function bt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return pt(r)?r:void 0}ot.prototype.clear=function(){this.__data__=Q?Q(null):{}},ot.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},ot.prototype.get=function(t){var e=this.__data__;if(Q){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return L.call(e,t)?e[t]:void 0},ot.prototype.has=function(t){var e=this.__data__;return Q?void 0!==e[t]:L.call(e,t)},ot.prototype.set=function(t,e){return this.__data__[t]=Q&&void 0===e?"__lodash_hash_undefined__":e,this},it.prototype.clear=function(){this.__data__=[]},it.prototype.delete=function(t){var e=this.__data__,r=lt(e,t);return!(r<0)&&(r==e.length-1?e.pop():B.call(e,r,1),!0)},it.prototype.get=function(t){var e=this.__data__,r=lt(e,t);return r<0?void 0:e[r][1]},it.prototype.has=function(t){return lt(this.__data__,t)>-1},it.prototype.set=function(t,e){var r=this.__data__,n=lt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},ut.prototype.clear=function(){this.__data__={hash:new ot,map:new(H||it),string:new ot}},ut.prototype.delete=function(t){return dt(this,t).delete(t)},ut.prototype.get=function(t){return dt(this,t).get(t)},ut.prototype.has=function(t){return dt(this,t).has(t)},ut.prototype.set=function(t,e){return dt(this,t).set(t,e),this},ct.prototype.clear=function(){this.__data__=new it},ct.prototype.delete=function(t){return this.__data__.delete(t)},ct.prototype.get=function(t){return this.__data__.get(t)},ct.prototype.has=function(t){return this.__data__.has(t)},ct.prototype.set=function(t,e){var r=this.__data__;if(r instanceof it){var n=r.__data__;if(!H||n.length<199)return n.push([t,e]),this;r=this.__data__=new ut(n)}return r.set(t,e),this};var vt=N?O(N,Object):function(){return[]},gt=function(t){return U.call(t)};function mt(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||f.test(t))&&t>-1&&t%1==0&&t<e}function _t(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||x)}function jt(t){if(null!=t){try{return C.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function wt(t,e){return t===e||t!=t&&e!=e}(z&&"[object DataView]"!=gt(new z(new ArrayBuffer(1)))||H&&gt(new H)!=i||G&&"[object Promise]"!=gt(G.resolve())||J&&gt(new J)!=u||K&&"[object WeakMap]"!=gt(new K))&&(gt=function(t){var e=U.call(t),r="[object Object]"==e?t.constructor:void 0,n=r?jt(r):void 0;if(n)switch(n){case X:return"[object DataView]";case Y:return i;case Z:return"[object Promise]";case tt:return u;case et:return"[object WeakMap]"}return e});var Ot=Array.isArray;function At(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!It(t)}var St=V||function(){return!1};function It(t){var e=Pt(t)?U.call(t):"";return e==n||e==o}function Pt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function xt(t){return At(t)?at(t):function(t){if(!_t(t))return q(t);var e=[];for(var r in Object(t))L.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return st(t,!0,!0)}}));function m(t){return"number"==typeof t}function _(t){return"string"==typeof t}function j(t,e,r){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),!t[e+1])return null;if(t[e+1]&&(!r&&t[e+1].trim()||r&&(t[e+1].trim()||"\n\r".includes(t[e+1]))))return e+1;if(t[e+2]&&(!r&&t[e+2].trim()||r&&(t[e+2].trim()||"\n\r".includes(t[e+2]))))return e+2;for(var n=e+1,o=t.length;n<o;n++)if(t[n]&&(!r&&t[n].trim()||r&&(t[n].trim()||"\n\r".includes(t[n]))))return n;return null}function w(t,e){return j(t,e,!1)}function O(t,e,r){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),e<1)return null;if(t[~-e]&&(!r&&t[~-e].trim()||r&&(t[~-e].trim()||"\n\r".includes(t[~-e]))))return~-e;if(t[e-2]&&(!r&&t[e-2].trim()||r&&(t[e-2].trim()||"\n\r".includes(t[e-2]))))return e-2;for(var n=e;n--;)if(t[n]&&(!r&&t[n].trim()||r&&(t[n].trim()||"\n\r".includes(t[n]))))return n;return null}function A(t,e){return O(t,e,!1)}function S(t,e,r,n,o){if("string"!=typeof e||!e.length)return null;if(r&&"number"==typeof r||(r=0),"right"===t&&!e[r+1]||"left"===t&&!e[~-r])return null;for(var i,u,c,a,f,l=r,s=[],p=0;p<o.length;)if(_(o[p])&&o[p].length){var h=(a=o[p],f=void 0,((f={value:a,hungry:!1,optional:!1}).value.endsWith("?*")||f.value.endsWith("*?"))&&f.value.length>2?(f.value=f.value.slice(0,f.value.length-2),f.optional=!0,f.hungry=!0):f.value.endsWith("?")&&f.value.length>1?(f.value=f.value.slice(0,~-f.value.length),f.optional=!0):f.value.endsWith("*")&&f.value.length>1&&(f.value=f.value.slice(0,~-f.value.length),f.hungry=!0),f),y=h.value,d=h.optional,b=h.hungry,v="right"===t?w(e,l):A(e,l);if(!(n.i&&e[v].toLowerCase()===y.toLowerCase()||!n.i&&e[v]===y)){if(d){p+=1;continue}if(c){p+=1,c=void 0;continue}return null}var g="right"===t?w(e,v):A(e,v);b&&(n.i&&e[g].toLowerCase()===y.toLowerCase()||!n.i&&e[g]===y)?c=!0:p+=1,"right"===t&&v>l+1?s.push([l+1,v]):"left"===t&&v<~-l&&s.unshift([v+1,l]),l=v,"right"===t?(void 0===i&&(i=v),u=v):(void 0===u&&(u=v),i=v)}else p+=1;return void 0===i?null:{gaps:s,leftmostChar:i,rightmostChar:u}}function I(t,e){for(var r=arguments.length,n=new Array(r>2?r-2:0),i=2;i<r;i++)n[i-2]=arguments[i];if(!n.length)return A(t,e);var u={i:!1};return S("left",t,e,b(n[0])?o(o({},u),n.shift()):u,Array.from(n).reverse())}function P(t,e){for(var r=arguments.length,n=new Array(r>2?r-2:0),i=2;i<r;i++)n[i-2]=arguments[i];if(!n.length)return w(t,e);var u={i:!1};return S("right",t,e,b(n[0])?o(o({},u),n.shift()):u,n)}function x(t,e,r,n,o){if("string"!=typeof e||!e.length)return null;if(r&&"number"==typeof r||(r=0),"right"===t&&!e[r+1]||"left"===t&&(m(r)&&r<1||"0"===r))return null;var u=null,c=null;do{null!==(u="right"===t?P.apply(void 0,[e,m(c)?c:r].concat(i(o))):I.apply(void 0,[e,m(c)?c:r].concat(i(o))))&&(c="right"===t?u.rightmostChar:u.leftmostChar)}while(u);if(null!=c&&"right"===t&&(c+=1),null===c)return null;if("right"===t){if(e[c]&&e[c].trim())return c;var a=w(e,c);if(0===n.mode){if(a===c+1)return c;if(!(e.slice(c,a||e.length).trim()||e.slice(c,a||e.length).includes("\n")||e.slice(c,a||e.length).includes("\r")))return a?~-a:e.length;for(var f=c,l=e.length;f<l;f++)if("\n\r".includes(e[f]))return f}else{if(1===n.mode)return c;if(2===n.mode){var s=e.slice(c);if(s.trim()||s.includes("\n")||s.includes("\r"))for(var p=c,h=e.length;p<h;p++)if(e[p].trim()||"\n\r".includes(e[p]))return p;return e.length}}return a||e.length}if(e[c]&&e[~-c]&&e[~-c].trim())return c;var y=A(e,c);if(0===n.mode){if(y===c-2)return c;if(e.slice(0,c).trim()||e.slice(0,c).includes("\n")||e.slice(0,c).includes("\r"))for(var d=c;d--;)if("\n\r".includes(e[d])||e[d].trim())return d+1+(e[d].trim()?1:0);return 0}if(1===n.mode)return c;if(2===n.mode){var b=e.slice(0,c);if(b.trim()||b.includes("\n")||b.includes("\r"))for(var v=c;v--;)if(e[v].trim()||"\n\r".includes(e[v]))return v+1;return 0}return null!==y?y+1:0}t.chompLeft=function(t,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),u=2;u<n;u++)i[u-2]=arguments[u];if(!i.length||1===i.length&&b(i[0]))return null;var c={mode:0};if(b(i[0])){var a=o(o({},c),g(i[0]));if(a.mode){if(_(a.mode)&&"0123".includes(a.mode))a.mode=Number.parseInt(a.mode,10);else if(!m(a.mode))throw new Error("string-left-right/chompLeft(): [THROW_ID_01] the opts.mode is wrong! It should be 0, 1, 2 or 3. It was given as ".concat(a.mode," (type ").concat(e(a.mode),")"))}else a.mode=0;return x("left",t,r,a,g(i).slice(1))}return _(i[0])?x("left",t,r,c,g(i)):x("left",t,r,c,g(i).slice(1))},t.chompRight=function(t,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),u=2;u<n;u++)i[u-2]=arguments[u];if(!i.length||1===i.length&&b(i[0]))return null;var c={mode:0};if(b(i[0])){var a=o(o({},c),g(i[0]));if(a.mode){if(_(a.mode)&&"0123".includes(a.mode))a.mode=Number.parseInt(a.mode,10);else if(!m(a.mode))throw new Error("string-left-right/chompRight(): [THROW_ID_02] the opts.mode is wrong! It should be 0, 1, 2 or 3. It was given as ".concat(a.mode," (type ").concat(e(a.mode),")"))}else a.mode=0;return x("right",t,r,a,g(i).slice(1))}return _(i[0])?x("right",t,r,c,g(i)):x("right",t,r,c,g(i).slice(1))},t.left=A,t.leftSeq=I,t.leftStopAtNewLines=function(t,e){return O(t,e,!0)},t.right=w,t.rightSeq=P,t.rightStopAtNewLines=function(t,e){return j(t,e,!0)},Object.defineProperty(t,"__esModule",{value:!0})}));
