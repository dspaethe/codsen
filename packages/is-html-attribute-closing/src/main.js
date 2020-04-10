import { allHtmlAttribs } from "html-all-known-attributes";
import charSuitableForHTMLAttrName from "is-char-suitable-for-html-attr-name";
import { right } from "string-left-right";
import split from "string-split-by-whitespace";
import { matchRight } from "string-match-left-right";
import {
  ensureXIsNotPresentBeforeOneOfY,
  xBeforeYOnTheRight,
  plausibleAttrStartsAtX,
} from "./util";

function makeTheQuoteOpposite(quoteChar) {
  return quoteChar === `'` ? `"` : `'`;
}

function isAttrClosing(str, idxOfAttrOpening, isThisClosingIdx) {
  if (
    typeof str !== "string" ||
    !str.trim().length ||
    !Number.isInteger(idxOfAttrOpening) ||
    !Number.isInteger(isThisClosingIdx) ||
    !str[idxOfAttrOpening] ||
    !str[isThisClosingIdx] ||
    idxOfAttrOpening >= isThisClosingIdx
  ) {
    console.log(
      `027 ${`\u001b[${31}m${`WRONG INPUTS, RETURN FALSE`}\u001b[${39}m`}`
    );
    return false;
  }

  const openingQuote = `'"`.includes(str[idxOfAttrOpening])
    ? str[idxOfAttrOpening]
    : null;
  let oppositeToOpeningQuote = null;
  if (openingQuote) {
    oppositeToOpeningQuote = makeTheQuoteOpposite(openingQuote);
  }
  console.log(
    `040 ${`\u001b[${33}m${`openingQuote`}\u001b[${39}m`}: ${`\u001b[${35}m${openingQuote}\u001b[${39}m`}   ${`\u001b[${33}m${`oppositeToOpeningQuote`}\u001b[${39}m`}: ${`\u001b[${35}m${oppositeToOpeningQuote}\u001b[${39}m`}`
  );

  let chunkStartsAt;
  const quotesCount = new Map().set(`'`, 0).set(`"`, 0).set(`matchedPairs`, 0);

  let lastQuoteAt = null;
  let totalQuotesCount = 0;
  let lastQuoteWasMatched = false;
  let lastMatchedQuotesPairsStartIsAt = false;
  let lastMatchedQuotesPairsEndIsAt = false;

  // when suspected attribute name chunks end, we wipe them, but here
  // we store the last extracted chunk - then later, for example, when we
  // traverse further and meet opening quote (even with equal missing),
  // we can evaluate that chunk, was it a known attribute name (idea being,
  // known attribute name followed by quote is probably legit attribute starting)
  let lastCapturedChunk;

  // this boolean flag signifies, was the last chunk captured after passing
  // "isThisClosingIdx":
  // idea being, if you pass suspected quotes, then encounter new-ones and
  // in-between does not resemble an attribute name, it's falsey result:
  // <img alt="so-called "artists"!' class='yo'/>
  //          ^                  ^
  //        start             suspected
  //
  // that exclamation mark above doesn't resemble an attribute name,
  // so single quote that follows it is not a starting of its value
  let lastChunkWasCapturedAfterSuspectedClosing = false;

  // does what it says on the tin - flips on the first instance
  let closingBracketMet = false;
  let openingBracketMet = false;

  // let's traverse from opening to the end of the string, then in happy
  // path scenarios, let's exit way earlier, upon closing quote
  for (let i = idxOfAttrOpening, len = str.length; i < len; i++) {
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //                                THE TOP
    //                                ███████
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    //
    // Logging:
    // -------------------------------------------------------------------------
    console.log(
      `\u001b[${36}m${`===============================`}\u001b[${39}m \u001b[${35}m${`str[ ${i} ] = ${
        str[i] && str[i].trim().length
          ? str[i]
          : JSON.stringify(str[i], null, 4)
      }`}\u001b[${39}m \u001b[${36}m${`===============================`}\u001b[${39}m\n`
    );

    console.log(
      i === isThisClosingIdx
        ? `                 ██ isThisClosingIdx met at ${i} ██`
        : ""
    );

    if (
      // Imagine we're here:
      // <z bbb"c" ddd'e>
      //       ^      ^
      //   start     suspected closing
      //
      // this single quote at 13 is preceded by fully matched pair of quotes
      // there's also attribute-name-like chunk preceding in front.
      // Let's catch such case.
      //
      // 1. we're on a quote
      `'"`.includes(str[i]) &&
      // 2. we ensure that a pair of quotes was catched so far
      lastQuoteWasMatched &&
      // 3. lastMatchedQuotesPairsStartIsAt is our known opening
      lastMatchedQuotesPairsStartIsAt === idxOfAttrOpening &&
      // 4. lastMatchedQuotesPairsEndIsAt is the last matched pair's closing:
      // <z bbb"c" ddd'e>
      //         ^
      //        this if to reuse the example..
      //
      lastMatchedQuotesPairsEndIsAt < i &&
      // rule must not trigger before the suspected quote index
      i >= isThisClosingIdx
    ) {
      console.log(`144 ███████████████████████████████████████`);
      console.log(
        `146 ${`\u001b[${33}m${`plausibleAttrStartsAtX(str, ${
          i + 1
        })`}\u001b[${39}m`} = ${JSON.stringify(
          plausibleAttrStartsAtX(str, i + 1),
          null,
          4
        )}`
      );

      // ███████████████████████████████████████ E1
      //
      // consider WHERE WE ARE AT THE MOMENT in relation to
      // the INDEX THAT'S QUESTIONED FOR BEING A CLOSING-ONE

      // FALSEY result:
      // <z bbb"c" ddd'e'>.<z fff"g">
      //       ^      ^
      //     start   suspected
      //
      // <z bbb"c" ddd'e'>.<z fff"g">
      //              ^
      //            we're here

      // TRUTHY result:
      // <img class="so-called "alt"!' border='10'/>
      //            ^          ^
      //          start      suspected
      //
      // where we're at:
      // <img class="so-called "alt"!' border='10'/>
      //                           ^
      //
      const E1 = i !== isThisClosingIdx;

      // ███████████████████████████████████████ E2
      //
      //
      // ensure it's not a triplet of quotes:
      // <img alt="so-called "artists"!' class='yo'/>
      //          ^          ^       ^
      //       start      suspected  |
      //                             current index
      //
      const E21 = !(
        i > isThisClosingIdx &&
        str[idxOfAttrOpening] === str[isThisClosingIdx] &&
        str[idxOfAttrOpening] === str[i]
      );

      const E22 =
        // or a proper recognised attribute follows:
        // <img alt="so-called "artists"class='yo'/>
        //          ^                  ^
        //       start              suspected and currently on
        //
        // plus one because we're on a quote
        plausibleAttrStartsAtX(str, i + 1);

      const E23 =
        // or the last chunk is a known attribute name:
        // <img class="so-called "alt"!' border='10'/>
        //            ^          ^
        //         start      suspected/we're currently on
        //
        chunkStartsAt &&
        chunkStartsAt < i &&
        allHtmlAttribs.has(str.slice(chunkStartsAt, i).trim());

      const E24 =
        // imagine:
        // <z bbb"c" ddd"e'>
        //       ^ ^
        //      /  \
        //  start  suspected
        //
        // <z bbb"c" ddd"e'>
        //              ^
        //          currently on

        // E23, recognised attribute name is very weighty argument; however
        // in light of unrecognised attributes, we might still try to salvage
        // some, as long as they resemble valid attribute names. We just
        // validate each character and drop in more rules into the bag,
        // like requiring whitespace to be in front and opening/closing to match

        // IF...
        // there's a whitespace in front of last chunk ("ddd" in example above)
        chunkStartsAt < i &&
        str[chunkStartsAt - 1] &&
        !str[chunkStartsAt - 1].trim().length &&
        // and whole chunk is plausible for attribute
        Array.from(str.slice(chunkStartsAt, i).trim()).every((char) =>
          charSuitableForHTMLAttrName(char)
        ) &&
        // known opening and suspected closing are both singles or doubles
        str[idxOfAttrOpening] === str[isThisClosingIdx];

      // ███████████████████████████████████████ E3

      const E3 =
        // either it's a tag ending
        `/>`.includes(str[right(str, i)]) ||
        // or next character is suitable for a tag name:
        charSuitableForHTMLAttrName(str[right(str, i)]) ||
        // or in case of:
        // <img class="so-called "alt"!' border='10'/>
        //            ^          ^
        //          start      suspected
        //
        // where we're at:
        // <img class="so-called "alt"!' border='10'/>
        //                           ^
        //                          here
        lastQuoteWasMatched;

      console.log(`261:`);
      console.log(`E1: ${`\u001b[${E1 ? 32 : 31}m${E1}\u001b[${39}m`}`);
      console.log(
        `E2: ${`\u001b[${E21 ? 32 : 31}m${E21}\u001b[${39}m`} || ${`\u001b[${
          E22 ? 32 : 31
        }m${E22}\u001b[${39}m`} || ${`\u001b[${
          E23 ? 32 : 31
        }m${E23}\u001b[${39}m`} || ${`\u001b[${
          E24 ? 32 : 31
        }m${E24}\u001b[${39}m`} ==> ${`\u001b[${
          E21 || E22 || E23 || E24 ? 32 : 31
        }m${E21 || E22 || E23 || E24}\u001b[${39}m`}`
      );
      console.log(`E3: ${`\u001b[${E3 ? 32 : 31}m${E3}\u001b[${39}m`}`);

      return E1 && (E21 || E22 || E23 || E24) && E3;
    }

    // catch quotes
    if (`'"`.includes(str[i])) {
      // catch the non-overlapping matched pairs of quotes
      // for example that's three pairs in total below:
      // <z bbb"c" ddd'e'>.<z fff"g">

      console.log(
        `286 FIY, ${`\u001b[${33}m${`lastQuoteAt`}\u001b[${39}m`} = ${JSON.stringify(
          lastQuoteAt,
          null,
          4
        )}; ${`\u001b[${33}m${`str[lastQuoteAt]`}\u001b[${39}m`}: ${
          str[lastQuoteAt]
        }`
      );
      if (lastQuoteAt && str[i] === str[lastQuoteAt]) {
        quotesCount.set("matchedPairs", quotesCount.get("matchedPairs") + 1);
        lastMatchedQuotesPairsStartIsAt = lastQuoteAt;
        lastMatchedQuotesPairsEndIsAt = i;
        lastQuoteAt = null;

        lastQuoteWasMatched = true;
        console.log(
          `302 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`lastQuoteWasMatched`}\u001b[${39}m`} = ${JSON.stringify(
            lastQuoteWasMatched,
            null,
            4
          )}`
        );
      } else {
        lastQuoteWasMatched = false;
        console.log(
          `311 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`lastQuoteWasMatched`}\u001b[${39}m`} = ${JSON.stringify(
            lastQuoteWasMatched,
            null,
            4
          )}`
        );
      }

      // bump total counts:
      quotesCount.set(str[i], quotesCount.get(str[i]) + 1);

      totalQuotesCount = quotesCount.get(`"`) + quotesCount.get(`'`);

      // lastQuoteAt = i;
      // console.log(
      //   `325 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`lastQuoteAt`}\u001b[${39}m`} = ${JSON.stringify(
      //     lastQuoteAt,
      //     null,
      //     4
      //   )}`
      // );
    }

    // catch closing brackets
    if (str[i] === ">" && !closingBracketMet) {
      closingBracketMet = true;
      console.log(
        `338 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`closingBracketMet`}\u001b[${39}m`} = ${JSON.stringify(
          closingBracketMet,
          null,
          4
        )}`
      );
    }

    // catch opening brackets
    if (str[i] === "<" && closingBracketMet && !openingBracketMet) {
      openingBracketMet = true;
      console.log(
        `350 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`openingBracketMet`}\u001b[${39}m`} = ${JSON.stringify(
          openingBracketMet,
          null,
          4
        )}`
      );

      // if it's past the "isThisClosingIdx", that's very falsey
      if (i > isThisClosingIdx) {
        console.log(
          `360 new tag starts - ${`\u001b[${31}m${`RETURN FALSE`}\u001b[${39}m`}`
        );
        return false;
      }
    }

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //                               MIDDLE
    //                               ██████
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    // before and after the suspected index, all the way while traversing the
    // string from known, starting quotes (or in their absence, starting of
    // the attribute's value, the second input argument "idxOfAttrOpening")
    // all the way until the end, we catch the first character past the
    // questioned attribute closing.

    // imagine
    // <img alt="so-called "artists"!' class='yo'/>
    //          ^                  ^
    //        opening          suspected closing

    if (str[i].trim().length && !chunkStartsAt) {
      console.log(`402 inside the attr name START catching clauses`);
      // <img alt="so-called "artists"!' class='yo'/>
      //                              ^
      //                         we land here, on excl. mark
      if (charSuitableForHTMLAttrName(str[i])) {
        console.log(
          `408 ${`\u001b[${32}m${`██ new attribute name starts`}\u001b[${39}m`}`
        );
        chunkStartsAt = i;
        console.log(
          `412 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`chunkStartsAt`}\u001b[${39}m`} = ${JSON.stringify(
            chunkStartsAt,
            null,
            4
          )}`
        );
      }
    } else if (chunkStartsAt && !charSuitableForHTMLAttrName(str[i])) {
      console.log(`420 inside the attr name END catching clauses`);

      // ending of an attr name chunk
      console.log(
        `424 ${`\u001b[${32}m${`EXTRACTED`}\u001b[${39}m`}: "${str.slice(
          chunkStartsAt,
          i
        )}"`
      );
      lastCapturedChunk = str.slice(chunkStartsAt, i);
      lastChunkWasCapturedAfterSuspectedClosing =
        chunkStartsAt >= isThisClosingIdx;

      console.log(
        `434 ${`\u001b[${31}m${`RESET`}\u001b[${39}m`} ${`\u001b[${33}m${`chunkStartsAt`}\u001b[${39}m`}`
      );
      chunkStartsAt = null;

      // imagine:
      // <z bbb"c' href"e>
      //       ^ ^
      //   start suspected ending
      //
      // we're here:
      // <z bbb"c' href"e>
      //               ^
      if (
        `'"`.includes(str[i]) &&
        quotesCount.get(`matchedPairs`) === 0 &&
        totalQuotesCount === 3 &&
        str[idxOfAttrOpening] === str[i] &&
        allHtmlAttribs.has(lastCapturedChunk)
      ) {
        console.log(
          `454 ${`\u001b[${32}m${`RETURN`}\u001b[${39}m`} ${
            i > isThisClosingIdx
          }`
        );
        console.log(
          `459 FIY, ${`\u001b[${33}m${`lastQuoteAt`}\u001b[${39}m`} = ${JSON.stringify(
            lastQuoteAt,
            null,
            4
          )}`
        );

        console.log(
          `SPLIT: ${JSON.stringify(
            split(str.slice(lastQuoteAt + 1, i)),
            null,
            4
          )}`
        );

        const A1 = i > isThisClosingIdx;
        //
        // ensure that all continuous chunks since the last quote are
        // recognised attribute names
        const A21 = !lastQuoteAt;
        const A22 = lastQuoteAt + 1 >= i;
        const A23 = split(str.slice(lastQuoteAt + 1, i)).every((chunk) =>
          allHtmlAttribs.has(chunk)
        );

        const B1 = i === isThisClosingIdx;
        const B21 = totalQuotesCount < 3;
        const B22 = !!lastQuoteWasMatched;
        const B23 = !lastQuoteAt;
        const B24 = lastQuoteAt + 1 >= i;
        const B25 = !split(str.slice(lastQuoteAt + 1, i)).every((chunk) =>
          allHtmlAttribs.has(chunk)
        );

        console.log(`493:`);
        console.log(
          `(A1=${`\u001b[${
            A1 ? 32 : 31
          }m${A1}\u001b[${39}m`} && (A21=${`\u001b[${
            A21 ? 32 : 31
          }m${A21}\u001b[${39}m`} || A22=${`\u001b[${
            A22 ? 32 : 31
          }m${A22}\u001b[${39}m`} || A23=${`\u001b[${
            A23 ? 32 : 31
          }m${A23}\u001b[${39}m`})) ==> ${`\u001b[${
            A1 && (A21 || A22 || A23) ? 32 : 31
          }m${A1 && (A21 || A22 || A23)}\u001b[${39}m`}`
        );
        console.log(`OR`);
        console.log(
          `(B1=${`\u001b[${
            B1 ? 32 : 31
          }m${B1}\u001b[${39}m`} && (B21=${`\u001b[${
            B21 ? 32 : 31
          }m${B21}\u001b[${39}m`} || B22=${`\u001b[${
            B22 ? 32 : 31
          }m${B22}\u001b[${39}m`} || B23=${`\u001b[${
            B23 ? 32 : 31
          }m${B23}\u001b[${39}m`} || B24=${`\u001b[${
            B24 ? 32 : 31
          }m${B24}\u001b[${39}m`} || B25=${`\u001b[${
            B25 ? 32 : 31
          }m${B25}\u001b[${39}m`})) ==> ${`\u001b[${
            B1 && (B21 || B22 || B23 || B24 || B25) ? 32 : 31
          }m${B1 && (B21 || B22 || B23 || B24 || B25)}\u001b[${39}m`}`
        );

        return (
          (A1 && (A21 || A22 || A23)) ||
          (B1 && (B21 || B22 || B23 || B24 || B25))
        );
      }
    }

    // catching new attributes that follow after suspected quote.
    // Imagine
    // <a class "c" id 'e' href "www">
    //                 ^            ^
    //        known start at 16     suspected ending at 29
    console.log(
      `539 ${
        i > isThisClosingIdx + 1
          ? `FIY, the trim [${isThisClosingIdx + 1}, ${i}]: "${str
              .slice(isThisClosingIdx + 1, i)
              .trim()}"`
          : "z"
      }`
    );
    if (
      // if we're currently on some quote:
      `'"`.includes(str[i]) &&
      // and if either quote count is an even number (the "!" checking is it zero)
      (!(quotesCount.get(`"`) % 2) || !(quotesCount.get(`'`) % 2)) &&
      // and sum of quotes is odd, for example,
      // <a class "c" id 'e' href "www">
      //                          ^
      //                   reusing example above, let's say we're here
      //
      // in this situation, both single quotes around "e" add up to 2, then
      // current opening quote of "www" adds up to 3.
      //
      // In human language, this means, we check, was there a complete
      // set of quotes recorded by now, plus is current chunk a known
      // attribute name - this allows us to catch an attribute with equal missing
      (quotesCount.get(`"`) + quotesCount.get(`'`)) % 2 &&
      //
      // last chunk is not falsey (thus a string):
      ((lastCapturedChunk &&
        // and finally, perf resource-taxing evaluation, is it recognised:
        allHtmlAttribs.has(lastCapturedChunk)) ||
        // imagine
        // <z bbb"c" ddd'e'>
        //         ^
        //        a suspected closing
        //
        // alternatively, check the count of remaining quotes, ensure that
        // leading up to closing bracket, everything's neat (not overlapping
        // at least and opened and closed)

        // this catch is for the following attributes, for example,
        // <z bbb"c" ddd'e'>
        //       ^      ^
        //     start   suspected ending
        (i > isThisClosingIdx + 1 &&
          Array.from(str.slice(isThisClosingIdx + 1, i).trim()).every((char) =>
            charSuitableForHTMLAttrName(char)
          )))
    ) {
      console.log(`587 FIY, doubles count: ${quotesCount.get(`"`)}`);
      console.log(`588 FIY, singles count: ${quotesCount.get(`'`)}`);

      // rules:
      const R1 = !!openingQuote;
      const R2 = str[idxOfAttrOpening] !== str[isThisClosingIdx];
      const R3 = Array.from(
        str.slice(idxOfAttrOpening + 1, isThisClosingIdx).trim()
      ).every((char) => charSuitableForHTMLAttrName(char));

      // that quote we suspected as closing, is from an opening-closing
      // set on another attribute:
      const R4 = !xBeforeYOnTheRight(
        str,
        i + 1,
        str[isThisClosingIdx],
        makeTheQuoteOpposite(str[isThisClosingIdx])
      );

      console.log(`R1: ${`\u001b[${R1 ? 32 : 31}m${R1}\u001b[${39}m`}`);
      console.log(`R2: ${`\u001b[${R2 ? 32 : 31}m${R2}\u001b[${39}m`}`);
      console.log(`R3: ${`\u001b[${R3 ? 32 : 31}m${R3}\u001b[${39}m`}`);
      console.log(`R4: ${`\u001b[${R4 ? 32 : 31}m${R4}\u001b[${39}m`}`);

      console.log(`611 ${`\u001b[${32}m${`RETURN`}\u001b[${39}m`}`);

      return (
        // before suspected index this pattern is falsey, after - truthy
        i > isThisClosingIdx &&
        // consider:
        // <z alt"href' www'/>
        //       ^    ^
        //    start   suspected ending

        // let's rule out the case where whole (suspected) attribute's value is
        // a known attribute value, plus quotes mismatch plus that closing quote
        // is on the right, before the its opposite kind
        !(R1 && R2 && R3 && R4)
      );
    } else if (
      // imagine
      // <a href=www" class=e'>
      //         ^  ^
      //     start  suspected

      // if it's equal following attribute name
      (str[i] === "=" ||
        // OR
        // it's whitespace
        (!str[i].length &&
          // and next non-whitespace character is "equal" character
          str[right(str, i)] === "=")) &&
      // last chunk is not falsey (thus a string)
      lastCapturedChunk &&
      // and finally, perf resource-taxing evaluation, is it recognised:
      allHtmlAttribs.has(lastCapturedChunk)
    ) {
      // definitely that's new attribute starting
      console.log(
        `646 new attr starting - ${`\u001b[${32}m${`RETURN`}\u001b[${39}m`} ${
          i > isThisClosingIdx
        }`
      );
      return (
        i > isThisClosingIdx &&
        // insurance against:
        // <z alt"href' www' id=z"/>
        //       ^         ^
        //     start      suspected ending
        !(
          lastQuoteWasMatched &&
          lastMatchedQuotesPairsStartIsAt &&
          lastMatchedQuotesPairsStartIsAt <= isThisClosingIdx
        )
      );
    }

    // when index "isThisClosingIdx" has been passed...
    if (i > isThisClosingIdx) {
      console.log(`666 i > isThisClosingIdx`);

      // if current quote matches the opening
      if (openingQuote && str[i] === openingQuote) {
        console.log(
          `671 a true opening quote matched beyond the suspected-one - ${`\u001b[${32}m${`RETURN`}\u001b[${39}m`}`
        );
        console.log(
          `674 ! ${`\u001b[${33}m${`lastCapturedChunk`}\u001b[${39}m`} = ${JSON.stringify(
            lastCapturedChunk,
            null,
            4
          )}`
        );
        console.log(
          `681 ! ${`\u001b[${33}m${`lastQuoteAt`}\u001b[${39}m`} = ${JSON.stringify(
            lastQuoteAt,
            null,
            4
          )}`
        );
        console.log(
          `688 ! ${`\u001b[${33}m${`isThisClosingIdx`}\u001b[${39}m`} = ${JSON.stringify(
            isThisClosingIdx,
            null,
            4
          )}`
        );

        // we want to return false as default...
        // except if we're able to extract a clean recognised attribute name
        // in front of here and prove that it's actually a new attribute starting
        // here, then it's true

        // imagine
        // <img alt="somethin' fishy going on' class">z<a class="y">
        //          ^                        ^      ^
        //         start            suspected       we're here

        return (
          lastQuoteAt &&
          lastQuoteAt === isThisClosingIdx &&
          split(str.slice(lastQuoteAt + 1, i)).every((chunk) =>
            allHtmlAttribs.has(chunk)
          )
        );
      }

      // if we have passed the suspected closing quote
      // and we meet another quote of the same kind,
      // it's false result. Imagine code:
      // <img alt='so-called "artists"!" class='yo'/>
      //                     ^       ^
      //               questioned    |
      //                 index     we're here
      //                           so it's false
      if (
        // if attribute starts with a quote
        openingQuote &&
        // and we're suspecting a mismatching pair:
        str[isThisClosingIdx] === oppositeToOpeningQuote &&
        // we're questioning, maybe current
        // suspected closing quote is of the
        // opposite kind (single-double, double-single)
        str[i] === oppositeToOpeningQuote
      ) {
        console.log(
          `733 another quote same as suspected was met - ${`\u001b[${31}m${`RETURN FALSE`}\u001b[${39}m`}`
        );
        return false;
      } // if the tag closing was met, that's fine, imagine:
      // <div class='c">.</div>
      //              ^
      //        we went past this suspected closing quote
      //        and reached the tag ending...
      else if (str[i] === "/" || str[i] === ">" || str[i] === "<") {
        console.log(`742 ${`\u001b[${32}m${`RETURN`}\u001b[${39}m`}`);
        // Not more than one pair of non-overlapping quotes should have been matched.

        const R1 = quotesCount.get(`matchedPairs`) < 2;

        const R2 =
          totalQuotesCount < 3 ||
          // there's only two quotes mismatching:
          quotesCount.get(`"`) +
            quotesCount.get(`'`) -
            quotesCount.get(`matchedPairs`) * 2 !==
            2;

        const R31 =
          !lastQuoteWasMatched ||
          (lastQuoteWasMatched &&
            !(
              lastMatchedQuotesPairsStartIsAt &&
              Array.from(
                str
                  .slice(idxOfAttrOpening + 1, lastMatchedQuotesPairsStartIsAt)
                  .trim()
              ).every((char) => charSuitableForHTMLAttrName(char)) &&
              allHtmlAttribs.has(
                str
                  .slice(idxOfAttrOpening + 1, lastMatchedQuotesPairsStartIsAt)
                  .trim()
              )
            ));

        const R32 = !right(str, i) && totalQuotesCount % 2 === 0;

        const R33 =
          str[idxOfAttrOpening - 2] &&
          str[idxOfAttrOpening - 1] === "=" &&
          charSuitableForHTMLAttrName(str[idxOfAttrOpening - 2]);

        const R34 = !ensureXIsNotPresentBeforeOneOfY(str, i + 1, "<", [
          `='`,
          `="`,
        ]);

        console.log(`784:`);
        console.log(`R1: ${`\u001b[${R1 ? 32 : 31}m${R1}\u001b[${39}m`}`);
        console.log(`R2: ${`\u001b[${R2 ? 32 : 31}m${R2}\u001b[${39}m`}`);
        console.log("(");
        console.log(`  R31: ${`\u001b[${R31 ? 32 : 31}m${R31}\u001b[${39}m`}`);
        console.log(`  R32: ${`\u001b[${R32 ? 32 : 31}m${R32}\u001b[${39}m`}`);
        console.log(`  R33: ${`\u001b[${R33 ? 32 : 31}m${R33}\u001b[${39}m`}`);
        console.log(`  R34: ${`\u001b[${R34 ? 32 : 31}m${R34}\u001b[${39}m`}`);
        console.log(")");

        return (
          // The match pair count total has not reach or exceed two
          // because we're talking about fully matched opening-closing quote
          // pairs.
          //
          // Let me remind you the question algorithm is answering:
          // Is quote at index y closing quote, considering opening is at x?
          //
          // Now, imagine we went past index y, reached index z, and up to
          // this point two sets of quotes were caught, as in:
          // <z bbb"c" ddd"e">
          //       ^        ^
          //     start     we're here, quote in question
          //
          // above, that's falsey result, it can't be fourth caught quote!
          R1 &&
          // besides that,

          // We need to account for mismatching quote pair. If a pair is
          // mismatching, "matchedPairs" might not get bumped to two thus
          // leading to a mistake.
          // When pair is mismatching, we can tell it's so because total count
          // minus matched count times two would be equal to two - two
          // quotes left unmatched.
          // Mind you, it's not more because algorithm would exit by the time
          // we would reach 4 let's say...

          // either there's not more than one pair:
          R2 &&
          // also, protection against cases like:
          // <z bbb"c" ddd'e>
          //       ^      ^
          //   start     suspected
          //
          // in case above, all the clauses up until now pass
          //
          // we need to check against "lastQuoteWasMatched" flag
          //
          //

          // or last pair was matched:
          (R31 ||
            // either this closing bracket is the last:
            R32 ||
            // or char before starting is equal and char before that
            // satisfies attribute name requirements
            R33 ||
            // or it seems like it's outside rather inside a tag:
            R34)
        );
      }

      // if the true attribute ending was met passing
      // past the suspected one, this means that
      // suspected one was a false guess. Correct ending
      // is at this index "i"

      if (
        str[i] === "=" &&
        matchRight(str, i, [`'`, `"`], {
          trimBeforeMatching: true,
          trimCharsBeforeMatching: ["="],
        })
      ) {
        console.log(
          `859 new attribute starts - ${`\u001b[${32}m${`RETURN TRUE`}\u001b[${39}m`}`
        );
        return true;
      }
    } else {
      console.log(`864 i <= isThisClosingIdx`);
      // this clause is meant to catch the suspected quotes
      // which don't belong to the tag, it's where quotes
      // in question are way beyond the actual attribute's ending.
      // For example, consider
      // <div class="c' id="x'>.</div>
      //            ^        ^
      //            |        |
      //         known      suspected
      //         opening    closing
      //
      // That equal-quote after "id" would trigger the alarm,
      // that is the clause below..

      // BUT mind the false positive:
      // <img src="xyz" alt="="/>
      //                    ^ ^
      //                    | |
      //      known opening/  \suspected closing
      //

      // by the way we use right() to jump over whitespace
      // for example, this will also catch:
      // <img src="xyz" alt="=   "/>
      //
      console.log(`889 *`);
      let firstNonWhitespaceCharOnTheLeft;
      if (str[i - 1] && str[i - 1].trim().length && str[i - 1] !== "=") {
        // happy path
        firstNonWhitespaceCharOnTheLeft = i - 1;
      } else {
        console.log(`895 traverse backwards`);
        for (let y = i; y--; ) {
          console.log(
            `898 ${`\u001b[${33}m${`str[${y}]`}\u001b[${39}m`} = ${JSON.stringify(
              str[y],
              null,
              4
            )}`
          );
          if (str[y].trim().length && str[y] !== "=") {
            firstNonWhitespaceCharOnTheLeft = y;
            console.log(
              `907 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`firstNonWhitespaceCharOnTheLeft`}\u001b[${39}m`} = ${JSON.stringify(
                firstNonWhitespaceCharOnTheLeft,
                null,
                4
              )}; BREAK`
            );
            break;
          }
        }
      }
      console.log(
        `918 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`firstNonWhitespaceCharOnTheLeft`}\u001b[${39}m`} = ${JSON.stringify(
          firstNonWhitespaceCharOnTheLeft,
          null,
          4
        )}`
      );

      if (
        str[i] === "=" &&
        matchRight(str, i, [`'`, `"`], {
          // ensure it's not tag ending on the right
          // before freaking out:
          cb: (char) => !`/>`.includes(char),
          trimBeforeMatching: true,
          trimCharsBeforeMatching: ["="],
        }) &&
        // ensure it's a character suitable for attribute
        // name on the left of equal (if it's a real
        // attribute name its name characters must pass
        // the charSuitableForHTMLAttrName()...)
        charSuitableForHTMLAttrName(str[firstNonWhitespaceCharOnTheLeft])
      ) {
        console.log(
          `941 new attribute starts - ${`\u001b[${31}m${`RETURN FALSE`}\u001b[${39}m`}`
        );
        return false;
      }
    }

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //                               BOTTOM
    //                               ██████
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    // catch quotes again - these clauses are specifically at the bottom
    // because they're depdendent on "lastCapturedChunk" which is calculated
    // after quote catching at the top
    if (
      `'"`.includes(str[i]) &&
      // if these quotes are after "isThisClosingIdx", a suspected closing
      i > isThisClosingIdx
    ) {
      // if these quotes are after "isThisClosingIdx", if there
      // was no chunk recorded after it until now,
      // ("lastChunkWasCapturedAfterSuspectedClosing" flag)
      // or there was but it's not recognised, that's falsey result
      console.log(
        `982 FIY, ${`\u001b[${33}m${`lastCapturedChunk`}\u001b[${39}m`} = ${JSON.stringify(
          lastCapturedChunk,
          null,
          4
        )}; lastChunkWasCapturedAfterSuspectedClosing=${lastChunkWasCapturedAfterSuspectedClosing}`
      );

      if (
        // if there was no chunk recorded after it until now
        !lastChunkWasCapturedAfterSuspectedClosing ||
        !lastCapturedChunk ||
        // or there was but lastCapturedChunk is not recognised
        !allHtmlAttribs.has(lastCapturedChunk)
      ) {
        console.log(
          `997 the slice "${str.slice(
            isThisClosingIdx,
            i
          )}" does not contain a new attribute name, ${`\u001b[${31}m${`RETURN FALSE`}\u001b[${39}m`}`
        );
        return false;
      }
      // ELSE - it does match, so it seems legit
      console.log(`1005 ${`\u001b[${32}m${`RETURN TRUE`}\u001b[${39}m`}`);
      return true;
    }

    // PART II of catch quotes
    if (`'"`.includes(str[i])) {
      lastQuoteAt = i;
      console.log(
        `1013 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`lastQuoteAt`}\u001b[${39}m`} = ${JSON.stringify(
          lastQuoteAt,
          null,
          4
        )}`
      );
    }

    // logging
    // -----------------------------------------------------------------------------
    console.log(
      `${`\u001b[${90}m${`██ chunkStartsAt: ${chunkStartsAt}`}\u001b[${39}m`}`
    );
    console.log(
      `${`\u001b[${90}m${`██ lastCapturedChunk: ${lastCapturedChunk}`}\u001b[${39}m`}`
    );
    console.log(
      `${`\u001b[${90}m${`██ lastChunkWasCapturedAfterSuspectedClosing: ${lastChunkWasCapturedAfterSuspectedClosing}`}\u001b[${39}m`}`
    );
    console.log(
      `${`\u001b[${90}m${`██ quotesCount: singles - ${quotesCount.get(
        `'`
      )};   doubles - ${quotesCount.get(
        `"`
      )};   matchedPairs - ${quotesCount.get(`matchedPairs`)}`}\u001b[${39}m`}`
    );
    console.log(
      `${`\u001b[${90}m${`██ totalQuotesCount - ${totalQuotesCount};   lastQuoteWasMatched - ${lastQuoteWasMatched}`}\u001b[${39}m`}`
    );
    console.log(
      `${`\u001b[${90}m${`██ lastMatchedQuotesPairsStartIsAt - ${lastMatchedQuotesPairsStartIsAt}; lastMatchedQuotesPairsEndIsAt - ${lastMatchedQuotesPairsEndIsAt}`}\u001b[${39}m`}`
    );
  }

  // if this point was reached and loop didn't exit...
  // default is false
  console.log(`1049 ${`\u001b[${31}m${`RETURN DEFAULT FALSE`}\u001b[${39}m`}`);
  return false;
}

export default isAttrClosing;