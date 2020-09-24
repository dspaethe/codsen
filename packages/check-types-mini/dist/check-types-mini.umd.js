/**
 * check-types-mini
 * Check the types of your options object's values after user has customised them
 * Version: 5.7.71
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/check-types-mini/
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).checkTypesMini=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(r){e(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){u=!0,c=t},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw c}}}}var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function i(t,e,r){return t(r={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&r.path)}},r.exports),r.exports}var u=i((function(e,r){e.exports=function(){var e="function"==typeof Promise,r="object"===("undefined"==typeof self?"undefined":t(self))?self:c,n="undefined"!=typeof Symbol,o="undefined"!=typeof Map,a="undefined"!=typeof Set,i="undefined"!=typeof WeakMap,u="undefined"!=typeof WeakSet,s="undefined"!=typeof DataView,f=n&&void 0!==Symbol.iterator,l=n&&void 0!==Symbol.toStringTag,p=a&&"function"==typeof Set.prototype.entries,y=o&&"function"==typeof Map.prototype.entries,h=p&&Object.getPrototypeOf((new Set).entries()),g=y&&Object.getPrototypeOf((new Map).entries()),d=f&&"function"==typeof Array.prototype[Symbol.iterator],v=d&&Object.getPrototypeOf([][Symbol.iterator]()),b=f&&"function"==typeof String.prototype[Symbol.iterator],m=b&&Object.getPrototypeOf(""[Symbol.iterator]()),_=8,w=-1;function j(n){var c=t(n);if("object"!==c)return c;if(null===n)return"null";if(n===r)return"global";if(Array.isArray(n)&&(!1===l||!(Symbol.toStringTag in n)))return"Array";if("object"===("undefined"==typeof window?"undefined":t(window))&&null!==window){if("object"===t(window.location)&&n===window.location)return"Location";if("object"===t(window.document)&&n===window.document)return"Document";if("object"===t(window.navigator)){if("object"===t(window.navigator.mimeTypes)&&n===window.navigator.mimeTypes)return"MimeTypeArray";if("object"===t(window.navigator.plugins)&&n===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"===t(window.HTMLElement))&&n instanceof window.HTMLElement){if("BLOCKQUOTE"===n.tagName)return"HTMLQuoteElement";if("TD"===n.tagName)return"HTMLTableDataCellElement";if("TH"===n.tagName)return"HTMLTableHeaderCellElement"}}var f=l&&n[Symbol.toStringTag];if("string"==typeof f)return f;var p=Object.getPrototypeOf(n);return p===RegExp.prototype?"RegExp":p===Date.prototype?"Date":e&&p===Promise.prototype?"Promise":a&&p===Set.prototype?"Set":o&&p===Map.prototype?"Map":u&&p===WeakSet.prototype?"WeakSet":i&&p===WeakMap.prototype?"WeakMap":s&&p===DataView.prototype?"DataView":o&&p===g?"Map Iterator":a&&p===h?"Set Iterator":d&&p===v?"Array Iterator":b&&p===m?"String Iterator":null===p?"Object":Object.prototype.toString.call(n).slice(_,w)}return j}()}));function s(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,a=r+(n?1:-1);n?a--:++a<o;)if(e(t[a],a,t))return a;return-1}(t,l,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function f(t,e,r,n){for(var o=r-1,a=t.length;++o<a;)if(n(t[o],e))return o;return-1}function l(t){return t!=t}var p=Array.prototype.splice;function y(t,e,r,n){var o,a=n?f:s,c=-1,i=e.length,u=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(u=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(o=r,function(t){return o(t)})));++c<i;)for(var l=0,y=e[c],h=r?r(y):y;(l=a(u,h,l,n))>-1;)u!==t&&p.call(u,l,1),p.call(t,l,1);return t}var h=function(t,e){return t&&t.length&&e&&e.length?y(t,e):t},g=i((function(e,r){var n="__lodash_hash_undefined__",o=9007199254740991,a="[object Arguments]",i="[object Boolean]",u="[object Date]",s="[object Function]",f="[object GeneratorFunction]",l="[object Map]",p="[object Number]",y="[object Object]",h="[object Promise]",g="[object RegExp]",d="[object Set]",v="[object String]",b="[object Symbol]",m="[object WeakMap]",_="[object ArrayBuffer]",w="[object DataView]",j="[object Float32Array]",O="[object Float64Array]",S="[object Int8Array]",A="[object Int16Array]",T="[object Int32Array]",k="[object Uint8Array]",P="[object Uint8ClampedArray]",E="[object Uint16Array]",N="[object Uint32Array]",M=/\w*$/,x=/^\[object .+?Constructor\]$/,I=/^(?:0|[1-9]\d*)$/,L={};L[a]=L["[object Array]"]=L[_]=L[w]=L[i]=L[u]=L[j]=L[O]=L[S]=L[A]=L[T]=L[l]=L[p]=L[y]=L[g]=L[d]=L[v]=L[b]=L[k]=L[P]=L[E]=L[N]=!0,L["[object Error]"]=L[s]=L[m]=!1;var C="object"==t(c)&&c&&c.Object===Object&&c,K="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,D=C||K||Function("return this")(),$=r&&!r.nodeType&&r,V=$&&e&&!e.nodeType&&e,F=V&&V.exports===$;function W(t,e){return t.set(e[0],e[1]),t}function J(t,e){return t.add(e),t}function H(t,e,r,n){var o=-1,a=t?t.length:0;for(n&&a&&(r=t[++o]);++o<a;)r=e(r,t[o],o,t);return r}function R(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function B(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function U(t,e){return function(r){return t(e(r))}}function q(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var z,G=Array.prototype,Q=Function.prototype,X=Object.prototype,Y=D["__core-js_shared__"],Z=(z=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||""))?"Symbol(src)_1."+z:"",tt=Q.toString,et=X.hasOwnProperty,rt=X.toString,nt=RegExp("^"+tt.call(et).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ot=F?D.Buffer:void 0,at=D.Symbol,ct=D.Uint8Array,it=U(Object.getPrototypeOf,Object),ut=Object.create,st=X.propertyIsEnumerable,ft=G.splice,lt=Object.getOwnPropertySymbols,pt=ot?ot.isBuffer:void 0,yt=U(Object.keys,Object),ht=Vt(D,"DataView"),gt=Vt(D,"Map"),dt=Vt(D,"Promise"),vt=Vt(D,"Set"),bt=Vt(D,"WeakMap"),mt=Vt(Object,"create"),_t=Rt(ht),wt=Rt(gt),jt=Rt(dt),Ot=Rt(vt),St=Rt(bt),At=at?at.prototype:void 0,Tt=At?At.valueOf:void 0;function kt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Pt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Nt(t){this.__data__=new Pt(t)}function Mt(e,r){var n=Ut(e)||function(e){return function(e){return function(e){return!!e&&"object"==t(e)}(e)&&qt(e)}(e)&&et.call(e,"callee")&&(!st.call(e,"callee")||rt.call(e)==a)}(e)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(e.length,String):[],o=n.length,c=!!o;for(var i in e)!r&&!et.call(e,i)||c&&("length"==i||Jt(i,o))||n.push(i);return n}function xt(t,e,r){var n=t[e];et.call(t,e)&&Bt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function It(t,e){for(var r=t.length;r--;)if(Bt(t[r][0],e))return r;return-1}function Lt(t,e,r,n,o,c,h){var m;if(n&&(m=c?n(t,o,c,h):n(t)),void 0!==m)return m;if(!Qt(t))return t;var x=Ut(t);if(x){if(m=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&et.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,m)}else{var I=Wt(t),C=I==s||I==f;if(zt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(I==y||I==a||C&&!c){if(R(t))return c?t:{};if(m=function(t){return"function"!=typeof t.constructor||Ht(t)?{}:(e=it(t),Qt(e)?ut(e):{});var e}(C?{}:t),!e)return function(t,e){return Dt(t,Ft(t),e)}(t,function(t,e){return t&&Dt(e,Xt(e),t)}(m,t))}else{if(!L[I])return c?t:{};m=function(t,e,r,n){var o=t.constructor;switch(e){case _:return Kt(t);case i:case u:return new o(+t);case w:return function(t,e){var r=e?Kt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case j:case O:case S:case A:case T:case k:case P:case E:case N:return function(t,e){var r=e?Kt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return H(e?r(B(t),!0):B(t),W,new t.constructor)}(t,n,r);case p:case v:return new o(t);case g:return function(t){var e=new t.constructor(t.source,M.exec(t));return e.lastIndex=t.lastIndex,e}(t);case d:return function(t,e,r){return H(e?r(q(t),!0):q(t),J,new t.constructor)}(t,n,r);case b:return a=t,Tt?Object(Tt.call(a)):{}}var a}(t,I,Lt,e)}}h||(h=new Nt);var K=h.get(t);if(K)return K;if(h.set(t,m),!x)var D=r?function(t){return function(t,e,r){var n=e(t);return Ut(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Xt,Ft)}(t):Xt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(D||t,(function(o,a){D&&(o=t[a=o]),xt(m,a,Lt(o,e,r,n,a,t,h))})),m}function Ct(t){return!(!Qt(t)||(e=t,Z&&Z in e))&&(Gt(t)||R(t)?nt:x).test(Rt(t));var e}function Kt(t){var e=new t.constructor(t.byteLength);return new ct(e).set(new ct(t)),e}function Dt(t,e,r,n){r||(r={});for(var o=-1,a=e.length;++o<a;){var c=e[o],i=n?n(r[c],t[c],c,r,t):void 0;xt(r,c,void 0===i?t[c]:i)}return r}function $t(e,r){var n,o,a=e.__data__;return("string"==(o=t(n=r))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==n:null===n)?a["string"==typeof r?"string":"hash"]:a.map}function Vt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Ct(r)?r:void 0}kt.prototype.clear=function(){this.__data__=mt?mt(null):{}},kt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},kt.prototype.get=function(t){var e=this.__data__;if(mt){var r=e[t];return r===n?void 0:r}return et.call(e,t)?e[t]:void 0},kt.prototype.has=function(t){var e=this.__data__;return mt?void 0!==e[t]:et.call(e,t)},kt.prototype.set=function(t,e){return this.__data__[t]=mt&&void 0===e?n:e,this},Pt.prototype.clear=function(){this.__data__=[]},Pt.prototype.delete=function(t){var e=this.__data__,r=It(e,t);return!(r<0)&&(r==e.length-1?e.pop():ft.call(e,r,1),!0)},Pt.prototype.get=function(t){var e=this.__data__,r=It(e,t);return r<0?void 0:e[r][1]},Pt.prototype.has=function(t){return It(this.__data__,t)>-1},Pt.prototype.set=function(t,e){var r=this.__data__,n=It(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Et.prototype.clear=function(){this.__data__={hash:new kt,map:new(gt||Pt),string:new kt}},Et.prototype.delete=function(t){return $t(this,t).delete(t)},Et.prototype.get=function(t){return $t(this,t).get(t)},Et.prototype.has=function(t){return $t(this,t).has(t)},Et.prototype.set=function(t,e){return $t(this,t).set(t,e),this},Nt.prototype.clear=function(){this.__data__=new Pt},Nt.prototype.delete=function(t){return this.__data__.delete(t)},Nt.prototype.get=function(t){return this.__data__.get(t)},Nt.prototype.has=function(t){return this.__data__.has(t)},Nt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof Pt){var n=r.__data__;if(!gt||n.length<199)return n.push([t,e]),this;r=this.__data__=new Et(n)}return r.set(t,e),this};var Ft=lt?U(lt,Object):function(){return[]},Wt=function(t){return rt.call(t)};function Jt(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||I.test(t))&&t>-1&&t%1==0&&t<e}function Ht(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||X)}function Rt(t){if(null!=t){try{return tt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Bt(t,e){return t===e||t!=t&&e!=e}(ht&&Wt(new ht(new ArrayBuffer(1)))!=w||gt&&Wt(new gt)!=l||dt&&Wt(dt.resolve())!=h||vt&&Wt(new vt)!=d||bt&&Wt(new bt)!=m)&&(Wt=function(t){var e=rt.call(t),r=e==y?t.constructor:void 0,n=r?Rt(r):void 0;if(n)switch(n){case _t:return w;case wt:return l;case jt:return h;case Ot:return d;case St:return m}return e});var Ut=Array.isArray;function qt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!Gt(t)}var zt=pt||function(){return!1};function Gt(t){var e=Qt(t)?rt.call(t):"";return e==s||e==f}function Qt(e){var r=t(e);return!!e&&("object"==r||"function"==r)}function Xt(t){return qt(t)?Mt(t):function(t){if(!Ht(t))return yt(t);var e=[];for(var r in Object(t))et.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}e.exports=function(t){return Lt(t,!0,!0)}}));function d(t){return"string"==typeof t&&t.length&&"."===t[0]?t.slice(1):t}function v(e,r){return function e(r,o,a,c){var i,u,s,f,l=g(r),p=n({depth:-1,path:""},a);if(p.depth+=1,Array.isArray(l))for(i=0,u=l.length;i<u&&!c.now;i++){var y="".concat(p.path,".").concat(i);void 0!==l[i]?(p.parent=g(l),p.parentType="array",s=e(o(l[i],void 0,n(n({},p),{},{path:d(y)}),c),o,n(n({},p),{},{path:d(y)}),c),Number.isNaN(s)&&i<l.length?(l.splice(i,1),i-=1):l[i]=s):l.splice(i,1)}else if((f=l)&&"object"===t(f)&&!Array.isArray(f))for(var h in l){if(c.now&&null!=h)break;var v="".concat(p.path,".").concat(h);0===p.depth&&null!=h&&(p.topmostKey=h),p.parent=g(l),p.parentType="object",s=e(o(h,l[h],n(n({},p),{},{path:d(v)}),c),o,n(n({},p),{},{path:d(v)}),c),Number.isNaN(s)?delete l[h]:l[h]=s}return l}(e,r,{},{now:!1})}var b="__lodash_hash_undefined__",m=9007199254740991,_=/^\[object .+?Constructor\]$/,w="object"==t(c)&&c&&c.Object===Object&&c,j="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,O=w||j||Function("return this")();function S(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}function A(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,a=r+(n?1:-1);for(;n?a--:++a<o;)if(e(t[a],a,t))return a;return-1}(t,P,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function T(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function k(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function P(t){return t!=t}function E(t){return function(e){return t(e)}}function N(t,e){return t.has(e)}var M,x,I,L=Array.prototype,C=Function.prototype,K=Object.prototype,D=O["__core-js_shared__"],$=(M=/[^.]+$/.exec(D&&D.keys&&D.keys.IE_PROTO||""))?"Symbol(src)_1."+M:"",V=C.toString,F=K.hasOwnProperty,W=K.toString,J=RegExp("^"+V.call(F).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),H=L.splice,R=Math.max,B=Math.min,U=rt(O,"Map"),q=rt(Object,"create");function z(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function G(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Q(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function X(t){var e=-1,r=t?t.length:0;for(this.__data__=new Q;++e<r;)this.add(t[e])}function Y(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function Z(t){return!(!ot(t)||(e=t,$&&$ in e))&&(nt(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?J:_).test(function(t){if(null!=t){try{return V.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function tt(e){return function(e){return function(e){return!!e&&"object"==t(e)}(e)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=m}(t.length)&&!nt(t)}(e)}(e)?e:[]}function et(e,r){var n,o,a=e.__data__;return("string"==(o=t(n=r))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==n:null===n)?a["string"==typeof r?"string":"hash"]:a.map}function rt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Z(r)?r:void 0}function nt(t){var e=ot(t)?W.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}function ot(e){var r=t(e);return!!e&&("object"==r||"function"==r)}z.prototype.clear=function(){this.__data__=q?q(null):{}},z.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},z.prototype.get=function(t){var e=this.__data__;if(q){var r=e[t];return r===b?void 0:r}return F.call(e,t)?e[t]:void 0},z.prototype.has=function(t){var e=this.__data__;return q?void 0!==e[t]:F.call(e,t)},z.prototype.set=function(t,e){return this.__data__[t]=q&&void 0===e?b:e,this},G.prototype.clear=function(){this.__data__=[]},G.prototype.delete=function(t){var e=this.__data__,r=Y(e,t);return!(r<0)&&(r==e.length-1?e.pop():H.call(e,r,1),!0)},G.prototype.get=function(t){var e=this.__data__,r=Y(e,t);return r<0?void 0:e[r][1]},G.prototype.has=function(t){return Y(this.__data__,t)>-1},G.prototype.set=function(t,e){var r=this.__data__,n=Y(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Q.prototype.clear=function(){this.__data__={hash:new z,map:new(U||G),string:new z}},Q.prototype.delete=function(t){return et(this,t).delete(t)},Q.prototype.get=function(t){return et(this,t).get(t)},Q.prototype.has=function(t){return et(this,t).has(t)},Q.prototype.set=function(t,e){return et(this,t).set(t,e),this},X.prototype.add=X.prototype.push=function(t){return this.__data__.set(t,b),this},X.prototype.has=function(t){return this.__data__.has(t)};var at=(x=function(t){var e=k(t,tt);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?T:A,o=t[0].length,a=t.length,c=a,i=Array(a),u=1/0,s=[];c--;){var f=t[c];c&&e&&(f=k(f,E(e))),u=B(f.length,u),i[c]=!r&&(e||o>=120&&f.length>=120)?new X(c&&f):void 0}f=t[0];var l=-1,p=i[0];t:for(;++l<o&&s.length<u;){var y=f[l],h=e?e(y):y;if(y=r||0!==y?y:0,!(p?N(p,h):n(s,h,r))){for(c=a;--c;){var g=i[c];if(!(g?N(g,h):n(t[c],h,r)))continue t}p&&p.push(h),s.push(y)}}return s}(e):[]},I=R(void 0===I?x.length-1:I,0),function(){for(var t=arguments,e=-1,r=R(t.length-I,0),n=Array(r);++e<r;)n[e]=t[I+e];e=-1;for(var o=Array(I+1);++e<I;)o[e]=t[e];return o[I]=n,S(x,this,o)});function ct(t){return"string"==typeof t?t.length>0?[t]:[]:t}var it=i((function(e){e.exports=function(){var e=Object.prototype.toString;function r(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function n(t){if(!t)return!0;if(c(t)&&0===t.length)return!0;if("string"!=typeof t){for(var e in t)if(r(t,e))return!1;return!0}return!1}function o(t){return e.call(t)}function a(e){return"object"===t(e)&&"[object Object]"===o(e)}var c=Array.isArray||function(t){return"[object Array]"===e.call(t)};function i(t){return"boolean"==typeof t||"[object Boolean]"===o(t)}function u(t){var e=parseInt(t);return e.toString()===t?e:t}function s(t){t=t||{};var e=function t(e){return Object.keys(t).reduce((function(r,n){return"create"===n||"function"==typeof t[n]&&(r[n]=t[n].bind(t,e)),r}),{})};function o(e,n){return t.includeInheritedProps||"number"==typeof n&&Array.isArray(e)||r(e,n)}function s(t,e){if(o(t,e))return t[e]}function f(t,e,r,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return f(t,e.split(".").map(u),r,n);var o=e[0],a=s(t,o);return 1===e.length?(void 0!==a&&n||(t[o]=r),a):(void 0===a&&("number"==typeof e[1]?t[o]=[]:t[o]={}),f(t[o],e.slice(1),r,n))}return e.has=function(e,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!e;for(var o=0;o<n.length;o++){var a=u(n[o]);if(!("number"==typeof a&&c(e)&&a<e.length||(t.includeInheritedProps?a in Object(e):r(e,a))))return!1;e=e[a]}return!0},e.ensureExists=function(t,e,r){return f(t,e,r,!0)},e.set=function(t,e,r,n){return f(t,e,r,n)},e.insert=function(t,r,n,o){var a=e.get(t,r);o=~~o,c(a)||(a=[],e.set(t,r,a)),a.splice(o,0,n)},e.empty=function(t,r){var u,s;if(!n(r)&&null!=t&&(u=e.get(t,r))){if("string"==typeof u)return e.set(t,r,"");if(i(u))return e.set(t,r,!1);if("number"==typeof u)return e.set(t,r,0);if(c(u))u.length=0;else{if(!a(u))return e.set(t,r,null);for(s in u)o(u,s)&&delete u[s]}}},e.push=function(t,r){var n=e.get(t,r);c(n)||(n=[],e.set(t,r,n)),n.push.apply(n,Array.prototype.slice.call(arguments,2))},e.coalesce=function(t,r,n){for(var o,a=0,c=r.length;a<c;a++)if(void 0!==(o=e.get(t,r[a])))return o;return n},e.get=function(t,r,n){if("number"==typeof r&&(r=[r]),!r||0===r.length)return t;if(null==t)return n;if("string"==typeof r)return e.get(t,r.split("."),n);var o=u(r[0]),a=s(t,o);return void 0===a?n:1===r.length?a:e.get(t[o],r.slice(1),n)},e.del=function(t,r){if("number"==typeof r&&(r=[r]),null==t)return t;if(n(r))return t;if("string"==typeof r)return e.del(t,r.split("."));var a=u(r[0]);return o(t,a)?1!==r.length?e.del(t[a],r.slice(1)):(c(t)?t.splice(a,1):delete t[a],t):t},e}var f=s();return f.create=s,f.withInheritedProps=s({includeInheritedProps:!0}),f}()})),ut=new Map;function st(t,e){e=n({caseSensitive:!1},e);var r=t+JSON.stringify(e);if(ut.has(r))return ut.get(r);var o="!"===t[0];o&&(t=t.slice(1)),t=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}(t).replace(/\\\*/g,"[\\s\\S]*");var a=new RegExp("^".concat(t,"$"),e.caseSensitive?"":"i");return a.negated=o,ut.set(r,a),a}var ft=function(e,r,n){if(!Array.isArray(e)||!Array.isArray(r))throw new TypeError("Expected two arrays, got ".concat(t(e)," ").concat(t(r)));if(0===r.length)return e;var o="!"===r[0][0];r=r.map((function(t){return st(t,n)}));var c,i=[],u=a(e);try{for(u.s();!(c=u.n()).done;){var s,f=c.value,l=o,p=a(r);try{for(p.s();!(s=p.n()).done;){var y=s.value;y.test(f)&&(l=!y.negated)}}catch(t){p.e(t)}finally{p.f()}l&&i.push(f)}}catch(t){u.e(t)}finally{u.f()}return i};function lt(t,e,r){var o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=Object.prototype.hasOwnProperty;function c(t){return null!=t}function i(t){return"Object"===u(t)}function s(t,e){return e=ct(e),Array.from(t).filter((function(t){return!e.some((function(e){return ft.isMatch(t,e,{caseSensitive:!0})}))}))}var f=["any","anything","every","everything","all","whatever","whatevs"],l=Array.isArray;if(!c(t))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");var p,y={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};if(p=c(r)&&i(r)?n(n({},y),r):n({},y),c(p.ignoreKeys)&&p.ignoreKeys?p.ignoreKeys=ct(p.ignoreKeys):p.ignoreKeys=[],c(p.ignorePaths)&&p.ignorePaths?p.ignorePaths=ct(p.ignorePaths):p.ignorePaths=[],c(p.acceptArraysIgnore)&&p.acceptArraysIgnore?p.acceptArraysIgnore=ct(p.acceptArraysIgnore):p.acceptArraysIgnore=[],p.msg="string"==typeof p.msg?p.msg.trim():p.msg,":"===p.msg[p.msg.length-1]&&(p.msg=p.msg.slice(0,p.msg.length-1).trim()),p.schema&&(Object.keys(p.schema).forEach((function(t){if(i(p.schema[t])){var e={};v(p.schema[t],(function(r,n,o){var a=void 0!==n?n:r;return l(a)||i(a)||(e["".concat(t,".").concat(o.path)]=a),a})),delete p.schema[t],p.schema=Object.assign(p.schema,e)}})),Object.keys(p.schema).forEach((function(t){l(p.schema[t])||(p.schema[t]=[p.schema[t]]),p.schema[t]=p.schema[t].map(String).map((function(t){return t.toLowerCase()})).map((function(t){return t.trim()}))}))),c(e)||(e={}),o&&lt(p,y,{enforceStrictKeyset:!1},!1),p.enforceStrictKeyset)if(c(p.schema)&&Object.keys(p.schema).length>0){if(0!==s(h(Object.keys(t),Object.keys(e).concat(Object.keys(p.schema))),p.ignoreKeys).length){var g=h(Object.keys(t),Object.keys(e).concat(Object.keys(p.schema)));throw new TypeError("".concat(p.msg,": ").concat(p.optsVarName,".enforceStrictKeyset is on and the following key").concat(g.length>1?"s":""," ").concat(g.length>1?"are":"is"," not covered by schema and/or reference objects: ").concat(g.join(", ")))}}else{if(!(c(e)&&Object.keys(e).length>0))throw new TypeError("".concat(p.msg,": Both ").concat(p.optsVarName,".schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!"));if(0!==s(h(Object.keys(t),Object.keys(e)),p.ignoreKeys).length){var d=h(Object.keys(t),Object.keys(e));throw new TypeError("".concat(p.msg,": The input object has key").concat(d.length>1?"s":""," which ").concat(d.length>1?"are":"is"," not covered by the reference object: ").concat(d.join(", ")))}if(0!==s(h(Object.keys(e),Object.keys(t)),p.ignoreKeys).length){var b=h(Object.keys(e),Object.keys(t));throw new TypeError("".concat(p.msg,": The reference object has key").concat(b.length>1?"s":""," which ").concat(b.length>1?"are":"is"," not present in the input object: ").concat(b.join(", ")))}}var m=[];v(t,(function(r,n,o){var c=n,s=r;if("array"===o.parentType&&(s=void 0,c=r),l(m)&&m.length&&m.some((function(t){return o.path.startsWith(t)})))return c;if(s&&p.ignoreKeys.some((function(t){return ft.isMatch(s,t)})))return c;if(p.ignorePaths.some((function(t){return ft.isMatch(o.path,t)})))return c;var y=!(!i(c)&&!l(c)&&l(o.parent)),h=!1;i(p.schema)&&a.call(p.schema,it.get(o.path))&&(h=!0);var g=!1;if(i(e)&&it.has(e,it.get(o.path))&&(g=!0),p.enforceStrictKeyset&&y&&!h&&!g)throw new TypeError("".concat(p.msg,": ").concat(p.optsVarName,".").concat(o.path," is neither covered by reference object (second input argument), nor ").concat(p.optsVarName,".schema! To stop this error, turn off ").concat(p.optsVarName,".enforceStrictKeyset or provide some type reference (2nd argument or ").concat(p.optsVarName,".schema).\n\nDebug info:\n\nobj = ").concat(JSON.stringify(t,null,4),"\n\nref = ").concat(JSON.stringify(e,null,4),"\n\ninnerObj = ").concat(JSON.stringify(o,null,4),"\n\nopts = ").concat(JSON.stringify(p,null,4),"\n\ncurrent = ").concat(JSON.stringify(c,null,4),"\n\n"));if(h){var d=ct(p.schema[o.path]).map(String).map((function(t){return t.toLowerCase()}));if(it.set(p.schema,o.path,d),at(d,f).length)m.push(o.path);else if(!0!==c&&!1!==c&&!d.includes(u(c).toLowerCase())||(!0===c||!1===c)&&!d.includes(String(c))&&!d.includes("boolean")){if(!l(c)||!p.acceptArrays)throw new TypeError("".concat(p.msg,": ").concat(p.optsVarName,".").concat(o.path," was customised to ").concat("string"!==u(c)?'"':"").concat(JSON.stringify(c,null,0)).concat("string"!==u(c)?'"':""," (type: ").concat(u(c).toLowerCase(),") which is not among the allowed types in schema (which is equal to ").concat(JSON.stringify(d,null,0),")"));for(var v=0,b=c.length;v<b;v++)if(!d.includes(u(c[v]).toLowerCase()))throw new TypeError("".concat(p.msg,": ").concat(p.optsVarName,".").concat(o.path,".").concat(v,", the ").concat(v,"th element (equal to ").concat(JSON.stringify(c[v],null,0),") is of a type ").concat(u(c[v]).toLowerCase(),", but only the following are allowed by the ").concat(p.optsVarName,".schema: ").concat(d.join(", ")))}}else if(g){var _=it.get(e,o.path);if(p.acceptArrays&&l(c)&&!p.acceptArraysIgnore.includes(r)){if(!c.every((function(t){return u(t).toLowerCase()===u(e[r]).toLowerCase()})))throw new TypeError("".concat(p.msg,": ").concat(p.optsVarName,".").concat(o.path," was customised to be array, but not all of its elements are ").concat(u(e[r]).toLowerCase(),"-type"))}else if(u(c)!==u(_))throw new TypeError("".concat(p.msg,": ").concat(p.optsVarName,".").concat(o.path," was customised to ").concat("string"===u(c).toLowerCase()?"":'"').concat(JSON.stringify(c,null,0)).concat("string"===u(c).toLowerCase()?"":'"'," which is not ").concat(u(_).toLowerCase()," but ").concat(u(c).toLowerCase()))}return c}))}return ft.isMatch=function(t,e,r){var n=Array.isArray(t)?t:[t],o=Array.isArray(e)?e:[e];return n.some((function(t){return o.every((function(e){var n=st(e,r),o=n.test(t);return n.negated?!o:o}))}))},function(t,e,r){return lt(t,e,r)}}));
