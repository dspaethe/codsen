/**
 * string-left-right
 * Look what's to the left or the right of a given index within a string
 * Version: 2.2.11
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-left-right
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).stringLeftRight={})}(this,function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var n="[object Object]";var o,i,u=Function.prototype,c=Object.prototype,a=u.toString,f=c.hasOwnProperty,l=a.call(Object),s=c.toString,h=(o=Object.getPrototypeOf,i=Object,function(t){return o(i(t))});var p=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||s.call(t)!=n||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=h(t);if(null===e)return!0;var r=f.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&a.call(r)==l},g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var y=function(t,e){return t(e={exports:{}},e.exports),e.exports}(function(t,e){var r=200,n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",u="[object Boolean]",c="[object Date]",a="[object Function]",f="[object GeneratorFunction]",l="[object Map]",s="[object Number]",h="[object Object]",p="[object RegExp]",y="[object Set]",v="[object String]",d="[object Symbol]",b="[object ArrayBuffer]",_="[object DataView]",m="[object Float32Array]",j="[object Float64Array]",w="[object Int8Array]",O="[object Int16Array]",A="[object Int32Array]",S="[object Uint8Array]",x="[object Uint8ClampedArray]",I="[object Uint16Array]",P="[object Uint32Array]",C=/\w*$/,E=/^\[object .+?Constructor\]$/,W=/^(?:0|[1-9]\d*)$/,L={};L[i]=L["[object Array]"]=L[b]=L[_]=L[u]=L[c]=L[m]=L[j]=L[w]=L[O]=L[A]=L[l]=L[s]=L[h]=L[p]=L[y]=L[v]=L[d]=L[S]=L[x]=L[I]=L[P]=!0,L["[object Error]"]=L[a]=L["[object WeakMap]"]=!1;var R="object"==typeof g&&g&&g.Object===Object&&g,T="object"==typeof self&&self&&self.Object===Object&&self,$=R||T||Function("return this")(),k=e&&!e.nodeType&&e,F=k&&t&&!t.nodeType&&t,M=F&&F.exports===k;function B(t,e){return t.set(e[0],e[1]),t}function D(t,e){return t.add(e),t}function U(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function N(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function q(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function z(t,e){return function(r){return t(e(r))}}function H(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}var V,G=Array.prototype,J=Function.prototype,K=Object.prototype,Q=$["__core-js_shared__"],X=(V=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"",Y=J.toString,Z=K.hasOwnProperty,tt=K.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=M?$.Buffer:void 0,nt=$.Symbol,ot=$.Uint8Array,it=z(Object.getPrototypeOf,Object),ut=Object.create,ct=K.propertyIsEnumerable,at=G.splice,ft=Object.getOwnPropertySymbols,lt=rt?rt.isBuffer:void 0,st=z(Object.keys,Object),ht=Ft($,"DataView"),pt=Ft($,"Map"),gt=Ft($,"Promise"),yt=Ft($,"Set"),vt=Ft($,"WeakMap"),dt=Ft(Object,"create"),bt=Nt(ht),_t=Nt(pt),mt=Nt(gt),jt=Nt(yt),wt=Nt(vt),Ot=nt?nt.prototype:void 0,At=Ot?Ot.valueOf:void 0;function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function xt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function It(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Pt(t){this.__data__=new xt(t)}function Ct(t,e){var r=zt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Ht(t)}(t)&&Z.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==i)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var u in t)!e&&!Z.call(t,u)||o&&("length"==u||Dt(u,n))||r.push(u);return r}function Et(t,e,r){var n=t[e];Z.call(t,e)&&qt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Wt(t,e){for(var r=t.length;r--;)if(qt(t[r][0],e))return r;return-1}function Lt(t,e,r,n,o,g,E){var W;if(n&&(W=g?n(t,o,g,E):n(t)),void 0!==W)return W;if(!Jt(t))return t;var R=zt(t);if(R){if(W=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,W)}else{var T=Bt(t),$=T==a||T==f;if(Vt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(T==h||T==i||$&&!g){if(N(t))return g?t:{};if(W=function(t){return"function"!=typeof t.constructor||Ut(t)?{}:(e=it(t),Jt(e)?ut(e):{});var e}($?{}:t),!e)return function(t,e){return $t(t,Mt(t),e)}(t,function(t,e){return t&&$t(e,Kt(e),t)}(W,t))}else{if(!L[T])return g?t:{};W=function(t,e,r,n){var o=t.constructor;switch(e){case b:return Tt(t);case u:case c:return new o(+t);case _:return function(t,e){var r=e?Tt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case m:case j:case w:case O:case A:case S:case x:case I:case P:return function(t,e){var r=e?Tt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return U(e?r(q(t),!0):q(t),B,new t.constructor)}(t,n,r);case s:case v:return new o(t);case p:return(f=new(a=t).constructor(a.source,C.exec(a))).lastIndex=a.lastIndex,f;case y:return function(t,e,r){return U(e?r(H(t),!0):H(t),D,new t.constructor)}(t,n,r);case d:return i=t,At?Object(At.call(i)):{}}var i;var a,f}(t,T,Lt,e)}}E||(E=new Pt);var k=E.get(t);if(k)return k;if(E.set(t,W),!R)var F=r?function(t){return function(t,e,r){var n=e(t);return zt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Kt,Mt)}(t):Kt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(F||t,function(o,i){F&&(o=t[i=o]),Et(W,i,Lt(o,e,r,n,i,t,E))}),W}function Rt(t){return!(!Jt(t)||function(t){return!!X&&X in t}(t))&&(Gt(t)||N(t)?et:E).test(Nt(t))}function Tt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function $t(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var u=e[o],c=n?n(r[u],t[u],u,r,t):void 0;Et(r,u,void 0===c?t[u]:c)}return r}function kt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Ft(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Rt(r)?r:void 0}St.prototype.clear=function(){this.__data__=dt?dt(null):{}},St.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},St.prototype.get=function(t){var e=this.__data__;if(dt){var r=e[t];return r===n?void 0:r}return Z.call(e,t)?e[t]:void 0},St.prototype.has=function(t){var e=this.__data__;return dt?void 0!==e[t]:Z.call(e,t)},St.prototype.set=function(t,e){return this.__data__[t]=dt&&void 0===e?n:e,this},xt.prototype.clear=function(){this.__data__=[]},xt.prototype.delete=function(t){var e=this.__data__,r=Wt(e,t);return!(r<0||(r==e.length-1?e.pop():at.call(e,r,1),0))},xt.prototype.get=function(t){var e=this.__data__,r=Wt(e,t);return r<0?void 0:e[r][1]},xt.prototype.has=function(t){return Wt(this.__data__,t)>-1},xt.prototype.set=function(t,e){var r=this.__data__,n=Wt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},It.prototype.clear=function(){this.__data__={hash:new St,map:new(pt||xt),string:new St}},It.prototype.delete=function(t){return kt(this,t).delete(t)},It.prototype.get=function(t){return kt(this,t).get(t)},It.prototype.has=function(t){return kt(this,t).has(t)},It.prototype.set=function(t,e){return kt(this,t).set(t,e),this},Pt.prototype.clear=function(){this.__data__=new xt},Pt.prototype.delete=function(t){return this.__data__.delete(t)},Pt.prototype.get=function(t){return this.__data__.get(t)},Pt.prototype.has=function(t){return this.__data__.has(t)},Pt.prototype.set=function(t,e){var n=this.__data__;if(n instanceof xt){var o=n.__data__;if(!pt||o.length<r-1)return o.push([t,e]),this;n=this.__data__=new It(o)}return n.set(t,e),this};var Mt=ft?z(ft,Object):function(){return[]},Bt=function(t){return tt.call(t)};function Dt(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||W.test(t))&&t>-1&&t%1==0&&t<e}function Ut(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||K)}function Nt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function qt(t,e){return t===e||t!=t&&e!=e}(ht&&Bt(new ht(new ArrayBuffer(1)))!=_||pt&&Bt(new pt)!=l||gt&&"[object Promise]"!=Bt(gt.resolve())||yt&&Bt(new yt)!=y||vt&&"[object WeakMap]"!=Bt(new vt))&&(Bt=function(t){var e=tt.call(t),r=e==h?t.constructor:void 0,n=r?Nt(r):void 0;if(n)switch(n){case bt:return _;case _t:return l;case mt:return"[object Promise]";case jt:return y;case wt:return"[object WeakMap]"}return e});var zt=Array.isArray;function Ht(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!Gt(t)}var Vt=lt||function(){return!1};function Gt(t){var e=Jt(t)?tt.call(t):"";return e==a||e==f}function Jt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Kt(t){return Ht(t)?Ct(t):function(t){if(!Ut(t))return st(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return Lt(t,!0,!0)}});function v(t){return"number"==typeof t}function d(t){return"string"==typeof t}function b(t,e){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),!t[e+1])return null;if(t[e+1]&&t[e+1].trim().length)return e+1;if(t[e+2]&&t[e+2].trim().length)return e+2;for(var r=e+1,n=t.length;r<n;r++)if(t[r].trim().length)return r;return null}function _(t,e){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),e<1)return null;if(t[e-1]&&t[e-1].trim().length)return e-1;if(t[e-2]&&t[e-2].trim().length)return e-2;for(var r=e;r--;)if(t[r]&&t[r].trim().length)return r;return null}function m(t,e,r,n,o){if("string"!=typeof e||!e.length)return null;if(r&&"number"==typeof r||(r=0),"right"===t&&!e[r+1]||"left"===t&&!e[r-1])return null;for(var i,u,c,a,f,l=r,s=[],h=0;h<o.length;)if(d(o[h])&&o[h].length){var p=(a=o[h],f=void 0,((f={value:a,hungry:!1,optional:!1}).value.endsWith("?*")||f.value.endsWith("*?"))&&f.value.length>2?(f.value=f.value.slice(0,f.value.length-2),f.optional=!0,f.hungry=!0):f.value.endsWith("?")&&f.value.length>1?(f.value=f.value.slice(0,f.value.length-1),f.optional=!0):f.value.endsWith("*")&&f.value.length>1&&(f.value=f.value.slice(0,f.value.length-1),f.hungry=!0),f),g=p.value,y=p.optional,v=p.hungry,m="right"===t?b(e,l):_(e,l);if(!(n.i&&e[m].toLowerCase()===g.toLowerCase()||!n.i&&e[m]===g)){if(y){h++;continue}if(c){h++,c=void 0;continue}return null}var j="right"===t?b(e,m):_(e,m);v&&(n.i&&e[j].toLowerCase()===g.toLowerCase()||!n.i&&e[j]===g)?c=!0:h++,"right"===t&&m>l+1?s.push([l+1,m]):"left"===t&&m<l-1&&s.unshift([m+1,l]),l=m,"right"===t?(void 0===i&&(i=m),u=m):(void 0===u&&(u=m),i=m)}else h++;return void 0===i?null:{gaps:s,leftmostChar:i,rightmostChar:u}}function j(t,e){for(var r=arguments.length,n=new Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];if(!n.length)return _(t,e);var i={i:!1};return m("left",t,e,p(n[0])?Object.assign({},i,n.shift()):i,Array.from(n).reverse())}function w(t,e){for(var r=arguments.length,n=new Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];if(!n.length)return b(t,e);var i={i:!1};return m("right",t,e,p(n[0])?Object.assign({},i,n.shift()):i,n)}function O(t,e,n,o,i){if("string"!=typeof e||!e.length)return null;if(n&&"number"==typeof n||(n=0),"right"===t&&!e[n+1]||"left"===t&&(v(n)&&n<1||"0"===n))return null;var u=null,c=null;do{null!==(u="right"===t?w.apply(void 0,[e,v(c)?c:n].concat(r(i))):j.apply(void 0,[e,v(c)?c:n].concat(r(i))))&&(c="right"===t?u.rightmostChar:u.leftmostChar)}while(u);if(null!=c&&"right"===t&&c++,null===c)return null;if("right"===t){if(e[c]&&e[c].trim().length)return c;var a=b(e,c);if(0===o.mode){if(a===c+1)return c;if(!(e.slice(c,a||e.length).trim().length||e.slice(c,a||e.length).includes("\n")||e.slice(c,a||e.length).includes("\r")))return a?a-1:e.length;for(var f=c,l=e.length;f<l;f++)if("\n\r".includes(e[f]))return f}else{if(1===o.mode)return c;if(2===o.mode){var s=e.slice(c);if(s.trim().length||s.includes("\n")||s.includes("\r"))for(var h=c,p=e.length;h<p;h++)if(e[h].trim().length||"\n\r".includes(e[h]))return h;return e.length}}return a||e.length}if(e[c]&&e[c-1]&&e[c-1].trim().length)return c;var g=_(e,c);if(0===o.mode){if(g===c-2)return c;if(e.slice(0,c).trim().length||e.slice(0,c).includes("\n")||e.slice(0,c).includes("\r"))for(var y=c;y--;)if("\n\r".includes(e[y])||e[y].trim().length)return y+1+(e[y].trim().length?1:0);return 0}if(1===o.mode)return c;if(2===o.mode){var d=e.slice(0,c);if(d.trim().length||d.includes("\n")||d.includes("\r"))for(var m=c;m--;)if(e[m].trim().length||"\n\r".includes(e[m]))return m+1;return 0}return null!==g?g+1:0}t.chompLeft=function(t,r){for(var n=arguments.length,o=new Array(n>2?n-2:0),i=2;i<n;i++)o[i-2]=arguments[i];if(!o.length||1===o.length&&p(o[0]))return null;var u={mode:0};if(p(o[0])){var c=Object.assign({},u,y(o[0]));if(c.mode){if(d(c.mode)&&"0123".includes(c.mode))c.mode=Number.parseInt(c.mode,10);else if(!v(c.mode))throw new Error("string-left-right/chompLeft(): [THROW_ID_01] the opts.mode is wrong! It should be 0, 1, 2 or 3. It was given as ".concat(c.mode," (type ").concat(e(c.mode),")"))}else c.mode=0;return O("left",t,r,c,y(o).slice(1))}return d(o[0])?O("left",t,r,u,y(o)):O("left",t,r,u,y(o).slice(1))},t.chompRight=function(t,r){for(var n=arguments.length,o=new Array(n>2?n-2:0),i=2;i<n;i++)o[i-2]=arguments[i];if(!o.length||1===o.length&&p(o[0]))return null;var u={mode:0};if(p(o[0])){var c=Object.assign({},u,y(o[0]));if(c.mode){if(d(c.mode)&&"0123".includes(c.mode))c.mode=Number.parseInt(c.mode,10);else if(!v(c.mode))throw new Error("string-left-right/chompRight(): [THROW_ID_02] the opts.mode is wrong! It should be 0, 1, 2 or 3. It was given as ".concat(c.mode," (type ").concat(e(c.mode),")"))}else c.mode=0;return O("right",t,r,c,y(o).slice(1))}return d(o[0])?O("right",t,r,u,y(o)):O("right",t,r,u,y(o).slice(1))},t.left=_,t.leftSeq=j,t.right=b,t.rightSeq=w,Object.defineProperty(t,"__esModule",{value:!0})});
