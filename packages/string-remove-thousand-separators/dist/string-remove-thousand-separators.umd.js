/**
 * string-remove-thousand-separators
 * Detects and removes thousand separators (dot/comma/quote/space) from string-type digits
 * Version: 2.5.1
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://bitbucket.org/codsen/codsen/src/master/packages/string-remove-thousand-separators
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).stringRemoveThousandSeparators=e()}(this,function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1},r=function(t,e){if("string"!=typeof t)return!1;if(e&&"includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(t)}return/^[1-9]\d*(\.0+)?$/.test(t)},n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(t,e){return t(e={exports:{}},e.exports),e.exports}var i=o(function(t,e){(e=t.exports=function(t){return t+e.suffix(+t)}).suffix=function(t){return t%=100,1===Math.floor(t/10)?"th":t%10==1?"st":t%10==2?"nd":t%10==3?"rd":"th"}}),a=(i.suffix,o(function(t,e){var r,o,i,a,s,u,c,f,l,p,h,y,g,d,m,b,v,_,w,j;t.exports=(r="function"==typeof Promise,o="object"==typeof self?self:n,i="undefined"!=typeof Symbol,a="undefined"!=typeof Map,s="undefined"!=typeof Set,u="undefined"!=typeof WeakMap,c="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,l=i&&void 0!==Symbol.iterator,p=i&&void 0!==Symbol.toStringTag,h=s&&"function"==typeof Set.prototype.entries,y=a&&"function"==typeof Map.prototype.entries,g=h&&Object.getPrototypeOf((new Set).entries()),d=y&&Object.getPrototypeOf((new Map).entries()),m=l&&"function"==typeof Array.prototype[Symbol.iterator],b=m&&Object.getPrototypeOf([][Symbol.iterator]()),v=l&&"function"==typeof String.prototype[Symbol.iterator],_=v&&Object.getPrototypeOf(""[Symbol.iterator]()),w=8,j=-1,function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===o)return"global";if(Array.isArray(t)&&(!1===p||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var n=p&&t[Symbol.toStringTag];if("string"==typeof n)return n;var i=Object.getPrototypeOf(t);return i===RegExp.prototype?"RegExp":i===Date.prototype?"Date":r&&i===Promise.prototype?"Promise":s&&i===Set.prototype?"Set":a&&i===Map.prototype?"Map":c&&i===WeakSet.prototype?"WeakSet":u&&i===WeakMap.prototype?"WeakMap":f&&i===DataView.prototype?"DataView":a&&i===d?"Map Iterator":s&&i===g?"Set Iterator":m&&i===b?"Array Iterator":v&&i===_?"String Iterator":null===i?"Object":Object.prototype.toString.call(t).slice(w,j)})}));function s(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,c,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function u(t,e,r,n){for(var o=r-1,i=t.length;++o<i;)if(n(t[o],e))return o;return-1}function c(t){return t!=t}var f=Array.prototype.splice;function l(t,e,r,n){var o,i=n?u:s,a=-1,c=e.length,l=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(l=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(o=r,function(t){return o(t)})));++a<c;)for(var p=0,h=e[a],y=r?r(h):h;(p=i(l,y,p,n))>-1;)l!==t&&f.call(l,p,1),f.call(t,p,1);return t}var p=function(t,e){return t&&t.length&&e&&e.length?l(t,e):t},h=o(function(t,e){var r=200,o="__lodash_hash_undefined__",i=9007199254740991,a="[object Arguments]",s="[object Boolean]",u="[object Date]",c="[object Function]",f="[object GeneratorFunction]",l="[object Map]",p="[object Number]",h="[object Object]",y="[object RegExp]",g="[object Set]",d="[object String]",m="[object Symbol]",b="[object ArrayBuffer]",v="[object DataView]",_="[object Float32Array]",w="[object Float64Array]",j="[object Int8Array]",O="[object Int16Array]",$="[object Int32Array]",S="[object Uint8Array]",T="[object Uint8ClampedArray]",A="[object Uint16Array]",E="[object Uint32Array]",N=/\w*$/,I=/^\[object .+?Constructor\]$/,k=/^(?:0|[1-9]\d*)$/,x={};x[a]=x["[object Array]"]=x[b]=x[v]=x[s]=x[u]=x[_]=x[w]=x[j]=x[O]=x[$]=x[l]=x[p]=x[h]=x[y]=x[g]=x[d]=x[m]=x[S]=x[T]=x[A]=x[E]=!0,x["[object Error]"]=x[c]=x["[object WeakMap]"]=!1;var M="object"==typeof n&&n&&n.Object===Object&&n,W="object"==typeof self&&self&&self.Object===Object&&self,D=M||W||Function("return this")(),R=e&&!e.nodeType&&e,P=R&&t&&!t.nodeType&&t,H=P&&P.exports===R;function C(t,e){return t.set(e[0],e[1]),t}function Z(t,e){return t.add(e),t}function J(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function L(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function F(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function K(t,e){return function(r){return t(e(r))}}function q(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}var V,B=Array.prototype,U=Function.prototype,z=Object.prototype,G=D["__core-js_shared__"],Q=(V=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"",X=U.toString,Y=z.hasOwnProperty,tt=z.toString,et=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=H?D.Buffer:void 0,nt=D.Symbol,ot=D.Uint8Array,it=K(Object.getPrototypeOf,Object),at=Object.create,st=z.propertyIsEnumerable,ut=B.splice,ct=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,lt=K(Object.keys,Object),pt=Pt(D,"DataView"),ht=Pt(D,"Map"),yt=Pt(D,"Promise"),gt=Pt(D,"Set"),dt=Pt(D,"WeakMap"),mt=Pt(Object,"create"),bt=Lt(pt),vt=Lt(ht),_t=Lt(yt),wt=Lt(gt),jt=Lt(dt),Ot=nt?nt.prototype:void 0,$t=Ot?Ot.valueOf:void 0;function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){this.__data__=new Tt(t)}function Nt(t,e){var r=Kt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&qt(t)}(t)&&Y.call(t,"callee")&&(!st.call(t,"callee")||tt.call(t)==a)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var i in t)!e&&!Y.call(t,i)||o&&("length"==i||Zt(i,n))||r.push(i);return r}function It(t,e,r){var n=t[e];Y.call(t,e)&&Ft(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function kt(t,e){for(var r=t.length;r--;)if(Ft(t[r][0],e))return r;return-1}function xt(t,e,r,n,o,i,I){var k;if(n&&(k=i?n(t,o,i,I):n(t)),void 0!==k)return k;if(!Ut(t))return t;var M=Kt(t);if(M){if(k=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Y.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,k)}else{var W=Ct(t),D=W==c||W==f;if(Vt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(W==h||W==a||D&&!i){if(L(t))return i?t:{};if(k=function(t){return"function"!=typeof t.constructor||Jt(t)?{}:(e=it(t),Ut(e)?at(e):{});var e}(D?{}:t),!e)return function(t,e){return Dt(t,Ht(t),e)}(t,function(t,e){return t&&Dt(e,zt(e),t)}(k,t))}else{if(!x[W])return i?t:{};k=function(t,e,r,n){var o=t.constructor;switch(e){case b:return Wt(t);case s:case u:return new o(+t);case v:return function(t,e){var r=e?Wt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case _:case w:case j:case O:case $:case S:case T:case A:case E:return function(t,e){var r=e?Wt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return J(e?r(F(t),!0):F(t),C,new t.constructor)}(t,n,r);case p:case d:return new o(t);case y:return(c=new(a=t).constructor(a.source,N.exec(a))).lastIndex=a.lastIndex,c;case g:return function(t,e,r){return J(e?r(q(t),!0):q(t),Z,new t.constructor)}(t,n,r);case m:return i=t,$t?Object($t.call(i)):{}}var i;var a,c}(t,W,xt,e)}}I||(I=new Et);var R=I.get(t);if(R)return R;if(I.set(t,k),!M)var P=r?function(t){return function(t,e,r){var n=e(t);return Kt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,zt,Ht)}(t):zt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(P||t,function(o,i){P&&(o=t[i=o]),It(k,i,xt(o,e,r,n,i,t,I))}),k}function Mt(t){return!(!Ut(t)||(e=t,Q&&Q in e))&&(Bt(t)||L(t)?et:I).test(Lt(t));var e}function Wt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Dt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],s=n?n(r[a],t[a],a,r,t):void 0;It(r,a,void 0===s?t[a]:s)}return r}function Rt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Pt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Mt(r)?r:void 0}St.prototype.clear=function(){this.__data__=mt?mt(null):{}},St.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},St.prototype.get=function(t){var e=this.__data__;if(mt){var r=e[t];return r===o?void 0:r}return Y.call(e,t)?e[t]:void 0},St.prototype.has=function(t){var e=this.__data__;return mt?void 0!==e[t]:Y.call(e,t)},St.prototype.set=function(t,e){return this.__data__[t]=mt&&void 0===e?o:e,this},Tt.prototype.clear=function(){this.__data__=[]},Tt.prototype.delete=function(t){var e=this.__data__,r=kt(e,t);return!(r<0||(r==e.length-1?e.pop():ut.call(e,r,1),0))},Tt.prototype.get=function(t){var e=this.__data__,r=kt(e,t);return r<0?void 0:e[r][1]},Tt.prototype.has=function(t){return kt(this.__data__,t)>-1},Tt.prototype.set=function(t,e){var r=this.__data__,n=kt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},At.prototype.clear=function(){this.__data__={hash:new St,map:new(ht||Tt),string:new St}},At.prototype.delete=function(t){return Rt(this,t).delete(t)},At.prototype.get=function(t){return Rt(this,t).get(t)},At.prototype.has=function(t){return Rt(this,t).has(t)},At.prototype.set=function(t,e){return Rt(this,t).set(t,e),this},Et.prototype.clear=function(){this.__data__=new Tt},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,e){var n=this.__data__;if(n instanceof Tt){var o=n.__data__;if(!ht||o.length<r-1)return o.push([t,e]),this;n=this.__data__=new At(o)}return n.set(t,e),this};var Ht=ct?K(ct,Object):function(){return[]},Ct=function(t){return tt.call(t)};function Zt(t,e){return!!(e=null==e?i:e)&&("number"==typeof t||k.test(t))&&t>-1&&t%1==0&&t<e}function Jt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||z)}function Lt(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ft(t,e){return t===e||t!=t&&e!=e}(pt&&Ct(new pt(new ArrayBuffer(1)))!=v||ht&&Ct(new ht)!=l||yt&&"[object Promise]"!=Ct(yt.resolve())||gt&&Ct(new gt)!=g||dt&&"[object WeakMap]"!=Ct(new dt))&&(Ct=function(t){var e=tt.call(t),r=e==h?t.constructor:void 0,n=r?Lt(r):void 0;if(n)switch(n){case bt:return v;case vt:return l;case _t:return"[object Promise]";case wt:return g;case jt:return"[object WeakMap]"}return e});var Kt=Array.isArray;function qt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}(t.length)&&!Bt(t)}var Vt=ft||function(){return!1};function Bt(t){var e=Ut(t)?tt.call(t):"";return e==c||e==f}function Ut(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function zt(t){return qt(t)?Nt(t):function(t){if(!Jt(t))return lt(t);var e=[];for(var r in Object(t))Y.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return xt(t,!0,!0)}}),y="[object Object]";var g,d,m=Function.prototype,b=Object.prototype,v=m.toString,_=b.hasOwnProperty,w=v.call(Object),j=b.toString,O=(g=Object.getPrototypeOf,d=Object,function(t){return g(d(t))});var $=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||j.call(t)!=y||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=O(t);if(null===e)return!0;var r=_.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&v.call(r)==w};const S=Array.isArray;function T(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function A(t,e){return function t(e,r,n){const o=h(e);let i,a,s,u,c;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,S(o))for(i=0,a=o.length;i<a;i++){const e=`${n.path}.${i}`;void 0!==o[i]?(n.parent=h(o),s=t(r(o[i],void 0,Object.assign({},n,{path:T(e)})),r,Object.assign({},n,{path:T(e)})),Number.isNaN(s)&&i<o.length?(o.splice(i,1),i-=1):o[i]=s):o.splice(i,1)}else if($(o))for(i=0,a=(u=Object.keys(o)).length;i<a;i++){c=u[i];const e=`${n.path}.${c}`;0===n.depth&&null!=c&&(n.topmostKey=c),n.parent=h(o),s=t(r(c,o[c],Object.assign({},n,{path:T(e)})),r,Object.assign({},n,{path:T(e)})),Number.isNaN(s)?delete o[c]:o[c]=s}return o}(t,e,{})}var E="__lodash_hash_undefined__",N=9007199254740991,I="[object Function]",k="[object GeneratorFunction]",x=/^\[object .+?Constructor\]$/,M="object"==typeof n&&n&&n.Object===Object&&n,W="object"==typeof self&&self&&self.Object===Object&&self,D=M||W||Function("return this")();function R(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,C,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function P(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function H(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function C(t){return t!=t}function Z(t){return function(e){return t(e)}}function J(t,e){return t.has(e)}var L,F=Array.prototype,K=Function.prototype,q=Object.prototype,V=D["__core-js_shared__"],B=(L=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"",U=K.toString,z=q.hasOwnProperty,G=q.toString,Q=RegExp("^"+U.call(z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),X=F.splice,Y=Math.max,tt=Math.min,et=lt(D,"Map"),rt=lt(Object,"create");function nt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function it(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function at(t){var e=-1,r=t?t.length:0;for(this.__data__=new it;++e<r;)this.add(t[e])}function st(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function ut(t){return!(!ht(t)||(e=t,B&&B in e))&&(pt(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?Q:x).test(function(t){if(null!=t){try{return U.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function ct(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=N}(t.length)&&!pt(t)}(t)}(t)?t:[]}function ft(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function lt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return ut(r)?r:void 0}function pt(t){var e=ht(t)?G.call(t):"";return e==I||e==k}function ht(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}nt.prototype.clear=function(){this.__data__=rt?rt(null):{}},nt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},nt.prototype.get=function(t){var e=this.__data__;if(rt){var r=e[t];return r===E?void 0:r}return z.call(e,t)?e[t]:void 0},nt.prototype.has=function(t){var e=this.__data__;return rt?void 0!==e[t]:z.call(e,t)},nt.prototype.set=function(t,e){return this.__data__[t]=rt&&void 0===e?E:e,this},ot.prototype.clear=function(){this.__data__=[]},ot.prototype.delete=function(t){var e=this.__data__,r=st(e,t);return!(r<0||(r==e.length-1?e.pop():X.call(e,r,1),0))},ot.prototype.get=function(t){var e=this.__data__,r=st(e,t);return r<0?void 0:e[r][1]},ot.prototype.has=function(t){return st(this.__data__,t)>-1},ot.prototype.set=function(t,e){var r=this.__data__,n=st(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},it.prototype.clear=function(){this.__data__={hash:new nt,map:new(et||ot),string:new nt}},it.prototype.delete=function(t){return ft(this,t).delete(t)},it.prototype.get=function(t){return ft(this,t).get(t)},it.prototype.has=function(t){return ft(this,t).has(t)},it.prototype.set=function(t,e){return ft(this,t).set(t,e),this},at.prototype.add=at.prototype.push=function(t){return this.__data__.set(t,E),this},at.prototype.has=function(t){return this.__data__.has(t)};var yt=function(t,e){return e=Y(void 0===e?t.length-1:e,0),function(){for(var r=arguments,n=-1,o=Y(r.length-e,0),i=Array(o);++n<o;)i[n]=r[e+n];n=-1;for(var a=Array(e+1);++n<e;)a[n]=r[n];return a[e]=i,function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(t,this,a)}}(function(t){var e=H(t,ct);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?P:R,o=t[0].length,i=t.length,a=i,s=Array(i),u=1/0,c=[];a--;){var f=t[a];a&&e&&(f=H(f,Z(e))),u=tt(f.length,u),s[a]=!r&&(e||o>=120&&f.length>=120)?new at(a&&f):void 0}f=t[0];var l=-1,p=s[0];t:for(;++l<o&&c.length<u;){var h=f[l],y=e?e(h):h;if(h=r||0!==h?h:0,!(p?J(p,y):n(c,y,r))){for(a=i;--a;){var g=s[a];if(!(g?J(g,y):n(t[a],y,r)))continue t}p&&p.push(y),c.push(h)}}return c}(e):[]});function gt(t){return"string"==typeof t?t.length>0?[t]:[]:t}var dt=o(function(t){t.exports=function(){var t=Object.prototype.toString;function e(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function r(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var r in t)if(e(t,r))return!1;return!0}return!1}function n(e){return t.call(e)}var o=Array.isArray||function(e){return"[object Array]"===t.call(e)};function i(t){var e=parseInt(t);return e.toString()===t?e:t}function a(t){t=t||{};var a=function(t){return Object.keys(a).reduce(function(e,r){return"create"===r?e:("function"==typeof a[r]&&(e[r]=a[r].bind(a,t)),e)},{})};function s(r,n){return t.includeInheritedProps||"number"==typeof n&&Array.isArray(r)||e(r,n)}function u(t,e){if(s(t,e))return t[e]}function c(t,e,r,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return c(t,e.split(".").map(i),r,n);var o=e[0],a=u(t,o);return 1===e.length?(void 0!==a&&n||(t[o]=r),a):(void 0===a&&("number"==typeof e[1]?t[o]=[]:t[o]={}),c(t[o],e.slice(1),r,n))}return a.has=function(r,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!r;for(var a=0;a<n.length;a++){var s=i(n[a]);if(!("number"==typeof s&&o(r)&&s<r.length||(t.includeInheritedProps?s in Object(r):e(r,s))))return!1;r=r[s]}return!0},a.ensureExists=function(t,e,r){return c(t,e,r,!0)},a.set=function(t,e,r,n){return c(t,e,r,n)},a.insert=function(t,e,r,n){var i=a.get(t,e);n=~~n,o(i)||(i=[],a.set(t,e,i)),i.splice(n,0,r)},a.empty=function(t,e){var i,u;if(!r(e)&&null!=t&&(i=a.get(t,e))){if("string"==typeof i)return a.set(t,e,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===n(t)}(i))return a.set(t,e,!1);if("number"==typeof i)return a.set(t,e,0);if(o(i))i.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===n(t)}(i))return a.set(t,e,null);for(u in i)s(i,u)&&delete i[u]}}},a.push=function(t,e){var r=a.get(t,e);o(r)||(r=[],a.set(t,e,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},a.coalesce=function(t,e,r){for(var n,o=0,i=e.length;o<i;o++)if(void 0!==(n=a.get(t,e[o])))return n;return r},a.get=function(t,e,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return r;if("string"==typeof e)return a.get(t,e.split("."),r);var n=i(e[0]),o=u(t,n);return void 0===o?r:1===e.length?o:a.get(t[n],e.slice(1),r)},a.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(r(e))return t;if("string"==typeof e)return a.del(t,e.split("."));var n=i(e[0]);return s(t,n)?1!==e.length?a.del(t[n],e.slice(1)):(o(t)?t.splice(n,1):delete t[n],t):t},a}var s=a();return s.create=a,s.withInheritedProps=a({includeInheritedProps:!0}),s}()}),mt=function(t){var e=t%100;if(e>=10&&e<=20)return"th";var r=t%10;return 1===r?"st":2===r?"nd":3===r?"rd":"th"};function bt(t){if("number"!=typeof t)throw new TypeError("Expected Number, got "+typeof t+" "+t);return t+mt(t)}bt.indicator=mt;var vt=bt,_t=/[|\\{}()[\]^$+*?.]/g,wt=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(_t,"\\$&")};const jt=new Map;function Ot(t,e){const r=Object.assign({caseSensitive:!1},e),n=t+JSON.stringify(r);if(jt.has(n))return jt.get(n);const o="!"===t[0];o&&(t=t.slice(1)),t=wt(t).replace(/\\\*/g,".*");const i=new RegExp(`^${t}$`,r.caseSensitive?"":"i");return i.negated=o,jt.set(n,i),i}var $t=(t,e,r)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const n="!"===e[0][0];e=e.map(t=>Ot(t,r));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};function St(t,e,r){return function t(e,r,n,o=!0){const i=Object.prototype.hasOwnProperty;function s(t){return null!=t}function u(t){return"Object"===a(t)}function c(t,e){return e=gt(e),Array.from(t).filter(t=>!e.some(e=>$t.isMatch(t,e,{caseSensitive:!0})))}const f=["any","anything","every","everything","all","whatever","whatevs"],l=Array.isArray;if(!s(e))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const h={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};let y;if(y=s(n)&&u(n)?Object.assign({},h,n):Object.assign({},h),s(y.ignoreKeys)&&y.ignoreKeys?y.ignoreKeys=gt(y.ignoreKeys):y.ignoreKeys=[],s(y.ignorePaths)&&y.ignorePaths?y.ignorePaths=gt(y.ignorePaths):y.ignorePaths=[],s(y.acceptArraysIgnore)&&y.acceptArraysIgnore?y.acceptArraysIgnore=gt(y.acceptArraysIgnore):y.acceptArraysIgnore=[],y.msg="string"==typeof y.msg?y.msg.trim():y.msg,":"===y.msg[y.msg.length-1]&&(y.msg=y.msg.slice(0,y.msg.length-1).trim()),y.schema&&(Object.keys(y.schema).forEach(t=>{if(u(y.schema[t])){const e={};A(y.schema[t],(r,n,o)=>{const i=void 0!==n?n:r;return l(i)||u(i)||(e[`${t}.${o.path}`]=i),i}),delete y.schema[t],y.schema=Object.assign(y.schema,e)}}),Object.keys(y.schema).forEach(t=>{l(y.schema[t])||(y.schema[t]=[y.schema[t]]),y.schema[t]=y.schema[t].map(String).map(t=>t.toLowerCase()).map(t=>t.trim())})),s(r)||(r={}),o&&t(y,h,{enforceStrictKeyset:!1},!1),y.enforceStrictKeyset)if(s(y.schema)&&Object.keys(y.schema).length>0){if(0!==c(p(Object.keys(e),Object.keys(r).concat(Object.keys(y.schema))),y.ignoreKeys).length){const t=p(Object.keys(e),Object.keys(r).concat(Object.keys(y.schema)));throw new TypeError(`${y.msg}: ${y.optsVarName}.enforceStrictKeyset is on and the following key${t.length>1?"s":""} ${t.length>1?"are":"is"} not covered by schema and/or reference objects: ${t.join(", ")}`)}}else{if(!(s(r)&&Object.keys(r).length>0))throw new TypeError(`${y.msg}: Both ${y.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==c(p(Object.keys(e),Object.keys(r)),y.ignoreKeys).length){const t=p(Object.keys(e),Object.keys(r));throw new TypeError(`${y.msg}: The input object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not covered by the reference object: ${t.join(", ")}`)}if(0!==c(p(Object.keys(r),Object.keys(e)),y.ignoreKeys).length){const t=p(Object.keys(r),Object.keys(e));throw new TypeError(`${y.msg}: The reference object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not present in the input object: ${t.join(", ")}`)}}const g=[];A(e,(t,n,o)=>{const s=void 0!==n?n:t,c=void 0!==n?t:void 0;if(l(g)&&g.length&&g.some(t=>o.path.startsWith(t)))return s;if(c&&y.ignoreKeys.some(t=>$t.isMatch(c,t)))return s;if(y.ignorePaths.some(t=>$t.isMatch(o.path,t)))return s;const p=!(!u(s)&&!l(s)&&l(o.parent));let h=!1;u(y.schema)&&i.call(y.schema,dt.get(o.path))&&(h=!0);let d=!1;if(u(r)&&dt.has(r,dt.get(o.path))&&(d=!0),y.enforceStrictKeyset&&p&&!h&&!d)throw new TypeError(`${y.msg}: ${y.optsVarName}.${o.path} is neither covered by reference object (second input argument), nor ${y.optsVarName}.schema! To stop this error, turn off ${y.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${y.optsVarName}.schema).\n\nDebug info:\n\nobj = ${JSON.stringify(e,null,4)}\n\nref = ${JSON.stringify(r,null,4)}\n\ninnerObj = ${JSON.stringify(o,null,4)}\n\nopts = ${JSON.stringify(y,null,4)}\n\ncurrent = ${JSON.stringify(s,null,4)}\n\n`);if(h){const t=gt(y.schema[o.path]).map(String).map(t=>t.toLowerCase());if(dt.set(y.schema,o.path,t),yt(t,f).length)g.push(o.path);else if(!0!==s&&!1!==s&&!t.includes(a(s).toLowerCase())||(!0===s||!1===s)&&!t.includes(String(s))&&!t.includes("boolean")){if(!l(s)||!y.acceptArrays)throw new TypeError(`${y.msg}: ${y.optsVarName}.${o.path} was customised to ${"string"!==a(s)?'"':""}${JSON.stringify(s,null,0)}${"string"!==a(s)?'"':""} (type: ${a(s).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(t,null,0)})`);for(let e=0,r=s.length;e<r;e++)if(!t.includes(a(s[e]).toLowerCase()))throw new TypeError(`${y.msg}: ${y.optsVarName}.${o.path}.${e}, the ${vt(e+1)} element (equal to ${JSON.stringify(s[e],null,0)}) is of a type ${a(s[e]).toLowerCase()}, but only the following are allowed by the ${y.optsVarName}.schema: ${t.join(", ")}`)}}else if(d){const e=dt.get(r,o.path);if(y.acceptArrays&&l(s)&&!y.acceptArraysIgnore.includes(t)){if(!s.every(e=>a(e).toLowerCase()===a(r[t]).toLowerCase()))throw new TypeError(`${y.msg}: ${y.optsVarName}.${o.path} was customised to be array, but not all of its elements are ${a(r[t]).toLowerCase()}-type`)}else if(a(s)!==a(e))throw new TypeError(`${y.msg}: ${y.optsVarName}.${o.path} was customised to ${"string"===a(s).toLowerCase()?"":'"'}${JSON.stringify(s,null,0)}${"string"===a(s).toLowerCase()?"":'"'} which is not ${a(e).toLowerCase()} but ${a(s).toLowerCase()}`)}return s})}(t,e,r)}$t.isMatch=((t,e,r)=>{const n=Ot(e,r),o=n.test(t);return n.negated?!o:o});const Tt=Array.isArray;function At(t,r){if(!Tt(t))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(0===t.length)return t;const n={strictlyTwoElementsInRangeArrays:!1,progressFn:null},o=Object.assign({},n,r);let a,s;if(St(o,n,{msg:"ranges-sort: [THROW_ID_02*]",schema:{progressFn:["function","false","null"]}}),o.strictlyTwoElementsInRangeArrays&&!t.every((t,e)=>2===t.length||(a=e,s=t.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${i(a)} range (${JSON.stringify(t[a],null,4)}) has not two but ${s} elements!`);if(!t.every((t,r)=>!(!e(t[0],{includeZero:!0})||!e(t[1],{includeZero:!0}))||(a=r,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${i(a)} range (${JSON.stringify(t[a],null,4)}) does not consist of only natural numbers!`);const u=t.length*t.length;let c=0;return Array.from(t).sort((t,e)=>(o.progressFn&&(c++,o.progressFn(Math.floor(100*c/u))),t[0]===e[0]?t[1]<e[1]?-1:t[1]>e[1]?1:0:t[0]<e[0]?-1:1))}function Et(t,e){if(!Array.isArray(t))return t;if(e&&"function"!=typeof e)throw new Error(`ranges-merge: [THROW_ID_01] the second input argument must be a function! It was given of a type: "${typeof e}", equal to ${JSON.stringify(e,null,4)}`);const r=h(t).filter(t=>void 0!==t[2]||t[0]!==t[1]);let n,o,i;const a=(n=e?At(r,{progressFn:t=>{(i=Math.floor(t/5))!==o&&(o=i,e(i))}}):At(r)).length-1;for(let t=a;t>0;t--)e&&(i=Math.floor(78*(1-t/a))+21)!==o&&i>o&&(o=i,e(i)),(n[t][0]<=n[t-1][0]||n[t][0]<=n[t-1][1])&&(n[t-1][0]=Math.min(n[t][0],n[t-1][0]),n[t-1][1]=Math.max(n[t][1],n[t-1][1]),void 0!==n[t][2]&&(n[t-1][0]>=n[t][0]||n[t-1][1]<=n[t][1])&&null!==n[t-1][2]&&(null===n[t][2]&&null!==n[t-1][2]?n[t-1][2]=null:void 0!==n[t-1][2]?n[t-1][2]+=n[t][2]:n[t-1][2]=n[t][2]),n.splice(t,1),t=n.length);return n}const Nt=Array.isArray;function It(t,e){let r;if(r=e&&"number"==typeof e?e:1,"string"==typeof t){if(0===t.length)return"";if(""===t.trim()){const e=(t.match(/\n/g)||[]).length;return e?"\n".repeat(Math.min(e,r)):" "}let e="";if(""===t[0].trim()){e=" ";let n=0;for(let e=0,r=t.length;e<r&&("\n"===t[e]&&n++,0===t[e].trim().length);e++);n&&(e="\n".repeat(Math.min(n,r)))}let n="";if(""===t.slice(-1).trim()){n=" ";let e=0;for(let r=t.length;r--&&("\n"===t[r]&&e++,0===t[r].trim().length););e&&(n="\n".repeat(Math.min(e,r)))}return e+t.trim()+n}return t}function kt(t){return null!=t}const xt=Array.isArray;function Mt(t){return"string"==typeof t}function Wt(t){return r(t,{includeZero:!0})?parseInt(t,10):t}class Dt{constructor(t){const e={limitToBeAddedWhitespace:!1,limitLinebreaksCount:1},r=Object.assign({},e,t);St(r,e,{msg:"string-slices-array-push: [THROW_ID_02*]"}),this.opts=r}add(t=function(t){throw new Error(`string-slices-array-push/Slices/add(): [THROW_ID_01] Missing ${i(t)} input parameter!`)}(1),n,o,...a){if(a.length>0)throw new TypeError(`string-slices-array-push/Slices/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: ${JSON.stringify(a,null,4)}`);if(null===t&&void 0===n&&void 0===o)return;const s=r(t,{includeZero:!0})?parseInt(t,10):t,u=r(n,{includeZero:!0})?parseInt(n,10):n;if(xt(t)&&!kt(n)){let r,n;if(t.length>0){if(!t.every((t,e)=>!!xt(t)||(r=e,n=t,!1)))throw new TypeError(`string-slices-array-push/Slices/add(): [THROW_ID_07] first argument was given as array but it contains not only range arrays. For example, at index ${r} we have ${typeof n}-type value:\n${JSON.stringify(n,null,4)}.`);t.forEach((t,r)=>{if(!e(Wt(t[0]),{includeZero:!0}))throw new TypeError(`string-slices-array-push/Slices/add(): [THROW_ID_06] The ${i(r)} ranges array's starting range index, an element at its zero'th index, is not a natural number! It's equal to: ${t[0]}.`);if(!e(Wt(t[1]),{includeZero:!0}))throw new TypeError(`string-slices-array-push/Slices/add(): [THROW_ID_05] The ${i(r)} ranges array's ending range index, an element at its first index, is not a natural number! It's equal to: ${t[1]}.`);if(kt(t[2])&&!Mt(t[2]))throw new TypeError(`string-slices-array-push/Slices/add(): [THROW_ID_04] The ${i(r)} ranges array's "to add" value is not string but ${typeof t[2]}! It's equal to: ${t[2]}.`);this.add(...t)})}}else{if(!e(s,{includeZero:!0})||!e(u,{includeZero:!0}))throw e(s,{includeZero:!0})?new TypeError(`string-slices-array-push/Slices/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it's of a type "${typeof u}" equal to: ${JSON.stringify(u,null,4)}`):new TypeError(`string-slices-array-push/Slices/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it's of a type "${typeof s}" equal to: ${JSON.stringify(s,null,4)}`);if(kt(o)&&!Mt(o))throw new TypeError(`string-slices-array-push/Slices/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ${typeof o}, equal to:\n${JSON.stringify(o,null,4)}`);if(kt(this.slices)&&xt(this.last())&&s===this.last()[1]){if(this.last()[1]=u,null!==this.last()[2]&&kt(o)){let t=kt(this.last()[2])&&this.last()[2].length>0?this.last()[2]+o:o;this.opts.limitToBeAddedWhitespace&&(t=It(t,this.opts.limitLinebreaksCount)),Mt(t)&&!t.length||(this.last()[2]=t)}}else this.slices||(this.slices=[]),this.slices.push(void 0===o||Mt(o)&&!o.length?[s,u]:[s,u,this.opts.limitToBeAddedWhitespace?It(o,this.opts.limitLinebreaksCount):o])}}push(t,e,r,...n){this.add(t,e,r,...n)}current(){return null!=this.slices?(this.slices=Et(this.slices),this.opts.limitToBeAddedWhitespace?this.slices.map(t=>kt(t[2])?[t[0],t[1],It(t[2],this.opts.limitLinebreaksCount)]:t):this.slices):null}wipe(){this.slices=void 0}last(){return void 0!==this.slices&&Array.isArray(this.slices)?this.slices[this.slices.length-1]:null}}var Rt=o(function(t,e){!function(r){function n(t,e){return e instanceof Object||(e={trim:!0}),"number"==typeof t&&!isNaN(t)||(t=(t||"").toString(),"trim"in e&&!e.trim?!/\s/.test(t):!!(t=t.trim())&&!isNaN(t))}t.exports&&(e=t.exports=n),e.isNumeric=n}()}),Pt=(Rt.isNumeric,1/0),Ht="[object Symbol]",Ct=/^\s+|\s+$/g,Zt="[\\ud800-\\udfff]",Jt="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",Lt="\\ud83c[\\udffb-\\udfff]",Ft="[^\\ud800-\\udfff]",Kt="(?:\\ud83c[\\udde6-\\uddff]){2}",qt="[\\ud800-\\udbff][\\udc00-\\udfff]",Vt="(?:"+Jt+"|"+Lt+")"+"?",Bt="[\\ufe0e\\ufe0f]?"+Vt+("(?:\\u200d(?:"+[Ft,Kt,qt].join("|")+")[\\ufe0e\\ufe0f]?"+Vt+")*"),Ut="(?:"+[Ft+Jt+"?",Jt,Kt,qt,Zt].join("|")+")",zt=RegExp(Lt+"(?="+Lt+")|"+Ut+Bt,"g"),Gt=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),Qt="object"==typeof n&&n&&n.Object===Object&&n,Xt="object"==typeof self&&self&&self.Object===Object&&self,Yt=Qt||Xt||Function("return this")();function te(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,ee,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function ee(t){return t!=t}function re(t){return function(t){return Gt.test(t)}(t)?function(t){return t.match(zt)||[]}(t):function(t){return t.split("")}(t)}var ne=Object.prototype.toString,oe=Yt.Symbol,ie=oe?oe.prototype:void 0,ae=ie?ie.toString:void 0;function se(t){if("string"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&ne.call(t)==Ht}(t))return ae?ae.call(t):"";var e=t+"";return"0"==e&&1/t==-Pt?"-0":e}function ue(t,e,r){var n=t.length;return r=void 0===r?n:r,!e&&r>=n?t:function(t,e,r){var n=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(r=r>o?o:r)<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;for(var i=Array(o);++n<o;)i[n]=t[n+e];return i}(t,e,r)}var ce=function(t,e,r){var n;if((t=null==(n=t)?"":se(n))&&(r||void 0===e))return t.replace(Ct,"");if(!t||!(e=se(e)))return t;var o=re(t),i=re(e);return ue(o,function(t,e){for(var r=-1,n=t.length;++r<n&&te(e,t[r],0)>-1;);return r}(o,i),function(t,e){for(var r=t.length;r--&&te(e,t[r],0)>-1;);return r}(o,i)+1).join("")};return function(n,o){var a,s=!0,u=[".",",","'"," "];if("string"!=typeof n)throw new TypeError("string-remove-thousand-separators/remSep(): [THROW_ID_01] Input must be string! Currently it's: ".concat(t(n),", equal to:\n").concat(JSON.stringify(n,null,4)));if(null!=o&&!$(o))throw new TypeError("string-remove-thousand-separators/remSep(): [THROW_ID_02] Options object must be a plain object! Currently it's: ".concat(t(o),", equal to:\n").concat(JSON.stringify(o,null,4)));var c={removeThousandSeparatorsFromNumbers:!0,padSingleDecimalPlaceNumbers:!0,forceUKStyle:!1},f=Object.assign({},c,o);St(f,c,{msg:"string-remove-thousand-separators/remSep(): [THROW_ID_03*]"});var l=ce(n.trim(),'"');if(""===l)return l;for(var p=new Dt,h=0,y=l.length;h<y;h++){if(f.removeThousandSeparatorsFromNumbers&&""===l[h].trim()&&p.add(h,h+1),f.removeThousandSeparatorsFromNumbers&&"'"===l[h]&&(p.add(h,h+1),"'"===l[h+1])){s=!1;break}if(u.includes(l[h])){if(void 0!==l[h+1]&&Rt(l[h+1]))if(void 0!==l[h+2]){if(!Rt(l[h+2])){s=!1;break}if(void 0!==l[h+3]){if(!Rt(l[h+3])){s=!1;break}if(void 0!==l[h+4]&&Rt(l[h+4])){s=!1;break}if(f.removeThousandSeparatorsFromNumbers&&p.add(h,h+1),a){if(l[h]!==a){s=!1;break}}else a=l[h]}else f.removeThousandSeparatorsFromNumbers&&f.forceUKStyle&&","===l[h]&&p.add(h,h+1,".")}else f.forceUKStyle&&","===l[h]&&p.add(h,h+1,"."),f.padSingleDecimalPlaceNumbers&&p.add(h+2,h+2,"0")}else if(!Rt(l[h])){s=!1;break}}return s&&p.current()?function(t,n,o){let a=0,s=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof t)throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(null===n)return t;if(!Nt(n))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof n}, equal to: ${JSON.stringify(n,null,4)}`);if(o&&"function"!=typeof o)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof o}, equal to: ${JSON.stringify(o,null,4)}`);Nt(n)&&(e(n[0],{includeZero:!0})||r(n[0],{includeZero:!0}))&&(e(n[1],{includeZero:!0})||r(n[1],{includeZero:!0}))&&(n=[n]);const u=n.length;let c=0;n.forEach((t,f)=>{if(o&&(a=Math.floor(c/u*10))!==s&&(s=a,o(a)),!Nt(t))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${i(f)} element not an array: ${JSON.stringify(t,null,4)}, which is ${typeof t}`);if(!e(t[0],{includeZero:!0})){if(!r(t[0],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${i(f)} element, array [${t[0]},${t[1]}]. That array has first element not an integer, but ${typeof t[0]}, equal to: ${JSON.stringify(t[0],null,4)}. Computer doesn't like this.`);n[f][0]=Number.parseInt(n[f][0],10)}if(!e(t[1],{includeZero:!0})){if(!r(t[1],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${i(f)} element, array [${t[0]},${t[1]}]. That array has second element not an integer, but ${typeof t[1]}, equal to: ${JSON.stringify(t[1],null,4)}. Computer doesn't like this.`);n[f][1]=Number.parseInt(n[f][1],10)}c++});const f=Et(n,t=>{o&&(a=10+Math.floor(t/10))!==s&&(s=a,o(a))}),l=f.length;if(l>0){const e=t.slice(f[l-1][1]);t=f.reduce((e,r,n,i)=>{o&&(a=20+Math.floor(n/l*80))!==s&&(s=a,o(a));const u=0===n?0:i[n-1][1],c=i[n][0];return e+t.slice(u,c)+(function(t){return null!=t}(i[n][2])?i[n][2]:"")},""),t+=e}return t}(l,p.current()):l}});
