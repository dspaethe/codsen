/**
 * generate-atomic-css
 * Generate Atomic CSS
 * Version: 1.2.11
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/generate-atomic-css
 */

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t=t||self).generateAtomicCss={})}(this,function(t){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],r=!0,i=!1,o=void 0;try{for(var c,u=t[Symbol.iterator]();!(r=(c=u.next()).done)&&(e.push(c.value),!n||e.length!==n);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var r="[object Object]";var i,o,c=Function.prototype,u=Object.prototype,l=c.toString,a=u.hasOwnProperty,s=l.call(Object),f=u.toString,h=(i=Object.getPrototypeOf,o=Object,function(t){return i(o(t))});var g=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||f.call(t)!=r||function(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(t){}return n}(t))return!1;var n=h(t);if(null===n)return!0;var e=a.call(n,"constructor")&&n.constructor;return"function"==typeof e&&e instanceof e&&l.call(e)==s},d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(t,n){t(n={exports:{}},n.exports)}(function(t,n){var e=200,r="__lodash_hash_undefined__",i=9007199254740991,o="[object Arguments]",c="[object Boolean]",u="[object Date]",l="[object Function]",a="[object GeneratorFunction]",s="[object Map]",f="[object Number]",h="[object Object]",g="[object RegExp]",p="[object Set]",v="[object String]",y="[object Symbol]",m="[object ArrayBuffer]",b="[object DataView]",O="[object Float32Array]",_="[object Float64Array]",j="[object Int8Array]",w="[object Int16Array]",x="[object Int32Array]",A="[object Uint8Array]",T="[object Uint8ClampedArray]",S="[object Uint16Array]",E="[object Uint32Array]",C=/\w*$/,I=/^\[object .+?Constructor\]$/,N=/^(?:0|[1-9]\d*)$/,$={};$[o]=$["[object Array]"]=$[m]=$[b]=$[c]=$[u]=$[O]=$[_]=$[j]=$[w]=$[x]=$[s]=$[f]=$[h]=$[g]=$[p]=$[v]=$[y]=$[A]=$[T]=$[S]=$[E]=!0,$["[object Error]"]=$[l]=$["[object WeakMap]"]=!1;var F="object"==typeof d&&d&&d.Object===Object&&d,W="object"==typeof self&&self&&self.Object===Object&&self,P=F||W||Function("return this")(),D=n&&!n.nodeType&&n,H=D&&t&&!t.nodeType&&t,R=H&&H.exports===D;function G(t,n){return t.set(n[0],n[1]),t}function L(t,n){return t.add(n),t}function M(t,n,e,r){var i=-1,o=t?t.length:0;for(r&&o&&(e=t[++i]);++i<o;)e=n(e,t[i],i,t);return e}function k(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(t){}return n}function B(t){var n=-1,e=Array(t.size);return t.forEach(function(t,r){e[++n]=[r,t]}),e}function U(t,n){return function(e){return t(n(e))}}function z(t){var n=-1,e=Array(t.size);return t.forEach(function(t){e[++n]=t}),e}var V,J=Array.prototype,q=Function.prototype,K=Object.prototype,Q=P["__core-js_shared__"],X=(V=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"",Y=q.toString,Z=K.hasOwnProperty,tt=K.toString,nt=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=R?P.Buffer:void 0,rt=P.Symbol,it=P.Uint8Array,ot=U(Object.getPrototypeOf,Object),ct=Object.create,ut=K.propertyIsEnumerable,lt=J.splice,at=Object.getOwnPropertySymbols,st=et?et.isBuffer:void 0,ft=U(Object.keys,Object),ht=Ht(P,"DataView"),gt=Ht(P,"Map"),dt=Ht(P,"Promise"),pt=Ht(P,"Set"),vt=Ht(P,"WeakMap"),yt=Ht(Object,"create"),mt=kt(ht),bt=kt(gt),Ot=kt(dt),_t=kt(pt),jt=kt(vt),wt=rt?rt.prototype:void 0,xt=wt?wt.valueOf:void 0;function At(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function Tt(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function St(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function Et(t){this.__data__=new Tt(t)}function Ct(t,n){var e=Ut(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&zt(t)}(t)&&Z.call(t,"callee")&&(!ut.call(t,"callee")||tt.call(t)==o)}(t)?function(t,n){for(var e=-1,r=Array(t);++e<t;)r[e]=n(e);return r}(t.length,String):[],r=e.length,i=!!r;for(var c in t)!n&&!Z.call(t,c)||i&&("length"==c||Lt(c,r))||e.push(c);return e}function It(t,n,e){var r=t[n];Z.call(t,n)&&Bt(r,e)&&(void 0!==e||n in t)||(t[n]=e)}function Nt(t,n){for(var e=t.length;e--;)if(Bt(t[e][0],n))return e;return-1}function $t(t,n,e,r,i,d,I){var N;if(r&&(N=d?r(t,i,d,I):r(t)),void 0!==N)return N;if(!qt(t))return t;var F=Ut(t);if(F){if(N=function(t){var n=t.length,e=t.constructor(n);n&&"string"==typeof t[0]&&Z.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!n)return function(t,n){var e=-1,r=t.length;n||(n=Array(r));for(;++e<r;)n[e]=t[e];return n}(t,N)}else{var W=Gt(t),P=W==l||W==a;if(Vt(t))return function(t,n){if(n)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,n);if(W==h||W==o||P&&!d){if(k(t))return d?t:{};if(N=function(t){return"function"!=typeof t.constructor||Mt(t)?{}:(n=ot(t),qt(n)?ct(n):{});var n}(P?{}:t),!n)return function(t,n){return Pt(t,Rt(t),n)}(t,function(t,n){return t&&Pt(n,Kt(n),t)}(N,t))}else{if(!$[W])return d?t:{};N=function(t,n,e,r){var i=t.constructor;switch(n){case m:return Wt(t);case c:case u:return new i(+t);case b:return function(t,n){var e=n?Wt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,r);case O:case _:case j:case w:case x:case A:case T:case S:case E:return function(t,n){var e=n?Wt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,r);case s:return function(t,n,e){return M(n?e(B(t),!0):B(t),G,new t.constructor)}(t,r,e);case f:case v:return new i(t);case g:return(a=new(l=t).constructor(l.source,C.exec(l))).lastIndex=l.lastIndex,a;case p:return function(t,n,e){return M(n?e(z(t),!0):z(t),L,new t.constructor)}(t,r,e);case y:return o=t,xt?Object(xt.call(o)):{}}var o;var l,a}(t,W,$t,n)}}I||(I=new Et);var D=I.get(t);if(D)return D;if(I.set(t,N),!F)var H=e?function(t){return function(t,n,e){var r=n(t);return Ut(t)?r:function(t,n){for(var e=-1,r=n.length,i=t.length;++e<r;)t[i+e]=n[e];return t}(r,e(t))}(t,Kt,Rt)}(t):Kt(t);return function(t,n){for(var e=-1,r=t?t.length:0;++e<r&&!1!==n(t[e],e,t););}(H||t,function(i,o){H&&(i=t[o=i]),It(N,o,$t(i,n,e,r,o,t,I))}),N}function Ft(t){return!(!qt(t)||function(t){return!!X&&X in t}(t))&&(Jt(t)||k(t)?nt:I).test(kt(t))}function Wt(t){var n=new t.constructor(t.byteLength);return new it(n).set(new it(t)),n}function Pt(t,n,e,r){e||(e={});for(var i=-1,o=n.length;++i<o;){var c=n[i],u=r?r(e[c],t[c],c,e,t):void 0;It(e,c,void 0===u?t[c]:u)}return e}function Dt(t,n){var e,r,i=t.__data__;return("string"==(r=typeof(e=n))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e)?i["string"==typeof n?"string":"hash"]:i.map}function Ht(t,n){var e=function(t,n){return null==t?void 0:t[n]}(t,n);return Ft(e)?e:void 0}At.prototype.clear=function(){this.__data__=yt?yt(null):{}},At.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},At.prototype.get=function(t){var n=this.__data__;if(yt){var e=n[t];return e===r?void 0:e}return Z.call(n,t)?n[t]:void 0},At.prototype.has=function(t){var n=this.__data__;return yt?void 0!==n[t]:Z.call(n,t)},At.prototype.set=function(t,n){return this.__data__[t]=yt&&void 0===n?r:n,this},Tt.prototype.clear=function(){this.__data__=[]},Tt.prototype.delete=function(t){var n=this.__data__,e=Nt(n,t);return!(e<0||(e==n.length-1?n.pop():lt.call(n,e,1),0))},Tt.prototype.get=function(t){var n=this.__data__,e=Nt(n,t);return e<0?void 0:n[e][1]},Tt.prototype.has=function(t){return Nt(this.__data__,t)>-1},Tt.prototype.set=function(t,n){var e=this.__data__,r=Nt(e,t);return r<0?e.push([t,n]):e[r][1]=n,this},St.prototype.clear=function(){this.__data__={hash:new At,map:new(gt||Tt),string:new At}},St.prototype.delete=function(t){return Dt(this,t).delete(t)},St.prototype.get=function(t){return Dt(this,t).get(t)},St.prototype.has=function(t){return Dt(this,t).has(t)},St.prototype.set=function(t,n){return Dt(this,t).set(t,n),this},Et.prototype.clear=function(){this.__data__=new Tt},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,n){var r=this.__data__;if(r instanceof Tt){var i=r.__data__;if(!gt||i.length<e-1)return i.push([t,n]),this;r=this.__data__=new St(i)}return r.set(t,n),this};var Rt=at?U(at,Object):function(){return[]},Gt=function(t){return tt.call(t)};function Lt(t,n){return!!(n=null==n?i:n)&&("number"==typeof t||N.test(t))&&t>-1&&t%1==0&&t<n}function Mt(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||K)}function kt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Bt(t,n){return t===n||t!=t&&n!=n}(ht&&Gt(new ht(new ArrayBuffer(1)))!=b||gt&&Gt(new gt)!=s||dt&&"[object Promise]"!=Gt(dt.resolve())||pt&&Gt(new pt)!=p||vt&&"[object WeakMap]"!=Gt(new vt))&&(Gt=function(t){var n=tt.call(t),e=n==h?t.constructor:void 0,r=e?kt(e):void 0;if(r)switch(r){case mt:return b;case bt:return s;case Ot:return"[object Promise]";case _t:return p;case jt:return"[object WeakMap]"}return n});var Ut=Array.isArray;function zt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}(t.length)&&!Jt(t)}var Vt=st||function(){return!1};function Jt(t){var n=qt(t)?tt.call(t):"";return n==l||n==a}function qt(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function Kt(t){return zt(t)?Ct(t):function(t){if(!Mt(t))return ft(t);var n=[];for(var e in Object(t))Z.call(t,e)&&"constructor"!=e&&n.push(e);return n}(t)}t.exports=function(t){return $t(t,!0,!0)}});function p(t){const n={value:t,hungry:!1,optional:!1};return(n.value.endsWith("?*")||n.value.endsWith("*?"))&&n.value.length>2?(n.value=n.value.slice(0,n.value.length-2),n.optional=!0,n.hungry=!0):n.value.endsWith("?")&&n.value.length>1?(n.value=n.value.slice(0,n.value.length-1),n.optional=!0):n.value.endsWith("*")&&n.value.length>1&&(n.value=n.value.slice(0,n.value.length-1),n.hungry=!0),n}function v(t,n){return function(t,n,e){if("string"!=typeof t||!t.length)return null;if(n&&"number"==typeof n||(n=0),!t[n+1])return null;if(t[n+1]&&(!e&&t[n+1].trim().length||e&&(t[n+1].trim().length||"\n\r".includes(t[n+1]))))return n+1;if(t[n+2]&&(!e&&t[n+2].trim().length||e&&(t[n+2].trim().length||"\n\r".includes(t[n+2]))))return n+2;for(let r=n+1,i=t.length;r<i;r++)if(t[r]&&(!e&&t[r].trim().length||e&&(t[r].trim().length||"\n\r".includes(t[r]))))return r;return null}(t,n,!1)}function y(t,n){return function(t,n,e){if("string"!=typeof t||!t.length)return null;if(n&&"number"==typeof n||(n=0),n<1)return null;if(t[n-1]&&(!e&&t[n-1].trim().length||e&&(t[n-1].trim().length||"\n\r".includes(t[n-1]))))return n-1;if(t[n-2]&&(!e&&t[n-2].trim().length||e&&(t[n-2].trim().length||"\n\r".includes(t[n-2]))))return n-2;for(let r=n;r--;)if(t[r]&&(!e&&t[r].trim().length||e&&(t[r].trim().length||"\n\r".includes(t[r]))))return r;return null}(t,n,!1)}function m(t,n,e,r,i){if("string"!=typeof n||!n.length)return null;if(e&&"number"==typeof e||(e=0),"right"===t&&!n[e+1]||"left"===t&&!n[e-1])return null;let o=e;const c=[];let u,l,a,s=0;for(;s<i.length;){if("string"!=typeof i[s]||!i[s].length){s++;continue}const{value:e,optional:f,hungry:h}=p(i[s]),g="right"===t?v(n,o):y(n,o);if(!(r.i&&n[g].toLowerCase()===e.toLowerCase()||!r.i&&n[g]===e)){if(f){s++;continue}if(a){s++,a=void 0;continue}return null}{const i="right"===t?v(n,g):y(n,g);h&&(r.i&&n[i].toLowerCase()===e.toLowerCase()||!r.i&&n[i]===e)?a=!0:s++,"right"===t&&g>o+1?c.push([o+1,g]):"left"===t&&g<o-1&&c.unshift([g+1,o]),o=g,"right"===t?(void 0===u&&(u=g),l=g):(void 0===l&&(l=g),u=g)}}return void 0===u?null:{gaps:c,leftmostChar:u,rightmostChar:l}}function b(t,n,...e){if(!e.length)return y(t,n);const r={i:!1};let i;return m("left",t,n,i=g(e[0])?Object.assign({},r,e.shift()):r,Array.from(e).reverse())}function O(t,n,...e){if(!e.length)return v(t,n);const r={i:!1};let i;return m("right",t,n,i=g(e[0])?Object.assign({},r,e.shift()):r,e)}var _=(t,n)=>{if(n=Object.assign({preserveNewLines:!1},n),"string"!=typeof t)throw new TypeError(`Expected input to be of type \`string\`, got \`${typeof t}\``);if(!n.preserveNewlines)return t.split(/\r?\n/);const e=t.split(/(\r?\n)/),r=[];for(let t=0;t<e.length;t+=2)r.push(e[t]+(e[t+1]||""));return r},j=Array.isArray;function w(t){return"string"==typeof t}var x={CONFIGHEAD:"GENERATE-ATOMIC-CSS-CONFIG-STARTS",CONFIGTAIL:"GENERATE-ATOMIC-CSS-CONFIG-ENDS",CONTENTHEAD:"GENERATE-ATOMIC-CSS-CONTENT-STARTS",CONTENTTAIL:"GENERATE-ATOMIC-CSS-CONTENT-ENDS"},A=["px","em","%","rem","cm","mm","in","pt","pc","ex","ch","vw","vmin","vmax"],T=x.CONFIGHEAD,S=x.CONFIGTAIL,E=x.CONTENTHEAD,C=x.CONTENTTAIL,I=[":"];function N(t){var n=t,e="",r="";if(t.includes(T)&&t.includes(S)){if(-1!==t.indexOf(S)&&-1!==t.indexOf(E)&&t.indexOf(S)>t.indexOf(E))throw new Error("generate-atomic-css: [THROW_ID_02] Config heads are after config tails!");var i=t.indexOf(T)+T.length,o=t.indexOf(S);if("*"===t[v(t,i)]&&"/"===t[v(t,v(t,i))]&&(i=v(t,v(t,i))+1),"*"===t[y(t,o)]&&"/"===t[y(t,y(t,o))]&&(o=y(t,y(t,o))),!w(n=t.slice(i,o).trim())||!n.trim().length)return{log:{count:0},result:""}}else if(t.includes(T)&&!t.includes(S)&&t.includes(E)){if(t.indexOf(T)>t.indexOf(E))throw new Error("generate-atomic-css: [THROW_ID_03] Config heads are after content heads!");n=t.slice(t.indexOf(T)+T.length,t.indexOf(E))}else if(t.includes(T)||t.includes(S)||!t.includes(E)&&!t.includes(C)){for(var c=new RegExp("(\\/\\s*\\*\\s*)*".concat(E,"(\\s*\\*\\s*\\/)*")),u=new RegExp("(\\/\\s*\\*\\s*)*".concat(C,"(\\s*\\*\\s*\\/)*")),l=!1,a=[],s=[],f=t.split("\n").filter(function(t){return!!l||(t.includes("$$$")||t.includes("{")||t.includes(":")?(l=!0,!0):(a.push(t),!1))}),h=f.length;h--&&!(f[h].includes("$$$")||f[h].includes("}")||f[h].includes(":"));)s.unshift(f.pop());n=f.join("\n").replace(c,"").replace(u,""),a.length&&(e="".concat(a.join("\n"),"\n")),s.length&&(r="\n".concat(s.join("\n")))}else if((n=t).includes(E)){if(y(t,n.indexOf(E))){var g=n.indexOf(E);b(t,g,"/","*")&&(g=b(t,g,"/","*").leftmostChar),e=0===g?"":t.slice(0,g)}var d=n.indexOf(E)+E.length;O(n,d-1,"*","/")&&(d=O(n,d-1,"*","/").rightmostChar+1);var p=null;if(t.includes(C)){p=t.indexOf(C),"*"===t[y(t,p)]&&"/"===t[y(t,y(t,p))]&&(p=y(t,y(t,p)));var m=t.indexOf(C)+C.length;"*"===t[v(t,m-1)]&&"/"===t[v(t,v(t,m-1))]&&(m=v(t,v(t,m-1))+1),v(t,m)&&(r=t.slice(m))}n=p?n.slice(d,p).trim():n.slice(d).trim()}else if(n.includes(C)){var _,j=[],x=!1,A=(n=n.split("\n").filter(function(t){return t.includes("$$$")||x?!!x||(x=!0,!0):(x||j.push(t),!1)}).join("\n")).indexOf(C);b(n,A,"/","*")&&(A=b(n,A,"/","*").leftmostChar),n=n.slice(0,A).trim(),j.length&&(e="".concat(j.join("\n"),"\n")),v(t,t.indexOf(C)+C.length)&&(_=t.indexOf(C)+C.length,"*"===t[v(t,_)]&&"/"===t[v(t,v(t,_))]&&(_=v(t,v(t,_))+1,v(t,_)&&(r=t.slice(_))))}return[n,e,r]}function $(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500,i=t;if(t.lastIndexOf("}")>0&&t.slice(t.lastIndexOf("}")+1).includes("|")?n=t.slice(t.lastIndexOf("}")+1).split("|").filter(function(t){return t.trim().length}).map(function(t){return t.trim()}).filter(function(t){return String(t).split("").every(function(t){return/\d/g.test(t)})}):t.includes("|")&&(n=t.split("|").filter(function(t){return t.trim().length}).map(function(t){return t.trim()}).filter(function(t){return String(t).split("").every(function(t){return/\d/g.test(t)})})),j(n)&&(1===n.length?r=Number.parseInt(n[0],10):n.length>1&&(e=Number.parseInt(n[0],10),r=Number.parseInt(n[1],10))),t.lastIndexOf("}")>0&&t.slice(t.lastIndexOf("}")+1).includes("|")){if((i=t.slice(0,t.indexOf("|",t.lastIndexOf("}")+1)).trimEnd()).trim().startsWith("|"))for(;i.trim().startsWith("|");)i=i.trimStart().slice(1)}else{for(var o=null,c=!1,u=0,l=t.length,a=null,s=0,f=t.length;s<f;s++)if("0123456789".includes(t[s])?null===a&&t[s].trim().length&&(a=!0):"|"!==t[s]&&t[s].trim().length&&(a=!1),!t[s+1]&&a&&(l=o),"|"===t[s]){if(a){l=o;break}o=s,a=null}else!c&&t[s].trim().length&&(c=!0,null!==o&&(u=o+1));i=t.slice(u,l).trimEnd()}return[e,r,i]}function F(t,n,r,i){var o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],c=arguments.length>5?arguments[5]:void 0,u=arguments.length>6?arguments[6]:void 0;return function(t){if(arguments.length>1&&void 0!==arguments[1]&&!arguments[1])return t;var n=Array.from(t);if(n.length&&w(n[0])&&!n[0].trim().length)do{n.shift()}while(w(n[0])&&!n[0].trim().length);if(n.length&&w(n[n.length-1])&&!n[n.length-1].trim().length)do{n.pop()}while(n&&n[n.length-1]&&!n[n.length-1].trim().length);return n}(_(t).map(function(t,o,l){return t.includes("$$$")?function(t,n,r,i,o,c){for(var u,l=0,a=e($(t,0,500),3),s=a[0],f=a[1],h=a[2],g=i-r,d="",p=function(t){for(var e=0,i=0,a=function(n,r){if(h[n].charCodeAt(0),"$"===h[n]&&"$"===h[n-1]&&"$"===h[n-2]){var o,u=h.slice(n+1);if(0!==t||!A.some(function(t){if(u.startsWith(t))return o=t,!0})||"{"!==h[v(h,n+o.length)]&&h[n+o.length+1].trim().length){var l;if(A.some(function(t){if(h.slice(n+1).startsWith(t))return l=t,!0}),!h[n-3].trim().length||I.some(function(t){return h.slice(i,n-2).trim().endsWith(t)})){var a=0;0===t&&A.some(function(t){return"".concat(h.slice(i,n-2)).startsWith(t)&&(a=t.length),!0}),d+="".concat(h.slice(i+a,n-2)).concat(c?String(t).padStart(String(f).length+(0===t&&l?l.length:0)):t)}else h[n+1].trim().length&&"{"!==h[v(h,n)]?(d+="".concat(h.slice(i,n-2)).concat(t),c&&(e=String(f).length-String(t).length)):d+="".concat(h.slice(i,n-2)).concat(c?String(t).padEnd(String(f).length+(0===t&&l?l.length:0)):t);i=n+1}else d+="".concat(h.slice(i,n-2)).concat(c?String(t).padStart(String(f).length-String(t).length+o.length+1):t),i=n+1+(o?o.length:0)}if("{"===h[n]&&c&&e&&(d+="".concat(h.slice(i,n)).concat(" ".repeat(e)),i=n,e=0),!h[n+1]){var s,g=h.slice(i);0===t&&A.some(function(t){if(g.startsWith(t))return s=t,!0})?d+="".concat(h.slice(i+s.length)):d+="".concat(h.slice(i)),d+="".concat(t!==f?"\n":"")}},p=0,y=h.length;p<y;p++)a(p);o.count++,"function"==typeof n&&(u=Math.floor(r+t/(f-s)*g))!==l&&(l=u,n(u))},y=s;y<=f;y++)p(y);return d}(t,n,r+(i-r)/l.length*o,r+(i-r)/l.length*(o+1),c,u):function(t,n){return/\.\w/g.test(t)&&n.count++,t}(t,c)}),o).join("\n")}t.extractFromToSource=$,t.genAtomic=function(t,r){if("string"!=typeof t)throw new Error('generate-atomic-css: [THROW_ID_01] First input argument must be a string! It was given as "'.concat(JSON.stringify(t,null,4),'" (type ').concat(n(t),")"));var i=x.CONFIGHEAD,o=x.CONFIGTAIL,c=x.CONTENTHEAD,u=x.CONTENTTAIL,l={count:0},a=Object.assign({},{includeConfig:!0,includeHeadsAndTails:!0,pad:!0,configOverride:null,reportProgressFunc:null,reportProgressFuncFrom:0,reportProgressFuncTo:100},r);if(a.includeConfig&&!a.includeHeadsAndTails&&(a.includeHeadsAndTails=!0),!a.configOverride&&!t.includes("$$$")&&!t.includes(i)&&!t.includes(o)&&!t.includes(c)&&!t.includes(u)||w(a.configOverride)&&!a.configOverride.includes("$$$")&&!a.configOverride.includes(i)&&!a.configOverride.includes(o)&&!a.configOverride.includes(c)&&!a.configOverride.includes(u))return{log:{count:0},result:t};var s="",f="",h=e(N(a.configOverride?a.configOverride:t),3),g=h[0],d=h[1],p=h[2];if(!w(g)||!g.trim().length)return{log:{count:0},result:""};if((a.includeConfig||a.includeHeadsAndTails)&&(s="".concat(c," */\n"),a.includeConfig||(s="/* ".concat(s)),f="\n/* ".concat(u," */")),a.includeConfig&&(s="/* ".concat(i,"\n").concat(g.trim(),"\n").concat(o,"\n").concat(s)),t.includes(i)&&null!=y(t,t.indexOf(i))){var m=t.indexOf(i);"*"===t[y(t,m)]&&"/"===t[y(t,y(t,m))]&&(m=y(t,y(t,m)));var b="/* ";("/"===t[v(t,m-1)]&&"*"===t[v(t,v(t,m-1))]||s.trim().startsWith("/*"))&&(b=""),s="".concat(t.slice(0,m)).concat(b).concat(s)}if(t.includes(o)&&v(t,t.indexOf(o)+o.length)){var O=t.indexOf(o)+o.length;if("*"===t[v(t,t.indexOf(o)+o.length)]&&"/"===t[v(t,v(t,t.indexOf(o)+o.length))]&&(O=v(t,v(t,t.indexOf(o)+o.length))+1),t.slice(v(t,O-1)).startsWith(c)){var _=v(t,O);"*"===t[v(t,(O=_+c.length)-1)]&&"/"===t[v(t,v(t,O-1))]&&(O=v(t,v(t,O-1))+1),t.includes(u)&&(O=t.indexOf(u)+u.length,"*"===t[v(t,O)]&&"/"===t[v(t,v(t,O))]&&(O=v(t,v(t,O))+1))}var j=t.slice(O);j.length&&j.includes(u)&&(O=t.indexOf(u)+u.length,"*"===t[v(t,O)]&&"/"===t[v(t,v(t,O))]&&(O=v(t,v(t,O))+1)),f="".concat(f).concat(t[O]&&v(t,O-1)?t.slice(O):"")}if(w(d)&&(s="".concat(d).concat(s)),w(p)){if(p.trim().endsWith("/*")&&!p.trim().startsWith("*/")){var A="";w(p)&&p[0]&&!p[0].trim().length&&(A=p.slice(0,v(p,0))),p="".concat(A,"/* ").concat(p.trim())}f="".concat(f).concat(p)}var T="".concat(function(t){return a.includeConfig||a.includeHeadsAndTails?t.trim():t}("".concat(s).concat(F(g,a.reportProgressFunc,a.reportProgressFuncFrom,a.reportProgressFuncTo,!0,l,a.pad)).concat(f)),"\n");return{log:{count:l.count},result:T}},t.headsAndTails=x,t.version="1.2.11",Object.defineProperty(t,"__esModule",{value:!0})});
