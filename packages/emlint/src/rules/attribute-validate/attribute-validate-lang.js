// rule: attribute-validate-lang
// -----------------------------------------------------------------------------

import checkForWhitespace from "../../util/checkForWhitespace";
import isLangCode from "is-language-code";

function attributeValidateLang(context, ...opts) {
  return {
    attribute: function(node) {
      console.log(
        `███████████████████████████████████████ attributeValidateLang() ███████████████████████████████████████`
      );
      console.log(
        `014 ${`\u001b[${33}m${`opts`}\u001b[${39}m`} = ${JSON.stringify(
          opts,
          null,
          4
        )}`
      );
      console.log(
        `021 attributeValidateLang(): node = ${JSON.stringify(node, null, 4)}`
      );

      if (node.attribName === "lang") {
        // validate the parent
        if (
          ["base", "head", "html", "meta", "script", "style", "title"].includes(
            node.parent.tagName
          )
        ) {
          context.report({
            ruleId: "attribute-validate-lang",
            idxFrom: node.attribStart,
            idxTo: node.attribEnd,
            message: `Tag "${node.parent.tagName}" can't have this attribute.`,
            fix: null
          });
        }

        // beware, the charStart and charEnd are not offset, their "zero" is
        // start of an attribute's value, so if you use them, you need to
        // offset to the true index, you must add "node.attribValueStartAt" value
        const { charStart, charEnd, errorArr } = checkForWhitespace(
          node.attribValue,
          node.attribValueStartAt
        );
        console.log(
          `048 ${`\u001b[${33}m${`charStart`}\u001b[${39}m`} = ${JSON.stringify(
            charStart,
            null,
            4
          )}; ${`\u001b[${33}m${`charEnd`}\u001b[${39}m`} = ${JSON.stringify(
            charEnd,
            null,
            4
          )}`
        );
        console.log(
          `059 ${`\u001b[${33}m${`errorArr`}\u001b[${39}m`} = ${JSON.stringify(
            errorArr,
            null,
            4
          )}`
        );
        // validate using "ietf-language-tag-regex" from npm:
        const { message } = isLangCode(
          node.attribValue.slice(charStart, charEnd)
        );
        console.log(
          `070 attributeValidateLang(): retrieved ${`\u001b[${33}m${`message`}\u001b[${39}m`} = ${JSON.stringify(
            message,
            null,
            4
          )}`
        );
        if (message) {
          errorArr.push({
            idxFrom: node.attribValueStartAt + charStart,
            idxTo: node.attribValueStartAt + charEnd,
            message,
            fix: null
          });
        }

        errorArr.forEach(errorObj => {
          console.log(`086 RAISE ERROR`);
          context.report(
            Object.assign({}, errorObj, {
              ruleId: "attribute-validate-lang"
            })
          );
        });
      }
    }
  };
}

export default attributeValidateLang;