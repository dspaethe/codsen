!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.astIsEmpty=e()}(this,function(){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var e,n,t=Function.prototype,r=Object.prototype,f=t.toString,u=r.hasOwnProperty,i=f.call(Object),c=r.toString,l=(e=Object.getPrototypeOf,n=Object,function(t){return e(n(t))});var y=function(t){if(!(e=t)||"object"!=(void 0===e?"undefined":o(e))||"[object Object]"!=c.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e,n=l(t);if(null===n)return!0;var r=u.call(n,"constructor")&&n.constructor;return"function"==typeof r&&r instanceof r&&f.call(r)==i};return function t(e){var n=void 0,r=void 0,o=!0;if(Array.isArray(e)){if(0===e.length)return!0;for(n=0,r=e.length;n<r;n++){if(null===(o=t(e[n])))return null;if(!o)return!1}}else if(y(e)){if(0===Object.keys(e).length)return!0;for(n=0,r=Object.keys(e).length;n<r;n++){if(null===(o=t(e[Object.keys(e)[n]])))return null;if(!o)return!1}}else{if("string"!=typeof e)return null;if(0!==e.length)return!1}return o}});
