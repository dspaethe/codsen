// rule: attribute-validate-onfocus
// -----------------------------------------------------------------------------

import validateScript from "../../util/validateScript";

function attributeValidateOnfocus(context, ...originalOpts) {
  return {
    attribute(node) {
      console.log(
        `███████████████████████████████████████ attributeValidateOnfocus() ███████████████████████████████████████`
      );
      console.log(
        `013 ${`\u001b[${33}m${`originalOpts`}\u001b[${39}m`} = ${JSON.stringify(
          originalOpts,
          null,
          4
        )}`
      );
      console.log(
        `020 attributeValidateOnfocus(): node = ${JSON.stringify(
          node,
          null,
          4
        )}`
      );

      // preparing for the future:
      // const opts = { ...originalOpts };

      if (node.attribName === "onfocus") {
        // validate the parent
        if (
          ![
            "a",
            "area",
            "button",
            "input",
            "label",
            "select",
            "textarea",
          ].includes(node.parent.tagName)
        ) {
          context.report({
            ruleId: "attribute-validate-onfocus",
            idxFrom: node.attribStart,
            idxTo: node.attribEnd,
            message: `Tag "${node.parent.tagName}" can't have attribute "${node.attribName}".`,
            fix: null,
          });
        } else {
          // validate the script value
          const errorArr = validateScript(
            node.attribValueRaw,
            node.attribValueStartsAt
          );
          console.log(
            `057 attributeValidateOnfocus(): received errorArr = ${JSON.stringify(
              errorArr,
              null,
              4
            )}`
          );

          errorArr.forEach((errorObj) => {
            console.log(`065 attributeValidateOnfocus(): RAISE ERROR`);
            context.report({
              ...errorObj,
              ruleId: "attribute-validate-onfocus",
            });
          });
        }
      }
    },
  };
}

export default attributeValidateOnfocus;
