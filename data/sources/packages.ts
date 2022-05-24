const all = [
    "all-named-html-entities",
    "array-group-str-omit-num-char",
    "array-includes-with-glob",
    "array-of-arrays-into-ast",
    "array-of-arrays-sort-by-col",
    "array-pull-all-with-glob",
    "arrayiffy-if-string",
    "ast-compare",
    "ast-contains-only-empty-space",
    "ast-deep-contains",
    "ast-delete-object",
    "ast-get-object",
    "ast-get-values-by-key",
    "ast-is-empty",
    "ast-loose-compare",
    "ast-monkey",
    "ast-monkey-traverse",
    "ast-monkey-traverse-with-lookahead",
    "ast-monkey-util",
    "bitbucket-slug",
    "bitsausage",
    "charcode-is-valid-xml-name-character",
    "check-types-mini",
    "chlu",
    "chlu-cli",
    "codsen",
    "codsen-parser",
    "codsen-tokenizer",
    "color-shorthand-hex-to-six-digit",
    "csv-sort",
    "csv-sort-cli",
    "csv-split-easy",
    "detect-is-it-html-or-xhtml",
    "detect-templating-language",
    "detergent",
    "easy-replace",
    "edit-package-json",
    "email-all-chars-within-ascii",
    "email-all-chars-within-ascii-cli",
    "email-comb",
    "email-homey",
    "email-remove-unused-css",
    "emlint",
    "eslint-on-airbnb-base-badge",
    "eslint-plugin-row-num",
    "eslint-plugin-test-num",
    "extract-search-index",
    "fol",
    "generate-atomic-css",
    "generate-atomic-css-cli",
    "gulp-email-remove-unused-css",
    "helga",
    "html-all-known-attributes",
    "html-crush",
    "html-entities-not-email-friendly",
    "html-img-alt",
    "html-table-patcher",
    "is-char-suitable-for-html-attr-name",
    "is-html-attribute-closing",
    "is-html-tag-opening",
    "is-language-code",
    "is-media-descriptor",
    "is-relative-uri",
    "js-row-num",
    "js-row-num-cli",
    "json-comb",
    "json-comb-core",
    "json-sort-cli",
    "json-variables",
    "lect",
    "lerna-clean-changelogs",
    "lerna-clean-changelogs-cli",
    "lerna-link-dep",
    "line-column-mini",
    "object-all-values-equal-to",
    "object-boolean-combinations",
    "object-delete-key",
    "object-fill-missing-keys",
    "object-flatten-all-arrays",
    "object-flatten-referencing",
    "object-merge-advanced",
    "object-no-new-keys",
    "object-set-all-values-to",
    "perf-ref",
    "posthtml-ast-compare",
    "posthtml-ast-contains-only-empty-space",
    "posthtml-ast-delete-key",
    "posthtml-ast-delete-object",
    "posthtml-ast-get-object",
    "posthtml-ast-get-values-by-key",
    "posthtml-ast-is-empty",
    "posthtml-ast-loose-compare",
    "posthtml-color-shorthand-hex-to-six-digit",
    "posthtml-email-remove-unused-css",
    "ranges-apply",
    "ranges-crop",
    "ranges-ent-decode",
    "ranges-invert",
    "ranges-is-index-within",
    "ranges-iterate",
    "ranges-merge",
    "ranges-offset",
    "ranges-process-outside",
    "ranges-push",
    "ranges-regex",
    "ranges-sort",
    "regex-empty-conditional-comments",
    "regex-is-jinja-nunjucks",
    "regex-is-jsp",
    "regex-jinja-specific",
    "str-indexes-of-plus",
    "string-apostrophes",
    "string-bionic-split",
    "string-character-is-astral-surrogate",
    "string-collapse-leading-whitespace",
    "string-collapse-white-space",
    "string-convert-indexes",
    "string-extract-class-names",
    "string-extract-sass-vars",
    "string-find-heads-tails",
    "string-find-malformed",
    "string-fix-broken-named-entities",
    "string-left-right",
    "string-match-left-right",
    "string-overlap-one-on-another",
    "string-process-comma-separated",
    "string-range-expander",
    "string-remove-duplicate-heads-tails",
    "string-remove-thousand-separators",
    "string-remove-widows",
    "string-replace-slices-array",
    "string-slices-array-push",
    "string-split-by-whitespace",
    "string-strip-html",
    "string-trim-spaces-only",
    "string-uglify",
    "string-unfancy",
    "stristri",
    "tap-parse-string-to-object",
    "test-mixer",
    "tsd-extract",
    "tsd-extract-noesm",
    "update-versions",
    "util-array-object-or-both",
    "util-nonempty"
] as const;
const current = [
    "all-named-html-entities",
    "array-group-str-omit-num-char",
    "array-includes-with-glob",
    "array-of-arrays-into-ast",
    "array-of-arrays-sort-by-col",
    "array-pull-all-with-glob",
    "arrayiffy-if-string",
    "ast-compare",
    "ast-contains-only-empty-space",
    "ast-deep-contains",
    "ast-delete-object",
    "ast-get-object",
    "ast-get-values-by-key",
    "ast-is-empty",
    "ast-loose-compare",
    "ast-monkey",
    "ast-monkey-traverse",
    "ast-monkey-traverse-with-lookahead",
    "ast-monkey-util",
    "bitbucket-slug",
    "charcode-is-valid-xml-name-character",
    "check-types-mini",
    "codsen",
    "codsen-parser",
    "codsen-tokenizer",
    "color-shorthand-hex-to-six-digit",
    "csv-sort",
    "csv-sort-cli",
    "csv-split-easy",
    "detect-is-it-html-or-xhtml",
    "detect-templating-language",
    "detergent",
    "easy-replace",
    "edit-package-json",
    "email-all-chars-within-ascii",
    "email-all-chars-within-ascii-cli",
    "email-comb",
    "email-homey",
    "emlint",
    "eslint-plugin-row-num",
    "eslint-plugin-test-num",
    "extract-search-index",
    "generate-atomic-css",
    "generate-atomic-css-cli",
    "gulp-email-remove-unused-css",
    "helga",
    "html-all-known-attributes",
    "html-crush",
    "html-entities-not-email-friendly",
    "html-img-alt",
    "html-table-patcher",
    "is-char-suitable-for-html-attr-name",
    "is-html-attribute-closing",
    "is-html-tag-opening",
    "is-language-code",
    "is-media-descriptor",
    "is-relative-uri",
    "js-row-num",
    "js-row-num-cli",
    "json-comb",
    "json-comb-core",
    "json-sort-cli",
    "json-variables",
    "lect",
    "lerna-clean-changelogs",
    "lerna-clean-changelogs-cli",
    "lerna-link-dep",
    "line-column-mini",
    "object-all-values-equal-to",
    "object-boolean-combinations",
    "object-delete-key",
    "object-fill-missing-keys",
    "object-flatten-all-arrays",
    "object-flatten-referencing",
    "object-merge-advanced",
    "object-no-new-keys",
    "object-set-all-values-to",
    "perf-ref",
    "ranges-apply",
    "ranges-crop",
    "ranges-ent-decode",
    "ranges-invert",
    "ranges-is-index-within",
    "ranges-iterate",
    "ranges-merge",
    "ranges-offset",
    "ranges-process-outside",
    "ranges-push",
    "ranges-regex",
    "ranges-sort",
    "regex-empty-conditional-comments",
    "regex-is-jinja-nunjucks",
    "regex-is-jsp",
    "regex-jinja-specific",
    "str-indexes-of-plus",
    "string-apostrophes",
    "string-bionic-split",
    "string-character-is-astral-surrogate",
    "string-collapse-leading-whitespace",
    "string-collapse-white-space",
    "string-convert-indexes",
    "string-extract-class-names",
    "string-extract-sass-vars",
    "string-find-heads-tails",
    "string-find-malformed",
    "string-fix-broken-named-entities",
    "string-left-right",
    "string-match-left-right",
    "string-overlap-one-on-another",
    "string-process-comma-separated",
    "string-range-expander",
    "string-remove-duplicate-heads-tails",
    "string-remove-thousand-separators",
    "string-remove-widows",
    "string-split-by-whitespace",
    "string-strip-html",
    "string-trim-spaces-only",
    "string-uglify",
    "string-unfancy",
    "stristri",
    "tap-parse-string-to-object",
    "test-mixer",
    "tsd-extract",
    "tsd-extract-noesm",
    "update-versions",
    "util-array-object-or-both",
    "util-nonempty"
] as const;
const cli = [
    "codsen",
    "csv-sort-cli",
    "email-all-chars-within-ascii-cli",
    "email-homey",
    "emlint",
    "generate-atomic-css-cli",
    "js-row-num-cli",
    "json-comb",
    "json-sort-cli",
    "lerna-clean-changelogs-cli",
    "lerna-link-dep",
    "update-versions"
] as const;
const deprecated = [
    "bitsausage",
    "chlu",
    "chlu-cli",
    "email-remove-unused-css",
    "eslint-on-airbnb-base-badge",
    "fol",
    "posthtml-ast-compare",
    "posthtml-ast-contains-only-empty-space",
    "posthtml-ast-delete-key",
    "posthtml-ast-delete-object",
    "posthtml-ast-get-object",
    "posthtml-ast-get-values-by-key",
    "posthtml-ast-is-empty",
    "posthtml-ast-loose-compare",
    "posthtml-color-shorthand-hex-to-six-digit",
    "posthtml-email-remove-unused-css",
    "string-replace-slices-array",
    "string-slices-array-push"
] as const;
const programs = [
    "all-named-html-entities",
    "array-group-str-omit-num-char",
    "array-includes-with-glob",
    "array-of-arrays-into-ast",
    "array-of-arrays-sort-by-col",
    "array-pull-all-with-glob",
    "arrayiffy-if-string",
    "ast-compare",
    "ast-contains-only-empty-space",
    "ast-deep-contains",
    "ast-delete-object",
    "ast-get-object",
    "ast-get-values-by-key",
    "ast-is-empty",
    "ast-loose-compare",
    "ast-monkey",
    "ast-monkey-traverse",
    "ast-monkey-traverse-with-lookahead",
    "ast-monkey-util",
    "bitbucket-slug",
    "charcode-is-valid-xml-name-character",
    "check-types-mini",
    "codsen-parser",
    "codsen-tokenizer",
    "color-shorthand-hex-to-six-digit",
    "csv-sort",
    "csv-split-easy",
    "detect-is-it-html-or-xhtml",
    "detect-templating-language",
    "detergent",
    "easy-replace",
    "edit-package-json",
    "email-all-chars-within-ascii",
    "email-comb",
    "emlint",
    "extract-search-index",
    "generate-atomic-css",
    "helga",
    "html-all-known-attributes",
    "html-crush",
    "html-entities-not-email-friendly",
    "html-img-alt",
    "html-table-patcher",
    "is-char-suitable-for-html-attr-name",
    "is-html-attribute-closing",
    "is-html-tag-opening",
    "is-language-code",
    "is-media-descriptor",
    "is-relative-uri",
    "js-row-num",
    "json-comb-core",
    "json-variables",
    "lerna-clean-changelogs",
    "line-column-mini",
    "object-all-values-equal-to",
    "object-boolean-combinations",
    "object-delete-key",
    "object-fill-missing-keys",
    "object-flatten-all-arrays",
    "object-flatten-referencing",
    "object-merge-advanced",
    "object-no-new-keys",
    "object-set-all-values-to",
    "ranges-apply",
    "ranges-crop",
    "ranges-ent-decode",
    "ranges-invert",
    "ranges-is-index-within",
    "ranges-iterate",
    "ranges-merge",
    "ranges-offset",
    "ranges-process-outside",
    "ranges-push",
    "ranges-regex",
    "ranges-sort",
    "regex-empty-conditional-comments",
    "regex-is-jinja-nunjucks",
    "regex-is-jsp",
    "regex-jinja-specific",
    "str-indexes-of-plus",
    "string-apostrophes",
    "string-bionic-split",
    "string-character-is-astral-surrogate",
    "string-collapse-leading-whitespace",
    "string-collapse-white-space",
    "string-convert-indexes",
    "string-extract-class-names",
    "string-extract-sass-vars",
    "string-find-heads-tails",
    "string-find-malformed",
    "string-fix-broken-named-entities",
    "string-left-right",
    "string-match-left-right",
    "string-overlap-one-on-another",
    "string-process-comma-separated",
    "string-range-expander",
    "string-remove-duplicate-heads-tails",
    "string-remove-thousand-separators",
    "string-remove-widows",
    "string-split-by-whitespace",
    "string-strip-html",
    "string-trim-spaces-only",
    "string-uglify",
    "string-unfancy",
    "stristri",
    "tap-parse-string-to-object",
    "test-mixer",
    "tsd-extract",
    "util-array-object-or-both",
    "util-nonempty"
] as const;
const special = [
    "gulp-email-remove-unused-css"
] as const;
const script = [
    "all-named-html-entities",
    "array-group-str-omit-num-char",
    "array-includes-with-glob",
    "array-of-arrays-into-ast",
    "array-of-arrays-sort-by-col",
    "array-pull-all-with-glob",
    "arrayiffy-if-string",
    "ast-compare",
    "ast-contains-only-empty-space",
    "ast-deep-contains",
    "ast-delete-object",
    "ast-get-object",
    "ast-get-values-by-key",
    "ast-is-empty",
    "ast-loose-compare",
    "ast-monkey",
    "ast-monkey-traverse",
    "ast-monkey-traverse-with-lookahead",
    "ast-monkey-util",
    "bitbucket-slug",
    "charcode-is-valid-xml-name-character",
    "check-types-mini",
    "codsen-parser",
    "codsen-tokenizer",
    "color-shorthand-hex-to-six-digit",
    "csv-sort",
    "csv-split-easy",
    "detect-is-it-html-or-xhtml",
    "detect-templating-language",
    "detergent",
    "easy-replace",
    "edit-package-json",
    "email-all-chars-within-ascii",
    "email-comb",
    "extract-search-index",
    "generate-atomic-css",
    "helga",
    "html-all-known-attributes",
    "html-crush",
    "html-entities-not-email-friendly",
    "html-img-alt",
    "html-table-patcher",
    "is-char-suitable-for-html-attr-name",
    "is-html-attribute-closing",
    "is-html-tag-opening",
    "is-language-code",
    "is-media-descriptor",
    "is-relative-uri",
    "js-row-num",
    "json-comb-core",
    "json-variables",
    "lerna-clean-changelogs",
    "line-column-mini",
    "object-all-values-equal-to",
    "object-boolean-combinations",
    "object-delete-key",
    "object-fill-missing-keys",
    "object-flatten-all-arrays",
    "object-flatten-referencing",
    "object-merge-advanced",
    "object-no-new-keys",
    "object-set-all-values-to",
    "ranges-apply",
    "ranges-crop",
    "ranges-ent-decode",
    "ranges-invert",
    "ranges-is-index-within",
    "ranges-iterate",
    "ranges-merge",
    "ranges-offset",
    "ranges-process-outside",
    "ranges-push",
    "ranges-regex",
    "ranges-sort",
    "regex-empty-conditional-comments",
    "regex-is-jinja-nunjucks",
    "regex-is-jsp",
    "regex-jinja-specific",
    "str-indexes-of-plus",
    "string-apostrophes",
    "string-bionic-split",
    "string-character-is-astral-surrogate",
    "string-collapse-leading-whitespace",
    "string-collapse-white-space",
    "string-convert-indexes",
    "string-extract-class-names",
    "string-extract-sass-vars",
    "string-find-heads-tails",
    "string-find-malformed",
    "string-fix-broken-named-entities",
    "string-left-right",
    "string-match-left-right",
    "string-overlap-one-on-another",
    "string-process-comma-separated",
    "string-range-expander",
    "string-remove-duplicate-heads-tails",
    "string-remove-thousand-separators",
    "string-remove-widows",
    "string-split-by-whitespace",
    "string-strip-html",
    "string-trim-spaces-only",
    "string-uglify",
    "string-unfancy",
    "stristri",
    "test-mixer",
    "tsd-extract",
    "util-array-object-or-both",
    "util-nonempty"
] as const;
const packagesOutsideMonorepo = [
    "eslint-plugin-row-num",
    "eslint-plugin-test-num",
    "lect",
    "perf-ref",
    "tsd-extract-noesm"
] as const;

export type Package = typeof all[number];

export const packages = {
    all,
    current,
    cli,
    deprecated,
    programs,
    special,
    script,
    packagesOutsideMonorepo,
    totalPackageCount: 145,
    currentPackagesCount: 127,
    cliCount: 12,
    programsCount: 110,
    specialCount: 1,
    scriptCount: 108,
    packagesOutsideMonorepoCount: 5,
};
