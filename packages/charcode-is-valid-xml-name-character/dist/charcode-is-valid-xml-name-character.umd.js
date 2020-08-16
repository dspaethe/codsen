/**
 * charcode-is-valid-xml-name-character
 * Does a given character belong to XML spec's "Production 4 OR 4a" type (is acceptable for XML element's name)
 * Version: 1.10.60
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/charcode-is-valid-xml-name-character
 */

!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).charcodeIsValidXmlNameCharacter={})}(this,(function(e){"use strict";function n(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function t(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function r(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?t(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}var o=Array.isArray;function i(e,n,t){var i=r(r({},{inclusiveRangeEnds:!1,returnMatchedRangeInsteadOfTrue:!1}),t);return!!o(n)&&(i.returnMatchedRangeInsteadOfTrue?n.find((function(n){return i.inclusiveRangeEnds?e>=n[0]&&e<=n[1]:e>n[0]&&e<n[1]}))||!1:n.some((function(n){return i.inclusiveRangeEnds?e>=n[0]&&e<=n[1]:e>n[0]&&e<n[1]})))}var c=[[58,58],[65,90],[95,95],[192,214],[216,246],[248,767],[880,893],[895,8191],[8204,8205],[8304,8591],[11264,12271],[12289,55295],[63744,64975],[65008,65533],[65536,983039]],u=[[45,45],[46,46],[48,57],[58,58],[65,90],[95,95],[183,183],[192,214],[216,246],[248,767],[768,879],[880,893],[895,8191],[8204,8205],[8255,8256],[8304,8591],[11264,12271],[12289,55295],[63744,64975],[65008,65533],[65536,983039]],a=[[97,122]],s={inclusiveRangeEnds:!0,skipIncomingRangeSorting:!0};function f(e){return i(e.codePointAt(0),a,s)||i(e.codePointAt(0),c,s)}function d(e){return i(e.codePointAt(0),a,s)||i(e.codePointAt(0),u,s)}e.isProduction4=f,e.isProduction4a=d,e.validFirstChar=f,e.validSecondCharOnwards=d,Object.defineProperty(e,"__esModule",{value:!0})}));
