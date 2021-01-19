/**
 * csv-sort
 * Sorts double-entry bookkeeping CSV coming from internet banking
 * Version: 4.0.3
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/csv-sort/
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).csvSort={})}(this,(function(e){"use strict";function r(e,r,t){switch(t.length){case 0:return e.call(r);case 1:return e.call(r,t[0]);case 2:return e.call(r,t[0],t[1]);case 3:return e.call(r,t[0],t[1],t[2])}return e.apply(r,t)}function t(e,r,t){if(r!=r)return function(e,r,t,n){for(var i=e.length,s=t+(n?1:-1);n?s--:++s<i;)if(r(e[s],s,e))return s;return-1}(e,i,t);for(var n=t-1,s=e.length;++n<s;)if(e[n]===r)return n;return-1}function n(e,r,t,n){for(var i=t-1,s=e.length;++i<s;)if(n(e[i],r))return i;return-1}function i(e){return e!=e}var s,o,a=Array.prototype.splice,u=Math.max;function l(e,r,i,s){var o,u=s?n:t,l=-1,f=r.length,p=e;for(e===r&&(r=function(e,r){var t=-1,n=e.length;r||(r=Array(n));for(;++t<n;)r[t]=e[t];return r}(r)),i&&(p=function(e,r){for(var t=-1,n=e?e.length:0,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i}(e,(o=i,function(e){return o(e)})));++l<f;)for(var g=0,c=r[l],h=i?i(c):c;(g=u(p,h,g,s))>-1;)p!==e&&a.call(p,g,1),a.call(e,g,1);return e}var f=(s=function(e,r){return e&&e.length&&r&&r.length?l(e,r):e},o=u(void 0===o?s.length-1:o,0),function(){for(var e=arguments,t=-1,n=u(e.length-o,0),i=Array(n);++t<n;)i[t]=e[o+t];t=-1;for(var a=Array(o+1);++t<o;)a[t]=e[t];return a[o]=i,r(s,this,a)});function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function g(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?g(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var h={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function y(e,r){if(!Array.isArray(e)||!e.length)return e;var t,n,i=c(c({},h),r);if(i.strictlyTwoElementsInRangeArrays&&!e.filter((function(e){return e})).every((function(e,r){return 2===e.length||(t=r,n=e.length,!1)})))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, "+t+"th range ("+JSON.stringify(e[t],null,4)+") has not two but "+n+" elements!");if(!e.filter((function(e){return e})).every((function(e,r){return!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(t=r,!1)})))throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, "+t+"th range ("+JSON.stringify(e[t],null,4)+") does not consist of only natural numbers!");var s=Math.pow(e.filter((function(e){return e})).length,2),o=0;return Array.from(e).filter((function(e){return e})).sort((function(e,r){return i.progressFn&&i.progressFn(Math.floor(100*(o+=1)/s)),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1}))}var m={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function d(e,r){function t(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e)||!e.length)return null;var n;if(r){if(!t(r))throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n"+JSON.stringify(r,null,4)+" (type "+typeof r+")");if((n=c(c({},m),r)).progressFn&&t(n.progressFn)&&!Object.keys(n.progressFn).length)n.progressFn=null;else if(n.progressFn&&"function"!=typeof n.progressFn)throw new Error('ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "'+typeof n.progressFn+'", equal to '+JSON.stringify(n.progressFn,null,4));if(n.mergeType&&1!=+n.mergeType&&2!=+n.mergeType)throw new Error('ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'+typeof n.mergeType+'", equal to '+JSON.stringify(n.mergeType,null,4));if("boolean"!=typeof n.joinRangesThatTouchEdges)throw new Error('ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "'+typeof n.joinRangesThatTouchEdges+'", equal to '+JSON.stringify(n.joinRangesThatTouchEdges,null,4))}else n=c({},m);var i,s,o,a=e.filter((function(e){return e})).map((function(e){return[].concat(e)})).filter((function(e){return void 0!==e[2]||e[0]!==e[1]}));if(!(i=n.progressFn?y(a,{progressFn:function(e){(o=Math.floor(e/5))!==s&&(s=o,n.progressFn(o))}}):y(a)))return null;for(var u=i.length-1,l=u;l>0;l--)n.progressFn&&(o=Math.floor(78*(1-l/u))+21)!==s&&o>s&&(s=o,n.progressFn(o)),(i[l][0]<=i[l-1][0]||!n.joinRangesThatTouchEdges&&i[l][0]<i[l-1][1]||n.joinRangesThatTouchEdges&&i[l][0]<=i[l-1][1])&&(i[l-1][0]=Math.min(i[l][0],i[l-1][0]),i[l-1][1]=Math.max(i[l][1],i[l-1][1]),void 0!==i[l][2]&&(i[l-1][0]>=i[l][0]||i[l-1][1]<=i[l][1])&&null!==i[l-1][2]&&(null===i[l][2]&&null!==i[l-1][2]?i[l-1][2]=null:null!=i[l-1][2]?2==+n.mergeType&&i[l-1][0]===i[l][0]?i[l-1][2]=i[l][2]:i[l-1][2]+=i[l][2]:i[l-1][2]=i[l][2]),i.splice(l,1),l=i.length);return i.length?i:null}function v(e,r){void 0===r&&(r=1);function t(e){return Array.from(e).reverse().join("")}function n(e,r,t){var n=t?"\n":"\r",i=t?"\r":"\n";if(!e)return e;for(var s=0,o="",a=0,u=e.length;a<u;a++)(e[a]===n||e[a]===i&&e[a-1]!==n)&&s++,"\r\n".includes(e[a])||" "===e[a]?" "===e[a]?o+=e[a]:e[a]===n?s<=r&&(o+=e[a],e[a+1]===i&&(o+=e[a+1],a++)):e[a]===i&&(!e[a-1]||e[a-1]!==n)&&s<=r&&(o+=e[a]):e[a+1]||s||(o+=" ");return o}if("string"==typeof e&&e.length){var i=1;"number"==typeof+r&&Number.isInteger(+r)&&+r>=0&&(i=+r);var s="",o="";if(e.trim()){if(!e[0].trim())for(var a=0,u=e.length;a<u;a++)if(e[a].trim()){s=e.slice(0,a);break}}else s=e;if(e.trim()&&(""===e.slice(-1).trim()||" "===e.slice(-1)))for(var l=e.length;l--;)if(e[l].trim()){o=e.slice(l+1);break}return""+n(s,i,!1)+e.trim()+t(n(t(o),i,!0))}return e}function b(e){return null!=e}function T(e){return Number.isInteger(e)&&e>=0}function w(e){return"string"==typeof e}var S={limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1},O=function(){function e(e){var r=c(c({},S),e);if(r.mergeType&&1!==r.mergeType&&2!==r.mergeType)if(w(r.mergeType)&&"1"===r.mergeType.trim())r.mergeType=1;else{if(!w(r.mergeType)||"2"!==r.mergeType.trim())throw new Error('ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'+typeof r.mergeType+'", equal to '+JSON.stringify(r.mergeType,null,4));r.mergeType=2}this.opts=r,this.ranges=[]}var r=e.prototype;return r.add=function(e,r,t){var n=this;if(null!=e||null!=r){if(b(e)&&!b(r)){if(Array.isArray(e)){if(e.length){if(e.some((function(e){return Array.isArray(e)})))return void e.forEach((function(e){Array.isArray(e)&&n.add.apply(n,e)}));e.length&&T(+e[0])&&T(+e[1])&&this.add.apply(this,e)}return}throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set ('+JSON.stringify(e,null,0)+') but second-one, "to" is not ('+JSON.stringify(r,null,0)+")")}if(!b(e)&&b(r))throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set ('+JSON.stringify(r,null,0)+') but first-one, "from" is not ('+JSON.stringify(e,null,0)+")");var i=+e,s=+r;if(T(t)&&(t=String(t)),!T(i)||!T(s))throw T(i)&&i>=0?new TypeError('ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it\'s of a type "'+typeof s+'" equal to: '+JSON.stringify(s,null,4)):new TypeError('ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it\'s of a type "'+typeof i+'" equal to: '+JSON.stringify(i,null,4));if(b(t)&&!w(t)&&!T(t))throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but "+typeof t+", equal to:\n"+JSON.stringify(t,null,4));if(b(this.ranges)&&Array.isArray(this.last())&&i===this.last()[1]){if(this.last()[1]=s,this.last(),null!==this.last()[2]&&b(t)){var o=!(this.last()[2]&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?t:this.last()[2]+t;this.opts.limitToBeAddedWhitespace&&(o=v(o,this.opts.limitLinebreaksCount)),w(o)&&!o.length||(this.last()[2]=o)}}else{this.ranges||(this.ranges=[]);var a=void 0===t||w(t)&&!t.length?[i,s]:[i,s,t&&this.opts.limitToBeAddedWhitespace?v(t,this.opts.limitLinebreaksCount):t];this.ranges.push(a)}}},r.push=function(e,r,t){this.add(e,r,t)},r.current=function(){var e=this;return Array.isArray(this.ranges)&&this.ranges.length?(this.ranges=d(this.ranges,{mergeType:this.opts.mergeType}),this.ranges&&this.opts.limitToBeAddedWhitespace?this.ranges.map((function(r){return b(r[2])?[r[0],r[1],v(r[2],e.opts.limitLinebreaksCount)]:r})):this.ranges):null},r.wipe=function(){this.ranges=[]},r.replace=function(e){if(Array.isArray(e)&&e.length){if(!Array.isArray(e[0])||!T(e[0][0]))throw new Error("ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, "+JSON.stringify(e[0],null,4)+" should be an array and its first element should be an integer, a string index.");this.ranges=Array.from(e)}else this.ranges=[]},r.last=function(){return Array.isArray(this.ranges)&&this.ranges.length?this.ranges[this.ranges.length-1]:null},e}(),N="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},_="[object Symbol]",A=/^\s+|\s+$/g,I="\\u0300-\\u036f\\ufe20-\\ufe23",R="[\\ud800-\\udfff]",D="["+I+"\\u20d0-\\u20f0]",E="\\ud83c[\\udffb-\\udfff]",j="[^\\ud800-\\udfff]",F="(?:\\ud83c[\\udde6-\\uddff]){2}",W="[\\ud800-\\udbff][\\udc00-\\udfff]",H="(?:"+D+"|"+E+")"+"?",J="[\\ufe0e\\ufe0f]?",C=J+H+("(?:\\u200d(?:"+[j,F,W].join("|")+")"+J+H+")*"),k="(?:"+[j+D+"?",D,F,W,R].join("|")+")",P=RegExp(E+"(?="+E+")|"+k+C,"g"),M=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),$="object"==typeof self&&self&&self.Object===Object&&self,x="object"==typeof N&&N&&N.Object===Object&&N||$||Function("return this")();function K(e,r,t){if(r!=r)return function(e,r,t,n){for(var i=e.length,s=t+(n?1:-1);n?s--:++s<i;)if(r(e[s],s,e))return s;return-1}(e,q,t);for(var n=t-1,i=e.length;++n<i;)if(e[n]===r)return n;return-1}function q(e){return e!=e}function U(e){return function(e){return M.test(e)}(e)?function(e){return e.match(P)||[]}(e):function(e){return e.split("")}(e)}var V=Object.prototype.toString,B=x.Symbol,L=B?B.prototype:void 0,z=L?L.toString:void 0;function G(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&V.call(e)==_}(e))return z?z.call(e):"";var r=e+"";return"0"==r&&1/e==-Infinity?"-0":r}function Z(e,r,t){var n=e.length;return t=void 0===t?n:t,!r&&t>=n?e:function(e,r,t){var n=-1,i=e.length;r<0&&(r=-r>i?0:i+r),(t=t>i?i:t)<0&&(t+=i),i=r>t?0:t-r>>>0,r>>>=0;for(var s=Array(i);++n<i;)s[n]=e[n+r];return s}(e,r,t)}var Q=function(e,r,t){var n;if((e=null==(n=e)?"":G(n))&&(t||void 0===r))return e.replace(A,"");if(!e||!(r=G(r)))return e;var i=U(e),s=U(r);return Z(i,function(e,r){for(var t=-1,n=e.length;++t<n&&K(r,e[t],0)>-1;);return t}(i,s),function(e,r){for(var t=e.length;t--&&K(r,e[t],0)>-1;);return t}(i,s)+1).join("")};function Y(e,r){var t,n=!0,i=[".",",","'"," "];if("string"!=typeof e)throw new TypeError("string-remove-thousand-separators/remSep(): [THROW_ID_01] Input must be string! Currently it's: "+typeof e+", equal to:\n"+JSON.stringify(e,null,4));if(r&&"object"!=typeof r)throw new TypeError("string-remove-thousand-separators/remSep(): [THROW_ID_02] Options object must be a plain object! Currently it's: "+typeof r+", equal to:\n"+JSON.stringify(r,null,4));var s=c(c({},{removeThousandSeparatorsFromNumbers:!0,padSingleDecimalPlaceNumbers:!0,forceUKStyle:!1}),r),o=Q(e.trim(),'"');if(""===o)return o;for(var a=new O,u=0,l=o.length;u<l;u++){if(s.removeThousandSeparatorsFromNumbers&&""===o[u].trim()&&a.add(u,u+1),s.removeThousandSeparatorsFromNumbers&&"'"===o[u]&&(a.add(u,u+1),"'"===o[u+1])){n=!1;break}if(i.includes(o[u])){if(void 0!==o[u+1]&&/^\d*$/.test(o[u+1]))if(void 0!==o[u+2]){if(!/^\d*$/.test(o[u+2])){n=!1;break}if(void 0!==o[u+3]){if(!/^\d*$/.test(o[u+3])){n=!1;break}if(void 0!==o[u+4]&&/^\d*$/.test(o[u+4])){n=!1;break}if(s.removeThousandSeparatorsFromNumbers&&a.add(u,u+1),t){if(o[u]!==t){n=!1;break}}else t=o[u]}else s.removeThousandSeparatorsFromNumbers&&s.forceUKStyle&&","===o[u]&&a.add(u,u+1,".")}else s.forceUKStyle&&","===o[u]&&a.add(u,u+1,"."),s.padSingleDecimalPlaceNumbers&&a.add(u+2,u+2,"0")}else if(!/^\d*$/.test(o[u])){n=!1;break}}return n&&a.current()?function(e,r,t){var n,i=0,s=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof e)throw new TypeError("ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: "+typeof e+", equal to: "+JSON.stringify(e,null,4));if(r&&!Array.isArray(r))throw new TypeError("ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: "+typeof r+", equal to: "+JSON.stringify(r,null,4));if(t&&"function"!=typeof t)throw new TypeError("ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: "+typeof t+", equal to: "+JSON.stringify(t,null,4));if(!r||!r.filter((function(e){return e})).length)return e;var o=(n=Array.isArray(r)&&Number.isInteger(r[0])&&Number.isInteger(r[1])?[Array.from(r)]:Array.from(r)).length,a=0;n.filter((function(e){return e})).forEach((function(e,r){if(t&&(i=Math.floor(a/o*10))!==s&&(s=i,t(i)),!Array.isArray(e))throw new TypeError("ranges-apply: [THROW_ID_05] ranges array, second input arg., has "+r+"th element not an array: "+JSON.stringify(e,null,4)+", which is "+typeof e);if(!Number.isInteger(e[0])){if(!Number.isInteger(+e[0])||+e[0]<0)throw new TypeError("ranges-apply: [THROW_ID_06] ranges array, second input arg. has "+r+"th element, array "+JSON.stringify(e,null,0)+". Its first element is not an integer, string index, but "+typeof e[0]+", equal to: "+JSON.stringify(e[0],null,4)+".");n[r][0]=+n[r][0]}if(!Number.isInteger(e[1])){if(!Number.isInteger(+e[1])||+e[1]<0)throw new TypeError("ranges-apply: [THROW_ID_07] ranges array, second input arg. has "+r+"th element, array "+JSON.stringify(e,null,0)+". Its second element is not an integer, string index, but "+typeof e[1]+", equal to: "+JSON.stringify(e[1],null,4)+".");n[r][1]=+n[r][1]}a+=1}));var u=d(n,{progressFn:function(e){t&&(i=10+Math.floor(e/10))!==s&&(s=i,t(i))}}),l=u.length;if(l>0){var f=e.slice(u[l-1][1]);e=u.reduce((function(r,n,o,a){return t&&(i=20+Math.floor(o/l*80))!==s&&(s=i,t(i)),r+e.slice(0===o?0:a[o-1][1],a[o][0])+(a[o][2]||"")}),""),e+=f}return e}(o,a.current()):o}var X={removeThousandSeparatorsFromNumbers:!0,padSingleDecimalPlaceNumbers:!0,forceUKStyle:!1};
/*!
 * currency.js - v2.0.3
 * http://scurker.github.io/currency.js
 *
 * Copyright (c) 2020 Jason Wilson
 * Released under MIT license
 */
