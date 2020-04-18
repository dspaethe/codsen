/**
 * string-apostrophes
 * Comprehensive, HTML-entities-aware tool to typographically-correct the apostrophes and single/double quotes
 * Version: 1.2.17
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-apostrophes
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e=e||self).stringApostrophes={})}(this,(function(e){"use strict";function r(e,r){if(!Array.isArray(e))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(0===e.length)return e;const s=Object.assign({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null},r);let t,o;if(s.strictlyTwoElementsInRangeArrays&&!e.every((e,r)=>2===e.length||(t=r,o=e.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${t}th range (${JSON.stringify(e[t],null,4)}) has not two but ${o} elements!`);if(!e.every((e,r)=>!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(t=r,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${t}th range (${JSON.stringify(e[t],null,4)}) does not consist of only natural numbers!`);const n=e.length*e.length;let i=0;return Array.from(e).sort((e,r)=>(s.progressFn&&(i++,s.progressFn(Math.floor(100*i/n))),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1))}function s(e,s){function t(e){return"string"==typeof e}function o(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e))return e;const n={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let i;if(s){if(!o(s))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(s,null,4)} (type ${typeof s})`);if(i=Object.assign({},n,s),i.progressFn&&o(i.progressFn)&&!Object.keys(i.progressFn).length)i.progressFn=null;else if(i.progressFn&&"function"!=typeof i.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof i.progressFn}", equal to ${JSON.stringify(i.progressFn,null,4)}`);if(i.mergeType&&1!==i.mergeType&&2!==i.mergeType)if(t(i.mergeType)&&"1"===i.mergeType.trim())i.mergeType=1;else{if(!t(i.mergeType)||"2"!==i.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof i.mergeType}", equal to ${JSON.stringify(i.mergeType,null,4)}`);i.mergeType=2}if("boolean"!=typeof i.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof i.joinRangesThatTouchEdges}", equal to ${JSON.stringify(i.joinRangesThatTouchEdges,null,4)}`)}else i=Object.assign({},n);const u=e.map(e=>[...e]).filter(e=>void 0!==e[2]||e[0]!==e[1]);let a,l,c;a=i.progressFn?r(u,{progressFn:e=>{c=Math.floor(e/5),c!==l&&(l=c,i.progressFn(c))}}):r(u);const p=a.length-1;for(let e=p;e>0;e--)i.progressFn&&(c=Math.floor(78*(1-e/p))+21,c!==l&&c>l&&(l=c,i.progressFn(c))),(a[e][0]<=a[e-1][0]||!i.joinRangesThatTouchEdges&&a[e][0]<a[e-1][1]||i.joinRangesThatTouchEdges&&a[e][0]<=a[e-1][1])&&(a[e-1][0]=Math.min(a[e][0],a[e-1][0]),a[e-1][1]=Math.max(a[e][1],a[e-1][1]),void 0!==a[e][2]&&(a[e-1][0]>=a[e][0]||a[e-1][1]<=a[e][1])&&null!==a[e-1][2]&&(null===a[e][2]&&null!==a[e-1][2]?a[e-1][2]=null:void 0!==a[e-1][2]?2===i.mergeType&&a[e-1][0]===a[e][0]?a[e-1][2]=a[e][2]:a[e-1][2]+=a[e][2]:a[e-1][2]=a[e][2]),a.splice(e,1),e=a.length);return a}function t(e){return null!=e}function o(e){return"string"==typeof e}function n(e,r,n){let i=0,u=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if(!o(e))throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(null===r)return e;if(!Array.isArray(r))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);if(n&&"function"!=typeof n)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof n}, equal to: ${JSON.stringify(n,null,4)}`);Array.isArray(r)&&(Number.isInteger(r[0])&&r[0]>=0||/^\d*$/.test(r[0]))&&(Number.isInteger(r[1])&&r[1]>=0||/^\d*$/.test(r[1]))&&(r=[r]);const a=r.length;let l=0;r.forEach((e,s)=>{if(n&&(i=Math.floor(l/a*10),i!==u&&(u=i,n(i))),!Array.isArray(e))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${s}th element not an array: ${JSON.stringify(e,null,4)}, which is ${typeof e}`);if(!Number.isInteger(e[0])||e[0]<0){if(!/^\d*$/.test(e[0]))throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${s}th element, array [${e[0]},${e[1]}]. That array has first element not an integer, but ${typeof e[0]}, equal to: ${JSON.stringify(e[0],null,4)}. Computer doesn't like this.`);r[s][0]=Number.parseInt(r[s][0],10)}if(!Number.isInteger(e[1])){if(!/^\d*$/.test(e[1]))throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${s}th element, array [${e[0]},${e[1]}]. That array has second element not an integer, but ${typeof e[1]}, equal to: ${JSON.stringify(e[1],null,4)}. Computer doesn't like this.`);r[s][1]=Number.parseInt(r[s][1],10)}l++});const c=s(r,{progressFn:e=>{n&&(i=10+Math.floor(e/10),i!==u&&(u=i,n(i)))}}),p=c.length;if(p>0){const r=e.slice(c[p-1][1]);e=c.reduce((r,s,o,a)=>{n&&(i=20+Math.floor(o/p*80),i!==u&&(u=i,n(i)));const l=0===o?0:a[o-1][1],c=a[o][0];return r+e.slice(l,c)+(t(a[o][2])?a[o][2]:"")},""),e+=r}return e}function i(e,r){var s=r.from,t=r.to,o=r.value,n=r.convertEntities,i=void 0===n||n,u=r.convertApostrophes,a=void 0===u||u,l=r.offsetBy;if(!Number.isInteger(t)){if(!Number.isInteger(s))throw new Error('string-apostrophes: [THROW_ID_01] options objects keys\' "to" and "from" values are not integers!');t=s+1}var c=[],p="‘",g="’",h="“",f="”",y="′",m="″",d=[".",",",";","!","?"];function q(e){return"string"==typeof e&&e.charCodeAt(0)>=48&&e.charCodeAt(0)<=57}function w(e){return"string"==typeof e&&e.length&&e.toUpperCase()!==e.toLowerCase()}return["'",p,g,y].includes(o)||t===s+1&&["'",p,g,y].includes(e[s])?e[s-1]&&e[t]&&q(e[s-1])&&!w(e[t])?a&&e.slice(s,t)!==(i?"&prime;":y)&&o!==(i?"&prime;":y)?c.push([s,t,i?"&prime;":y]):a||"'"===e.slice(s,t)||"'"===o||c.push([s,t,"'"]):e[t]&&e[t+1]&&"n"===e[t]&&e.slice(s,t)===e.slice(t+1,t+1+(t-s))?a&&e.slice(s,t+2)!==(i?"&rsquo;n&rsquo;":"".concat(g,"n").concat(g))&&o!==(i?"&rsquo;n&rsquo;":"".concat(g,"n").concat(g))?(c.push([s,t+2,i?"&rsquo;n&rsquo;":"".concat(g,"n").concat(g)]),"function"==typeof l&&l(2)):a||"'n'"===e.slice(s,t+2)||"'n'"===o||(c.push([s,t+2,"'n'"]),"function"==typeof l&&l(2)):e[t]&&"t"===e[t].toLowerCase()&&(!e[t+1]||!e[t+1].trim()||"i"===e[t+1].toLowerCase())||e[t]&&e[t+2]&&"t"===e[t].toLowerCase()&&"w"===e[t+1].toLowerCase()&&("a"===e[t+2].toLowerCase()||"e"===e[t+2].toLowerCase()||"i"===e[t+2].toLowerCase()||"o"===e[t+2].toLowerCase())||e[t]&&e[t+1]&&"e"===e[t].toLowerCase()&&"m"===e[t+1].toLowerCase()||e[t]&&e[t+4]&&"c"===e[t].toLowerCase()&&"a"===e[t+1].toLowerCase()&&"u"===e[t+2].toLowerCase()&&"s"===e[t+3].toLowerCase()&&"e"===e[t+4].toLowerCase()||e[t]&&q(e[t])?a&&e.slice(s,t)!==(i?"&rsquo;":g)&&o!==(i?"&rsquo;":g)?c.push([s,t,i?"&rsquo;":g]):a||"'"===e.slice(s,t)||"'"===o||c.push([s,t,"'"]):e[s-1]&&e[t]&&d.includes(e[s-1])?e[t].trim()?34===e[t].charCodeAt(0)&&e[t+1]&&!e[t+1].trim()&&(a&&e.slice(s,t+1)!==(i?"&rsquo;&rdquo;":"".concat(g).concat(f))&&o!==(i?"&rsquo;&rdquo;":"".concat(g).concat(f))?(c.push([s,t+1,"".concat(i?"&rsquo;&rdquo;":"".concat(g).concat(f))]),"function"==typeof l&&l(1)):a||"'\""===e.slice(s,t+1)||"'\""===o||(c.push([s,t+1,"'\""]),"function"==typeof l&&l(1))):a&&e.slice(s,t)!==(i?"&rsquo;":g)&&o!==(i?"&rsquo;":g)?c.push([s,t,i?"&rsquo;":g]):a||"'"===e.slice(s,t)||"'"===o||c.push([s,t,"'"]):0===s&&e.slice(t).trim()?a&&e.slice(s,t)!==(i?"&lsquo;":p)&&o!==(i?"&lsquo;":p)?c.push([s,t,i?"&lsquo;":p]):a||"'"===e.slice(s,t)||"'"===o||c.push([s,t,"'"]):!e[t]&&e.slice(0,s).trim()?a&&e.slice(s,t)!==(i?"&rsquo;":g)&&o!==(i?"&rsquo;":g)?c.push([s,t,i?"&rsquo;":g]):a||"'"===e.slice(s,t)||"'"===o||c.push([s,t,"'"]):e[s-1]&&e[t]&&(w(e[s-1])||q(e[s-1]))&&(w(e[t])||q(e[t]))?a?(e[t]&&e[s-5]&&"h"===e[s-5].toLowerCase()&&"a"===e[s-4].toLowerCase()&&"w"===e[s-3].toLowerCase()&&"a"===e[s-2].toLowerCase()&&"i"===e[s-1].toLowerCase()&&"i"===e[t].toLowerCase()||e[s-1]&&"o"===e[s-1].toLowerCase()&&e[t+2]&&"a"===e[t].toLowerCase()&&"h"===e[t+1].toLowerCase()&&"u"===e[t+2].toLowerCase())&&e.slice(s,t)!==(i?"&lsquo;":p)&&o!==(i?"&lsquo;":p)?c.push([s,t,i?"&lsquo;":p]):e.slice(s,t)!==(i?"&rsquo;":g)&&o!==(i?"&rsquo;":g)&&c.push([s,t,i?"&rsquo;":g]):"'"!==e.slice(s,t)&&"'"!==o&&c.push([s,t,"'"]):e[t]&&(w(e[t])||q(e[t]))?a&&e.slice(s,t)!==(i?"&lsquo;":p)&&o!==(i?"&lsquo;":p)?c.push([s,t,i?"&lsquo;":p]):a||"'"===e.slice(s,t)||"'"===o||c.push([s,t,"'"]):w(e[s-1])||q(e[s-1])?a&&e.slice(s,t)!==(i?"&rsquo;":g)&&o!==(i?"&rsquo;":g)?c.push([s,t,i?"&rsquo;":g]):a||"'"===e.slice(s,t)||"'"===o||c.push([s,t,"'"]):e[s-1]&&!e[s-1].trim()?a&&e.slice(s,t)!==(i?"&lsquo;":p)&&o!==(i?"&lsquo;":p)?c.push([s,t,i?"&lsquo;":p]):a||"'"===e.slice(s,t)||"'"===o||c.push([s,t,"'"]):e[t]&&!e[t].trim()&&(a&&e.slice(s,t)!==(i?"&rsquo;":g)&&o!==(i?"&rsquo;":g)?c.push([s,t,i?"&rsquo;":g]):a||"'"===e.slice(s,t)||"'"===o||c.push([s,t,"'"])):(['"',h,f,m].includes(o)||t===s+1&&['"',h,f,m].includes(e[s]))&&(e[s-1]&&q(e[s-1])&&e[t]&&"'"!==e[t]&&'"'!==e[t]&&e[t]!==g&&e[t]!==f&&e[t]!==p&&e[t]!==h?a&&e.slice(s,t)!==(i?"&Prime;":m)&&o!==(i?"&Prime;":m)?c.push([s,t,i?"&Prime;":m]):a||'"'===e.slice(s,t)||'"'===o||c.push([s,t,'"']):e[s-1]&&e[t]&&d.includes(e[s-1])?e[t].trim()?39===e[t].charCodeAt(0)&&e[t+1]&&!e[t+1].trim()&&(a&&e.slice(s,t+1)!==(i?"&rdquo;&rsquo;":"".concat(f).concat(g))&&o!==(i?"&rdquo;&rsquo;":"".concat(f).concat(g))?(c.push([s,t+1,i?"&rdquo;&rsquo;":"".concat(f).concat(g)]),"function"==typeof l&&l(1)):a||"\"'"===e.slice(s,t+1)||"\"'"===o||(c.push([s,t+1,"\"'"]),"function"==typeof l&&l(1))):a&&e.slice(s,t)!==(i?"&rdquo;":f)&&o!==(i?"&rdquo;":f)?c.push([s,t,i?"&rdquo;":f]):a||'"'===e.slice(s,t)||'"'===o||c.push([s,t,'"']):0===s&&e[t]&&e.slice(t).trim()?a&&e.slice(s,t)!==(i?"&ldquo;":h)&&o!==(i?"&ldquo;":h)?c.push([s,t,i?"&ldquo;":h]):a||'"'===e.slice(s,t)||'"'===o||c.push([s,t,'"']):!e[t]&&e.slice(0,s).trim()?a&&e.slice(s,t)!==(i?"&rdquo;":f)&&o!==(i?"&rdquo;":f)?c.push([s,t,i?"&rdquo;":f]):a||'"'===e.slice(s,t)||'"'===o||c.push([s,t,'"']):e[t]&&(w(e[t])||q(e[t]))?a&&e.slice(s,t)!==(i?"&ldquo;":h)&&o!==(i?"&ldquo;":h)?c.push([s,t,i?"&ldquo;":h]):a||'"'===e.slice(s,t)||'"'===o||c.push([s,t,'"']):e[s-1]&&(w(e[s-1])||q(e[s-1]))?a&&e.slice(s,t)!==(i?"&rdquo;":f)&&o!==(i?"&rdquo;":f)?c.push([s,t,i?"&rdquo;":f]):a||'"'===e.slice(s,t)||'"'===o||c.push([s,t,'"']):e[s-1]&&!e[s-1].trim()?a&&e.slice(s,t)!==(i?"&ldquo;":h)&&o!==(i?"&ldquo;":h)?c.push([s,t,i?"&ldquo;":h]):a||'"'===e.slice(s,t)||'"'===o||c.push([s,t,'"']):e[t]&&!e[t].trim()&&(a&&e.slice(s,t)!==(i?"&rdquo;":f)&&o!==(i?"&rdquo;":f)?c.push([s,t,i?"&rdquo;":f]):a||'"'===e.slice(s,t)||'"'===o||c.push([s,t,'"']))),c}e.convertAll=function(e,r){for(var s=[],t=Object.assign({convertApostrophes:!0,convertEntities:!1},r),o=function(r,o){t.from=r,t.offsetBy=function(e){r+=e};var n=i(e,t);Array.isArray(n)&&n.length&&(s=s.concat(n)),u=r},u=0,a=e.length;u<a;u++)o(u);return{result:n(e,s),ranges:s}},e.convertOne=i,Object.defineProperty(e,"__esModule",{value:!0})}));
