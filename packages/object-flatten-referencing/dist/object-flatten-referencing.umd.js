/**
 * object-flatten-referencing
 * Flatten complex nested objects according to a reference objects
 * Version: 4.11.22
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/object-flatten-referencing
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).objectFlattenReferencing=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(r){e(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return c=t.done,t},e:function(t){u=!0,a=t},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw a}}}}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var c=function(t,e,r){return t(r={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&r.path)}},r.exports),r.exports}((function(e,r){var n="[object Arguments]",o="[object Boolean]",i="[object Function]",c="[object GeneratorFunction]",u="[object Map]",s="[object Set]",f="[object DataView]",l="[object Float32Array]",p="[object Float64Array]",h="[object Int8Array]",y="[object Int16Array]",b="[object Int32Array]",g="[object Uint8Array]",d="[object Uint16Array]",v="[object Uint32Array]",w=/\w*$/,_=/^\[object .+?Constructor\]$/,j=/^(?:0|[1-9]\d*)$/,m={};m[n]=m["[object Array]"]=m["[object ArrayBuffer]"]=m["[object DataView]"]=m["[object Boolean]"]=m["[object Date]"]=m["[object Float32Array]"]=m["[object Float64Array]"]=m["[object Int8Array]"]=m["[object Int16Array]"]=m["[object Int32Array]"]=m[u]=m["[object Number]"]=m["[object Object]"]=m["[object RegExp]"]=m[s]=m["[object String]"]=m["[object Symbol]"]=m["[object Uint8Array]"]=m["[object Uint8ClampedArray]"]=m["[object Uint16Array]"]=m["[object Uint32Array]"]=!0,m["[object Error]"]=m[i]=m["[object WeakMap]"]=!1;var O="object"==t(a)&&a&&a.Object===Object&&a,A="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,W=O||A||Function("return this")(),S=r&&!r.nodeType&&r,I=S&&e&&!e.nodeType&&e,T=I&&I.exports===S;function x(t,e){return t.set(e[0],e[1]),t}function E(t,e){return t.add(e),t}function P(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function D(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function C(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function M(t,e){return function(r){return t(e(r))}}function R(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var k,B=Array.prototype,F=Function.prototype,$=Object.prototype,H=W["__core-js_shared__"],L=(k=/[^.]+$/.exec(H&&H.keys&&H.keys.IE_PROTO||""))?"Symbol(src)_1."+k:"",U=F.toString,K=$.hasOwnProperty,N=$.toString,V=RegExp("^"+U.call(K).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),G=T?W.Buffer:void 0,J=W.Symbol,q=W.Uint8Array,z=M(Object.getPrototypeOf,Object),Q=Object.create,X=$.propertyIsEnumerable,Y=B.splice,Z=Object.getOwnPropertySymbols,tt=G?G.isBuffer:void 0,et=M(Object.keys,Object),rt=It(W,"DataView"),nt=It(W,"Map"),ot=It(W,"Promise"),it=It(W,"Set"),at=It(W,"WeakMap"),ct=It(Object,"create"),ut=Dt(rt),st=Dt(nt),ft=Dt(ot),lt=Dt(it),pt=Dt(at),ht=J?J.prototype:void 0,yt=ht?ht.valueOf:void 0;function bt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function gt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function dt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function vt(t){this.__data__=new gt(t)}function wt(e,r){var o=Mt(e)||function(e){return function(e){return function(e){return!!e&&"object"==t(e)}(e)&&Rt(e)}(e)&&K.call(e,"callee")&&(!X.call(e,"callee")||N.call(e)==n)}(e)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(e.length,String):[],i=o.length,a=!!i;for(var c in e)!r&&!K.call(e,c)||a&&("length"==c||Et(c,i))||o.push(c);return o}function _t(t,e,r){var n=t[e];K.call(t,e)&&Ct(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function jt(t,e){for(var r=t.length;r--;)if(Ct(t[r][0],e))return r;return-1}function mt(t,e,r,a,_,j,O){var A;if(a&&(A=j?a(t,_,j,O):a(t)),void 0!==A)return A;if(!Ft(t))return t;var W=Mt(t);if(W){if(A=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&K.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,A)}else{var S=xt(t),I=S==i||S==c;if(kt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if("[object Object]"==S||S==n||I&&!j){if(D(t))return j?t:{};if(A=function(t){return"function"!=typeof t.constructor||Pt(t)?{}:(e=z(t),Ft(e)?Q(e):{});var e}(I?{}:t),!e)return function(t,e){return Wt(t,Tt(t),e)}(t,function(t,e){return t&&Wt(e,$t(e),t)}(A,t))}else{if(!m[S])return j?t:{};A=function(t,e,r,n){var i=t.constructor;switch(e){case"[object ArrayBuffer]":return At(t);case o:case"[object Date]":return new i(+t);case f:return function(t,e){var r=e?At(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case l:case p:case h:case y:case b:case g:case"[object Uint8ClampedArray]":case d:case v:return function(t,e){var r=e?At(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case u:return function(t,e,r){return P(e?r(C(t),!0):C(t),x,new t.constructor)}(t,n,r);case"[object Number]":case"[object String]":return new i(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,w.exec(t));return e.lastIndex=t.lastIndex,e}(t);case s:return function(t,e,r){return P(e?r(R(t),!0):R(t),E,new t.constructor)}(t,n,r);case"[object Symbol]":return a=t,yt?Object(yt.call(a)):{}}var a}(t,S,mt,e)}}O||(O=new vt);var T=O.get(t);if(T)return T;if(O.set(t,A),!W)var M=r?function(t){return function(t,e,r){var n=e(t);return Mt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,$t,Tt)}(t):$t(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(M||t,(function(n,o){M&&(n=t[o=n]),_t(A,o,mt(n,e,r,a,o,t,O))})),A}function Ot(t){return!(!Ft(t)||(e=t,L&&L in e))&&(Bt(t)||D(t)?V:_).test(Dt(t));var e}function At(t){var e=new t.constructor(t.byteLength);return new q(e).set(new q(t)),e}function Wt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],c=n?n(r[a],t[a],a,r,t):void 0;_t(r,a,void 0===c?t[a]:c)}return r}function St(e,r){var n,o,i=e.__data__;return("string"==(o=t(n=r))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==n:null===n)?i["string"==typeof r?"string":"hash"]:i.map}function It(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Ot(r)?r:void 0}bt.prototype.clear=function(){this.__data__=ct?ct(null):{}},bt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},bt.prototype.get=function(t){var e=this.__data__;if(ct){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return K.call(e,t)?e[t]:void 0},bt.prototype.has=function(t){var e=this.__data__;return ct?void 0!==e[t]:K.call(e,t)},bt.prototype.set=function(t,e){return this.__data__[t]=ct&&void 0===e?"__lodash_hash_undefined__":e,this},gt.prototype.clear=function(){this.__data__=[]},gt.prototype.delete=function(t){var e=this.__data__,r=jt(e,t);return!(r<0)&&(r==e.length-1?e.pop():Y.call(e,r,1),!0)},gt.prototype.get=function(t){var e=this.__data__,r=jt(e,t);return r<0?void 0:e[r][1]},gt.prototype.has=function(t){return jt(this.__data__,t)>-1},gt.prototype.set=function(t,e){var r=this.__data__,n=jt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},dt.prototype.clear=function(){this.__data__={hash:new bt,map:new(nt||gt),string:new bt}},dt.prototype.delete=function(t){return St(this,t).delete(t)},dt.prototype.get=function(t){return St(this,t).get(t)},dt.prototype.has=function(t){return St(this,t).has(t)},dt.prototype.set=function(t,e){return St(this,t).set(t,e),this},vt.prototype.clear=function(){this.__data__=new gt},vt.prototype.delete=function(t){return this.__data__.delete(t)},vt.prototype.get=function(t){return this.__data__.get(t)},vt.prototype.has=function(t){return this.__data__.has(t)},vt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof gt){var n=r.__data__;if(!nt||n.length<199)return n.push([t,e]),this;r=this.__data__=new dt(n)}return r.set(t,e),this};var Tt=Z?M(Z,Object):function(){return[]},xt=function(t){return N.call(t)};function Et(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||j.test(t))&&t>-1&&t%1==0&&t<e}function Pt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||$)}function Dt(t){if(null!=t){try{return U.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ct(t,e){return t===e||t!=t&&e!=e}(rt&&xt(new rt(new ArrayBuffer(1)))!=f||nt&&xt(new nt)!=u||ot&&"[object Promise]"!=xt(ot.resolve())||it&&xt(new it)!=s||at&&"[object WeakMap]"!=xt(new at))&&(xt=function(t){var e=N.call(t),r="[object Object]"==e?t.constructor:void 0,n=r?Dt(r):void 0;if(n)switch(n){case ut:return f;case st:return u;case ft:return"[object Promise]";case lt:return s;case pt:return"[object WeakMap]"}return e});var Mt=Array.isArray;function Rt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!Bt(t)}var kt=tt||function(){return!1};function Bt(t){var e=Ft(t)?N.call(t):"";return e==i||e==c}function Ft(e){var r=t(e);return!!e&&("object"==r||"function"==r)}function $t(t){return Rt(t)?wt(t):function(t){if(!Pt(t))return et(t);var e=[];for(var r in Object(t))K.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}e.exports=function(t){return mt(t,!0,!0)}}));function u(t){return null!=t}function s(t){return"string"==typeof t}function f(e,r,n){if(0===arguments.length)throw new Error("str-indexes-of-plus/strIndexesOfPlus(): inputs missing!");if(!s(e))throw new TypeError("str-indexes-of-plus/strIndexesOfPlus(): first input argument must be a string! Currently it's: ".concat(t(e)));if(!s(r))throw new TypeError("str-indexes-of-plus/strIndexesOfPlus(): second input argument must be a string! Currently it's: ".concat(t(r)));if(arguments.length>=3&&!Number.isInteger(n)&&(!s(n)||!/^\d*$/.test(n)))throw new TypeError("str-indexes-of-plus/strIndexesOfPlus(): third input argument must be a natural number! Currently it's: ".concat(n));/^\d*$/.test(n)&&(n=Number(n));var o=Array.from(e),i=Array.from(r);if(0===o.length||0===i.length||u(n)&&n>=o.length)return[];u(n)||(n=0);for(var a,c=[],f=!1,l=n,p=o.length;l<p;l++)f&&(o[l]===i[l-a]?l-a+1===i.length&&c.push(a):(a=null,f=!1)),f||o[l]===i[0]&&(1===i.length?c.push(l):(f=!0,a=l));return c}var l=new Map;function p(t,e){e=n({caseSensitive:!1},e);var r=t+JSON.stringify(e);if(l.has(r))return l.get(r);var o="!"===t[0];o&&(t=t.slice(1)),t=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}(t).replace(/\\\*/g,"[\\s\\S]*");var i=new RegExp("^".concat(t,"$"),e.caseSensitive?"":"i");return i.negated=o,l.set(r,i),i}var h=function(e,r,n){if(!Array.isArray(e)||!Array.isArray(r))throw new TypeError("Expected two arrays, got ".concat(t(e)," ").concat(t(r)));if(0===r.length)return e;var o="!"===r[0][0];r=r.map((function(t){return p(t,n)}));var a,c=[],u=i(e);try{for(u.s();!(a=u.n()).done;){var s,f=a.value,l=o,h=i(r);try{for(h.s();!(s=h.n()).done;){var y=s.value;y.test(f)&&(l=!y.negated)}}catch(t){h.e(t)}finally{h.f()}l&&c.push(f)}}catch(t){u.e(t)}finally{u.f()}return c};h.isMatch=function(t,e,r){var n=Array.isArray(t)?t:[t],o=Array.isArray(e)?e:[e];return n.some((function(t){return o.every((function(e){var n=p(e,r),o=n.test(t);return n.negated?!o:o}))}))};var y,b,g=Function.prototype,d=Object.prototype,v=g.toString,w=d.hasOwnProperty,_=v.call(Object),j=d.toString,m=(y=Object.getPrototypeOf,b=Object,function(t){return y(b(t))});var O=function(e){if(!function(e){return!!e&&"object"==t(e)}(e)||"[object Object]"!=j.call(e)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(e))return!1;var r=m(e);if(null===r)return!0;var n=w.call(r,"constructor")&&r.constructor;return"function"==typeof n&&n instanceof n&&v.call(n)==_},A=Array.isArray;
/*!
   * is-string-int | MIT (c) Shinnosuke Watanabe
   * https://github.com/shinnn/is-string-int.js
  */function W(t){return"string"==typeof t}function S(t,e){if(0===arguments.length||0===Object.keys(t).length)return[];var r=c(t),n=[];return O(r)&&Object.keys(r).forEach((function(t){O(r[t])&&(r[t]=S(r[t],e)),A(r[t])&&(n=n.concat(r[t].map((function(r){return t+e.objectKeyAndValueJoinChar+r})))),W(r[t])&&n.push(t+e.objectKeyAndValueJoinChar+r[t])})),n}function I(t,e,r,n){if(0===arguments.length||0===t.length)return"";var o=c(t),i="";if(o.length>0)if(n)for(var a=0,u=o.length;a<u;a++)if(W(o[a])){var s=void 0;s="",e.mergeArraysWithLineBreaks&&a>0&&(!e.mergeWithoutTrailingBrIfLineContainsBr||"string"!=typeof o[a-1]||e.mergeWithoutTrailingBrIfLineContainsBr&&void 0!==o[a-1]&&!o[a-1].toLowerCase().includes("<br"))&&(s="<br".concat(e.xhtml?" /":"",">")),i+=s+(r?e.wrapHeadsWith:"")+o[a]+(r?e.wrapTailsWith:"")}else A(o[a])&&o[a].length>0&&o[a].every(W)&&function(){var t="";e.mergeArraysWithLineBreaks&&i.length>0&&(t="<br".concat(e.xhtml?" /":"",">")),i=o[a].reduce((function(n,o,i,a){var c="";return i!==a.length-1&&(c=" "),n+(0===i?t:"")+(r?e.wrapHeadsWith:"")+o+(r?e.wrapTailsWith:"")+c}),i)}();else i=o.reduce((function(t,n,o,i){var a="";e.mergeArraysWithLineBreaks&&o>0&&(a="<br".concat(e.xhtml?" /":"",">"));var c="";return o!==i.length-1&&(c=" "),t+(0===o?a:"")+(r?e.wrapHeadsWith:"")+n+(r?e.wrapTailsWith:"")+c}),i);return i}function T(t){return W(t)?t.length>0?[t]:[]:t}function x(t){return W(t)&&function(t,e){if(e=e||{},0===arguments.length)throw new TypeError("No arguments. (One argument required)");if("string"!=typeof t)throw new TypeError(t+" is not a string. Argument must be a string to be checked if it represents an integer.");var r,n=Number(t);if(e.parseLiteral){if(t.trim()!==t)return!1;r=n.toString()}else r=t;return"NaN"!==r&&Math.round(n).toString()===r}(t.trim())?parseInt(t.trim(),10):t}var E=Array.isArray;function P(t){return null!=t}function D(t){return"string"==typeof t}return function(e,r,o){if(0===arguments.length)throw new Error("object-flatten-referencing/ofr(): [THROW_ID_01] all inputs missing!");if(1===arguments.length)throw new Error("object-flatten-referencing/ofr(): [THROW_ID_02] reference object missing!");if(P(o)&&!O(o))throw new Error("object-flatten-referencing/ofr(): [THROW_ID_03] third input, options object must be a plain object. Currently it's: ".concat(t(o)));function i(e,r,o){var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],u=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",l=c(e),p=c(r),y={wrapHeadsWith:"%%_",wrapTailsWith:"_%%",dontWrapKeys:[],dontWrapPaths:[],xhtml:!0,preventDoubleWrapping:!0,preventWrappingIfContains:[],objectKeyAndValueJoinChar:".",wrapGlobalFlipSwitch:!0,ignore:[],whatToDoWhenReferenceIsMissing:0,mergeArraysWithLineBreaks:!0,mergeWithoutTrailingBrIfLineContainsBr:!0,enforceStrictKeyset:!0},b=n(n({},y),o);return b.dontWrapKeys=T(b.dontWrapKeys),b.preventWrappingIfContains=T(b.preventWrappingIfContains),b.dontWrapPaths=T(b.dontWrapPaths),b.ignore=T(b.ignore),b.whatToDoWhenReferenceIsMissing=x(b.whatToDoWhenReferenceIsMissing),b.wrapGlobalFlipSwitch||(a=!1),O(l)?Object.keys(l).forEach((function(e){var r=s+(0===s.length?e:".".concat(e));if(0===b.ignore.length||!b.ignore.includes(e))if(b.wrapGlobalFlipSwitch&&(a=!0,b.dontWrapKeys.length>0&&(a=a&&!b.dontWrapKeys.some((function(t){return h.isMatch(e,t,{caseSensitive:!0})}))),b.dontWrapPaths.length>0&&(a=a&&!b.dontWrapPaths.some((function(t){return t===r}))),b.preventWrappingIfContains.length>0&&"string"==typeof l[e]&&(a=a&&!b.preventWrappingIfContains.some((function(t){return l[e].includes(t)})))),P(p[e])||!P(p[e])&&2===b.whatToDoWhenReferenceIsMissing)if(E(l[e]))if(2===b.whatToDoWhenReferenceIsMissing||D(p[e]))l[e]=I(l[e],b,a,u);else{if(l[e].every((function(t){return"string"==typeof t||Array.isArray(t)}))){var o=!0;l[e].forEach((function(t){Array.isArray(t)&&!t.every(D)&&(o=!1)})),o&&(u=!1)}l[e]=i(l[e],p[e],b,a,u,r)}else O(l[e])?2===b.whatToDoWhenReferenceIsMissing||D(p[e])?l[e]=I(S(l[e],b),b,a,u):l[e]=i(l[e],p[e],a?b:n(n({},b),{},{wrapGlobalFlipSwitch:!1}),a,u,r):D(l[e])&&(l[e]=i(l[e],p[e],b,a,u,r));else if(t(l[e])!==t(p[e])&&1===b.whatToDoWhenReferenceIsMissing)throw new Error("object-flatten-referencing/ofr(): [THROW_ID_06] reference object does not have the key ".concat(e," and we need it. TIP: Turn off throwing via opts.whatToDoWhenReferenceIsMissing."))})):E(l)?E(p)?l.forEach((function(t,e){P(l[e])&&P(p[e])?l[e]=i(l[e],p[e],b,a,u,"".concat(s,"[").concat(e,"]")):l[e]=i(l[e],p[0],b,a,u,"".concat(s,"[").concat(e,"]"))})):D(p)&&(l=I(l,b,a,u)):D(l)&&l.length>0&&(b.wrapHeadsWith||b.wrapTailsWith)&&(b.preventDoubleWrapping&&(""!==b.wrapHeadsWith&&f(l,b.wrapHeadsWith.trim()).length||""!==b.wrapTailsWith&&f(l,b.wrapTailsWith.trim()).length)||(l=(a?b.wrapHeadsWith:"")+l+(a?b.wrapTailsWith:""))),l}return i(e,r,o)}}));
