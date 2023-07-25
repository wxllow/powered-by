export interface Platform {
    name: string;
    description: string;
    url?: string;
    signifies?: string[];
    headerRegex?: RegExp | RegExp[];
    scriptRegex?: RegExp | RegExp[];
    classRegex?: RegExp | RegExp[];
    metaRegex?: {
        [key: string]: RegExp;
    };
    type: string;
}
export declare const platforms: {
    [key: string]: Platform;
};
