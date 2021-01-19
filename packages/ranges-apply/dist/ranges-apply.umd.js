/**
 * ranges-apply
 * Take an array of string index ranges, delete/replace the string according to them
 * Version: 4.0.2
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ranges-apply/
 */

!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((r="undefined"!=typeof globalThis?globalThis:r||self).rangesApply={})}(this,(function(r){"use strict";function e(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function n(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.push.apply(n,t)}return n}function t(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(n){e(r,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))}))}return r}var o={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function s(r,e){if(!Array.isArray(r)||!r.length)return r;var n,s,i=t(t({},o),e);if(i.strictlyTwoElementsInRangeArrays&&!r.filter((function(r){return r})).every((function(r,e){return 2===r.length||(n=e,s=r.length,!1)})))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, "+n+"th range ("+JSON.stringify(r[n],null,4)+") has not two but "+s+" elements!");if(!r.filter((function(r){return r})).every((function(r,e){return!(!Number.isInteger(r[0])||r[0]<0||!Number.isInteger(r[1])||r[1]<0)||(n=e,!1)})))throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, "+n+"th range ("+JSON.stringify(r[n],null,4)+") does not consist of only natural numbers!");var a=Math.pow(r.filter((function(r){return r})).length,2),u=0;return Array.from(r).filter((function(r){return r})).sort((function(r,e){return i.progressFn&&i.progressFn(Math.floor(100*(u+=1)/a)),r[0]===e[0]?r[1]<e[1]?-1:r[1]>e[1]?1:0:r[0]<e[0]?-1:1}))}var i={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function a(r,e){function n(r){return r&&"object"==typeof r&&!Array.isArray(r)}if(!Array.isArray(r)||!r.length)return null;var o;if(e){if(!n(e))throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n"+JSON.stringify(e,null,4)+" (type "+typeof e+")");if((o=t(t({},i),e)).progressFn&&n(o.progressFn)&&!Object.keys(o.progressFn).length)o.progressFn=null;else if(o.progressFn&&"function"!=typeof o.progressFn)throw new Error('ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "'+typeof o.progressFn+'", equal to '+JSON.stringify(o.progressFn,null,4));if(o.mergeType&&1!=+o.mergeType&&2!=+o.mergeType)throw new Error('ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'+typeof o.mergeType+'", equal to '+JSON.stringify(o.mergeType,null,4));if("boolean"!=typeof o.joinRangesThatTouchEdges)throw new Error('ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "'+typeof o.joinRangesThatTouchEdges+'", equal to '+JSON.stringify(o.joinRangesThatTouchEdges,null,4))}else o=t({},i);var a,u,l,g=r.filter((function(r){return r})).map((function(r){return[].concat(r)})).filter((function(r){return void 0!==r[2]||r[0]!==r[1]}));if(!(a=o.progressFn?s(g,{progressFn:function(r){(l=Math.floor(r/5))!==u&&(u=l,o.progressFn(l))}}):s(g)))return null;for(var f=a.length-1,p=f;p>0;p--)o.progressFn&&(l=Math.floor(78*(1-p/f))+21)!==u&&l>u&&(u=l,o.progressFn(l)),(a[p][0]<=a[p-1][0]||!o.joinRangesThatTouchEdges&&a[p][0]<a[p-1][1]||o.joinRangesThatTouchEdges&&a[p][0]<=a[p-1][1])&&(a[p-1][0]=Math.min(a[p][0],a[p-1][0]),a[p-1][1]=Math.max(a[p][1],a[p-1][1]),void 0!==a[p][2]&&(a[p-1][0]>=a[p][0]||a[p-1][1]<=a[p][1])&&null!==a[p-1][2]&&(null===a[p][2]&&null!==a[p-1][2]?a[p-1][2]=null:null!=a[p-1][2]?2==+o.mergeType&&a[p-1][0]===a[p][0]?a[p-1][2]=a[p][2]:a[p-1][2]+=a[p][2]:a[p-1][2]=a[p][2]),a.splice(p,1),p=a.length);return a.length?a:null}r.rApply=function(r,e,n){var t,o=0,s=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof r)throw new TypeError("ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: "+typeof r+", equal to: "+JSON.stringify(r,null,4));if(e&&!Array.isArray(e))throw new TypeError("ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: "+typeof e+", equal to: "+JSON.stringify(e,null,4));if(n&&"function"!=typeof n)throw new TypeError("ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: "+typeof n+", equal to: "+JSON.stringify(n,null,4));if(!e||!e.filter((function(r){return r})).length)return r;var i=(t=Array.isArray(e)&&Number.isInteger(e[0])&&Number.isInteger(e[1])?[Array.from(e)]:Array.from(e)).length,u=0;t.filter((function(r){return r})).forEach((function(r,e){if(n&&(o=Math.floor(u/i*10))!==s&&(s=o,n(o)),!Array.isArray(r))throw new TypeError("ranges-apply: [THROW_ID_05] ranges array, second input arg., has "+e+"th element not an array: "+JSON.stringify(r,null,4)+", which is "+typeof r);if(!Number.isInteger(r[0])){if(!Number.isInteger(+r[0])||+r[0]<0)throw new TypeError("ranges-apply: [THROW_ID_06] ranges array, second input arg. has "+e+"th element, array "+JSON.stringify(r,null,0)+". Its first element is not an integer, string index, but "+typeof r[0]+", equal to: "+JSON.stringify(r[0],null,4)+".");t[e][0]=+t[e][0]}if(!Number.isInteger(r[1])){if(!Number.isInteger(+r[1])||+r[1]<0)throw new TypeError("ranges-apply: [THROW_ID_07] ranges array, second input arg. has "+e+"th element, array "+JSON.stringify(r,null,0)+". Its second element is not an integer, string index, but "+typeof r[1]+", equal to: "+JSON.stringify(r[1],null,4)+".");t[e][1]=+t[e][1]}u+=1}));var l=a(t,{progressFn:function(r){n&&(o=10+Math.floor(r/10))!==s&&(s=o,n(o))}}),g=l.length;if(g>0){var f=r.slice(l[g-1][1]);r=l.reduce((function(e,t,i,a){return n&&(o=20+Math.floor(i/g*80))!==s&&(s=o,n(o)),e+r.slice(0===i?0:a[i-1][1],a[i][0])+(a[i][2]||"")}),""),r+=f}return r},r.version="4.0.2",Object.defineProperty(r,"__esModule",{value:!0})}));
