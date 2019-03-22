/**
 * ranges-merge
 * Merge and sort arrays which mean string slice ranges
 * Version: 4.1.5
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ranges-merge
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).rangesMerge=e()}(this,function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1},r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t,e){return t(e={exports:{}},e.exports),e.exports}var o=n(function(t,e){(e=t.exports=function(t){return t+e.suffix(+t)}).suffix=function(t){return t%=100,1===Math.floor(t/10)?"th":t%10==1?"st":t%10==2?"nd":t%10==3?"rd":"th"}}),i=(o.suffix,n(function(t,e){var n,o,i,a,c,s,u,f,l,p,y,h,g,d,b,m,v,_,w,j;t.exports=(n="function"==typeof Promise,o="object"==typeof self?self:r,i="undefined"!=typeof Symbol,a="undefined"!=typeof Map,c="undefined"!=typeof Set,s="undefined"!=typeof WeakMap,u="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,l=i&&void 0!==Symbol.iterator,p=i&&void 0!==Symbol.toStringTag,y=c&&"function"==typeof Set.prototype.entries,h=a&&"function"==typeof Map.prototype.entries,g=y&&Object.getPrototypeOf((new Set).entries()),d=h&&Object.getPrototypeOf((new Map).entries()),b=l&&"function"==typeof Array.prototype[Symbol.iterator],m=b&&Object.getPrototypeOf([][Symbol.iterator]()),v=l&&"function"==typeof String.prototype[Symbol.iterator],_=v&&Object.getPrototypeOf(""[Symbol.iterator]()),w=8,j=-1,function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===o)return"global";if(Array.isArray(t)&&(!1===p||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var r=p&&t[Symbol.toStringTag];if("string"==typeof r)return r;var i=Object.getPrototypeOf(t);return i===RegExp.prototype?"RegExp":i===Date.prototype?"Date":n&&i===Promise.prototype?"Promise":c&&i===Set.prototype?"Set":a&&i===Map.prototype?"Map":u&&i===WeakSet.prototype?"WeakSet":s&&i===WeakMap.prototype?"WeakMap":f&&i===DataView.prototype?"DataView":a&&i===d?"Map Iterator":c&&i===g?"Set Iterator":b&&i===m?"Array Iterator":v&&i===_?"String Iterator":null===i?"Object":Object.prototype.toString.call(t).slice(w,j)})}));function a(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,s,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function c(t,e,r,n){for(var o=r-1,i=t.length;++o<i;)if(n(t[o],e))return o;return-1}function s(t){return t!=t}var u=Array.prototype.splice;function f(t,e,r,n){var o,i=n?c:a,s=-1,f=e.length,l=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(l=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(o=r,function(t){return o(t)})));++s<f;)for(var p=0,y=e[s],h=r?r(y):y;(p=i(l,h,p,n))>-1;)l!==t&&u.call(l,p,1),u.call(t,p,1);return t}var l=function(t,e){return t&&t.length&&e&&e.length?f(t,e):t},p=n(function(t,e){var n=200,o="__lodash_hash_undefined__",i=9007199254740991,a="[object Arguments]",c="[object Boolean]",s="[object Date]",u="[object Function]",f="[object GeneratorFunction]",l="[object Map]",p="[object Number]",y="[object Object]",h="[object RegExp]",g="[object Set]",d="[object String]",b="[object Symbol]",m="[object ArrayBuffer]",v="[object DataView]",_="[object Float32Array]",w="[object Float64Array]",j="[object Int8Array]",O="[object Int16Array]",$="[object Int32Array]",T="[object Uint8Array]",S="[object Uint8ClampedArray]",A="[object Uint16Array]",E="[object Uint32Array]",k=/\w*$/,I=/^\[object .+?Constructor\]$/,N=/^(?:0|[1-9]\d*)$/,x={};x[a]=x["[object Array]"]=x[m]=x[v]=x[c]=x[s]=x[_]=x[w]=x[j]=x[O]=x[$]=x[l]=x[p]=x[y]=x[h]=x[g]=x[d]=x[b]=x[T]=x[S]=x[A]=x[E]=!0,x["[object Error]"]=x[u]=x["[object WeakMap]"]=!1;var M="object"==typeof r&&r&&r.Object===Object&&r,P="object"==typeof self&&self&&self.Object===Object&&self,F=M||P||Function("return this")(),R=e&&!e.nodeType&&e,L=R&&t&&!t.nodeType&&t,W=L&&L.exports===R;function D(t,e){return t.set(e[0],e[1]),t}function C(t,e){return t.add(e),t}function H(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function K(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function J(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function V(t,e){return function(r){return t(e(r))}}function B(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}var Z,q=Array.prototype,U=Function.prototype,z=Object.prototype,G=F["__core-js_shared__"],Q=(Z=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+Z:"",X=U.toString,Y=z.hasOwnProperty,tt=z.toString,et=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=W?F.Buffer:void 0,nt=F.Symbol,ot=F.Uint8Array,it=V(Object.getPrototypeOf,Object),at=Object.create,ct=z.propertyIsEnumerable,st=q.splice,ut=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,lt=V(Object.keys,Object),pt=Lt(F,"DataView"),yt=Lt(F,"Map"),ht=Lt(F,"Promise"),gt=Lt(F,"Set"),dt=Lt(F,"WeakMap"),bt=Lt(Object,"create"),mt=Kt(pt),vt=Kt(yt),_t=Kt(ht),wt=Kt(gt),jt=Kt(dt),Ot=nt?nt.prototype:void 0,$t=Ot?Ot.valueOf:void 0;function Tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){this.__data__=new St(t)}function kt(t,e){var r=Vt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Bt(t)}(t)&&Y.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==a)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var i in t)!e&&!Y.call(t,i)||o&&("length"==i||Ct(i,n))||r.push(i);return r}function It(t,e,r){var n=t[e];Y.call(t,e)&&Jt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Nt(t,e){for(var r=t.length;r--;)if(Jt(t[r][0],e))return r;return-1}function xt(t,e,r,n,o,i,I){var N;if(n&&(N=i?n(t,o,i,I):n(t)),void 0!==N)return N;if(!Ut(t))return t;var M=Vt(t);if(M){if(N=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Y.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,N)}else{var P=Dt(t),F=P==u||P==f;if(Zt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(P==y||P==a||F&&!i){if(K(t))return i?t:{};if(N=function(t){return"function"!=typeof t.constructor||Ht(t)?{}:(e=it(t),Ut(e)?at(e):{});var e}(F?{}:t),!e)return function(t,e){return Ft(t,Wt(t),e)}(t,function(t,e){return t&&Ft(e,zt(e),t)}(N,t))}else{if(!x[P])return i?t:{};N=function(t,e,r,n){var o=t.constructor;switch(e){case m:return Pt(t);case c:case s:return new o(+t);case v:return function(t,e){var r=e?Pt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case _:case w:case j:case O:case $:case T:case S:case A:case E:return function(t,e){var r=e?Pt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return H(e?r(J(t),!0):J(t),D,new t.constructor)}(t,n,r);case p:case d:return new o(t);case h:return(u=new(a=t).constructor(a.source,k.exec(a))).lastIndex=a.lastIndex,u;case g:return function(t,e,r){return H(e?r(B(t),!0):B(t),C,new t.constructor)}(t,n,r);case b:return i=t,$t?Object($t.call(i)):{}}var i;var a,u}(t,P,xt,e)}}I||(I=new Et);var R=I.get(t);if(R)return R;if(I.set(t,N),!M)var L=r?function(t){return function(t,e,r){var n=e(t);return Vt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,zt,Wt)}(t):zt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(L||t,function(o,i){L&&(o=t[i=o]),It(N,i,xt(o,e,r,n,i,t,I))}),N}function Mt(t){return!(!Ut(t)||(e=t,Q&&Q in e))&&(qt(t)||K(t)?et:I).test(Kt(t));var e}function Pt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Ft(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],c=n?n(r[a],t[a],a,r,t):void 0;It(r,a,void 0===c?t[a]:c)}return r}function Rt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Lt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Mt(r)?r:void 0}Tt.prototype.clear=function(){this.__data__=bt?bt(null):{}},Tt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Tt.prototype.get=function(t){var e=this.__data__;if(bt){var r=e[t];return r===o?void 0:r}return Y.call(e,t)?e[t]:void 0},Tt.prototype.has=function(t){var e=this.__data__;return bt?void 0!==e[t]:Y.call(e,t)},Tt.prototype.set=function(t,e){return this.__data__[t]=bt&&void 0===e?o:e,this},St.prototype.clear=function(){this.__data__=[]},St.prototype.delete=function(t){var e=this.__data__,r=Nt(e,t);return!(r<0||(r==e.length-1?e.pop():st.call(e,r,1),0))},St.prototype.get=function(t){var e=this.__data__,r=Nt(e,t);return r<0?void 0:e[r][1]},St.prototype.has=function(t){return Nt(this.__data__,t)>-1},St.prototype.set=function(t,e){var r=this.__data__,n=Nt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},At.prototype.clear=function(){this.__data__={hash:new Tt,map:new(yt||St),string:new Tt}},At.prototype.delete=function(t){return Rt(this,t).delete(t)},At.prototype.get=function(t){return Rt(this,t).get(t)},At.prototype.has=function(t){return Rt(this,t).has(t)},At.prototype.set=function(t,e){return Rt(this,t).set(t,e),this},Et.prototype.clear=function(){this.__data__=new St},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,e){var r=this.__data__;if(r instanceof St){var o=r.__data__;if(!yt||o.length<n-1)return o.push([t,e]),this;r=this.__data__=new At(o)}return r.set(t,e),this};var Wt=ut?V(ut,Object):function(){return[]},Dt=function(t){return tt.call(t)};function Ct(t,e){return!!(e=null==e?i:e)&&("number"==typeof t||N.test(t))&&t>-1&&t%1==0&&t<e}function Ht(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||z)}function Kt(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Jt(t,e){return t===e||t!=t&&e!=e}(pt&&Dt(new pt(new ArrayBuffer(1)))!=v||yt&&Dt(new yt)!=l||ht&&"[object Promise]"!=Dt(ht.resolve())||gt&&Dt(new gt)!=g||dt&&"[object WeakMap]"!=Dt(new dt))&&(Dt=function(t){var e=tt.call(t),r=e==y?t.constructor:void 0,n=r?Kt(r):void 0;if(n)switch(n){case mt:return v;case vt:return l;case _t:return"[object Promise]";case wt:return g;case jt:return"[object WeakMap]"}return e});var Vt=Array.isArray;function Bt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}(t.length)&&!qt(t)}var Zt=ft||function(){return!1};function qt(t){var e=Ut(t)?tt.call(t):"";return e==u||e==f}function Ut(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function zt(t){return Bt(t)?kt(t):function(t){if(!Ht(t))return lt(t);var e=[];for(var r in Object(t))Y.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return xt(t,!0,!0)}}),y="[object Object]";var h,g,d=Function.prototype,b=Object.prototype,m=d.toString,v=b.hasOwnProperty,_=m.call(Object),w=b.toString,j=(h=Object.getPrototypeOf,g=Object,function(t){return h(g(t))});var O=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||w.call(t)!=y||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=j(t);if(null===e)return!0;var r=v.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&m.call(r)==_};const $=Array.isArray;function T(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function S(t,e){return function t(e,r,n){const o=p(e);let i,a,c,s,u;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,$(o))for(i=0,a=o.length;i<a;i++){const e=`${n.path}.${i}`;void 0!==o[i]?(n.parent=p(o),n.parentType="array",c=t(r(o[i],void 0,Object.assign({},n,{path:T(e)})),r,Object.assign({},n,{path:T(e)})),Number.isNaN(c)&&i<o.length?(o.splice(i,1),i-=1):o[i]=c):o.splice(i,1)}else if(O(o))for(i=0,a=(s=Object.keys(o)).length;i<a;i++){u=s[i];const e=`${n.path}.${u}`;0===n.depth&&null!=u&&(n.topmostKey=u),n.parent=p(o),n.parentType="object",c=t(r(u,o[u],Object.assign({},n,{path:T(e)})),r,Object.assign({},n,{path:T(e)})),Number.isNaN(c)?delete o[u]:o[u]=c}return o}(t,e,{})}var A="__lodash_hash_undefined__",E=9007199254740991,k="[object Function]",I="[object GeneratorFunction]",N=/^\[object .+?Constructor\]$/,x="object"==typeof r&&r&&r.Object===Object&&r,M="object"==typeof self&&self&&self.Object===Object&&self,P=x||M||Function("return this")();function F(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,W,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function R(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function L(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function W(t){return t!=t}function D(t){return function(e){return t(e)}}function C(t,e){return t.has(e)}var H,K=Array.prototype,J=Function.prototype,V=Object.prototype,B=P["__core-js_shared__"],Z=(H=/[^.]+$/.exec(B&&B.keys&&B.keys.IE_PROTO||""))?"Symbol(src)_1."+H:"",q=J.toString,U=V.hasOwnProperty,z=V.toString,G=RegExp("^"+q.call(U).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Q=K.splice,X=Math.max,Y=Math.min,tt=ft(P,"Map"),et=ft(Object,"create");function rt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function nt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function it(t){var e=-1,r=t?t.length:0;for(this.__data__=new ot;++e<r;)this.add(t[e])}function at(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function ct(t){return!(!pt(t)||(e=t,Z&&Z in e))&&(lt(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?G:N).test(function(t){if(null!=t){try{return q.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function st(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=E}(t.length)&&!lt(t)}(t)}(t)?t:[]}function ut(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function ft(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return ct(r)?r:void 0}function lt(t){var e=pt(t)?z.call(t):"";return e==k||e==I}function pt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}rt.prototype.clear=function(){this.__data__=et?et(null):{}},rt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},rt.prototype.get=function(t){var e=this.__data__;if(et){var r=e[t];return r===A?void 0:r}return U.call(e,t)?e[t]:void 0},rt.prototype.has=function(t){var e=this.__data__;return et?void 0!==e[t]:U.call(e,t)},rt.prototype.set=function(t,e){return this.__data__[t]=et&&void 0===e?A:e,this},nt.prototype.clear=function(){this.__data__=[]},nt.prototype.delete=function(t){var e=this.__data__,r=at(e,t);return!(r<0||(r==e.length-1?e.pop():Q.call(e,r,1),0))},nt.prototype.get=function(t){var e=this.__data__,r=at(e,t);return r<0?void 0:e[r][1]},nt.prototype.has=function(t){return at(this.__data__,t)>-1},nt.prototype.set=function(t,e){var r=this.__data__,n=at(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},ot.prototype.clear=function(){this.__data__={hash:new rt,map:new(tt||nt),string:new rt}},ot.prototype.delete=function(t){return ut(this,t).delete(t)},ot.prototype.get=function(t){return ut(this,t).get(t)},ot.prototype.has=function(t){return ut(this,t).has(t)},ot.prototype.set=function(t,e){return ut(this,t).set(t,e),this},it.prototype.add=it.prototype.push=function(t){return this.__data__.set(t,A),this},it.prototype.has=function(t){return this.__data__.has(t)};var yt=function(t,e){return e=X(void 0===e?t.length-1:e,0),function(){for(var r=arguments,n=-1,o=X(r.length-e,0),i=Array(o);++n<o;)i[n]=r[e+n];n=-1;for(var a=Array(e+1);++n<e;)a[n]=r[n];return a[e]=i,function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(t,this,a)}}(function(t){var e=L(t,st);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?R:F,o=t[0].length,i=t.length,a=i,c=Array(i),s=1/0,u=[];a--;){var f=t[a];a&&e&&(f=L(f,D(e))),s=Y(f.length,s),c[a]=!r&&(e||o>=120&&f.length>=120)?new it(a&&f):void 0}f=t[0];var l=-1,p=c[0];t:for(;++l<o&&u.length<s;){var y=f[l],h=e?e(y):y;if(y=r||0!==y?y:0,!(p?C(p,h):n(u,h,r))){for(a=i;--a;){var g=c[a];if(!(g?C(g,h):n(t[a],h,r)))continue t}p&&p.push(h),u.push(y)}}return u}(e):[]});function ht(t){return"string"==typeof t?t.length>0?[t]:[]:t}var gt=n(function(t){t.exports=function(){var t=Object.prototype.toString;function e(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function r(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var r in t)if(e(t,r))return!1;return!0}return!1}function n(e){return t.call(e)}var o=Array.isArray||function(e){return"[object Array]"===t.call(e)};function i(t){var e=parseInt(t);return e.toString()===t?e:t}function a(t){t=t||{};var a=function(t){return Object.keys(a).reduce(function(e,r){return"create"===r?e:("function"==typeof a[r]&&(e[r]=a[r].bind(a,t)),e)},{})};function c(r,n){return t.includeInheritedProps||"number"==typeof n&&Array.isArray(r)||e(r,n)}function s(t,e){if(c(t,e))return t[e]}function u(t,e,r,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return u(t,e.split(".").map(i),r,n);var o=e[0],a=s(t,o);return 1===e.length?(void 0!==a&&n||(t[o]=r),a):(void 0===a&&("number"==typeof e[1]?t[o]=[]:t[o]={}),u(t[o],e.slice(1),r,n))}return a.has=function(r,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!r;for(var a=0;a<n.length;a++){var c=i(n[a]);if(!("number"==typeof c&&o(r)&&c<r.length||(t.includeInheritedProps?c in Object(r):e(r,c))))return!1;r=r[c]}return!0},a.ensureExists=function(t,e,r){return u(t,e,r,!0)},a.set=function(t,e,r,n){return u(t,e,r,n)},a.insert=function(t,e,r,n){var i=a.get(t,e);n=~~n,o(i)||(i=[],a.set(t,e,i)),i.splice(n,0,r)},a.empty=function(t,e){var i,s;if(!r(e)&&null!=t&&(i=a.get(t,e))){if("string"==typeof i)return a.set(t,e,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===n(t)}(i))return a.set(t,e,!1);if("number"==typeof i)return a.set(t,e,0);if(o(i))i.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===n(t)}(i))return a.set(t,e,null);for(s in i)c(i,s)&&delete i[s]}}},a.push=function(t,e){var r=a.get(t,e);o(r)||(r=[],a.set(t,e,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},a.coalesce=function(t,e,r){for(var n,o=0,i=e.length;o<i;o++)if(void 0!==(n=a.get(t,e[o])))return n;return r},a.get=function(t,e,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return r;if("string"==typeof e)return a.get(t,e.split("."),r);var n=i(e[0]),o=s(t,n);return void 0===o?r:1===e.length?o:a.get(t[n],e.slice(1),r)},a.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(r(e))return t;if("string"==typeof e)return a.del(t,e.split("."));var n=i(e[0]);return c(t,n)?1!==e.length?a.del(t[n],e.slice(1)):(o(t)?t.splice(n,1):delete t[n],t):t},a}var c=a();return c.create=a,c.withInheritedProps=a({includeInheritedProps:!0}),c}()}),dt=function(t){var e=t%100;if(e>=10&&e<=20)return"th";var r=t%10;return 1===r?"st":2===r?"nd":3===r?"rd":"th"};function bt(t){if("number"!=typeof t)throw new TypeError("Expected Number, got "+typeof t+" "+t);return t+dt(t)}bt.indicator=dt;var mt=bt,vt=/[|\\{}()[\]^$+*?.]/g,_t=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(vt,"\\$&")};const wt=new Map;function jt(t,e){const r=Object.assign({caseSensitive:!1},e),n=t+JSON.stringify(r);if(wt.has(n))return wt.get(n);const o="!"===t[0];o&&(t=t.slice(1)),t=_t(t).replace(/\\\*/g,".*");const i=new RegExp(`^${t}$`,r.caseSensitive?"":"i");return i.negated=o,wt.set(n,i),i}var Ot=(t,e,r)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const n="!"===e[0][0];e=e.map(t=>jt(t,r));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};function $t(t,e,r){return function t(e,r,n,o=!0){const a=Object.prototype.hasOwnProperty;function c(t){return null!=t}function s(t){return"Object"===i(t)}function u(t,e){return e=ht(e),Array.from(t).filter(t=>!e.some(e=>Ot.isMatch(t,e,{caseSensitive:!0})))}const f=["any","anything","every","everything","all","whatever","whatevs"],p=Array.isArray;if(!c(e))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const y={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};let h;if(h=c(n)&&s(n)?Object.assign({},y,n):Object.assign({},y),c(h.ignoreKeys)&&h.ignoreKeys?h.ignoreKeys=ht(h.ignoreKeys):h.ignoreKeys=[],c(h.ignorePaths)&&h.ignorePaths?h.ignorePaths=ht(h.ignorePaths):h.ignorePaths=[],c(h.acceptArraysIgnore)&&h.acceptArraysIgnore?h.acceptArraysIgnore=ht(h.acceptArraysIgnore):h.acceptArraysIgnore=[],h.msg="string"==typeof h.msg?h.msg.trim():h.msg,":"===h.msg[h.msg.length-1]&&(h.msg=h.msg.slice(0,h.msg.length-1).trim()),h.schema&&(Object.keys(h.schema).forEach(t=>{if(s(h.schema[t])){const e={};S(h.schema[t],(r,n,o)=>{const i=void 0!==n?n:r;return p(i)||s(i)||(e[`${t}.${o.path}`]=i),i}),delete h.schema[t],h.schema=Object.assign(h.schema,e)}}),Object.keys(h.schema).forEach(t=>{p(h.schema[t])||(h.schema[t]=[h.schema[t]]),h.schema[t]=h.schema[t].map(String).map(t=>t.toLowerCase()).map(t=>t.trim())})),c(r)||(r={}),o&&t(h,y,{enforceStrictKeyset:!1},!1),h.enforceStrictKeyset)if(c(h.schema)&&Object.keys(h.schema).length>0){if(0!==u(l(Object.keys(e),Object.keys(r).concat(Object.keys(h.schema))),h.ignoreKeys).length){const t=l(Object.keys(e),Object.keys(r).concat(Object.keys(h.schema)));throw new TypeError(`${h.msg}: ${h.optsVarName}.enforceStrictKeyset is on and the following key${t.length>1?"s":""} ${t.length>1?"are":"is"} not covered by schema and/or reference objects: ${t.join(", ")}`)}}else{if(!(c(r)&&Object.keys(r).length>0))throw new TypeError(`${h.msg}: Both ${h.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==u(l(Object.keys(e),Object.keys(r)),h.ignoreKeys).length){const t=l(Object.keys(e),Object.keys(r));throw new TypeError(`${h.msg}: The input object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not covered by the reference object: ${t.join(", ")}`)}if(0!==u(l(Object.keys(r),Object.keys(e)),h.ignoreKeys).length){const t=l(Object.keys(r),Object.keys(e));throw new TypeError(`${h.msg}: The reference object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not present in the input object: ${t.join(", ")}`)}}const g=[];S(e,(t,n,o)=>{let c=n,u=t;if("array"===o.parentType&&(u=void 0,c=t),p(g)&&g.length&&g.some(t=>o.path.startsWith(t)))return c;if(u&&h.ignoreKeys.some(t=>Ot.isMatch(u,t)))return c;if(h.ignorePaths.some(t=>Ot.isMatch(o.path,t)))return c;const l=!(!s(c)&&!p(c)&&p(o.parent));let y=!1;s(h.schema)&&a.call(h.schema,gt.get(o.path))&&(y=!0);let d=!1;if(s(r)&&gt.has(r,gt.get(o.path))&&(d=!0),h.enforceStrictKeyset&&l&&!y&&!d)throw new TypeError(`${h.msg}: ${h.optsVarName}.${o.path} is neither covered by reference object (second input argument), nor ${h.optsVarName}.schema! To stop this error, turn off ${h.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${h.optsVarName}.schema).\n\nDebug info:\n\nobj = ${JSON.stringify(e,null,4)}\n\nref = ${JSON.stringify(r,null,4)}\n\ninnerObj = ${JSON.stringify(o,null,4)}\n\nopts = ${JSON.stringify(h,null,4)}\n\ncurrent = ${JSON.stringify(c,null,4)}\n\n`);if(y){const t=ht(h.schema[o.path]).map(String).map(t=>t.toLowerCase());if(gt.set(h.schema,o.path,t),yt(t,f).length)g.push(o.path);else if(!0!==c&&!1!==c&&!t.includes(i(c).toLowerCase())||(!0===c||!1===c)&&!t.includes(String(c))&&!t.includes("boolean")){if(!p(c)||!h.acceptArrays)throw new TypeError(`${h.msg}: ${h.optsVarName}.${o.path} was customised to ${"string"!==i(c)?'"':""}${JSON.stringify(c,null,0)}${"string"!==i(c)?'"':""} (type: ${i(c).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(t,null,0)})`);for(let e=0,r=c.length;e<r;e++)if(!t.includes(i(c[e]).toLowerCase()))throw new TypeError(`${h.msg}: ${h.optsVarName}.${o.path}.${e}, the ${mt(e+1)} element (equal to ${JSON.stringify(c[e],null,0)}) is of a type ${i(c[e]).toLowerCase()}, but only the following are allowed by the ${h.optsVarName}.schema: ${t.join(", ")}`)}}else if(d){const e=gt.get(r,o.path);if(h.acceptArrays&&p(c)&&!h.acceptArraysIgnore.includes(t)){if(!c.every(e=>i(e).toLowerCase()===i(r[t]).toLowerCase()))throw new TypeError(`${h.msg}: ${h.optsVarName}.${o.path} was customised to be array, but not all of its elements are ${i(r[t]).toLowerCase()}-type`)}else if(i(c)!==i(e))throw new TypeError(`${h.msg}: ${h.optsVarName}.${o.path} was customised to ${"string"===i(c).toLowerCase()?"":'"'}${JSON.stringify(c,null,0)}${"string"===i(c).toLowerCase()?"":'"'} which is not ${i(e).toLowerCase()} but ${i(c).toLowerCase()}`)}return c})}(t,e,r)}Ot.isMatch=((t,e,r)=>{const n=jt(e,r),o=n.test(t);return n.negated?!o:o});const Tt=Array.isArray;function St(t,r){if(!Tt(t))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(0===t.length)return t;const n={strictlyTwoElementsInRangeArrays:!1,progressFn:null},i=Object.assign({},n,r);let a,c;if($t(i,n,{msg:"ranges-sort: [THROW_ID_02*]",schema:{progressFn:["function","false","null"]}}),i.strictlyTwoElementsInRangeArrays&&!t.every((t,e)=>2===t.length||(a=e,c=t.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${o(a)} range (${JSON.stringify(t[a],null,4)}) has not two but ${c} elements!`);if(!t.every((t,r)=>!(!e(t[0],{includeZero:!0})||!e(t[1],{includeZero:!0}))||(a=r,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${o(a)} range (${JSON.stringify(t[a],null,4)}) does not consist of only natural numbers!`);const s=t.length*t.length;let u=0;return Array.from(t).sort((t,e)=>(i.progressFn&&(u++,i.progressFn(Math.floor(100*u/s))),t[0]===e[0]?t[1]<e[1]?-1:t[1]>e[1]?1:0:t[0]<e[0]?-1:1))}return function(e,r){function n(t){return"string"==typeof t}if(!Array.isArray(e))return e;var o,i={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};if(r){if(!O(r))throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n".concat(JSON.stringify(r,null,4)," (type ").concat(t(r),")"));if((o=Object.assign({},i,r)).progressFn&&"function"!=typeof o.progressFn)throw new Error('ranges-merge: [THROW_ID_01] the second input argument must be a function! It was given of a type: "'.concat(t(o.progressFn),'", equal to ').concat(JSON.stringify(o.progressFn,null,4)));if(o.mergeType&&1!==o.mergeType&&2!==o.mergeType)if(n(o.mergeType)&&"1"===o.mergeType.trim())o.mergeType=1;else{if(!n(o.mergeType)||"2"!==o.mergeType.trim())throw new Error('ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(t(o.mergeType),'", equal to ').concat(JSON.stringify(o.progressFn,null,4)));o.mergeType=2}if("boolean"!=typeof o.joinRangesThatTouchEdges)throw new Error('ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "'.concat(t(o.joinRangesThatTouchEdges),'", equal to ').concat(JSON.stringify(o.joinRangesThatTouchEdges,null,4)))}else o=p(i);for(var a,c,s,u=p(e).filter(function(t){return void 0!==t[2]||t[0]!==t[1]}),f=(a=o.progressFn?St(u,{progressFn:function(t){(s=Math.floor(t/5))!==c&&(c=s,o.progressFn(s))}}):St(u)).length-1,l=f;l>0;l--)o.progressFn&&(s=Math.floor(78*(1-l/f))+21)!==c&&s>c&&(c=s,o.progressFn(s)),(a[l][0]<=a[l-1][0]||!o.joinRangesThatTouchEdges&&a[l][0]<a[l-1][1]||o.joinRangesThatTouchEdges&&a[l][0]<=a[l-1][1])&&(a[l-1][0]=Math.min(a[l][0],a[l-1][0]),a[l-1][1]=Math.max(a[l][1],a[l-1][1]),void 0!==a[l][2]&&(a[l-1][0]>=a[l][0]||a[l-1][1]<=a[l][1])&&null!==a[l-1][2]&&(null===a[l][2]&&null!==a[l-1][2]?a[l-1][2]=null:void 0!==a[l-1][2]?2===o.mergeType&&a[l-1][0]===a[l][0]?a[l-1][2]=a[l][2]:a[l-1][2]+=a[l][2]:a[l-1][2]=a[l][2]),a.splice(l,1),l=a.length);return a}});
