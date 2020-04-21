// rule: bad-character-zero-width-joiner
// -----------------------------------------------------------------------------

// Catches raw character "ZERO WIDTH JOINER":
// https://www.fileformat.info/info/unicode/char/200d/index.htm

function badCharacterZeroWidthJoiner(context) {
  return {
    character({ chr, i }) {
      if (chr.charCodeAt(0) === 8205) {
        context.report({
          ruleId: "bad-character-zero-width-joiner",
          message: "Bad character - ZERO WIDTH JOINER.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]], // just delete it
          },
        });
      }
    },
  };
}

export default badCharacterZeroWidthJoiner;
