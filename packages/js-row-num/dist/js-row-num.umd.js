/**
 * js-row-num
 * Update all row numbers in all console.logs in JS code
 * Version: 2.3.20
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/js-row-num
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).jsRowNum=e()}(this,(function(){"use strict";var t=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1},e=function(t,e){if("string"!=typeof t)return!1;if(e&&"includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(t)}return/^[1-9]\d*(\.0+)?$/.test(t)},r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t,e){return t(e={exports:{}},e.exports),e.exports}var o=n((function(t,e){(e=t.exports=function(t){return t+e.suffix(+t)}).suffix=function(t){return t%=100,1===Math.floor(t/10)?"th":t%10==1?"st":t%10==2?"nd":t%10==3?"rd":"th"}})),i=(o.suffix,n((function(t,e){var n,o,i,s,a,u,c,l,f,p,h,y,g,d,m,b,v,_,w,j;t.exports=(n="function"==typeof Promise,o="object"==typeof self?self:r,i="undefined"!=typeof Symbol,s="undefined"!=typeof Map,a="undefined"!=typeof Set,u="undefined"!=typeof WeakMap,c="undefined"!=typeof WeakSet,l="undefined"!=typeof DataView,f=i&&void 0!==Symbol.iterator,p=i&&void 0!==Symbol.toStringTag,h=a&&"function"==typeof Set.prototype.entries,y=s&&"function"==typeof Map.prototype.entries,g=h&&Object.getPrototypeOf((new Set).entries()),d=y&&Object.getPrototypeOf((new Map).entries()),m=f&&"function"==typeof Array.prototype[Symbol.iterator],b=m&&Object.getPrototypeOf([][Symbol.iterator]()),v=f&&"function"==typeof String.prototype[Symbol.iterator],_=v&&Object.getPrototypeOf(""[Symbol.iterator]()),w=8,j=-1,function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===o)return"global";if(Array.isArray(t)&&(!1===p||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var r=p&&t[Symbol.toStringTag];if("string"==typeof r)return r;var i=Object.getPrototypeOf(t);return i===RegExp.prototype?"RegExp":i===Date.prototype?"Date":n&&i===Promise.prototype?"Promise":a&&i===Set.prototype?"Set":s&&i===Map.prototype?"Map":c&&i===WeakSet.prototype?"WeakSet":u&&i===WeakMap.prototype?"WeakMap":l&&i===DataView.prototype?"DataView":s&&i===d?"Map Iterator":a&&i===g?"Set Iterator":m&&i===b?"Array Iterator":v&&i===_?"String Iterator":null===i?"Object":Object.prototype.toString.call(t).slice(w,j)})})));function s(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,u,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function a(t,e,r,n){for(var o=r-1,i=t.length;++o<i;)if(n(t[o],e))return o;return-1}function u(t){return t!=t}var c=Array.prototype.splice;function l(t,e,r,n){var o,i=n?a:s,u=-1,l=e.length,f=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(f=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(o=r,function(t){return o(t)})));++u<l;)for(var p=0,h=e[u],y=r?r(h):h;(p=i(f,y,p,n))>-1;)f!==t&&c.call(f,p,1),c.call(t,p,1);return t}var f=function(t,e){return t&&t.length&&e&&e.length?l(t,e):t},p=n((function(t,e){var n=200,o="__lodash_hash_undefined__",i=9007199254740991,s="[object Arguments]",a="[object Boolean]",u="[object Date]",c="[object Function]",l="[object GeneratorFunction]",f="[object Map]",p="[object Number]",h="[object Object]",y="[object RegExp]",g="[object Set]",d="[object String]",m="[object Symbol]",b="[object ArrayBuffer]",v="[object DataView]",_="[object Float32Array]",w="[object Float64Array]",j="[object Int8Array]",O="[object Int16Array]",T="[object Int32Array]",$="[object Uint8Array]",S="[object Uint8ClampedArray]",A="[object Uint16Array]",E="[object Uint32Array]",I=/\w*$/,N=/^\[object .+?Constructor\]$/,k=/^(?:0|[1-9]\d*)$/,R={};R[s]=R["[object Array]"]=R[b]=R[v]=R[a]=R[u]=R[_]=R[w]=R[j]=R[O]=R[T]=R[f]=R[p]=R[h]=R[y]=R[g]=R[d]=R[m]=R[$]=R[S]=R[A]=R[E]=!0,R["[object Error]"]=R[c]=R["[object WeakMap]"]=!1;var W="object"==typeof r&&r&&r.Object===Object&&r,x="object"==typeof self&&self&&self.Object===Object&&self,M=W||x||Function("return this")(),D=e&&!e.nodeType&&e,P=D&&t&&!t.nodeType&&t,F=P&&P.exports===D;function H(t,e){return t.set(e[0],e[1]),t}function J(t,e){return t.add(e),t}function C(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function Z(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function L(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function K(t,e){return function(r){return t(e(r))}}function V(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var q,B=Array.prototype,U=Function.prototype,z=Object.prototype,G=M["__core-js_shared__"],Q=(q=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+q:"",X=U.toString,Y=z.hasOwnProperty,tt=z.toString,et=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=F?M.Buffer:void 0,nt=M.Symbol,ot=M.Uint8Array,it=K(Object.getPrototypeOf,Object),st=Object.create,at=z.propertyIsEnumerable,ut=B.splice,ct=Object.getOwnPropertySymbols,lt=rt?rt.isBuffer:void 0,ft=K(Object.keys,Object),pt=Pt(M,"DataView"),ht=Pt(M,"Map"),yt=Pt(M,"Promise"),gt=Pt(M,"Set"),dt=Pt(M,"WeakMap"),mt=Pt(Object,"create"),bt=Zt(pt),vt=Zt(ht),_t=Zt(yt),wt=Zt(gt),jt=Zt(dt),Ot=nt?nt.prototype:void 0,Tt=Ot?Ot.valueOf:void 0;function $t(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){this.__data__=new St(t)}function It(t,e){var r=Kt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Vt(t)}(t)&&Y.call(t,"callee")&&(!at.call(t,"callee")||tt.call(t)==s)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var i in t)!e&&!Y.call(t,i)||o&&("length"==i||Jt(i,n))||r.push(i);return r}function Nt(t,e,r){var n=t[e];Y.call(t,e)&&Lt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function kt(t,e){for(var r=t.length;r--;)if(Lt(t[r][0],e))return r;return-1}function Rt(t,e,r,n,o,i,N){var k;if(n&&(k=i?n(t,o,i,N):n(t)),void 0!==k)return k;if(!Ut(t))return t;var W=Kt(t);if(W){if(k=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Y.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,k)}else{var x=Ht(t),M=x==c||x==l;if(qt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(x==h||x==s||M&&!i){if(Z(t))return i?t:{};if(k=function(t){return"function"!=typeof t.constructor||Ct(t)?{}:(e=it(t),Ut(e)?st(e):{});var e}(M?{}:t),!e)return function(t,e){return Mt(t,Ft(t),e)}(t,function(t,e){return t&&Mt(e,zt(e),t)}(k,t))}else{if(!R[x])return i?t:{};k=function(t,e,r,n){var o=t.constructor;switch(e){case b:return xt(t);case a:case u:return new o(+t);case v:return function(t,e){var r=e?xt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case _:case w:case j:case O:case T:case $:case S:case A:case E:return function(t,e){var r=e?xt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case f:return function(t,e,r){return C(e?r(L(t),!0):L(t),H,new t.constructor)}(t,n,r);case p:case d:return new o(t);case y:return(c=new(s=t).constructor(s.source,I.exec(s))).lastIndex=s.lastIndex,c;case g:return function(t,e,r){return C(e?r(V(t),!0):V(t),J,new t.constructor)}(t,n,r);case m:return i=t,Tt?Object(Tt.call(i)):{}}var i;var s,c}(t,x,Rt,e)}}N||(N=new Et);var D=N.get(t);if(D)return D;if(N.set(t,k),!W)var P=r?function(t){return function(t,e,r){var n=e(t);return Kt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,zt,Ft)}(t):zt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(P||t,(function(o,i){P&&(o=t[i=o]),Nt(k,i,Rt(o,e,r,n,i,t,N))})),k}function Wt(t){return!(!Ut(t)||(e=t,Q&&Q in e))&&(Bt(t)||Z(t)?et:N).test(Zt(t));var e}function xt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Mt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var s=e[o],a=n?n(r[s],t[s],s,r,t):void 0;Nt(r,s,void 0===a?t[s]:a)}return r}function Dt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Pt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Wt(r)?r:void 0}$t.prototype.clear=function(){this.__data__=mt?mt(null):{}},$t.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},$t.prototype.get=function(t){var e=this.__data__;if(mt){var r=e[t];return r===o?void 0:r}return Y.call(e,t)?e[t]:void 0},$t.prototype.has=function(t){var e=this.__data__;return mt?void 0!==e[t]:Y.call(e,t)},$t.prototype.set=function(t,e){return this.__data__[t]=mt&&void 0===e?o:e,this},St.prototype.clear=function(){this.__data__=[]},St.prototype.delete=function(t){var e=this.__data__,r=kt(e,t);return!(r<0)&&(r==e.length-1?e.pop():ut.call(e,r,1),!0)},St.prototype.get=function(t){var e=this.__data__,r=kt(e,t);return r<0?void 0:e[r][1]},St.prototype.has=function(t){return kt(this.__data__,t)>-1},St.prototype.set=function(t,e){var r=this.__data__,n=kt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},At.prototype.clear=function(){this.__data__={hash:new $t,map:new(ht||St),string:new $t}},At.prototype.delete=function(t){return Dt(this,t).delete(t)},At.prototype.get=function(t){return Dt(this,t).get(t)},At.prototype.has=function(t){return Dt(this,t).has(t)},At.prototype.set=function(t,e){return Dt(this,t).set(t,e),this},Et.prototype.clear=function(){this.__data__=new St},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,e){var r=this.__data__;if(r instanceof St){var o=r.__data__;if(!ht||o.length<n-1)return o.push([t,e]),this;r=this.__data__=new At(o)}return r.set(t,e),this};var Ft=ct?K(ct,Object):function(){return[]},Ht=function(t){return tt.call(t)};function Jt(t,e){return!!(e=null==e?i:e)&&("number"==typeof t||k.test(t))&&t>-1&&t%1==0&&t<e}function Ct(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||z)}function Zt(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Lt(t,e){return t===e||t!=t&&e!=e}(pt&&Ht(new pt(new ArrayBuffer(1)))!=v||ht&&Ht(new ht)!=f||yt&&"[object Promise]"!=Ht(yt.resolve())||gt&&Ht(new gt)!=g||dt&&"[object WeakMap]"!=Ht(new dt))&&(Ht=function(t){var e=tt.call(t),r=e==h?t.constructor:void 0,n=r?Zt(r):void 0;if(n)switch(n){case bt:return v;case vt:return f;case _t:return"[object Promise]";case wt:return g;case jt:return"[object WeakMap]"}return e});var Kt=Array.isArray;function Vt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}(t.length)&&!Bt(t)}var qt=lt||function(){return!1};function Bt(t){var e=Ut(t)?tt.call(t):"";return e==c||e==l}function Ut(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function zt(t){return Vt(t)?It(t):function(t){if(!Ct(t))return ft(t);var e=[];for(var r in Object(t))Y.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return Rt(t,!0,!0)}})),h="[object Object]";var y,g,d=Function.prototype,m=Object.prototype,b=d.toString,v=m.hasOwnProperty,_=b.call(Object),w=m.toString,j=(y=Object.getPrototypeOf,g=Object,function(t){return y(g(t))});var O=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||w.call(t)!=h||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=j(t);if(null===e)return!0;var r=v.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&b.call(r)==_};const T=Array.isArray;function $(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function S(t,e){return function t(e,r,n){const o=p(e);let i,s,a,u,c;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,T(o))for(i=0,s=o.length;i<s;i++){const e=`${n.path}.${i}`;void 0!==o[i]?(n.parent=p(o),n.parentType="array",a=t(r(o[i],void 0,Object.assign({},n,{path:$(e)})),r,Object.assign({},n,{path:$(e)})),Number.isNaN(a)&&i<o.length?(o.splice(i,1),i-=1):o[i]=a):o.splice(i,1)}else if(O(o))for(i=0,s=(u=Object.keys(o)).length;i<s;i++){c=u[i];const e=`${n.path}.${c}`;0===n.depth&&null!=c&&(n.topmostKey=c),n.parent=p(o),n.parentType="object",a=t(r(c,o[c],Object.assign({},n,{path:$(e)})),r,Object.assign({},n,{path:$(e)})),Number.isNaN(a)?delete o[c]:o[c]=a}return o}(t,e,{})}var A="__lodash_hash_undefined__",E=9007199254740991,I="[object Function]",N="[object GeneratorFunction]",k=/^\[object .+?Constructor\]$/,R="object"==typeof r&&r&&r.Object===Object&&r,W="object"==typeof self&&self&&self.Object===Object&&self,x=R||W||Function("return this")();function M(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}function D(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,H,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function P(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function F(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function H(t){return t!=t}function J(t){return function(e){return t(e)}}function C(t,e){return t.has(e)}var Z,L=Array.prototype,K=Function.prototype,V=Object.prototype,q=x["__core-js_shared__"],B=(Z=/[^.]+$/.exec(q&&q.keys&&q.keys.IE_PROTO||""))?"Symbol(src)_1."+Z:"",U=K.toString,z=V.hasOwnProperty,G=V.toString,Q=RegExp("^"+U.call(z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),X=L.splice,Y=Math.max,tt=Math.min,et=ft(x,"Map"),rt=ft(Object,"create");function nt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function it(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function st(t){var e=-1,r=t?t.length:0;for(this.__data__=new it;++e<r;)this.add(t[e])}function at(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function ut(t){return!(!ht(t)||function(t){return!!B&&B in t}(t))&&(pt(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?Q:k).test(function(t){if(null!=t){try{return U.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function ct(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=E}(t.length)&&!pt(t)}(t)}(t)?t:[]}function lt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function ft(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return ut(r)?r:void 0}function pt(t){var e=ht(t)?G.call(t):"";return e==I||e==N}function ht(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}nt.prototype.clear=function(){this.__data__=rt?rt(null):{}},nt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},nt.prototype.get=function(t){var e=this.__data__;if(rt){var r=e[t];return r===A?void 0:r}return z.call(e,t)?e[t]:void 0},nt.prototype.has=function(t){var e=this.__data__;return rt?void 0!==e[t]:z.call(e,t)},nt.prototype.set=function(t,e){return this.__data__[t]=rt&&void 0===e?A:e,this},ot.prototype.clear=function(){this.__data__=[]},ot.prototype.delete=function(t){var e=this.__data__,r=at(e,t);return!(r<0)&&(r==e.length-1?e.pop():X.call(e,r,1),!0)},ot.prototype.get=function(t){var e=this.__data__,r=at(e,t);return r<0?void 0:e[r][1]},ot.prototype.has=function(t){return at(this.__data__,t)>-1},ot.prototype.set=function(t,e){var r=this.__data__,n=at(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},it.prototype.clear=function(){this.__data__={hash:new nt,map:new(et||ot),string:new nt}},it.prototype.delete=function(t){return lt(this,t).delete(t)},it.prototype.get=function(t){return lt(this,t).get(t)},it.prototype.has=function(t){return lt(this,t).has(t)},it.prototype.set=function(t,e){return lt(this,t).set(t,e),this},st.prototype.add=st.prototype.push=function(t){return this.__data__.set(t,A),this},st.prototype.has=function(t){return this.__data__.has(t)};var yt=function(t,e){return e=Y(void 0===e?t.length-1:e,0),function(){for(var r=arguments,n=-1,o=Y(r.length-e,0),i=Array(o);++n<o;)i[n]=r[e+n];n=-1;for(var s=Array(e+1);++n<e;)s[n]=r[n];return s[e]=i,M(t,this,s)}}((function(t){var e=F(t,ct);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?P:D,o=t[0].length,i=t.length,s=i,a=Array(i),u=1/0,c=[];s--;){var l=t[s];s&&e&&(l=F(l,J(e))),u=tt(l.length,u),a[s]=!r&&(e||o>=120&&l.length>=120)?new st(s&&l):void 0}l=t[0];var f=-1,p=a[0];t:for(;++f<o&&c.length<u;){var h=l[f],y=e?e(h):h;if(h=r||0!==h?h:0,!(p?C(p,y):n(c,y,r))){for(s=i;--s;){var g=a[s];if(!(g?C(g,y):n(t[s],y,r)))continue t}p&&p.push(y),c.push(h)}}return c}(e):[]}));function gt(t){return"string"==typeof t?t.length>0?[t]:[]:t}var dt=n((function(t){t.exports=function(){var t=Object.prototype.toString;function e(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function r(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var r in t)if(e(t,r))return!1;return!0}return!1}function n(e){return t.call(e)}var o=Array.isArray||function(e){return"[object Array]"===t.call(e)};function i(t){var e=parseInt(t);return e.toString()===t?e:t}function s(t){t=t||{};var s=function(t){return Object.keys(s).reduce((function(e,r){return"create"===r?e:("function"==typeof s[r]&&(e[r]=s[r].bind(s,t)),e)}),{})};function a(r,n){return t.includeInheritedProps||"number"==typeof n&&Array.isArray(r)||e(r,n)}function u(t,e){if(a(t,e))return t[e]}function c(t,e,r,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return c(t,e.split(".").map(i),r,n);var o=e[0],s=u(t,o);return 1===e.length?(void 0!==s&&n||(t[o]=r),s):(void 0===s&&("number"==typeof e[1]?t[o]=[]:t[o]={}),c(t[o],e.slice(1),r,n))}return s.has=function(r,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!r;for(var s=0;s<n.length;s++){var a=i(n[s]);if(!("number"==typeof a&&o(r)&&a<r.length||(t.includeInheritedProps?a in Object(r):e(r,a))))return!1;r=r[a]}return!0},s.ensureExists=function(t,e,r){return c(t,e,r,!0)},s.set=function(t,e,r,n){return c(t,e,r,n)},s.insert=function(t,e,r,n){var i=s.get(t,e);n=~~n,o(i)||(i=[],s.set(t,e,i)),i.splice(n,0,r)},s.empty=function(t,e){var i,u;if(!r(e)&&null!=t&&(i=s.get(t,e))){if("string"==typeof i)return s.set(t,e,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===n(t)}(i))return s.set(t,e,!1);if("number"==typeof i)return s.set(t,e,0);if(o(i))i.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===n(t)}(i))return s.set(t,e,null);for(u in i)a(i,u)&&delete i[u]}}},s.push=function(t,e){var r=s.get(t,e);o(r)||(r=[],s.set(t,e,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},s.coalesce=function(t,e,r){for(var n,o=0,i=e.length;o<i;o++)if(void 0!==(n=s.get(t,e[o])))return n;return r},s.get=function(t,e,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return r;if("string"==typeof e)return s.get(t,e.split("."),r);var n=i(e[0]),o=u(t,n);return void 0===o?r:1===e.length?o:s.get(t[n],e.slice(1),r)},s.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(r(e))return t;if("string"==typeof e)return s.del(t,e.split("."));var n=i(e[0]);return a(t,n)?1!==e.length?s.del(t[n],e.slice(1)):(o(t)?t.splice(n,1):delete t[n],t):t},s}var a=s();return a.create=s,a.withInheritedProps=s({includeInheritedProps:!0}),a}()})),mt=function(t){var e=(t=Math.abs(t))%100;if(e>=10&&e<=20)return"th";var r=t%10;return 1===r?"st":2===r?"nd":3===r?"rd":"th"};function bt(t){if("number"!=typeof t)throw new TypeError("Expected Number, got "+typeof t+" "+t);return Number.isFinite(t)?t+mt(t):t}bt.indicator=mt;var vt=bt;const _t=/[|\\{}()[\]^$+*?.-]/g;var wt=t=>{if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(_t,"\\$&")};const jt=new Map;function Ot(t,e){e={caseSensitive:!1,...e};const r=t+JSON.stringify(e);if(jt.has(r))return jt.get(r);const n="!"===t[0];n&&(t=t.slice(1)),t=wt(t).replace(/\\\*/g,".*");const o=new RegExp(`^${t}$`,e.caseSensitive?"":"i");return o.negated=n,jt.set(r,o),o}var Tt=(t,e,r)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const n="!"===e[0][0];e=e.map(t=>Ot(t,r));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};function $t(t,e,r){return function t(e,r,n,o=!0){const s=Object.prototype.hasOwnProperty;function a(t){return null!=t}function u(t){return"Object"===i(t)}function c(t,e){return e=gt(e),Array.from(t).filter(t=>!e.some(e=>Tt.isMatch(t,e,{caseSensitive:!0})))}const l=["any","anything","every","everything","all","whatever","whatevs"],p=Array.isArray;if(!a(e))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const h={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};let y;if(y=a(n)&&u(n)?Object.assign({},h,n):Object.assign({},h),a(y.ignoreKeys)&&y.ignoreKeys?y.ignoreKeys=gt(y.ignoreKeys):y.ignoreKeys=[],a(y.ignorePaths)&&y.ignorePaths?y.ignorePaths=gt(y.ignorePaths):y.ignorePaths=[],a(y.acceptArraysIgnore)&&y.acceptArraysIgnore?y.acceptArraysIgnore=gt(y.acceptArraysIgnore):y.acceptArraysIgnore=[],y.msg="string"==typeof y.msg?y.msg.trim():y.msg,":"===y.msg[y.msg.length-1]&&(y.msg=y.msg.slice(0,y.msg.length-1).trim()),y.schema&&(Object.keys(y.schema).forEach(t=>{if(u(y.schema[t])){const e={};S(y.schema[t],(r,n,o)=>{const i=void 0!==n?n:r;return p(i)||u(i)||(e[`${t}.${o.path}`]=i),i}),delete y.schema[t],y.schema=Object.assign(y.schema,e)}}),Object.keys(y.schema).forEach(t=>{p(y.schema[t])||(y.schema[t]=[y.schema[t]]),y.schema[t]=y.schema[t].map(String).map(t=>t.toLowerCase()).map(t=>t.trim())})),a(r)||(r={}),o&&t(y,h,{enforceStrictKeyset:!1},!1),y.enforceStrictKeyset)if(a(y.schema)&&Object.keys(y.schema).length>0){if(0!==c(f(Object.keys(e),Object.keys(r).concat(Object.keys(y.schema))),y.ignoreKeys).length){const t=f(Object.keys(e),Object.keys(r).concat(Object.keys(y.schema)));throw new TypeError(`${y.msg}: ${y.optsVarName}.enforceStrictKeyset is on and the following key${t.length>1?"s":""} ${t.length>1?"are":"is"} not covered by schema and/or reference objects: ${t.join(", ")}`)}}else{if(!(a(r)&&Object.keys(r).length>0))throw new TypeError(`${y.msg}: Both ${y.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==c(f(Object.keys(e),Object.keys(r)),y.ignoreKeys).length){const t=f(Object.keys(e),Object.keys(r));throw new TypeError(`${y.msg}: The input object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not covered by the reference object: ${t.join(", ")}`)}if(0!==c(f(Object.keys(r),Object.keys(e)),y.ignoreKeys).length){const t=f(Object.keys(r),Object.keys(e));throw new TypeError(`${y.msg}: The reference object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not present in the input object: ${t.join(", ")}`)}}const g=[];S(e,(t,n,o)=>{let a=n,c=t;if("array"===o.parentType&&(c=void 0,a=t),p(g)&&g.length&&g.some(t=>o.path.startsWith(t)))return a;if(c&&y.ignoreKeys.some(t=>Tt.isMatch(c,t)))return a;if(y.ignorePaths.some(t=>Tt.isMatch(o.path,t)))return a;const f=!(!u(a)&&!p(a)&&p(o.parent));let h=!1;u(y.schema)&&s.call(y.schema,dt.get(o.path))&&(h=!0);let d=!1;if(u(r)&&dt.has(r,dt.get(o.path))&&(d=!0),y.enforceStrictKeyset&&f&&!h&&!d)throw new TypeError(`${y.msg}: ${y.optsVarName}.${o.path} is neither covered by reference object (second input argument), nor ${y.optsVarName}.schema! To stop this error, turn off ${y.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${y.optsVarName}.schema).\n\nDebug info:\n\nobj = ${JSON.stringify(e,null,4)}\n\nref = ${JSON.stringify(r,null,4)}\n\ninnerObj = ${JSON.stringify(o,null,4)}\n\nopts = ${JSON.stringify(y,null,4)}\n\ncurrent = ${JSON.stringify(a,null,4)}\n\n`);if(h){const t=gt(y.schema[o.path]).map(String).map(t=>t.toLowerCase());if(dt.set(y.schema,o.path,t),yt(t,l).length)g.push(o.path);else if(!0!==a&&!1!==a&&!t.includes(i(a).toLowerCase())||(!0===a||!1===a)&&!t.includes(String(a))&&!t.includes("boolean")){if(!p(a)||!y.acceptArrays)throw new TypeError(`${y.msg}: ${y.optsVarName}.${o.path} was customised to ${"string"!==i(a)?'"':""}${JSON.stringify(a,null,0)}${"string"!==i(a)?'"':""} (type: ${i(a).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(t,null,0)})`);for(let e=0,r=a.length;e<r;e++)if(!t.includes(i(a[e]).toLowerCase()))throw new TypeError(`${y.msg}: ${y.optsVarName}.${o.path}.${e}, the ${vt(e+1)} element (equal to ${JSON.stringify(a[e],null,0)}) is of a type ${i(a[e]).toLowerCase()}, but only the following are allowed by the ${y.optsVarName}.schema: ${t.join(", ")}`)}}else if(d){const e=dt.get(r,o.path);if(y.acceptArrays&&p(a)&&!y.acceptArraysIgnore.includes(t)){if(!a.every(e=>i(e).toLowerCase()===i(r[t]).toLowerCase()))throw new TypeError(`${y.msg}: ${y.optsVarName}.${o.path} was customised to be array, but not all of its elements are ${i(r[t]).toLowerCase()}-type`)}else if(i(a)!==i(e))throw new TypeError(`${y.msg}: ${y.optsVarName}.${o.path} was customised to ${"string"===i(a).toLowerCase()?"":'"'}${JSON.stringify(a,null,0)}${"string"===i(a).toLowerCase()?"":'"'} which is not ${i(e).toLowerCase()} but ${i(a).toLowerCase()}`)}return a})}(t,e,r)}Tt.isMatch=(t,e,r)=>{const n=Ot(e,r),o=n.test(t);return n.negated?!o:o};const St=Array.isArray;function At(e,r){if(!St(e))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(0===e.length)return e;const n={strictlyTwoElementsInRangeArrays:!1,progressFn:null},i=Object.assign({},n,r);let s,a;if($t(i,n,{msg:"ranges-sort: [THROW_ID_02*]",schema:{progressFn:["function","false","null"]}}),i.strictlyTwoElementsInRangeArrays&&!e.every((t,e)=>2===t.length||(s=e,a=t.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${o(s)} range (${JSON.stringify(e[s],null,4)}) has not two but ${a} elements!`);if(!e.every((e,r)=>!(!t(e[0],{includeZero:!0})||!t(e[1],{includeZero:!0}))||(s=r,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${o(s)} range (${JSON.stringify(e[s],null,4)}) does not consist of only natural numbers!`);const u=e.length*e.length;let c=0;return Array.from(e).sort((t,e)=>(i.progressFn&&(c++,i.progressFn(Math.floor(100*c/u))),t[0]===e[0]?t[1]<e[1]?-1:t[1]>e[1]?1:0:t[0]<e[0]?-1:1))}function Et(t,e){function r(t){return"string"==typeof t}if(!Array.isArray(t))return t;const n={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let o;if(e){if(!O(e))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(e,null,4)} (type ${typeof e})`);if((o=Object.assign({},n,e)).progressFn&&O(o.progressFn)&&!Object.keys(o.progressFn).length)o.progressFn=null;else if(o.progressFn&&"function"!=typeof o.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof o.progressFn}", equal to ${JSON.stringify(o.progressFn,null,4)}`);if(o.mergeType&&1!==o.mergeType&&2!==o.mergeType)if(r(o.mergeType)&&"1"===o.mergeType.trim())o.mergeType=1;else{if(!r(o.mergeType)||"2"!==o.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof o.mergeType}", equal to ${JSON.stringify(o.mergeType,null,4)}`);o.mergeType=2}if("boolean"!=typeof o.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof o.joinRangesThatTouchEdges}", equal to ${JSON.stringify(o.joinRangesThatTouchEdges,null,4)}`)}else o=p(n);const i=p(t).filter(t=>void 0!==t[2]||t[0]!==t[1]);let s,a,u;const c=(s=o.progressFn?At(i,{progressFn:t=>{(u=Math.floor(t/5))!==a&&(a=u,o.progressFn(u))}}):At(i)).length-1;for(let t=c;t>0;t--)o.progressFn&&(u=Math.floor(78*(1-t/c))+21)!==a&&u>a&&(a=u,o.progressFn(u)),(s[t][0]<=s[t-1][0]||!o.joinRangesThatTouchEdges&&s[t][0]<s[t-1][1]||o.joinRangesThatTouchEdges&&s[t][0]<=s[t-1][1])&&(s[t-1][0]=Math.min(s[t][0],s[t-1][0]),s[t-1][1]=Math.max(s[t][1],s[t-1][1]),void 0!==s[t][2]&&(s[t-1][0]>=s[t][0]||s[t-1][1]<=s[t][1])&&null!==s[t-1][2]&&(null===s[t][2]&&null!==s[t-1][2]?s[t-1][2]=null:void 0!==s[t-1][2]?2===o.mergeType&&s[t-1][0]===s[t][0]?s[t-1][2]=s[t][2]:s[t-1][2]+=s[t][2]:s[t-1][2]=s[t][2]),s.splice(t,1),t=s.length);return s}const It=" ";function Nt(t,e=!0,r){if(!(r.trim().length||t.length&&"\n"!==r&&r!==It&&" "===(e?t[t.length-1]:t[0])||t.length&&"\n"===(e?t[t.length-1]:t[0])&&"\n"!==r&&r!==It))if(e){if(("\n"===r||r===It)&&t.length&&" "===t[t.length-1])for(;t.length&&" "===t[t.length-1];)t.pop();t.push(r===It||"\n"===r?r:" ")}else{if(("\n"===r||r===It)&&t.length&&" "===t[0])for(;t.length&&" "===t[0];)t.shift();t.unshift(r===It||"\n"===r?r:" ")}}function kt(t,e){if("string"==typeof t&&t.length){let r,n,o=!1;if(t.includes("\r\n")&&(o=!0),r=e&&"number"==typeof e?e:1,""===t.trim()){const e=[];for(n=r,Array.from(t).forEach(t=>{("\n"!==t||n)&&("\n"===t&&n--,Nt(e,!0,t))});e.length>1&&" "===e[e.length-1];)e.pop();return e.join("")}const i=[];if(n=r,""===t[0].trim())for(let e=0,r=t.length;e<r&&0===t[e].trim().length;e++)("\n"!==t[e]||n)&&("\n"===t[e]&&n--,Nt(i,!0,t[e]));const s=[];if(n=r,""===t.slice(-1).trim())for(let e=t.length;e--&&0===t[e].trim().length;)("\n"!==t[e]||n)&&("\n"===t[e]&&n--,Nt(s,!1,t[e]));return o?`${i.join("")}${t.trim()}${s.join("")}`.replace(/\n/g,"\r\n"):i.join("")+t.trim()+s.join("")}return t}function Rt(t){return null!=t}const Wt=Array.isArray,xt=Number.isInteger;function Mt(t){return"string"==typeof t}function Dt(t){return e(t,{includeZero:!0})?parseInt(t,10):t}class Pt{constructor(t){const e=Object.assign({},{limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1},t);if(e.mergeType&&1!==e.mergeType&&2!==e.mergeType)if(Mt(e.mergeType)&&"1"===e.mergeType.trim())e.mergeType=1;else{if(!Mt(e.mergeType)||"2"!==e.mergeType.trim())throw new Error(`ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof e.mergeType}", equal to ${JSON.stringify(e.mergeType,null,4)}`);e.mergeType=2}this.opts=e}add(r,n,o,...i){if(i.length>0)throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: ${JSON.stringify(i,null,4)}`);if(!Rt(r)&&!Rt(n))return;if(Rt(r)&&!Rt(n)){if(Wt(r)){if(r.length){if(r.some(t=>Wt(t)))return void r.forEach(t=>{Wt(t)&&this.add(...t)});r.length>1&&xt(Dt(r[0]))&&xt(Dt(r[1]))&&this.add(...r)}return}throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set (${JSON.stringify(r,null,0)}) but second-one, "to" is not (${JSON.stringify(n,null,0)})`)}if(!Rt(r)&&Rt(n))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set (${JSON.stringify(n,null,0)}) but first-one, "from" is not (${JSON.stringify(r,null,0)})`);const s=e(r,{includeZero:!0})?parseInt(r,10):r,a=e(n,{includeZero:!0})?parseInt(n,10):n;if(xt(o)&&(o=String(o)),!t(s,{includeZero:!0})||!t(a,{includeZero:!0}))throw t(s,{includeZero:!0})?new TypeError(`ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it's of a type "${typeof a}" equal to: ${JSON.stringify(a,null,4)}`):new TypeError(`ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it's of a type "${typeof s}" equal to: ${JSON.stringify(s,null,4)}`);if(Rt(o)&&!Mt(o)&&!xt(o))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ${typeof o}, equal to:\n${JSON.stringify(o,null,4)}`);if(Rt(this.slices)&&Wt(this.last())&&s===this.last()[1]){if(this.last()[1]=a,this.last()[2],null!==this.last()[2]&&Rt(o)){let t=!(Rt(this.last()[2])&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?o:this.last()[2]+o;this.opts.limitToBeAddedWhitespace&&(t=kt(t,this.opts.limitLinebreaksCount)),Mt(t)&&!t.length||(this.last()[2]=t)}}else{this.slices||(this.slices=[]);const t=void 0===o||Mt(o)&&!o.length?[s,a]:[s,a,this.opts.limitToBeAddedWhitespace?kt(o,this.opts.limitLinebreaksCount):o];this.slices.push(t)}}push(t,e,r,...n){this.add(t,e,r,...n)}current(){return null!=this.slices?(this.slices=Et(this.slices,{mergeType:this.opts.mergeType}),this.opts.limitToBeAddedWhitespace?this.slices.map(t=>Rt(t[2])?[t[0],t[1],kt(t[2],this.opts.limitLinebreaksCount)]:t):this.slices):null}wipe(){this.slices=void 0}replace(t){if(Wt(t)&&t.length){if(!Wt(t[0])||!xt(t[0][0]))throw new Error(`ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ${JSON.stringify(t[0],null,4)} should be an array and its first element should be an integer, a string index.`);this.slices=p(t)}else this.slices=void 0}last(){return void 0!==this.slices&&Array.isArray(this.slices)?this.slices[this.slices.length-1]:null}}const Ft=Array.isArray;function Ht(t){return null!=t}function Jt(t,e,r){if(e>>=0,r=Ht(r)?String(r):" ",!Ht(t))return t;if("number"==typeof t)t=String(t);else if("string"!=typeof t)return t;return t.length>=e?t:((e-=t.length)>r.length&&(r+=r.repeat(e/r.length)),r.slice(0,e)+t)}return function(r,n){if("string"!=typeof r||0===r.length)return r;function i(t){return/[0-9]/.test(t)}var s=Object.assign({},{padStart:3},n);(!s.padStart||"number"!=typeof s.padStart||"number"==typeof s.padStart&&s.padStart<0)&&(s.padStart=0);var a,u,c=new Pt,l=r.length,f=null,p=null,h=null,y=1,g=!1,d=null;for(s.padStart&&l>45e3&&(s.padStart=4),a=0;a<l;a++){if(("\n"===r[a]||"\r"===r[a]&&"\n"!==r[a+1])&&y++,d&&!i(r[a])&&a>d&&(c.push(d,a,s.padStart?Jt(y,s.padStart,"0"):"".concat(y)),d=null,g=!0),f&&f.start<a&&!g&&!d&&i(r[a])&&(d=a),f&&f.start<a&&!g&&(u=r[a],/[A-Za-z]/.test(u))){if("\\"===r[a-1]&&"u"===r[a]&&"0"===r[a+1]&&"0"===r[a+2]&&"1"===r[a+3]&&("b"===r[a+4]||"B"===r[a+5])&&"["===r[a+5]){var m=void 0;i(r[a+6])?m=a+6:"$"===r[a+6]&&"{"===r[a+7]&&i(r[a+8])&&(m=a+8);var b=void 0;if(m)for(var v=m;v<l;v++)if(!i(r[v])){b=v;break}var _=void 0;if("m"===r[b]?_=b:"}"===r[b]&&"m"===r[b+1]&&(_=b+1),!_){g=!0;continue}if("$"===r[_+1]&&"{"===r[_+2]&&"`"===r[_+3]){a=_+3;continue}}g=!0}f&&f.start<a&&f.type===r[a]&&(f=null,p=null,h=null,d=null,g=!1),!f&&p&&p<a&&h&&h<a&&r[a].trim().length&&('"'===r[a]||"'"===r[a]||"`"===r[a]?((f={}).start=a,f.type=r[a],g=!1):"/"!==r[a]&&(p=null,h=null,d=null)),!h&&r[a].trim().length&&p&&p<=a&&("("===r[a]?h=a:(p=null,d=null)),"c"!==r[a]||"o"!==r[a+1]||"n"!==r[a+2]||"s"!==r[a+3]||"o"!==r[a+4]||"l"!==r[a+5]||"e"!==r[a+6]||"."!==r[a+7]||"l"!==r[a+8]||"o"!==r[a+9]||"g"!==r[a+10]||(p=a+11,a+=10)}return c.current()?function(r,n,i){let s=0,a=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof r)throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);if(null===n)return r;if(!Ft(n))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof n}, equal to: ${JSON.stringify(n,null,4)}`);if(i&&"function"!=typeof i)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof i}, equal to: ${JSON.stringify(i,null,4)}`);Ft(n)&&(t(n[0],{includeZero:!0})||e(n[0],{includeZero:!0}))&&(t(n[1],{includeZero:!0})||e(n[1],{includeZero:!0}))&&(n=[n]);const u=n.length;let c=0;n.forEach((r,l)=>{if(i&&(s=Math.floor(c/u*10))!==a&&(a=s,i(s)),!Ft(r))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${o(l)} element not an array: ${JSON.stringify(r,null,4)}, which is ${typeof r}`);if(!t(r[0],{includeZero:!0})){if(!e(r[0],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${o(l)} element, array [${r[0]},${r[1]}]. That array has first element not an integer, but ${typeof r[0]}, equal to: ${JSON.stringify(r[0],null,4)}. Computer doesn't like this.`);n[l][0]=Number.parseInt(n[l][0],10)}if(!t(r[1],{includeZero:!0})){if(!e(r[1],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${o(l)} element, array [${r[0]},${r[1]}]. That array has second element not an integer, but ${typeof r[1]}, equal to: ${JSON.stringify(r[1],null,4)}. Computer doesn't like this.`);n[l][1]=Number.parseInt(n[l][1],10)}c++});const l=Et(n,{progressFn:t=>{i&&(s=10+Math.floor(t/10))!==a&&(a=s,i(s))}}),f=l.length;if(f>0){const t=r.slice(l[f-1][1]);r=l.reduce((t,e,n,o)=>{i&&(s=20+Math.floor(n/f*80))!==a&&(a=s,i(s));const u=0===n?0:o[n-1][1],c=o[n][0];return t+r.slice(u,c)+(function(t){return null!=t}(o[n][2])?o[n][2]:"")},""),r+=t}return r}(r,c.current()):(f=void 0,p=void 0,h=void 0,y=void 0,g=void 0,d=void 0,y=void 0,r)}}));
