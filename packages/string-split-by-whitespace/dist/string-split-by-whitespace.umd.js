!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.stringSplitByWhitespace=t()}(this,function(){"use strict";var v="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(e,t){return e(t={exports:{}},t.exports),t.exports}var _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y=e(function(e,t){var o,i,n,a,s,u,c,f,r,l,y,p,g,h,d,m,b,w;e.exports=(o="function"==typeof Promise,i="object"===("undefined"==typeof self?"undefined":_(self))?self:v,n="undefined"!=typeof Symbol,a="undefined"!=typeof Map,s="undefined"!=typeof Set,u="undefined"!=typeof WeakMap,c="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,r=n&&void 0!==Symbol.iterator,l=n&&void 0!==Symbol.toStringTag,y=s&&"function"==typeof Set.prototype.entries,p=a&&"function"==typeof Map.prototype.entries,g=y&&Object.getPrototypeOf((new Set).entries()),h=p&&Object.getPrototypeOf((new Map).entries()),d=r&&"function"==typeof Array.prototype[Symbol.iterator],m=d&&Object.getPrototypeOf([][Symbol.iterator]()),b=r&&"function"==typeof String.prototype[Symbol.iterator],w=b&&Object.getPrototypeOf(""[Symbol.iterator]()),function(e){var t=void 0===e?"undefined":_(e);if("object"!==t)return t;if(null===e)return"null";if(e===i)return"global";if(Array.isArray(e)&&(!1===l||!(Symbol.toStringTag in e)))return"Array";if("object"===("undefined"==typeof window?"undefined":_(window))&&null!==window){if("object"===_(window.location)&&e===window.location)return"Location";if("object"===_(window.document)&&e===window.document)return"Document";if("object"===_(window.navigator)){if("object"===_(window.navigator.mimeTypes)&&e===window.navigator.mimeTypes)return"MimeTypeArray";if("object"===_(window.navigator.plugins)&&e===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"===_(window.HTMLElement))&&e instanceof window.HTMLElement){if("BLOCKQUOTE"===e.tagName)return"HTMLQuoteElement";if("TD"===e.tagName)return"HTMLTableDataCellElement";if("TH"===e.tagName)return"HTMLTableHeaderCellElement"}}var n=l&&e[Symbol.toStringTag];if("string"==typeof n)return n;var r=Object.getPrototypeOf(e);return r===RegExp.prototype?"RegExp":r===Date.prototype?"Date":o&&r===Promise.prototype?"Promise":s&&r===Set.prototype?"Set":a&&r===Map.prototype?"Map":c&&r===WeakSet.prototype?"WeakSet":u&&r===WeakMap.prototype?"WeakMap":f&&r===DataView.prototype?"DataView":a&&r===h?"Map Iterator":s&&r===g?"Set Iterator":d&&r===m?"Array Iterator":b&&r===w?"String Iterator":null===r?"Object":Object.prototype.toString.call(e).slice(8,-1)})});function p(e,t,n){if(t!=t)return function(e,t,n,r){for(var o=e.length,i=n+(r?1:-1);r?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,i,n);for(var r=n-1,o=e.length;++r<o;)if(e[r]===t)return r;return-1}function g(e,t,n,r){for(var o=n-1,i=e.length;++o<i;)if(r(e[o],t))return o;return-1}function i(e){return e!=e}var h=Array.prototype.splice;function n(e,t,n,r){var o,i=r?g:p,a=-1,s=t.length,u=e;for(e===t&&(t=function(e,t){var n=-1,r=e.length;t||(t=Array(r));for(;++n<r;)t[n]=e[n];return t}(t)),n&&(u=function(e,t){for(var n=-1,r=e?e.length:0,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}(e,(o=n,function(e){return o(e)})));++a<s;)for(var c=0,f=t[a],l=n?n(f):f;-1<(c=i(u,l,c,r));)u!==e&&h.call(u,c,1),h.call(e,c,1);return e}var d=function(e,t){return e&&e.length&&t&&t.length?n(e,t):e},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r="__lodash_hash_undefined__",s=9007199254740991,o="[object Function]",u="[object GeneratorFunction]",c=/^\[object .+?Constructor\]$/,t="object"==a(v)&&v&&v.Object===Object&&v,f="object"==("undefined"==typeof self?"undefined":a(self))&&self&&self.Object===Object&&self,l=t||f||Function("return this")();function m(e,t){return!!(e?e.length:0)&&-1<function(e,t,n){if(t!=t)return function(e,t,n,r){var o=e.length,i=n+(r?1:-1);for(;r?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,O,n);var r=n-1,o=e.length;for(;++r<o;)if(e[r]===t)return r;return-1}(e,t,0)}function b(e,t,n){for(var r=-1,o=e?e.length:0;++r<o;)if(n(t,e[r]))return!0;return!1}function w(e,t){for(var n=-1,r=e?e.length:0,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}function O(e){return e!=e}function S(t){return function(e){return t(e)}}function T(e,t){return e.has(t)}var j,I,R,E=Array.prototype,A=Function.prototype,x=Object.prototype,W=l["__core-js_shared__"],k=(j=/[^.]+$/.exec(W&&W.keys&&W.keys.IE_PROTO||""))?"Symbol(src)_1."+j:"",H=A.toString,M=x.hasOwnProperty,D=x.toString,N=RegExp("^"+H.call(M).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),C=E.splice,Z=Math.max,P=Math.min,J=U(l,"Map"),K=U(Object,"create");function V(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function L(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function q(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function $(e){var t=-1,n=e?e.length:0;for(this.__data__=new q;++t<n;)this.add(e[t])}function B(e,t){for(var n,r,o=e.length;o--;)if((n=e[o][0])===(r=t)||n!=n&&r!=r)return o;return-1}function F(e){return!(!X(e)||(t=e,k&&k in t))&&(z(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?N:c).test(function(e){if(null!=e){try{return H.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e));var t}function Q(e){return(o=t=e)&&"object"==(void 0===o?"undefined":a(o))&&(null!=(n=t)&&("number"==typeof(r=n.length)&&-1<r&&r%1==0&&r<=s)&&!z(n))?e:[];var t,n,r,o}function G(e,t){var n,r,o=e.__data__;return("string"==(r=void 0===(n=t)?"undefined":a(n))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof t?"string":"hash"]:o.map}function U(e,t){var n,r,o=(r=t,null==(n=e)?void 0:n[r]);return F(o)?o:void 0}function z(e){var t=X(e)?D.call(e):"";return t==o||t==u}function X(e){var t=void 0===e?"undefined":a(e);return!!e&&("object"==t||"function"==t)}V.prototype.clear=function(){this.__data__=K?K(null):{}},V.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},V.prototype.get=function(e){var t=this.__data__;if(K){var n=t[e];return n===r?void 0:n}return M.call(t,e)?t[e]:void 0},V.prototype.has=function(e){var t=this.__data__;return K?void 0!==t[e]:M.call(t,e)},V.prototype.set=function(e,t){return this.__data__[e]=K&&void 0===t?r:t,this},L.prototype.clear=function(){this.__data__=[]},L.prototype.delete=function(e){var t=this.__data__,n=B(t,e);return!(n<0||(n==t.length-1?t.pop():C.call(t,n,1),0))},L.prototype.get=function(e){var t=this.__data__,n=B(t,e);return n<0?void 0:t[n][1]},L.prototype.has=function(e){return-1<B(this.__data__,e)},L.prototype.set=function(e,t){var n=this.__data__,r=B(n,e);return r<0?n.push([e,t]):n[r][1]=t,this},q.prototype.clear=function(){this.__data__={hash:new V,map:new(J||L),string:new V}},q.prototype.delete=function(e){return G(this,e).delete(e)},q.prototype.get=function(e){return G(this,e).get(e)},q.prototype.has=function(e){return G(this,e).has(e)},q.prototype.set=function(e,t){return G(this,e).set(e,t),this},$.prototype.add=$.prototype.push=function(e){return this.__data__.set(e,r),this},$.prototype.has=function(e){return this.__data__.has(e)};var Y=(I=function(e){var t=w(e,Q);return t.length&&t[0]===e[0]?function(e,t,n){for(var r=n?b:m,o=e[0].length,i=e.length,a=i,s=Array(i),u=1/0,c=[];a--;){var f=e[a];a&&t&&(f=w(f,S(t))),u=P(f.length,u),s[a]=!n&&(t||120<=o&&120<=f.length)?new $(a&&f):void 0}f=e[0];var l=-1,y=s[0];e:for(;++l<o&&c.length<u;){var p=f[l],g=t?t(p):p;if(p=n||0!==p?p:0,!(y?T(y,g):r(c,g,n))){for(a=i;--a;){var h=s[a];if(!(h?T(h,g):r(e[a],g,n)))continue e}y&&y.push(g),c.push(p)}}return c}(t):[]},R=Z(void 0===R?I.length-1:R,0),function(){for(var e=arguments,t=-1,n=Z(e.length-R,0),r=Array(n);++t<n;)r[t]=e[R+t];t=-1;for(var o=Array(R+1);++t<R;)o[t]=e[t];return o[R]=r,function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}(I,this,o)});function ee(e){return"string"==typeof e?0<e.length?[e]:[]:e}function te(r,e,t){function o(e){return null!=e}function n(e){return"boolean"===y(e)}function i(e){return"string"===y(e)}function a(e){return"Object"===y(e)}var s=["any","anything","every","everything","all","whatever","whatevs"],u=Array.isArray;if(0===arguments.length)throw new Error("check-types-mini: [THROW_ID_01] Missing all arguments!");if(1===arguments.length)throw new Error("check-types-mini: [THROW_ID_02] Missing second argument!");var c=a(e)?e:{},f={ignoreKeys:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"},l=void 0;if(!i((l=o(t)&&a(t)?Object.assign({},f,t):Object.assign({},f)).msg))throw new Error("check-types-mini: [THROW_ID_03] opts.msg must be string! Currently it's: "+y(l.msg)+", equal to "+JSON.stringify(l.msg,null,4));if(l.msg=l.msg.trim(),":"===l.msg[l.msg.length-1]&&(l.msg=l.msg.slice(0,l.msg.length-1)),!i(l.optsVarName))throw new Error("check-types-mini: [THROW_ID_04] opts.optsVarName must be string! Currently it's: "+y(l.optsVarName)+", equal to "+JSON.stringify(l.optsVarName,null,4));if(l.ignoreKeys=ee(l.ignoreKeys),l.acceptArraysIgnore=ee(l.acceptArraysIgnore),!u(l.ignoreKeys))throw new TypeError("check-types-mini: [THROW_ID_05] opts.ignoreKeys should be an array, currently it's: "+y(l.ignoreKeys));if(!n(l.acceptArrays))throw new TypeError("check-types-mini: [THROW_ID_06] opts.acceptArrays should be a Boolean, currently it's: "+y(l.acceptArrays));if(!u(l.acceptArraysIgnore))throw new TypeError("check-types-mini: [THROW_ID_07] opts.acceptArraysIgnore should be an array, currently it's: "+y(l.acceptArraysIgnore));if(!n(l.enforceStrictKeyset))throw new TypeError("check-types-mini: [THROW_ID_08] opts.enforceStrictKeyset should be a Boolean, currently it's: "+y(l.enforceStrictKeyset));if(Object.keys(l.schema).forEach(function(e){u(l.schema[e])||(l.schema[e]=[l.schema[e]]),l.schema[e]=l.schema[e].map(String).map(function(e){return e.toLowerCase()}).map(function(e){return e.trim()})}),l.enforceStrictKeyset)if(o(l.schema)&&0<Object.keys(l.schema).length){if(0!==d(Object.keys(r),Object.keys(c).concat(Object.keys(l.schema))).length)throw new TypeError(l.msg+": "+l.optsVarName+".enforceStrictKeyset is on and the following keys are not covered by schema and/or reference objects: "+JSON.stringify(d(Object.keys(r),Object.keys(c).concat(Object.keys(l.schema))),null,4))}else{if(!(o(c)&&0<Object.keys(c).length))throw new TypeError(l.msg+": Both "+l.optsVarName+".schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!");if(0!==d(Object.keys(r),Object.keys(c)).length)throw new TypeError(l.msg+": The input object has keys that are not covered by reference object: "+JSON.stringify(d(Object.keys(r),Object.keys(c)),null,4));if(0!==d(Object.keys(c),Object.keys(r)).length)throw new TypeError(l.msg+": The reference object has keys that are not present in the input object: "+JSON.stringify(d(Object.keys(c),Object.keys(r)),null,4))}Object.keys(r).forEach(function(t){if(o(l.schema)&&Object.prototype.hasOwnProperty.call(l.schema,t)){if(l.schema[t]=ee(l.schema[t]).map(String).map(function(e){return e.toLowerCase()}),!(Y(l.schema[t],s).length||(!0===r[t]||!1===r[t]||l.schema[t].includes(y(r[t]).toLowerCase()))&&(!0!==r[t]&&!1!==r[t]||l.schema[t].includes(String(r[t]))||l.schema[t].includes("boolean")))){if(!u(r[t])||!l.acceptArrays)throw new TypeError(l.msg+": "+l.optsVarName+"."+t+" was customised to "+JSON.stringify(r[t],null,4)+" which is not among the allowed types in schema ("+l.schema[t]+") but "+y(r[t]));for(var e=0,n=r[t].length;e<n;e++)if(!l.schema[t].includes(y(r[t][e]).toLowerCase()))throw new TypeError(l.msg+": "+l.optsVarName+"."+t+" is of type "+y(r[t][e]).toLowerCase()+", but only the following are allowed in "+l.optsVarName+".schema: "+l.schema[t])}}else if(o(c)&&Object.prototype.hasOwnProperty.call(c,t)&&y(r[t])!==y(c[t])&&!l.ignoreKeys.includes(t)){if(!l.acceptArrays||!u(r[t])||l.acceptArraysIgnore.includes(t))throw new TypeError(l.msg+": "+l.optsVarName+"."+t+" was customised to "+JSON.stringify(r[t],null,4)+" which is not "+y(c[t])+" but "+y(r[t]));if(!r[t].every(function(e){return y(e)===y(c[t])}))throw new TypeError(l.msg+": "+l.optsVarName+"."+t+" was customised to be array, but not all of its elements are "+y(c[t])+"-type")}})}var ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var re,oe,ie=Function.prototype,ae=Object.prototype,se=ie.toString,ue=ae.hasOwnProperty,ce=se.call(Object),fe=ae.toString,le=(re=Object.getPrototypeOf,oe=Object,function(e){return re(oe(e))});var ye=function(e){if(!(t=e)||"object"!=(void 0===t?"undefined":ne(t))||"[object Object]"!=fe.call(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1;var t,n=le(e);if(null===n)return!0;var r=ue.call(n,"constructor")&&n.constructor;return"function"==typeof r&&r instanceof r&&se.call(r)==ce},pe=function(e,t){if("string"!=typeof e)return!1;if(t&&"includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(e)}return/^[1-9]\d*(\.0+)?$/.test(e)},ge="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},he=function(e,t){if(t){if("object"!==(void 0===t?"undefined":ge(t)))throw new TypeError(String(t)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero&&0===e)return!0}}return Number.isSafeInteger(e)&&1<=e},de=e(function(e,t){(t=e.exports=function(e){return e+t.suffix(+e)}).suffix=function(e){return 1===Math.floor(e/10)?"th":e%10==1?"st":e%10==2?"nd":e%10==3?"rd":"th"}}),me=(de.suffix,"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}),be=Array.isArray;var we="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ve=Array.isArray;function _e(e,t,n){function r(e){return null!=e}var o=void 0;if(he(e,{includeZero:!0}))o=e;else{if(!pe(e,{includeZero:!0}))throw new TypeError("ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_01] Input must mean an index, so it has to be either a natural number or a string containing natural number! Currently its type is: "+(void 0===e?"undefined":we(e))+", equal to: "+JSON.stringify(e,null,4));o=parseInt(e,10)}if(!r(t))throw new TypeError("ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_02] We're missing the second input, rangesArr. It's meant to be an array of one or more range arrays.");if(!ve(t))throw new TypeError("ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_03] Second input argument, rangesArr must be an array! Currently its type is: "+(void 0===e?"undefined":we(e))+", equal to: "+JSON.stringify(e,null,4));if(0===t.length)throw new TypeError("ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_04] Second input argument, rangesArr must be not empty! Currently it's empty.");var i=null;if(ve(t)&&0<t.length&&!ve(t[0]))throw new TypeError("ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_05] Second input argument, rangesArr must be an array of (index range) arrays! Currently it's equal to: "+t+".");if(!t.every(function(e,t){return!(!he(e[0],{includeZero:!0})||!he(e[1],{includeZero:!0}))||(i=t,!1)}))throw new TypeError("ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_06] Second input argument, rangesArr must consist of arrays which are natural number indexes representing string index ranges. However, "+de(i)+" range ("+JSON.stringify(t[i],null,4)+") does not consist of only natural numbers!");if(!t.every(function(e,t){return!(e[0]>e[1])||(i=t,!1)}))throw new TypeError("ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_07] The "+de(i)+" range ("+JSON.stringify(t[i],null,4)+") in the ranges array has beginning of the index bigger than ending! They can be equal but in the backwards order.");if(r(n)&&!ye(n))throw new TypeError("ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_08] Options object must be a plain object! Currently its type is: "+(void 0===n?"undefined":we(n))+", equal to: "+JSON.stringify(n,null,4));var a={inclusiveRangeEnds:!1,returnMatchedRangeInsteadOfTrue:!1,skipIncomingRangeSorting:!1},s=Object.assign(Object.assign({},a),n);if(te(s,a,{msg:"ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_07*]"}),t.length<3){if(1===t.length){var u=void 0;return u=s.inclusiveRangeEnds?o>=t[0][0]&&o<=t[0][1]:o>t[0][0]&&o<t[0][1],s.returnMatchedRangeInsteadOfTrue&&u?t[0]:u}var c=void 0,f=void 0;return s.inclusiveRangeEnds?(c=o>=t[0][0]&&o<=t[0][1],f=o>=t[1][0]&&o<=t[1][1]):(c=o>t[0][0]&&o<t[0][1],f=o>t[1][0]&&o<t[1][1]),s.returnMatchedRangeInsteadOfTrue&&(c||f)?c?t[0]:t[1]:c||f}var l=s.skipIncomingRangeSorting?t:function(e,t){if(!be(e))throw new TypeError("ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: "+(void 0===e?"undefined":me(e))+", equal to: "+JSON.stringify(e,null,4));if(0===e.length)return e;var n={strictlyTwoElementsInRangeArrays:!1},r=Object.assign({},n,t);te(r,n,{msg:"ranges-sort: [THROW_ID_02*]"});var o=void 0,i=void 0;if(r.strictlyTwoElementsInRangeArrays&&!e.every(function(e,t){return 2===e.length||(o=t,i=e.length,!1)}))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, "+de(o)+" range ("+JSON.stringify(e[o],null,4)+") has not two but "+i+" elements!");if(!e.every(function(e,t){return!(!he(e[0],{includeZero:!0})||!he(e[1],{includeZero:!0}))||(o=t,!1)}))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, "+de(o)+" range ("+JSON.stringify(e[o],null,4)+") does not consist of only natural numbers!");return Array.from(e).sort(function(e,t){return e[0]===t[0]?e[1]<t[1]?-1:e[1]>t[1]?1:0:e[0]<t[0]?-1:1})}(t);if(o<l[0][0]||o>l[l.length-1][1])return!1;if(o===l[0][0])return!!s.inclusiveRangeEnds&&(!s.returnMatchedRangeInsteadOfTrue||l[0]);if(o===l[l.length-1][1])return!!s.inclusiveRangeEnds&&(!s.returnMatchedRangeInsteadOfTrue||l[l.length-1]);for(var y=0,p=l.length-1,g=Math.floor((p+y)/2);1<Math.floor(p-y)&&0!==g;)if(o<l[g=Math.floor((p+y)/2)][0])p=g;else{if(!(o>l[g][1]))return o===l[g][0]||o===l[g][1]?!!s.inclusiveRangeEnds&&(!s.returnMatchedRangeInsteadOfTrue||l[g]):!s.returnMatchedRangeInsteadOfTrue||l[g];y=g}var h=void 0,d=void 0;return s.inclusiveRangeEnds?(h=o>=t[y][0]&&o<=t[y][1],d=o>=t[p][0]&&o<=t[p][1]):(h=o>t[y][0]&&o<t[y][1],d=o>t[p][0]&&o<t[p][1]),s.returnMatchedRangeInsteadOfTrue&&(h||d)?h?t[y]:t[p]:h||d}return function(e,t){if(void 0===e)throw new Error("string-split-by-whitespace: [THROW_ID_01] The input is missing!");if("string"!=typeof e)return e;if(""===e.trim())return[];var n={ignoreRanges:[]},r=Object.assign({},n,t);if(te(r,n,{msg:"string-split-by-whitespace: [THROW_ID_02*]"}),0<r.ignoreRanges.length&&!r.ignoreRanges.every(function(e){return Array.isArray(e)}))throw new Error("string-split-by-whitespace: [THROW_ID_03] The opts.ignoreRanges contains elements which are not arrays!");for(var o=null,i=[],a=0,s=e.length;a<s;a++)null!==o||""===e[a].trim()||0!==r.ignoreRanges.length&&(0===r.ignoreRanges.length||_e(a,r.ignoreRanges.map(function(e){return[e[0],e[1]-1]}),{inclusiveRangeEnds:!0}))||(o=a),null!==o&&(""===e[a].trim()?(i.push(e.slice(o,a)),o=null):r.ignoreRanges.length&&_e(a,r.ignoreRanges)?(i.push(e.slice(o,a-1)),o=null):void 0===e[a+1]&&i.push(e.slice(o,a+1)));return i}});
