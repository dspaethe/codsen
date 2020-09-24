/**
 * str-indexes-of-plus
 * Like indexOf but returns array and counts per-grapheme
 * Version: 2.10.9
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/str-indexes-of-plus/
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.strIndexesOfPlus = factory());
}(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function existy(x) {
    return x != null;
  }

  function isStr(something) {
    return typeof something === "string";
  }

  function strIndexesOfPlus(str, searchValue, fromIndex) {
    if (arguments.length === 0) {
      throw new Error("str-indexes-of-plus/strIndexesOfPlus(): inputs missing!");
    }

    if (!isStr(str)) {
      throw new TypeError("str-indexes-of-plus/strIndexesOfPlus(): first input argument must be a string! Currently it's: ".concat(_typeof(str)));
    }

    if (!isStr(searchValue)) {
      throw new TypeError("str-indexes-of-plus/strIndexesOfPlus(): second input argument must be a string! Currently it's: ".concat(_typeof(searchValue)));
    }

    if (arguments.length >= 3 && !Number.isInteger(fromIndex) && !(isStr(fromIndex) && /^\d*$/.test(fromIndex))) {
      throw new TypeError("str-indexes-of-plus/strIndexesOfPlus(): third input argument must be a natural number! Currently it's: ".concat(fromIndex));
    }

    if (/^\d*$/.test(fromIndex)) {
      // eslint-disable-next-line no-param-reassign
      fromIndex = Number(fromIndex);
    }

    var strArr = Array.from(str);
    var searchValueArr = Array.from(searchValue);

    if (strArr.length === 0 || searchValueArr.length === 0 || existy(fromIndex) && fromIndex >= strArr.length) {
      return [];
    }

    if (!existy(fromIndex)) {
      // eslint-disable-next-line no-param-reassign
      fromIndex = 0;
    }

    var res = [];
    var matchMode = false;
    var potentialFinding;

    for (var i = fromIndex, len = strArr.length; i < len; i++) {
      if (matchMode) {
        if (strArr[i] === searchValueArr[i - potentialFinding]) {
          if (i - potentialFinding + 1 === searchValueArr.length) {
            res.push(potentialFinding);
          }
        } else {
          potentialFinding = null;
          matchMode = false;
        }
      }

      if (!matchMode) {
        if (strArr[i] === searchValueArr[0]) {
          if (searchValueArr.length === 1) {
            res.push(i);
          } else {
            matchMode = true;
            potentialFinding = i;
          }
        }
      }
    }

    return res;
  }

  return strIndexesOfPlus;

})));
