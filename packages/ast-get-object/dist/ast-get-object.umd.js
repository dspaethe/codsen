!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).astGetObject=e()}(this,function(){"use strict";var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var n=e(function(e,n){var r=200,o="__lodash_hash_undefined__",i=9007199254740991,a="[object Arguments]",u="[object Boolean]",f="[object Date]",c="[object Function]",s="[object GeneratorFunction]",h="[object Map]",l="[object Number]",p="[object Object]",g="[object RegExp]",y="[object Set]",d="[object String]",v="[object Symbol]",m="[object ArrayBuffer]",_="[object DataView]",w="[object Float32Array]",b="[object Float64Array]",$="[object Int8Array]",j="[object Int16Array]",O="[object Int32Array]",S="[object Uint8Array]",T="[object Uint8ClampedArray]",A="[object Uint16Array]",W="[object Uint32Array]",N=/\w*$/,E=/^\[object .+?Constructor\]$/,M=/^(?:0|[1-9]\d*)$/,k={};k[a]=k["[object Array]"]=k[m]=k[_]=k[u]=k[f]=k[w]=k[b]=k[$]=k[j]=k[O]=k[h]=k[l]=k[p]=k[g]=k[y]=k[d]=k[v]=k[S]=k[T]=k[A]=k[W]=!0,k["[object Error]"]=k[c]=k["[object WeakMap]"]=!1;var I="object"==typeof t&&t&&t.Object===Object&&t,J="object"==typeof self&&self&&self.Object===Object&&self,x=I||J||Function("return this")(),R=n&&!n.nodeType&&n,C=R&&e&&!e.nodeType&&e,F=C&&C.exports===R;function H(t,e){return t.set(e[0],e[1]),t}function P(t,e){return t.add(e),t}function V(t,e,n,r){var o=-1,i=t?t.length:0;for(r&&i&&(n=t[++o]);++o<i;)n=e(n,t[o],o,t);return n}function L(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function q(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}function B(t,e){return function(n){return t(e(n))}}function U(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}var z,G=Array.prototype,Q=Function.prototype,X=Object.prototype,Z=x["__core-js_shared__"],Y=(z=/[^.]+$/.exec(Z&&Z.keys&&Z.keys.IE_PROTO||""))?"Symbol(src)_1."+z:"",D=Q.toString,K=X.hasOwnProperty,tt=X.toString,et=RegExp("^"+D.call(K).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),nt=F?x.Buffer:void 0,rt=x.Symbol,ot=x.Uint8Array,it=B(Object.getPrototypeOf,Object),at=Object.create,ut=X.propertyIsEnumerable,ft=G.splice,ct=Object.getOwnPropertySymbols,st=nt?nt.isBuffer:void 0,ht=B(Object.keys,Object),lt=Ct(x,"DataView"),pt=Ct(x,"Map"),gt=Ct(x,"Promise"),yt=Ct(x,"Set"),dt=Ct(x,"WeakMap"),vt=Ct(Object,"create"),mt=Lt(lt),_t=Lt(pt),wt=Lt(gt),bt=Lt(yt),$t=Lt(dt),jt=rt?rt.prototype:void 0,Ot=jt?jt.valueOf:void 0;function St(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Tt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function At(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Wt(t){this.__data__=new Tt(t)}function Nt(t,e){var n=Bt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Ut(t)}(t)&&K.call(t,"callee")&&(!ut.call(t,"callee")||tt.call(t)==a)}(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,o=!!r;for(var i in t)!e&&!K.call(t,i)||o&&("length"==i||Pt(i,r))||n.push(i);return n}function Et(t,e,n){var r=t[e];K.call(t,e)&&qt(r,n)&&(void 0!==n||e in t)||(t[e]=n)}function Mt(t,e){for(var n=t.length;n--;)if(qt(t[n][0],e))return n;return-1}function kt(t,e,n,r,o,i,E){var M;if(r&&(M=i?r(t,o,i,E):r(t)),void 0!==M)return M;if(!Qt(t))return t;var I=Bt(t);if(I){if(M=function(t){var e=t.length,n=t.constructor(e);e&&"string"==typeof t[0]&&K.call(t,"index")&&(n.index=t.index,n.input=t.input);return n}(t),!e)return function(t,e){var n=-1,r=t.length;e||(e=Array(r));for(;++n<r;)e[n]=t[n];return e}(t,M)}else{var J=Ht(t),x=J==c||J==s;if(zt(t))return function(t,e){if(e)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}(t,e);if(J==p||J==a||x&&!i){if(L(t))return i?t:{};if(M=function(t){return"function"!=typeof t.constructor||Vt(t)?{}:(e=it(t),Qt(e)?at(e):{});var e}(x?{}:t),!e)return function(t,e){return xt(t,Ft(t),e)}(t,function(t,e){return t&&xt(e,Xt(e),t)}(M,t))}else{if(!k[J])return i?t:{};M=function(t,e,n,r){var o=t.constructor;switch(e){case m:return Jt(t);case u:case f:return new o(+t);case _:return function(t,e){var n=e?Jt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}(t,r);case w:case b:case $:case j:case O:case S:case T:case A:case W:return function(t,e){var n=e?Jt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}(t,r);case h:return function(t,e,n){return V(e?n(q(t),!0):q(t),H,new t.constructor)}(t,r,n);case l:case d:return new o(t);case g:return(c=new(a=t).constructor(a.source,N.exec(a))).lastIndex=a.lastIndex,c;case y:return function(t,e,n){return V(e?n(U(t),!0):U(t),P,new t.constructor)}(t,r,n);case v:return i=t,Ot?Object(Ot.call(i)):{}}var i;var a,c}(t,J,kt,e)}}E||(E=new Wt);var R=E.get(t);if(R)return R;if(E.set(t,M),!I)var C=n?function(t){return function(t,e,n){var r=e(t);return Bt(t)?r:function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}(r,n(t))}(t,Xt,Ft)}(t):Xt(t);return function(t,e){for(var n=-1,r=t?t.length:0;++n<r&&!1!==e(t[n],n,t););}(C||t,function(o,i){C&&(o=t[i=o]),Et(M,i,kt(o,e,n,r,i,t,E))}),M}function It(t){return!(!Qt(t)||(e=t,Y&&Y in e))&&(Gt(t)||L(t)?et:E).test(Lt(t));var e}function Jt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function xt(t,e,n,r){n||(n={});for(var o=-1,i=e.length;++o<i;){var a=e[o],u=r?r(n[a],t[a],a,n,t):void 0;Et(n,a,void 0===u?t[a]:u)}return n}function Rt(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map}function Ct(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return It(n)?n:void 0}St.prototype.clear=function(){this.__data__=vt?vt(null):{}},St.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},St.prototype.get=function(t){var e=this.__data__;if(vt){var n=e[t];return n===o?void 0:n}return K.call(e,t)?e[t]:void 0},St.prototype.has=function(t){var e=this.__data__;return vt?void 0!==e[t]:K.call(e,t)},St.prototype.set=function(t,e){return this.__data__[t]=vt&&void 0===e?o:e,this},Tt.prototype.clear=function(){this.__data__=[]},Tt.prototype.delete=function(t){var e=this.__data__,n=Mt(e,t);return!(n<0||(n==e.length-1?e.pop():ft.call(e,n,1),0))},Tt.prototype.get=function(t){var e=this.__data__,n=Mt(e,t);return n<0?void 0:e[n][1]},Tt.prototype.has=function(t){return Mt(this.__data__,t)>-1},Tt.prototype.set=function(t,e){var n=this.__data__,r=Mt(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},At.prototype.clear=function(){this.__data__={hash:new St,map:new(pt||Tt),string:new St}},At.prototype.delete=function(t){return Rt(this,t).delete(t)},At.prototype.get=function(t){return Rt(this,t).get(t)},At.prototype.has=function(t){return Rt(this,t).has(t)},At.prototype.set=function(t,e){return Rt(this,t).set(t,e),this},Wt.prototype.clear=function(){this.__data__=new Tt},Wt.prototype.delete=function(t){return this.__data__.delete(t)},Wt.prototype.get=function(t){return this.__data__.get(t)},Wt.prototype.has=function(t){return this.__data__.has(t)},Wt.prototype.set=function(t,e){var n=this.__data__;if(n instanceof Tt){var o=n.__data__;if(!pt||o.length<r-1)return o.push([t,e]),this;n=this.__data__=new At(o)}return n.set(t,e),this};var Ft=ct?B(ct,Object):function(){return[]},Ht=function(t){return tt.call(t)};function Pt(t,e){return!!(e=null==e?i:e)&&("number"==typeof t||M.test(t))&&t>-1&&t%1==0&&t<e}function Vt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||X)}function Lt(t){if(null!=t){try{return D.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function qt(t,e){return t===e||t!=t&&e!=e}(lt&&Ht(new lt(new ArrayBuffer(1)))!=_||pt&&Ht(new pt)!=h||gt&&"[object Promise]"!=Ht(gt.resolve())||yt&&Ht(new yt)!=y||dt&&"[object WeakMap]"!=Ht(new dt))&&(Ht=function(t){var e=tt.call(t),n=e==p?t.constructor:void 0,r=n?Lt(n):void 0;if(r)switch(r){case mt:return _;case _t:return h;case wt:return"[object Promise]";case bt:return y;case $t:return"[object WeakMap]"}return e});var Bt=Array.isArray;function Ut(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}(t.length)&&!Gt(t)}var zt=st||function(){return!1};function Gt(t){var e=Qt(t)?tt.call(t):"";return e==c||e==s}function Qt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Xt(t){return Ut(t)?Nt(t):function(t){if(!Vt(t))return ht(t);var e=[];for(var n in Object(t))K.call(t,n)&&"constructor"!=n&&e.push(n);return e}(t)}e.exports=function(t){return kt(t,!0,!0)}});function r(t,e,n){if(e!=e)return function(t,e,n,r){for(var o=t.length,i=n+(r?1:-1);r?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,i,n);for(var r=n-1,o=t.length;++r<o;)if(t[r]===e)return r;return-1}function o(t,e,n,r){for(var o=n-1,i=t.length;++o<i;)if(r(t[o],e))return o;return-1}function i(t){return t!=t}var a=Array.prototype.splice;function u(t,e,n,i){var u,f=i?o:r,c=-1,s=e.length,h=t;for(t===e&&(e=function(t,e){var n=-1,r=t.length;e||(e=Array(r));for(;++n<r;)e[n]=t[n];return e}(e)),n&&(h=function(t,e){for(var n=-1,r=t?t.length:0,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}(t,(u=n,function(t){return u(t)})));++c<s;)for(var l=0,p=e[c],g=n?n(p):p;(l=f(h,g,l,i))>-1;)h!==t&&a.call(h,l,1),a.call(t,l,1);return t}var f=function(t,e){return t&&t.length&&e&&e.length?u(t,e):t},c=e(function(e,n){var r,o,i,a,u,f,c,s,h,l,p,g,y,d,v,m,_,w,b,$;e.exports=(r="function"==typeof Promise,o="object"==typeof self?self:t,i="undefined"!=typeof Symbol,a="undefined"!=typeof Map,u="undefined"!=typeof Set,f="undefined"!=typeof WeakMap,c="undefined"!=typeof WeakSet,s="undefined"!=typeof DataView,h=i&&void 0!==Symbol.iterator,l=i&&void 0!==Symbol.toStringTag,p=u&&"function"==typeof Set.prototype.entries,g=a&&"function"==typeof Map.prototype.entries,y=p&&Object.getPrototypeOf((new Set).entries()),d=g&&Object.getPrototypeOf((new Map).entries()),v=h&&"function"==typeof Array.prototype[Symbol.iterator],m=v&&Object.getPrototypeOf([][Symbol.iterator]()),_=h&&"function"==typeof String.prototype[Symbol.iterator],w=_&&Object.getPrototypeOf(""[Symbol.iterator]()),b=8,$=-1,function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===o)return"global";if(Array.isArray(t)&&(!1===l||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var n=l&&t[Symbol.toStringTag];if("string"==typeof n)return n;var i=Object.getPrototypeOf(t);return i===RegExp.prototype?"RegExp":i===Date.prototype?"Date":r&&i===Promise.prototype?"Promise":u&&i===Set.prototype?"Set":a&&i===Map.prototype?"Map":c&&i===WeakSet.prototype?"WeakSet":f&&i===WeakMap.prototype?"WeakMap":s&&i===DataView.prototype?"DataView":a&&i===d?"Map Iterator":u&&i===y?"Set Iterator":v&&i===m?"Array Iterator":_&&i===w?"String Iterator":null===i?"Object":Object.prototype.toString.call(t).slice(b,$)})}),s=1/0,h="[object Symbol]",l=/^\s+|\s+$/g,p="[\\ud800-\\udfff]",g="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",y="\\ud83c[\\udffb-\\udfff]",d="[^\\ud800-\\udfff]",v="(?:\\ud83c[\\udde6-\\uddff]){2}",m="[\\ud800-\\udbff][\\udc00-\\udfff]",_="(?:"+g+"|"+y+")"+"?",w="[\\ufe0e\\ufe0f]?"+_+("(?:\\u200d(?:"+[d,v,m].join("|")+")[\\ufe0e\\ufe0f]?"+_+")*"),b="(?:"+[d+g+"?",g,v,m,p].join("|")+")",$=RegExp(y+"(?="+y+")|"+b+w,"g"),j=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),O="object"==typeof t&&t&&t.Object===Object&&t,S="object"==typeof self&&self&&self.Object===Object&&self,T=O||S||Function("return this")();function A(t,e,n){if(e!=e)return function(t,e,n,r){for(var o=t.length,i=n+(r?1:-1);r?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,W,n);for(var r=n-1,o=t.length;++r<o;)if(t[r]===e)return r;return-1}function W(t){return t!=t}function N(t){return function(t){return j.test(t)}(t)?function(t){return t.match($)||[]}(t):function(t){return t.split("")}(t)}var E=Object.prototype.toString,M=T.Symbol,k=M?M.prototype:void 0,I=k?k.toString:void 0;function J(t){if("string"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&E.call(t)==h}(t))return I?I.call(t):"";var e=t+"";return"0"==e&&1/t==-s?"-0":e}function x(t,e,n){var r=t.length;return n=void 0===n?r:n,!e&&n>=r?t:function(t,e,n){var r=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(n=n>o?o:n)<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var i=Array(o);++r<o;)i[r]=t[r+e];return i}(t,e,n)}var R=function(t,e,n){var r;if((t=null==(r=t)?"":J(r))&&(n||void 0===e))return t.replace(l,"");if(!t||!(e=J(e)))return t;var o=N(t),i=N(e);return x(o,function(t,e){for(var n=-1,r=t.length;++n<r&&A(e,t[n],0)>-1;);return n}(o,i),function(t,e){for(var n=t.length;n--&&A(e,t[n],0)>-1;);return n}(o,i)+1).join("")},C="[object Object]";var F,H,P=Function.prototype,V=Object.prototype,L=P.toString,q=V.hasOwnProperty,B=L.call(Object),U=V.toString,z=(F=Object.getPrototypeOf,H=Object,function(t){return F(H(t))});var G=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||U.call(t)!=C||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=z(t);if(null===e)return!0;var n=q.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&L.call(n)==B};const Q=Array.isArray;function X(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function Z(t,e){return function t(e,r,o){const i=n(e);let a,u,f,c,s;if((o=Object.assign({depth:-1,path:""},o)).depth+=1,Q(i))for(a=0,u=i.length;a<u;a++){const e=`${o.path}.${a}`;void 0!==i[a]?(o.parent=n(i),f=t(r(i[a],void 0,Object.assign({},o,{path:X(e)})),r,Object.assign({},o,{path:X(e)})),Number.isNaN(f)&&a<i.length?(i.splice(a,1),a-=1):i[a]=f):i.splice(a,1)}else if(G(i))for(a=0,u=(c=Object.keys(i)).length;a<u;a++){s=c[a];const e=`${o.path}.${s}`;0===o.depth&&null!=s&&(o.topmostKey=s),o.parent=n(i),f=t(r(s,i[s],Object.assign({},o,{path:X(e)})),r,Object.assign({},o,{path:X(e)})),Number.isNaN(f)?delete i[s]:i[s]=f}return i}(t,e,{})}function Y(t){function e(t){return"string"==typeof t}const n=Array.isArray;let r=!0;return!!(n(t)||G(t)||e(t))&&(e(t)?0===R(t).length:(t=Z(t,(t,n)=>{const o=void 0!==n?n:t;return e(o)&&""!==R(o)&&(r=!1),o}),r))}var D=/[|\\{}()[\]^$+*?.]/g,K=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(D,"\\$&")};const tt=new Map;function et(t,e){const n=Object.assign({caseSensitive:!1},e),r=t+JSON.stringify(n);if(tt.has(r))return tt.get(r);const o="!"===t[0];o&&(t=t.slice(1)),t=K(t).replace(/\\\*/g,".*");const i=new RegExp(`^${t}$`,n.caseSensitive?"":"i");return i.negated=o,tt.set(r,i),i}var nt=(t,e,n)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const r="!"===e[0][0];e=e.map(t=>et(t,n));const o=[];for(const n of t){let t=r;for(const r of e)r.test(n)&&(t=!r.negated);t&&o.push(n)}return o};nt.isMatch=((t,e,n)=>{const r=et(e,n),o=r.test(t);return r.negated?!o:o});var rt="__lodash_hash_undefined__",ot=9007199254740991,it="[object Function]",at="[object GeneratorFunction]",ut=/^\[object .+?Constructor\]$/,ft="object"==typeof t&&t&&t.Object===Object&&t,ct="object"==typeof self&&self&&self.Object===Object&&self,st=ft||ct||Function("return this")();function ht(t,e){return!!(t?t.length:0)&&function(t,e,n){if(e!=e)return function(t,e,n,r){var o=t.length,i=n+(r?1:-1);for(;r?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,gt,n);var r=n-1,o=t.length;for(;++r<o;)if(t[r]===e)return r;return-1}(t,e,0)>-1}function lt(t,e,n){for(var r=-1,o=t?t.length:0;++r<o;)if(n(e,t[r]))return!0;return!1}function pt(t,e){for(var n=-1,r=t?t.length:0,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}function gt(t){return t!=t}function yt(t){return function(e){return t(e)}}function dt(t,e){return t.has(e)}var vt,mt=Array.prototype,_t=Function.prototype,wt=Object.prototype,bt=st["__core-js_shared__"],$t=(vt=/[^.]+$/.exec(bt&&bt.keys&&bt.keys.IE_PROTO||""))?"Symbol(src)_1."+vt:"",jt=_t.toString,Ot=wt.hasOwnProperty,St=wt.toString,Tt=RegExp("^"+jt.call(Ot).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),At=mt.splice,Wt=Math.max,Nt=Math.min,Et=Pt(st,"Map"),Mt=Pt(Object,"create");function kt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function It(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Jt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function xt(t){var e=-1,n=t?t.length:0;for(this.__data__=new Jt;++e<n;)this.add(t[e])}function Rt(t,e){for(var n,r,o=t.length;o--;)if((n=t[o][0])===(r=e)||n!=n&&r!=r)return o;return-1}function Ct(t){return!(!Lt(t)||(e=t,$t&&$t in e))&&(Vt(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?Tt:ut).test(function(t){if(null!=t){try{return jt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function Ft(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=ot}(t.length)&&!Vt(t)}(t)}(t)?t:[]}function Ht(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map}function Pt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return Ct(n)?n:void 0}function Vt(t){var e=Lt(t)?St.call(t):"";return e==it||e==at}function Lt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}kt.prototype.clear=function(){this.__data__=Mt?Mt(null):{}},kt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},kt.prototype.get=function(t){var e=this.__data__;if(Mt){var n=e[t];return n===rt?void 0:n}return Ot.call(e,t)?e[t]:void 0},kt.prototype.has=function(t){var e=this.__data__;return Mt?void 0!==e[t]:Ot.call(e,t)},kt.prototype.set=function(t,e){return this.__data__[t]=Mt&&void 0===e?rt:e,this},It.prototype.clear=function(){this.__data__=[]},It.prototype.delete=function(t){var e=this.__data__,n=Rt(e,t);return!(n<0||(n==e.length-1?e.pop():At.call(e,n,1),0))},It.prototype.get=function(t){var e=this.__data__,n=Rt(e,t);return n<0?void 0:e[n][1]},It.prototype.has=function(t){return Rt(this.__data__,t)>-1},It.prototype.set=function(t,e){var n=this.__data__,r=Rt(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},Jt.prototype.clear=function(){this.__data__={hash:new kt,map:new(Et||It),string:new kt}},Jt.prototype.delete=function(t){return Ht(this,t).delete(t)},Jt.prototype.get=function(t){return Ht(this,t).get(t)},Jt.prototype.has=function(t){return Ht(this,t).has(t)},Jt.prototype.set=function(t,e){return Ht(this,t).set(t,e),this},xt.prototype.add=xt.prototype.push=function(t){return this.__data__.set(t,rt),this},xt.prototype.has=function(t){return this.__data__.has(t)};var qt=function(t,e){return e=Wt(void 0===e?t.length-1:e,0),function(){for(var n=arguments,r=-1,o=Wt(n.length-e,0),i=Array(o);++r<o;)i[r]=n[e+r];r=-1;for(var a=Array(e+1);++r<e;)a[r]=n[r];return a[e]=i,function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}(t,this,a)}}(function(t){var e=pt(t,Ft);return e.length&&e[0]===t[0]?function(t,e,n){for(var r=n?lt:ht,o=t[0].length,i=t.length,a=i,u=Array(i),f=1/0,c=[];a--;){var s=t[a];a&&e&&(s=pt(s,yt(e))),f=Nt(s.length,f),u[a]=!n&&(e||o>=120&&s.length>=120)?new xt(a&&s):void 0}s=t[0];var h=-1,l=u[0];t:for(;++h<o&&c.length<f;){var p=s[h],g=e?e(p):p;if(p=n||0!==p?p:0,!(l?dt(l,g):r(c,g,n))){for(a=i;--a;){var y=u[a];if(!(y?dt(y,g):r(t[a],g,n)))continue t}l&&l.push(g),c.push(p)}}return c}(e):[]});function Bt(t){return"string"==typeof t?t.length>0?[t]:[]:t}var Ut=e(function(t){t.exports=function(){var t=Object.prototype.toString;function e(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function n(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var n in t)if(e(t,n))return!1;return!0}return!1}function r(e){return t.call(e)}var o=Array.isArray||function(e){return"[object Array]"===t.call(e)};function i(t){var e=parseInt(t);return e.toString()===t?e:t}function a(t){t=t||{};var a=function(t){return Object.keys(a).reduce(function(e,n){return"create"===n?e:("function"==typeof a[n]&&(e[n]=a[n].bind(a,t)),e)},{})};function u(n,r){return t.includeInheritedProps||"number"==typeof r&&Array.isArray(n)||e(n,r)}function f(t,e){if(u(t,e))return t[e]}function c(t,e,n,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return c(t,e.split(".").map(i),n,r);var o=e[0],a=f(t,o);return 1===e.length?(void 0!==a&&r||(t[o]=n),a):(void 0===a&&("number"==typeof e[1]?t[o]=[]:t[o]={}),c(t[o],e.slice(1),n,r))}return a.has=function(n,r){if("number"==typeof r?r=[r]:"string"==typeof r&&(r=r.split(".")),!r||0===r.length)return!!n;for(var a=0;a<r.length;a++){var u=i(r[a]);if(!("number"==typeof u&&o(n)&&u<n.length||(t.includeInheritedProps?u in Object(n):e(n,u))))return!1;n=n[u]}return!0},a.ensureExists=function(t,e,n){return c(t,e,n,!0)},a.set=function(t,e,n,r){return c(t,e,n,r)},a.insert=function(t,e,n,r){var i=a.get(t,e);r=~~r,o(i)||(i=[],a.set(t,e,i)),i.splice(r,0,n)},a.empty=function(t,e){var i,f;if(!n(e)&&null!=t&&(i=a.get(t,e))){if("string"==typeof i)return a.set(t,e,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===r(t)}(i))return a.set(t,e,!1);if("number"==typeof i)return a.set(t,e,0);if(o(i))i.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===r(t)}(i))return a.set(t,e,null);for(f in i)u(i,f)&&delete i[f]}}},a.push=function(t,e){var n=a.get(t,e);o(n)||(n=[],a.set(t,e,n)),n.push.apply(n,Array.prototype.slice.call(arguments,2))},a.coalesce=function(t,e,n){for(var r,o=0,i=e.length;o<i;o++)if(void 0!==(r=a.get(t,e[o])))return r;return n},a.get=function(t,e,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return n;if("string"==typeof e)return a.get(t,e.split("."),n);var r=i(e[0]),o=f(t,r);return void 0===o?n:1===e.length?o:a.get(t[r],e.slice(1),n)},a.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(n(e))return t;if("string"==typeof e)return a.del(t,e.split("."));var r=i(e[0]);return u(t,r)?1!==e.length?a.del(t[r],e.slice(1)):(o(t)?t.splice(r,1):delete t[r],t):t},a}var u=a();return u.create=a,u.withInheritedProps=a({includeInheritedProps:!0}),u}()}),zt=function(t){var e=t%100;if(e>=10&&e<=20)return"th";var n=t%10;return 1===n?"st":2===n?"nd":3===n?"rd":"th"};function Gt(t){if("number"!=typeof t)throw new TypeError("Expected Number, got "+typeof t+" "+t);return t+zt(t)}Gt.indicator=zt;var Qt=Gt;function Xt(t,e,n){return function t(e,n,r,o=!0){const i=Object.prototype.hasOwnProperty;function a(t){return null!=t}function u(t){return"Object"===c(t)}function s(t,e){return e=Bt(e),Array.from(t).filter(t=>!e.some(e=>nt.isMatch(t,e,{caseSensitive:!0})))}const h=["any","anything","every","everything","all","whatever","whatevs"],l=Array.isArray;if(!a(e))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const p={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};let g;if(g=a(r)&&u(r)?Object.assign({},p,r):Object.assign({},p),a(g.ignoreKeys)&&g.ignoreKeys?g.ignoreKeys=Bt(g.ignoreKeys):g.ignoreKeys=[],a(g.ignorePaths)&&g.ignorePaths?g.ignorePaths=Bt(g.ignorePaths):g.ignorePaths=[],a(g.acceptArraysIgnore)&&g.acceptArraysIgnore?g.acceptArraysIgnore=Bt(g.acceptArraysIgnore):g.acceptArraysIgnore=[],g.msg="string"==typeof g.msg?g.msg.trim():g.msg,":"===g.msg[g.msg.length-1]&&(g.msg=g.msg.slice(0,g.msg.length-1).trim()),g.schema&&(Object.keys(g.schema).forEach(t=>{if(u(g.schema[t])){const e={};Z(g.schema[t],(n,r,o)=>{const i=void 0!==r?r:n;return l(i)||u(i)||(e[`${t}.${o.path}`]=i),i}),delete g.schema[t],g.schema=Object.assign(g.schema,e)}}),Object.keys(g.schema).forEach(t=>{l(g.schema[t])||(g.schema[t]=[g.schema[t]]),g.schema[t]=g.schema[t].map(String).map(t=>t.toLowerCase()).map(t=>t.trim())})),a(n)||(n={}),o&&t(g,p,{enforceStrictKeyset:!1},!1),g.enforceStrictKeyset)if(a(g.schema)&&Object.keys(g.schema).length>0){if(0!==s(f(Object.keys(e),Object.keys(n).concat(Object.keys(g.schema))),g.ignoreKeys).length){const t=f(Object.keys(e),Object.keys(n).concat(Object.keys(g.schema)));throw new TypeError(`${g.msg}: ${g.optsVarName}.enforceStrictKeyset is on and the following key${t.length>1?"s":""} ${t.length>1?"are":"is"} not covered by schema and/or reference objects: ${t.join(", ")}`)}}else{if(!(a(n)&&Object.keys(n).length>0))throw new TypeError(`${g.msg}: Both ${g.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==s(f(Object.keys(e),Object.keys(n)),g.ignoreKeys).length){const t=f(Object.keys(e),Object.keys(n));throw new TypeError(`${g.msg}: The input object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not covered by the reference object: ${t.join(", ")}`)}if(0!==s(f(Object.keys(n),Object.keys(e)),g.ignoreKeys).length){const t=f(Object.keys(n),Object.keys(e));throw new TypeError(`${g.msg}: The reference object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not present in the input object: ${t.join(", ")}`)}}const y=[];Z(e,(t,r,o)=>{const a=void 0!==r?r:t,f=void 0!==r?t:void 0;if(l(y)&&y.length&&y.some(t=>o.path.startsWith(t)))return a;if(f&&g.ignoreKeys.some(t=>nt.isMatch(f,t)))return a;if(g.ignorePaths.some(t=>nt.isMatch(o.path,t)))return a;const s=!(!u(a)&&!l(a)&&l(o.parent));let p=!1;u(g.schema)&&i.call(g.schema,Ut.get(o.path))&&(p=!0);let d=!1;if(u(n)&&Ut.has(n,Ut.get(o.path))&&(d=!0),g.enforceStrictKeyset&&s&&!p&&!d)throw new TypeError(`${g.msg}: ${g.optsVarName}.${o.path} is neither covered by reference object (second input argument), nor ${g.optsVarName}.schema! To stop this error, turn off ${g.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${g.optsVarName}.schema).\n\nDebug info:\n\nobj = ${JSON.stringify(e,null,4)}\n\nref = ${JSON.stringify(n,null,4)}\n\ninnerObj = ${JSON.stringify(o,null,4)}\n\nopts = ${JSON.stringify(g,null,4)}\n\ncurrent = ${JSON.stringify(a,null,4)}\n\n`);if(p){const t=Bt(g.schema[o.path]).map(String).map(t=>t.toLowerCase());if(Ut.set(g.schema,o.path,t),qt(t,h).length)y.push(o.path);else if(!0!==a&&!1!==a&&!t.includes(c(a).toLowerCase())||(!0===a||!1===a)&&!t.includes(String(a))&&!t.includes("boolean")){if(!l(a)||!g.acceptArrays)throw new TypeError(`${g.msg}: ${g.optsVarName}.${o.path} was customised to ${"string"!==c(a)?'"':""}${JSON.stringify(a,null,0)}${"string"!==c(a)?'"':""} (type: ${c(a).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(t,null,0)})`);for(let e=0,n=a.length;e<n;e++)if(!t.includes(c(a[e]).toLowerCase()))throw new TypeError(`${g.msg}: ${g.optsVarName}.${o.path}.${e}, the ${Qt(e+1)} element (equal to ${JSON.stringify(a[e],null,0)}) is of a type ${c(a[e]).toLowerCase()}, but only the following are allowed by the ${g.optsVarName}.schema: ${t.join(", ")}`)}}else if(d){const e=Ut.get(n,o.path);if(g.acceptArrays&&l(a)&&!g.acceptArraysIgnore.includes(t)){if(!a.every(e=>c(e).toLowerCase()===c(n[t]).toLowerCase()))throw new TypeError(`${g.msg}: ${g.optsVarName}.${o.path} was customised to be array, but not all of its elements are ${c(n[t]).toLowerCase()}-type`)}else if(c(a)!==c(e))throw new TypeError(`${g.msg}: ${g.optsVarName}.${o.path} was customised to ${"string"===c(a).toLowerCase()?"":'"'}${JSON.stringify(a,null,0)}${"string"===c(a).toLowerCase()?"":'"'} which is not ${c(e).toLowerCase()} but ${c(a).toLowerCase()}`)}return a})}(t,e,n)}const Zt=Array.isArray;function Yt(t){return null!=t}function Dt(t){return"Object"===c(t)}function Kt(t){return"string"===c(t)}function te(t){return Dt(t)||Kt(t)||function(t){return"number"===c(t)}(t)||function(t){return"boolean"===c(t)}(t)||Zt(t)||function(t){return null===t}(t)}const ee=Array.isArray;function ne(t,e,r){if(void 0===t)throw new TypeError("ast-compare/compare(): [THROW_ID_01] first argument is missing!");if(void 0===e)throw new TypeError("ast-compare/compare(): [THROW_ID_02] second argument is missing!");if(Yt(t)&&!te(t))throw new TypeError(`ast-compare/compare(): [THROW_ID_03] first input argument is of a wrong type, ${c(t)}, equal to: ${JSON.stringify(t,null,4)}`);if(Yt(e)&&!te(e))throw new TypeError(`ast-compare/compare(): [THROW_ID_04] second input argument is of a wrong type, ${c(e)}, equal to: ${JSON.stringify(e,null,4)}`);if(Yt(r)&&!Dt(r))throw new TypeError(`ast-compare/compare(): [THROW_ID_05] third argument, options object, must, well, be an object! Currently it's: ${c(r)} and equal to: ${JSON.stringify(r,null,4)}`);const o=n(e),i=n(t);let a,u,s,h=0;const l={hungryForWhitespace:!1,matchStrictly:!1,verboseWhenMismatches:!1,useWildcards:!1},p=Object.assign({},l,r);if(Xt(p,l,{msg:"ast-compare/compare(): [THROW_ID_06*]"}),p.hungryForWhitespace&&p.matchStrictly&&Dt(t)&&Y(t)&&Dt(e)&&0===Object.keys(e).length)return!0;if((!p.hungryForWhitespace||p.hungryForWhitespace&&!Y(t)&&Y(e))&&Dt(t)&&0!==Object.keys(t).length&&Dt(e)&&0===Object.keys(e).length||c(t)!==c(e)&&(!p.hungryForWhitespace||p.hungryForWhitespace&&!Y(t)))return!1;if(Kt(i)&&Kt(o))return!!(p.hungryForWhitespace&&Y(i)&&Y(o))||(p.verboseWhenMismatches?i===o||`Given string ${o} is not matched! We have ${i} on the other end.`:p.useWildcards?nt.isMatch(i,o,{caseSensitive:!0}):i===o);if(ee(i)&&ee(o)){if(p.hungryForWhitespace&&Y(o)&&(!p.matchStrictly||p.matchStrictly&&i.length===o.length))return!0;if(!p.hungryForWhitespace&&o.length>i.length||p.matchStrictly&&o.length!==i.length)return!!p.verboseWhenMismatches&&`The length of a given array, ${JSON.stringify(o,null,4)} is ${o.length} but the length of an array on the other end, ${JSON.stringify(i,null,4)} is ${i.length}`;if(0===o.length)return 0===i.length||!!p.verboseWhenMismatches&&`The given array has no elements, but the array on the other end, ${JSON.stringify(i,null,4)} does have some`;for(let t=0,e=o.length;t<e;t++){s=!1;for(let e=h,n=i.length;e<n;e++)if(h+=1,!0===ne(i[e],o[t],p)){s=!0;break}if(!s)return!!p.verboseWhenMismatches&&`The given array ${JSON.stringify(o,null,4)} is not a subset of an array on the other end, ${JSON.stringify(i,null,4)}`}}else{if(!Dt(i)||!Dt(o))return!!(p.hungryForWhitespace&&Y(i)&&Y(o)&&(!p.matchStrictly||p.matchStrictly&&(g=o,Dt(g)?0===Object.keys(g).length:(Zt(g)||Kt(g))&&0===g.length)))||i===o;if(a=Object.keys(o),u=Object.keys(i),p.matchStrictly&&a.length!==u.length){if(!p.verboseWhenMismatches)return!1;const t=f(n(a),n(u)),e=t.length>0?`First object has unique keys: ${JSON.stringify(t,null,4)}.`:"",r=f(n(u),n(a));return`When matching strictly, we found that both objects have different amount of keys. ${e} ${r.length>0?`Second object has unique keys:\n        ${JSON.stringify(r,null,4)}.`:""}`}for(let t=0,e=a.length;t<e;t++){if(!Yt(i[a[t]]))return!p.useWildcards||p.useWildcards&&!a[t].includes("*")?!!p.verboseWhenMismatches&&`The given object has key ${a[t]} which the other-one does not have.`:!!Object.keys(i).some(e=>nt.isMatch(e,a[t],{caseSensitive:!0}))||!!p.verboseWhenMismatches&&`The given object has key ${a[t]} which the other-one does not have.`;if(void 0!==i[a[t]]&&!te(i[a[t]]))throw new TypeError(`ast-compare/compare(): [THROW_ID_07] The input ${JSON.stringify(i,null,4)} contains a value of a wrong type, ${c(i[a[t]])} at index ${t}, equal to: ${JSON.stringify(i[a[t]],null,4)}`);if(!te(o[a[t]]))throw new TypeError(`ast-compare/compare(): [THROW_ID_08] The input ${JSON.stringify(o,null,4)} contains a value of a wrong type, ${c(o[a[t]])} at index ${t}, equal to: ${JSON.stringify(o[a[t]],null,4)}`);if(Yt(i[a[t]])&&c(i[a[t]])!==c(o[a[t]])){if(!(Y(i[a[t]])&&Y(o[a[t]])&&p.hungryForWhitespace))return!!p.verboseWhenMismatches&&`The given key ${a[t]} is of a different type on both objects. On the first-one, it's ${c(o[a[t]])}, on the second-one, it's ${c(i[a[t]])}`}else if(!0!==ne(i[a[t]],o[a[t]],p))return!!p.verboseWhenMismatches&&`The given piece ${JSON.stringify(o[a[t]],null,4)} and ${JSON.stringify(i[a[t]],null,4)} don't match.`}}var g;return!0}function re(t){return null!=t}return function t(e,r,o){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];if(!re(e))throw new Error("ast-get-object: [THROW_ID_01] First argument is missing!");if(!re(r))throw new Error("ast-get-object: [THROW_ID_02] Second argument is missing!");var a=!1;re(o)&&Array.isArray(o)&&(a=!0);var u,f=n(e);return G(f)?ne(f,r)?a?o.length>0&&(f=o[0],o.shift()):i.push(f):Object.keys(f).forEach(function(e){(Array.isArray(f[e])||G(f[e]))&&(a?f[e]=t(f[e],r,o,i):t(f[e],r,o,i))}):Array.isArray(f)&&f.forEach(function(e,n){(G(f[n])||Array.isArray(f[n]))&&(a?f[n]=t(f[n],r,o,i):t(f[n],r,o,i))}),!1!==(u=o)&&re(u)?f:i}});
