import { Ranges as Ranges$1 } from 'ranges-push';

declare type Range = [from: number, to: number] | [from: number, to: number, whatToInsert: string | null | undefined];
declare type Ranges = Range[] | null;

declare const version: string;

interface Tag {
    attributes: string[];
    lastClosingBracketAt: number;
    lastOpeningBracketAt: number;
    slashPresent: number;
    leftOuterWhitespace: number;
    onlyPlausible: boolean;
    nameStarts: number;
    nameContainsLetters: boolean;
    nameEnds: number;
    name: string;
}
interface CbObj {
    tag: Tag;
    deleteFrom: null | number;
    deleteTo: null | number;
    insert: null | string;
    rangesArr: Ranges$1;
    proposedReturn: Range | null;
}
interface Opts {
    ignoreTags: string[];
    onlyStripTags: string[];
    stripTogetherWithTheirContents: string[];
    skipHtmlDecoding: boolean;
    trimOnlySpaces: boolean;
    dumpLinkHrefsNearby: {
        enabled: boolean;
        putOnNewLine: boolean;
        wrapHeads: string;
        wrapTails: string;
    };
    cb: null | ((cbObj: CbObj) => void);
}
declare const defaults: {
    ignoreTags: never[];
    onlyStripTags: never[];
    stripTogetherWithTheirContents: string[];
    skipHtmlDecoding: boolean;
    trimOnlySpaces: boolean;
    dumpLinkHrefsNearby: {
        enabled: boolean;
        putOnNewLine: boolean;
        wrapHeads: string;
        wrapTails: string;
    };
    cb: null;
};
interface Res {
    log: {
        timeTakenInMilliseconds: number;
    };
    result: string;
    ranges: Ranges;
    allTagLocations: [number, number][];
    filteredTagLocations: [number, number][];
}
declare function stripHtml(str: string, originalOpts?: Partial<Opts>): Res;

export { CbObj, defaults, stripHtml, version };
