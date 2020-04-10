function charSuitableForHTMLAttrName(char) {
  return (
    typeof char === "string" &&
    //
    // lowercase letters, indexes 97 - 122:
    ((char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123) ||
      // uppercase letters, indexes 65 - 90
      (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91) ||
      // digits 0 - 9, indexes 48 - 57
      (char.charCodeAt(0) > 47 && char.charCodeAt(0) < 58) ||
      char === ":" ||
      char === "-")
  );
}

export default charSuitableForHTMLAttrName;