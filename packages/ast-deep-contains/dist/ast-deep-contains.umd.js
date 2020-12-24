/**
 * ast-deep-contains
 * Like t.same assert on array of objects, where element order doesn't matter.
 * Version: 2.0.1
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ast-deep-contains/
 */

!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((n="undefined"!=typeof globalThis?globalThis:n||self).astDeepContains={})}(this,(function(n){"use strict";function t(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function r(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.push.apply(r,e)}return r}function e(n){for(var e=1;arguments.length>e;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(r){t(n,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(o,t))}))}return n}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function u(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function i(n){var t={exports:{}};return n(t,t.exports),t.exports}var a=i((function(n){n.exports=function(){var n=Object.prototype.toString;function t(n,t){return null!=n&&Object.prototype.hasOwnProperty.call(n,t)}function r(n){if(!n)return!0;if(u(n)&&0===n.length)return!0;if("string"!=typeof n){for(var r in n)if(t(n,r))return!1;return!0}return!1}function e(t){return n.call(t)}function o(n){return"object"==typeof n&&"[object Object]"===e(n)}var u=Array.isArray||function(t){return"[object Array]"===n.call(t)};function i(n){return"boolean"==typeof n||"[object Boolean]"===e(n)}function a(n){var t=parseInt(n);return""+t===n?t:n}function c(n){var e,c=function n(t){return Object.keys(n).reduce((function(r,e){return"create"===e||"function"==typeof n[e]&&(r[e]=n[e].bind(n,t)),r}),{})};function f(n,t){if(e(n,t))return n[t]}function l(t,r,e,o){if("number"==typeof r&&(r=[r]),!r||0===r.length)return t;if("string"==typeof r)return l(t,r.split(".").map(a),e,o);var u=r[0],i=f(t,u);if(n.includeInheritedProps&&("__proto__"===u||"constructor"===u&&"function"==typeof i))throw Error("For security reasons, object's magic properties cannot be set");return 1===r.length?(void 0!==i&&o||(t[u]=e),i):(void 0===i&&(t[u]="number"==typeof r[1]?[]:{}),l(t[u],r.slice(1),e,o))}return e=(n=n||{}).includeInheritedProps?function(){return!0}:function(n,r){return"number"==typeof r&&Array.isArray(n)||t(n,r)},c.has=function(r,e){if("number"==typeof e?e=[e]:"string"==typeof e&&(e=e.split(".")),!e||0===e.length)return!!r;for(var o=0;e.length>o;o++){var i=a(e[o]);if(!("number"==typeof i&&u(r)&&r.length>i||(n.includeInheritedProps?i in Object(r):t(r,i))))return!1;r=r[i]}return!0},c.ensureExists=function(n,t,r){return l(n,t,r,!0)},c.set=function(n,t,r,e){return l(n,t,r,e)},c.insert=function(n,t,r,e){var o=c.get(n,t);e=~~e,u(o)||c.set(n,t,o=[]),o.splice(e,0,r)},c.empty=function(n,t){var a,f;if(!r(t)&&null!=n&&(a=c.get(n,t))){if("string"==typeof a)return c.set(n,t,"");if(i(a))return c.set(n,t,!1);if("number"==typeof a)return c.set(n,t,0);if(u(a))a.length=0;else{if(!o(a))return c.set(n,t,null);for(f in a)e(a,f)&&delete a[f]}}},c.push=function(n,t){var r=c.get(n,t);u(r)||c.set(n,t,r=[]),r.push.apply(r,Array.prototype.slice.call(arguments,2))},c.coalesce=function(n,t,r){for(var e,o=0,u=t.length;u>o;o++)if(void 0!==(e=c.get(n,t[o])))return e;return r},c.get=function(n,t,r){if("number"==typeof t&&(t=[t]),!t||0===t.length)return n;if(null==n)return r;if("string"==typeof t)return c.get(n,t.split("."),r);var e=a(t[0]),o=f(n,e);return void 0===o?r:1===t.length?o:c.get(n[e],t.slice(1),r)},c.del=function(n,t){if("number"==typeof t&&(t=[t]),null==n)return n;if(r(t))return n;if("string"==typeof t)return c.del(n,t.split("."));var o=a(t[0]);return e(n,o)?1!==t.length?c.del(n[o],t.slice(1)):(u(n)?n.splice(o,1):delete n[o],n):n},c}var f=c();return f.create=c,f.withInheritedProps=c({includeInheritedProps:!0}),f}()})),c=i((function(n,t){var r="__lodash_hash_undefined__",e=9007199254740991,u="[object Arguments]",i="[object Boolean]",a="[object Date]",c="[object Function]",f="[object GeneratorFunction]",l="[object Map]",s="[object Number]",y="[object Object]",p="[object Promise]",b="[object RegExp]",d="[object Set]",g="[object String]",v="[object Symbol]",h="[object WeakMap]",m="[object ArrayBuffer]",_="[object DataView]",A="[object Float32Array]",j="[object Float64Array]",O="[object Int8Array]",w="[object Int16Array]",S="[object Int32Array]",I="[object Uint8Array]",E="[object Uint8ClampedArray]",P="[object Uint16Array]",F="[object Uint32Array]",k=/\w*$/,x=/^\[object .+?Constructor\]$/,M=/^(?:0|[1-9]\d*)$/,U={};U[u]=U["[object Array]"]=U[m]=U[_]=U[i]=U[a]=U[A]=U[j]=U[O]=U[w]=U[S]=U[l]=U[s]=U[y]=U[b]=U[d]=U[g]=U[v]=U[I]=U[E]=U[P]=U[F]=!0,U["[object Error]"]=U[c]=U[h]=!1;var B="object"==typeof self&&self&&self.Object===Object&&self,N="object"==typeof o&&o&&o.Object===Object&&o||B||Function("return this")(),T=t&&!t.nodeType&&t,C=T&&n&&!n.nodeType&&n,G=C&&C.exports===T;function L(n,t){return n.set(t[0],t[1]),n}function D(n,t){return n.add(t),n}function R(n,t,r,e){var o=-1,u=n?n.length:0;for(e&&u&&(r=n[++o]);++o<u;)r=t(r,n[o],o,n);return r}function W(n){var t=!1;if(null!=n&&"function"!=typeof n.toString)try{t=!!(n+"")}catch(n){}return t}function V(n){var t=-1,r=Array(n.size);return n.forEach((function(n,e){r[++t]=[e,n]})),r}function J(n,t){return function(r){return n(t(r))}}function $(n){var t=-1,r=Array(n.size);return n.forEach((function(n){r[++t]=n})),r}var z,H=Array.prototype,K=Function.prototype,q=Object.prototype,Q=N["__core-js_shared__"],X=(z=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+z:"",Y=K.toString,Z=q.hasOwnProperty,nn=q.toString,tn=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rn=G?N.Buffer:void 0,en=N.Symbol,on=N.Uint8Array,un=J(Object.getPrototypeOf,Object),an=Object.create,cn=q.propertyIsEnumerable,fn=H.splice,ln=Object.getOwnPropertySymbols,sn=rn?rn.isBuffer:void 0,yn=J(Object.keys,Object),pn=Gn(N,"DataView"),bn=Gn(N,"Map"),dn=Gn(N,"Promise"),gn=Gn(N,"Set"),vn=Gn(N,"WeakMap"),hn=Gn(Object,"create"),mn=Vn(pn),_n=Vn(bn),An=Vn(dn),jn=Vn(gn),On=Vn(vn),wn=en?en.prototype:void 0,Sn=wn?wn.valueOf:void 0;function In(n){var t=-1,r=n?n.length:0;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function En(n){var t=-1,r=n?n.length:0;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Pn(n){var t=-1,r=n?n.length:0;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Fn(n){this.__data__=new En(n)}function kn(n,t){var r=$n(n)||function(n){return function(n){return function(n){return!!n&&"object"==typeof n}(n)&&zn(n)}(n)&&Z.call(n,"callee")&&(!cn.call(n,"callee")||nn.call(n)==u)}(n)?function(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}(n.length,String):[],e=r.length,o=!!e;for(var i in n)!t&&!Z.call(n,i)||o&&("length"==i||Rn(i,e))||r.push(i);return r}function xn(n,t,r){var e=n[t];Z.call(n,t)&&Jn(e,r)&&(void 0!==r||t in n)||(n[t]=r)}function Mn(n,t){for(var r=n.length;r--;)if(Jn(n[r][0],t))return r;return-1}function Un(n,t,r,e,o,p,h){var x;if(e&&(x=p?e(n,o,p,h):e(n)),void 0!==x)return x;if(!qn(n))return n;var M=$n(n);if(M){if(x=function(n){var t=n.length,r=n.constructor(t);t&&"string"==typeof n[0]&&Z.call(n,"index")&&(r.index=n.index,r.input=n.input);return r}(n),!t)return function(n,t){var r=-1,e=n.length;t||(t=Array(e));for(;++r<e;)t[r]=n[r];return t}(n,x)}else{var B=Dn(n),N=B==c||B==f;if(Hn(n))return function(n,t){if(t)return n.slice();var r=new n.constructor(n.length);return n.copy(r),r}(n,t);if(B==y||B==u||N&&!p){if(W(n))return p?n:{};if(x=function(n){return"function"!=typeof n.constructor||Wn(n)?{}:(t=un(n),qn(t)?an(t):{});var t}(N?{}:n),!t)return function(n,t){return Tn(n,Ln(n),t)}(n,function(n,t){return n&&Tn(t,Qn(t),n)}(x,n))}else{if(!U[B])return p?n:{};x=function(n,t,r,e){var o=n.constructor;switch(t){case m:return Nn(n);case i:case a:return new o(+n);case _:return function(n,t){var r=t?Nn(n.buffer):n.buffer;return new n.constructor(r,n.byteOffset,n.byteLength)}(n,e);case A:case j:case O:case w:case S:case I:case E:case P:case F:return function(n,t){var r=t?Nn(n.buffer):n.buffer;return new n.constructor(r,n.byteOffset,n.length)}(n,e);case l:return function(n,t,r){return R(t?r(V(n),!0):V(n),L,new n.constructor)}(n,e,r);case s:case g:return new o(n);case b:return function(n){var t=new n.constructor(n.source,k.exec(n));return t.lastIndex=n.lastIndex,t}(n);case d:return function(n,t,r){return R(t?r($(n),!0):$(n),D,new n.constructor)}(n,e,r);case v:return u=n,Sn?Object(Sn.call(u)):{}}var u}(n,B,Un,t)}}h||(h=new Fn);var T=h.get(n);if(T)return T;if(h.set(n,x),!M)var C=r?function(n){return function(n,t,r){var e=t(n);return $n(n)?e:function(n,t){for(var r=-1,e=t.length,o=n.length;++r<e;)n[o+r]=t[r];return n}(e,r(n))}(n,Qn,Ln)}(n):Qn(n);return function(n,t){for(var r=-1,e=n?n.length:0;++r<e&&!1!==t(n[r],r,n););}(C||n,(function(o,u){C&&(o=n[u=o]),xn(x,u,Un(o,t,r,e,u,n,h))})),x}function Bn(n){return!(!qn(n)||(t=n,X&&X in t))&&(Kn(n)||W(n)?tn:x).test(Vn(n));var t}function Nn(n){var t=new n.constructor(n.byteLength);return new on(t).set(new on(n)),t}function Tn(n,t,r,e){r||(r={});for(var o=-1,u=t.length;++o<u;){var i=t[o],a=e?e(r[i],n[i],i,r,n):void 0;xn(r,i,void 0===a?n[i]:a)}return r}function Cn(n,t){var r,e,o=n.__data__;return("string"==(e=typeof(r=t))||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function Gn(n,t){var r=function(n,t){return null==n?void 0:n[t]}(n,t);return Bn(r)?r:void 0}In.prototype.clear=function(){this.__data__=hn?hn(null):{}},In.prototype.delete=function(n){return this.has(n)&&delete this.__data__[n]},In.prototype.get=function(n){var t=this.__data__;if(hn){var e=t[n];return e===r?void 0:e}return Z.call(t,n)?t[n]:void 0},In.prototype.has=function(n){var t=this.__data__;return hn?void 0!==t[n]:Z.call(t,n)},In.prototype.set=function(n,t){return this.__data__[n]=hn&&void 0===t?r:t,this},En.prototype.clear=function(){this.__data__=[]},En.prototype.delete=function(n){var t=this.__data__,r=Mn(t,n);return r>=0&&(r==t.length-1?t.pop():fn.call(t,r,1),!0)},En.prototype.get=function(n){var t=this.__data__,r=Mn(t,n);return 0>r?void 0:t[r][1]},En.prototype.has=function(n){return Mn(this.__data__,n)>-1},En.prototype.set=function(n,t){var r=this.__data__,e=Mn(r,n);return 0>e?r.push([n,t]):r[e][1]=t,this},Pn.prototype.clear=function(){this.__data__={hash:new In,map:new(bn||En),string:new In}},Pn.prototype.delete=function(n){return Cn(this,n).delete(n)},Pn.prototype.get=function(n){return Cn(this,n).get(n)},Pn.prototype.has=function(n){return Cn(this,n).has(n)},Pn.prototype.set=function(n,t){return Cn(this,n).set(n,t),this},Fn.prototype.clear=function(){this.__data__=new En},Fn.prototype.delete=function(n){return this.__data__.delete(n)},Fn.prototype.get=function(n){return this.__data__.get(n)},Fn.prototype.has=function(n){return this.__data__.has(n)},Fn.prototype.set=function(n,t){var r=this.__data__;if(r instanceof En){var e=r.__data__;if(!bn||199>e.length)return e.push([n,t]),this;r=this.__data__=new Pn(e)}return r.set(n,t),this};var Ln=ln?J(ln,Object):function(){return[]},Dn=function(n){return nn.call(n)};function Rn(n,t){return!!(t=null==t?e:t)&&("number"==typeof n||M.test(n))&&n>-1&&n%1==0&&t>n}function Wn(n){var t=n&&n.constructor;return n===("function"==typeof t&&t.prototype||q)}function Vn(n){if(null!=n){try{return Y.call(n)}catch(n){}try{return n+""}catch(n){}}return""}function Jn(n,t){return n===t||n!=n&&t!=t}(pn&&Dn(new pn(new ArrayBuffer(1)))!=_||bn&&Dn(new bn)!=l||dn&&Dn(dn.resolve())!=p||gn&&Dn(new gn)!=d||vn&&Dn(new vn)!=h)&&(Dn=function(n){var t=nn.call(n),r=t==y?n.constructor:void 0,e=r?Vn(r):void 0;if(e)switch(e){case mn:return _;case _n:return l;case An:return p;case jn:return d;case On:return h}return t});var $n=Array.isArray;function zn(n){return null!=n&&function(n){return"number"==typeof n&&n>-1&&n%1==0&&e>=n}(n.length)&&!Kn(n)}var Hn=sn||function(){return!1};function Kn(n){var t=qn(n)?nn.call(n):"";return t==c||t==f}function qn(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function Qn(n){return zn(n)?kn(n):function(n){if(!Wn(n))return yn(n);var t=[];for(var r in Object(n))Z.call(n,r)&&"constructor"!=r&&t.push(r);return t}(n)}n.exports=function(n){return Un(n,!0,!0)}}));var f,l,s=Object.prototype,y=Function.prototype.toString,p=s.hasOwnProperty,b=y.call(Object),d=s.toString,g=(f=Object.getPrototypeOf,l=Object,function(n){return f(l(n))});var v=function(n){if(!function(n){return!!n&&"object"==typeof n}(n)||"[object Object]"!=d.call(n)||function(n){var t=!1;if(null!=n&&"function"!=typeof n.toString)try{t=!!(n+"")}catch(n){}return t}(n))return!1;var t=g(n);if(null===t)return!0;var r=p.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&y.call(r)==b};function h(n){if(n.includes(".")){var t=n.lastIndexOf(".");if(!n.slice(0,t).includes("."))return n.slice(0,t);for(var r=t-1;r--;)if("."===n[r])return n.slice(r+1,t)}return null}var m=u(i((function(n,t){Object.defineProperty(t,"__esModule",{value:!0});var r=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array","BigInt64Array","BigUint64Array"];var e=["Function","Generator","AsyncGenerator","GeneratorFunction","AsyncGeneratorFunction","AsyncFunction","Observable","Array","Buffer","Object","RegExp","Date","Error","Map","Set","WeakMap","WeakSet","ArrayBuffer","SharedArrayBuffer","DataView","Promise","URL","HTMLElement"].concat(r);var o=["null","undefined","string","number","bigint","boolean","symbol"];function u(n){return function(t){return typeof t===n}}var i=Object.prototype.toString,a=function(n){var t=i.call(n).slice(8,-1);return/HTML\w+Element/.test(t)&&f.domElement(n)?"HTMLElement":e.includes(t)?t:void 0},c=function(n){return function(t){return a(t)===n}};function f(n){if(null===n)return"null";switch(typeof n){case"undefined":return"undefined";case"string":return"string";case"number":return"number";case"boolean":return"boolean";case"function":return"Function";case"bigint":return"bigint";case"symbol":return"symbol"}if(f.observable(n))return"Observable";if(f.array(n))return"Array";if(f.buffer(n))return"Buffer";var t=a(n);if(t)return t;if(n instanceof String||n instanceof Boolean||n instanceof Number)throw new TypeError("Please don't use object wrappers for primitive types");return"Object"}f.undefined=u("undefined"),f.string=u("string");var l=u("number");f.number=function(n){return l(n)&&!f.nan(n)},f.bigint=u("bigint"),f.function_=u("function"),f.null_=function(n){return null===n},f.class_=function(n){return f.function_(n)&&(""+n).startsWith("class ")},f.boolean=function(n){return!0===n||!1===n},f.symbol=u("symbol"),f.numericString=function(n){return f.string(n)&&!f.emptyStringOrWhitespace(n)&&!Number.isNaN(Number(n))},f.array=function(n,t){return!!Array.isArray(n)&&(!f.function_(t)||n.every(t))},f.buffer=function(n){var t,r,e,o;return null!==(o=null===(e=null===(r=null===(t=n)||void 0===t?void 0:t.constructor)||void 0===r?void 0:r.isBuffer)||void 0===e?void 0:e.call(r,n))&&void 0!==o&&o},f.nullOrUndefined=function(n){return f.null_(n)||f.undefined(n)},f.object=function(n){return!f.null_(n)&&("object"==typeof n||f.function_(n))},f.iterable=function(n){var t;return f.function_(null===(t=n)||void 0===t?void 0:t[Symbol.iterator])},f.asyncIterable=function(n){var t;return f.function_(null===(t=n)||void 0===t?void 0:t[Symbol.asyncIterator])},f.generator=function(n){return f.iterable(n)&&f.function_(n.next)&&f.function_(n.throw)},f.asyncGenerator=function(n){return f.asyncIterable(n)&&f.function_(n.next)&&f.function_(n.throw)},f.nativePromise=function(n){return c("Promise")(n)};f.promise=function(n){return f.nativePromise(n)||function(n){var t,r;return f.function_(null===(t=n)||void 0===t?void 0:t.then)&&f.function_(null===(r=n)||void 0===r?void 0:r.catch)}(n)},f.generatorFunction=c("GeneratorFunction"),f.asyncGeneratorFunction=function(n){return"AsyncGeneratorFunction"===a(n)},f.asyncFunction=function(n){return"AsyncFunction"===a(n)},f.boundFunction=function(n){return f.function_(n)&&!n.hasOwnProperty("prototype")},f.regExp=c("RegExp"),f.date=c("Date"),f.error=c("Error"),f.map=function(n){return c("Map")(n)},f.set=function(n){return c("Set")(n)},f.weakMap=function(n){return c("WeakMap")(n)},f.weakSet=function(n){return c("WeakSet")(n)},f.int8Array=c("Int8Array"),f.uint8Array=c("Uint8Array"),f.uint8ClampedArray=c("Uint8ClampedArray"),f.int16Array=c("Int16Array"),f.uint16Array=c("Uint16Array"),f.int32Array=c("Int32Array"),f.uint32Array=c("Uint32Array"),f.float32Array=c("Float32Array"),f.float64Array=c("Float64Array"),f.bigInt64Array=c("BigInt64Array"),f.bigUint64Array=c("BigUint64Array"),f.arrayBuffer=c("ArrayBuffer"),f.sharedArrayBuffer=c("SharedArrayBuffer"),f.dataView=c("DataView"),f.directInstanceOf=function(n,t){return Object.getPrototypeOf(n)===t.prototype},f.urlInstance=function(n){return c("URL")(n)},f.urlString=function(n){if(!f.string(n))return!1;try{return new URL(n),!0}catch(n){return!1}},f.truthy=function(n){return!!n},f.falsy=function(n){return!n},f.nan=function(n){return Number.isNaN(n)},f.primitive=function(n){return f.null_(n)||o.includes(typeof n)},f.integer=function(n){return Number.isInteger(n)},f.safeInteger=function(n){return Number.isSafeInteger(n)},f.plainObject=function(n){if("[object Object]"!==i.call(n))return!1;var t=Object.getPrototypeOf(n);return null===t||t===Object.getPrototypeOf({})},f.typedArray=function(n){return t=a(n),r.includes(t);var t};f.arrayLike=function(n){return!f.nullOrUndefined(n)&&!f.function_(n)&&function(n){return f.safeInteger(n)&&n>=0}(n.length)},f.inRange=function(n,t){if(f.number(t))return n>=Math.min(0,t)&&Math.max(t,0)>=n;if(f.array(t)&&2===t.length)return n>=Math.min.apply(Math,t)&&n<=Math.max.apply(Math,t);throw new TypeError("Invalid range: "+JSON.stringify(t))};var s=["innerHTML","ownerDocument","style","attributes","nodeValue"];f.domElement=function(n){return f.object(n)&&1===n.nodeType&&f.string(n.nodeName)&&!f.plainObject(n)&&s.every((function(t){return t in n}))},f.observable=function(n){var t,r,e,o;return!!n&&(n===(null===(r=(t=n)[Symbol.observable])||void 0===r?void 0:r.call(t))||n===(null===(o=(e=n)["@@observable"])||void 0===o?void 0:o.call(e)))},f.nodeStream=function(n){return f.object(n)&&f.function_(n.pipe)&&!f.observable(n)},f.infinite=function(n){return n===1/0||n===-1/0};var y=function(n){return function(t){return f.integer(t)&&Math.abs(t%2)===n}};f.evenInteger=y(0),f.oddInteger=y(1),f.emptyArray=function(n){return f.array(n)&&0===n.length},f.nonEmptyArray=function(n){return f.array(n)&&n.length>0},f.emptyString=function(n){return f.string(n)&&0===n.length},f.nonEmptyString=function(n){return f.string(n)&&n.length>0};f.emptyStringOrWhitespace=function(n){return f.emptyString(n)||function(n){return f.string(n)&&!/\S/.test(n)}(n)},f.emptyObject=function(n){return f.object(n)&&!f.map(n)&&!f.set(n)&&0===Object.keys(n).length},f.nonEmptyObject=function(n){return f.object(n)&&!f.map(n)&&!f.set(n)&&Object.keys(n).length>0},f.emptySet=function(n){return f.set(n)&&0===n.size},f.nonEmptySet=function(n){return f.set(n)&&n.size>0},f.emptyMap=function(n){return f.map(n)&&0===n.size},f.nonEmptyMap=function(n){return f.map(n)&&n.size>0};var p=function(n,t,r){if(!f.function_(t))throw new TypeError("Invalid predicate: "+JSON.stringify(t));if(0===r.length)throw new TypeError("Invalid number of values");return n.call(r,t)};f.any=function(n){for(var t=arguments.length,r=Array(t>1?t-1:0),e=1;t>e;e++)r[e-1]=arguments[e];var o=f.array(n)?n:[n];return o.some((function(n){return p(Array.prototype.some,n,r)}))},f.all=function(n){for(var t=arguments.length,r=Array(t>1?t-1:0),e=1;t>e;e++)r[e-1]=arguments[e];return p(Array.prototype.every,n,r)};var b=function(n,t,r){if(!n)throw new TypeError("Expected value which is `"+t+"`, received value of type `"+f(r)+"`.")};t.assert={undefined:function(n){return b(f.undefined(n),"undefined",n)},string:function(n){return b(f.string(n),"string",n)},number:function(n){return b(f.number(n),"number",n)},bigint:function(n){return b(f.bigint(n),"bigint",n)},function_:function(n){return b(f.function_(n),"Function",n)},null_:function(n){return b(f.null_(n),"null",n)},class_:function(n){return b(f.class_(n),"Class",n)},boolean:function(n){return b(f.boolean(n),"boolean",n)},symbol:function(n){return b(f.symbol(n),"symbol",n)},numericString:function(n){return b(f.numericString(n),"string with a number",n)},array:function(n,t){b(f.array(n),"Array",n),t&&n.forEach(t)},buffer:function(n){return b(f.buffer(n),"Buffer",n)},nullOrUndefined:function(n){return b(f.nullOrUndefined(n),"null or undefined",n)},object:function(n){return b(f.object(n),"Object",n)},iterable:function(n){return b(f.iterable(n),"Iterable",n)},asyncIterable:function(n){return b(f.asyncIterable(n),"AsyncIterable",n)},generator:function(n){return b(f.generator(n),"Generator",n)},asyncGenerator:function(n){return b(f.asyncGenerator(n),"AsyncGenerator",n)},nativePromise:function(n){return b(f.nativePromise(n),"native Promise",n)},promise:function(n){return b(f.promise(n),"Promise",n)},generatorFunction:function(n){return b(f.generatorFunction(n),"GeneratorFunction",n)},asyncGeneratorFunction:function(n){return b(f.asyncGeneratorFunction(n),"AsyncGeneratorFunction",n)},asyncFunction:function(n){return b(f.asyncFunction(n),"AsyncFunction",n)},boundFunction:function(n){return b(f.boundFunction(n),"Function",n)},regExp:function(n){return b(f.regExp(n),"RegExp",n)},date:function(n){return b(f.date(n),"Date",n)},error:function(n){return b(f.error(n),"Error",n)},map:function(n){return b(f.map(n),"Map",n)},set:function(n){return b(f.set(n),"Set",n)},weakMap:function(n){return b(f.weakMap(n),"WeakMap",n)},weakSet:function(n){return b(f.weakSet(n),"WeakSet",n)},int8Array:function(n){return b(f.int8Array(n),"Int8Array",n)},uint8Array:function(n){return b(f.uint8Array(n),"Uint8Array",n)},uint8ClampedArray:function(n){return b(f.uint8ClampedArray(n),"Uint8ClampedArray",n)},int16Array:function(n){return b(f.int16Array(n),"Int16Array",n)},uint16Array:function(n){return b(f.uint16Array(n),"Uint16Array",n)},int32Array:function(n){return b(f.int32Array(n),"Int32Array",n)},uint32Array:function(n){return b(f.uint32Array(n),"Uint32Array",n)},float32Array:function(n){return b(f.float32Array(n),"Float32Array",n)},float64Array:function(n){return b(f.float64Array(n),"Float64Array",n)},bigInt64Array:function(n){return b(f.bigInt64Array(n),"BigInt64Array",n)},bigUint64Array:function(n){return b(f.bigUint64Array(n),"BigUint64Array",n)},arrayBuffer:function(n){return b(f.arrayBuffer(n),"ArrayBuffer",n)},sharedArrayBuffer:function(n){return b(f.sharedArrayBuffer(n),"SharedArrayBuffer",n)},dataView:function(n){return b(f.dataView(n),"DataView",n)},urlInstance:function(n){return b(f.urlInstance(n),"URL",n)},urlString:function(n){return b(f.urlString(n),"string with a URL",n)},truthy:function(n){return b(f.truthy(n),"truthy",n)},falsy:function(n){return b(f.falsy(n),"falsy",n)},nan:function(n){return b(f.nan(n),"NaN",n)},primitive:function(n){return b(f.primitive(n),"primitive",n)},integer:function(n){return b(f.integer(n),"integer",n)},safeInteger:function(n){return b(f.safeInteger(n),"integer",n)},plainObject:function(n){return b(f.plainObject(n),"plain object",n)},typedArray:function(n){return b(f.typedArray(n),"TypedArray",n)},arrayLike:function(n){return b(f.arrayLike(n),"array-like",n)},domElement:function(n){return b(f.domElement(n),"HTMLElement",n)},observable:function(n){return b(f.observable(n),"Observable",n)},nodeStream:function(n){return b(f.nodeStream(n),"Node.js Stream",n)},infinite:function(n){return b(f.infinite(n),"infinite number",n)},emptyArray:function(n){return b(f.emptyArray(n),"empty array",n)},nonEmptyArray:function(n){return b(f.nonEmptyArray(n),"non-empty array",n)},emptyString:function(n){return b(f.emptyString(n),"empty string",n)},nonEmptyString:function(n){return b(f.nonEmptyString(n),"non-empty string",n)},emptyStringOrWhitespace:function(n){return b(f.emptyStringOrWhitespace(n),"empty string or whitespace",n)},emptyObject:function(n){return b(f.emptyObject(n),"empty object",n)},nonEmptyObject:function(n){return b(f.nonEmptyObject(n),"non-empty object",n)},emptySet:function(n){return b(f.emptySet(n),"empty set",n)},nonEmptySet:function(n){return b(f.nonEmptySet(n),"non-empty set",n)},emptyMap:function(n){return b(f.emptyMap(n),"empty map",n)},nonEmptyMap:function(n){return b(f.nonEmptyMap(n),"non-empty map",n)},evenInteger:function(n){return b(f.evenInteger(n),"even integer",n)},oddInteger:function(n){return b(f.oddInteger(n),"odd integer",n)},directInstanceOf:function(n,t){return b(f.directInstanceOf(n,t),"T",n)},inRange:function(n,t){return b(f.inRange(n,t),"in range",n)},any:function(n){for(var t=arguments.length,r=Array(t>1?t-1:0),e=1;t>e;e++)r[e-1]=arguments[e];return b(f.any.apply(f,[n].concat(r)),"predicate returns truthy for any value",r)},all:function(n){for(var t=arguments.length,r=Array(t>1?t-1:0),e=1;t>e;e++)r[e-1]=arguments[e];return b(f.all.apply(f,[n].concat(r)),"predicate returns truthy for all values",r)}},Object.defineProperties(f,{class:{value:f.class_},function:{value:f.function_},null:{value:f.null_}}),Object.defineProperties(t.assert,{class:{value:t.assert.class_},function:{value:t.assert.function_},null:{value:t.assert.null_}}),t.default=f,n.exports=f,n.exports.default=f,n.exports.assert=t.assert})));var _={skipContainers:!0,arrayStrictComparison:!1};n.deepContains=function n(t,r,o,u,i){var f=e(e({},_),i);m(t)!==m(r)?u("the first input arg is of a type "+m(t).toLowerCase()+" but the second is "+m(r).toLowerCase()+". Values are - 1st:\n"+JSON.stringify(t,null,4)+"\n2nd:\n"+JSON.stringify(r,null,4)):function(n,t){(function n(t,r,o,u){var i,a=c(t),f=e({depth:-1,path:""},o);if(f.depth+=1,Array.isArray(a))for(var l=0,s=a.length;s>l&&!u.now;l++){var y=f.path?f.path+"."+l:""+l;void 0!==a[l]?(f.parent=c(a),f.parentType="array",f.parentKey=h(y),i=n(r(a[l],void 0,e(e({},f),{},{path:y}),u),r,e(e({},f),{},{path:y}),u),Number.isNaN(i)&&a.length>l?(a.splice(l,1),l-=1):a[l]=i):a.splice(l,1)}else if(v(a))for(var p in a){if(u.now&&null!=p)break;var b=f.path?f.path+"."+p:p;0===f.depth&&null!=p&&(f.topmostKey=p),f.parent=c(a),f.parentType="object",f.parentKey=h(b),i=n(r(p,a[p],e(e({},f),{},{path:b}),u),r,e(e({},f),{},{path:b}),u),Number.isNaN(i)?delete a[p]:a[p]=i}return a})(n,t,{},{now:!1})}(r,(function(r,e,i,c){var l=void 0!==e?e:r,s=i.path;if(a.has(t,s))if(!f.arrayStrictComparison&&m.plainObject(l)&&"array"===i.parentType&&i.parent.length>1)!function(){c.now=!0;var r=Array.from(i.path.includes(".")?a.get(t,function(n){if(n.includes("."))for(var t=n.length;t--;)if("."===n[t])return n.slice(0,t);return n}(s)):t);i.parent.length>r.length?u("the first array: "+JSON.stringify(r,null,4)+"\nhas less objects than array we're matching against, "+JSON.stringify(i.parent,null,4)):function(){for(var t=i.parent,e=r.map((function(n,t){return t})),a=(t.map((function(n,t){return t})),[]),c=function(n,t){var r,o=[],u=e[n],i=(r=n,Array.from(e).filter((function(n,t){return t!==r})));o.push(u),i.forEach((function(n){a.push(Array.from(o).concat(n))}))},l=0,s=e.length;s>l;l++)c(l);for(var y=a.map((function(n){return n.map((function(n,t){return[t,n]}))})),p=0,b=0,d=y.length;d>b;b++){var g=0;y[b].forEach((function(n){m.plainObject(t[n[0]])&&m.plainObject(r[n[1]])&&Object.keys(t[n[0]]).forEach((function(e){Object.keys(r[n[1]]).includes(e)&&(g+=1,r[n[1]][e]===t[n[0]][e]&&(g+=5))}))})),y[b].push(g),g>p&&(p=g)}for(var v=function(e,i){if(y[e][2]===p)return y[e].forEach((function(i,a){y[e].length-1>a&&n(r[i[1]],t[i[0]],o,u,f)})),"break"},h=0,_=y.length;_>h;h++){if("break"===v(h))break}}()}();else{var y=a.get(t,s);f.skipContainers&&(m.plainObject(y)||Array.isArray(y))||o(y,l,s)}else u("the first input: "+JSON.stringify(t,null,4)+'\ndoes not have the path "'+s+'", we were looking, would it contain a value '+JSON.stringify(l,null,0)+".");return l}))},n.defaults=_,n.version="2.0.1",Object.defineProperty(n,"__esModule",{value:!0})}));
