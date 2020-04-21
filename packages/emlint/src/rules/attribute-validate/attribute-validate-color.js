// rule: attribute-validate-color
// -----------------------------------------------------------------------------

import validateColor from "../../util/validateColor";

function attributeValidateColor(context, ...opts) {
  return {
    attribute(node) {
      console.log(
        `███████████████████████████████████████ attributeValidateColor() ███████████████████████████████████████`
      );
      console.log(
        `013 ${`\u001b[${33}m${`opts`}\u001b[${39}m`} = ${JSON.stringify(
          opts,
          null,
          4
        )}`
      );
      // console.log(
      //   `015 attributeValidateColor(): node = ${JSON.stringify(node, null, 4)}`
      // );

      if (node.attribName === "color") {
        // validate the parent
        if (!["basefont", "font"].includes(node.parent.tagName)) {
          context.report({
            ruleId: "attribute-validate-color",
            idxFrom: node.attribStart,
            idxTo: node.attribEnd,
            message: `Tag "${node.parent.tagName}" can't have attribute "${node.attribName}".`,
            fix: null,
          });
        }

        const errorArr = validateColor(
          node.attribValueRaw,
          node.attribValueStartsAt,
          {
            namedCssLevel1OK: true,
            namedCssLevel2PlusOK: true,
            hexThreeOK: false,
            hexFourOK: false,
            hexSixOK: true,
            hexEightOK: false,
          }
        );
        console.log(
          `048 received errorArr = ${JSON.stringify(errorArr, null, 4)}`
        );

        errorArr.forEach((errorObj) => {
          console.log(`052 RAISE ERROR`);
          context.report({ ...errorObj, ruleId: "attribute-validate-color" });
        });
      }
    },
  };
}

export default attributeValidateColor;
