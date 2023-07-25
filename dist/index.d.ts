import { Platform } from './platforms';
export declare function get(url: string): Promise<Platform[]>;
export declare function getCategorized(url: string): Promise<{
    [key: string]: Platform[];
}>;
