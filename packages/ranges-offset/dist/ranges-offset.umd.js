/**
 * ranges-offset
 * Increment or decrement each index in every range
 * Version: 2.0.10
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ranges-offset/
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).rangesOffset={})}(this,(function(e){"use strict";e.rOffset=function(e,t=0){return Array.isArray(e)&&e.length?e.map((([...e])=>("number"==typeof e[0]&&(e[0]+=t),"number"==typeof e[1]&&(e[1]+=t),[...e]))):e},e.version="2.0.10",Object.defineProperty(e,"__esModule",{value:!0})}));
