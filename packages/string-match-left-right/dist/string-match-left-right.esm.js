/**
 * string-match-left-right
 * Do substrings match what's on the left or right of a given index?
 * Version: 3.11.19
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-match-left-right
 */

import arrayiffy from 'arrayiffy-if-string';

function isObj(something) {
  return (
    something && typeof something === "object" && !Array.isArray(something)
  );
}
function isStr(something) {
  return typeof something === "string";
}
function march(str, fromIndexInclusive, strToMatch, opts, special, getNextIdx) {
  const strToMatchVal =
    typeof strToMatch === "function" ? strToMatch() : strToMatch;
  if (fromIndexInclusive < 0 && special && strToMatchVal === "EOL") {
    return strToMatchVal;
  }
  if (fromIndexInclusive >= str.length && !special) {
    return false;
  }
  let charsToCheckCount = special ? 1 : strToMatch.length;
  let i = fromIndexInclusive;
  while (str[i]) {
    const nextIdx = getNextIdx(i);
    if (opts.trimBeforeMatching && str[i].trim() === "") {
      if (!str[nextIdx] && special && strToMatch === "EOL") {
        return true;
      }
      i = getNextIdx(i);
      continue;
    }
    if (
      (!opts.i && opts.trimCharsBeforeMatching.includes(str[i])) ||
      (opts.i &&
        opts.trimCharsBeforeMatching
          .map(val => val.toLowerCase())
          .includes(str[i].toLowerCase()))
    ) {
      if (special && strToMatch === "EOL" && !str[nextIdx]) {
        return true;
      }
      i = getNextIdx(i);
      continue;
    }
    const charToCompareAgainst =
      nextIdx > i
        ? strToMatch[strToMatch.length - charsToCheckCount]
        : strToMatch[charsToCheckCount - 1];
    if (
      (!opts.i && str[i] === charToCompareAgainst) ||
      (opts.i && str[i].toLowerCase() === charToCompareAgainst.toLowerCase())
    ) {
      charsToCheckCount -= 1;
      if (charsToCheckCount < 1) {
        return i;
      }
    } else {
      if (opts.maxMismatches) {
        opts.maxMismatches = opts.maxMismatches - 1;
      } else {
        return false;
      }
    }
    i = getNextIdx(i);
  }
  if (charsToCheckCount > 0) {
    if (special && strToMatchVal === "EOL") {
      return true;
    }
    return false;
  }
}
function main(mode, str, position, originalWhatToMatch, originalOpts) {
  const defaults = {
    i: false,
    trimBeforeMatching: false,
    trimCharsBeforeMatching: [],
    maxMismatches: 0,
    firstMustMatch: true,
    lastMustMatch: true
  };
  if (
    isObj(originalOpts) &&
    Object.prototype.hasOwnProperty.call(originalOpts, "trimBeforeMatching") &&
    typeof originalOpts.trimBeforeMatching !== "boolean"
  ) {
    throw new Error(
      `string-match-left-right/${mode}(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!${
        Array.isArray(originalOpts.trimBeforeMatching)
          ? ` Did you mean to use opts.trimCharsBeforeMatching?`
          : ""
      }`
    );
  }
  const opts = Object.assign({}, defaults, originalOpts);
  opts.trimCharsBeforeMatching = arrayiffy(opts.trimCharsBeforeMatching);
  opts.trimCharsBeforeMatching = opts.trimCharsBeforeMatching.map(el =>
    isStr(el) ? el : String(el)
  );
  if (!isStr(str)) {
    return false;
  } else if (str.length === 0) {
    return false;
  }
  if (!Number.isInteger(position) || position < 0) {
    throw new Error(
      `string-match-left-right/${mode}(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ${typeof position}, equal to:\n${JSON.stringify(
        position,
        null,
        4
      )}`
    );
  }
  let whatToMatch;
  let special;
  if (isStr(originalWhatToMatch)) {
    whatToMatch = [originalWhatToMatch];
  } else if (Array.isArray(originalWhatToMatch)) {
    whatToMatch = originalWhatToMatch;
  } else if (!originalWhatToMatch) {
    whatToMatch = originalWhatToMatch;
  } else if (typeof originalWhatToMatch === "function") {
    whatToMatch = [];
    whatToMatch.push(originalWhatToMatch);
  } else {
    throw new Error(
      `string-match-left-right/${mode}(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ${typeof originalWhatToMatch}, equal to:\n${JSON.stringify(
        originalWhatToMatch,
        null,
        4
      )}`
    );
  }
  if (originalOpts && !isObj(originalOpts)) {
    throw new Error(
      `string-match-left-right/${mode}(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type "${typeof originalOpts}", and equal to:\n${JSON.stringify(
        originalOpts,
        null,
        4
      )}`
    );
  }
  let culpritsIndex;
  let culpritsVal;
  if (
    opts.trimCharsBeforeMatching.some((el, i) => {
      if (el.length > 1) {
        culpritsIndex = i;
        culpritsVal = el;
        return true;
      }
      return false;
    })
  ) {
    throw new Error(
      `string-match-left-right/${mode}(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ${culpritsIndex} is longer than 1 character, ${culpritsVal.length} (equals to ${culpritsVal}). Please split it into separate characters and put into array as separate elements.`
    );
  }
  if (
    !whatToMatch ||
    !Array.isArray(whatToMatch) ||
    (Array.isArray(whatToMatch) && !whatToMatch.length) ||
    (Array.isArray(whatToMatch) &&
      whatToMatch.length === 1 &&
      isStr(whatToMatch[0]) &&
      whatToMatch[0].trim().length === 0)
  ) {
    if (typeof opts.cb === "function") {
      let firstCharOutsideIndex;
      let startingPosition = position;
      if (mode === "matchLeftIncl" || mode === "matchRight") {
        startingPosition += 1;
      }
      if (mode.startsWith("matchLeft")) {
        for (let y = startingPosition; y--; ) {
          const currentChar = str[y];
          if (
            (!opts.trimBeforeMatching ||
              (opts.trimBeforeMatching &&
                currentChar !== undefined &&
                currentChar.trim().length)) &&
            (opts.trimCharsBeforeMatching.length === 0 ||
              (currentChar !== undefined &&
                !opts.trimCharsBeforeMatching.includes(currentChar)))
          ) {
            firstCharOutsideIndex = y;
            break;
          }
        }
      } else if (mode.startsWith("matchRight")) {
        for (let y = startingPosition; y < str.length; y++) {
          const currentChar = str[y];
          if (
            (!opts.trimBeforeMatching ||
              (opts.trimBeforeMatching && currentChar.trim().length)) &&
            (opts.trimCharsBeforeMatching.length === 0 ||
              !opts.trimCharsBeforeMatching.includes(currentChar))
          ) {
            firstCharOutsideIndex = y;
            break;
          }
        }
      }
      if (firstCharOutsideIndex === undefined) {
        return false;
      }
      const wholeCharacterOutside = str[firstCharOutsideIndex];
      const indexOfTheCharacterAfter = firstCharOutsideIndex + 1;
      let theRemainderOfTheString = "";
      if (indexOfTheCharacterAfter && indexOfTheCharacterAfter > 0) {
        theRemainderOfTheString = str.slice(0, indexOfTheCharacterAfter);
      }
      if (mode.startsWith("matchLeft")) {
        return opts.cb(
          wholeCharacterOutside,
          theRemainderOfTheString,
          firstCharOutsideIndex
        );
      }
      if (firstCharOutsideIndex && firstCharOutsideIndex > 0) {
        theRemainderOfTheString = str.slice(firstCharOutsideIndex);
      }
      return opts.cb(
        wholeCharacterOutside,
        theRemainderOfTheString,
        firstCharOutsideIndex
      );
    }
    let extraNote = "";
    if (!originalOpts) {
      extraNote =
        " More so, the whole options object, the fourth input argument, is missing!";
    }
    throw new Error(
      `string-match-left-right/${mode}(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!${extraNote}`
    );
  }
  if (mode.startsWith("matchLeft")) {
    for (let i = 0, len = whatToMatch.length; i < len; i++) {
      special = typeof whatToMatch[i] === "function";
      const whatToMatchVal = whatToMatch[i];
      let fullCharacterInFront;
      let indexOfTheCharacterInFront;
      let restOfStringInFront = "";
      let startingPosition = position;
      if (mode === "matchLeft") {
        startingPosition -= 1;
      }
      const found = march(
        str,
        startingPosition,
        whatToMatchVal,
        opts,
        special,
        i => i - 1
      );
      if (
        found &&
        special &&
        typeof whatToMatchVal === "function" &&
        whatToMatchVal() === "EOL"
      ) {
        return whatToMatchVal() &&
          (opts.cb
            ? opts.cb(
                fullCharacterInFront,
                restOfStringInFront,
                indexOfTheCharacterInFront
              )
            : true)
          ? whatToMatchVal()
          : false;
      }
      if (Number.isInteger(found) && found) {
        indexOfTheCharacterInFront = found - 1;
        fullCharacterInFront = str[indexOfTheCharacterInFront];
        restOfStringInFront = str.slice(0, found);
      }
      if (
        Number.isInteger(found) &&
        (opts.cb
          ? opts.cb(
              fullCharacterInFront,
              restOfStringInFront,
              indexOfTheCharacterInFront
            )
          : true)
      ) {
        return whatToMatchVal;
      }
    }
    return false;
  }
  for (let i = 0, len = whatToMatch.length; i < len; i++) {
    special = typeof whatToMatch[i] === "function";
    const whatToMatchVal = whatToMatch[i];
    const startingPosition = position + (mode === "matchRight" ? 1 : 0);
    const found = march(
      str,
      startingPosition,
      whatToMatchVal,
      opts,
      special,
      i => i + 1
    );
    if (
      found &&
      special &&
      typeof whatToMatchVal === "function" &&
      whatToMatchVal() === "EOL"
    ) {
      return whatToMatchVal() && (opts.cb ? opts.cb() : true)
        ? whatToMatchVal()
        : false;
    }
    let indexOfTheCharacterAfter;
    let characterAfter;
    if (Number.isInteger(found)) {
      indexOfTheCharacterAfter = found + 1;
    }
    if (str[indexOfTheCharacterAfter]) {
      characterAfter = str[indexOfTheCharacterAfter];
    }
    let theRemainderOfTheString = "";
    if (
      Number.isInteger(indexOfTheCharacterAfter) &&
      indexOfTheCharacterAfter >= 0
    ) {
      theRemainderOfTheString = str.slice(indexOfTheCharacterAfter);
    }
    if (
      found !== false &&
      (opts.cb
        ? opts.cb(
            characterAfter,
            theRemainderOfTheString,
            indexOfTheCharacterAfter
          )
        : true)
    ) {
      return whatToMatchVal;
    }
  }
  return false;
}
function matchLeftIncl(str, position, whatToMatch, opts) {
  return main("matchLeftIncl", str, position, whatToMatch, opts);
}
function matchLeft(str, position, whatToMatch, opts) {
  return main("matchLeft", str, position, whatToMatch, opts);
}
function matchRightIncl(str, position, whatToMatch, opts) {
  return main("matchRightIncl", str, position, whatToMatch, opts);
}
function matchRight(str, position, whatToMatch, opts) {
  return main("matchRight", str, position, whatToMatch, opts);
}

export { matchLeft, matchLeftIncl, matchRight, matchRightIncl };
