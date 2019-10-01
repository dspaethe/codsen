import obc from "object-boolean-combinations";
import clone from "lodash.clonedeep";
import { defaultOpts } from "../dist/util.esm";
import { det as det1, opts as exportedOptsObj } from "../dist/detergent.esm";
import isCI from "is-ci";
import objectPath from "object-path";

function mixer(ref) {
  // for quick testing, you can short-wire to test only one set of options, instead
  // of 512, 2024, or whatever count mixer produced.
  const quickie = true;

  if (!isCI && quickie) {
    if (ref) {
      return [ref];
    }
    return [defaultOpts];
  }

  // clone and delete defaultOptsWithoutStripHtmlButIgnoreTags
  // key from the defaults obj
  const preppedDefaults = clone(defaultOpts);
  delete preppedDefaults.stripHtmlButIgnoreTags;

  const res = obc(preppedDefaults, ref);
  if (
    ref &&
    ref.stripHtmlButIgnoreTags &&
    Array.isArray(ref.stripHtmlButIgnoreTags) &&
    ref.stripHtmlButIgnoreTags.length
  ) {
    res.forEach(obj => {
      obj.stripHtmlButIgnoreTags = clone(ref.stripHtmlButIgnoreTags);
    });
  } else {
    res.forEach(obj => {
      obj.stripHtmlButIgnoreTags = clone(defaultOpts.stripHtmlButIgnoreTags);
    });
  }
  return res;
}

function det(t, src, opts = {}) {
  const resolvedOpts = Object.assign({}, exportedOptsObj, opts);
  const tempObj = {};
  Object.keys(resolvedOpts).forEach(key => {
    if (!["stripHtmlButIgnoreTags", "stripHtmlAddNewLine"].includes(key)) {
      tempObj[key] = !!resolvedOpts[key];
    }
  });
  Object.keys(tempObj).forEach(key => {
    // If toggling any of the options makes a difference,
    // that option must be reported as "applicable". And on the opposite.

    // incoming object might be with digits instead of boolean values,
    // so we convert whatever value is to a boolean
    const obj1 = clone(tempObj);
    objectPath.set(obj1, key, true);

    const obj2 = clone(tempObj);
    objectPath.set(obj2, key, false);

    if (det1(src, obj1).res !== det1(src, obj2).res) {
      t.truthy(
        det1(src, resolvedOpts).applicableOpts[key],
        `${`\u001b[${35}m${`applicableOpts.${key}`}\u001b[${39}m`} is reported wrongly: detergent yields different results on different opts.${key}:
"${`\u001b[${33}m${
          det1(src, obj1).res
        }\u001b[${39}m`}" (opts.${key}=true) and "${`\u001b[${33}m${
          det1(src, obj2).res
        }\u001b[${39}m`}" (opts.${key}=false).`
      );
    } else if (key !== "stripHtml") {
      t.falsy(
        det1(src, resolvedOpts).applicableOpts[key],
        `${`\u001b[${35}m${`applicableOpts.${key}`}\u001b[${39}m`} is reported wrongly: detergent yields same results on different opts.${key}:
"${`\u001b[${33}m${det1(src, obj1).res}\u001b[${39}m`}".`
      );
    }
  });
  return det1(src, opts);
}

const allCombinations = clone(mixer());

export { det, mixer, allCombinations };
