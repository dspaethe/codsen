/**
 * test-mixer
 * Test helper to generate function opts object variations
 * Version: 1.0.1
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/test-mixer/
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).testMixer={})}(this,(function(t){"use strict";function r(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function e(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function n(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r))}))}return t}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var u="__lodash_hash_undefined__",c=9007199254740991,i=/^\[object .+?Constructor\]$/,a="object"==typeof self&&self&&self.Object===Object&&self,f="object"==typeof o&&o&&o.Object===Object&&o||a||Function("return this")();function s(t,r,e){switch(e.length){case 0:return t.call(r);case 1:return t.call(r,e[0]);case 2:return t.call(r,e[0],e[1]);case 3:return t.call(r,e[0],e[1],e[2])}return t.apply(r,e)}function l(t,r){return!!(t?t.length:0)&&function(t,r,e){if(r!=r)return function(t,r,e,n){var o=t.length,u=e+(n?1:-1);for(;n?u--:++u<o;)if(r(t[u],u,t))return u;return-1}(t,_,e);var n=e-1,o=t.length;for(;++n<o;)if(t[n]===r)return n;return-1}(t,r,0)>-1}function p(t,r,e){for(var n=-1,o=t?t.length:0;++n<o;)if(e(r,t[n]))return!0;return!1}function h(t,r){for(var e=-1,n=t?t.length:0,o=Array(n);++e<n;)o[e]=r(t[e],e,t);return o}function _(t){return t!=t}function y(t){return function(r){return t(r)}}function v(t,r){return t.has(r)}var b,d,g,j=Array.prototype,O=Function.prototype,w=Object.prototype,m=f["__core-js_shared__"],A=(b=/[^.]+$/.exec(m&&m.keys&&m.keys.IE_PROTO||""))?"Symbol(src)_1."+b:"",x=O.toString,E=w.hasOwnProperty,P=w.toString,k=RegExp("^"+x.call(E).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),S=j.splice,I=Math.max,T=Math.min,$=z(f,"Map"),D=z(Object,"create");function F(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function R(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function M(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function W(t){var r=-1,e=t?t.length:0;for(this.__data__=new M;++r<e;)this.add(t[r])}function H(t,r){for(var e,n,o=t.length;o--;)if((e=t[o][0])===(n=r)||e!=e&&n!=n)return o;return-1}function B(t){return!(!L(t)||(r=t,A&&A in r))&&(G(t)||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(t)?k:i).test(function(t){if(null!=t){try{return x.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var r}function U(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=c}(t.length)&&!G(t)}(t)}(t)?t:[]}function C(t,r){var e,n,o=t.__data__;return("string"==(n=typeof(e=r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?o["string"==typeof r?"string":"hash"]:o.map}function z(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return B(e)?e:void 0}function G(t){var r=L(t)?P.call(t):"";return"[object Function]"==r||"[object GeneratorFunction]"==r}function L(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}F.prototype.clear=function(){this.__data__=D?D(null):{}},F.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},F.prototype.get=function(t){var r=this.__data__;if(D){var e=r[t];return e===u?void 0:e}return E.call(r,t)?r[t]:void 0},F.prototype.has=function(t){var r=this.__data__;return D?void 0!==r[t]:E.call(r,t)},F.prototype.set=function(t,r){return this.__data__[t]=D&&void 0===r?u:r,this},R.prototype.clear=function(){this.__data__=[]},R.prototype.delete=function(t){var r=this.__data__,e=H(r,t);return!(e<0)&&(e==r.length-1?r.pop():S.call(r,e,1),!0)},R.prototype.get=function(t){var r=this.__data__,e=H(r,t);return e<0?void 0:r[e][1]},R.prototype.has=function(t){return H(this.__data__,t)>-1},R.prototype.set=function(t,r){var e=this.__data__,n=H(e,t);return n<0?e.push([t,r]):e[n][1]=r,this},M.prototype.clear=function(){this.__data__={hash:new F,map:new($||R),string:new F}},M.prototype.delete=function(t){return C(this,t).delete(t)},M.prototype.get=function(t){return C(this,t).get(t)},M.prototype.has=function(t){return C(this,t).has(t)},M.prototype.set=function(t,r){return C(this,t).set(t,r),this},W.prototype.add=W.prototype.push=function(t){return this.__data__.set(t,u),this},W.prototype.has=function(t){return this.__data__.has(t)};var V=(d=function(t){var r=h(t,U);return r.length&&r[0]===t[0]?function(t,r,e){for(var n=e?p:l,o=t[0].length,u=t.length,c=u,i=Array(u),a=1/0,f=[];c--;){var s=t[c];c&&r&&(s=h(s,y(r))),a=T(s.length,a),i[c]=!e&&(r||o>=120&&s.length>=120)?new W(c&&s):void 0}s=t[0];var _=-1,b=i[0];t:for(;++_<o&&f.length<a;){var d=s[_],g=r?r(d):d;if(d=e||0!==d?d:0,!(b?v(b,g):n(f,g,e))){for(c=u;--c;){var j=i[c];if(!(j?v(j,g):n(t[c],g,e)))continue t}b&&b.push(g),f.push(d)}}return f}(r):[]},g=I(void 0===g?d.length-1:g,0),function(){for(var t=arguments,r=-1,e=I(t.length-g,0),n=Array(e);++r<e;)n[r]=t[g+r];r=-1;for(var o=Array(g+1);++r<g;)o[r]=t[r];return o[g]=n,s(d,this,o)});function N(t,r,e){switch(e.length){case 0:return t.call(r);case 1:return t.call(r,e[0]);case 2:return t.call(r,e[0],e[1]);case 3:return t.call(r,e[0],e[1],e[2])}return t.apply(r,e)}function q(t,r,e){if(r!=r)return function(t,r,e,n){for(var o=t.length,u=e+(n?1:-1);n?u--:++u<o;)if(r(t[u],u,t))return u;return-1}(t,K,e);for(var n=e-1,o=t.length;++n<o;)if(t[n]===r)return n;return-1}function J(t,r,e,n){for(var o=e-1,u=t.length;++o<u;)if(n(t[o],r))return o;return-1}function K(t){return t!=t}var Q=Array.prototype.splice,X=Math.max;function Y(t,r,e,n){var o=n?J:q,u=-1,c=r.length,i=t;for(t===r&&(r=function(t,r){var e=-1,n=t.length;r||(r=Array(n));for(;++e<n;)r[e]=t[e];return r}(r)),e&&(i=function(t,r){for(var e=-1,n=t?t.length:0,o=Array(n);++e<n;)o[e]=r(t[e],e,t);return o}(t,function(t){return function(r){return t(r)}}(e)));++u<c;)for(var a=0,f=r[u],s=e?e(f):f;(a=o(i,s,a,n))>-1;)i!==t&&Q.call(i,a,1),Q.call(t,a,1);return t}var Z=function(t,r){return r=X(void 0===r?t.length-1:r,0),function(){for(var e=arguments,n=-1,o=X(e.length-r,0),u=Array(o);++n<o;)u[n]=e[r+n];n=-1;for(var c=Array(r+1);++n<r;)c[n]=e[n];return c[r]=u,N(t,this,c)}}((function(t,r){return t&&t.length&&r&&r.length?Y(t,r):t}));var tt=Object.prototype,rt=Function.prototype.toString,et=tt.hasOwnProperty,nt=rt.call(Object),ot=tt.toString,ut=function(t,r){return function(e){return t(r(e))}}(Object.getPrototypeOf,Object);var ct=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=ot.call(t)||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(t))return!1;var r=ut(t);if(null===r)return!0;var e=et.call(r,"constructor")&&r.constructor;return"function"==typeof e&&e instanceof e&&rt.call(e)==nt},it=function(t){var r={exports:{}};return t(r,r.exports),r.exports}((function(t,r){var e="__lodash_hash_undefined__",n=9007199254740991,u="[object Arguments]",c="[object Boolean]",i="[object Date]",a="[object Function]",f="[object GeneratorFunction]",s="[object Map]",l="[object Number]",p="[object Object]",h="[object Promise]",_="[object RegExp]",y="[object Set]",v="[object String]",b="[object Symbol]",d="[object WeakMap]",g="[object ArrayBuffer]",j="[object DataView]",O="[object Float32Array]",w="[object Float64Array]",m="[object Int8Array]",A="[object Int16Array]",x="[object Int32Array]",E="[object Uint8Array]",P="[object Uint8ClampedArray]",k="[object Uint16Array]",S="[object Uint32Array]",I=/\w*$/,T=/^\[object .+?Constructor\]$/,$=/^(?:0|[1-9]\d*)$/,D={};D[u]=D["[object Array]"]=D[g]=D[j]=D[c]=D[i]=D[O]=D[w]=D[m]=D[A]=D[x]=D[s]=D[l]=D[p]=D[_]=D[y]=D[v]=D[b]=D[E]=D[P]=D[k]=D[S]=!0,D["[object Error]"]=D[a]=D[d]=!1;var F="object"==typeof self&&self&&self.Object===Object&&self,R="object"==typeof o&&o&&o.Object===Object&&o||F||Function("return this")(),M=r&&!r.nodeType&&r,W=M&&t&&!t.nodeType&&t,H=W&&W.exports===M;function B(t,r){return t.set(r[0],r[1]),t}function U(t,r){return t.add(r),t}function C(t,r,e,n){var o=-1,u=t?t.length:0;for(n&&u&&(e=t[++o]);++o<u;)e=r(e,t[o],o,t);return e}function z(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function G(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e}function L(t,r){return function(e){return t(r(e))}}function V(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e}var N=Array.prototype,q=Function.prototype,J=Object.prototype,K=R["__core-js_shared__"],Q=function(){var t=/[^.]+$/.exec(K&&K.keys&&K.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),X=q.toString,Y=J.hasOwnProperty,Z=J.toString,tt=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=H?R.Buffer:void 0,et=R.Symbol,nt=R.Uint8Array,ot=L(Object.getPrototypeOf,Object),ut=Object.create,ct=J.propertyIsEnumerable,it=N.splice,at=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,st=L(Object.keys,Object),lt=Mt(R,"DataView"),pt=Mt(R,"Map"),ht=Mt(R,"Promise"),_t=Mt(R,"Set"),yt=Mt(R,"WeakMap"),vt=Mt(Object,"create"),bt=Ct(lt),dt=Ct(pt),gt=Ct(ht),jt=Ct(_t),Ot=Ct(yt),wt=et?et.prototype:void 0,mt=wt?wt.valueOf:void 0;function At(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function xt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Et(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Pt(t){this.__data__=new xt(t)}function kt(t,r){var e=Gt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Lt(t)}(t)&&Y.call(t,"callee")&&(!ct.call(t,"callee")||Z.call(t)==u)}(t)?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(t.length,String):[],n=e.length,o=!!n;for(var c in t)!r&&!Y.call(t,c)||o&&("length"==c||Bt(c,n))||e.push(c);return e}function St(t,r,e){var n=t[r];Y.call(t,r)&&zt(n,e)&&(void 0!==e||r in t)||(t[r]=e)}function It(t,r){for(var e=t.length;e--;)if(zt(t[e][0],r))return e;return-1}function Tt(t,r,e,n,o,h,d){var T;if(n&&(T=h?n(t,o,h,d):n(t)),void 0!==T)return T;if(!qt(t))return t;var $=Gt(t);if($){if(T=function(t){var r=t.length,e=t.constructor(r);r&&"string"==typeof t[0]&&Y.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!r)return function(t,r){var e=-1,n=t.length;r||(r=Array(n));for(;++e<n;)r[e]=t[e];return r}(t,T)}else{var F=Ht(t),R=F==a||F==f;if(Vt(t))return function(t,r){if(r)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,r);if(F==p||F==u||R&&!h){if(z(t))return h?t:{};if(T=function(t){return"function"!=typeof t.constructor||Ut(t)?{}:(r=ot(t),qt(r)?ut(r):{});var r}(R?{}:t),!r)return function(t,r){return Ft(t,Wt(t),r)}(t,function(t,r){return t&&Ft(r,Jt(r),t)}(T,t))}else{if(!D[F])return h?t:{};T=function(t,r,e,n){var o=t.constructor;switch(r){case g:return Dt(t);case c:case i:return new o(+t);case j:return function(t,r){var e=r?Dt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,n);case O:case w:case m:case A:case x:case E:case P:case k:case S:return function(t,r){var e=r?Dt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,n);case s:return function(t,r,e){return C(r?e(G(t),!0):G(t),B,new t.constructor)}(t,n,e);case l:case v:return new o(t);case _:return function(t){var r=new t.constructor(t.source,I.exec(t));return r.lastIndex=t.lastIndex,r}(t);case y:return function(t,r,e){return C(r?e(V(t),!0):V(t),U,new t.constructor)}(t,n,e);case b:return u=t,mt?Object(mt.call(u)):{}}var u}(t,F,Tt,r)}}d||(d=new Pt);var M=d.get(t);if(M)return M;if(d.set(t,T),!$)var W=e?function(t){return function(t,r,e){var n=r(t);return Gt(t)?n:function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t}(n,e(t))}(t,Jt,Wt)}(t):Jt(t);return function(t,r){for(var e=-1,n=t?t.length:0;++e<n&&!1!==r(t[e],e,t););}(W||t,(function(o,u){W&&(o=t[u=o]),St(T,u,Tt(o,r,e,n,u,t,d))})),T}function $t(t){return!(!qt(t)||function(t){return!!Q&&Q in t}(t))&&(Nt(t)||z(t)?tt:T).test(Ct(t))}function Dt(t){var r=new t.constructor(t.byteLength);return new nt(r).set(new nt(t)),r}function Ft(t,r,e,n){e||(e={});for(var o=-1,u=r.length;++o<u;){var c=r[o],i=n?n(e[c],t[c],c,e,t):void 0;St(e,c,void 0===i?t[c]:i)}return e}function Rt(t,r){var e,n,o=t.__data__;return("string"==(n=typeof(e=r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?o["string"==typeof r?"string":"hash"]:o.map}function Mt(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return $t(e)?e:void 0}At.prototype.clear=function(){this.__data__=vt?vt(null):{}},At.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},At.prototype.get=function(t){var r=this.__data__;if(vt){var n=r[t];return n===e?void 0:n}return Y.call(r,t)?r[t]:void 0},At.prototype.has=function(t){var r=this.__data__;return vt?void 0!==r[t]:Y.call(r,t)},At.prototype.set=function(t,r){return this.__data__[t]=vt&&void 0===r?e:r,this},xt.prototype.clear=function(){this.__data__=[]},xt.prototype.delete=function(t){var r=this.__data__,e=It(r,t);return!(e<0)&&(e==r.length-1?r.pop():it.call(r,e,1),!0)},xt.prototype.get=function(t){var r=this.__data__,e=It(r,t);return e<0?void 0:r[e][1]},xt.prototype.has=function(t){return It(this.__data__,t)>-1},xt.prototype.set=function(t,r){var e=this.__data__,n=It(e,t);return n<0?e.push([t,r]):e[n][1]=r,this},Et.prototype.clear=function(){this.__data__={hash:new At,map:new(pt||xt),string:new At}},Et.prototype.delete=function(t){return Rt(this,t).delete(t)},Et.prototype.get=function(t){return Rt(this,t).get(t)},Et.prototype.has=function(t){return Rt(this,t).has(t)},Et.prototype.set=function(t,r){return Rt(this,t).set(t,r),this},Pt.prototype.clear=function(){this.__data__=new xt},Pt.prototype.delete=function(t){return this.__data__.delete(t)},Pt.prototype.get=function(t){return this.__data__.get(t)},Pt.prototype.has=function(t){return this.__data__.has(t)},Pt.prototype.set=function(t,r){var e=this.__data__;if(e instanceof xt){var n=e.__data__;if(!pt||n.length<199)return n.push([t,r]),this;e=this.__data__=new Et(n)}return e.set(t,r),this};var Wt=at?L(at,Object):function(){return[]},Ht=function(t){return Z.call(t)};function Bt(t,r){return!!(r=null==r?n:r)&&("number"==typeof t||$.test(t))&&t>-1&&t%1==0&&t<r}function Ut(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||J)}function Ct(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function zt(t,r){return t===r||t!=t&&r!=r}(lt&&Ht(new lt(new ArrayBuffer(1)))!=j||pt&&Ht(new pt)!=s||ht&&Ht(ht.resolve())!=h||_t&&Ht(new _t)!=y||yt&&Ht(new yt)!=d)&&(Ht=function(t){var r=Z.call(t),e=r==p?t.constructor:void 0,n=e?Ct(e):void 0;if(n)switch(n){case bt:return j;case dt:return s;case gt:return h;case jt:return y;case Ot:return d}return r});var Gt=Array.isArray;function Lt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}(t.length)&&!Nt(t)}var Vt=ft||function(){return!1};function Nt(t){var r=qt(t)?Z.call(t):"";return r==a||r==f}function qt(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function Jt(t){return Lt(t)?kt(t):function(t){if(!Ut(t))return st(t);var r=[];for(var e in Object(t))Y.call(t,e)&&"constructor"!=e&&r.push(e);return r}(t)}t.exports=function(t){return Tt(t,!0,!0)}}));t.mixer=function(t,r){if(void 0===t&&(t={}),void 0===r&&(r={}),t&&"object"!=typeof t)throw new Error("test-mixer: [THROW_ID_01] the first input arg is missing!");if(r&&"object"!=typeof r)throw new Error("test-mixer: [THROW_ID_02] the second input arg is missing!");var e;if("object"==typeof t&&"object"==typeof r&&Object.keys(t).some((function(t){if(!Object.keys(r).includes(t))return e=t,!0})))throw new Error('test-mixer: [THROW_ID_03] the second input arg object should be defaults; it should be a superset of 1st input arg object. However, 1st input arg object contains key "'+e+"\" which 2nd input arg object doesn't have.");if(!Object.keys(r).length)return[];var o=it(t),u=it(r),c={};return Object.keys(r).forEach((function(r){"boolean"!=typeof u[r]||Object.keys(t).includes(r)||(c[r]=u[r])})),function(t,r){if(void 0===r&&(r={}),!t)throw new Error("[THROW_ID_01] missing input object");if(!ct(t))throw new Error("[THROW_ID_02] the first input object must be a true object");if(r&&!ct(r))throw new Error("[THROW_ID_03] the second override object must be a true object");var e=it(t),n=it(r),o=Object.keys(e),u=[],c=[];ct(n)&&Object.keys(n).length&&(c=V(Object.keys(n),Object.keys(e))).forEach((function(t){return Z(o,t)}));var i,a=function(t){for(var r=[],e=0;e<1<<t;e++){for(var n=[],o=0;o<t;o++)n.push(e&1<<o?1:0);r.push(n)}return r}(Object.keys(o).length);return a.forEach((function(t,r){i={},o.forEach((function(t,e){i[t]=1===a[r][e]})),u.push(i)})),ct(n)&&Object.keys(n).length&&u.forEach((function(t){return c.forEach((function(r){t[r]=n[r]}))})),u}(c).map((function(t){return n(n(n({},r),o),t)}))},t.version="1.0.1",Object.defineProperty(t,"__esModule",{value:!0})}));
