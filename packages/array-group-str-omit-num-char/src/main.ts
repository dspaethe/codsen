import uniq from "lodash.uniq";
import { rApply } from "ranges-apply";
import { Range } from "../../../scripts/common";
import { version as v } from "../package.json";
const version: string = v;

interface UnknownValueObj {
  [key: string]: any;
}

interface Opts {
  wildcard: string;
  dedupePlease: boolean;
}

const defaults: Opts = {
  wildcard: "*",
  dedupePlease: true,
};

function groupStr(
  originalArr: any[],
  originalOpts?: Partial<Opts>
): UnknownValueObj {
  if (!Array.isArray(originalArr)) {
    return originalArr;
  }
  if (!originalArr.length) {
    // quick ending
    return {};
  }

  const opts: Opts = { ...defaults, ...originalOpts };
  const arr = opts.dedupePlease ? uniq(originalArr) : Array.from(originalArr);

  // traverse the given array
  const compiledObj: UnknownValueObj = {};
  for (let i = 0, len = arr.length; i < len; i++) {
    console.log(
      `${`\u001b[${36}m${`-1--------------------`}\u001b[${39}m`}  ${`\u001b[${33}m${`arr[${i}]`}\u001b[${39}m`} = ${`\u001b[${35}m${
        arr[i]
      }\u001b[${39}m`}  ${`\u001b[${36}m${`--------------------`}\u001b[${39}m`}`
    );

    // compile an array of digit chunks, consisting of at least one digit
    // (will return null when there are no digits found):
    const digitChunks: string[] = arr[i].match(/\d+/gm);
    console.log(
      `043 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`digitChunks`}\u001b[${39}m`} = ${JSON.stringify(
        digitChunks,
        null,
        4
      )}`
    );

    if (!digitChunks) {
      // if there were no digits, there's nothing to group, so this string goes
      // straight to output. Just check for duplicates.
      compiledObj[arr[i]] = {
        count: 1,
      };
      // notice above doesn't have "elementsWhichWeCanReplaceWithWildcards" key
    } else {
      // so there were numbers in that string...

      // first, prepare the reference version of this string with chunks of digits
      // replaced with the wildcard
      const wildcarded = arr[i].replace(/\d+/gm, opts.wildcard);

      // the plan is, in order to extract the pattern, we'll use
      // elementsWhichWeCanReplaceWithWildcards where we'll keep record of the
      // previous element's value. Once the value is different, we set it to Bool
      // "false", marking it for replacement with wildcard.
      if (Object.prototype.hasOwnProperty.call(compiledObj, wildcarded)) {
        // so entry already exists for this wildcarded pattern.
        // Let's check each digit chunk where it's not already set to false (submitted
        // for replacement with wildcards), is it different from previous string's
        // chunk at that position (there can be multiple chunks of digits).

        console.log(`072 compiledObj has entry for "${wildcarded}"`);
        console.log(
          `074 \u001b[${36}m${`██ ██ ██ CHECK ALL CHUNKS ██ ██ ██`}\u001b[${39}m`
        );
        digitChunks.forEach((digitsChunkStr, i2) => {
          console.log(
            `078 \u001b[${36}m${`██ chunk i2 = ${i2}, val = ${digitsChunkStr}`}\u001b[${39}m`
          );
          if (
            compiledObj[wildcarded].elementsWhichWeCanReplaceWithWildcards[
              i2
            ] &&
            digitsChunkStr !==
              compiledObj[wildcarded].elementsWhichWeCanReplaceWithWildcards[i2]
          ) {
            console.log(
              `088 BEFORE compiledObj[wildcarded].elementsWhichWeCanReplaceWithWildcards = ${JSON.stringify(
                compiledObj[wildcarded].elementsWhichWeCanReplaceWithWildcards,
                null,
                0
              )}`
            );
            compiledObj[wildcarded].elementsWhichWeCanReplaceWithWildcards[
              i2
            ] = false;
            console.log(
              `098 AFTER compiledObj[wildcarded].elementsWhichWeCanReplaceWithWildcards = ${JSON.stringify(
                compiledObj[wildcarded].elementsWhichWeCanReplaceWithWildcards,
                null,
                0
              )}`
            );
          }
        });
        // finally, bump the count:
        compiledObj[wildcarded].count += 1;
        console.log(
          `109 BUMP compiledObj[wildcarded].count is now = ${compiledObj[wildcarded].count}`
        );
      } else {
        compiledObj[wildcarded] = {
          count: 1,
          elementsWhichWeCanReplaceWithWildcards: Array.from(digitChunks),
        };
        console.log(
          `117 creating entry for "${wildcarded}"; compiledObj[wildcarded] = ${JSON.stringify(
            compiledObj[wildcarded],
            null,
            4
          )}`
        );
      }
    }
  }

  console.log(
    `128 FINAL ${`\u001b[${33}m${`compiledObj`}\u001b[${39}m`} = ${JSON.stringify(
      compiledObj,
      null,
      4
    )}\n`
  );

  const resObj: UnknownValueObj = {};
  Object.keys(compiledObj).forEach((key) => {
    console.log(
      `\u001b[${36}m${`------------------------------------------`}\u001b[${39}m`
    );
    console.log(
      `141 PROCESSING compiledObj key: ${JSON.stringify(key, null, 4)}`
    );
    // here were restore the values which were replaced with wildcards where
    // those values were identical across the whole set. That's the whole point
    // of this library.
    //
    // For example, you had three CSS class names:
    // [
    //    width425-margin1px,
    //    width425-margin2px
    //    width425-margin3px
    // ]
    //
    // We want them grouped into width425-margin*px, not width*-margin*px, because
    // 425 is constant.
    //
    let newKey = key;
    // if not all digit chunks are to be replaced, that is, compiledObj[key].elementsWhichWeCanReplaceWithWildcards
    // contains some constant values we harvested from the set:
    if (
      Array.isArray(compiledObj[key].elementsWhichWeCanReplaceWithWildcards) &&
      compiledObj[key].elementsWhichWeCanReplaceWithWildcards.some(
        (val: any) => val !== false
      )
    ) {
      console.log(`166 ██ PREP ${key}`);

      // we'll compile ranges array and replace all wildcards in one go using https://www.npmjs.com/package/ranges-apply
      const rangesArr = [];

      let nThIndex = 0;

      console.log(`\u001b[${32}m${`==== while starts ====`}\u001b[${39}m`);
      for (
        let z = 0;
        z < compiledObj[key].elementsWhichWeCanReplaceWithWildcards.length;
        z++
      ) {
        console.log(z === 0 ? "" : "\n-------------\n");
        console.log(`180 ${`\u001b[${33}m${`z`}\u001b[${39}m`} = ${z}`);
        nThIndex = newKey.indexOf(
          `${opts.wildcard || ""}`,
          nThIndex + (opts.wildcard || "").length
        );
        console.log(
          `${`\u001b[${33}m${`nThIndex`}\u001b[${39}m`} = ${JSON.stringify(
            nThIndex,
            null,
            4
          )}`
        );
        if (
          compiledObj[key].elementsWhichWeCanReplaceWithWildcards[z] !== false
        ) {
          rangesArr.push([
            nThIndex,
            nThIndex + (opts.wildcard || "").length,
            compiledObj[key].elementsWhichWeCanReplaceWithWildcards[z],
          ]);
        }
      }
      newKey = rApply(newKey, rangesArr as Range[]);
      console.log(`\u001b[${32}m${`\n==== while ends ====`}\u001b[${39}m`);
    }
    resObj[newKey] = compiledObj[key].count;
  });
  console.log(
    `\u001b[${36}m${`------------------------------------------`}\u001b[${39}m`
  );
  return resObj;
}

export { groupStr, version };
