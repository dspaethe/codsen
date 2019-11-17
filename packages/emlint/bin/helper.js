#!/usr/bin/env node

// this script bakes a JSON file in src/rules/all-bad-character.json
// from all files list present in src/rules/bad-character/
// -----------------------------------------------------------------------------

const fs = require("fs");
const path = require("path");

// bake the "bad-character" rules list JSON:

const allBadCharacterRules = fs
  .readdirSync(path.resolve("src/rules/bad-character/"))
  .filter(val => val.startsWith("bad-character"))
  .map(val => path.parse(val).name);

fs.writeFileSync(
  path.resolve("src/rules/all-bad-character.json"),
  JSON.stringify(allBadCharacterRules.sort(), null, 2)
);

// bake the "tag" rules list JSON:

const allTagRules = fs
  .readdirSync(path.resolve("src/rules/tag/"))
  .filter(val => val.startsWith("tag-"))
  .map(val => path.parse(val).name);

fs.writeFileSync(
  path.resolve("src/rules/all-tag.json"),
  JSON.stringify(allTagRules.sort(), null, 2)
);
