// rule: attribute-validate-defer
// -----------------------------------------------------------------------------

import validateVoid from "../../util/validateVoid";

function attributeValidateDefer(context, ...originalOpts) {
  return {
    attribute(node) {
      console.log(
        `███████████████████████████████████████ attributeValidateDefer() ███████████████████████████████████████`
      );
      console.log(
        `013 ${`\u001b[${33}m${`originalOpts`}\u001b[${39}m`} = ${JSON.stringify(
          originalOpts,
          null,
          4
        )}`
      );
      console.log(
        `020 attributeValidateDefer(): node = ${JSON.stringify(node, null, 4)}`
      );

      const opts = {
        xhtml: false,
      };

      // normalize the given opts (array) and turn them
      // into a plain object
      if (
        Array.isArray(originalOpts) &&
        originalOpts.length &&
        originalOpts.some((val) => val.toLowerCase() === "xhtml")
      ) {
        opts.xhtml = true;
      }

      const errorArr = [];

      if (node.attribName === "defer") {
        // validate the parent
        if (node.parent.tagName !== "script") {
          errorArr.push({
            idxFrom: node.attribStart,
            idxTo: node.attribEnd,
            message: `Tag "${node.parent.tagName}" can't have attribute "${node.attribName}".`,
            fix: null,
          });
        } else {
          // validate the value (or absence thereof)
          validateVoid(node, context, errorArr, {
            ...opts,
            enforceSiblingAttributes: null,
          });
        }

        // finally, report gathered errors:
        if (errorArr.length) {
          errorArr.forEach((errorObj) => {
            console.log(`059 RAISE ERROR`);
            context.report({ ...errorObj, ruleId: "attribute-validate-defer" });
          });
        }
      }
    },
  };
}

export default attributeValidateDefer;