var ee={symbol:"$",separator:",",decimal:".",errorOnInvalid:!1,precision:2,pattern:"!#",negativePattern:"-!#",format:function(e,r){var t=r.pattern,n=r.negativePattern,i=r.symbol,s=r.separator,o=r.decimal,a=r.groups,u=(""+e).replace(/^-/,"").split("."),l=u[0],f=u[1];return(e.value>=0?t:n).replace("!",i).replace("#",l.replace(a,"$1"+s)+(f?o+f:""))},fromCents:!1},re=function(e){return Math.round(e)},te=function(e){return Math.pow(10,e)},ne=/(\d)(?=(\d{3})+\b)/g,ie=/(\d)(?=(\d\d)+\d\b)/g;function se(e,r){var t=this;if(!(t instanceof se))return new se(e,r);var n=Object.assign({},ee,r),i=te(n.precision),s=oe(e,n);t.intValue=s,t.value=s/i,n.increment=n.increment||1/i,n.groups=n.useVedic?ie:ne,this.s=n,this.p=i}function oe(e,r){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=0,i=r.decimal,s=r.errorOnInvalid,o=r.precision,a=r.fromCents,u=te(o),l="number"==typeof e,f=e instanceof se;if(f&&a)return e.intValue;if(l||f)n=f?e.value:e;else if("string"==typeof e){var p=new RegExp("[^-\\d"+i+"]","g"),g=new RegExp("\\"+i,"g");n=(n=e.replace(/\((.*)\)/,"-$1").replace(p,"").replace(g,"."))||0}else{if(s)throw Error("Invalid Input");n=0}return a||(n=(n*=u).toFixed(4)),t?re(n):n}function ae(e){return!!e.trim()&&Number(e)==Number(e)}se.prototype={add:function(e){var r=this.intValue,t=this.s,n=this.p;return se((r+=oe(e,t))/(t.fromCents?1:n),t)},subtract:function(e){var r=this.intValue,t=this.s,n=this.p;return se((r-=oe(e,t))/(t.fromCents?1:n),t)},multiply:function(e){var r=this.intValue,t=this.s;return se((r*=e)/(t.fromCents?1:te(t.precision)),t)},divide:function(e){var r=this.intValue,t=this.s;return se(r/=oe(e,t,!1),t)},distribute:function(e){for(var r=this.intValue,t=this.p,n=this.s,i=[],s=Math[r>=0?"floor":"ceil"](r/e),o=Math.abs(r-s*e),a=n.fromCents?1:t;0!==e;e--){var u=se(s/a,n);o-- >0&&(u=u[r>=0?"add":"subtract"](1/a)),i.push(u)}return i},dollars:function(){return~~this.value},cents:function(){return~~(this.intValue%this.p)},format:function(e){var r=this.s;return"function"==typeof e?e(this,r):r.format(this,Object.assign({},r,e))},toString:function(){var e,r,t=this.s;return(e=this.intValue/this.p,r=t.increment,re(e/r)*r).toFixed(t.precision)},toJSON:function(){return this.value}};var ue=["د.إ","؋","L","֏","ƒ","Kz","$","ƒ","₼","KM","৳","лв",".د.ب","FBu","$b","R$","฿","Nu.","P","p.","BZ$","FC","CHF","¥","₡","₱","Kč","Fdj","kr","RD$","دج","kr","Nfk","Br","Ξ","€","₾","₵","GH₵","D","FG","Q","L","kn","G","Ft","Rp","₪","₹","ع.د","﷼","kr","J$","JD","¥","KSh","лв","៛","CF","₩","₩","KD","лв","₭","₨","M","Ł","Lt","Ls","LD","MAD","lei","Ar","ден","K","₮","MOP$","UM","₨","Rf","MK","RM","MT","₦","C$","kr","₨","﷼","B/.","S/.","K","₱","₨","zł","Gs","﷼","￥","lei","Дин.","₽","R₣","﷼","₨","ج.س.","kr","£","Le","S","Db","E","฿","SM","T","د.ت","T$","₤","₺","TT$","NT$","TSh","₴","USh","$U","лв","Bs","₫","VT","WS$","FCFA","Ƀ","CFA","₣","﷼","R","Z$"];function le(e){if("string"!=typeof e)throw new Error("csv-sort/util/findType(): input must be string! Currently it's: "+typeof e);return ae(e)||ue.some((function(r){return ae(e.replace(r,"").replace(/[,.]/g,""))}))?"numeric":e.trim()?"text":"empty"}e.sort=function(e){var r=null,t=null;if("string"!=typeof e)throw new TypeError("csv-sort/csvSort(): [THROW_ID_01] The input is of a wrong type! We accept either string of array of arrays. We got instead: "+typeof e+", equal to:\n"+JSON.stringify(e,null,4));if(!e.trim())return{res:[[""]],msgContent:r,msgType:t};for(var n=function(e,r){var t=0,n=0,i=[],s=[],o=!1,a=!0;if(r&&"object"!=typeof r)throw new Error("csv-split-easy/split(): [THROW_ID_02] Options object must be a plain object! Currently it's of a type "+typeof r+" equal to:\n"+JSON.stringify(r,null,4));var u=c(c({},X),r);if("string"!=typeof e)throw new TypeError("csv-split-easy/split(): [THROW_ID_04] input must be string! Currently it's: "+typeof e+", equal to: "+JSON.stringify(e,null,4));if(""===e)return[[""]];for(var l=0,f=(e=e.trim()).length;l<f;l++){if(a&&'"'!==e[l]&&","!==e[l]&&""!==e[l].trim()&&(a=!1),'"'===e[l])if(o&&'"'===e[l+1])l+=1;else if(o){o=!1;var p=e.slice(t,l);""!==p.trim()&&(a=!1);var g=/""/.test(p)?p.replace(/""/g,'"'):Y(p,{removeThousandSeparatorsFromNumbers:u.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:u.padSingleDecimalPlaceNumbers,forceUKStyle:u.forceUKStyle});i.push(g)}else o=!0,t=l+1;else if(o||","!==e[l])if("\n"===e[l]||"\r"===e[l]){if(!n){if(n=l,!o&&'"'!==e[l-1]){var h=e.slice(t,l);""!==h.trim()&&(a=!1),i.push(Y(h,{removeThousandSeparatorsFromNumbers:u.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:u.padSingleDecimalPlaceNumbers,forceUKStyle:u.forceUKStyle}))}a?i.length=0:s.push(i),a=!0,i=[]}t=l+1}else n&&(n=0,t=l);else{if('"'!==e[l-1]&&!o){var y=e.slice(t,l);""!==y.trim()&&(a=!1),i.push(Y(y,{removeThousandSeparatorsFromNumbers:u.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:u.padSingleDecimalPlaceNumbers,forceUKStyle:u.forceUKStyle}))}t=l+1,n&&(n=0)}if(l+1===f){if('"'!==e[l]){var m=e.slice(t,l+1);m.trim()&&(a=!1),i.push(Y(m,{removeThousandSeparatorsFromNumbers:u.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:u.padSingleDecimalPlaceNumbers,forceUKStyle:u.forceUKStyle}))}a?i=[]:s.push(i),a=!0}}return 0===s.length?[[""]]:s}(e),i=[],s=!1,o=!0,a=[],u=null,l=n.length-1;l>=0;l--)if(i.length){0===l&&(s=n[l].every((function(e){return"text"===le(e)||"empty"===le(e)}))),s||i.length===n[l].length||(o=!1);for(var p=null,g=0,h=n[l].length;g<h;g++)if(null===p&&"empty"===le(n[l][g].trim())&&(p=g),null!==p&&"empty"!==le(n[l][g].trim())&&(p=null),le(n[l][g].trim())!==i[g]&&!s){var y=le(n[l][g].trim());if(Array.isArray(i[g]))i[g].includes(y)||i[g].push(le(n[l][g].trim()));else if(i[g]!==y){var m=i[g];i[g]=[],i[g].push(m),i[g].push(y)}}null!==u&&null!==p&&p>u&&(!s||s&&0!==l)&&(u=p)}else if(1!==n[l].length||""!==n[l][0])for(var d=0,v=n[l].length;d<v;d++)i.push(le(n[l][d].trim())),null===u&&"empty"===le(n[l][d].trim())&&(u=d),null!==u&&"empty"!==le(n[l][d].trim())&&(u=null);u||(u=i.length);for(var b=0,T=0,w=i.length;T<w&&"empty"===i[T];T++)b=T;0!==b&&(n=n.map((function(e){return e.slice(b+1,u)})),i=i.slice(b+1,u));var S,O=[];i.forEach((function(e,r){"numeric"===e&&O.push(r)}));var N=s?1:0;if(1===O.length)S=O[0];else{if(0===O.length)throw new Error('csv-sort/csvSort(): [THROW_ID_03] Your CSV file does not contain numeric-only columns and computer was not able to detect the "Balance" column!');for(var _=Array.from(O),A=[],I=0,R=_.length;I<R;I++){for(var D=_[I],E=void 0,j=!0,F=void 0,W=!0,H=N,J=n.length;H<J&&(j&&(null==E?E=n[H][D]:E===n[H][D]?(A.push(D),j=!1):E=n[H][D]),W&&(null==F?F=n[H][D]:n[H][D]!==F&&(W=!1)),j);H++);W&&a.push(D)}if(1===(_=f.apply(void 0,[_].concat(A))).length)S=_[0];else if(0===_.length)throw new Error('csv-sort/csvSort(): [THROW_ID_04] The computer can\'t find the "Balance" column! It saw some numeric-only columns, but they all seem to have certain rows with the same values as rows right below/above them!')}if(!S)throw new Error("csv-sort/csvSort(): [THROW_ID_05] Sadly computer couldn't find its way in this CSV and had to stop working on it.");var C=f.apply(void 0,[Array.from(i.reduce((function(e,r,t){return("string"==typeof r&&"numeric"===r||Array.isArray(r)&&r.includes("numeric"))&&e.push(t),e}),[])),S].concat(a)),k=[];k.push(n[n.length-1].slice(0,u));for(var P=[],M=s?1:0,$=n.length-2;$>=M;$--)for(var x=n.length-2;x>=M;x--)if(!P.includes(x)){for(var K=!1,q=0,U=C.length;q<U;q++){var V=null;""!==n[x][C[q]]&&(V=se(n[x][C[q]]));var B=null;""!==n[x][S]&&(B=se(n[x][S]));var L=null;""!==k[0][S]&&(L=se(k[0][S]).format());var z=null;""!==k[k.length-1][C[q]]&&(z=se(k[k.length-1][C[q]]).format());var G=null;if(""!==k[k.length-1][S]&&(G=se(k[k.length-1][S])),V&&B.add(V).format()===L){k.unshift(n[x].slice(0,u)),P.push(x),K=!0;break}if(V&&B.subtract(V).format()===L){k.unshift(n[x].slice(0,u)),P.push(x),K=!0;break}if(z&&G.add(z).format()===B.format()){k.push(n[x].slice(0,u)),P.push(x),K=!0;break}if(z&&G.subtract(z).format()===B.format()){k.push(n[x].slice(0,u)),P.push(x),K=!0;break}}if(K){K=!1;break}}return s&&(o&&n[0].length>i.length&&(n[0].length=i.length),k.unshift(n[0].slice(0,u))),n.length-(s?2:1)!==P.length&&(r="Not all rows were recognised!",t="alert"),{res:k,msgContent:r,msgType:t}},Object.defineProperty(e,"__esModule",{value:!0})}));
