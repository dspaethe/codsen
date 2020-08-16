/**
 * object-all-values-equal-to
 * Does the AST/nested-plain-object/array/whatever contain only one kind of value?
 * Version: 1.8.20
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/object-all-values-equal-to
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).objectAllValuesEqualTo=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(r){e(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var o,i,u=Function.prototype,a=Object.prototype,c=u.toString,f=a.hasOwnProperty,s=c.call(Object),l=a.toString,p=(o=Object.getPrototypeOf,i=Object,function(t){return o(i(t))});var h=function(e){if(!function(e){return!!e&&"object"==t(e)}(e)||"[object Object]"!=l.call(e)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(e))return!1;var r=p(e);if(null===r)return!0;var n=f.call(r,"constructor")&&r.constructor;return"function"==typeof n&&n instanceof n&&c.call(n)==s},b="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var y=function(t,e,r){return t(r={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&r.path)}},r.exports),r.exports}((function(e,r){var n="[object Arguments]",o="[object Array]",i="[object Boolean]",u="[object Map]",a="[object Object]",c="[object Set]",f="[object DataView]",s=/^\[object .+?Constructor\]$/,l=/^(?:0|[1-9]\d*)$/,p={};p["[object Float32Array]"]=p["[object Float64Array]"]=p["[object Int8Array]"]=p["[object Int16Array]"]=p["[object Int32Array]"]=p["[object Uint8Array]"]=p["[object Uint8ClampedArray]"]=p["[object Uint16Array]"]=p["[object Uint32Array]"]=!0,p[n]=p["[object Array]"]=p["[object ArrayBuffer]"]=p["[object Boolean]"]=p["[object DataView]"]=p["[object Date]"]=p["[object Error]"]=p["[object Function]"]=p[u]=p["[object Number]"]=p[a]=p["[object RegExp]"]=p[c]=p["[object String]"]=p["[object WeakMap]"]=!1;var h="object"==t(b)&&b&&b.Object===Object&&b,y="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,_=h||y||Function("return this")(),d=r&&!r.nodeType&&r,v=d&&e&&!e.nodeType&&e,j=v&&v.exports===d,g=j&&h.process,O=function(){try{return g&&g.binding&&g.binding("util")}catch(t){}}(),w=O&&O.isTypedArray;function m(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}function A(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function z(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var P,S=Array.prototype,E=Function.prototype,T=Object.prototype,k=_["__core-js_shared__"],D=E.toString,x=T.hasOwnProperty,F=(P=/[^.]+$/.exec(k&&k.keys&&k.keys.IE_PROTO||""))?"Symbol(src)_1."+P:"",I=T.toString,M=RegExp("^"+D.call(x).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),q=j?_.Buffer:void 0,B=_.Symbol,R=_.Uint8Array,W=T.propertyIsEnumerable,$=S.splice,N=B?B.toStringTag:void 0,U=Object.getOwnPropertySymbols,L=q?q.isBuffer:void 0,C=function(t,e){return function(r){return t(e(r))}}(Object.keys,Object),V=jt(_,"DataView"),H=jt(_,"Map"),G=jt(_,"Promise"),J=jt(_,"Set"),K=jt(_,"WeakMap"),Q=jt(Object,"create"),X=mt(V),Y=mt(H),Z=mt(G),tt=mt(J),et=mt(K),rt=B?B.prototype:void 0,nt=rt?rt.valueOf:void 0;function ot(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function it(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ut(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function at(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new ut;++e<r;)this.add(t[e])}function ct(t){var e=this.__data__=new it(t);this.size=e.size}function ft(t,e){var r=Pt(t),n=!r&&zt(t),o=!r&&!n&&St(t),i=!r&&!n&&!o&&xt(t),u=r||n||o||i,a=u?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],c=a.length;for(var f in t)!e&&!x.call(t,f)||u&&("length"==f||o&&("offset"==f||"parent"==f)||i&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||wt(f,c))||a.push(f);return a}function st(t,e){for(var r=t.length;r--;)if(At(t[r][0],e))return r;return-1}function lt(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":N&&N in Object(t)?function(t){var e=x.call(t,N),r=t[N];try{t[N]=void 0;var n=!0}catch(t){}var o=I.call(t);n&&(e?t[N]=r:delete t[N]);return o}(t):function(t){return I.call(t)}(t)}function pt(t){return Dt(t)&&lt(t)==n}function ht(t,e,r,s,l){return t===e||(null==t||null==e||!Dt(t)&&!Dt(e)?t!=t&&e!=e:function(t,e,r,s,l,p){var h=Pt(t),b=Pt(e),y=h?o:Ot(t),_=b?o:Ot(e),d=(y=y==n?a:y)==a,v=(_=_==n?a:_)==a,j=y==_;if(j&&St(t)){if(!St(e))return!1;h=!0,d=!1}if(j&&!d)return p||(p=new ct),h||xt(t)?_t(t,e,r,s,l,p):function(t,e,r,n,o,a,s){switch(r){case f:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!a(new R(t),new R(e)));case i:case"[object Date]":case"[object Number]":return At(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case u:var l=A;case c:var p=1&n;if(l||(l=z),t.size!=e.size&&!p)return!1;var h=s.get(t);if(h)return h==e;n|=2,s.set(t,e);var b=_t(l(t),l(e),n,o,a,s);return s.delete(t),b;case"[object Symbol]":if(nt)return nt.call(t)==nt.call(e)}return!1}(t,e,y,r,s,l,p);if(!(1&r)){var g=d&&x.call(t,"__wrapped__"),O=v&&x.call(e,"__wrapped__");if(g||O){var w=g?t.value():t,m=O?e.value():e;return p||(p=new ct),l(w,m,r,s,p)}}if(!j)return!1;return p||(p=new ct),function(t,e,r,n,o,i){var u=1&r,a=dt(t),c=a.length,f=dt(e).length;if(c!=f&&!u)return!1;var s=c;for(;s--;){var l=a[s];if(!(u?l in e:x.call(e,l)))return!1}var p=i.get(t);if(p&&i.get(e))return p==e;var h=!0;i.set(t,e),i.set(e,t);var b=u;for(;++s<c;){var y=t[l=a[s]],_=e[l];if(n)var d=u?n(_,y,l,e,t,i):n(y,_,l,t,e,i);if(!(void 0===d?y===_||o(y,_,r,n,i):d)){h=!1;break}b||(b="constructor"==l)}if(h&&!b){var v=t.constructor,j=e.constructor;v==j||!("constructor"in t)||!("constructor"in e)||"function"==typeof v&&v instanceof v&&"function"==typeof j&&j instanceof j||(h=!1)}return i.delete(t),i.delete(e),h}(t,e,r,s,l,p)}(t,e,r,s,ht,l))}function bt(t){return!(!kt(t)||function(t){return!!F&&F in t}(t))&&(Et(t)?M:s).test(mt(t))}function yt(t){if(r=(e=t)&&e.constructor,n="function"==typeof r&&r.prototype||T,e!==n)return C(t);var e,r,n,o=[];for(var i in Object(t))x.call(t,i)&&"constructor"!=i&&o.push(i);return o}function _t(t,e,r,n,o,i){var u=1&r,a=t.length,c=e.length;if(a!=c&&!(u&&c>a))return!1;var f=i.get(t);if(f&&i.get(e))return f==e;var s=-1,l=!0,p=2&r?new at:void 0;for(i.set(t,e),i.set(e,t);++s<a;){var h=t[s],b=e[s];if(n)var y=u?n(b,h,s,e,t,i):n(h,b,s,t,e,i);if(void 0!==y){if(y)continue;l=!1;break}if(p){if(!m(e,(function(t,e){if(u=e,!p.has(u)&&(h===t||o(h,t,r,n,i)))return p.push(e);var u}))){l=!1;break}}else if(h!==b&&!o(h,b,r,n,i)){l=!1;break}}return i.delete(t),i.delete(e),l}function dt(t){return function(t,e,r){var n=e(t);return Pt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Ft,gt)}function vt(e,r){var n,o,i=e.__data__;return("string"==(o=t(n=r))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==n:null===n)?i["string"==typeof r?"string":"hash"]:i.map}function jt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return bt(r)?r:void 0}ot.prototype.clear=function(){this.__data__=Q?Q(null):{},this.size=0},ot.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ot.prototype.get=function(t){var e=this.__data__;if(Q){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return x.call(e,t)?e[t]:void 0},ot.prototype.has=function(t){var e=this.__data__;return Q?void 0!==e[t]:x.call(e,t)},ot.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=Q&&void 0===e?"__lodash_hash_undefined__":e,this},it.prototype.clear=function(){this.__data__=[],this.size=0},it.prototype.delete=function(t){var e=this.__data__,r=st(e,t);return!(r<0)&&(r==e.length-1?e.pop():$.call(e,r,1),--this.size,!0)},it.prototype.get=function(t){var e=this.__data__,r=st(e,t);return r<0?void 0:e[r][1]},it.prototype.has=function(t){return st(this.__data__,t)>-1},it.prototype.set=function(t,e){var r=this.__data__,n=st(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this},ut.prototype.clear=function(){this.size=0,this.__data__={hash:new ot,map:new(H||it),string:new ot}},ut.prototype.delete=function(t){var e=vt(this,t).delete(t);return this.size-=e?1:0,e},ut.prototype.get=function(t){return vt(this,t).get(t)},ut.prototype.has=function(t){return vt(this,t).has(t)},ut.prototype.set=function(t,e){var r=vt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this},at.prototype.add=at.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},at.prototype.has=function(t){return this.__data__.has(t)},ct.prototype.clear=function(){this.__data__=new it,this.size=0},ct.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},ct.prototype.get=function(t){return this.__data__.get(t)},ct.prototype.has=function(t){return this.__data__.has(t)},ct.prototype.set=function(t,e){var r=this.__data__;if(r instanceof it){var n=r.__data__;if(!H||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new ut(n)}return r.set(t,e),this.size=r.size,this};var gt=U?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,i=[];++r<n;){var u=t[r];e(u,r,t)&&(i[o++]=u)}return i}(U(t),(function(e){return W.call(t,e)})))}:function(){return[]},Ot=lt;function wt(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||l.test(t))&&t>-1&&t%1==0&&t<e}function mt(t){if(null!=t){try{return D.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function At(t,e){return t===e||t!=t&&e!=e}(V&&Ot(new V(new ArrayBuffer(1)))!=f||H&&Ot(new H)!=u||G&&"[object Promise]"!=Ot(G.resolve())||J&&Ot(new J)!=c||K&&"[object WeakMap]"!=Ot(new K))&&(Ot=function(t){var e=lt(t),r=e==a?t.constructor:void 0,n=r?mt(r):"";if(n)switch(n){case X:return f;case Y:return u;case Z:return"[object Promise]";case tt:return c;case et:return"[object WeakMap]"}return e});var zt=pt(function(){return arguments}())?pt:function(t){return Dt(t)&&x.call(t,"callee")&&!W.call(t,"callee")},Pt=Array.isArray;var St=L||function(){return!1};function Et(t){if(!kt(t))return!1;var e=lt(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}function Tt(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}function kt(e){var r=t(e);return null!=e&&("object"==r||"function"==r)}function Dt(e){return null!=e&&"object"==t(e)}var xt=w?function(t){return function(e){return t(e)}}(w):function(t){return Dt(t)&&Tt(t.length)&&!!p[lt(t)]};function Ft(t){return null!=(e=t)&&Tt(e.length)&&!Et(e)?ft(t):yt(t);var e}e.exports=function(t,e){return ht(t,e)}})),_=Array.isArray;return function(e,r,o){if(void 0===e)throw new Error("object-all-values-equal-to: [THROW_ID_01] The first input is undefined! Please provide the first argument.");if(void 0===r)throw new Error("object-all-values-equal-to: [THROW_ID_02] The second input is undefined! Please provide the second argument.");if(null!=o&&!h(o))throw new Error("object-all-values-equal-to: [THROW_ID_03] The third argument, options object, was given not as a plain object but as a ".concat(t(o),", equal to:\n").concat(JSON.stringify(o,null,4)));return function t(e,r,n){if(_(e)){if(0===e.length)return!0;if(n.arraysMustNotContainPlaceholders&&e.length>0&&e.some((function(t){return y(t,r)})))return!1;for(var o=e.length;o--;)if(!t(e[o],r,n))return!1;return!0}if(h(e)){var i=Object.keys(e);if(0===i.length)return!0;for(var u=i.length;u--;)if(!t(e[i[u]],r,n))return!1;return!0}return y(e,r)}(e,r,n(n({},{arraysMustNotContainPlaceholders:!0}),o))}}));
