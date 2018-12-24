/**
 * array-group-str-omit-num-char
 * Groups array of strings by omitting number characters
 * Version: 1.1.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://bitbucket.org/codsen/array-group-str-omit-num-char/
 */

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self).arrayGroupStrOmitNumChar=n()}(this,function(){"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}var n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,n){return t(n={exports:{}},n.exports),n.exports}var r=e(function(t,e){var r,o,i,a,u,c,f,s,l,p,h,y,g,d,_,v,m,w,b,$;t.exports=(r="function"==typeof Promise,o="object"==typeof self?self:n,i="undefined"!=typeof Symbol,a="undefined"!=typeof Map,u="undefined"!=typeof Set,c="undefined"!=typeof WeakMap,f="undefined"!=typeof WeakSet,s="undefined"!=typeof DataView,l=i&&void 0!==Symbol.iterator,p=i&&void 0!==Symbol.toStringTag,h=u&&"function"==typeof Set.prototype.entries,y=a&&"function"==typeof Map.prototype.entries,g=h&&Object.getPrototypeOf((new Set).entries()),d=y&&Object.getPrototypeOf((new Map).entries()),_=l&&"function"==typeof Array.prototype[Symbol.iterator],v=_&&Object.getPrototypeOf([][Symbol.iterator]()),m=l&&"function"==typeof String.prototype[Symbol.iterator],w=m&&Object.getPrototypeOf(""[Symbol.iterator]()),b=8,$=-1,function(t){var n=typeof t;if("object"!==n)return n;if(null===t)return"null";if(t===o)return"global";if(Array.isArray(t)&&(!1===p||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var e=p&&t[Symbol.toStringTag];if("string"==typeof e)return e;var i=Object.getPrototypeOf(t);return i===RegExp.prototype?"RegExp":i===Date.prototype?"Date":r&&i===Promise.prototype?"Promise":u&&i===Set.prototype?"Set":a&&i===Map.prototype?"Map":f&&i===WeakSet.prototype?"WeakSet":c&&i===WeakMap.prototype?"WeakMap":s&&i===DataView.prototype?"DataView":a&&i===d?"Map Iterator":u&&i===g?"Set Iterator":_&&i===v?"Array Iterator":m&&i===w?"String Iterator":null===i?"Object":Object.prototype.toString.call(t).slice(b,$)})});function o(t,n,e){if(n!=n)return function(t,n,e,r){for(var o=t.length,i=e+(r?1:-1);r?i--:++i<o;)if(n(t[i],i,t))return i;return-1}(t,a,e);for(var r=e-1,o=t.length;++r<o;)if(t[r]===n)return r;return-1}function i(t,n,e,r){for(var o=e-1,i=t.length;++o<i;)if(r(t[o],n))return o;return-1}function a(t){return t!=t}var u=Array.prototype.splice;function c(t,n,e,r){var a,c=r?i:o,f=-1,s=n.length,l=t;for(t===n&&(n=function(t,n){var e=-1,r=t.length;n||(n=Array(r));for(;++e<r;)n[e]=t[e];return n}(n)),e&&(l=function(t,n){for(var e=-1,r=t?t.length:0,o=Array(r);++e<r;)o[e]=n(t[e],e,t);return o}(t,(a=e,function(t){return a(t)})));++f<s;)for(var p=0,h=n[f],y=e?e(h):h;(p=c(l,y,p,r))>-1;)l!==t&&u.call(l,p,1),u.call(t,p,1);return t}var f=function(t,n){return t&&t.length&&n&&n.length?c(t,n):t},s=e(function(t,e){var r=200,o="__lodash_hash_undefined__",i=9007199254740991,a="[object Arguments]",u="[object Boolean]",c="[object Date]",f="[object Function]",s="[object GeneratorFunction]",l="[object Map]",p="[object Number]",h="[object Object]",y="[object RegExp]",g="[object Set]",d="[object String]",_="[object Symbol]",v="[object ArrayBuffer]",m="[object DataView]",w="[object Float32Array]",b="[object Float64Array]",$="[object Int8Array]",O="[object Int16Array]",j="[object Int32Array]",T="[object Uint8Array]",S="[object Uint8ClampedArray]",W="[object Uint16Array]",E="[object Uint32Array]",A=/\w*$/,N=/^\[object .+?Constructor\]$/,I=/^(?:0|[1-9]\d*)$/,M={};M[a]=M["[object Array]"]=M[v]=M[m]=M[u]=M[c]=M[w]=M[b]=M[$]=M[O]=M[j]=M[l]=M[p]=M[h]=M[y]=M[g]=M[d]=M[_]=M[T]=M[S]=M[W]=M[E]=!0,M["[object Error]"]=M[f]=M["[object WeakMap]"]=!1;var R="object"==typeof n&&n&&n.Object===Object&&n,k="object"==typeof self&&self&&self.Object===Object&&self,C=R||k||Function("return this")(),x=e&&!e.nodeType&&e,L=x&&t&&!t.nodeType&&t,P=L&&L.exports===x;function H(t,n){return t.set(n[0],n[1]),t}function J(t,n){return t.add(n),t}function Z(t,n,e,r){var o=-1,i=t?t.length:0;for(r&&i&&(e=t[++o]);++o<i;)e=n(e,t[o],o,t);return e}function V(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(t){}return n}function F(t){var n=-1,e=Array(t.size);return t.forEach(function(t,r){e[++n]=[r,t]}),e}function q(t,n){return function(e){return t(n(e))}}function B(t){var n=-1,e=Array(t.size);return t.forEach(function(t){e[++n]=t}),e}var U,z=Array.prototype,D=Function.prototype,G=Object.prototype,Q=C["__core-js_shared__"],K=(U=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+U:"",X=D.toString,Y=G.hasOwnProperty,tt=G.toString,nt=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=P?C.Buffer:void 0,rt=C.Symbol,ot=C.Uint8Array,it=q(Object.getPrototypeOf,Object),at=Object.create,ut=G.propertyIsEnumerable,ct=z.splice,ft=Object.getOwnPropertySymbols,st=et?et.isBuffer:void 0,lt=q(Object.keys,Object),pt=Lt(C,"DataView"),ht=Lt(C,"Map"),yt=Lt(C,"Promise"),gt=Lt(C,"Set"),dt=Lt(C,"WeakMap"),_t=Lt(Object,"create"),vt=Vt(pt),mt=Vt(ht),wt=Vt(yt),bt=Vt(gt),$t=Vt(dt),Ot=rt?rt.prototype:void 0,jt=Ot?Ot.valueOf:void 0;function Tt(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function St(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function Wt(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function Et(t){this.__data__=new St(t)}function At(t,n){var e=qt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Bt(t)}(t)&&Y.call(t,"callee")&&(!ut.call(t,"callee")||tt.call(t)==a)}(t)?function(t,n){for(var e=-1,r=Array(t);++e<t;)r[e]=n(e);return r}(t.length,String):[],r=e.length,o=!!r;for(var i in t)!n&&!Y.call(t,i)||o&&("length"==i||Jt(i,r))||e.push(i);return e}function Nt(t,n,e){var r=t[n];Y.call(t,n)&&Ft(r,e)&&(void 0!==e||n in t)||(t[n]=e)}function It(t,n){for(var e=t.length;e--;)if(Ft(t[e][0],n))return e;return-1}function Mt(t,n,e,r,o,i,N){var I;if(r&&(I=i?r(t,o,i,N):r(t)),void 0!==I)return I;if(!Dt(t))return t;var R=qt(t);if(R){if(I=function(t){var n=t.length,e=t.constructor(n);n&&"string"==typeof t[0]&&Y.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!n)return function(t,n){var e=-1,r=t.length;n||(n=Array(r));for(;++e<r;)n[e]=t[e];return n}(t,I)}else{var k=Ht(t),C=k==f||k==s;if(Ut(t))return function(t,n){if(n)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,n);if(k==h||k==a||C&&!i){if(V(t))return i?t:{};if(I=function(t){return"function"!=typeof t.constructor||Zt(t)?{}:(n=it(t),Dt(n)?at(n):{});var n}(C?{}:t),!n)return function(t,n){return Ct(t,Pt(t),n)}(t,function(t,n){return t&&Ct(n,Gt(n),t)}(I,t))}else{if(!M[k])return i?t:{};I=function(t,n,e,r){var o=t.constructor;switch(n){case v:return kt(t);case u:case c:return new o(+t);case m:return function(t,n){var e=n?kt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,r);case w:case b:case $:case O:case j:case T:case S:case W:case E:return function(t,n){var e=n?kt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,r);case l:return function(t,n,e){return Z(n?e(F(t),!0):F(t),H,new t.constructor)}(t,r,e);case p:case d:return new o(t);case y:return(f=new(a=t).constructor(a.source,A.exec(a))).lastIndex=a.lastIndex,f;case g:return function(t,n,e){return Z(n?e(B(t),!0):B(t),J,new t.constructor)}(t,r,e);case _:return i=t,jt?Object(jt.call(i)):{}}var i;var a,f}(t,k,Mt,n)}}N||(N=new Et);var x=N.get(t);if(x)return x;if(N.set(t,I),!R)var L=e?function(t){return function(t,n,e){var r=n(t);return qt(t)?r:function(t,n){for(var e=-1,r=n.length,o=t.length;++e<r;)t[o+e]=n[e];return t}(r,e(t))}(t,Gt,Pt)}(t):Gt(t);return function(t,n){for(var e=-1,r=t?t.length:0;++e<r&&!1!==n(t[e],e,t););}(L||t,function(o,i){L&&(o=t[i=o]),Nt(I,i,Mt(o,n,e,r,i,t,N))}),I}function Rt(t){return!(!Dt(t)||(n=t,K&&K in n))&&(zt(t)||V(t)?nt:N).test(Vt(t));var n}function kt(t){var n=new t.constructor(t.byteLength);return new ot(n).set(new ot(t)),n}function Ct(t,n,e,r){e||(e={});for(var o=-1,i=n.length;++o<i;){var a=n[o],u=r?r(e[a],t[a],a,e,t):void 0;Nt(e,a,void 0===u?t[a]:u)}return e}function xt(t,n){var e,r,o=t.__data__;return("string"==(r=typeof(e=n))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e)?o["string"==typeof n?"string":"hash"]:o.map}function Lt(t,n){var e=function(t,n){return null==t?void 0:t[n]}(t,n);return Rt(e)?e:void 0}Tt.prototype.clear=function(){this.__data__=_t?_t(null):{}},Tt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Tt.prototype.get=function(t){var n=this.__data__;if(_t){var e=n[t];return e===o?void 0:e}return Y.call(n,t)?n[t]:void 0},Tt.prototype.has=function(t){var n=this.__data__;return _t?void 0!==n[t]:Y.call(n,t)},Tt.prototype.set=function(t,n){return this.__data__[t]=_t&&void 0===n?o:n,this},St.prototype.clear=function(){this.__data__=[]},St.prototype.delete=function(t){var n=this.__data__,e=It(n,t);return!(e<0||(e==n.length-1?n.pop():ct.call(n,e,1),0))},St.prototype.get=function(t){var n=this.__data__,e=It(n,t);return e<0?void 0:n[e][1]},St.prototype.has=function(t){return It(this.__data__,t)>-1},St.prototype.set=function(t,n){var e=this.__data__,r=It(e,t);return r<0?e.push([t,n]):e[r][1]=n,this},Wt.prototype.clear=function(){this.__data__={hash:new Tt,map:new(ht||St),string:new Tt}},Wt.prototype.delete=function(t){return xt(this,t).delete(t)},Wt.prototype.get=function(t){return xt(this,t).get(t)},Wt.prototype.has=function(t){return xt(this,t).has(t)},Wt.prototype.set=function(t,n){return xt(this,t).set(t,n),this},Et.prototype.clear=function(){this.__data__=new St},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,n){var e=this.__data__;if(e instanceof St){var o=e.__data__;if(!ht||o.length<r-1)return o.push([t,n]),this;e=this.__data__=new Wt(o)}return e.set(t,n),this};var Pt=ft?q(ft,Object):function(){return[]},Ht=function(t){return tt.call(t)};function Jt(t,n){return!!(n=null==n?i:n)&&("number"==typeof t||I.test(t))&&t>-1&&t%1==0&&t<n}function Zt(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||G)}function Vt(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ft(t,n){return t===n||t!=t&&n!=n}(pt&&Ht(new pt(new ArrayBuffer(1)))!=m||ht&&Ht(new ht)!=l||yt&&"[object Promise]"!=Ht(yt.resolve())||gt&&Ht(new gt)!=g||dt&&"[object WeakMap]"!=Ht(new dt))&&(Ht=function(t){var n=tt.call(t),e=n==h?t.constructor:void 0,r=e?Vt(e):void 0;if(r)switch(r){case vt:return m;case mt:return l;case wt:return"[object Promise]";case bt:return g;case $t:return"[object WeakMap]"}return n});var qt=Array.isArray;function Bt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}(t.length)&&!zt(t)}var Ut=st||function(){return!1};function zt(t){var n=Dt(t)?tt.call(t):"";return n==f||n==s}function Dt(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function Gt(t){return Bt(t)?At(t):function(t){if(!Zt(t))return lt(t);var n=[];for(var e in Object(t))Y.call(t,e)&&"constructor"!=e&&n.push(e);return n}(t)}t.exports=function(t){return Mt(t,!0,!0)}}),l="[object Object]";var p,h,y=Function.prototype,g=Object.prototype,d=y.toString,_=g.hasOwnProperty,v=d.call(Object),m=g.toString,w=(p=Object.getPrototypeOf,h=Object,function(t){return p(h(t))});var b=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||m.call(t)!=l||function(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(t){}return n}(t))return!1;var n=w(t);if(null===n)return!0;var e=_.call(n,"constructor")&&n.constructor;return"function"==typeof e&&e instanceof e&&d.call(e)==v};const $=Array.isArray;function O(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function j(t,n){return function t(n,e,r){const o=s(n);let i,a,u,c,f;if((r=Object.assign({depth:-1,path:""},r)).depth+=1,$(o))for(i=0,a=o.length;i<a;i++){const n=`${r.path}.${i}`;void 0!==o[i]?(r.parent=s(o),u=t(e(o[i],void 0,Object.assign({},r,{path:O(n)})),e,Object.assign({},r,{path:O(n)})),Number.isNaN(u)&&i<o.length?(o.splice(i,1),i-=1):o[i]=u):o.splice(i,1)}else if(b(o))for(i=0,a=(c=Object.keys(o)).length;i<a;i++){f=c[i];const n=`${r.path}.${f}`;0===r.depth&&null!=f&&(r.topmostKey=f),r.parent=s(o),u=t(e(f,o[f],Object.assign({},r,{path:O(n)})),e,Object.assign({},r,{path:O(n)})),Number.isNaN(u)?delete o[f]:o[f]=u}return o}(t,n,{})}var T="__lodash_hash_undefined__",S=9007199254740991,W="[object Function]",E="[object GeneratorFunction]",A=/^\[object .+?Constructor\]$/,N="object"==typeof n&&n&&n.Object===Object&&n,I="object"==typeof self&&self&&self.Object===Object&&self,M=N||I||Function("return this")();function R(t,n){return!!(t?t.length:0)&&function(t,n,e){if(n!=n)return function(t,n,e,r){var o=t.length,i=e+(r?1:-1);for(;r?i--:++i<o;)if(n(t[i],i,t))return i;return-1}(t,x,e);var r=e-1,o=t.length;for(;++r<o;)if(t[r]===n)return r;return-1}(t,n,0)>-1}function k(t,n,e){for(var r=-1,o=t?t.length:0;++r<o;)if(e(n,t[r]))return!0;return!1}function C(t,n){for(var e=-1,r=t?t.length:0,o=Array(r);++e<r;)o[e]=n(t[e],e,t);return o}function x(t){return t!=t}function L(t){return function(n){return t(n)}}function P(t,n){return t.has(n)}var H,J=Array.prototype,Z=Function.prototype,V=Object.prototype,F=M["__core-js_shared__"],q=(H=/[^.]+$/.exec(F&&F.keys&&F.keys.IE_PROTO||""))?"Symbol(src)_1."+H:"",B=Z.toString,U=V.hasOwnProperty,z=V.toString,D=RegExp("^"+B.call(U).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),G=J.splice,Q=Math.max,K=Math.min,X=ct(M,"Map"),Y=ct(Object,"create");function tt(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function nt(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function et(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function rt(t){var n=-1,e=t?t.length:0;for(this.__data__=new et;++n<e;)this.add(t[n])}function ot(t,n){for(var e,r,o=t.length;o--;)if((e=t[o][0])===(r=n)||e!=e&&r!=r)return o;return-1}function it(t){return!(!st(t)||(n=t,q&&q in n))&&(ft(t)||function(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(t){}return n}(t)?D:A).test(function(t){if(null!=t){try{return B.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var n}function at(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=S}(t.length)&&!ft(t)}(t)}(t)?t:[]}function ut(t,n){var e,r,o=t.__data__;return("string"==(r=typeof(e=n))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e)?o["string"==typeof n?"string":"hash"]:o.map}function ct(t,n){var e=function(t,n){return null==t?void 0:t[n]}(t,n);return it(e)?e:void 0}function ft(t){var n=st(t)?z.call(t):"";return n==W||n==E}function st(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}tt.prototype.clear=function(){this.__data__=Y?Y(null):{}},tt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},tt.prototype.get=function(t){var n=this.__data__;if(Y){var e=n[t];return e===T?void 0:e}return U.call(n,t)?n[t]:void 0},tt.prototype.has=function(t){var n=this.__data__;return Y?void 0!==n[t]:U.call(n,t)},tt.prototype.set=function(t,n){return this.__data__[t]=Y&&void 0===n?T:n,this},nt.prototype.clear=function(){this.__data__=[]},nt.prototype.delete=function(t){var n=this.__data__,e=ot(n,t);return!(e<0||(e==n.length-1?n.pop():G.call(n,e,1),0))},nt.prototype.get=function(t){var n=this.__data__,e=ot(n,t);return e<0?void 0:n[e][1]},nt.prototype.has=function(t){return ot(this.__data__,t)>-1},nt.prototype.set=function(t,n){var e=this.__data__,r=ot(e,t);return r<0?e.push([t,n]):e[r][1]=n,this},et.prototype.clear=function(){this.__data__={hash:new tt,map:new(X||nt),string:new tt}},et.prototype.delete=function(t){return ut(this,t).delete(t)},et.prototype.get=function(t){return ut(this,t).get(t)},et.prototype.has=function(t){return ut(this,t).has(t)},et.prototype.set=function(t,n){return ut(this,t).set(t,n),this},rt.prototype.add=rt.prototype.push=function(t){return this.__data__.set(t,T),this},rt.prototype.has=function(t){return this.__data__.has(t)};var lt=function(t,n){return n=Q(void 0===n?t.length-1:n,0),function(){for(var e=arguments,r=-1,o=Q(e.length-n,0),i=Array(o);++r<o;)i[r]=e[n+r];r=-1;for(var a=Array(n+1);++r<n;)a[r]=e[r];return a[n]=i,function(t,n,e){switch(e.length){case 0:return t.call(n);case 1:return t.call(n,e[0]);case 2:return t.call(n,e[0],e[1]);case 3:return t.call(n,e[0],e[1],e[2])}return t.apply(n,e)}(t,this,a)}}(function(t){var n=C(t,at);return n.length&&n[0]===t[0]?function(t,n,e){for(var r=e?k:R,o=t[0].length,i=t.length,a=i,u=Array(i),c=1/0,f=[];a--;){var s=t[a];a&&n&&(s=C(s,L(n))),c=K(s.length,c),u[a]=!e&&(n||o>=120&&s.length>=120)?new rt(a&&s):void 0}s=t[0];var l=-1,p=u[0];t:for(;++l<o&&f.length<c;){var h=s[l],y=n?n(h):h;if(h=e||0!==h?h:0,!(p?P(p,y):r(f,y,e))){for(a=i;--a;){var g=u[a];if(!(g?P(g,y):r(t[a],y,e)))continue t}p&&p.push(y),f.push(h)}}return f}(n):[]});function pt(t){return"string"==typeof t?t.length>0?[t]:[]:t}var ht=e(function(t){t.exports=function(){var t=Object.prototype.toString;function n(t,n){return null!=t&&Object.prototype.hasOwnProperty.call(t,n)}function e(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var e in t)if(n(t,e))return!1;return!0}return!1}function r(n){return t.call(n)}var o=Array.isArray||function(n){return"[object Array]"===t.call(n)};function i(t){var n=parseInt(t);return n.toString()===t?n:t}function a(t){t=t||{};var a=function(t){return Object.keys(a).reduce(function(n,e){return"create"===e?n:("function"==typeof a[e]&&(n[e]=a[e].bind(a,t)),n)},{})};function u(e,r){return t.includeInheritedProps||"number"==typeof r&&Array.isArray(e)||n(e,r)}function c(t,n){if(u(t,n))return t[n]}function f(t,n,e,r){if("number"==typeof n&&(n=[n]),!n||0===n.length)return t;if("string"==typeof n)return f(t,n.split(".").map(i),e,r);var o=n[0],a=c(t,o);return 1===n.length?(void 0!==a&&r||(t[o]=e),a):(void 0===a&&("number"==typeof n[1]?t[o]=[]:t[o]={}),f(t[o],n.slice(1),e,r))}return a.has=function(e,r){if("number"==typeof r?r=[r]:"string"==typeof r&&(r=r.split(".")),!r||0===r.length)return!!e;for(var a=0;a<r.length;a++){var u=i(r[a]);if(!("number"==typeof u&&o(e)&&u<e.length||(t.includeInheritedProps?u in Object(e):n(e,u))))return!1;e=e[u]}return!0},a.ensureExists=function(t,n,e){return f(t,n,e,!0)},a.set=function(t,n,e,r){return f(t,n,e,r)},a.insert=function(t,n,e,r){var i=a.get(t,n);r=~~r,o(i)||(i=[],a.set(t,n,i)),i.splice(r,0,e)},a.empty=function(t,n){var i,c;if(!e(n)&&null!=t&&(i=a.get(t,n))){if("string"==typeof i)return a.set(t,n,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===r(t)}(i))return a.set(t,n,!1);if("number"==typeof i)return a.set(t,n,0);if(o(i))i.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===r(t)}(i))return a.set(t,n,null);for(c in i)u(i,c)&&delete i[c]}}},a.push=function(t,n){var e=a.get(t,n);o(e)||(e=[],a.set(t,n,e)),e.push.apply(e,Array.prototype.slice.call(arguments,2))},a.coalesce=function(t,n,e){for(var r,o=0,i=n.length;o<i;o++)if(void 0!==(r=a.get(t,n[o])))return r;return e},a.get=function(t,n,e){if("number"==typeof n&&(n=[n]),!n||0===n.length)return t;if(null==t)return e;if("string"==typeof n)return a.get(t,n.split("."),e);var r=i(n[0]),o=c(t,r);return void 0===o?e:1===n.length?o:a.get(t[r],n.slice(1),e)},a.del=function(t,n){if("number"==typeof n&&(n=[n]),null==t)return t;if(e(n))return t;if("string"==typeof n)return a.del(t,n.split("."));var r=i(n[0]);return u(t,r)?1!==n.length?a.del(t[r],n.slice(1)):(o(t)?t.splice(r,1):delete t[r],t):t},a}var u=a();return u.create=a,u.withInheritedProps=a({includeInheritedProps:!0}),u}()}),yt=function(t){var n=t%100;if(n>=10&&n<=20)return"th";var e=t%10;return 1===e?"st":2===e?"nd":3===e?"rd":"th"};function gt(t){if("number"!=typeof t)throw new TypeError("Expected Number, got "+typeof t+" "+t);return t+yt(t)}gt.indicator=yt;var dt=gt,_t=/[|\\{}()[\]^$+*?.]/g,vt=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(_t,"\\$&")};const mt=new Map;function wt(t,n){const e=Object.assign({caseSensitive:!1},n),r=t+JSON.stringify(e);if(mt.has(r))return mt.get(r);const o="!"===t[0];o&&(t=t.slice(1)),t=vt(t).replace(/\\\*/g,".*");const i=new RegExp(`^${t}$`,e.caseSensitive?"":"i");return i.negated=o,mt.set(r,i),i}var bt=(t,n,e)=>{if(!Array.isArray(t)||!Array.isArray(n))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof n}`);if(0===n.length)return t;const r="!"===n[0][0];n=n.map(t=>wt(t,e));const o=[];for(const e of t){let t=r;for(const r of n)r.test(e)&&(t=!r.negated);t&&o.push(e)}return o};function $t(t,n,e){return function t(n,e,o,i=!0){const a=Object.prototype.hasOwnProperty;function u(t){return null!=t}function c(t){return"Object"===r(t)}function s(t,n){return n=pt(n),Array.from(t).filter(t=>!n.some(n=>bt.isMatch(t,n,{caseSensitive:!0})))}const l=["any","anything","every","everything","all","whatever","whatevs"],p=Array.isArray;if(!u(n))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const h={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};let y;if(y=u(o)&&c(o)?Object.assign({},h,o):Object.assign({},h),u(y.ignoreKeys)&&y.ignoreKeys?y.ignoreKeys=pt(y.ignoreKeys):y.ignoreKeys=[],u(y.ignorePaths)&&y.ignorePaths?y.ignorePaths=pt(y.ignorePaths):y.ignorePaths=[],u(y.acceptArraysIgnore)&&y.acceptArraysIgnore?y.acceptArraysIgnore=pt(y.acceptArraysIgnore):y.acceptArraysIgnore=[],y.msg="string"==typeof y.msg?y.msg.trim():y.msg,":"===y.msg[y.msg.length-1]&&(y.msg=y.msg.slice(0,y.msg.length-1).trim()),y.schema&&(Object.keys(y.schema).forEach(t=>{if(c(y.schema[t])){const n={};j(y.schema[t],(e,r,o)=>{const i=void 0!==r?r:e;return p(i)||c(i)||(n[`${t}.${o.path}`]=i),i}),delete y.schema[t],y.schema=Object.assign(y.schema,n)}}),Object.keys(y.schema).forEach(t=>{p(y.schema[t])||(y.schema[t]=[y.schema[t]]),y.schema[t]=y.schema[t].map(String).map(t=>t.toLowerCase()).map(t=>t.trim())})),u(e)||(e={}),i&&t(y,h,{enforceStrictKeyset:!1},!1),y.enforceStrictKeyset)if(u(y.schema)&&Object.keys(y.schema).length>0){if(0!==s(f(Object.keys(n),Object.keys(e).concat(Object.keys(y.schema))),y.ignoreKeys).length){const t=f(Object.keys(n),Object.keys(e).concat(Object.keys(y.schema)));throw new TypeError(`${y.msg}: ${y.optsVarName}.enforceStrictKeyset is on and the following key${t.length>1?"s":""} ${t.length>1?"are":"is"} not covered by schema and/or reference objects: ${t.join(", ")}`)}}else{if(!(u(e)&&Object.keys(e).length>0))throw new TypeError(`${y.msg}: Both ${y.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==s(f(Object.keys(n),Object.keys(e)),y.ignoreKeys).length){const t=f(Object.keys(n),Object.keys(e));throw new TypeError(`${y.msg}: The input object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not covered by the reference object: ${t.join(", ")}`)}if(0!==s(f(Object.keys(e),Object.keys(n)),y.ignoreKeys).length){const t=f(Object.keys(e),Object.keys(n));throw new TypeError(`${y.msg}: The reference object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not present in the input object: ${t.join(", ")}`)}}const g=[];j(n,(t,o,i)=>{const u=void 0!==o?o:t,f=void 0!==o?t:void 0;if(p(g)&&g.length&&g.some(t=>i.path.startsWith(t)))return u;if(f&&y.ignoreKeys.some(t=>bt.isMatch(f,t)))return u;if(y.ignorePaths.some(t=>bt.isMatch(i.path,t)))return u;const s=!(!c(u)&&!p(u)&&p(i.parent));let h=!1;c(y.schema)&&a.call(y.schema,ht.get(i.path))&&(h=!0);let d=!1;if(c(e)&&ht.has(e,ht.get(i.path))&&(d=!0),y.enforceStrictKeyset&&s&&!h&&!d)throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path} is neither covered by reference object (second input argument), nor ${y.optsVarName}.schema! To stop this error, turn off ${y.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${y.optsVarName}.schema).\n\nDebug info:\n\nobj = ${JSON.stringify(n,null,4)}\n\nref = ${JSON.stringify(e,null,4)}\n\ninnerObj = ${JSON.stringify(i,null,4)}\n\nopts = ${JSON.stringify(y,null,4)}\n\ncurrent = ${JSON.stringify(u,null,4)}\n\n`);if(h){const t=pt(y.schema[i.path]).map(String).map(t=>t.toLowerCase());if(ht.set(y.schema,i.path,t),lt(t,l).length)g.push(i.path);else if(!0!==u&&!1!==u&&!t.includes(r(u).toLowerCase())||(!0===u||!1===u)&&!t.includes(String(u))&&!t.includes("boolean")){if(!p(u)||!y.acceptArrays)throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path} was customised to ${"string"!==r(u)?'"':""}${JSON.stringify(u,null,0)}${"string"!==r(u)?'"':""} (type: ${r(u).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(t,null,0)})`);for(let n=0,e=u.length;n<e;n++)if(!t.includes(r(u[n]).toLowerCase()))throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path}.${n}, the ${dt(n+1)} element (equal to ${JSON.stringify(u[n],null,0)}) is of a type ${r(u[n]).toLowerCase()}, but only the following are allowed by the ${y.optsVarName}.schema: ${t.join(", ")}`)}}else if(d){const n=ht.get(e,i.path);if(y.acceptArrays&&p(u)&&!y.acceptArraysIgnore.includes(t)){if(!u.every(n=>r(n).toLowerCase()===r(e[t]).toLowerCase()))throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path} was customised to be array, but not all of its elements are ${r(e[t]).toLowerCase()}-type`)}else if(r(u)!==r(n))throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path} was customised to ${"string"===r(u).toLowerCase()?"":'"'}${JSON.stringify(u,null,0)}${"string"===r(u).toLowerCase()?"":'"'} which is not ${r(n).toLowerCase()} but ${r(u).toLowerCase()}`)}return u})}(t,n,e)}bt.isMatch=((t,n,e)=>{const r=wt(n,e),o=r.test(t);return r.negated?!o:o});var Ot=200,jt="__lodash_hash_undefined__",Tt="[object Function]",St="[object GeneratorFunction]",Wt=/^\[object .+?Constructor\]$/,Et="object"==typeof n&&n&&n.Object===Object&&n,At="object"==typeof self&&self&&self.Object===Object&&self,Nt=Et||At||Function("return this")();function It(t,n){return!!(t?t.length:0)&&function(t,n,e){if(n!=n)return function(t,n,e,r){var o=t.length,i=e+(r?1:-1);for(;r?i--:++i<o;)if(n(t[i],i,t))return i;return-1}(t,Rt,e);var r=e-1,o=t.length;for(;++r<o;)if(t[r]===n)return r;return-1}(t,n,0)>-1}function Mt(t,n,e){for(var r=-1,o=t?t.length:0;++r<o;)if(e(n,t[r]))return!0;return!1}function Rt(t){return t!=t}function kt(t,n){return t.has(n)}function Ct(t){var n=-1,e=Array(t.size);return t.forEach(function(t){e[++n]=t}),e}var xt=Array.prototype,Lt=Function.prototype,Pt=Object.prototype,Ht=Nt["__core-js_shared__"],Jt=function(){var t=/[^.]+$/.exec(Ht&&Ht.keys&&Ht.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Zt=Lt.toString,Vt=Pt.hasOwnProperty,Ft=Pt.toString,qt=RegExp("^"+Zt.call(Vt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Bt=xt.splice,Ut=rn(Nt,"Map"),zt=rn(Nt,"Set"),Dt=rn(Object,"create");function Gt(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function Qt(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function Kt(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function Xt(t){var n=-1,e=t?t.length:0;for(this.__data__=new Kt;++n<e;)this.add(t[n])}function Yt(t,n){for(var e,r,o=t.length;o--;)if((e=t[o][0])===(r=n)||e!=e&&r!=r)return o;return-1}function tn(t){return!(!on(t)||(n=t,Jt&&Jt in n))&&(function(t){var n=on(t)?Ft.call(t):"";return n==Tt||n==St}(t)||function(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(t){}return n}(t)?qt:Wt).test(function(t){if(null!=t){try{return Zt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var n}Gt.prototype.clear=function(){this.__data__=Dt?Dt(null):{}},Gt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Gt.prototype.get=function(t){var n=this.__data__;if(Dt){var e=n[t];return e===jt?void 0:e}return Vt.call(n,t)?n[t]:void 0},Gt.prototype.has=function(t){var n=this.__data__;return Dt?void 0!==n[t]:Vt.call(n,t)},Gt.prototype.set=function(t,n){return this.__data__[t]=Dt&&void 0===n?jt:n,this},Qt.prototype.clear=function(){this.__data__=[]},Qt.prototype.delete=function(t){var n=this.__data__,e=Yt(n,t);return!(e<0||(e==n.length-1?n.pop():Bt.call(n,e,1),0))},Qt.prototype.get=function(t){var n=this.__data__,e=Yt(n,t);return e<0?void 0:n[e][1]},Qt.prototype.has=function(t){return Yt(this.__data__,t)>-1},Qt.prototype.set=function(t,n){var e=this.__data__,r=Yt(e,t);return r<0?e.push([t,n]):e[r][1]=n,this},Kt.prototype.clear=function(){this.__data__={hash:new Gt,map:new(Ut||Qt),string:new Gt}},Kt.prototype.delete=function(t){return en(this,t).delete(t)},Kt.prototype.get=function(t){return en(this,t).get(t)},Kt.prototype.has=function(t){return en(this,t).has(t)},Kt.prototype.set=function(t,n){return en(this,t).set(t,n),this},Xt.prototype.add=Xt.prototype.push=function(t){return this.__data__.set(t,jt),this},Xt.prototype.has=function(t){return this.__data__.has(t)};var nn=zt&&1/Ct(new zt([,-0]))[1]==1/0?function(t){return new zt(t)}:function(){};function en(t,n){var e,r,o=t.__data__;return("string"==(r=typeof(e=n))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e)?o["string"==typeof n?"string":"hash"]:o.map}function rn(t,n){var e=function(t,n){return null==t?void 0:t[n]}(t,n);return tn(e)?e:void 0}function on(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}var an=function(t){return t&&t.length?function(t,n,e){var r=-1,o=It,i=t.length,a=!0,u=[],c=u;if(e)a=!1,o=Mt;else if(i>=Ot){var f=n?null:nn(t);if(f)return Ct(f);a=!1,o=kt,c=new Xt}else c=n?[]:u;t:for(;++r<i;){var s=t[r],l=n?n(s):s;if(s=e||0!==s?s:0,a&&l==l){for(var p=c.length;p--;)if(c[p]===l)continue t;n&&c.push(l),u.push(s)}else o(c,l,e)||(c!==u&&c.push(l),u.push(s))}return u}(t):[]},un=function(t,n){if(n){if("object"!=typeof n)throw new TypeError(String(n)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in n){if("boolean"!=typeof n.includeZero)throw new TypeError(String(n.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(n.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1},cn=function(t,n){if("string"!=typeof t)return!1;if(n&&"includeZero"in n){if("boolean"!=typeof n.includeZero)throw new TypeError(String(n.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(n.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(t)}return/^[1-9]\d*(\.0+)?$/.test(t)},fn=e(function(t,n){(n=t.exports=function(t){return t+n.suffix(+t)}).suffix=function(t){return t%=100,1===Math.floor(t/10)?"th":t%10==1?"st":t%10==2?"nd":t%10==3?"rd":"th"}});fn.suffix;const sn=Array.isArray;function ln(t,n){if(!sn(t))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(0===t.length)return t;const e={strictlyTwoElementsInRangeArrays:!1,progressFn:null},r=Object.assign({},e,n);let o,i;if($t(r,e,{msg:"ranges-sort: [THROW_ID_02*]",schema:{progressFn:["function","false","null"]}}),r.strictlyTwoElementsInRangeArrays&&!t.every((t,n)=>2===t.length||(o=n,i=t.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${fn(o)} range (${JSON.stringify(t[o],null,4)}) has not two but ${i} elements!`);if(!t.every((t,n)=>!(!un(t[0],{includeZero:!0})||!un(t[1],{includeZero:!0}))||(o=n,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${fn(o)} range (${JSON.stringify(t[o],null,4)}) does not consist of only natural numbers!`);const a=t.length*t.length;let u=0;return Array.from(t).sort((t,n)=>(r.progressFn&&(u++,r.progressFn(Math.floor(100*u/a))),t[0]===n[0]?t[1]<n[1]?-1:t[1]>n[1]?1:0:t[0]<n[0]?-1:1))}const pn=Array.isArray;function hn(t,n,e){let r=0,o=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof t)throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(null===n)return t;if(!pn(n))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof n}, equal to: ${JSON.stringify(n,null,4)}`);if(e&&"function"!=typeof e)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);pn(n)&&(un(n[0],{includeZero:!0})||cn(n[0],{includeZero:!0}))&&(un(n[1],{includeZero:!0})||cn(n[1],{includeZero:!0}))&&(n=[n]);const i=n.length;let a=0;n.forEach((t,u)=>{if(e&&(r=Math.floor(a/i*10))!==o&&(o=r,e(r)),!pn(t))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${fn(u)} element not an array: ${JSON.stringify(t,null,4)}, which is ${typeof t}`);if(!un(t[0],{includeZero:!0})){if(!cn(t[0],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${fn(u)} element, array [${t[0]},${t[1]}]. That array has first element not an integer, but ${typeof t[0]}, equal to: ${JSON.stringify(t[0],null,4)}. Computer doesn't like this.`);n[u][0]=Number.parseInt(n[u][0],10)}if(!un(t[1],{includeZero:!0})){if(!cn(t[1],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${fn(u)} element, array [${t[0]},${t[1]}]. That array has second element not an integer, but ${typeof t[1]}, equal to: ${JSON.stringify(t[1],null,4)}. Computer doesn't like this.`);n[u][1]=Number.parseInt(n[u][1],10)}a++});const u=function(t,n){if(!Array.isArray(t))return t;if(n&&"function"!=typeof n)throw new Error(`ranges-merge: [THROW_ID_01] the second input argument must be a function! It was given of a type: "${typeof n}", equal to ${JSON.stringify(n,null,4)}`);const e=s(t).filter(t=>void 0!==t[2]||t[0]!==t[1]);let r,o,i;const a=(r=n?ln(e,{progressFn:t=>{(i=Math.floor(t/5))!==o&&(o=i,n(i))}}):ln(e)).length-1;for(let t=a;t>0;t--)n&&(i=Math.floor(78*(1-t/a))+21)!==o&&i>o&&(o=i,n(i)),(r[t][0]<=r[t-1][0]||r[t][0]<=r[t-1][1])&&(r[t-1][0]=Math.min(r[t][0],r[t-1][0]),r[t-1][1]=Math.max(r[t][1],r[t-1][1]),void 0!==r[t][2]&&(r[t-1][0]>=r[t][0]||r[t-1][1]<=r[t][1])&&null!==r[t-1][2]&&(null===r[t][2]&&null!==r[t-1][2]?r[t-1][2]=null:void 0!==r[t-1][2]?r[t-1][2]+=r[t][2]:r[t-1][2]=r[t][2]),r.splice(t,1),t=r.length);return r}(n,t=>{e&&(r=10+Math.floor(t/10))!==o&&(o=r,e(r))}),c=u.length;if(c>0){const n=t.slice(u[c-1][1]);t=u.reduce((n,i,a,u)=>{e&&(r=20+Math.floor(a/c*80))!==o&&(o=r,e(r));const f=0===a?0:u[a-1][1],s=u[a][0];return n+t.slice(f,s)+(function(t){return null!=t}(u[a][2])?u[a][2]:"")},""),t+=n}return t}var yn=Array.isArray;return function(n,e){if(!yn(n))throw new Error("array-group-str-omit-num-char: [THROW_ID_01] the first input argument must be an array!");var r,o,i={wildcard:"*",dedupePlease:!0};if(null!=e){if(!b(e))throw new Error("array-group-str-omit-num-char: [THROW_ID_02] the second input argument, options object must be a plain object! It was given as ".concat(t(e),", equal to:\n").concat(JSON.stringify(e,null,4)));$t(r=Object.assign({},i,e),i,{msg:"array-group-str-omit-num-char: [THROW_ID_03*]"})}else r=Object.assign({},i);for(var a=(o=r.dedupePlease?an(n):Array.from(n)).length,u={},c=0;c<a;c++){var f=o[c].match(/\d+/gm);f?function(){var t=o[c].replace(/\d+/gm,r.wildcard);u.hasOwnProperty(t)?(f.forEach(function(n,e){u[t].elementsWhichWeCanReplaceWithWildcards[e]&&n!==u[t].elementsWhichWeCanReplaceWithWildcards[e]&&(u[t].elementsWhichWeCanReplaceWithWildcards[e]=!1)}),u[t].count++):u[t]={count:1,elementsWhichWeCanReplaceWithWildcards:Array.from(f)}}():u[o[c]]={count:1}}var s={};return Object.keys(u).forEach(function(t){var n=t;if(yn(u[t].elementsWhichWeCanReplaceWithWildcards)&&u[t].elementsWhichWeCanReplaceWithWildcards.some(function(t){return!1!==t})){for(var e=[],o=0,i=0;i<u[t].elementsWhichWeCanReplaceWithWildcards.length;i++)o=n.indexOf(r.wildcard,o+r.wildcard.length),!1!==u[t].elementsWhichWeCanReplaceWithWildcards[i]&&e.push([o,o+r.wildcard.length,u[t].elementsWhichWeCanReplaceWithWildcards[i]]);n=hn(n,e)}s[n]=u[t].count}),s}});
