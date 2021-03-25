/**
 * json-comb-core
 * The inner core of json-comb
 * Version: 6.8.10
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/json-comb-core/
 */

import{flattenAllArrays as e}from"object-flatten-all-arrays";import{fillMissing as o}from"object-fill-missing-keys";import{setAllValuesTo as t}from"object-set-all-values-to";import{mergeAdvanced as n}from"object-merge-advanced";import r from"compare-versions";import s from"lodash.includes";import{noNewKeys as i}from"object-no-new-keys";import c from"lodash.clonedeep";import l from"sort-keys";import a from"p-reduce";import y from"type-detect";import f from"p-one";const m="6.8.10";function h(e){return null!=e}function u(e){return"Object"===y(e)}function p(e){return"string"==typeof e}const g=Array.isArray;function b(e){if(null===e)return"null";if("boolean"==typeof e||"number"==typeof e)return e.toString();if("string"==typeof e)return e;if("symbol"==typeof e)throw new TypeError;return e.toString()}function d(e,o){const t=/^\d+\.\d+\.\d+$/g;return e.match(t)&&o.match(t)?r(e,o):function(e,o){if(void 0===e&&void 0===o)return 0;if(void 0===e)return 1;if(void 0===o)return-1;const t=b(e),n=b(o);return t<n?-1:t>n?1:0}(e,o)}function T(e){return u(e)||g(e)?l(e,{deep:!0,compare:d}):e}function w(o,r){if(0===arguments.length)throw new Error("json-comb-core/getKeyset(): [THROW_ID_11] Inputs missing!");if(h(r)&&!u(r))throw new TypeError(`json-comb-core/getKeysetSync(): [THROW_ID_12] Options object must be a plain object! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);const s={placeholder:!1},i={...s,...r};let c,l;return new Promise(((r,s)=>{f(o,((e,o)=>!u(e)&&(c=o,l=e,!0))).then((y=>y?s(Error(`json-comb-core/getKeyset(): [THROW_ID_13] Oops! ${c}th element resolved not to a plain object but to a ${typeof l}\n${JSON.stringify(l,null,4)}`)):a(o,((o,t)=>n(e(o,{flattenArraysContainingStringsToBeEmpty:!0}),e(t,{flattenArraysContainingStringsToBeEmpty:!0}),{mergeArraysContainingStringsToBeEmpty:!0})),{}).then((e=>{r(t(e,i.placeholder))}))))}))}function _(o,r){if(0===arguments.length)throw new Error("json-comb-core/getKeysetSync(): [THROW_ID_21] Inputs missing!");if(!g(o))throw new Error("json-comb-core/getKeysetSync(): [THROW_ID_22] Input must be array! Currently it's: "+typeof o);if(0===o.length)throw new Error("json-comb-core/getKeysetSync(): [THROW_ID_23] Input array is empty!");if(h(r)&&!u(r))throw new TypeError(`json-comb-core/getKeysetSync(): [THROW_ID_24] Options object must be a plain object! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);let s={};const i=c(o),l={placeholder:!1},a={...l,...r},y={flattenArraysContainingStringsToBeEmpty:!0};return i.forEach(((o,t)=>{if(!u(o))throw new TypeError(`json-comb-core/getKeysetSync(): [THROW_ID_25] Non-object (${typeof o}) detected within an array! It's the ${t}th element: ${JSON.stringify(o,null,4)}`);s=n(e(s,y),e(o,y),{mergeArraysContainingStringsToBeEmpty:!0})})),s=T(t(s,a.placeholder)),s}function j(e,t,n){if(0===arguments.length)throw new Error("json-comb-core/enforceKeyset(): [THROW_ID_31] Inputs missing!");if(1===arguments.length)throw new Error("json-comb-core/enforceKeyset(): [THROW_ID_32] Second arg missing!");const r={doNotFillThesePathsIfTheyContainPlaceholders:[],placeholder:!1,useNullAsExplicitFalse:!0},s={...r,...n};if(s.doNotFillThesePathsIfTheyContainPlaceholders.length>0&&!s.doNotFillThesePathsIfTheyContainPlaceholders.every((e=>p(e))))throw new Error(`json-comb-core/enforceKeyset(): [THROW_ID_33] Array opts.doNotFillThesePathsIfTheyContainPlaceholders contains non-string values:\n${JSON.stringify(s.doNotFillThesePathsIfTheyContainPlaceholders,null,4)}`);return new Promise(((n,r)=>{Promise.all([e,t]).then((([i,l])=>u(e)?u(t)?n(T(c(o(c(i),c(l),s)))):r(Error(`json-comb-core/enforceKeyset(): [THROW_ID_35] Schema, 2nd arg, must resolve to a plain object! Currently it's resolving to: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`)):r(Error(`json-comb-core/enforceKeyset(): [THROW_ID_34] Input must resolve to a plain object! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`))))}))}function I(e,t,n){if(0===arguments.length)throw new Error("json-comb-core/enforceKeysetSync(): [THROW_ID_41] Inputs missing!");if(1===arguments.length)throw new Error("json-comb-core/enforceKeysetSync(): [THROW_ID_42] Second arg missing!");if(!u(e))throw new Error(`json-comb-core/enforceKeysetSync(): [THROW_ID_43] Input must be a plain object! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(!u(t))throw new Error(`json-comb-core/enforceKeysetSync(): [THROW_ID_44] Schema object must be a plain object! Currently it's: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);const r={doNotFillThesePathsIfTheyContainPlaceholders:[],placeholder:!1,useNullAsExplicitFalse:!0},s={...r,...n};if(s.doNotFillThesePathsIfTheyContainPlaceholders.length>0&&!s.doNotFillThesePathsIfTheyContainPlaceholders.every((e=>p(e))))throw new Error(`json-comb-core/enforceKeyset(): [THROW_ID_45] Array opts.doNotFillThesePathsIfTheyContainPlaceholders contains non-string values:\n${JSON.stringify(s.doNotFillThesePathsIfTheyContainPlaceholders,null,4)}`);return T(o(c(e),t,s))}function O(e,o){if(0===arguments.length)throw new Error("json-comb-core/noNewKeysSync(): [THROW_ID_51] All inputs missing!");if(1===arguments.length)throw new Error("json-comb-core/noNewKeysSync(): [THROW_ID_52] Schema object is missing!");if(!u(e))throw new Error(`json-comb-core/noNewKeysSync(): [THROW_ID_53] Main input (1st arg.) must be a plain object! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(!u(o))throw new Error(`json-comb-core/noNewKeysSync(): [THROW_ID_54] Schema input (2nd arg.) must be a plain object! Currently it's: ${typeof o}, equal to: ${JSON.stringify(o,null,4)}`);return i(e,o)}function S(e,o){if(!g(e))throw new TypeError("json-comb-core/findUnusedSync(): [THROW_ID_61] The first argument should be an array. Currently it's: "+typeof e);if(0===e.length)return[];if(arguments.length>1&&!u(o))throw new TypeError("json-comb-core/findUnusedSync(): [THROW_ID_62] The second argument, options object, must be a plain object, not "+typeof o);const t={placeholder:!1,comments:"__comment__"},n={...t,...o};n.comments||(n.comments="");const r=c(e);function i(e){return e.map((e=>"."===e.charAt(0)?e.slice(1):e))}function l(e,o,t=[],n=""){if(g(e)&&0===e.length)return t;let r;if(e.every((e=>u(e)))){if(r=_(e),e.length>1){const i=Object.keys(r).filter((t=>e.every((e=>(o&&e[t]===o.placeholder||void 0===e[t])&&(!o||!o.comments||!s(t,o.comments))))));t=t.concat(i.map((e=>`${n}.${e}`)))}const i=[].concat(...Object.keys(r).filter((e=>u(r[e])||g(r[e])))),c=i.map((e=>y(r[e]))),a=i.map((t=>[].concat(...e.reduce(((e,n)=>(!n||!h(n[t])||o&&n[t]===o.placeholder||o&&o.comments&&s(n[t],o.comments)||e.push(n[t]),e)),[]))));let f="",m="";a.length>0&&a.forEach(((e,r)=>{"Array"===c[r]&&(f=`[${r}]`),m=".",t=l(e,o,t,n+m+i[r]+f)}))}else e.every((e=>g(e)))&&e.forEach(((e,r)=>{t=l(e,o,t,`${n}[${r}]`)}));return i(t)}return l(r,n)}export{j as enforceKeyset,I as enforceKeysetSync,S as findUnusedSync,w as getKeyset,_ as getKeysetSync,O as noNewKeysSync,T as sortAllObjectsSync,m as version};
