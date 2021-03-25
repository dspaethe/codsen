/**
 * ast-loose-compare
 * Compare anything: AST, objects, arrays and strings
 * Version: 2.0.10
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ast-loose-compare/
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).astLooseCompare={})}(this,(function(t){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var r=function(t){var e={exports:{}};return t(e,e.exports),e.exports}((function(t,r){var n="__lodash_hash_undefined__",o=9007199254740991,u="[object Arguments]",c="[object Boolean]",i="[object Date]",a="[object Function]",f="[object GeneratorFunction]",s="[object Map]",l="[object Number]",p="[object Object]",y="[object Promise]",h="[object RegExp]",_="[object Set]",d="[object String]",b="[object Symbol]",v="[object WeakMap]",g="[object ArrayBuffer]",j="[object DataView]",w="[object Float32Array]",O="[object Float64Array]",A="[object Int8Array]",m="[object Int16Array]",x="[object Int32Array]",S="[object Uint8Array]",$="[object Uint8ClampedArray]",k="[object Uint16Array]",P="[object Uint32Array]",T=/\w*$/,I=/^\[object .+?Constructor\]$/,E=/^(?:0|[1-9]\d*)$/,F={};F[u]=F["[object Array]"]=F[g]=F[j]=F[c]=F[i]=F[w]=F[O]=F[A]=F[m]=F[x]=F[s]=F[l]=F[p]=F[h]=F[_]=F[d]=F[b]=F[S]=F[$]=F[k]=F[P]=!0,F["[object Error]"]=F[a]=F[v]=!1;var N="object"==typeof self&&self&&self.Object===Object&&self,B="object"==typeof e&&e&&e.Object===Object&&e||N||Function("return this")(),M=r&&!r.nodeType&&r,U=M&&t&&!t.nodeType&&t,C=U&&U.exports===M;function D(t,e){return t.set(e[0],e[1]),t}function K(t,e){return t.add(e),t}function L(t,e,r,n){var o=-1,u=t?t.length:0;for(n&&u&&(r=t[++o]);++o<u;)r=e(r,t[o],o,t);return r}function R(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function z(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function V(t,e){return function(r){return t(e(r))}}function W(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var G,q=Array.prototype,H=Function.prototype,J=Object.prototype,Q=B["__core-js_shared__"],X=(G=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+G:"",Y=H.toString,Z=J.hasOwnProperty,tt=J.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=C?B.Buffer:void 0,nt=B.Symbol,ot=B.Uint8Array,ut=V(Object.getPrototypeOf,Object),ct=Object.create,it=J.propertyIsEnumerable,at=q.splice,ft=Object.getOwnPropertySymbols,st=rt?rt.isBuffer:void 0,lt=V(Object.keys,Object),pt=Ut(B,"DataView"),yt=Ut(B,"Map"),ht=Ut(B,"Promise"),_t=Ut(B,"Set"),dt=Ut(B,"WeakMap"),bt=Ut(Object,"create"),vt=Rt(pt),gt=Rt(yt),jt=Rt(ht),wt=Rt(_t),Ot=Rt(dt),At=nt?nt.prototype:void 0,mt=At?At.valueOf:void 0;function xt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function $t(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function kt(t){this.__data__=new St(t)}function Pt(t,e){var r=Vt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Wt(t)}(t)&&Z.call(t,"callee")&&(!it.call(t,"callee")||tt.call(t)==u)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var c in t)!e&&!Z.call(t,c)||o&&("length"==c||Kt(c,n))||r.push(c);return r}function Tt(t,e,r){var n=t[e];Z.call(t,e)&&zt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function It(t,e){for(var r=t.length;r--;)if(zt(t[r][0],e))return r;return-1}function Et(t,e,r,n,o,y,v){var I;if(n&&(I=y?n(t,o,y,v):n(t)),void 0!==I)return I;if(!Ht(t))return t;var E=Vt(t);if(E){if(I=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,I)}else{var N=Dt(t),B=N==a||N==f;if(Gt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(N==p||N==u||B&&!y){if(R(t))return y?t:{};if(I=function(t){return"function"!=typeof t.constructor||Lt(t)?{}:(e=ut(t),Ht(e)?ct(e):{});var e}(B?{}:t),!e)return function(t,e){return Bt(t,Ct(t),e)}(t,function(t,e){return t&&Bt(e,Jt(e),t)}(I,t))}else{if(!F[N])return y?t:{};I=function(t,e,r,n){var o=t.constructor;switch(e){case g:return Nt(t);case c:case i:return new o(+t);case j:return function(t,e){var r=e?Nt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case w:case O:case A:case m:case x:case S:case $:case k:case P:return function(t,e){var r=e?Nt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case s:return function(t,e,r){return L(e?r(z(t),!0):z(t),D,new t.constructor)}(t,n,r);case l:case d:return new o(t);case h:return function(t){var e=new t.constructor(t.source,T.exec(t));return e.lastIndex=t.lastIndex,e}(t);case _:return function(t,e,r){return L(e?r(W(t),!0):W(t),K,new t.constructor)}(t,n,r);case b:return u=t,mt?Object(mt.call(u)):{}}var u}(t,N,Et,e)}}v||(v=new kt);var M=v.get(t);if(M)return M;if(v.set(t,I),!E)var U=r?function(t){return function(t,e,r){var n=e(t);return Vt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Jt,Ct)}(t):Jt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(U||t,(function(o,u){U&&(o=t[u=o]),Tt(I,u,Et(o,e,r,n,u,t,v))})),I}function Ft(t){return!(!Ht(t)||(e=t,X&&X in e))&&(qt(t)||R(t)?et:I).test(Rt(t));var e}function Nt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Bt(t,e,r,n){r||(r={});for(var o=-1,u=e.length;++o<u;){var c=e[o],i=n?n(r[c],t[c],c,r,t):void 0;Tt(r,c,void 0===i?t[c]:i)}return r}function Mt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Ut(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Ft(r)?r:void 0}xt.prototype.clear=function(){this.__data__=bt?bt(null):{}},xt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},xt.prototype.get=function(t){var e=this.__data__;if(bt){var r=e[t];return r===n?void 0:r}return Z.call(e,t)?e[t]:void 0},xt.prototype.has=function(t){var e=this.__data__;return bt?void 0!==e[t]:Z.call(e,t)},xt.prototype.set=function(t,e){return this.__data__[t]=bt&&void 0===e?n:e,this},St.prototype.clear=function(){this.__data__=[]},St.prototype.delete=function(t){var e=this.__data__,r=It(e,t);return!(r<0)&&(r==e.length-1?e.pop():at.call(e,r,1),!0)},St.prototype.get=function(t){var e=this.__data__,r=It(e,t);return r<0?void 0:e[r][1]},St.prototype.has=function(t){return It(this.__data__,t)>-1},St.prototype.set=function(t,e){var r=this.__data__,n=It(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},$t.prototype.clear=function(){this.__data__={hash:new xt,map:new(yt||St),string:new xt}},$t.prototype.delete=function(t){return Mt(this,t).delete(t)},$t.prototype.get=function(t){return Mt(this,t).get(t)},$t.prototype.has=function(t){return Mt(this,t).has(t)},$t.prototype.set=function(t,e){return Mt(this,t).set(t,e),this},kt.prototype.clear=function(){this.__data__=new St},kt.prototype.delete=function(t){return this.__data__.delete(t)},kt.prototype.get=function(t){return this.__data__.get(t)},kt.prototype.has=function(t){return this.__data__.has(t)},kt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof St){var n=r.__data__;if(!yt||n.length<199)return n.push([t,e]),this;r=this.__data__=new $t(n)}return r.set(t,e),this};var Ct=ft?V(ft,Object):function(){return[]},Dt=function(t){return tt.call(t)};function Kt(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||E.test(t))&&t>-1&&t%1==0&&t<e}function Lt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||J)}function Rt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function zt(t,e){return t===e||t!=t&&e!=e}(pt&&Dt(new pt(new ArrayBuffer(1)))!=j||yt&&Dt(new yt)!=s||ht&&Dt(ht.resolve())!=y||_t&&Dt(new _t)!=_||dt&&Dt(new dt)!=v)&&(Dt=function(t){var e=tt.call(t),r=e==p?t.constructor:void 0,n=r?Rt(r):void 0;if(n)switch(n){case vt:return j;case gt:return s;case jt:return y;case wt:return _;case Ot:return v}return e});var Vt=Array.isArray;function Wt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!qt(t)}var Gt=st||function(){return!1};function qt(t){var e=Ht(t)?tt.call(t):"";return e==a||e==f}function Ht(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Jt(t){return Wt(t)?Pt(t):function(t){if(!Lt(t))return lt(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return Et(t,!0,!0)}}));var n,o,u=Object.prototype,c=Function.prototype.toString,i=u.hasOwnProperty,a=c.call(Object),f=u.toString,s=(n=Object.getPrototypeOf,o=Object,function(t){return n(o(t))});var l=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=f.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=s(t);if(null===e)return!0;var r=i.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&c.call(r)==a};function p(t){if(t.includes(".")){const e=t.lastIndexOf(".");if(!t.slice(0,e).includes("."))return t.slice(0,e);for(let r=e-1;r--;)if("."===t[r])return t.slice(r+1,e)}return null}function y(t){if("string"==typeof t)return!t.trim();if(!["object","string"].includes(typeof t)||!t)return!1;let e=!0;return t=function t(e,n,o,u){const c=r(e);let i;const a={depth:-1,path:"",...o};if(a.depth+=1,Array.isArray(c))for(let e=0,o=c.length;e<o&&!u.now;e++){const o=a.path?`${a.path}.${e}`:`${e}`;void 0!==c[e]?(a.parent=r(c),a.parentType="array",a.parentKey=p(o),i=t(n(c[e],void 0,{...a,path:o},u),n,{...a,path:o},u),Number.isNaN(i)&&e<c.length?(c.splice(e,1),e-=1):c[e]=i):c.splice(e,1)}else if(l(c))for(const e in c){if(u.now&&null!=e)break;const o=a.path?`${a.path}.${e}`:e;0===a.depth&&null!=e&&(a.topmostKey=e),a.parent=r(c),a.parentType="object",a.parentKey=p(o),i=t(n(e,c[e],{...a,path:o},u),n,{...a,path:o},u),Number.isNaN(i)?delete c[e]:c[e]=i}return c}(t,((t,r,n,o)=>{const u=void 0!==r?r:t;return"string"==typeof u&&u.trim()&&(e=!1,o.now=!0),u}),{},{now:!1}),e}function h(t,e,r){function n(t){return null!=t}let o,u;if(void 0===r){if(!n(t)||!n(e))return}else if(!n(t)||!n(e))return!1;if(r=r||!0,typeof t!=typeof e)return!(!y(t)||!y(e));if(Array.isArray(t)&&Array.isArray(e)){if(!(e.length>0))return!!(0===e.length&&0===t.length||y(e)&&y(t));for(o=0,u=e.length;o<u;o++)if(Array.isArray(e[o])||l(e[o])){if(!(r=h(t[o],e[o],r)))return!1}else if(e[o]!==t[o])return!(!y(e[o])||!y(t[o]))}else if(l(t)&&l(e)){if(!(Object.keys(e).length>0))return!!(0===Object.keys(e).length&&0===Object.keys(t).length||y(e)&&y(t));{const n=Object.keys(e);for(o=0,u=n.length;o<u;o++)if(Array.isArray(e[n[o]])||l(e[n[o]])||"string"==typeof e[n[o]]){if(!(r=h(t[n[o]],e[n[o]],r)))return!1}else if(!(e[n[o]]===t[n[o]]||y(e[n[o]])&&y(t[n[o]])))return!1}}else{if("string"!=typeof t||"string"!=typeof e)return!(!y(e)||!y(t));if(t!==e)return!(!y(e)||!y(t))}return r}t.looseCompare=function(t,e){return h(t,e)},t.version="2.0.10",Object.defineProperty(t,"__esModule",{value:!0})}));
