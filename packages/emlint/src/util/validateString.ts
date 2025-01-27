import { processCommaSep } from "string-process-comma-separated";

import checkForWhitespace from "./checkForWhitespace";
import { ErrorObj } from "./commonTypes";
import includesWithRegex from "./includesWithRegex";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare let DEV: boolean;

interface Opts {
  caseInsensitive: boolean;
  canBeCommaSeparated: boolean;
  quickPermittedValues: (string | RegExp)[];
  permittedValues: string[];
  noSpaceAfterComma: boolean;
}

const defaults: Opts = {
  caseInsensitive: false,
  canBeCommaSeparated: false, // for example, HTML attribute "accept" is like that
  quickPermittedValues: [], // will be matched first, if not matched, will move on to opts.permittedValues
  permittedValues: [], // matches value against that array
  noSpaceAfterComma: false,
};

// if value is not comma-separated chain of values, whole thing is passed to this
// if value is comma-separated, each extracted chunk is passed to this
// we keep it separate to keep it DRY
function validateValue(
  str: string,
  idxOffset: number,
  opts: Opts,
  charStart: number,
  charEnd: number,
  errorArr: ErrorObj[]
): void {
  let extractedValue = str.slice(charStart, charEnd);
  DEV &&
    console.log(
      `040 validateString/validateValue ${`\u001b[${33}m${`extractedValue`}\u001b[${39}m`} = ${JSON.stringify(
        extractedValue,
        null,
        4
      )}`
    );
  if (
    !(
      includesWithRegex(opts.quickPermittedValues, extractedValue, {
        caseInsensitive: opts.caseInsensitive,
      }) ||
      includesWithRegex(opts.permittedValues, extractedValue, {
        caseInsensitive: opts.caseInsensitive,
      })
    )
  ) {
    DEV && console.log(`056 validateString/validateValue`);
    let fix = null;
    let message = `Unrecognised value: "${str.slice(charStart, charEnd)}".`;
    if (
      includesWithRegex(
        opts.quickPermittedValues,
        extractedValue.toLowerCase()
      ) ||
      includesWithRegex(opts.permittedValues, extractedValue.toLowerCase())
    ) {
      DEV && console.log(`066 validateString/validateValue: set the message`);
      message = `Should be lowercase.`;
      fix = {
        ranges: [
          [
            charStart + idxOffset,
            charEnd + idxOffset,
            extractedValue.toLowerCase(),
          ],
        ],
      };
    } else if (
      Array.isArray(opts.quickPermittedValues) &&
      opts.quickPermittedValues.length &&
      opts.quickPermittedValues.length < 6 &&
      opts.quickPermittedValues.every((val) => typeof val === "string") &&
      (!Array.isArray(opts.permittedValues) || !opts.permittedValues.length) &&
      opts.quickPermittedValues.join("|").length < 40
    ) {
      // if all reference values are strings, if the case is simple,
      // for example, <td dir="tralala">, instead of message:
      // Unrecognised value: "tralala".
      // we can say:
      // Should be "rtl|ltr"
      DEV && console.log(`090 validateString/validateValue set the message`);
      message = `Should be "${opts.quickPermittedValues.join("|")}".`;
    } else if (
      Array.isArray(opts.permittedValues) &&
      opts.permittedValues.length &&
      opts.permittedValues.length < 6 &&
      opts.permittedValues.every((val) => typeof val === "string") &&
      (!Array.isArray(opts.quickPermittedValues) ||
        !opts.quickPermittedValues.length) &&
      opts.permittedValues.join("|").length < 40
    ) {
      // if all reference values are strings, if the case is simple,
      // for example, <td dir="tralala">, instead of message:
      // Unrecognised value: "tralala".
      // we can say:
      // Should be "rtl|ltr"
      DEV && console.log(`106 validateString/validateValue set the message`);
      message = `Should be "${opts.permittedValues.join("|")}".`;
    }

    errorArr.push({
      idxFrom: charStart + idxOffset,
      idxTo: charEnd + idxOffset,
      message,
      fix: fix as any,
    });
    DEV &&
      console.log(
        `118 validateString/validateValue after errorArr push, ${`\u001b[${33}m${`errorArr`}\u001b[${39}m`} = ${JSON.stringify(
          errorArr,
          null,
          4
        )}`
      );
  }
}

function validateString(
  str: string,
  idxOffset: number,
  originalOpts?: Partial<Opts>
): ErrorObj[] {
  DEV &&
    console.log(
      `134 ██ ${`\u001b[${35}m${`validateString() called`}\u001b[${39}m`}; originalOpts = ${JSON.stringify(
        originalOpts,
        null,
        4
      )}`
    );

  let opts: Opts = { ...defaults, ...originalOpts };

  // we get trimmed string start and end positions, also an encountered errors array
  let { charStart, charEnd, errorArr } = checkForWhitespace(str, idxOffset);
  DEV &&
    console.log(
      `147 validateString(): ${`\u001b[${33}m${`charStart`}\u001b[${39}m`} = ${charStart}; ${`\u001b[${33}m${`charEnd`}\u001b[${39}m`} = ${charEnd};\n${`\u001b[${33}m${`errorArr`}\u001b[${39}m`} = ${JSON.stringify(
        errorArr,
        null,
        4
      )}`
    );

  if (typeof charStart === "number" && typeof charEnd === "number") {
    // continue checks only if there are non-whitespace characters in the value
    if (opts.canBeCommaSeparated) {
      DEV &&
        console.log(
          `159 validateString(): ${`\u001b[${32}m${`call processCommaSep()`}\u001b[${39}m`}`
        );
      processCommaSep(str, {
        offset: idxOffset,
        oneSpaceAfterCommaOK: false,
        leadingWhitespaceOK: true,
        trailingWhitespaceOK: true,
        cb: (idxFrom, idxTo) => {
          DEV &&
            console.log(
              `169 validateString(): ${`\u001b[${32}m${`INCOMING`}\u001b[${39}m`} idxFrom = ${idxFrom}; idxTo = ${idxTo}`
            );

          let extractedValue = str.slice(
            idxFrom - idxOffset,
            idxTo - idxOffset
          );
          DEV &&
            console.log(
              `178 ██ validateString(): EXTRACTED VALUE: ${JSON.stringify(
                extractedValue,
                null,
                0
              )}`
            );

          // if there are errors, validateValue() mutates the passed "errorArr",
          // pushing to it
          validateValue(
            str,
            idxOffset,
            opts,
            idxFrom - idxOffset, // processCommaSep() reports offset values so we need to restore indexes to start where this "str" above starts
            idxTo - idxOffset,
            errorArr
          );
        },
        errCb: (ranges, message) => {
          DEV &&
            console.log(
              `199 validateString(): ${`\u001b[${32}m${`INCOMING`}\u001b[${39}m`} ranges = ${ranges}; message = ${message}`
            );
          errorArr.push({
            idxFrom: ranges[0][0],
            idxTo: ranges[ranges.length - 1][1],
            message,
            fix: {
              ranges,
            },
          });
          DEV &&
            console.log(
              `211 validateString(): after errorArr push, ${`\u001b[${33}m${`errorArr`}\u001b[${39}m`} = ${JSON.stringify(
                errorArr,
                null,
                4
              )}`
            );
        },
      });
    } else {
      DEV && console.log(`220 validateString(): single value clauses`);

      let extractedValue = str.slice(charStart, charEnd);
      DEV &&
        console.log(
          `225 validateString(): str.slice(charStart, charEnd): ${`\u001b[${36}m${extractedValue}\u001b[${39}m`}`
        );

      // if there are errors, validateValue() mutates the passed "errorArr",
      // pushing to it
      validateValue(str, idxOffset, opts, charStart, charEnd, errorArr);
    }
  }

  DEV &&
    console.log(
      `236 validateString(): ${`\u001b[${32}m${`RETURN`}\u001b[${39}m`} ${JSON.stringify(
        errorArr,
        null,
        4
      )}`
    );

  return errorArr;
}

export default validateString;
