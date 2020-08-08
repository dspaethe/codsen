/**
 * check-types-mini
 * Check the types of your options object's values after user has customised them
 * Version: 5.7.65
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/check-types-mini
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).checkTypesMini=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(r){e(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){u=!0,c=t},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw c}}}}var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function i(t,e,r){return t(r={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&r.path)}},r.exports),r.exports}var u=i((function(e,r){var n,o,a,i,u,s,f,l,p,y,h,g,b,d,v,_,m,j;e.exports=(n="function"==typeof Promise,o="object"===("undefined"==typeof self?"undefined":t(self))?self:c,a="undefined"!=typeof Symbol,i="undefined"!=typeof Map,u="undefined"!=typeof Set,s="undefined"!=typeof WeakMap,f="undefined"!=typeof WeakSet,l="undefined"!=typeof DataView,p=a&&void 0!==Symbol.iterator,y=a&&void 0!==Symbol.toStringTag,h=u&&"function"==typeof Set.prototype.entries,g=i&&"function"==typeof Map.prototype.entries,b=h&&Object.getPrototypeOf((new Set).entries()),d=g&&Object.getPrototypeOf((new Map).entries()),v=p&&"function"==typeof Array.prototype[Symbol.iterator],_=v&&Object.getPrototypeOf([][Symbol.iterator]()),m=p&&"function"==typeof String.prototype[Symbol.iterator],j=m&&Object.getPrototypeOf(""[Symbol.iterator]()),function(e){var r=t(e);if("object"!==r)return r;if(null===e)return"null";if(e===o)return"global";if(Array.isArray(e)&&(!1===y||!(Symbol.toStringTag in e)))return"Array";if("object"===("undefined"==typeof window?"undefined":t(window))&&null!==window){if("object"===t(window.location)&&e===window.location)return"Location";if("object"===t(window.document)&&e===window.document)return"Document";if("object"===t(window.navigator)){if("object"===t(window.navigator.mimeTypes)&&e===window.navigator.mimeTypes)return"MimeTypeArray";if("object"===t(window.navigator.plugins)&&e===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"===t(window.HTMLElement))&&e instanceof window.HTMLElement){if("BLOCKQUOTE"===e.tagName)return"HTMLQuoteElement";if("TD"===e.tagName)return"HTMLTableDataCellElement";if("TH"===e.tagName)return"HTMLTableHeaderCellElement"}}var a=y&&e[Symbol.toStringTag];if("string"==typeof a)return a;var c=Object.getPrototypeOf(e);return c===RegExp.prototype?"RegExp":c===Date.prototype?"Date":n&&c===Promise.prototype?"Promise":u&&c===Set.prototype?"Set":i&&c===Map.prototype?"Map":f&&c===WeakSet.prototype?"WeakSet":s&&c===WeakMap.prototype?"WeakMap":l&&c===DataView.prototype?"DataView":i&&c===d?"Map Iterator":u&&c===b?"Set Iterator":v&&c===_?"Array Iterator":m&&c===j?"String Iterator":null===c?"Object":Object.prototype.toString.call(e).slice(8,-1)})}));function s(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,a=r+(n?1:-1);n?a--:++a<o;)if(e(t[a],a,t))return a;return-1}(t,l,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function f(t,e,r,n){for(var o=r-1,a=t.length;++o<a;)if(n(t[o],e))return o;return-1}function l(t){return t!=t}var p=Array.prototype.splice;function y(t,e,r,n){var o,a=n?f:s,c=-1,i=e.length,u=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(u=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(o=r,function(t){return o(t)})));++c<i;)for(var l=0,y=e[c],h=r?r(y):y;(l=a(u,h,l,n))>-1;)u!==t&&p.call(u,l,1),p.call(t,l,1);return t}var h=function(t,e){return t&&t.length&&e&&e.length?y(t,e):t},g=i((function(e,r){var n="[object Arguments]",o="[object Function]",a="[object GeneratorFunction]",i="[object Map]",u="[object Set]",s=/\w*$/,f=/^\[object .+?Constructor\]$/,l=/^(?:0|[1-9]\d*)$/,p={};p[n]=p["[object Array]"]=p["[object ArrayBuffer]"]=p["[object DataView]"]=p["[object Boolean]"]=p["[object Date]"]=p["[object Float32Array]"]=p["[object Float64Array]"]=p["[object Int8Array]"]=p["[object Int16Array]"]=p["[object Int32Array]"]=p[i]=p["[object Number]"]=p["[object Object]"]=p["[object RegExp]"]=p[u]=p["[object String]"]=p["[object Symbol]"]=p["[object Uint8Array]"]=p["[object Uint8ClampedArray]"]=p["[object Uint16Array]"]=p["[object Uint32Array]"]=!0,p["[object Error]"]=p[o]=p["[object WeakMap]"]=!1;var y="object"==t(c)&&c&&c.Object===Object&&c,h="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,g=y||h||Function("return this")(),b=r&&!r.nodeType&&r,d=b&&e&&!e.nodeType&&e,v=d&&d.exports===b;function _(t,e){return t.set(e[0],e[1]),t}function m(t,e){return t.add(e),t}function j(t,e,r,n){var o=-1,a=t?t.length:0;for(n&&a&&(r=t[++o]);++o<a;)r=e(r,t[o],o,t);return r}function w(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function O(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function A(t,e){return function(r){return t(e(r))}}function S(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var T,k=Array.prototype,P=Function.prototype,E=Object.prototype,N=g["__core-js_shared__"],M=(T=/[^.]+$/.exec(N&&N.keys&&N.keys.IE_PROTO||""))?"Symbol(src)_1."+T:"",I=P.toString,x=E.hasOwnProperty,L=E.toString,D=RegExp("^"+I.call(x).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),C=v?g.Buffer:void 0,V=g.Symbol,K=g.Uint8Array,$=A(Object.getPrototypeOf,Object),F=Object.create,W=E.propertyIsEnumerable,U=k.splice,B=Object.getOwnPropertySymbols,J=C?C.isBuffer:void 0,R=A(Object.keys,Object),H=dt(g,"DataView"),q=dt(g,"Map"),z=dt(g,"Promise"),G=dt(g,"Set"),Q=dt(g,"WeakMap"),X=dt(Object,"create"),Y=wt(H),Z=wt(q),tt=wt(z),et=wt(G),rt=wt(Q),nt=V?V.prototype:void 0,ot=nt?nt.valueOf:void 0;function at(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ct(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function it(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ut(t){this.__data__=new ct(t)}function st(e,r){var o=At(e)||function(e){return function(e){return function(e){return!!e&&"object"==t(e)}(e)&&St(e)}(e)&&x.call(e,"callee")&&(!W.call(e,"callee")||L.call(e)==n)}(e)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(e.length,String):[],a=o.length,c=!!a;for(var i in e)!r&&!x.call(e,i)||c&&("length"==i||mt(i,a))||o.push(i);return o}function ft(t,e,r){var n=t[e];x.call(t,e)&&Ot(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function lt(t,e){for(var r=t.length;r--;)if(Ot(t[r][0],e))return r;return-1}function pt(t,e,r,c,f,l,y){var h;if(c&&(h=l?c(t,f,l,y):c(t)),void 0!==h)return h;if(!Pt(t))return t;var g=At(t);if(g){if(h=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&x.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,h)}else{var b=_t(t),d=b==o||b==a;if(Tt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if("[object Object]"==b||b==n||d&&!l){if(w(t))return l?t:{};if(h=function(t){return"function"!=typeof t.constructor||jt(t)?{}:(e=$(t),Pt(e)?F(e):{});var e}(d?{}:t),!e)return function(t,e){return gt(t,vt(t),e)}(t,function(t,e){return t&&gt(e,Et(e),t)}(h,t))}else{if(!p[b])return l?t:{};h=function(t,e,r,n){var o=t.constructor;switch(e){case"[object ArrayBuffer]":return ht(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,e){var r=e?ht(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var r=e?ht(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case i:return function(t,e,r){return j(e?r(O(t),!0):O(t),_,new t.constructor)}(t,n,r);case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,s.exec(t));return e.lastIndex=t.lastIndex,e}(t);case u:return function(t,e,r){return j(e?r(S(t),!0):S(t),m,new t.constructor)}(t,n,r);case"[object Symbol]":return a=t,ot?Object(ot.call(a)):{}}var a}(t,b,pt,e)}}y||(y=new ut);var v=y.get(t);if(v)return v;if(y.set(t,h),!g)var A=r?function(t){return function(t,e,r){var n=e(t);return At(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Et,vt)}(t):Et(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(A||t,(function(n,o){A&&(n=t[o=n]),ft(h,o,pt(n,e,r,c,o,t,y))})),h}function yt(t){return!(!Pt(t)||(e=t,M&&M in e))&&(kt(t)||w(t)?D:f).test(wt(t));var e}function ht(t){var e=new t.constructor(t.byteLength);return new K(e).set(new K(t)),e}function gt(t,e,r,n){r||(r={});for(var o=-1,a=e.length;++o<a;){var c=e[o],i=n?n(r[c],t[c],c,r,t):void 0;ft(r,c,void 0===i?t[c]:i)}return r}function bt(e,r){var n,o,a=e.__data__;return("string"==(o=t(n=r))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==n:null===n)?a["string"==typeof r?"string":"hash"]:a.map}function dt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return yt(r)?r:void 0}at.prototype.clear=function(){this.__data__=X?X(null):{}},at.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},at.prototype.get=function(t){var e=this.__data__;if(X){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return x.call(e,t)?e[t]:void 0},at.prototype.has=function(t){var e=this.__data__;return X?void 0!==e[t]:x.call(e,t)},at.prototype.set=function(t,e){return this.__data__[t]=X&&void 0===e?"__lodash_hash_undefined__":e,this},ct.prototype.clear=function(){this.__data__=[]},ct.prototype.delete=function(t){var e=this.__data__,r=lt(e,t);return!(r<0)&&(r==e.length-1?e.pop():U.call(e,r,1),!0)},ct.prototype.get=function(t){var e=this.__data__,r=lt(e,t);return r<0?void 0:e[r][1]},ct.prototype.has=function(t){return lt(this.__data__,t)>-1},ct.prototype.set=function(t,e){var r=this.__data__,n=lt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},it.prototype.clear=function(){this.__data__={hash:new at,map:new(q||ct),string:new at}},it.prototype.delete=function(t){return bt(this,t).delete(t)},it.prototype.get=function(t){return bt(this,t).get(t)},it.prototype.has=function(t){return bt(this,t).has(t)},it.prototype.set=function(t,e){return bt(this,t).set(t,e),this},ut.prototype.clear=function(){this.__data__=new ct},ut.prototype.delete=function(t){return this.__data__.delete(t)},ut.prototype.get=function(t){return this.__data__.get(t)},ut.prototype.has=function(t){return this.__data__.has(t)},ut.prototype.set=function(t,e){var r=this.__data__;if(r instanceof ct){var n=r.__data__;if(!q||n.length<199)return n.push([t,e]),this;r=this.__data__=new it(n)}return r.set(t,e),this};var vt=B?A(B,Object):function(){return[]},_t=function(t){return L.call(t)};function mt(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||l.test(t))&&t>-1&&t%1==0&&t<e}function jt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||E)}function wt(t){if(null!=t){try{return I.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ot(t,e){return t===e||t!=t&&e!=e}(H&&"[object DataView]"!=_t(new H(new ArrayBuffer(1)))||q&&_t(new q)!=i||z&&"[object Promise]"!=_t(z.resolve())||G&&_t(new G)!=u||Q&&"[object WeakMap]"!=_t(new Q))&&(_t=function(t){var e=L.call(t),r="[object Object]"==e?t.constructor:void 0,n=r?wt(r):void 0;if(n)switch(n){case Y:return"[object DataView]";case Z:return i;case tt:return"[object Promise]";case et:return u;case rt:return"[object WeakMap]"}return e});var At=Array.isArray;function St(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!kt(t)}var Tt=J||function(){return!1};function kt(t){var e=Pt(t)?L.call(t):"";return e==o||e==a}function Pt(e){var r=t(e);return!!e&&("object"==r||"function"==r)}function Et(t){return St(t)?st(t):function(t){if(!jt(t))return R(t);var e=[];for(var r in Object(t))x.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}e.exports=function(t){return pt(t,!0,!0)}}));function b(t){return"string"==typeof t&&t.length&&"."===t[0]?t.slice(1):t}function d(e,r){return function e(r,o,a,c){var i,u,s,f,l=g(r),p=n({depth:-1,path:""},a);if(p.depth+=1,Array.isArray(l))for(i=0,u=l.length;i<u&&!c.now;i++){var y="".concat(p.path,".").concat(i);void 0!==l[i]?(p.parent=g(l),p.parentType="array",s=e(o(l[i],void 0,n(n({},p),{},{path:b(y)}),c),o,n(n({},p),{},{path:b(y)}),c),Number.isNaN(s)&&i<l.length?(l.splice(i,1),i-=1):l[i]=s):l.splice(i,1)}else if((f=l)&&"object"===t(f)&&!Array.isArray(f))for(var h in l){if(c.now&&null!=h)break;var d="".concat(p.path,".").concat(h);0===p.depth&&null!=h&&(p.topmostKey=h),p.parent=g(l),p.parentType="object",s=e(o(h,l[h],n(n({},p),{},{path:b(d)}),c),o,n(n({},p),{},{path:b(d)}),c),Number.isNaN(s)?delete l[h]:l[h]=s}return l}(e,r,{},{now:!1})}var v=/^\[object .+?Constructor\]$/,_="object"==t(c)&&c&&c.Object===Object&&c,m="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,j=_||m||Function("return this")();function w(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}function O(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,a=r+(n?1:-1);for(;n?a--:++a<o;)if(e(t[a],a,t))return a;return-1}(t,T,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function A(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function S(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function T(t){return t!=t}function k(t){return function(e){return t(e)}}function P(t,e){return t.has(e)}var E,N,M,I=Array.prototype,x=Function.prototype,L=Object.prototype,D=j["__core-js_shared__"],C=(E=/[^.]+$/.exec(D&&D.keys&&D.keys.IE_PROTO||""))?"Symbol(src)_1."+E:"",V=x.toString,K=L.hasOwnProperty,$=L.toString,F=RegExp("^"+V.call(K).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),W=I.splice,U=Math.max,B=Math.min,J=tt(j,"Map"),R=tt(Object,"create");function H(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function q(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function z(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function G(t){var e=-1,r=t?t.length:0;for(this.__data__=new z;++e<r;)this.add(t[e])}function Q(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function X(t){return!(!rt(t)||(e=t,C&&C in e))&&(et(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?F:v).test(function(t){if(null!=t){try{return V.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function Y(e){return function(e){return function(e){return!!e&&"object"==t(e)}(e)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!et(t)}(e)}(e)?e:[]}function Z(e,r){var n,o,a=e.__data__;return("string"==(o=t(n=r))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==n:null===n)?a["string"==typeof r?"string":"hash"]:a.map}function tt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return X(r)?r:void 0}function et(t){var e=rt(t)?$.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}function rt(e){var r=t(e);return!!e&&("object"==r||"function"==r)}H.prototype.clear=function(){this.__data__=R?R(null):{}},H.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},H.prototype.get=function(t){var e=this.__data__;if(R){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return K.call(e,t)?e[t]:void 0},H.prototype.has=function(t){var e=this.__data__;return R?void 0!==e[t]:K.call(e,t)},H.prototype.set=function(t,e){return this.__data__[t]=R&&void 0===e?"__lodash_hash_undefined__":e,this},q.prototype.clear=function(){this.__data__=[]},q.prototype.delete=function(t){var e=this.__data__,r=Q(e,t);return!(r<0)&&(r==e.length-1?e.pop():W.call(e,r,1),!0)},q.prototype.get=function(t){var e=this.__data__,r=Q(e,t);return r<0?void 0:e[r][1]},q.prototype.has=function(t){return Q(this.__data__,t)>-1},q.prototype.set=function(t,e){var r=this.__data__,n=Q(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},z.prototype.clear=function(){this.__data__={hash:new H,map:new(J||q),string:new H}},z.prototype.delete=function(t){return Z(this,t).delete(t)},z.prototype.get=function(t){return Z(this,t).get(t)},z.prototype.has=function(t){return Z(this,t).has(t)},z.prototype.set=function(t,e){return Z(this,t).set(t,e),this},G.prototype.add=G.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},G.prototype.has=function(t){return this.__data__.has(t)};var nt=(N=function(t){var e=S(t,Y);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?A:O,o=t[0].length,a=t.length,c=a,i=Array(a),u=1/0,s=[];c--;){var f=t[c];c&&e&&(f=S(f,k(e))),u=B(f.length,u),i[c]=!r&&(e||o>=120&&f.length>=120)?new G(c&&f):void 0}f=t[0];var l=-1,p=i[0];t:for(;++l<o&&s.length<u;){var y=f[l],h=e?e(y):y;if(y=r||0!==y?y:0,!(p?P(p,h):n(s,h,r))){for(c=a;--c;){var g=i[c];if(!(g?P(g,h):n(t[c],h,r)))continue t}p&&p.push(h),s.push(y)}}return s}(e):[]},M=U(void 0===M?N.length-1:M,0),function(){for(var t=arguments,e=-1,r=U(t.length-M,0),n=Array(r);++e<r;)n[e]=t[M+e];e=-1;for(var o=Array(M+1);++e<M;)o[e]=t[e];return o[M]=n,w(N,this,o)});function ot(t){return"string"==typeof t?t.length>0?[t]:[]:t}var at=i((function(e){e.exports=function(){var e=Object.prototype.toString;function r(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function n(t){if(!t)return!0;if(a(t)&&0===t.length)return!0;if("string"!=typeof t){for(var e in t)if(r(t,e))return!1;return!0}return!1}function o(t){return e.call(t)}var a=Array.isArray||function(t){return"[object Array]"===e.call(t)};function c(t){var e=parseInt(t);return e.toString()===t?e:t}function i(e){e=e||{};var i=function t(e){return Object.keys(t).reduce((function(r,n){return"create"===n||"function"==typeof t[n]&&(r[n]=t[n].bind(t,e)),r}),{})};function u(t,n){return e.includeInheritedProps||"number"==typeof n&&Array.isArray(t)||r(t,n)}function s(t,e){if(u(t,e))return t[e]}function f(t,e,r,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return f(t,e.split(".").map(c),r,n);var o=e[0],a=s(t,o);return 1===e.length?(void 0!==a&&n||(t[o]=r),a):(void 0===a&&("number"==typeof e[1]?t[o]=[]:t[o]={}),f(t[o],e.slice(1),r,n))}return i.has=function(t,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!t;for(var o=0;o<n.length;o++){var i=c(n[o]);if(!("number"==typeof i&&a(t)&&i<t.length||(e.includeInheritedProps?i in Object(t):r(t,i))))return!1;t=t[i]}return!0},i.ensureExists=function(t,e,r){return f(t,e,r,!0)},i.set=function(t,e,r,n){return f(t,e,r,n)},i.insert=function(t,e,r,n){var o=i.get(t,e);n=~~n,a(o)||i.set(t,e,o=[]),o.splice(n,0,r)},i.empty=function(e,r){var c,s;if(!n(r)&&null!=e&&(c=i.get(e,r))){if("string"==typeof c)return i.set(e,r,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===o(t)}(c))return i.set(e,r,!1);if("number"==typeof c)return i.set(e,r,0);if(a(c))c.length=0;else{if(!function(e){return"object"===t(e)&&"[object Object]"===o(e)}(c))return i.set(e,r,null);for(s in c)u(c,s)&&delete c[s]}}},i.push=function(t,e){var r=i.get(t,e);a(r)||i.set(t,e,r=[]),r.push.apply(r,Array.prototype.slice.call(arguments,2))},i.coalesce=function(t,e,r){for(var n,o=0,a=e.length;o<a;o++)if(void 0!==(n=i.get(t,e[o])))return n;return r},i.get=function(t,e,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return r;if("string"==typeof e)return i.get(t,e.split("."),r);var n=c(e[0]),o=s(t,n);return void 0===o?r:1===e.length?o:i.get(t[n],e.slice(1),r)},i.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(n(e))return t;if("string"==typeof e)return i.del(t,e.split("."));var r=c(e[0]);return u(t,r)?1!==e.length?i.del(t[r],e.slice(1)):(a(t)?t.splice(r,1):delete t[r],t):t},i}var u=i();return u.create=i,u.withInheritedProps=i({includeInheritedProps:!0}),u}()})),ct=new Map;function it(t,e){e=n({caseSensitive:!1},e);var r=t+JSON.stringify(e);if(ct.has(r))return ct.get(r);var o="!"===t[0];o&&(t=t.slice(1)),t=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}(t).replace(/\\\*/g,"[\\s\\S]*");var a=new RegExp("^".concat(t,"$"),e.caseSensitive?"":"i");return a.negated=o,ct.set(r,a),a}var ut=function(e,r,n){if(!Array.isArray(e)||!Array.isArray(r))throw new TypeError("Expected two arrays, got ".concat(t(e)," ").concat(t(r)));if(0===r.length)return e;var o="!"===r[0][0];r=r.map((function(t){return it(t,n)}));var c,i=[],u=a(e);try{for(u.s();!(c=u.n()).done;){var s,f=c.value,l=o,p=a(r);try{for(p.s();!(s=p.n()).done;){var y=s.value;y.test(f)&&(l=!y.negated)}}catch(t){p.e(t)}finally{p.f()}l&&i.push(f)}}catch(t){u.e(t)}finally{u.f()}return i};return ut.isMatch=function(t,e,r){var n=Array.isArray(t)?t:[t],o=Array.isArray(e)?e:[e];return n.some((function(t){return o.every((function(e){var n=it(e,r),o=n.test(t);return n.negated?!o:o}))}))},function(t,e,r){return function t(e,r,o){var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],c=Object.prototype.hasOwnProperty;function i(t){return null!=t}function s(t){return"Object"===u(t)}function f(t,e){return e=ot(e),Array.from(t).filter((function(t){return!e.some((function(e){return ut.isMatch(t,e,{caseSensitive:!0})}))}))}var l=["any","anything","every","everything","all","whatever","whatevs"],p=Array.isArray;if(!i(e))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");var y,g={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};if(y=i(o)&&s(o)?n(n({},g),o):n({},g),i(y.ignoreKeys)&&y.ignoreKeys?y.ignoreKeys=ot(y.ignoreKeys):y.ignoreKeys=[],i(y.ignorePaths)&&y.ignorePaths?y.ignorePaths=ot(y.ignorePaths):y.ignorePaths=[],i(y.acceptArraysIgnore)&&y.acceptArraysIgnore?y.acceptArraysIgnore=ot(y.acceptArraysIgnore):y.acceptArraysIgnore=[],y.msg="string"==typeof y.msg?y.msg.trim():y.msg,":"===y.msg[y.msg.length-1]&&(y.msg=y.msg.slice(0,y.msg.length-1).trim()),y.schema&&(Object.keys(y.schema).forEach((function(t){if(s(y.schema[t])){var e={};d(y.schema[t],(function(r,n,o){var a=void 0!==n?n:r;return p(a)||s(a)||(e["".concat(t,".").concat(o.path)]=a),a})),delete y.schema[t],y.schema=Object.assign(y.schema,e)}})),Object.keys(y.schema).forEach((function(t){p(y.schema[t])||(y.schema[t]=[y.schema[t]]),y.schema[t]=y.schema[t].map(String).map((function(t){return t.toLowerCase()})).map((function(t){return t.trim()}))}))),i(r)||(r={}),a&&t(y,g,{enforceStrictKeyset:!1},!1),y.enforceStrictKeyset)if(i(y.schema)&&Object.keys(y.schema).length>0){if(0!==f(h(Object.keys(e),Object.keys(r).concat(Object.keys(y.schema))),y.ignoreKeys).length){var b=h(Object.keys(e),Object.keys(r).concat(Object.keys(y.schema)));throw new TypeError("".concat(y.msg,": ").concat(y.optsVarName,".enforceStrictKeyset is on and the following key").concat(b.length>1?"s":""," ").concat(b.length>1?"are":"is"," not covered by schema and/or reference objects: ").concat(b.join(", ")))}}else{if(!(i(r)&&Object.keys(r).length>0))throw new TypeError("".concat(y.msg,": Both ").concat(y.optsVarName,".schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!"));if(0!==f(h(Object.keys(e),Object.keys(r)),y.ignoreKeys).length){var v=h(Object.keys(e),Object.keys(r));throw new TypeError("".concat(y.msg,": The input object has key").concat(v.length>1?"s":""," which ").concat(v.length>1?"are":"is"," not covered by the reference object: ").concat(v.join(", ")))}if(0!==f(h(Object.keys(r),Object.keys(e)),y.ignoreKeys).length){var _=h(Object.keys(r),Object.keys(e));throw new TypeError("".concat(y.msg,": The reference object has key").concat(_.length>1?"s":""," which ").concat(_.length>1?"are":"is"," not present in the input object: ").concat(_.join(", ")))}}var m=[];d(e,(function(t,n,o){var a=n,i=t;if("array"===o.parentType&&(i=void 0,a=t),p(m)&&m.length&&m.some((function(t){return o.path.startsWith(t)})))return a;if(i&&y.ignoreKeys.some((function(t){return ut.isMatch(i,t)})))return a;if(y.ignorePaths.some((function(t){return ut.isMatch(o.path,t)})))return a;var f=!(!s(a)&&!p(a)&&p(o.parent)),h=!1;s(y.schema)&&c.call(y.schema,at.get(o.path))&&(h=!0);var g=!1;if(s(r)&&at.has(r,at.get(o.path))&&(g=!0),y.enforceStrictKeyset&&f&&!h&&!g)throw new TypeError("".concat(y.msg,": ").concat(y.optsVarName,".").concat(o.path," is neither covered by reference object (second input argument), nor ").concat(y.optsVarName,".schema! To stop this error, turn off ").concat(y.optsVarName,".enforceStrictKeyset or provide some type reference (2nd argument or ").concat(y.optsVarName,".schema).\n\nDebug info:\n\nobj = ").concat(JSON.stringify(e,null,4),"\n\nref = ").concat(JSON.stringify(r,null,4),"\n\ninnerObj = ").concat(JSON.stringify(o,null,4),"\n\nopts = ").concat(JSON.stringify(y,null,4),"\n\ncurrent = ").concat(JSON.stringify(a,null,4),"\n\n"));if(h){var b=ot(y.schema[o.path]).map(String).map((function(t){return t.toLowerCase()}));if(at.set(y.schema,o.path,b),nt(b,l).length)m.push(o.path);else if(!0!==a&&!1!==a&&!b.includes(u(a).toLowerCase())||(!0===a||!1===a)&&!b.includes(String(a))&&!b.includes("boolean")){if(!p(a)||!y.acceptArrays)throw new TypeError("".concat(y.msg,": ").concat(y.optsVarName,".").concat(o.path," was customised to ").concat("string"!==u(a)?'"':"").concat(JSON.stringify(a,null,0)).concat("string"!==u(a)?'"':""," (type: ").concat(u(a).toLowerCase(),") which is not among the allowed types in schema (which is equal to ").concat(JSON.stringify(b,null,0),")"));for(var d=0,v=a.length;d<v;d++)if(!b.includes(u(a[d]).toLowerCase()))throw new TypeError("".concat(y.msg,": ").concat(y.optsVarName,".").concat(o.path,".").concat(d,", the ").concat(d,"th element (equal to ").concat(JSON.stringify(a[d],null,0),") is of a type ").concat(u(a[d]).toLowerCase(),", but only the following are allowed by the ").concat(y.optsVarName,".schema: ").concat(b.join(", ")))}}else if(g){var _=at.get(r,o.path);if(y.acceptArrays&&p(a)&&!y.acceptArraysIgnore.includes(t)){if(!a.every((function(e){return u(e).toLowerCase()===u(r[t]).toLowerCase()})))throw new TypeError("".concat(y.msg,": ").concat(y.optsVarName,".").concat(o.path," was customised to be array, but not all of its elements are ").concat(u(r[t]).toLowerCase(),"-type"))}else if(u(a)!==u(_))throw new TypeError("".concat(y.msg,": ").concat(y.optsVarName,".").concat(o.path," was customised to ").concat("string"===u(a).toLowerCase()?"":'"').concat(JSON.stringify(a,null,0)).concat("string"===u(a).toLowerCase()?"":'"'," which is not ").concat(u(_).toLowerCase()," but ").concat(u(a).toLowerCase()))}return a}))}(t,e,r)}}));
