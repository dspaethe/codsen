/**
 * object-boolean-combinations
 * Generate an array full of object copies, each containing a unique Boolean value combination. Includes overrides.
 * Version: 2.11.60
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/object-boolean-combinations
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).objectBooleanCombinations=r()}(this,(function(){"use strict";function t(r){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(r)}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var n=/^\[object .+?Constructor\]$/,e="object"==t(r)&&r&&r.Object===Object&&r,o="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,u=e||o||Function("return this")();function c(t,r,n){switch(n.length){case 0:return t.call(r);case 1:return t.call(r,n[0]);case 2:return t.call(r,n[0],n[1]);case 3:return t.call(r,n[0],n[1],n[2])}return t.apply(r,n)}function a(t,r){return!!(t?t.length:0)&&function(t,r,n){if(r!=r)return function(t,r,n,e){var o=t.length,u=n+(e?1:-1);for(;e?u--:++u<o;)if(r(t[u],u,t))return u;return-1}(t,s,n);var e=n-1,o=t.length;for(;++e<o;)if(t[e]===r)return e;return-1}(t,r,0)>-1}function i(t,r,n){for(var e=-1,o=t?t.length:0;++e<o;)if(n(r,t[e]))return!0;return!1}function f(t,r){for(var n=-1,e=t?t.length:0,o=Array(e);++n<e;)o[n]=r(t[n],n,t);return o}function s(t){return t!=t}function l(t){return function(r){return t(r)}}function h(t,r){return t.has(r)}var p,_,y,b=Array.prototype,v=Function.prototype,d=Object.prototype,j=u["__core-js_shared__"],g=(p=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||""))?"Symbol(src)_1."+p:"",w=v.toString,O=d.hasOwnProperty,m=d.toString,A=RegExp("^"+w.call(O).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),S=b.splice,x=Math.max,E=Math.min,k=B(u,"Map"),I=B(Object,"create");function $(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function F(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function P(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function D(t){var r=-1,n=t?t.length:0;for(this.__data__=new P;++r<n;)this.add(t[r])}function T(t,r){for(var n,e,o=t.length;o--;)if((n=t[o][0])===(e=r)||n!=n&&e!=e)return o;return-1}function M(t){return!(!C(t)||(r=t,g&&g in r))&&(W(t)||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(t)?A:n).test(function(t){if(null!=t){try{return w.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var r}function R(r){return function(r){return function(r){return!!r&&"object"==t(r)}(r)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!W(t)}(r)}(r)?r:[]}function U(r,n){var e,o,u=r.__data__;return("string"==(o=t(e=n))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==e:null===e)?u["string"==typeof n?"string":"hash"]:u.map}function B(t,r){var n=function(t,r){return null==t?void 0:t[r]}(t,r);return M(n)?n:void 0}function W(t){var r=C(t)?m.call(t):"";return"[object Function]"==r||"[object GeneratorFunction]"==r}function C(r){var n=t(r);return!!r&&("object"==n||"function"==n)}$.prototype.clear=function(){this.__data__=I?I(null):{}},$.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},$.prototype.get=function(t){var r=this.__data__;if(I){var n=r[t];return"__lodash_hash_undefined__"===n?void 0:n}return O.call(r,t)?r[t]:void 0},$.prototype.has=function(t){var r=this.__data__;return I?void 0!==r[t]:O.call(r,t)},$.prototype.set=function(t,r){return this.__data__[t]=I&&void 0===r?"__lodash_hash_undefined__":r,this},F.prototype.clear=function(){this.__data__=[]},F.prototype.delete=function(t){var r=this.__data__,n=T(r,t);return!(n<0)&&(n==r.length-1?r.pop():S.call(r,n,1),!0)},F.prototype.get=function(t){var r=this.__data__,n=T(r,t);return n<0?void 0:r[n][1]},F.prototype.has=function(t){return T(this.__data__,t)>-1},F.prototype.set=function(t,r){var n=this.__data__,e=T(n,t);return e<0?n.push([t,r]):n[e][1]=r,this},P.prototype.clear=function(){this.__data__={hash:new $,map:new(k||F),string:new $}},P.prototype.delete=function(t){return U(this,t).delete(t)},P.prototype.get=function(t){return U(this,t).get(t)},P.prototype.has=function(t){return U(this,t).has(t)},P.prototype.set=function(t,r){return U(this,t).set(t,r),this},D.prototype.add=D.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},D.prototype.has=function(t){return this.__data__.has(t)};var V=(_=function(t){var r=f(t,R);return r.length&&r[0]===t[0]?function(t,r,n){for(var e=n?i:a,o=t[0].length,u=t.length,c=u,s=Array(u),p=1/0,_=[];c--;){var y=t[c];c&&r&&(y=f(y,l(r))),p=E(y.length,p),s[c]=!n&&(r||o>=120&&y.length>=120)?new D(c&&y):void 0}y=t[0];var b=-1,v=s[0];t:for(;++b<o&&_.length<p;){var d=y[b],j=r?r(d):d;if(d=n||0!==d?d:0,!(v?h(v,j):e(_,j,n))){for(c=u;--c;){var g=s[c];if(!(g?h(g,j):e(t[c],j,n)))continue t}v&&v.push(j),_.push(d)}}return _}(r):[]},y=x(void 0===y?_.length-1:y,0),function(){for(var t=arguments,r=-1,n=x(t.length-y,0),e=Array(n);++r<n;)e[r]=t[y+r];r=-1;for(var o=Array(y+1);++r<y;)o[r]=t[r];return o[y]=e,c(_,this,o)});function H(t,r,n){switch(n.length){case 0:return t.call(r);case 1:return t.call(r,n[0]);case 2:return t.call(r,n[0],n[1]);case 3:return t.call(r,n[0],n[1],n[2])}return t.apply(r,n)}function q(t,r,n){if(r!=r)return function(t,r,n,e){for(var o=t.length,u=n+(e?1:-1);e?u--:++u<o;)if(r(t[u],u,t))return u;return-1}(t,G,n);for(var e=n-1,o=t.length;++e<o;)if(t[e]===r)return e;return-1}function z(t,r,n,e){for(var o=n-1,u=t.length;++o<u;)if(e(t[o],r))return o;return-1}function G(t){return t!=t}var L=Array.prototype.splice,N=Math.max;function J(t,r,n,e){var o=e?z:q,u=-1,c=r.length,a=t;for(t===r&&(r=function(t,r){var n=-1,e=t.length;r||(r=Array(e));for(;++n<e;)r[n]=t[n];return r}(r)),n&&(a=function(t,r){for(var n=-1,e=t?t.length:0,o=Array(e);++n<e;)o[n]=r(t[n],n,t);return o}(t,function(t){return function(r){return t(r)}}(n)));++u<c;)for(var i=0,f=r[u],s=n?n(f):f;(i=o(a,s,i,e))>-1;)a!==t&&L.call(a,i,1),L.call(t,i,1);return t}var K=function(t,r){return r=N(void 0===r?t.length-1:r,0),function(){for(var n=arguments,e=-1,o=N(n.length-r,0),u=Array(o);++e<o;)u[e]=n[r+e];e=-1;for(var c=Array(r+1);++e<r;)c[e]=n[e];return c[r]=u,H(t,this,c)}}((function(t,r){return t&&t.length&&r&&r.length?J(t,r):t}));var Q=Function.prototype,X=Object.prototype,Y=Q.toString,Z=X.hasOwnProperty,tt=Y.call(Object),rt=X.toString,nt=function(t,r){return function(n){return t(r(n))}}(Object.getPrototypeOf,Object);var et=function(r){if(!function(r){return!!r&&"object"==t(r)}(r)||"[object Object]"!=rt.call(r)||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(r))return!1;var n=nt(r);if(null===n)return!0;var e=Z.call(n,"constructor")&&n.constructor;return"function"==typeof e&&e instanceof e&&Y.call(e)==tt},ot=function(t,r,n){return t(n={path:r,exports:{},require:function(t,r){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==r&&n.path)}},n.exports),n.exports}((function(n,e){var o="[object Arguments]",u="[object Function]",c="[object GeneratorFunction]",a="[object Map]",i="[object Set]",f=/\w*$/,s=/^\[object .+?Constructor\]$/,l=/^(?:0|[1-9]\d*)$/,h={};h[o]=h["[object Array]"]=h["[object ArrayBuffer]"]=h["[object DataView]"]=h["[object Boolean]"]=h["[object Date]"]=h["[object Float32Array]"]=h["[object Float64Array]"]=h["[object Int8Array]"]=h["[object Int16Array]"]=h["[object Int32Array]"]=h[a]=h["[object Number]"]=h["[object Object]"]=h["[object RegExp]"]=h[i]=h["[object String]"]=h["[object Symbol]"]=h["[object Uint8Array]"]=h["[object Uint8ClampedArray]"]=h["[object Uint16Array]"]=h["[object Uint32Array]"]=!0,h["[object Error]"]=h[u]=h["[object WeakMap]"]=!1;var p="object"==t(r)&&r&&r.Object===Object&&r,_="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,y=p||_||Function("return this")(),b=e&&!e.nodeType&&e,v=b&&n&&!n.nodeType&&n,d=v&&v.exports===b;function j(t,r){return t.set(r[0],r[1]),t}function g(t,r){return t.add(r),t}function w(t,r,n,e){var o=-1,u=t?t.length:0;for(e&&u&&(n=t[++o]);++o<u;)n=r(n,t[o],o,t);return n}function O(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function m(t){var r=-1,n=Array(t.size);return t.forEach((function(t,e){n[++r]=[e,t]})),n}function A(t,r){return function(n){return t(r(n))}}function S(t){var r=-1,n=Array(t.size);return t.forEach((function(t){n[++r]=t})),n}var x=Array.prototype,E=Function.prototype,k=Object.prototype,I=y["__core-js_shared__"],$=function(){var t=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),F=E.toString,P=k.hasOwnProperty,D=k.toString,T=RegExp("^"+F.call(P).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),M=d?y.Buffer:void 0,R=y.Symbol,U=y.Uint8Array,B=A(Object.getPrototypeOf,Object),W=Object.create,C=k.propertyIsEnumerable,V=x.splice,H=Object.getOwnPropertySymbols,q=M?M.isBuffer:void 0,z=A(Object.keys,Object),G=bt(y,"DataView"),L=bt(y,"Map"),N=bt(y,"Promise"),J=bt(y,"Set"),K=bt(y,"WeakMap"),Q=bt(Object,"create"),X=wt(G),Y=wt(L),Z=wt(N),tt=wt(J),rt=wt(K),nt=R?R.prototype:void 0,et=nt?nt.valueOf:void 0;function ot(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function ut(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function ct(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function at(t){this.__data__=new ut(t)}function it(r,n){var e=mt(r)||function(r){return function(r){return function(r){return!!r&&"object"==t(r)}(r)&&At(r)}(r)&&P.call(r,"callee")&&(!C.call(r,"callee")||D.call(r)==o)}(r)?function(t,r){for(var n=-1,e=Array(t);++n<t;)e[n]=r(n);return e}(r.length,String):[],u=e.length,c=!!u;for(var a in r)!n&&!P.call(r,a)||c&&("length"==a||jt(a,u))||e.push(a);return e}function ft(t,r,n){var e=t[r];P.call(t,r)&&Ot(e,n)&&(void 0!==n||r in t)||(t[r]=n)}function st(t,r){for(var n=t.length;n--;)if(Ot(t[n][0],r))return n;return-1}function lt(t,r,n,e,s,l,p){var _;if(e&&(_=l?e(t,s,l,p):e(t)),void 0!==_)return _;if(!Et(t))return t;var y=mt(t);if(y){if(_=function(t){var r=t.length,n=t.constructor(r);r&&"string"==typeof t[0]&&P.call(t,"index")&&(n.index=t.index,n.input=t.input);return n}(t),!r)return function(t,r){var n=-1,e=t.length;r||(r=Array(e));for(;++n<e;)r[n]=t[n];return r}(t,_)}else{var b=dt(t),v=b==u||b==c;if(St(t))return function(t,r){if(r)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}(t,r);if("[object Object]"==b||b==o||v&&!l){if(O(t))return l?t:{};if(_=function(t){return"function"!=typeof t.constructor||gt(t)?{}:(r=B(t),Et(r)?W(r):{});var r}(v?{}:t),!r)return function(t,r){return _t(t,vt(t),r)}(t,function(t,r){return t&&_t(r,kt(r),t)}(_,t))}else{if(!h[b])return l?t:{};_=function(t,r,n,e){var o=t.constructor;switch(r){case"[object ArrayBuffer]":return pt(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,r){var n=r?pt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}(t,e);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,r){var n=r?pt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}(t,e);case a:return function(t,r,n){return w(r?n(m(t),!0):m(t),j,new t.constructor)}(t,e,n);case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return function(t){var r=new t.constructor(t.source,f.exec(t));return r.lastIndex=t.lastIndex,r}(t);case i:return function(t,r,n){return w(r?n(S(t),!0):S(t),g,new t.constructor)}(t,e,n);case"[object Symbol]":return u=t,et?Object(et.call(u)):{}}var u}(t,b,lt,r)}}p||(p=new at);var d=p.get(t);if(d)return d;if(p.set(t,_),!y)var A=n?function(t){return function(t,r,n){var e=r(t);return mt(t)?e:function(t,r){for(var n=-1,e=r.length,o=t.length;++n<e;)t[o+n]=r[n];return t}(e,n(t))}(t,kt,vt)}(t):kt(t);return function(t,r){for(var n=-1,e=t?t.length:0;++n<e&&!1!==r(t[n],n,t););}(A||t,(function(o,u){A&&(o=t[u=o]),ft(_,u,lt(o,r,n,e,u,t,p))})),_}function ht(t){return!(!Et(t)||function(t){return!!$&&$ in t}(t))&&(xt(t)||O(t)?T:s).test(wt(t))}function pt(t){var r=new t.constructor(t.byteLength);return new U(r).set(new U(t)),r}function _t(t,r,n,e){n||(n={});for(var o=-1,u=r.length;++o<u;){var c=r[o],a=e?e(n[c],t[c],c,n,t):void 0;ft(n,c,void 0===a?t[c]:a)}return n}function yt(r,n){var e,o,u=r.__data__;return("string"==(o=t(e=n))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==e:null===e)?u["string"==typeof n?"string":"hash"]:u.map}function bt(t,r){var n=function(t,r){return null==t?void 0:t[r]}(t,r);return ht(n)?n:void 0}ot.prototype.clear=function(){this.__data__=Q?Q(null):{}},ot.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},ot.prototype.get=function(t){var r=this.__data__;if(Q){var n=r[t];return"__lodash_hash_undefined__"===n?void 0:n}return P.call(r,t)?r[t]:void 0},ot.prototype.has=function(t){var r=this.__data__;return Q?void 0!==r[t]:P.call(r,t)},ot.prototype.set=function(t,r){return this.__data__[t]=Q&&void 0===r?"__lodash_hash_undefined__":r,this},ut.prototype.clear=function(){this.__data__=[]},ut.prototype.delete=function(t){var r=this.__data__,n=st(r,t);return!(n<0)&&(n==r.length-1?r.pop():V.call(r,n,1),!0)},ut.prototype.get=function(t){var r=this.__data__,n=st(r,t);return n<0?void 0:r[n][1]},ut.prototype.has=function(t){return st(this.__data__,t)>-1},ut.prototype.set=function(t,r){var n=this.__data__,e=st(n,t);return e<0?n.push([t,r]):n[e][1]=r,this},ct.prototype.clear=function(){this.__data__={hash:new ot,map:new(L||ut),string:new ot}},ct.prototype.delete=function(t){return yt(this,t).delete(t)},ct.prototype.get=function(t){return yt(this,t).get(t)},ct.prototype.has=function(t){return yt(this,t).has(t)},ct.prototype.set=function(t,r){return yt(this,t).set(t,r),this},at.prototype.clear=function(){this.__data__=new ut},at.prototype.delete=function(t){return this.__data__.delete(t)},at.prototype.get=function(t){return this.__data__.get(t)},at.prototype.has=function(t){return this.__data__.has(t)},at.prototype.set=function(t,r){var n=this.__data__;if(n instanceof ut){var e=n.__data__;if(!L||e.length<199)return e.push([t,r]),this;n=this.__data__=new ct(e)}return n.set(t,r),this};var vt=H?A(H,Object):function(){return[]},dt=function(t){return D.call(t)};function jt(t,r){return!!(r=null==r?9007199254740991:r)&&("number"==typeof t||l.test(t))&&t>-1&&t%1==0&&t<r}function gt(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||k)}function wt(t){if(null!=t){try{return F.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ot(t,r){return t===r||t!=t&&r!=r}(G&&"[object DataView]"!=dt(new G(new ArrayBuffer(1)))||L&&dt(new L)!=a||N&&"[object Promise]"!=dt(N.resolve())||J&&dt(new J)!=i||K&&"[object WeakMap]"!=dt(new K))&&(dt=function(t){var r=D.call(t),n="[object Object]"==r?t.constructor:void 0,e=n?wt(n):void 0;if(e)switch(e){case X:return"[object DataView]";case Y:return a;case Z:return"[object Promise]";case tt:return i;case rt:return"[object WeakMap]"}return r});var mt=Array.isArray;function At(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!xt(t)}var St=q||function(){return!1};function xt(t){var r=Et(t)?D.call(t):"";return r==u||r==c}function Et(r){var n=t(r);return!!r&&("object"==n||"function"==n)}function kt(t){return At(t)?it(t):function(t){if(!gt(t))return z(t);var r=[];for(var n in Object(t))P.call(t,n)&&"constructor"!=n&&r.push(n);return r}(t)}n.exports=function(t){return lt(t,!0,!0)}}));return function(t,r){function n(t){return null!=t}if(!n(t))throw new Error("[THROW_ID_01] missing input object");if(!et(t))throw new Error("[THROW_ID_02] the first input object must be a true object");if(n(r)&&!et(r))throw new Error("[THROW_ID_03] the second override object must be a true object");var e,o=ot(t),u=ot(r),c=Object.keys(o),a=[],i=!1;n(u)&&0!==Object.keys(u).length&&(i=!0),i&&(e=V(Object.keys(u),Object.keys(o))).forEach((function(t){return K(c,t)}));var f=function(t){for(var r=[],n=0;n<1<<t;n++){for(var e=[],o=0;o<t;o++)e.push(n&1<<o?1:0);r.push(e)}return r}(Object.keys(c).length),s={};return f.forEach((function(t,r){s={},c.forEach((function(t,n){s[t]=1===f[r][n]?1:0})),a.push(s)})),i&&a.forEach((function(t){return e.forEach((function(r){t[r]=u[r]}))})),a}}));
