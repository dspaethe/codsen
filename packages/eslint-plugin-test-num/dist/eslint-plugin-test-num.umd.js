/**
 * eslint-plugin-test-num
 * ESLint plugin to update unit test numbers automatically
 * Version: 1.3.2
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/eslint-plugin-test-num
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).eslintPluginTestNum=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(r){e(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function i(t,e,r){return t(r={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&r.path)}},r.exports),r.exports}var u=i((function(e){e.exports=function(){var e=Object.prototype.toString;function r(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function n(t){if(!t)return!0;if(i(t)&&0===t.length)return!0;if("string"!=typeof t){for(var e in t)if(r(t,e))return!1;return!0}return!1}function o(t){return e.call(t)}var i=Array.isArray||function(t){return"[object Array]"===e.call(t)};function u(t){var e=parseInt(t);return e.toString()===t?e:t}function a(e){e=e||{};var a=function t(e){return Object.keys(t).reduce((function(r,n){return"create"===n||"function"==typeof t[n]&&(r[n]=t[n].bind(t,e)),r}),{})};function s(t,n){return e.includeInheritedProps||"number"==typeof n&&Array.isArray(t)||r(t,n)}function c(t,e){if(s(t,e))return t[e]}function l(t,e,r,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return l(t,e.split(".").map(u),r,n);var o=e[0],i=c(t,o);return 1===e.length?(void 0!==i&&n||(t[o]=r),i):(void 0===i&&("number"==typeof e[1]?t[o]=[]:t[o]={}),l(t[o],e.slice(1),r,n))}return a.has=function(t,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!t;for(var o=0;o<n.length;o++){var a=u(n[o]);if(!("number"==typeof a&&i(t)&&a<t.length||(e.includeInheritedProps?a in Object(t):r(t,a))))return!1;t=t[a]}return!0},a.ensureExists=function(t,e,r){return l(t,e,r,!0)},a.set=function(t,e,r,n){return l(t,e,r,n)},a.insert=function(t,e,r,n){var o=a.get(t,e);n=~~n,i(o)||a.set(t,e,o=[]),o.splice(n,0,r)},a.empty=function(e,r){var u,c;if(!n(r)&&null!=e&&(u=a.get(e,r))){if("string"==typeof u)return a.set(e,r,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===o(t)}(u))return a.set(e,r,!1);if("number"==typeof u)return a.set(e,r,0);if(i(u))u.length=0;else{if(!function(e){return"object"===t(e)&&"[object Object]"===o(e)}(u))return a.set(e,r,null);for(c in u)s(u,c)&&delete u[c]}}},a.push=function(t,e){var r=a.get(t,e);i(r)||a.set(t,e,r=[]),r.push.apply(r,Array.prototype.slice.call(arguments,2))},a.coalesce=function(t,e,r){for(var n,o=0,i=e.length;o<i;o++)if(void 0!==(n=a.get(t,e[o])))return n;return r},a.get=function(t,e,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return r;if("string"==typeof e)return a.get(t,e.split("."),r);var n=u(e[0]),o=c(t,n);return void 0===o?r:1===e.length?o:a.get(t[n],e.slice(1),r)},a.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(n(e))return t;if("string"==typeof e)return a.del(t,e.split("."));var r=u(e[0]);return s(t,r)?1!==e.length?a.del(t[r],e.slice(1)):(i(t)?t.splice(r,1):delete t[r],t):t},a}var s=a();return s.create=a,s.withInheritedProps=a({includeInheritedProps:!0}),s}()}));Function.prototype.toString.call(Object),i((function(e,r){var n="[object Arguments]",i="[object Function]",u="[object GeneratorFunction]",a="[object Map]",s="[object Set]",c=/\w*$/,l=/^\[object .+?Constructor\]$/,f=/^(?:0|[1-9]\d*)$/,p={};p[n]=p["[object Array]"]=p["[object ArrayBuffer]"]=p["[object DataView]"]=p["[object Boolean]"]=p["[object Date]"]=p["[object Float32Array]"]=p["[object Float64Array]"]=p["[object Int8Array]"]=p["[object Int16Array]"]=p["[object Int32Array]"]=p[a]=p["[object Number]"]=p["[object Object]"]=p["[object RegExp]"]=p[s]=p["[object String]"]=p["[object Symbol]"]=p["[object Uint8Array]"]=p["[object Uint8ClampedArray]"]=p["[object Uint16Array]"]=p["[object Uint32Array]"]=!0,p["[object Error]"]=p[i]=p["[object WeakMap]"]=!1;var y="object"==t(o)&&o&&o.Object===Object&&o,g="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,d=y||g||Function("return this")(),b=r&&!r.nodeType&&r,h=b&&e&&!e.nodeType&&e,v=h&&h.exports===b;function m(t,e){return t.set(e[0],e[1]),t}function j(t,e){return t.add(e),t}function _(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function x(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function w(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function O(t,e){return function(r){return t(e(r))}}function S(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var A,E=Array.prototype,q=Function.prototype,I=Object.prototype,P=d["__core-js_shared__"],D=(A=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+A:"",T=q.toString,k=I.hasOwnProperty,N=I.toString,L=RegExp("^"+T.call(k).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),U=v?d.Buffer:void 0,F=d.Symbol,R=d.Uint8Array,B=O(Object.getPrototypeOf,Object),M=Object.create,$=I.propertyIsEnumerable,C=E.splice,V=Object.getOwnPropertySymbols,W=U?U.isBuffer:void 0,z=O(Object.keys,Object),G=ht(d,"DataView"),H=ht(d,"Map"),J=ht(d,"Promise"),K=ht(d,"Set"),Q=ht(d,"WeakMap"),X=ht(Object,"create"),Y=xt(G),Z=xt(H),tt=xt(J),et=xt(K),rt=xt(Q),nt=F?F.prototype:void 0,ot=nt?nt.valueOf:void 0;function it(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ut(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function at(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function st(t){this.__data__=new ut(t)}function ct(e,r){var o=Ot(e)||function(e){return function(e){return function(e){return!!e&&"object"==t(e)}(e)&&St(e)}(e)&&k.call(e,"callee")&&(!$.call(e,"callee")||N.call(e)==n)}(e)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(e.length,String):[],i=o.length,u=!!i;for(var a in e)!r&&!k.call(e,a)||u&&("length"==a||jt(a,i))||o.push(a);return o}function lt(t,e,r){var n=t[e];k.call(t,e)&&wt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function ft(t,e){for(var r=t.length;r--;)if(wt(t[r][0],e))return r;return-1}function pt(t,e,r,o,l,f,y){var g;if(o&&(g=f?o(t,l,f,y):o(t)),void 0!==g)return g;if(!qt(t))return t;var d=Ot(t);if(d){if(g=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&k.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,g)}else{var b=mt(t),h=b==i||b==u;if(At(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if("[object Object]"==b||b==n||h&&!f){if(x(t))return f?t:{};if(g=function(t){return"function"!=typeof t.constructor||_t(t)?{}:(e=B(t),qt(e)?M(e):{});var e}(h?{}:t),!e)return function(t,e){return dt(t,vt(t),e)}(t,function(t,e){return t&&dt(e,It(e),t)}(g,t))}else{if(!p[b])return f?t:{};g=function(t,e,r,n){var o=t.constructor;switch(e){case"[object ArrayBuffer]":return gt(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,e){var r=e?gt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var r=e?gt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case a:return function(t,e,r){return _(e?r(w(t),!0):w(t),m,new t.constructor)}(t,n,r);case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,c.exec(t));return e.lastIndex=t.lastIndex,e}(t);case s:return function(t,e,r){return _(e?r(S(t),!0):S(t),j,new t.constructor)}(t,n,r);case"[object Symbol]":return i=t,ot?Object(ot.call(i)):{}}var i}(t,b,pt,e)}}y||(y=new st);var v=y.get(t);if(v)return v;if(y.set(t,g),!d)var O=r?function(t){return function(t,e,r){var n=e(t);return Ot(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,It,vt)}(t):It(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(O||t,(function(n,i){O&&(n=t[i=n]),lt(g,i,pt(n,e,r,o,i,t,y))})),g}function yt(t){return!(!qt(t)||(e=t,D&&D in e))&&(Et(t)||x(t)?L:l).test(xt(t));var e}function gt(t){var e=new t.constructor(t.byteLength);return new R(e).set(new R(t)),e}function dt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var u=e[o],a=n?n(r[u],t[u],u,r,t):void 0;lt(r,u,void 0===a?t[u]:a)}return r}function bt(e,r){var n,o,i=e.__data__;return("string"==(o=t(n=r))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==n:null===n)?i["string"==typeof r?"string":"hash"]:i.map}function ht(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return yt(r)?r:void 0}it.prototype.clear=function(){this.__data__=X?X(null):{}},it.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},it.prototype.get=function(t){var e=this.__data__;if(X){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return k.call(e,t)?e[t]:void 0},it.prototype.has=function(t){var e=this.__data__;return X?void 0!==e[t]:k.call(e,t)},it.prototype.set=function(t,e){return this.__data__[t]=X&&void 0===e?"__lodash_hash_undefined__":e,this},ut.prototype.clear=function(){this.__data__=[]},ut.prototype.delete=function(t){var e=this.__data__,r=ft(e,t);return!(r<0)&&(r==e.length-1?e.pop():C.call(e,r,1),!0)},ut.prototype.get=function(t){var e=this.__data__,r=ft(e,t);return r<0?void 0:e[r][1]},ut.prototype.has=function(t){return ft(this.__data__,t)>-1},ut.prototype.set=function(t,e){var r=this.__data__,n=ft(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},at.prototype.clear=function(){this.__data__={hash:new it,map:new(H||ut),string:new it}},at.prototype.delete=function(t){return bt(this,t).delete(t)},at.prototype.get=function(t){return bt(this,t).get(t)},at.prototype.has=function(t){return bt(this,t).has(t)},at.prototype.set=function(t,e){return bt(this,t).set(t,e),this},st.prototype.clear=function(){this.__data__=new ut},st.prototype.delete=function(t){return this.__data__.delete(t)},st.prototype.get=function(t){return this.__data__.get(t)},st.prototype.has=function(t){return this.__data__.has(t)},st.prototype.set=function(t,e){var r=this.__data__;if(r instanceof ut){var n=r.__data__;if(!H||n.length<199)return n.push([t,e]),this;r=this.__data__=new at(n)}return r.set(t,e),this};var vt=V?O(V,Object):function(){return[]},mt=function(t){return N.call(t)};function jt(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||f.test(t))&&t>-1&&t%1==0&&t<e}function _t(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||I)}function xt(t){if(null!=t){try{return T.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function wt(t,e){return t===e||t!=t&&e!=e}(G&&"[object DataView]"!=mt(new G(new ArrayBuffer(1)))||H&&mt(new H)!=a||J&&"[object Promise]"!=mt(J.resolve())||K&&mt(new K)!=s||Q&&"[object WeakMap]"!=mt(new Q))&&(mt=function(t){var e=N.call(t),r="[object Object]"==e?t.constructor:void 0,n=r?xt(r):void 0;if(n)switch(n){case Y:return"[object DataView]";case Z:return a;case tt:return"[object Promise]";case et:return s;case rt:return"[object WeakMap]"}return e});var Ot=Array.isArray;function St(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!Et(t)}var At=W||function(){return!1};function Et(t){var e=qt(t)?N.call(t):"";return e==i||e==u}function qt(e){var r=t(e);return!!e&&("object"==r||"function"==r)}function It(t){return St(t)?ct(t):function(t){if(!_t(t))return z(t);var e=[];for(var r in Object(t))k.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}e.exports=function(t){return pt(t,!0,!0)}}));function a(t,e){if("string"==typeof t&&t.length)for(var r,o=n(n({},{offset:0}),e),i=null,u=0,a=t.length;u<=a;u++){if(null!==i&&(t[u]&&t[u].trim().length&&!/\d/.test(t[u])&&!["."].includes(t[u])||!t[u]))return{start:o.offset+i,end:o.offset+r+1,value:t.slice(i,r+1)};if(/^\d*$/.test(t[u])&&(r=u,null===i&&(i=u)),null===i&&t[u]&&t[u].trim().length&&!/[\d.'"`]/.test(t[u]))return}}var s=function(t,e,r){return"single"===t?e:"".concat(e,".").concat("".concat(r).padStart(2,"0"))},c=new Set(["ok","notOk","true","false","assert","assertNot","error","ifErr","ifError","rejects","resolves","resolveMatchSnapshot","throws","throw","doesNotThrow","notThrow","expectUncaughtException"]),l=new Set(["emits","rejects","resolveMatch","throws","throw","expectUncaughtException","equal","equals","isEqual","is","strictEqual","strictEquals","strictIs","isStrict","isStrictly","notEqual","inequal","notEqual","notEquals","notStrictEqual","notStrictEquals","isNotEqual","isNot","doesNotEqual","isInequal","same","equivalent","looseEqual","looseEquals","deepEqual","deepEquals","isLoose","looseIs","notSame","inequivalent","looseInequal","notDeep","deepInequal","notLoose","looseNot","strictSame","strictEquivalent","strictDeepEqual","sameStrict","deepIs","isDeeply","isDeep","strictDeepEquals","strictNotSame","strictInequivalent","strictDeepInequal","notSameStrict","deepNot","notDeeply","strictDeepInequals","notStrictSame","hasStrict","match","has","hasFields","matches","similar","like","isLike","includes","include","contains","notMatch","dissimilar","unsimilar","notSimilar","unlike","isUnlike","notLike","isNotLike","doesNotHave","isNotSimilar","isDissimilar","type","isa","isA"]);return{configs:{recommended:{plugins:["test-num"],rules:{"no-console":"off","test-num/correct-test-num":"error"}}},rules:{"correct-test-num":{create:function(t){var e=0;return{ExpressionStatement:function(r){if("CallExpression"===u.get(r,"expression.type")&&["test","only","skip","todo"].includes(u.get(r,"expression.callee.property.name"))&&["TemplateLiteral","Literal"].includes(u.get(r,"expression.arguments.0.type"))){var n,o="".concat(e+=1).padStart(2,"0");if(!n&&"TemplateLiteral"===u.get(r,"expression.arguments.0.type")&&u.has(r,"expression.arguments.0.quasis.0.value.raw")){var i=a(u.get(r,"expression.arguments.0.quasis.0.value.raw"),{offset:u.get(r,"expression.arguments.0.quasis.0.start"),returnRangesOnly:!0})||{},f=i.start,p=i.end,y=i.value;f&&p&&y&&y!==o&&(n={start:f,end:p,value:o,node:u.get(r,"expression.arguments.0.quasis.0")})}if(!n&&"Literal"===r.expression.arguments[0].type&&r.expression.arguments[0].raw){var g=a(r.expression.arguments[0].raw,{offset:r.expression.arguments[0].start,returnRangesOnly:!0})||{},d=g.start,b=g.end,h=g.value;d&&b&&h&&h!==o&&(n={start:d,end:b,value:o,node:r.expression.arguments[0]})}if(!n&&"ArrowFunctionExpression"===u.get(r,"expression.arguments.1.type")&&"BlockStatement"===u.get(r,"expression.arguments.1.body.type")&&u.get(r,"expression.arguments.1.body.body").length){var v,m="multiple";2===(v=u.get(r,"expression.arguments.1.body.body").filter((function(t){return"ExpressionStatement"===t.type&&"t"===u.get(t,"expression.callee.object.name")}))).length&&"end"===u.get(v[v.length-1],"expression.callee.property.name")&&(m="single");var j=u.get(r,"expression.arguments.1.body.body");if(Array.isArray(j))for(var _=0,x=0,w=j.length;x<w;x++){var O=u.get(j[x],"expression.callee.property.name");if(O){var S=void 0;if(l.has(O)&&u.has(j[x],"expression.arguments.2")?S=2:c.has(O)&&u.has(j[x],"expression.arguments.1")&&(S=1),S){if("continue"===function(){var e=void 0,r=void 0,n=void 0;"TemplateLiteral"===u.get(j[x],"expression.arguments.".concat(S,".type"))?(r="expression.arguments.".concat(S,".quasis.0"),e=u.get(j[x],"".concat(r,".value.raw")),n=u.get(j[x],"".concat(r,".start")),_+=1):"Literal"===u.get(j[x],"expression.arguments.".concat(S,".type"))&&(r="expression.arguments.".concat(S),e=u.get(j[x],"".concat(r,".raw")),n=u.get(j[x],"".concat(r,".start")),_+=1);var i=a(e,{offset:n,returnRangesOnly:!0})||{},c=i.start,l=i.end;if(!c||!l)return"continue";var f=s(m,o,_);a(e).value!==f&&t.report({node:u.get(j[x],r),messageId:"correctTestNum",fix:function(t){return t.replaceTextRange([c,l],f)}})}())continue}else{var A=void 0;l.has(O)&&Array.isArray(u.get(j[x],"expression.arguments"))&&2===u.get(j[x],"expression.arguments").length?A=2:c.has(O)&&Array.isArray(u.get(j[x],"expression.arguments"))&&1===u.get(j[x],"expression.arguments").length&&(A=1),A&&function(){var e=u.get(j[x],"expression.end")-1,r=s(m,o,_),n=t.getSourceCode().getText(),i=e,a=function(t,e,r){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),e<1)return null;if(t[~-e]&&(!r&&t[~-e].trim()||r&&(t[~-e].trim()||"\n\r".includes(t[~-e]))))return~-e;if(t[e-2]&&(!r&&t[e-2].trim()||r&&(t[e-2].trim()||"\n\r".includes(t[e-2]))))return e-2;for(var n=e;n--;)if(t[n]&&(!r&&t[n].trim()||r&&(t[n].trim()||"\n\r".includes(t[n]))))return n;return null}(n,i,!1)+1,c=', "'.concat(r,'"');if(n.slice(a,i).includes("\n")){var l=Array.from(n.slice(a,i)).filter((function(t){return!"\r\n".includes(t)})).join("");c=",\n".concat(l,'  "').concat(r,'"\n').concat(l)}t.report({node:j[x],messageId:"correctTestNum",fix:function(t){return t.replaceTextRange([a,i],c)}})}()}}}}n&&t.report({messageId:"correctTestNum",node:n.node||r,fix:function(t){return t.replaceTextRange([n.start,n.end],n.value)}})}}}},meta:{type:"suggestion",messages:{correctTestNum:"Update the test number."},fixable:"code"}}}}}));
