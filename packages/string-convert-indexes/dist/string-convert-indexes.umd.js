/**
 * string-convert-indexes
 * Convert string character indexes from JS native index-based to Unicode character-count-based and backwards.
 * Version: 1.10.13
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-convert-indexes
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).stringConvertIndexes={})}(this,(function(e){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}Function.prototype.toString.call(Object);var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function a(e,t,r){return e(r={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&r.path)}},r.exports),r.exports}var c=a((function(e,t){var r,n,o,a,c,s,u,f,l,h,y,p,g,d,v,b,m,_;e.exports=(r="function"==typeof Promise,n="object"==typeof self?self:i,o="undefined"!=typeof Symbol,a="undefined"!=typeof Map,c="undefined"!=typeof Set,s="undefined"!=typeof WeakMap,u="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,l=o&&void 0!==Symbol.iterator,h=o&&void 0!==Symbol.toStringTag,y=c&&"function"==typeof Set.prototype.entries,p=a&&"function"==typeof Map.prototype.entries,g=y&&Object.getPrototypeOf((new Set).entries()),d=p&&Object.getPrototypeOf((new Map).entries()),v=l&&"function"==typeof Array.prototype[Symbol.iterator],b=v&&Object.getPrototypeOf([][Symbol.iterator]()),m=l&&"function"==typeof String.prototype[Symbol.iterator],_=m&&Object.getPrototypeOf(""[Symbol.iterator]()),function(e){var t=typeof e;if("object"!==t)return t;if(null===e)return"null";if(e===n)return"global";if(Array.isArray(e)&&(!1===h||!(Symbol.toStringTag in e)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&e===window.location)return"Location";if("object"==typeof window.document&&e===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&e===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&e===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&e instanceof window.HTMLElement){if("BLOCKQUOTE"===e.tagName)return"HTMLQuoteElement";if("TD"===e.tagName)return"HTMLTableDataCellElement";if("TH"===e.tagName)return"HTMLTableHeaderCellElement"}}var o=h&&e[Symbol.toStringTag];if("string"==typeof o)return o;var i=Object.getPrototypeOf(e);return i===RegExp.prototype?"RegExp":i===Date.prototype?"Date":r&&i===Promise.prototype?"Promise":c&&i===Set.prototype?"Set":a&&i===Map.prototype?"Map":u&&i===WeakSet.prototype?"WeakSet":s&&i===WeakMap.prototype?"WeakMap":f&&i===DataView.prototype?"DataView":a&&i===d?"Map Iterator":c&&i===g?"Set Iterator":v&&i===b?"Array Iterator":m&&i===_?"String Iterator":null===i?"Object":Object.prototype.toString.call(e).slice(8,-1)})}));function s(e,t,r){if(t!=t)return function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,f,r);for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}function u(e,t,r,n){for(var o=r-1,i=e.length;++o<i;)if(n(e[o],t))return o;return-1}function f(e){return e!=e}var l=Array.prototype.splice;function h(e,t,r,n){var o,i=n?u:s,a=-1,c=t.length,f=e;for(e===t&&(t=function(e,t){var r=-1,n=e.length;t||(t=Array(n));for(;++r<n;)t[r]=e[r];return t}(t)),r&&(f=function(e,t){for(var r=-1,n=e?e.length:0,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}(e,(o=r,function(e){return o(e)})));++a<c;)for(var h=0,y=t[a],p=r?r(y):y;(h=i(f,p,h,n))>-1;)f!==e&&l.call(f,h,1),l.call(e,h,1);return e}var y=function(e,t){return e&&e.length&&t&&t.length?h(e,t):e},p=a((function(e,t){var r="[object Arguments]",n="[object Function]",o="[object GeneratorFunction]",a="[object Map]",c="[object Set]",s=/\w*$/,u=/^\[object .+?Constructor\]$/,f=/^(?:0|[1-9]\d*)$/,l={};l[r]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object DataView]"]=l["[object Boolean]"]=l["[object Date]"]=l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l[a]=l["[object Number]"]=l["[object Object]"]=l["[object RegExp]"]=l[c]=l["[object String]"]=l["[object Symbol]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l["[object Error]"]=l[n]=l["[object WeakMap]"]=!1;var h="object"==typeof i&&i&&i.Object===Object&&i,y="object"==typeof self&&self&&self.Object===Object&&self,p=h||y||Function("return this")(),g=t&&!t.nodeType&&t,d=g&&e&&!e.nodeType&&e,v=d&&d.exports===g;function b(e,t){return e.set(t[0],t[1]),e}function m(e,t){return e.add(t),e}function _(e,t,r,n){var o=-1,i=e?e.length:0;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r}function j(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function w(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function O(e,t){return function(r){return e(t(r))}}function $(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}var S,A=Array.prototype,T=Function.prototype,k=Object.prototype,W=p["__core-js_shared__"],I=(S=/[^.]+$/.exec(W&&W.keys&&W.keys.IE_PROTO||""))?"Symbol(src)_1."+S:"",x=T.toString,E=k.hasOwnProperty,N=k.toString,P=RegExp("^"+x.call(E).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),M=v?p.Buffer:void 0,D=p.Symbol,R=p.Uint8Array,F=O(Object.getPrototypeOf,Object),C=Object.create,H=k.propertyIsEnumerable,J=A.splice,L=Object.getOwnPropertySymbols,V=M?M.isBuffer:void 0,K=O(Object.keys,Object),q=de(p,"DataView"),U=de(p,"Map"),B=de(p,"Promise"),z=de(p,"Set"),G=de(p,"WeakMap"),Q=de(Object,"create"),X=je(q),Y=je(U),Z=je(B),ee=je(z),te=je(G),re=D?D.prototype:void 0,ne=re?re.valueOf:void 0;function oe(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function ie(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function ae(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function ce(e){this.__data__=new ie(e)}function se(e,t){var n=Oe(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&$e(e)}(e)&&E.call(e,"callee")&&(!H.call(e,"callee")||N.call(e)==r)}(e)?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],o=n.length,i=!!o;for(var a in e)!t&&!E.call(e,a)||i&&("length"==a||me(a,o))||n.push(a);return n}function ue(e,t,r){var n=e[t];E.call(e,t)&&we(n,r)&&(void 0!==r||t in e)||(e[t]=r)}function fe(e,t){for(var r=e.length;r--;)if(we(e[r][0],t))return r;return-1}function le(e,t,i,u,f,h,y){var p;if(u&&(p=h?u(e,f,h,y):u(e)),void 0!==p)return p;if(!Te(e))return e;var g=Oe(e);if(g){if(p=function(e){var t=e.length,r=e.constructor(t);t&&"string"==typeof e[0]&&E.call(e,"index")&&(r.index=e.index,r.input=e.input);return r}(e),!t)return function(e,t){var r=-1,n=e.length;t||(t=Array(n));for(;++r<n;)t[r]=e[r];return t}(e,p)}else{var d=be(e),v=d==n||d==o;if(Se(e))return function(e,t){if(t)return e.slice();var r=new e.constructor(e.length);return e.copy(r),r}(e,t);if("[object Object]"==d||d==r||v&&!h){if(j(e))return h?e:{};if(p=function(e){return"function"!=typeof e.constructor||_e(e)?{}:(t=F(e),Te(t)?C(t):{});var t}(v?{}:e),!t)return function(e,t){return pe(e,ve(e),t)}(e,function(e,t){return e&&pe(t,ke(t),e)}(p,e))}else{if(!l[d])return h?e:{};p=function(e,t,r,n){var o=e.constructor;switch(t){case"[object ArrayBuffer]":return ye(e);case"[object Boolean]":case"[object Date]":return new o(+e);case"[object DataView]":return function(e,t){var r=t?ye(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(e,t){var r=t?ye(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}(e,n);case a:return function(e,t,r){return _(t?r(w(e),!0):w(e),b,new e.constructor)}(e,n,r);case"[object Number]":case"[object String]":return new o(e);case"[object RegExp]":return function(e){var t=new e.constructor(e.source,s.exec(e));return t.lastIndex=e.lastIndex,t}(e);case c:return function(e,t,r){return _(t?r($(e),!0):$(e),m,new e.constructor)}(e,n,r);case"[object Symbol]":return i=e,ne?Object(ne.call(i)):{}}var i}(e,d,le,t)}}y||(y=new ce);var O=y.get(e);if(O)return O;if(y.set(e,p),!g)var S=i?function(e){return function(e,t,r){var n=t(e);return Oe(e)?n:function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}(n,r(e))}(e,ke,ve)}(e):ke(e);return function(e,t){for(var r=-1,n=e?e.length:0;++r<n&&!1!==t(e[r],r,e););}(S||e,(function(r,n){S&&(r=e[n=r]),ue(p,n,le(r,t,i,u,n,e,y))})),p}function he(e){return!(!Te(e)||(t=e,I&&I in t))&&(Ae(e)||j(e)?P:u).test(je(e));var t}function ye(e){var t=new e.constructor(e.byteLength);return new R(t).set(new R(e)),t}function pe(e,t,r,n){r||(r={});for(var o=-1,i=t.length;++o<i;){var a=t[o],c=n?n(r[a],e[a],a,r,e):void 0;ue(r,a,void 0===c?e[a]:c)}return r}function ge(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function de(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return he(r)?r:void 0}oe.prototype.clear=function(){this.__data__=Q?Q(null):{}},oe.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},oe.prototype.get=function(e){var t=this.__data__;if(Q){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return E.call(t,e)?t[e]:void 0},oe.prototype.has=function(e){var t=this.__data__;return Q?void 0!==t[e]:E.call(t,e)},oe.prototype.set=function(e,t){return this.__data__[e]=Q&&void 0===t?"__lodash_hash_undefined__":t,this},ie.prototype.clear=function(){this.__data__=[]},ie.prototype.delete=function(e){var t=this.__data__,r=fe(t,e);return!(r<0)&&(r==t.length-1?t.pop():J.call(t,r,1),!0)},ie.prototype.get=function(e){var t=this.__data__,r=fe(t,e);return r<0?void 0:t[r][1]},ie.prototype.has=function(e){return fe(this.__data__,e)>-1},ie.prototype.set=function(e,t){var r=this.__data__,n=fe(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},ae.prototype.clear=function(){this.__data__={hash:new oe,map:new(U||ie),string:new oe}},ae.prototype.delete=function(e){return ge(this,e).delete(e)},ae.prototype.get=function(e){return ge(this,e).get(e)},ae.prototype.has=function(e){return ge(this,e).has(e)},ae.prototype.set=function(e,t){return ge(this,e).set(e,t),this},ce.prototype.clear=function(){this.__data__=new ie},ce.prototype.delete=function(e){return this.__data__.delete(e)},ce.prototype.get=function(e){return this.__data__.get(e)},ce.prototype.has=function(e){return this.__data__.has(e)},ce.prototype.set=function(e,t){var r=this.__data__;if(r instanceof ie){var n=r.__data__;if(!U||n.length<199)return n.push([e,t]),this;r=this.__data__=new ae(n)}return r.set(e,t),this};var ve=L?O(L,Object):function(){return[]},be=function(e){return N.call(e)};function me(e,t){return!!(t=null==t?9007199254740991:t)&&("number"==typeof e||f.test(e))&&e>-1&&e%1==0&&e<t}function _e(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||k)}function je(e){if(null!=e){try{return x.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function we(e,t){return e===t||e!=e&&t!=t}(q&&"[object DataView]"!=be(new q(new ArrayBuffer(1)))||U&&be(new U)!=a||B&&"[object Promise]"!=be(B.resolve())||z&&be(new z)!=c||G&&"[object WeakMap]"!=be(new G))&&(be=function(e){var t=N.call(e),r="[object Object]"==t?e.constructor:void 0,n=r?je(r):void 0;if(n)switch(n){case X:return"[object DataView]";case Y:return a;case Z:return"[object Promise]";case ee:return c;case te:return"[object WeakMap]"}return t});var Oe=Array.isArray;function $e(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}(e.length)&&!Ae(e)}var Se=V||function(){return!1};function Ae(e){var t=Te(e)?N.call(e):"";return t==n||t==o}function Te(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function ke(e){return $e(e)?se(e):function(e){if(!_e(e))return K(e);var t=[];for(var r in Object(e))E.call(e,r)&&"constructor"!=r&&t.push(r);return t}(e)}e.exports=function(e){return le(e,!0,!0)}}));function g(e){return"string"==typeof e&&e.length&&"."===e[0]?e.slice(1):e}function d(e,t){return function e(t,r,n,o){const i=p(t);let a,c,s;const u={depth:-1,path:"",...n};if(u.depth+=1,Array.isArray(i))for(a=0,c=i.length;a<c&&!o.now;a++){const t=`${u.path}.${a}`;void 0!==i[a]?(u.parent=p(i),u.parentType="array",s=e(r(i[a],void 0,{...u,path:g(t)},o),r,{...u,path:g(t)},o),Number.isNaN(s)&&a<i.length?(i.splice(a,1),a-=1):i[a]=s):i.splice(a,1)}else if((f=i)&&"object"==typeof f&&!Array.isArray(f))for(const t in i){if(o.now&&null!=t)break;const n=`${u.path}.${t}`;0===u.depth&&null!=t&&(u.topmostKey=t),u.parent=p(i),u.parentType="object",s=e(r(t,i[t],{...u,path:g(n)},o),r,{...u,path:g(n)},o),Number.isNaN(s)?delete i[t]:i[t]=s}var f;return i}(e,t,{},{now:!1})}var v=/^\[object .+?Constructor\]$/,b="object"==typeof i&&i&&i.Object===Object&&i,m="object"==typeof self&&self&&self.Object===Object&&self,_=b||m||Function("return this")();function j(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function w(e,t){return!!(e?e.length:0)&&function(e,t,r){if(t!=t)return function(e,t,r,n){var o=e.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,S,r);var n=r-1,o=e.length;for(;++n<o;)if(e[n]===t)return n;return-1}(e,t,0)>-1}function O(e,t,r){for(var n=-1,o=e?e.length:0;++n<o;)if(r(t,e[n]))return!0;return!1}function $(e,t){for(var r=-1,n=e?e.length:0,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}function S(e){return e!=e}function A(e){return function(t){return e(t)}}function T(e,t){return e.has(t)}var k,W,I,x=Array.prototype,E=Function.prototype,N=Object.prototype,P=_["__core-js_shared__"],M=(k=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+k:"",D=E.toString,R=N.hasOwnProperty,F=N.toString,C=RegExp("^"+D.call(R).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),H=x.splice,J=Math.max,L=Math.min,V=Z(_,"Map"),K=Z(Object,"create");function q(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function U(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function B(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function z(e){var t=-1,r=e?e.length:0;for(this.__data__=new B;++t<r;)this.add(e[t])}function G(e,t){for(var r,n,o=e.length;o--;)if((r=e[o][0])===(n=t)||r!=r&&n!=n)return o;return-1}function Q(e){return!(!te(e)||(t=e,M&&M in t))&&(ee(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?C:v).test(function(e){if(null!=e){try{return D.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e));var t}function X(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&function(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}(e.length)&&!ee(e)}(e)}(e)?e:[]}function Y(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function Z(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return Q(r)?r:void 0}function ee(e){var t=te(e)?F.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}function te(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}q.prototype.clear=function(){this.__data__=K?K(null):{}},q.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},q.prototype.get=function(e){var t=this.__data__;if(K){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return R.call(t,e)?t[e]:void 0},q.prototype.has=function(e){var t=this.__data__;return K?void 0!==t[e]:R.call(t,e)},q.prototype.set=function(e,t){return this.__data__[e]=K&&void 0===t?"__lodash_hash_undefined__":t,this},U.prototype.clear=function(){this.__data__=[]},U.prototype.delete=function(e){var t=this.__data__,r=G(t,e);return!(r<0)&&(r==t.length-1?t.pop():H.call(t,r,1),!0)},U.prototype.get=function(e){var t=this.__data__,r=G(t,e);return r<0?void 0:t[r][1]},U.prototype.has=function(e){return G(this.__data__,e)>-1},U.prototype.set=function(e,t){var r=this.__data__,n=G(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},B.prototype.clear=function(){this.__data__={hash:new q,map:new(V||U),string:new q}},B.prototype.delete=function(e){return Y(this,e).delete(e)},B.prototype.get=function(e){return Y(this,e).get(e)},B.prototype.has=function(e){return Y(this,e).has(e)},B.prototype.set=function(e,t){return Y(this,e).set(e,t),this},z.prototype.add=z.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},z.prototype.has=function(e){return this.__data__.has(e)};var re=(W=function(e){var t=$(e,X);return t.length&&t[0]===e[0]?function(e,t,r){for(var n=r?O:w,o=e[0].length,i=e.length,a=i,c=Array(i),s=1/0,u=[];a--;){var f=e[a];a&&t&&(f=$(f,A(t))),s=L(f.length,s),c[a]=!r&&(t||o>=120&&f.length>=120)?new z(a&&f):void 0}f=e[0];var l=-1,h=c[0];e:for(;++l<o&&u.length<s;){var y=f[l],p=t?t(y):y;if(y=r||0!==y?y:0,!(h?T(h,p):n(u,p,r))){for(a=i;--a;){var g=c[a];if(!(g?T(g,p):n(e[a],p,r)))continue e}h&&h.push(p),u.push(y)}}return u}(t):[]},I=J(void 0===I?W.length-1:I,0),function(){for(var e=arguments,t=-1,r=J(e.length-I,0),n=Array(r);++t<r;)n[t]=e[I+t];t=-1;for(var o=Array(I+1);++t<I;)o[t]=e[t];return o[I]=n,j(W,this,o)});function ne(e){return"string"==typeof e?e.length>0?[e]:[]:e}var oe=a((function(e){e.exports=function(){var e=Object.prototype.toString;function t(e,t){return null!=e&&Object.prototype.hasOwnProperty.call(e,t)}function r(e){if(!e)return!0;if(o(e)&&0===e.length)return!0;if("string"!=typeof e){for(var r in e)if(t(e,r))return!1;return!0}return!1}function n(t){return e.call(t)}var o=Array.isArray||function(t){return"[object Array]"===e.call(t)};function i(e){var t=parseInt(e);return t.toString()===e?t:e}function a(e){e=e||{};var a=function(e){return Object.keys(a).reduce((function(t,r){return"create"===r||"function"==typeof a[r]&&(t[r]=a[r].bind(a,e)),t}),{})};function c(r,n){return e.includeInheritedProps||"number"==typeof n&&Array.isArray(r)||t(r,n)}function s(e,t){if(c(e,t))return e[t]}function u(e,t,r,n){if("number"==typeof t&&(t=[t]),!t||0===t.length)return e;if("string"==typeof t)return u(e,t.split(".").map(i),r,n);var o=t[0],a=s(e,o);return 1===t.length?(void 0!==a&&n||(e[o]=r),a):(void 0===a&&("number"==typeof t[1]?e[o]=[]:e[o]={}),u(e[o],t.slice(1),r,n))}return a.has=function(r,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!r;for(var a=0;a<n.length;a++){var c=i(n[a]);if(!("number"==typeof c&&o(r)&&c<r.length||(e.includeInheritedProps?c in Object(r):t(r,c))))return!1;r=r[c]}return!0},a.ensureExists=function(e,t,r){return u(e,t,r,!0)},a.set=function(e,t,r,n){return u(e,t,r,n)},a.insert=function(e,t,r,n){var i=a.get(e,t);n=~~n,o(i)||(i=[],a.set(e,t,i)),i.splice(n,0,r)},a.empty=function(e,t){var i,s;if(!r(t)&&null!=e&&(i=a.get(e,t))){if("string"==typeof i)return a.set(e,t,"");if(function(e){return"boolean"==typeof e||"[object Boolean]"===n(e)}(i))return a.set(e,t,!1);if("number"==typeof i)return a.set(e,t,0);if(o(i))i.length=0;else{if(!function(e){return"object"==typeof e&&"[object Object]"===n(e)}(i))return a.set(e,t,null);for(s in i)c(i,s)&&delete i[s]}}},a.push=function(e,t){var r=a.get(e,t);o(r)||(r=[],a.set(e,t,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},a.coalesce=function(e,t,r){for(var n,o=0,i=t.length;o<i;o++)if(void 0!==(n=a.get(e,t[o])))return n;return r},a.get=function(e,t,r){if("number"==typeof t&&(t=[t]),!t||0===t.length)return e;if(null==e)return r;if("string"==typeof t)return a.get(e,t.split("."),r);var n=i(t[0]),o=s(e,n);return void 0===o?r:1===t.length?o:a.get(e[n],t.slice(1),r)},a.del=function(e,t){if("number"==typeof t&&(t=[t]),null==e)return e;if(r(t))return e;if("string"==typeof t)return a.del(e,t.split("."));var n=i(t[0]);return c(e,n)?1!==t.length?a.del(e[n],t.slice(1)):(o(e)?e.splice(n,1):delete e[n],e):e},a}var c=a();return c.create=a,c.withInheritedProps=a({includeInheritedProps:!0}),c}()}));const ie=new Map;function ae(e,t){t={caseSensitive:!1,...t};const r=e+JSON.stringify(t);if(ie.has(r))return ie.get(r);const n="!"===e[0];n&&(e=e.slice(1)),e=(e=>{if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")})(e).replace(/\\\*/g,"[\\s\\S]*");const o=new RegExp(`^${e}$`,t.caseSensitive?"":"i");return o.negated=n,ie.set(r,o),o}var ce=(e,t,r)=>{if(!Array.isArray(e)||!Array.isArray(t))throw new TypeError(`Expected two arrays, got ${typeof e} ${typeof t}`);if(0===t.length)return e;const n="!"===t[0][0];t=t.map(e=>ae(e,r));const o=[];for(const r of e){let e=n;for(const n of t)n.test(r)&&(e=!n.negated);e&&o.push(r)}return o};function se(e,t,r){return function e(t,r,n,o=!0){const i=Object.prototype.hasOwnProperty;function a(e){return null!=e}function s(e){return"Object"===c(e)}function u(e,t){return t=ne(t),Array.from(e).filter(e=>!t.some(t=>ce.isMatch(e,t,{caseSensitive:!0})))}const f=["any","anything","every","everything","all","whatever","whatevs"],l=Array.isArray;if(!a(t))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const h={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};let p;if(p=a(n)&&s(n)?{...h,...n}:{...h},a(p.ignoreKeys)&&p.ignoreKeys?p.ignoreKeys=ne(p.ignoreKeys):p.ignoreKeys=[],a(p.ignorePaths)&&p.ignorePaths?p.ignorePaths=ne(p.ignorePaths):p.ignorePaths=[],a(p.acceptArraysIgnore)&&p.acceptArraysIgnore?p.acceptArraysIgnore=ne(p.acceptArraysIgnore):p.acceptArraysIgnore=[],p.msg="string"==typeof p.msg?p.msg.trim():p.msg,":"===p.msg[p.msg.length-1]&&(p.msg=p.msg.slice(0,p.msg.length-1).trim()),p.schema&&(Object.keys(p.schema).forEach(e=>{if(s(p.schema[e])){const t={};d(p.schema[e],(r,n,o)=>{const i=void 0!==n?n:r;return l(i)||s(i)||(t[`${e}.${o.path}`]=i),i}),delete p.schema[e],p.schema=Object.assign(p.schema,t)}}),Object.keys(p.schema).forEach(e=>{l(p.schema[e])||(p.schema[e]=[p.schema[e]]),p.schema[e]=p.schema[e].map(String).map(e=>e.toLowerCase()).map(e=>e.trim())})),a(r)||(r={}),o&&e(p,h,{enforceStrictKeyset:!1},!1),p.enforceStrictKeyset)if(a(p.schema)&&Object.keys(p.schema).length>0){if(0!==u(y(Object.keys(t),Object.keys(r).concat(Object.keys(p.schema))),p.ignoreKeys).length){const e=y(Object.keys(t),Object.keys(r).concat(Object.keys(p.schema)));throw new TypeError(`${p.msg}: ${p.optsVarName}.enforceStrictKeyset is on and the following key${e.length>1?"s":""} ${e.length>1?"are":"is"} not covered by schema and/or reference objects: ${e.join(", ")}`)}}else{if(!(a(r)&&Object.keys(r).length>0))throw new TypeError(`${p.msg}: Both ${p.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==u(y(Object.keys(t),Object.keys(r)),p.ignoreKeys).length){const e=y(Object.keys(t),Object.keys(r));throw new TypeError(`${p.msg}: The input object has key${e.length>1?"s":""} which ${e.length>1?"are":"is"} not covered by the reference object: ${e.join(", ")}`)}if(0!==u(y(Object.keys(r),Object.keys(t)),p.ignoreKeys).length){const e=y(Object.keys(r),Object.keys(t));throw new TypeError(`${p.msg}: The reference object has key${e.length>1?"s":""} which ${e.length>1?"are":"is"} not present in the input object: ${e.join(", ")}`)}}const g=[];d(t,(e,n,o)=>{let a=n,u=e;if("array"===o.parentType&&(u=void 0,a=e),l(g)&&g.length&&g.some(e=>o.path.startsWith(e)))return a;if(u&&p.ignoreKeys.some(e=>ce.isMatch(u,e)))return a;if(p.ignorePaths.some(e=>ce.isMatch(o.path,e)))return a;const h=!(!s(a)&&!l(a)&&l(o.parent));let y=!1;s(p.schema)&&i.call(p.schema,oe.get(o.path))&&(y=!0);let d=!1;if(s(r)&&oe.has(r,oe.get(o.path))&&(d=!0),p.enforceStrictKeyset&&h&&!y&&!d)throw new TypeError(`${p.msg}: ${p.optsVarName}.${o.path} is neither covered by reference object (second input argument), nor ${p.optsVarName}.schema! To stop this error, turn off ${p.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${p.optsVarName}.schema).\n\nDebug info:\n\nobj = ${JSON.stringify(t,null,4)}\n\nref = ${JSON.stringify(r,null,4)}\n\ninnerObj = ${JSON.stringify(o,null,4)}\n\nopts = ${JSON.stringify(p,null,4)}\n\ncurrent = ${JSON.stringify(a,null,4)}\n\n`);if(y){const e=ne(p.schema[o.path]).map(String).map(e=>e.toLowerCase());if(oe.set(p.schema,o.path,e),re(e,f).length)g.push(o.path);else if(!0!==a&&!1!==a&&!e.includes(c(a).toLowerCase())||(!0===a||!1===a)&&!e.includes(String(a))&&!e.includes("boolean")){if(!l(a)||!p.acceptArrays)throw new TypeError(`${p.msg}: ${p.optsVarName}.${o.path} was customised to ${"string"!==c(a)?'"':""}${JSON.stringify(a,null,0)}${"string"!==c(a)?'"':""} (type: ${c(a).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(e,null,0)})`);for(let t=0,r=a.length;t<r;t++)if(!e.includes(c(a[t]).toLowerCase()))throw new TypeError(`${p.msg}: ${p.optsVarName}.${o.path}.${t}, the ${t}th element (equal to ${JSON.stringify(a[t],null,0)}) is of a type ${c(a[t]).toLowerCase()}, but only the following are allowed by the ${p.optsVarName}.schema: ${e.join(", ")}`)}}else if(d){const t=oe.get(r,o.path);if(p.acceptArrays&&l(a)&&!p.acceptArraysIgnore.includes(e)){if(!a.every(t=>c(t).toLowerCase()===c(r[e]).toLowerCase()))throw new TypeError(`${p.msg}: ${p.optsVarName}.${o.path} was customised to be array, but not all of its elements are ${c(r[e]).toLowerCase()}-type`)}else if(c(a)!==c(t))throw new TypeError(`${p.msg}: ${p.optsVarName}.${o.path} was customised to ${"string"===c(a).toLowerCase()?"":'"'}${JSON.stringify(a,null,0)}${"string"===c(a).toLowerCase()?"":'"'} which is not ${c(t).toLowerCase()} but ${c(a).toLowerCase()}`)}return a})}(e,t,r)}function ue(e){if("string"==typeof e)return!e.trim();if(!["object","string"].includes(typeof e)||!e)return!1;let t=!0;return e=d(e,(e,r,n,o)=>{const i=void 0!==r?r:e;return"string"==typeof i&&i.trim()&&(t=!1,o.now=!0),i}),t}ce.isMatch=(e,t,r)=>{const n=Array.isArray(e)?e:[e],o=Array.isArray(t)?t:[t];return n.some(e=>o.every(t=>{const n=ae(t,r),o=n.test(e);return n.negated?!o:o}))};const fe=Array.isArray;function le(e){return null!=e}function he(e){return e&&"object"==typeof e&&!Array.isArray(e)}function ye(e){return"string"==typeof e}function pe(e){return he(e)||ye(e)||function(e){return"number"==typeof e}(e)||function(e){return"boolean"==typeof e}(e)||fe(e)||function(e){return null===e}(e)}function ge(e,t,r){if(void 0===e)throw new TypeError("ast-compare/compare(): [THROW_ID_01] first argument is missing!");if(void 0===t)throw new TypeError("ast-compare/compare(): [THROW_ID_02] second argument is missing!");if(le(e)&&!pe(e))throw new TypeError(`ast-compare/compare(): [THROW_ID_03] first input argument is of a wrong type, ${c(e)}, equal to: ${JSON.stringify(e,null,4)}`);if(le(t)&&!pe(t))throw new TypeError(`ast-compare/compare(): [THROW_ID_04] second input argument is of a wrong type, ${c(t)}, equal to: ${JSON.stringify(t,null,4)}`);if(le(r)&&!he(r))throw new TypeError(`ast-compare/compare(): [THROW_ID_05] third argument, options object, must, well, be an object! Currently it's: ${c(r)} and equal to: ${JSON.stringify(r,null,4)}`);let n,o,i,a=0;const s={hungryForWhitespace:!1,matchStrictly:!1,verboseWhenMismatches:!1,useWildcards:!1,...r};if(s.hungryForWhitespace&&s.matchStrictly&&he(e)&&ue(e)&&he(t)&&!Object.keys(t).length)return!0;if((!s.hungryForWhitespace||s.hungryForWhitespace&&!ue(e)&&ue(t))&&he(e)&&0!==Object.keys(e).length&&he(t)&&0===Object.keys(t).length||c(e)!==c(t)&&(!s.hungryForWhitespace||s.hungryForWhitespace&&!ue(e)))return!1;if(ye(e)&&ye(t))return!!(s.hungryForWhitespace&&ue(e)&&ue(t))||(s.verboseWhenMismatches?e===t||`Given string ${t} is not matched! We have ${e} on the other end.`:s.useWildcards?ce.isMatch(e,t,{caseSensitive:!0}):e===t);if(fe(e)&&fe(t)){if(s.hungryForWhitespace&&ue(t)&&(!s.matchStrictly||s.matchStrictly&&e.length===t.length))return!0;if(!s.hungryForWhitespace&&t.length>e.length||s.matchStrictly&&t.length!==e.length)return!!s.verboseWhenMismatches&&`The length of a given array, ${JSON.stringify(t,null,4)} is ${t.length} but the length of an array on the other end, ${JSON.stringify(e,null,4)} is ${e.length}`;if(0===t.length)return 0===e.length||!!s.verboseWhenMismatches&&`The given array has no elements, but the array on the other end, ${JSON.stringify(e,null,4)} does have some`;for(let r=0,n=t.length;r<n;r++){i=!1;for(let n=a,o=e.length;n<o;n++)if(a+=1,!0===ge(e[n],t[r],s)){i=!0;break}if(!i)return!!s.verboseWhenMismatches&&`The given array ${JSON.stringify(t,null,4)} is not a subset of an array on the other end, ${JSON.stringify(e,null,4)}`}}else{if(!he(e)||!he(t))return!(!(s.hungryForWhitespace&&ue(e)&&ue(t))||s.matchStrictly&&(!s.matchStrictly||(u=t,he(u)?Object.keys(u).length:!fe(u)&&!ye(u)||u.length)))||e===t;if(n=new Set(Object.keys(t)),o=new Set(Object.keys(e)),s.matchStrictly&&n.size!==o.size){if(!s.verboseWhenMismatches)return!1;const e=new Set([...n].filter(e=>!o.has(e))),t=e.size?` First object has unique keys: ${JSON.stringify(e,null,4)}.`:"",r=new Set([...o].filter(e=>!n.has(e)));return`When matching strictly, we found that both objects have different amount of keys.${t}${r.size?` Second object has unique keys:\n        ${JSON.stringify(r,null,4)}.`:""}`}for(const r of n){if(!Object.prototype.hasOwnProperty.call(e,r))return!s.useWildcards||s.useWildcards&&!r.includes("*")?!!s.verboseWhenMismatches&&`The given object has key "${r}" which the other-one does not have.`:!!Object.keys(e).some(e=>ce.isMatch(e,r,{caseSensitive:!0}))||!!s.verboseWhenMismatches&&`The given object has key "${r}" which the other-one does not have.`;if(le(e[r])&&c(e[r])!==c(t[r])){if(!(ue(e[r])&&ue(t[r])&&s.hungryForWhitespace))return!!s.verboseWhenMismatches&&`The given key ${r} is of a different type on both objects. On the first-one, it's ${c(t[r])}, on the second-one, it's ${c(e[r])}`}else if(!0!==ge(e[r],t[r],s))return!!s.verboseWhenMismatches&&`The given piece ${JSON.stringify(t[r],null,4)} and ${JSON.stringify(e[r],null,4)} don't match.`}}var u;return!0}function de(e){return null!=e}function ve(e){return void 0!==e}function be(e,t){return typeof e==typeof t&&ge(e,t,{matchStrictly:!0,useWildcards:!0})}function me(e,t){if(!de(e))throw new Error("ast-monkey/main.js/set(): [THROW_ID_12] Please provide the input");if(!(r=t)||"object"!=typeof r||Array.isArray(r))throw new Error("ast-monkey/main.js/set(): [THROW_ID_13] Please provide the input");var r;if(!de(t.key)&&!ve(t.val))throw new Error("ast-monkey/main.js/set(): [THROW_ID_14] Please provide opts.val");if(!de(t.index))throw new Error("ast-monkey/main.js/set(): [THROW_ID_15] Please provide opts.index");const n={...t};if("string"==typeof n.index&&/^\d*$/.test(n.index))n.index=parseInt(n.index,10);else if(!Number.isInteger(n.index))throw new Error("ast-monkey/main.js/set(): [THROW_ID_17] opts.index must be a natural number. It was given as: "+n.index);return de(n.key)&&!ve(n.val)&&(n.val=n.key),se(n,null,{schema:{key:[null,"string"],val:"any",index:"number"},msg:"ast-monkey/set(): [THROW_ID_18*]"}),function(e,t){if(!de(e))throw new Error("ast-monkey/main.js/monkey(): [THROW_ID_01] Please provide an input");const r={key:null,val:void 0,...t},n={count:0,gatherPath:[],finding:null},o=[];let i=!1,a=!1;de(r.key)&&!ve(r.val)&&(i=!0),!de(r.key)&&ve(r.val)&&(a=!0);let c=e;return"arrayFirstOnly"===r.mode&&Array.isArray(c)&&c.length>0&&(c=[c[0]]),c=d(c,(e,t,c)=>{let s;if(n.count+=1,n.gatherPath.length=c.depth,n.gatherPath.push(n.count),"get"===r.mode)n.count===r.index&&(ve(t)?(n.finding={},n.finding[e]=t):n.finding=e);else if("find"===r.mode||"del"===r.mode){if(!("any"===r.only||"array"===r.only&&void 0===t||"object"===r.only&&void 0!==t)||!(i&&be(e,r.key)||a&&be(t,r.val)||!i&&!a&&be(e,r.key)&&be(t,r.val)))return void 0!==t?t:e;if("find"!==r.mode)return NaN;s={},s.index=n.count,s.key=e,s.val=t,s.path=[...n.gatherPath],o.push(s)}return"set"===r.mode&&n.count===r.index?r.val:"drop"===r.mode&&n.count===r.index?NaN:"arrayFirstOnly"===r.mode?ve(t)&&Array.isArray(t)?[t[0]]:de(e)&&Array.isArray(e)?[e[0]]:void 0!==t?t:e:void 0!==t?t:e}),"get"===r.mode?n.finding:"find"===r.mode?o.length>0?o:null:c}(e,{...n,mode:"set"})}function _e(e){return"string"==typeof e}function je(e){throw new Error("string-convert-indexes: [THROW_ID_01*] Missing ".concat(e,"th parameter!"))}function we(e){return"string"==typeof e?parseInt(e,10):e}function Oe(e,r,n,i){if(!_e(r)||0===r.length)throw new TypeError("string-convert-indexes: [THROW_ID_02] the first input argument, input string, must be a non-zero-length string! Currently it's: ".concat(t(r),", equal to:\n").concat(r));if(i&&"object"!==t(i))throw new TypeError("string-convert-indexes: [THROW_ID_03] the third input argument, Optional Options Object, must be a plain object! Currently it's: ".concat(t(i),", equal to:\n").concat(i));var a=o(o({},{throwIfAnyOfTheIndexesAreOutsideOfTheReferenceString:!0}),i),c={id:0},s=[];if(Number.isInteger(n)&&n>=0||/^\d*$/.test(n)?s=[{id:1,val:n}]:n=d(n,(function(e,t){return c.id+=1,c.val=void 0!==t?t:e,(Number.isInteger(c.val)&&c.val>=0||/^\d*$/.test(c.val))&&s.push(o({},c)),c.val})),0===s.length)return n;s=s.sort((function(e,t){return we(e.val)<we(t.val)?-1:we(e.val)>we(t.val)?1:0}));for(var u=-1,f=!1,l=0,h=r.length;l<=h;l++){if(void 0===r[l]?u+=1:r[l].charCodeAt(0)>=55296&&r[l].charCodeAt(0)<=57343?!0!==f?(u+=1,f=!0):f=!1:(u+=1,!0===f&&(f=!1)),"n"===e){for(var y=0,p=s.length;y<p;y++)if(we(s[y].val)===l)s[y].res=_e(s[y].val)?String(u):u;else if(we(s[y].val)>l)break}else for(var g=0,v=s.length;g<v;g++)if(we(s[g].val)===u&&void 0===s[g].res)s[g].res=_e(s[g].val)?String(l):l;else if(we(s[g].val)>u)break;if(a.throwIfAnyOfTheIndexesAreOutsideOfTheReferenceString&&l===h-1&&("n"===e&&we(s[s.length-1].val)>h||"u"===e&&we(s[s.length-1].val)>u+1))throw"n"===e?new Error("string-convert-indexes: [THROW_ID_05] the reference string has native JS string indexes going only upto ".concat(l,", but you are trying to convert an index larger than that, ").concat(we(s[s.length-1].val))):new Error("string-convert-indexes: [THROW_ID_06] the reference string has Unicode character count going only upto ".concat(u,", but you are trying to convert an index larger than that, ").concat(we(s[s.length-1].val)))}if(Number.isInteger(n)&&n>=0||/^\d*$/.test(n))return void 0!==s[0].res?s[0].res:s[0].val;for(var b=Array.from(n),m=s.length;m--;)b=me(b,{index:s[m].id,val:void 0!==s[m].res?s[m].res:s[m].val});return b}e.nativeToUnicode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je(1),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:je(2),r=arguments.length>2?arguments[2]:void 0;return Oe("n",e,t,r)},e.unicodeToNative=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je(1),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:je(2),r=arguments.length>2?arguments[2]:void 0;return Oe("u",e,t,r)},Object.defineProperty(e,"__esModule",{value:!0})}));
