/**
 * ranges-push
 * Gather string index ranges
 * Version: 4.0.2
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ranges-push/
 */

import{collWhitespace as e}from"string-collapse-leading-whitespace";import{rMerge as t}from"ranges-merge";const r="4.0.2";function s(e){return null!=e}function i(e){return Number.isInteger(e)&&e>=0}function n(e){return"string"==typeof e}const a={limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1};class o{constructor(e){const t={...a,...e};if(t.mergeType&&1!==t.mergeType&&2!==t.mergeType)if(n(t.mergeType)&&"1"===t.mergeType.trim())t.mergeType=1;else{if(!n(t.mergeType)||"2"!==t.mergeType.trim())throw new Error(`ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof t.mergeType}", equal to ${JSON.stringify(t.mergeType,null,4)}`);t.mergeType=2}this.opts=t,this.ranges=[]}add(t,r,a){if(null==t&&null==r)return;if(s(t)&&!s(r)){if(Array.isArray(t)){if(t.length){if(t.some((e=>Array.isArray(e))))return void t.forEach((e=>{Array.isArray(e)&&this.add(...e)}));t.length&&i(+t[0])&&i(+t[1])&&this.add(...t)}return}throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set (${JSON.stringify(t,null,0)}) but second-one, "to" is not (${JSON.stringify(r,null,0)})`)}if(!s(t)&&s(r))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set (${JSON.stringify(r,null,0)}) but first-one, "from" is not (${JSON.stringify(t,null,0)})`);const o=+t,g=+r;if(i(a)&&(a=String(a)),!i(o)||!i(g))throw i(o)&&o>=0?new TypeError(`ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it's of a type "${typeof g}" equal to: ${JSON.stringify(g,null,4)}`):new TypeError(`ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it's of a type "${typeof o}" equal to: ${JSON.stringify(o,null,4)}`);if(s(a)&&!n(a)&&!i(a))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ${typeof a}, equal to:\n${JSON.stringify(a,null,4)}`);if(s(this.ranges)&&Array.isArray(this.last())&&o===this.last()[1]){if(this.last()[1]=g,this.last(),null!==this.last()[2]&&s(a)){let t=!(this.last()[2]&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?a:this.last()[2]+a;this.opts.limitToBeAddedWhitespace&&(t=e(t,this.opts.limitLinebreaksCount)),n(t)&&!t.length||(this.last()[2]=t)}}else{this.ranges||(this.ranges=[]);const t=void 0===a||n(a)&&!a.length?[o,g]:[o,g,a&&this.opts.limitToBeAddedWhitespace?e(a,this.opts.limitLinebreaksCount):a];this.ranges.push(t)}}push(e,t,r){this.add(e,t,r)}current(){return Array.isArray(this.ranges)&&this.ranges.length?(this.ranges=t(this.ranges,{mergeType:this.opts.mergeType}),this.ranges&&this.opts.limitToBeAddedWhitespace?this.ranges.map((t=>s(t[2])?[t[0],t[1],e(t[2],this.opts.limitLinebreaksCount)]:t)):this.ranges):null}wipe(){this.ranges=[]}replace(e){if(Array.isArray(e)&&e.length){if(!Array.isArray(e[0])||!i(e[0][0]))throw new Error(`ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ${JSON.stringify(e[0],null,4)} should be an array and its first element should be an integer, a string index.`);this.ranges=Array.from(e)}else this.ranges=[]}last(){return Array.isArray(this.ranges)&&this.ranges.length?this.ranges[this.ranges.length-1]:null}}export{o as Ranges,a as defaults,r as version};
