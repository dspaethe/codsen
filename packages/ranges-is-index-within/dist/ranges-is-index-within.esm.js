/**
 * ranges-is-index-within
 * Checks if index is within any of the given string index ranges
 * Version: 1.16.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ranges-is-index-within/
 */

var version = "1.16.0";

const version$1 = version;
const defaults = {
  inclusiveRangeEnds: false,
  returnMatchedRangeInsteadOfTrue: false
};

function isIndexWithin(originalIndex, rangesArr, originalOpts) {
  const opts = { ...defaults,
    ...originalOpts
  }; // insurance

  if (!Number.isInteger(originalIndex)) {
    throw new Error(`ranges-is-index-within: [THROW_ID_01] the first input argument should be string index, a natural number (or zero). It was given as ${originalIndex} (type ${typeof originalIndex})`);
  }

  if (!Array.isArray(rangesArr)) {
    return false;
  }

  if (opts.returnMatchedRangeInsteadOfTrue) {
    return rangesArr.find(arr => opts.inclusiveRangeEnds ? originalIndex >= arr[0] && originalIndex <= arr[1] : originalIndex > arr[0] && originalIndex < arr[1]) || false;
  }

  return rangesArr.some(arr => opts.inclusiveRangeEnds ? originalIndex >= arr[0] && originalIndex <= arr[1] : originalIndex > arr[0] && originalIndex < arr[1]);
}

export { defaults, isIndexWithin, version$1 as version };
