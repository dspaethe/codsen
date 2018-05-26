// ===================================
// R E Q U I R E' S

import clone from "lodash.clonedeep";
import typ from "type-detect";

// ===================================
// F U N C T I O N S

function isObj(something) {
  return typ(something) === "Object";
}
function isArr(something) {
  return Array.isArray(something);
}

/**
 * setAllValuesTo - sets all keys of all plain objects (no matter how deep-nested) to
 * a certain value
 *
 * @param  {Whatever} obj incoming object, array or whatever
 * @return {Object}       returned object
 */
function setAllValuesTo(inputOriginal, valueOriginal) {
  let value;

  if (arguments.length === 0) {
    throw new Error(
      "object-set-all-values-to: [THROW_ID_01] All the inputs are missing!"
    );
  }
  const input = clone(inputOriginal);

  if (arguments.length < 2) {
    value = false;
  } else if (isObj(valueOriginal) || isArr(valueOriginal)) {
    value = clone(valueOriginal);
  } else {
    value = valueOriginal;
  }

  if (isArr(input)) {
    input.forEach((el, i) => {
      if (isObj(input[i]) || isArr(input[i])) {
        input[i] = setAllValuesTo(input[i], value);
      }
    });
  } else if (isObj(input)) {
    Object.keys(input).forEach(key => {
      if (isArr(input[key]) || isObj(input[key])) {
        input[key] = setAllValuesTo(input[key], value);
      } else {
        input[key] = value;
      }
    });
  }
  return input;
}

export default setAllValuesTo;
