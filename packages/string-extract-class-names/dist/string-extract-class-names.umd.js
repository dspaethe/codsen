/**
 * string-extract-class-names
 * Extract class (or id) name from a string
 * Version: 5.9.20
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-extract-class-names
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t=t||self).stringExtractClassNames=r()}(this,(function(){"use strict";function t(r){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(r)}Function.prototype.toString.call(Object);var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(t,r){t(r={exports:{}},r.exports)}((function(t,e){var n="[object Arguments]",o="[object Function]",c="[object GeneratorFunction]",u="[object Map]",i="[object Set]",a=/\w*$/,f=/^\[object .+?Constructor\]$/,s=/^(?:0|[1-9]\d*)$/,l={};l[n]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object DataView]"]=l["[object Boolean]"]=l["[object Date]"]=l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l[u]=l["[object Number]"]=l["[object Object]"]=l["[object RegExp]"]=l[i]=l["[object String]"]=l["[object Symbol]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l["[object Error]"]=l[o]=l["[object WeakMap]"]=!1;var p="object"==typeof r&&r&&r.Object===Object&&r,y="object"==typeof self&&self&&self.Object===Object&&self,b=p||y||Function("return this")(),h=e&&!e.nodeType&&e,_=h&&t&&!t.nodeType&&t,d=_&&_.exports===h;function v(t,r){return t.set(r[0],r[1]),t}function j(t,r){return t.add(r),t}function g(t,r,e,n){var o=-1,c=t?t.length:0;for(n&&c&&(e=t[++o]);++o<c;)e=r(e,t[o],o,t);return e}function m(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function w(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e}function A(t,r){return function(e){return t(r(e))}}function O(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e}var S,x=Array.prototype,I=Function.prototype,E=Object.prototype,D=b["__core-js_shared__"],F=(S=/[^.]+$/.exec(D&&D.keys&&D.keys.IE_PROTO||""))?"Symbol(src)_1."+S:"",T=I.toString,U=E.hasOwnProperty,$=E.toString,B=RegExp("^"+T.call(U).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),C=d?b.Buffer:void 0,P=b.Symbol,W=b.Uint8Array,k=A(Object.getPrototypeOf,Object),M=Object.create,R=E.propertyIsEnumerable,N=x.splice,V=Object.getOwnPropertySymbols,q=C?C.isBuffer:void 0,z=A(Object.keys,Object),H=_t(b,"DataView"),J=_t(b,"Map"),L=_t(b,"Promise"),G=_t(b,"Set"),K=_t(b,"WeakMap"),Q=_t(Object,"create"),X=mt(H),Y=mt(J),Z=mt(L),tt=mt(G),rt=mt(K),et=P?P.prototype:void 0,nt=et?et.valueOf:void 0;function ot(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function ct(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function ut(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function it(t){this.__data__=new ct(t)}function at(t,r){var e=At(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Ot(t)}(t)&&U.call(t,"callee")&&(!R.call(t,"callee")||$.call(t)==n)}(t)?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(t.length,String):[],o=e.length,c=!!o;for(var u in t)!r&&!U.call(t,u)||c&&("length"==u||jt(u,o))||e.push(u);return e}function ft(t,r,e){var n=t[r];U.call(t,r)&&wt(n,e)&&(void 0!==e||r in t)||(t[r]=e)}function st(t,r){for(var e=t.length;e--;)if(wt(t[e][0],r))return e;return-1}function lt(t,r,e,f,s,p,y){var b;if(f&&(b=p?f(t,s,p,y):f(t)),void 0!==b)return b;if(!It(t))return t;var h=At(t);if(h){if(b=function(t){var r=t.length,e=t.constructor(r);r&&"string"==typeof t[0]&&U.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!r)return function(t,r){var e=-1,n=t.length;r||(r=Array(n));for(;++e<n;)r[e]=t[e];return r}(t,b)}else{var _=vt(t),d=_==o||_==c;if(St(t))return function(t,r){if(r)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,r);if("[object Object]"==_||_==n||d&&!p){if(m(t))return p?t:{};if(b=function(t){return"function"!=typeof t.constructor||gt(t)?{}:(r=k(t),It(r)?M(r):{});var r}(d?{}:t),!r)return function(t,r){return bt(t,dt(t),r)}(t,function(t,r){return t&&bt(r,Et(r),t)}(b,t))}else{if(!l[_])return p?t:{};b=function(t,r,e,n){var o=t.constructor;switch(r){case"[object ArrayBuffer]":return yt(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,r){var e=r?yt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,r){var e=r?yt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,n);case u:return function(t,r,e){return g(r?e(w(t),!0):w(t),v,new t.constructor)}(t,n,e);case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return function(t){var r=new t.constructor(t.source,a.exec(t));return r.lastIndex=t.lastIndex,r}(t);case i:return function(t,r,e){return g(r?e(O(t),!0):O(t),j,new t.constructor)}(t,n,e);case"[object Symbol]":return c=t,nt?Object(nt.call(c)):{}}var c}(t,_,lt,r)}}y||(y=new it);var A=y.get(t);if(A)return A;if(y.set(t,b),!h)var S=e?function(t){return function(t,r,e){var n=r(t);return At(t)?n:function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t}(n,e(t))}(t,Et,dt)}(t):Et(t);return function(t,r){for(var e=-1,n=t?t.length:0;++e<n&&!1!==r(t[e],e,t););}(S||t,(function(n,o){S&&(n=t[o=n]),ft(b,o,lt(n,r,e,f,o,t,y))})),b}function pt(t){return!(!It(t)||(r=t,F&&F in r))&&(xt(t)||m(t)?B:f).test(mt(t));var r}function yt(t){var r=new t.constructor(t.byteLength);return new W(r).set(new W(t)),r}function bt(t,r,e,n){e||(e={});for(var o=-1,c=r.length;++o<c;){var u=r[o],i=n?n(e[u],t[u],u,e,t):void 0;ft(e,u,void 0===i?t[u]:i)}return e}function ht(t,r){var e,n,o=t.__data__;return("string"==(n=typeof(e=r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?o["string"==typeof r?"string":"hash"]:o.map}function _t(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return pt(e)?e:void 0}ot.prototype.clear=function(){this.__data__=Q?Q(null):{}},ot.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},ot.prototype.get=function(t){var r=this.__data__;if(Q){var e=r[t];return"__lodash_hash_undefined__"===e?void 0:e}return U.call(r,t)?r[t]:void 0},ot.prototype.has=function(t){var r=this.__data__;return Q?void 0!==r[t]:U.call(r,t)},ot.prototype.set=function(t,r){return this.__data__[t]=Q&&void 0===r?"__lodash_hash_undefined__":r,this},ct.prototype.clear=function(){this.__data__=[]},ct.prototype.delete=function(t){var r=this.__data__,e=st(r,t);return!(e<0)&&(e==r.length-1?r.pop():N.call(r,e,1),!0)},ct.prototype.get=function(t){var r=this.__data__,e=st(r,t);return e<0?void 0:r[e][1]},ct.prototype.has=function(t){return st(this.__data__,t)>-1},ct.prototype.set=function(t,r){var e=this.__data__,n=st(e,t);return n<0?e.push([t,r]):e[n][1]=r,this},ut.prototype.clear=function(){this.__data__={hash:new ot,map:new(J||ct),string:new ot}},ut.prototype.delete=function(t){return ht(this,t).delete(t)},ut.prototype.get=function(t){return ht(this,t).get(t)},ut.prototype.has=function(t){return ht(this,t).has(t)},ut.prototype.set=function(t,r){return ht(this,t).set(t,r),this},it.prototype.clear=function(){this.__data__=new ct},it.prototype.delete=function(t){return this.__data__.delete(t)},it.prototype.get=function(t){return this.__data__.get(t)},it.prototype.has=function(t){return this.__data__.has(t)},it.prototype.set=function(t,r){var e=this.__data__;if(e instanceof ct){var n=e.__data__;if(!J||n.length<199)return n.push([t,r]),this;e=this.__data__=new ut(n)}return e.set(t,r),this};var dt=V?A(V,Object):function(){return[]},vt=function(t){return $.call(t)};function jt(t,r){return!!(r=null==r?9007199254740991:r)&&("number"==typeof t||s.test(t))&&t>-1&&t%1==0&&t<r}function gt(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||E)}function mt(t){if(null!=t){try{return T.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function wt(t,r){return t===r||t!=t&&r!=r}(H&&"[object DataView]"!=vt(new H(new ArrayBuffer(1)))||J&&vt(new J)!=u||L&&"[object Promise]"!=vt(L.resolve())||G&&vt(new G)!=i||K&&"[object WeakMap]"!=vt(new K))&&(vt=function(t){var r=$.call(t),e="[object Object]"==r?t.constructor:void 0,n=e?mt(e):void 0;if(n)switch(n){case X:return"[object DataView]";case Y:return u;case Z:return"[object Promise]";case tt:return i;case rt:return"[object WeakMap]"}return r});var At=Array.isArray;function Ot(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!xt(t)}var St=q||function(){return!1};function xt(t){var r=It(t)?$.call(t):"";return r==o||r==c}function It(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function Et(t){return Ot(t)?at(t):function(t){if(!gt(t))return z(t);var r=[];for(var e in Object(t))U.call(t,e)&&"constructor"!=e&&r.push(e);return r}(t)}t.exports=function(t){return lt(t,!0,!0)}}));function e(t,r){return function(t,r,e){if("string"!=typeof t||!t.length)return null;if(r&&"number"==typeof r||(r=0),!t[r+1])return null;if(t[r+1]&&(!e&&t[r+1].trim()||e&&(t[r+1].trim()||"\n\r".includes(t[r+1]))))return r+1;if(t[r+2]&&(!e&&t[r+2].trim()||e&&(t[r+2].trim()||"\n\r".includes(t[r+2]))))return r+2;for(let n=r+1,o=t.length;n<o;n++)if(t[n]&&(!e&&t[n].trim()||e&&(t[n].trim()||"\n\r".includes(t[n]))))return n;return null}(t,r,!1)}function n(t,r){return function(t,r,e){if("string"!=typeof t||!t.length)return null;if(r&&"number"==typeof r||(r=0),r<1)return null;if(t[r-1]&&(!e&&t[r-1].trim()||e&&(t[r-1].trim()||"\n\r".includes(t[r-1]))))return r-1;if(t[r-2]&&(!e&&t[r-2].trim()||e&&(t[r-2].trim()||"\n\r".includes(t[r-2]))))return r-2;for(let n=r;n--;)if(t[n]&&(!e&&t[n].trim()||e&&(t[n].trim()||"\n\r".includes(t[n]))))return n;return null}(t,r,!1)}return function(r,o){if("string"!=typeof r)throw new TypeError("string-extract-class-names: [THROW_ID_02] first input should be string, not ".concat(t(r),", currently equal to ").concat(JSON.stringify(r,null,4)));if(null!=o&&o){if("boolean"!=typeof o)throw new TypeError("string-extract-class-names: [THROW_ID_03] second input argument should be a Boolean, not ".concat(t(r),", currently equal to ").concat(JSON.stringify(r,null,4)))}else o=!1;var c;function u(t){return"string"==typeof t&&t.length&&(t.charCodeAt(0)>64&&t.charCodeAt(0)<91||t.charCodeAt(0)>96&&t.charCodeAt(0)<123)}for(var i=null,a=[],f=0,s=r.length;f<s;f++)null!==i&&f>=i&&(".# ~\\!@$%^&*()+=,/';:\"?><[]{}|`".includes(r[f])||!r[f].trim())&&(f>i+1&&(o?a.push([i,f]):a.push("".concat(c||"").concat(r.slice(i,f))),c&&(c=void 0)),i=null),null!==i||"."!==r[f]&&"#"!==r[f]||(i=f),r.startsWith("class",f)&&"["===r[n(r,f)]&&"="===r[e(r,f+4)]&&(u(r[e(r,e(r,f+4))])?i=e(r,e(r,f+4)):"'\"".includes(r[e(r,e(r,f+4))])&&u(r[e(r,e(r,e(r,f+4)))])&&(i=e(r,e(r,e(r,f+4)))),c="."),r.startsWith("id",f)&&"["===r[n(r,f)]&&"="===r[e(r,f+1)]&&(u(r[e(r,e(r,f+1))])?i=e(r,e(r,f+1)):"'\"".includes(r[e(r,e(r,f+1))])&&u(r[e(r,e(r,e(r,f+1)))])&&(i=e(r,e(r,e(r,f+1)))),c="#"),f+1===s&&null!==i&&f>i&&(o?a.push([i,s]):a.push(r.slice(i,s)));return a}}));
