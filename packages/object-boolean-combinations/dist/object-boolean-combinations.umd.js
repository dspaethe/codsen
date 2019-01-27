/**
 * object-boolean-combinations
 * Generate an array full of object copies, each containing a unique Boolean value combination. Includes overrides.
 * Version: 2.11.3
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://bitbucket.org/codsen/codsen/src/master/packages/object-boolean-combinations
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t=t||self).objectBooleanCombinations=r()}(this,function(){"use strict";var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var r="__lodash_hash_undefined__",n=9007199254740991,e="[object Function]",o="[object GeneratorFunction]",u=/^\[object .+?Constructor\]$/,c="object"==typeof t&&t&&t.Object===Object&&t,a="object"==typeof self&&self&&self.Object===Object&&self,i=c||a||Function("return this")();function f(t,r){return!!(t?t.length:0)&&function(t,r,n){if(r!=r)return function(t,r,n,e){var o=t.length,u=n+(e?1:-1);for(;e?u--:++u<o;)if(r(t[u],u,t))return u;return-1}(t,h,n);var e=n-1,o=t.length;for(;++e<o;)if(t[e]===r)return e;return-1}(t,r,0)>-1}function s(t,r,n){for(var e=-1,o=t?t.length:0;++e<o;)if(n(r,t[e]))return!0;return!1}function l(t,r){for(var n=-1,e=t?t.length:0,o=Array(e);++n<e;)o[n]=r(t[n],n,t);return o}function h(t){return t!=t}function p(t){return function(r){return t(r)}}function _(t,r){return t.has(r)}var y,v,d,b=Array.prototype,g=Function.prototype,j=Object.prototype,w=i["__core-js_shared__"],O=(y=/[^.]+$/.exec(w&&w.keys&&w.keys.IE_PROTO||""))?"Symbol(src)_1."+y:"",m=g.toString,A=j.hasOwnProperty,x=j.toString,S=RegExp("^"+m.call(A).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),E=b.splice,k=Math.max,$=Math.min,P=C(i,"Map"),F=C(Object,"create");function I(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function M(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function R(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function T(t){var r=-1,n=t?t.length:0;for(this.__data__=new R;++r<n;)this.add(t[r])}function W(t,r){for(var n,e,o=t.length;o--;)if((n=t[o][0])===(e=r)||n!=n&&e!=e)return o;return-1}function B(t){return!(!z(t)||(r=t,O&&O in r))&&(H(t)||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(t)?S:u).test(function(t){if(null!=t){try{return m.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var r}function D(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}(t.length)&&!H(t)}(t)}(t)?t:[]}function U(t,r){var n,e,o=t.__data__;return("string"==(e=typeof(n=r))||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==n:null===n)?o["string"==typeof r?"string":"hash"]:o.map}function C(t,r){var n=function(t,r){return null==t?void 0:t[r]}(t,r);return B(n)?n:void 0}function H(t){var r=z(t)?x.call(t):"";return r==e||r==o}function z(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}I.prototype.clear=function(){this.__data__=F?F(null):{}},I.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},I.prototype.get=function(t){var n=this.__data__;if(F){var e=n[t];return e===r?void 0:e}return A.call(n,t)?n[t]:void 0},I.prototype.has=function(t){var r=this.__data__;return F?void 0!==r[t]:A.call(r,t)},I.prototype.set=function(t,n){return this.__data__[t]=F&&void 0===n?r:n,this},M.prototype.clear=function(){this.__data__=[]},M.prototype.delete=function(t){var r=this.__data__,n=W(r,t);return!(n<0||(n==r.length-1?r.pop():E.call(r,n,1),0))},M.prototype.get=function(t){var r=this.__data__,n=W(r,t);return n<0?void 0:r[n][1]},M.prototype.has=function(t){return W(this.__data__,t)>-1},M.prototype.set=function(t,r){var n=this.__data__,e=W(n,t);return e<0?n.push([t,r]):n[e][1]=r,this},R.prototype.clear=function(){this.__data__={hash:new I,map:new(P||M),string:new I}},R.prototype.delete=function(t){return U(this,t).delete(t)},R.prototype.get=function(t){return U(this,t).get(t)},R.prototype.has=function(t){return U(this,t).has(t)},R.prototype.set=function(t,r){return U(this,t).set(t,r),this},T.prototype.add=T.prototype.push=function(t){return this.__data__.set(t,r),this},T.prototype.has=function(t){return this.__data__.has(t)};var G=(v=function(t){var r=l(t,D);return r.length&&r[0]===t[0]?function(t,r,n){for(var e=n?s:f,o=t[0].length,u=t.length,c=u,a=Array(u),i=1/0,h=[];c--;){var y=t[c];c&&r&&(y=l(y,p(r))),i=$(y.length,i),a[c]=!n&&(r||o>=120&&y.length>=120)?new T(c&&y):void 0}y=t[0];var v=-1,d=a[0];t:for(;++v<o&&h.length<i;){var b=y[v],g=r?r(b):b;if(b=n||0!==b?b:0,!(d?_(d,g):e(h,g,n))){for(c=u;--c;){var j=a[c];if(!(j?_(j,g):e(t[c],g,n)))continue t}d&&d.push(g),h.push(b)}}return h}(r):[]},d=k(void 0===d?v.length-1:d,0),function(){for(var t=arguments,r=-1,n=k(t.length-d,0),e=Array(n);++r<n;)e[r]=t[d+r];r=-1;for(var o=Array(d+1);++r<d;)o[r]=t[r];return o[d]=e,function(t,r,n){switch(n.length){case 0:return t.call(r);case 1:return t.call(r,n[0]);case 2:return t.call(r,n[0],n[1]);case 3:return t.call(r,n[0],n[1],n[2])}return t.apply(r,n)}(v,this,o)});function L(t,r,n){if(r!=r)return function(t,r,n,e){for(var o=t.length,u=n+(e?1:-1);e?u--:++u<o;)if(r(t[u],u,t))return u;return-1}(t,N,n);for(var e=n-1,o=t.length;++e<o;)if(t[e]===r)return e;return-1}function V(t,r,n,e){for(var o=n-1,u=t.length;++o<u;)if(e(t[o],r))return o;return-1}function N(t){return t!=t}var q=Array.prototype.splice,J=Math.max;function K(t,r,n,e){var o,u=e?V:L,c=-1,a=r.length,i=t;for(t===r&&(r=function(t,r){var n=-1,e=t.length;r||(r=Array(e));for(;++n<e;)r[n]=t[n];return r}(r)),n&&(i=function(t,r){for(var n=-1,e=t?t.length:0,o=Array(e);++n<e;)o[n]=r(t[n],n,t);return o}(t,(o=n,function(t){return o(t)})));++c<a;)for(var f=0,s=r[c],l=n?n(s):s;(f=u(i,l,f,e))>-1;)i!==t&&q.call(i,f,1),q.call(t,f,1);return t}var Q=function(t,r){return r=J(void 0===r?t.length-1:r,0),function(){for(var n=arguments,e=-1,o=J(n.length-r,0),u=Array(o);++e<o;)u[e]=n[r+e];e=-1;for(var c=Array(r+1);++e<r;)c[e]=n[e];return c[r]=u,function(t,r,n){switch(n.length){case 0:return t.call(r);case 1:return t.call(r,n[0]);case 2:return t.call(r,n[0],n[1]);case 3:return t.call(r,n[0],n[1],n[2])}return t.apply(r,n)}(t,this,c)}}(function(t,r){return t&&t.length&&r&&r.length?K(t,r):t}),X="[object Object]";var Y=Function.prototype,Z=Object.prototype,tt=Y.toString,rt=Z.hasOwnProperty,nt=tt.call(Object),et=Z.toString,ot=function(t,r){return function(n){return t(r(n))}}(Object.getPrototypeOf,Object);var ut,ct=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||et.call(t)!=X||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(t))return!1;var r=ot(t);if(null===r)return!0;var n=rt.call(r,"constructor")&&r.constructor;return"function"==typeof n&&n instanceof n&&tt.call(n)==nt},at=(function(r,n){var e=200,o="__lodash_hash_undefined__",u=9007199254740991,c="[object Arguments]",a="[object Boolean]",i="[object Date]",f="[object Function]",s="[object GeneratorFunction]",l="[object Map]",h="[object Number]",p="[object Object]",_="[object RegExp]",y="[object Set]",v="[object String]",d="[object Symbol]",b="[object ArrayBuffer]",g="[object DataView]",j="[object Float32Array]",w="[object Float64Array]",O="[object Int8Array]",m="[object Int16Array]",A="[object Int32Array]",x="[object Uint8Array]",S="[object Uint8ClampedArray]",E="[object Uint16Array]",k="[object Uint32Array]",$=/\w*$/,P=/^\[object .+?Constructor\]$/,F=/^(?:0|[1-9]\d*)$/,I={};I[c]=I["[object Array]"]=I[b]=I[g]=I[a]=I[i]=I[j]=I[w]=I[O]=I[m]=I[A]=I[l]=I[h]=I[p]=I[_]=I[y]=I[v]=I[d]=I[x]=I[S]=I[E]=I[k]=!0,I["[object Error]"]=I[f]=I["[object WeakMap]"]=!1;var M="object"==typeof t&&t&&t.Object===Object&&t,R="object"==typeof self&&self&&self.Object===Object&&self,T=M||R||Function("return this")(),W=n&&!n.nodeType&&n,B=W&&r&&!r.nodeType&&r,D=B&&B.exports===W;function U(t,r){return t.set(r[0],r[1]),t}function C(t,r){return t.add(r),t}function H(t,r,n,e){var o=-1,u=t?t.length:0;for(e&&u&&(n=t[++o]);++o<u;)n=r(n,t[o],o,t);return n}function z(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function G(t){var r=-1,n=Array(t.size);return t.forEach(function(t,e){n[++r]=[e,t]}),n}function L(t,r){return function(n){return t(r(n))}}function V(t){var r=-1,n=Array(t.size);return t.forEach(function(t){n[++r]=t}),n}var N,q=Array.prototype,J=Function.prototype,K=Object.prototype,Q=T["__core-js_shared__"],X=(N=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+N:"",Y=J.toString,Z=K.hasOwnProperty,tt=K.toString,rt=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),nt=D?T.Buffer:void 0,et=T.Symbol,ot=T.Uint8Array,ut=L(Object.getPrototypeOf,Object),ct=Object.create,at=K.propertyIsEnumerable,it=q.splice,ft=Object.getOwnPropertySymbols,st=nt?nt.isBuffer:void 0,lt=L(Object.keys,Object),ht=Bt(T,"DataView"),pt=Bt(T,"Map"),_t=Bt(T,"Promise"),yt=Bt(T,"Set"),vt=Bt(T,"WeakMap"),dt=Bt(Object,"create"),bt=zt(ht),gt=zt(pt),jt=zt(_t),wt=zt(yt),Ot=zt(vt),mt=et?et.prototype:void 0,At=mt?mt.valueOf:void 0;function xt(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function St(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function Et(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function kt(t){this.__data__=new St(t)}function $t(t,r){var n=Lt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Vt(t)}(t)&&Z.call(t,"callee")&&(!at.call(t,"callee")||tt.call(t)==c)}(t)?function(t,r){for(var n=-1,e=Array(t);++n<t;)e[n]=r(n);return e}(t.length,String):[],e=n.length,o=!!e;for(var u in t)!r&&!Z.call(t,u)||o&&("length"==u||Ct(u,e))||n.push(u);return n}function Pt(t,r,n){var e=t[r];Z.call(t,r)&&Gt(e,n)&&(void 0!==n||r in t)||(t[r]=n)}function Ft(t,r){for(var n=t.length;n--;)if(Gt(t[n][0],r))return n;return-1}function It(t,r,n,e,o,u,P){var F;if(e&&(F=u?e(t,o,u,P):e(t)),void 0!==F)return F;if(!Jt(t))return t;var M=Lt(t);if(M){if(F=function(t){var r=t.length,n=t.constructor(r);r&&"string"==typeof t[0]&&Z.call(t,"index")&&(n.index=t.index,n.input=t.input);return n}(t),!r)return function(t,r){var n=-1,e=t.length;r||(r=Array(e));for(;++n<e;)r[n]=t[n];return r}(t,F)}else{var R=Ut(t),T=R==f||R==s;if(Nt(t))return function(t,r){if(r)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}(t,r);if(R==p||R==c||T&&!u){if(z(t))return u?t:{};if(F=function(t){return"function"!=typeof t.constructor||Ht(t)?{}:(r=ut(t),Jt(r)?ct(r):{});var r}(T?{}:t),!r)return function(t,r){return Tt(t,Dt(t),r)}(t,function(t,r){return t&&Tt(r,Kt(r),t)}(F,t))}else{if(!I[R])return u?t:{};F=function(t,r,n,e){var o=t.constructor;switch(r){case b:return Rt(t);case a:case i:return new o(+t);case g:return function(t,r){var n=r?Rt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}(t,e);case j:case w:case O:case m:case A:case x:case S:case E:case k:return function(t,r){var n=r?Rt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}(t,e);case l:return function(t,r,n){return H(r?n(G(t),!0):G(t),U,new t.constructor)}(t,e,n);case h:case v:return new o(t);case _:return(f=new(c=t).constructor(c.source,$.exec(c))).lastIndex=c.lastIndex,f;case y:return function(t,r,n){return H(r?n(V(t),!0):V(t),C,new t.constructor)}(t,e,n);case d:return u=t,At?Object(At.call(u)):{}}var u;var c,f}(t,R,It,r)}}P||(P=new kt);var W=P.get(t);if(W)return W;if(P.set(t,F),!M)var B=n?function(t){return function(t,r,n){var e=r(t);return Lt(t)?e:function(t,r){for(var n=-1,e=r.length,o=t.length;++n<e;)t[o+n]=r[n];return t}(e,n(t))}(t,Kt,Dt)}(t):Kt(t);return function(t,r){for(var n=-1,e=t?t.length:0;++n<e&&!1!==r(t[n],n,t););}(B||t,function(o,u){B&&(o=t[u=o]),Pt(F,u,It(o,r,n,e,u,t,P))}),F}function Mt(t){return!(!Jt(t)||(r=t,X&&X in r))&&(qt(t)||z(t)?rt:P).test(zt(t));var r}function Rt(t){var r=new t.constructor(t.byteLength);return new ot(r).set(new ot(t)),r}function Tt(t,r,n,e){n||(n={});for(var o=-1,u=r.length;++o<u;){var c=r[o],a=e?e(n[c],t[c],c,n,t):void 0;Pt(n,c,void 0===a?t[c]:a)}return n}function Wt(t,r){var n,e,o=t.__data__;return("string"==(e=typeof(n=r))||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==n:null===n)?o["string"==typeof r?"string":"hash"]:o.map}function Bt(t,r){var n=function(t,r){return null==t?void 0:t[r]}(t,r);return Mt(n)?n:void 0}xt.prototype.clear=function(){this.__data__=dt?dt(null):{}},xt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},xt.prototype.get=function(t){var r=this.__data__;if(dt){var n=r[t];return n===o?void 0:n}return Z.call(r,t)?r[t]:void 0},xt.prototype.has=function(t){var r=this.__data__;return dt?void 0!==r[t]:Z.call(r,t)},xt.prototype.set=function(t,r){return this.__data__[t]=dt&&void 0===r?o:r,this},St.prototype.clear=function(){this.__data__=[]},St.prototype.delete=function(t){var r=this.__data__,n=Ft(r,t);return!(n<0||(n==r.length-1?r.pop():it.call(r,n,1),0))},St.prototype.get=function(t){var r=this.__data__,n=Ft(r,t);return n<0?void 0:r[n][1]},St.prototype.has=function(t){return Ft(this.__data__,t)>-1},St.prototype.set=function(t,r){var n=this.__data__,e=Ft(n,t);return e<0?n.push([t,r]):n[e][1]=r,this},Et.prototype.clear=function(){this.__data__={hash:new xt,map:new(pt||St),string:new xt}},Et.prototype.delete=function(t){return Wt(this,t).delete(t)},Et.prototype.get=function(t){return Wt(this,t).get(t)},Et.prototype.has=function(t){return Wt(this,t).has(t)},Et.prototype.set=function(t,r){return Wt(this,t).set(t,r),this},kt.prototype.clear=function(){this.__data__=new St},kt.prototype.delete=function(t){return this.__data__.delete(t)},kt.prototype.get=function(t){return this.__data__.get(t)},kt.prototype.has=function(t){return this.__data__.has(t)},kt.prototype.set=function(t,r){var n=this.__data__;if(n instanceof St){var o=n.__data__;if(!pt||o.length<e-1)return o.push([t,r]),this;n=this.__data__=new Et(o)}return n.set(t,r),this};var Dt=ft?L(ft,Object):function(){return[]},Ut=function(t){return tt.call(t)};function Ct(t,r){return!!(r=null==r?u:r)&&("number"==typeof t||F.test(t))&&t>-1&&t%1==0&&t<r}function Ht(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||K)}function zt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Gt(t,r){return t===r||t!=t&&r!=r}(ht&&Ut(new ht(new ArrayBuffer(1)))!=g||pt&&Ut(new pt)!=l||_t&&"[object Promise]"!=Ut(_t.resolve())||yt&&Ut(new yt)!=y||vt&&"[object WeakMap]"!=Ut(new vt))&&(Ut=function(t){var r=tt.call(t),n=r==p?t.constructor:void 0,e=n?zt(n):void 0;if(e)switch(e){case bt:return g;case gt:return l;case jt:return"[object Promise]";case wt:return y;case Ot:return"[object WeakMap]"}return r});var Lt=Array.isArray;function Vt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=u}(t.length)&&!qt(t)}var Nt=st||function(){return!1};function qt(t){var r=Jt(t)?tt.call(t):"";return r==f||r==s}function Jt(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function Kt(t){return Vt(t)?$t(t):function(t){if(!Ht(t))return lt(t);var r=[];for(var n in Object(t))Z.call(t,n)&&"constructor"!=n&&r.push(n);return r}(t)}r.exports=function(t){return It(t,!0,!0)}}(ut={exports:{}},ut.exports),ut.exports);return function(t,r){function n(t){return null!=t}if(!n(t))throw new Error("[THROW_ID_01] missing input object");if(!ct(t))throw new Error("[THROW_ID_02] the first input object must be a true object");if(n(r)&&!ct(r))throw new Error("[THROW_ID_03] the second override object must be a true object");var e,o=at(t),u=at(r),c=Object.keys(o),a=[],i=!1;n(u)&&0!==Object.keys(u).length&&(i=!0),i&&(e=G(Object.keys(u),Object.keys(o))).forEach(function(t){return Q(c,t)});var f=function(t){for(var r=[],n=0;n<1<<t;n++){for(var e=[],o=0;o<t;o++)e.push(n&1<<o?1:0);r.push(e)}return r}(Object.keys(c).length),s={};return f.forEach(function(t,r){s={},c.forEach(function(t,n){s[t]=1===f[r][n]?1:0}),a.push(s)}),i&&a.forEach(function(t){return e.forEach(function(r){t[r]=u[r]})}),a}});
