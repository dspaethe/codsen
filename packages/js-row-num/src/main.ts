import { Ranges as RangesClass } from "ranges-push";
import { rApply } from "ranges-apply";
import { hasOwnProp } from "codsen-utils";
import { Ranges } from "../../../ops/typedefs/common";
import { version as v } from "../package.json";

declare let DEV: boolean;
export const version: string = v;
export { Ranges };

export interface Opts {
  padStart: number;
  overrideRowNum: null | number;
  triggerKeywords: string[];
  extractedLogContentsWereGiven: boolean;
}

export const defaults: Opts = {
  padStart: 3,
  overrideRowNum: null,
  triggerKeywords: [`console.log`],
  extractedLogContentsWereGiven: false,
};

export interface Res {
  log: {
    timeTakenInMilliseconds: number;
  };
  result: string;
  ranges: Ranges;
}

export function fixRowNums(str: string, opts?: Partial<Opts>): Res {
  let start = Date.now();

  let BACKSLASH = `\u005C`;

  DEV &&
    console.log(
      `040 ${`\u001b[${33}m${`opts`}\u001b[${39}m`} = ${JSON.stringify(
        opts,
        null,
        4
      )}`
    );
  if (typeof str !== "string") {
    throw new TypeError(
      `js-row-num: [THROW_ID_01] Input must be string! Currently it's: ${(typeof str).toLowerCase()}, equal to:\n${JSON.stringify(
        str,
        null,
        4
      )}`
    );
  }
  if (!str.trim()) {
    return {
      log: {
        timeTakenInMilliseconds: Date.now() - start,
      },
      result: str,
      ranges: null,
    };
  }
  function isDigit(something: string): boolean {
    return /[0-9]/.test(something);
  }
  function isAZ(something: string): boolean {
    return /[A-Za-z]/.test(something);
  }
  function isObj(something: unknown): boolean {
    return (
      !!something && typeof something === "object" && !Array.isArray(something)
    );
  }

  let resolvedOpts: Opts = { ...defaults, ...opts };

  if (hasOwnProp(resolvedOpts, "returnRangesOnly")) {
    throw new TypeError(
      `js-row-num: [THROW_ID_02] The Optional Options Object's key "returnRangesOnly" has been removed from the API since v.6 release.`
    );
  }

  if (
    !resolvedOpts.padStart ||
    typeof resolvedOpts.padStart !== "number" ||
    (typeof resolvedOpts.padStart === "number" && resolvedOpts.padStart < 0)
  ) {
    resolvedOpts.padStart = 0;
  }

  let finalIndexesToDelete = new RangesClass();

  let i;
  let len = str.length;
  let quotes: { start: number; type: string } | null = null;
  let consoleStartsAt = null;
  let bracketOpensAt = null;
  let currentRow = 1;
  let wasLetterDetected: undefined | boolean = false;
  let digitStartsAt = null;

  if (resolvedOpts.padStart && len > 45000) {
    resolvedOpts.padStart = 4;
  }

  DEV &&
    console.log(
      `109 ${`\u001b[${33}m${`str`}\u001b[${39}m`}:\n${JSON.stringify(
        str,
        null,
        0
      )}\n${`\u001b[${35}m${`FINAL`}\u001b[${39}m`} resolvedOpts: ${JSON.stringify(
        resolvedOpts,
        null,
        4
      )}`
    );

  for (i = 0; i < len; i++) {
    DEV &&
      console.log(
        `\u001b[${36}m${`--------------------------------`}\u001b[${39}m ${`\u001b[${33}m${`str[${i}]`}\u001b[${39}m`} = ${
          str[i].trim() ? str[i] : JSON.stringify(str[i], null, 0)
        }`
      );

    // count lines:
    if (
      resolvedOpts.overrideRowNum === null &&
      (str[i] === "\n" || (str[i] === "\r" && str[i + 1] !== "\n"))
    ) {
      currentRow += 1;
      DEV &&
        console.log(
          `136 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} currentRow = ${currentRow}`
        );
    }

    // catch closing quotes DEV && console.log( ' -----> ' <------)
    if (
      !resolvedOpts.extractedLogContentsWereGiven &&
      quotes !== null &&
      quotes.start < i &&
      quotes.type === str[i]
    ) {
      DEV &&
        console.log(
          `149 \u001b[${31}m${`CLOSING QUOTE DETECTED - WIPE`}\u001b[${39}m`
        );
      quotes = null;
      consoleStartsAt = null;
      bracketOpensAt = null;
      digitStartsAt = null;
      wasLetterDetected = false;
    }

    // catch opening quotes DEV && console.log( -----> ' <------ ')
    if (
      quotes === null &&
      (resolvedOpts.extractedLogContentsWereGiven ||
        (consoleStartsAt &&
          consoleStartsAt < i &&
          bracketOpensAt &&
          bracketOpensAt < i)) &&
      str[i].trim()
    ) {
      DEV && console.log("168 within opening quotes trap clauses");

      if (str[i] === '"' || str[i] === "'" || str[i] === "`") {
        DEV && console.log(`171 clause #1 - quotes`);
        quotes = {
          start: i,
          type: str[i],
        };
        wasLetterDetected = false;
        DEV &&
          console.log(
            `179 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`wasLetterDetected`}\u001b[${39}m`} = ${JSON.stringify(
              wasLetterDetected,
              null,
              4
            )}`
          );
        DEV &&
          console.log(
            `187 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`quotes`}\u001b[${39}m`} = ${JSON.stringify(
              quotes,
              null,
              4
            )}`
          );
      } else if (
        resolvedOpts.extractedLogContentsWereGiven &&
        digitStartsAt === null
      ) {
        if (isDigit(str[i])) {
          DEV && console.log(`198 clause #2`);
          digitStartsAt = i;
          DEV &&
            console.log(
              `202 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`digitStartsAt`}\u001b[${39}m`} = ${digitStartsAt}`
            );
        } else {
          DEV && console.log(`205 ${`\u001b[${31}m${`BREAK`}\u001b[${39}m`}`);
          break;
        }
      } else if (
        str[i].trim() &&
        str[i] !== "/" &&
        !resolvedOpts.extractedLogContentsWereGiven
      ) {
        DEV && console.log(`213 clause #3`);
        // wipe
        DEV &&
          console.log(
            `217 \u001b[${31}m${`A QUOTE EXPECTED HERE SO WIPE`}\u001b[${39}m`
          );
        consoleStartsAt = null;
        bracketOpensAt = null;
        digitStartsAt = null;
      }
    }

    // catch the first digit within DEV && console.log:
    if (
      quotes &&
      Number.isInteger(quotes.start) &&
      quotes.start < i &&
      !wasLetterDetected &&
      digitStartsAt === null &&
      isDigit(str[i])
    ) {
      digitStartsAt = i;
      DEV &&
        console.log(
          `237 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`digitStartsAt`}\u001b[${39}m`} = ${digitStartsAt}`
        );
    }

    // catch the ending of the digits within DEV && console.log:
    if (
      Number.isInteger(digitStartsAt) &&
      (!isDigit(str[i]) || !str[i + 1]) &&
      (i > (digitStartsAt as number) || !str[i + 1])
    ) {
      // replace the digits:
      DEV &&
        console.log(
          `250 ${`\u001b[${32}m${`THING ABOUT TO BE PUSHED:`}\u001b[${39}m`}`
        );
      DEV &&
        console.log(
          `254 ${`\u001b[${33}m${`resolvedOpts.padStart`}\u001b[${39}m`} = ${JSON.stringify(
            resolvedOpts.padStart,
            null,
            4
          )}`
        );
      DEV &&
        console.log(
          `262 ${`\u001b[${33}m${`padStart(${currentRow} (${typeof currentRow}), ${
            resolvedOpts.padStart
          } (${typeof resolvedOpts.padStart}), "0")`}\u001b[${39}m`} = ${JSON.stringify(
            String(currentRow).padStart(resolvedOpts.padStart, "0"),
            null,
            4
          )}`
        );
      DEV &&
        console.log(
          `272 ${`\u001b[${33}m${`currentRow`}\u001b[${39}m`} = ${JSON.stringify(
            currentRow,
            null,
            4
          )}`
        );
      DEV &&
        console.log(
          `280 ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} ${JSON.stringify(
            [
              digitStartsAt,
              !isDigit(str[i]) ? i : i + 1,
              resolvedOpts.padStart
                ? String(
                    resolvedOpts.overrideRowNum !== null
                      ? resolvedOpts.overrideRowNum
                      : currentRow
                  ).padStart(resolvedOpts.padStart, "0")
                : `${
                    resolvedOpts.overrideRowNum !== null
                      ? resolvedOpts.overrideRowNum
                      : currentRow
                  }`,
            ],
            null,
            0
          )}`
        );
      DEV &&
        console.log(
          `302 ${`\u001b[${35}m${`███████████████████████████████████████`}\u001b[${39}m`}`
        );
      if (!resolvedOpts.padStart) {
        DEV && console.log(`305 `);
        if (resolvedOpts.overrideRowNum != null) {
          DEV && console.log(`307 ██ case 1`);
        } else {
          DEV && console.log(`309 ██ case 2`);
        }
      }

      // PS. finalIndexesToDelete is a RangesClass class so we can push
      // two/three arguments and it will understand it's (range) array...
      finalIndexesToDelete.push(
        digitStartsAt as number,
        !isDigit(str[i]) ? i : i + 1,
        resolvedOpts.padStart
          ? String(
              resolvedOpts.overrideRowNum != null
                ? resolvedOpts.overrideRowNum
                : currentRow
            ).padStart(resolvedOpts.padStart, "0")
          : `${
              resolvedOpts.overrideRowNum != null
                ? resolvedOpts.overrideRowNum
                : currentRow
            }`
      );
      DEV &&
        console.log(
          `332 NOW ${`\u001b[${33}m${`finalIndexesToDelete`}\u001b[${39}m`} = ${JSON.stringify(
            finalIndexesToDelete.current(),
            null,
            4
          )}`
        );
      // then, reset:
      digitStartsAt = null;
      DEV &&
        console.log(
          `342 ${`\u001b[${33}m${`digitStartsAt`}\u001b[${39}m`} = null`
        );
      // set wasLetterDetected as a decoy to prevent further digit lumps from being edited:
      wasLetterDetected = true;
      DEV &&
        console.log(
          `348 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`wasLetterDetected`}\u001b[${39}m`} = true`
        );
    }

    // catch first letter within DEV && console.log:
    if (
      quotes &&
      Number.isInteger(quotes.start) &&
      quotes.start < i &&
      !wasLetterDetected &&
      isAZ(str[i]) &&
      !(str[i] === "n" && str[i - 1] === BACKSLASH)
    ) {
      // Skip one of more of either patterns:
      // \u001b[${33}m
      // ${`
      // `\u001b[33m       \u001b[39m`

      // \u001B[4m        \u001B[0m

      // \u001B[4m   \u001B[0m

      // check for pattern \u001B[ + optional ${ + any amount of digits + optional } + m

      if (
        /* c8 ignore next */
        str[i - 1] === BACKSLASH &&
        str[i] === "u" &&
        str[i + 1] === "0" &&
        str[i + 2] === "0" &&
        str[i + 3] === "1" &&
        (str[i + 4] === "b" || str[i + 5] === "B") &&
        str[i + 5] === "["
      ) {
        DEV && console.log(`382 \u001b[${35}m${`MATCHED`}\u001b[${39}m`);
        // at this moment, we have stuck here:
        //
        // DEV && console.log(`\u001b[${33}m${`291 zzz`}\u001b[${39}m`)
        //                    ^
        //           here, at this bracket

        // now, the ANSI colour digit code might be wrapped with ${} and also,
        // it can be of an indeterminate width: normally there is either one or
        // two digits.

        // We need to find where digits start.

        // There are two possibilities: either here, or after string literal ${}
        // wrapper:

        // base assumption, we're here:
        // DEV && console.log(`\u001b[33m 123 zzz \u001b[${39}m`)
        //                     ^
        //                   here

        let startMarchingForwFrom;
        if (isDigit(str[i + 6])) {
          startMarchingForwFrom = i + 6;
          DEV &&
            console.log(
              `408 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`startMarchingForwFrom`}\u001b[${39}m`} = ${startMarchingForwFrom}`
            );
        } else if (
          str[i + 6] === "$" &&
          str[i + 7] === "{" &&
          isDigit(str[i + 8])
        ) {
          startMarchingForwFrom = i + 8;
          DEV &&
            console.log(
              `418 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`startMarchingForwFrom`}\u001b[${39}m`} = ${startMarchingForwFrom}`
            );
        }

        DEV &&
          console.log(
            `424 FINAL ${`\u001b[${33}m${`startMarchingForwFrom`}\u001b[${39}m`} = ${startMarchingForwFrom}`
          );

        // find out where does this (possibly a sequence) of number(s) end:
        let numbersSequenceEndsAt;
        if (startMarchingForwFrom as number) {
          DEV &&
            console.log(
              `432 \u001b[${36}m${`startMarchingForwFrom`}\u001b[${39}m was set so marching forward`
            );
          for (let y = startMarchingForwFrom as number; y < len; y++) {
            DEV &&
              console.log(
                `\u001b[${36}m${`str[${y}] = ${str[y]}`}\u001b[${39}m`
              );
            if (!isDigit(str[y])) {
              numbersSequenceEndsAt = y;
              DEV &&
                console.log(
                  `\u001b[${36}m${`not digit, so break`}\u001b[${39}m`
                );
              break;
            }
          }
          DEV &&
            console.log(`449 \u001b[${36}m${`stop marching`}\u001b[${39}m`);
        }

        // answer: at "numbersSequenceEndsAt".
        DEV &&
          console.log(
            `455 \u001b[${32}m${`str[${numbersSequenceEndsAt}] = ${
              str[numbersSequenceEndsAt as number]
            }`}\u001b[${39}m`
          );

        // We're at the next character where digits end. That is:

        // DEV && console.log(`\u001b[33m 123 zzz \u001b[${39}m`)
        //                       ^
        //                     here, OR

        // DEV && console.log(`\u001b[${33}m 123 zzz \u001b[${39}m`)
        //                         ^
        //                       here

        let ansiSequencesLetterMAt;

        if (
          numbersSequenceEndsAt !== undefined &&
          str[numbersSequenceEndsAt] === "m"
        ) {
          // if number follows "m", this is it:
          ansiSequencesLetterMAt = numbersSequenceEndsAt;
        } else if (
          numbersSequenceEndsAt !== undefined &&
          str[numbersSequenceEndsAt] === "}" &&
          str[numbersSequenceEndsAt + 1] === "m"
        ) {
          ansiSequencesLetterMAt = numbersSequenceEndsAt + 1;
        }

        DEV &&
          console.log(
            `488 ${`\u001b[${33}m${`ansiSequencesLetterMAt`}\u001b[${39}m`} = ${ansiSequencesLetterMAt};`
          );

        /* c8 ignore next */
        if (!ansiSequencesLetterMAt) {
          // if ANSI closing "m" hasn't been detected yet, bail:
          wasLetterDetected = true;
          continue;
        }

        /* c8 ignore next */
        if (
          str[ansiSequencesLetterMAt + 1] === "$" &&
          str[ansiSequencesLetterMAt + 2] === "{" &&
          str[ansiSequencesLetterMAt + 3] === "`"
        ) {
          i = ansiSequencesLetterMAt + 3;
          DEV &&
            console.log(
              `507 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`i`}\u001b[${39}m`} = ${i}`
            );
          continue;
        }
      }

      wasLetterDetected = true;
      DEV &&
        console.log(
          `516 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`wasLetterDetected`}\u001b[${39}m`} = true`
        );
    }

    // catch the opening bracket of DEV && console.log ---->(<----- )
    if (
      !bracketOpensAt &&
      str[i].trim() &&
      consoleStartsAt &&
      consoleStartsAt <= i
    ) {
      if (str[i] === "(") {
        bracketOpensAt = i;
        DEV &&
          console.log(
            `531 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`bracketOpensAt`}\u001b[${39}m`} = ${JSON.stringify(
              bracketOpensAt,
              null,
              4
            )}`
          );
      } else {
        // wipe
        DEV && console.log(`539 \u001b[${31}m${`WIPE`}\u001b[${39}m`);
        consoleStartsAt = null;
        digitStartsAt = null;
      }
    }

    // catch the trigger keywords
    if (
      isObj(resolvedOpts) &&
      resolvedOpts.triggerKeywords &&
      Array.isArray(resolvedOpts.triggerKeywords)
    ) {
      // check does any of the trigger keywords match
      let caughtKeyword;

      for (
        let y = 0, len2 = resolvedOpts.triggerKeywords.length;
        y < len2;
        y++
      ) {
        /* c8 ignore next */
        if (str.startsWith(resolvedOpts.triggerKeywords[y], i)) {
          caughtKeyword = resolvedOpts.triggerKeywords[y];
          break;
        }
      }

      // if any of trigger keywords starts here
      /* c8 ignore next */
      if (caughtKeyword) {
        consoleStartsAt = i + caughtKeyword.length;
        DEV &&
          console.log(
            `572 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`consoleStartsAt`}\u001b[${39}m`} = ${consoleStartsAt}`
          );
        // offset the index so we don't traverse twice what was traversed already:
        i = i + caughtKeyword.length - 1;
        DEV &&
          console.log(
            `578 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`i`}\u001b[${39}m`} = ${i}`
          );
        continue;
      }
    }

    DEV &&
      console.log(`\u001b[${90}m${`--------------------------`}\u001b[${39}m`);
    DEV &&
      console.log(`\u001b[${90}m${`currentRow = ${currentRow}`}\u001b[${39}m`);
    DEV &&
      console.log(
        `\u001b[${90}m${`digitStartsAt = ${digitStartsAt}`}\u001b[${39}m`
      );
    DEV &&
      console.log(
        `\u001b[${90}m${`bracketOpensAt = ${bracketOpensAt}`}\u001b[${39}m`
      );
    DEV &&
      console.log(
        `\u001b[${90}m${`consoleStartsAt = ${consoleStartsAt}`}\u001b[${39}m`
      );
    DEV &&
      console.log(
        `\u001b[${90}m${`quotes = ${JSON.stringify(quotes, null, 0)}${
          quotes ? `\nwasLetterDetected = ${wasLetterDetected}` : ""
        }`}\u001b[${39}m`
      );
  }

  DEV &&
    console.log(
      `610 ${`\u001b[${33}m${`finalIndexesToDelete.current()`}\u001b[${39}m`} = ${JSON.stringify(
        finalIndexesToDelete.current(),
        null,
        4
      )}`
    );

  // wipe
  quotes = null;
  consoleStartsAt = null;
  bracketOpensAt = null;
  currentRow = 1;
  wasLetterDetected = undefined;
  digitStartsAt = null;
  currentRow = 1;

  return {
    log: {
      timeTakenInMilliseconds: Date.now() - start,
    },
    result: rApply(str, finalIndexesToDelete.current()),
    ranges: finalIndexesToDelete.current(),
  };
}
