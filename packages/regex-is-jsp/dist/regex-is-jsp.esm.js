/**
 * regex-is-jsp
 * Regular expression for detecting JSP (Java Server Pages) code
 * Version: 1.1.1
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/regex-is-jsp/
 */

var version = "1.1.1";

const version$1 = version;

function isJSP() {
  return /<%|%>|<\s*jsp:|<\s*cms:|<\s*c:|\${\s*jsp/gi;
}

export { isJSP, version$1 as version };
