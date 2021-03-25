/**
 * ranges-merge
 * Merge and sort string index ranges
 * Version: 7.0.10
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ranges-merge/
 */

import{rSort as e}from"ranges-sort";const r="7.0.10",n={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function o(r,o){function s(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(r)||!r.length)return null;let t;if(o){if(!s(o))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(o,null,4)} (type ${typeof o})`);if(t={...n,...o},t.progressFn&&s(t.progressFn)&&!Object.keys(t.progressFn).length)t.progressFn=null;else if(t.progressFn&&"function"!=typeof t.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof t.progressFn}", equal to ${JSON.stringify(t.progressFn,null,4)}`);if(t.mergeType&&1!=+t.mergeType&&2!=+t.mergeType)throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof t.mergeType}", equal to ${JSON.stringify(t.mergeType,null,4)}`);if("boolean"!=typeof t.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof t.joinRangesThatTouchEdges}", equal to ${JSON.stringify(t.joinRangesThatTouchEdges,null,4)}`)}else t={...n};const g=r.filter((e=>e)).map((e=>[...e])).filter((e=>void 0!==e[2]||e[0]!==e[1]));let l,a,i;if(l=t.progressFn?e(g,{progressFn:e=>{i=Math.floor(e/5),i!==a&&(a=i,t.progressFn(i))}}):e(g),!l)return null;const p=l.length-1;for(let e=p;e>0;e--)t.progressFn&&(i=Math.floor(78*(1-e/p))+21,i!==a&&i>a&&(a=i,t.progressFn(i))),(l[e][0]<=l[e-1][0]||!t.joinRangesThatTouchEdges&&l[e][0]<l[e-1][1]||t.joinRangesThatTouchEdges&&l[e][0]<=l[e-1][1])&&(l[e-1][0]=Math.min(l[e][0],l[e-1][0]),l[e-1][1]=Math.max(l[e][1],l[e-1][1]),void 0!==l[e][2]&&(l[e-1][0]>=l[e][0]||l[e-1][1]<=l[e][1])&&null!==l[e-1][2]&&(null===l[e][2]&&null!==l[e-1][2]?l[e-1][2]=null:null!=l[e-1][2]?2==+t.mergeType&&l[e-1][0]===l[e][0]?l[e-1][2]=l[e][2]:l[e-1][2]+=l[e][2]:l[e-1][2]=l[e][2]),l.splice(e,1),e=l.length);return l.length?l:null}export{n as defaults,o as rMerge,r as version};
