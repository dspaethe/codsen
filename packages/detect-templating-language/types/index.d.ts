declare const version: string;
type Output = "Nunjucks" | "Jinja" | "JSP" | null;
declare function detectLang(str: string): {
  name: Output;
};

export { Output, detectLang, version };
