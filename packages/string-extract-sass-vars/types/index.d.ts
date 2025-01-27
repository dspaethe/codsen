declare const version: string;
interface UnknownValueObj {
  [key: string]: any;
}
interface Opts {
  throwIfEmpty?: boolean;
  cb?: null | ((varValue: string) => any);
}
declare const defaults: Opts;
declare function extractVars(
  str: string,
  opts?: Partial<Opts>
): UnknownValueObj;

export { Opts, UnknownValueObj, defaults, extractVars, version };
