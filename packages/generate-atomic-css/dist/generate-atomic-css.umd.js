/**
 * generate-atomic-css
 * Generate Atomic CSS
 * Version: 1.2.45
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/generate-atomic-css
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).generateAtomicCss={})}(this,(function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var c,u=t[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var u,a,l=Function.prototype,f=Object.prototype,s=l.toString,d=f.hasOwnProperty,h=s.call(Object),g=f.toString,p=(u=Object.getPrototypeOf,a=Object,function(t){return u(a(t))});var v=function(t){if(!function(t){return!!t&&"object"==e(t)}(t)||"[object Object]"!=g.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var n=p(t);if(null===n)return!0;var r=d.call(n,"constructor")&&n.constructor;return"function"==typeof r&&r instanceof r&&s.call(r)==h},y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(t,e,n){t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}((function(t,n){var r="[object Arguments]",i="[object Function]",o="[object GeneratorFunction]",c="[object Map]",u="[object Set]",a=/\w*$/,l=/^\[object .+?Constructor\]$/,f=/^(?:0|[1-9]\d*)$/,s={};s[r]=s["[object Array]"]=s["[object ArrayBuffer]"]=s["[object DataView]"]=s["[object Boolean]"]=s["[object Date]"]=s["[object Float32Array]"]=s["[object Float64Array]"]=s["[object Int8Array]"]=s["[object Int16Array]"]=s["[object Int32Array]"]=s[c]=s["[object Number]"]=s["[object Object]"]=s["[object RegExp]"]=s[u]=s["[object String]"]=s["[object Symbol]"]=s["[object Uint8Array]"]=s["[object Uint8ClampedArray]"]=s["[object Uint16Array]"]=s["[object Uint32Array]"]=!0,s["[object Error]"]=s[i]=s["[object WeakMap]"]=!1;var d="object"==e(y)&&y&&y.Object===Object&&y,h="object"==("undefined"==typeof self?"undefined":e(self))&&self&&self.Object===Object&&self,g=d||h||Function("return this")(),p=n&&!n.nodeType&&n,v=p&&t&&!t.nodeType&&t,b=v&&v.exports===p;function m(t,e){return t.set(e[0],e[1]),t}function O(t,e){return t.add(e),t}function _(t,e,n,r){var i=-1,o=t?t.length:0;for(r&&o&&(n=t[++i]);++i<o;)n=e(n,t[i],i,t);return n}function j(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function A(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function w(t,e){return function(n){return t(e(n))}}function x(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var S,T=Array.prototype,E=Function.prototype,C=Object.prototype,I=g["__core-js_shared__"],N=(S=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||""))?"Symbol(src)_1."+S:"",$=E.toString,F=C.hasOwnProperty,P=C.toString,D=RegExp("^"+$.call(F).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),W=b?g.Buffer:void 0,R=g.Symbol,H=g.Uint8Array,G=w(Object.getPrototypeOf,Object),M=Object.create,L=C.propertyIsEnumerable,U=T.splice,k=Object.getOwnPropertySymbols,B=W?W.isBuffer:void 0,V=w(Object.keys,Object),q=yt(g,"DataView"),z=yt(g,"Map"),J=yt(g,"Promise"),K=yt(g,"Set"),Q=yt(g,"WeakMap"),X=yt(Object,"create"),Y=jt(q),Z=jt(z),tt=jt(J),et=jt(K),nt=jt(Q),rt=R?R.prototype:void 0,it=rt?rt.valueOf:void 0;function ot(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function ct(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function ut(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function at(t){this.__data__=new ct(t)}function lt(t,n){var i=wt(t)||function(t){return function(t){return function(t){return!!t&&"object"==e(t)}(t)&&xt(t)}(t)&&F.call(t,"callee")&&(!L.call(t,"callee")||P.call(t)==r)}(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],o=i.length,c=!!o;for(var u in t)!n&&!F.call(t,u)||c&&("length"==u||Ot(u,o))||i.push(u);return i}function ft(t,e,n){var r=t[e];F.call(t,e)&&At(r,n)&&(void 0!==n||e in t)||(t[e]=n)}function st(t,e){for(var n=t.length;n--;)if(At(t[n][0],e))return n;return-1}function dt(t,e,n,l,f,d,h){var g;if(l&&(g=d?l(t,f,d,h):l(t)),void 0!==g)return g;if(!Et(t))return t;var p=wt(t);if(p){if(g=function(t){var e=t.length,n=t.constructor(e);e&&"string"==typeof t[0]&&F.call(t,"index")&&(n.index=t.index,n.input=t.input);return n}(t),!e)return function(t,e){var n=-1,r=t.length;e||(e=Array(r));for(;++n<r;)e[n]=t[n];return e}(t,g)}else{var v=mt(t),y=v==i||v==o;if(St(t))return function(t,e){if(e)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}(t,e);if("[object Object]"==v||v==r||y&&!d){if(j(t))return d?t:{};if(g=function(t){return"function"!=typeof t.constructor||_t(t)?{}:(e=G(t),Et(e)?M(e):{});var e}(y?{}:t),!e)return function(t,e){return pt(t,bt(t),e)}(t,function(t,e){return t&&pt(e,Ct(e),t)}(g,t))}else{if(!s[v])return d?t:{};g=function(t,e,n,r){var i=t.constructor;switch(e){case"[object ArrayBuffer]":return gt(t);case"[object Boolean]":case"[object Date]":return new i(+t);case"[object DataView]":return function(t,e){var n=e?gt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var n=e?gt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}(t,r);case c:return function(t,e,n){return _(e?n(A(t),!0):A(t),m,new t.constructor)}(t,r,n);case"[object Number]":case"[object String]":return new i(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,a.exec(t));return e.lastIndex=t.lastIndex,e}(t);case u:return function(t,e,n){return _(e?n(x(t),!0):x(t),O,new t.constructor)}(t,r,n);case"[object Symbol]":return o=t,it?Object(it.call(o)):{}}var o}(t,v,dt,e)}}h||(h=new at);var b=h.get(t);if(b)return b;if(h.set(t,g),!p)var w=n?function(t){return function(t,e,n){var r=e(t);return wt(t)?r:function(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}(r,n(t))}(t,Ct,bt)}(t):Ct(t);return function(t,e){for(var n=-1,r=t?t.length:0;++n<r&&!1!==e(t[n],n,t););}(w||t,(function(r,i){w&&(r=t[i=r]),ft(g,i,dt(r,e,n,l,i,t,h))})),g}function ht(t){return!(!Et(t)||function(t){return!!N&&N in t}(t))&&(Tt(t)||j(t)?D:l).test(jt(t))}function gt(t){var e=new t.constructor(t.byteLength);return new H(e).set(new H(t)),e}function pt(t,e,n,r){n||(n={});for(var i=-1,o=e.length;++i<o;){var c=e[i],u=r?r(n[c],t[c],c,n,t):void 0;ft(n,c,void 0===u?t[c]:u)}return n}function vt(t,n){var r,i,o=t.__data__;return("string"==(i=e(r=n))||"number"==i||"symbol"==i||"boolean"==i?"__proto__"!==r:null===r)?o["string"==typeof n?"string":"hash"]:o.map}function yt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return ht(n)?n:void 0}ot.prototype.clear=function(){this.__data__=X?X(null):{}},ot.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},ot.prototype.get=function(t){var e=this.__data__;if(X){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return F.call(e,t)?e[t]:void 0},ot.prototype.has=function(t){var e=this.__data__;return X?void 0!==e[t]:F.call(e,t)},ot.prototype.set=function(t,e){return this.__data__[t]=X&&void 0===e?"__lodash_hash_undefined__":e,this},ct.prototype.clear=function(){this.__data__=[]},ct.prototype.delete=function(t){var e=this.__data__,n=st(e,t);return!(n<0)&&(n==e.length-1?e.pop():U.call(e,n,1),!0)},ct.prototype.get=function(t){var e=this.__data__,n=st(e,t);return n<0?void 0:e[n][1]},ct.prototype.has=function(t){return st(this.__data__,t)>-1},ct.prototype.set=function(t,e){var n=this.__data__,r=st(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},ut.prototype.clear=function(){this.__data__={hash:new ot,map:new(z||ct),string:new ot}},ut.prototype.delete=function(t){return vt(this,t).delete(t)},ut.prototype.get=function(t){return vt(this,t).get(t)},ut.prototype.has=function(t){return vt(this,t).has(t)},ut.prototype.set=function(t,e){return vt(this,t).set(t,e),this},at.prototype.clear=function(){this.__data__=new ct},at.prototype.delete=function(t){return this.__data__.delete(t)},at.prototype.get=function(t){return this.__data__.get(t)},at.prototype.has=function(t){return this.__data__.has(t)},at.prototype.set=function(t,e){var n=this.__data__;if(n instanceof ct){var r=n.__data__;if(!z||r.length<199)return r.push([t,e]),this;n=this.__data__=new ut(r)}return n.set(t,e),this};var bt=k?w(k,Object):function(){return[]},mt=function(t){return P.call(t)};function Ot(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||f.test(t))&&t>-1&&t%1==0&&t<e}function _t(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||C)}function jt(t){if(null!=t){try{return $.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function At(t,e){return t===e||t!=t&&e!=e}(q&&"[object DataView]"!=mt(new q(new ArrayBuffer(1)))||z&&mt(new z)!=c||J&&"[object Promise]"!=mt(J.resolve())||K&&mt(new K)!=u||Q&&"[object WeakMap]"!=mt(new Q))&&(mt=function(t){var e=P.call(t),n="[object Object]"==e?t.constructor:void 0,r=n?jt(n):void 0;if(r)switch(r){case Y:return"[object DataView]";case Z:return c;case tt:return"[object Promise]";case et:return u;case nt:return"[object WeakMap]"}return e});var wt=Array.isArray;function xt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!Tt(t)}var St=B||function(){return!1};function Tt(t){var e=Et(t)?P.call(t):"";return e==i||e==o}function Et(t){var n=e(t);return!!t&&("object"==n||"function"==n)}function Ct(t){return xt(t)?lt(t):function(t){if(!_t(t))return V(t);var e=[];for(var n in Object(t))F.call(t,n)&&"constructor"!=n&&e.push(n);return e}(t)}t.exports=function(t){return dt(t,!0,!0)}}));function b(t){var e={value:t,hungry:!1,optional:!1};return(e.value.endsWith("?*")||e.value.endsWith("*?"))&&e.value.length>2?(e.value=e.value.slice(0,e.value.length-2),e.optional=!0,e.hungry=!0):e.value.endsWith("?")&&e.value.length>1?(e.value=e.value.slice(0,~-e.value.length),e.optional=!0):e.value.endsWith("*")&&e.value.length>1&&(e.value=e.value.slice(0,~-e.value.length),e.hungry=!0),e}function m(t,e){return function(t,e,n){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),!t[e+1])return null;if(t[e+1]&&(!n&&t[e+1].trim()||n&&(t[e+1].trim()||"\n\r".includes(t[e+1]))))return e+1;if(t[e+2]&&(!n&&t[e+2].trim()||n&&(t[e+2].trim()||"\n\r".includes(t[e+2]))))return e+2;for(var r=e+1,i=t.length;r<i;r++)if(t[r]&&(!n&&t[r].trim()||n&&(t[r].trim()||"\n\r".includes(t[r]))))return r;return null}(t,e,!1)}function O(t,e){return function(t,e,n){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),e<1)return null;if(t[~-e]&&(!n&&t[~-e].trim()||n&&(t[~-e].trim()||"\n\r".includes(t[~-e]))))return~-e;if(t[e-2]&&(!n&&t[e-2].trim()||n&&(t[e-2].trim()||"\n\r".includes(t[e-2]))))return e-2;for(var r=e;r--;)if(t[r]&&(!n&&t[r].trim()||n&&(t[r].trim()||"\n\r".includes(t[r]))))return r;return null}(t,e,!1)}function _(t,e,n,r,i){if("string"!=typeof e||!e.length)return null;if(n&&"number"==typeof n||(n=0),"right"===t&&!e[n+1]||"left"===t&&!e[~-n])return null;for(var o,c,u,a=n,l=[],f=0;f<i.length;)if("string"==typeof i[f]&&i[f].length){var s=b(i[f]),d=s.value,h=s.optional,g=s.hungry,p="right"===t?m(e,a):O(e,a);if(!(r.i&&e[p].toLowerCase()===d.toLowerCase()||!r.i&&e[p]===d)){if(h){f+=1;continue}if(u){f+=1,u=void 0;continue}return null}var v="right"===t?m(e,p):O(e,p);g&&(r.i&&e[v].toLowerCase()===d.toLowerCase()||!r.i&&e[v]===d)?u=!0:f+=1,"right"===t&&p>a+1?l.push([a+1,p]):"left"===t&&p<~-a&&l.unshift([p+1,a]),a=p,"right"===t?(void 0===o&&(o=p),c=p):(void 0===c&&(c=p),o=p)}else f+=1;return void 0===o?null:{gaps:l,leftmostChar:o,rightmostChar:c}}function j(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];if(!r.length)return O(t,e);var c={i:!1};return _("left",t,e,v(r[0])?i(i({},c),r.shift()):c,Array.from(r).reverse())}function A(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];if(!r.length)return m(t,e);var c={i:!1};return _("right",t,e,v(r[0])?i(i({},c),r.shift()):c,r)}var w=Array.isArray;function x(t){return"string"==typeof t}var S={CONFIGHEAD:"GENERATE-ATOMIC-CSS-CONFIG-STARTS",CONFIGTAIL:"GENERATE-ATOMIC-CSS-CONFIG-ENDS",CONTENTHEAD:"GENERATE-ATOMIC-CSS-CONTENT-STARTS",CONTENTTAIL:"GENERATE-ATOMIC-CSS-CONTENT-ENDS"},T=["px","em","%","rem","cm","mm","in","pt","pc","ex","ch","vw","vmin","vmax"],E=S.CONFIGHEAD,C=S.CONFIGTAIL,I=S.CONTENTHEAD,N=S.CONTENTTAIL,$=[":"];function F(t){var e=t,n="",r="";if(t.includes(E)&&t.includes(C)){if(-1!==t.indexOf(C)&&-1!==t.indexOf(I)&&t.indexOf(C)>t.indexOf(I))throw new Error("generate-atomic-css: [THROW_ID_02] Config heads are after config tails!");var i=t.indexOf(E)+E.length,o=t.indexOf(C);if("*"===t[m(t,i)]&&"/"===t[m(t,m(t,i))]&&(i=m(t,m(t,i))+1),"*"===t[O(t,o)]&&"/"===t[O(t,O(t,o))]&&(o=O(t,O(t,o))),!x(e=t.slice(i,o).trim())||!e.trim().length)return{log:{count:0},result:""}}else if(t.includes(E)&&!t.includes(C)&&t.includes(I)){if(t.indexOf(E)>t.indexOf(I))throw new Error("generate-atomic-css: [THROW_ID_03] Config heads are after content heads!");e=t.slice(t.indexOf(E)+E.length,t.indexOf(I))}else if(t.includes(E)||t.includes(C)||!t.includes(I)&&!t.includes(N)){for(var c=new RegExp("(\\/\\s*\\*\\s*)*".concat(I,"(\\s*\\*\\s*\\/)*")),u=new RegExp("(\\/\\s*\\*\\s*)*".concat(N,"(\\s*\\*\\s*\\/)*")),a=!1,l=[],f=[],s=t.split("\n").filter((function(t){return!!a||(t.includes("$$$")||t.includes("{")||t.includes(":")?(a=!0,!0):(l.push(t),!1))})),d=s.length;d--&&!(s[d].includes("$$$")||s[d].includes("}")||s[d].includes(":"));)f.unshift(s.pop());e=s.join("\n").replace(c,"").replace(u,""),l.length&&(n="".concat(l.join("\n"),"\n")),f.length&&(r="\n".concat(f.join("\n")))}else if((e=t).includes(I)){if(O(t,e.indexOf(I))){var h=e.indexOf(I);j(t,h,"/","*")&&(h=j(t,h,"/","*").leftmostChar),n=0===h?"":t.slice(0,h)}var g=e.indexOf(I)+I.length;A(e,g-1,"*","/")&&(g=A(e,g-1,"*","/").rightmostChar+1);var p=null;if(t.includes(N)){p=t.indexOf(N),"*"===t[O(t,p)]&&"/"===t[O(t,O(t,p))]&&(p=O(t,O(t,p)));var v=t.indexOf(N)+N.length;"*"===t[m(t,v-1)]&&"/"===t[m(t,m(t,v-1))]&&(v=m(t,m(t,v-1))+1),m(t,v)&&(r=t.slice(v))}e=p?e.slice(g,p).trim():e.slice(g).trim()}else if(e.includes(N)){var y,b=[],_=!1,w=(e=e.split("\n").filter((function(t){return t.includes("$$$")||_?(_||(_=!0),!0):(_||b.push(t),!1)})).join("\n")).indexOf(N);j(e,w,"/","*")&&(w=j(e,w,"/","*").leftmostChar),e=e.slice(0,w).trim(),b.length&&(n="".concat(b.join("\n"),"\n")),m(t,t.indexOf(N)+N.length)&&(y=t.indexOf(N)+N.length,"*"===t[m(t,y)]&&"/"===t[m(t,m(t,y))]&&(y=m(t,m(t,y))+1,m(t,y)&&(r=t.slice(y))))}return[e,n,r]}function P(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!e)return t;var n=Array.from(t);if(n.length&&x(n[0])&&!n[0].trim().length)do{n.shift()}while(x(n[0])&&!n[0].trim().length);if(n.length&&x(n[n.length-1])&&!n[n.length-1].trim().length)do{n.pop()}while(n&&n[n.length-1]&&!n[n.length-1].trim().length);return n}function D(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500,i=n,o=r,c=t;if(t.lastIndexOf("}")>0&&t.slice(t.lastIndexOf("}")+1).includes("|")?e=t.slice(t.lastIndexOf("}")+1).split("|").filter((function(t){return t.trim().length})).map((function(t){return t.trim()})).filter((function(t){return String(t).split("").every((function(t){return/\d/g.test(t)}))})):t.includes("|")&&(e=t.split("|").filter((function(t){return t.trim().length})).map((function(t){return t.trim()})).filter((function(t){return String(t).split("").every((function(t){return/\d/g.test(t)}))}))),w(e)&&(1===e.length?o=Number.parseInt(e[0],10):e.length>1&&(i=Number.parseInt(e[0],10),o=Number.parseInt(e[1],10))),t.lastIndexOf("}")>0&&t.slice(t.lastIndexOf("}")+1).includes("|")){if((c=t.slice(0,t.indexOf("|",t.lastIndexOf("}")+1)).trimEnd()).trim().startsWith("|"))for(;c.trim().startsWith("|");)c=c.trimStart().slice(1)}else{for(var u=null,a=!1,l=0,f=t.length,s=null,d=0,h=t.length;d<h;d++)if("0123456789".includes(t[d])?null===s&&t[d].trim().length&&(s=!0):"|"!==t[d]&&t[d].trim().length&&(s=!1),!t[d+1]&&s&&(f=u),"|"===t[d]){if(s){f=u;break}u=d,s=null}else!a&&t[d].trim().length&&(a=!0,null!==u&&(l=u+1));c=t.slice(l,f).trimEnd()}return[i,o,c]}function W(t,e,n,r,i,c){for(var u,a=0,l=o(D(t,0,500),3),f=l[0],s=l[1],d=l[2],h=r-n,g="",p=function(t){for(var r=0,o=0,l=function(e,n){d[e].charCodeAt(0);if("$"===d[e]&&"$"===d[e-1]&&"$"===d[e-2]){var i,u=d.slice(e+1);if(0!==t||!T.some((function(t){if(u.startsWith(t))return i=t,!0}))||"{"!==d[m(d,e+i.length)]&&d[e+i.length+1].trim().length){var a;if(T.some((function(t){if(d.startsWith(t,e+1))return a=t,!0})),!d[e-3].trim().length||$.some((function(t){return d.slice(o,e-2).trim().endsWith(t)}))){var l=0;0===t&&T.some((function(t){return"".concat(d.slice(o,e-2)).startsWith(t)&&(l=t.length),!0})),g+="".concat(d.slice(o+l,e-2)).concat(c?String(t).padStart(String(s).length+(0===t&&a?a.length:0)):t)}else d[e+1].trim().length&&"{"!==d[m(d,e)]?(g+="".concat(d.slice(o,e-2)).concat(t),c&&(r=String(s).length-String(t).length)):g+="".concat(d.slice(o,e-2)).concat(c?String(t).padEnd(String(s).length+(0===t&&a?a.length:0)):t);o=e+1}else g+="".concat(d.slice(o,e-2)).concat(c?String(t).padStart(String(s).length-String(t).length+i.length+1):t),o=e+1+(i?i.length:0)}if("{"===d[e]&&c&&r&&(g+="".concat(d.slice(o,e)).concat(" ".repeat(r)),o=e,r=0),!d[e+1]){var f,h=d.slice(o);0===t&&T.some((function(t){if(h.startsWith(t))return f=t,!0}))?g+="".concat(d.slice(o+f.length)):g+="".concat(d.slice(o)),g+="".concat(t!==s?"\n":"")}},p=0,v=d.length;p<v;p++)l(p);i.count+=1,"function"==typeof e&&(u=Math.floor(n+t/(s-f)*h))!==a&&(a=u,e(u))},v=f;v<=s;v++)p(v);return g}function R(t,e){return/\.\w/g.test(t)&&(e.count+=1),t}t.extractFromToSource=D,t.genAtomic=function(t,n){if("string"!=typeof t)throw new Error('generate-atomic-css: [THROW_ID_01] First input argument must be a string! It was given as "'.concat(JSON.stringify(t,null,4),'" (type ').concat(e(t),")"));var r=S.CONFIGHEAD,c=S.CONFIGTAIL,u=S.CONTENTHEAD,a=S.CONTENTTAIL,l={count:0},f=i(i({},{includeConfig:!0,includeHeadsAndTails:!0,pad:!0,configOverride:null,reportProgressFunc:null,reportProgressFuncFrom:0,reportProgressFuncTo:100}),n);if(f.includeConfig&&!f.includeHeadsAndTails&&(f.includeHeadsAndTails=!0),!f.configOverride&&!t.includes("$$$")&&!t.includes(r)&&!t.includes(c)&&!t.includes(u)&&!t.includes(a)||x(f.configOverride)&&!f.configOverride.includes("$$$")&&!f.configOverride.includes(r)&&!f.configOverride.includes(c)&&!f.configOverride.includes(u)&&!f.configOverride.includes(a))return{log:{count:0},result:t};var s="",d="",h=o(F(f.configOverride?f.configOverride:t),3),g=h[0],p=h[1],v=h[2];if(!x(g)||!g.trim())return{log:{count:0},result:""};if((f.includeConfig||f.includeHeadsAndTails)&&(s="".concat(u," */\n"),f.includeConfig||(s="/* ".concat(s)),d="\n/* ".concat(a," */")),f.includeConfig&&(s="/* ".concat(r,"\n").concat(g.trim(),"\n").concat(c,"\n").concat(s)),t.includes(r)&&null!=O(t,t.indexOf(r))){var y=t.indexOf(r);"*"===t[O(t,y)]&&"/"===t[O(t,O(t,y))]&&(y=O(t,O(t,y)));var b="/* ";("/"===t[m(t,y-1)]&&"*"===t[m(t,m(t,y-1))]||s.trim().startsWith("/*"))&&(b=""),s="".concat(t.slice(0,y)).concat(b).concat(s)}if(t.includes(c)&&m(t,t.indexOf(c)+c.length)){var _=t.indexOf(c)+c.length;if("*"===t[m(t,t.indexOf(c)+c.length)]&&"/"===t[m(t,m(t,t.indexOf(c)+c.length))]&&(_=m(t,m(t,t.indexOf(c)+c.length))+1),t.slice(m(t,_-1)).startsWith(u)){var j=m(t,_);"*"===t[m(t,(_=j+u.length)-1)]&&"/"===t[m(t,m(t,_-1))]&&(_=m(t,m(t,_-1))+1),t.includes(a)&&(_=t.indexOf(a)+a.length,"*"===t[m(t,_)]&&"/"===t[m(t,m(t,_))]&&(_=m(t,m(t,_))+1))}var A=t.slice(_);A.length&&A.includes(a)&&(_=t.indexOf(a)+a.length,"*"===t[m(t,_)]&&"/"===t[m(t,m(t,_))]&&(_=m(t,m(t,_))+1)),d="".concat(d).concat(t[_]&&m(t,_-1)?t.slice(_):"")}if(x(p)&&(s="".concat(p).concat(s)),x(v)){if(v.trim().endsWith("/*")&&!v.trim().startsWith("*/")){var w="";x(v)&&v[0]&&!v[0].trim()&&(w=v.slice(0,m(v,0))),v="".concat(w,"/* ").concat(v.trim())}d="".concat(d).concat(v)}var T="".concat(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.includeConfig||e.includeHeadsAndTails?t.trim():t}("".concat(s).concat(function(t,e,n,r){var i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],o=arguments.length>5?arguments[5]:void 0,c=arguments.length>6?arguments[6]:void 0;return P(t.split(/\r?\n/).map((function(t,i,u){return t.includes("$$$")?W(t,e,n+(r-n)/u.length*i,n+(r-n)/u.length*(i+1),o,c):R(t,o)})),i).join("\n")}(g,f.reportProgressFunc,f.reportProgressFuncFrom,f.reportProgressFuncTo,!0,l,f.pad)).concat(d),f),"\n");return{log:{count:l.count},result:T}},t.headsAndTails=S,t.version="1.2.45",Object.defineProperty(t,"__esModule",{value:!0})}));
