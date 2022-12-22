declare const version: string;
interface Obj {
  [key: string]: any;
}
declare function uglifyArr(arr: string[]): string[];
declare function uglifyById(refArr: string[], idNum: number): string;

export { Obj, uglifyArr, uglifyById, version };
