import axios, { AxiosHeaders } from 'axios';
import { parseHeaders } from './parseHeaders';
import { parseSrc } from './parseSrc';
import { getRequestHeaders } from './utils';
import { Platform } from './platforms';

export async function get(url: string) {
    const response = await axios.get(url, {
        headers: getRequestHeaders() as unknown as AxiosHeaders,
    });

    // Parse the headers ()
    const headers = Object.keys(response.headers).map((key) => {
        return `${key}: ${response.headers[key]}`;
    });

    // Parse the headers
    const headerPlatforms = parseHeaders(headers);

    // Parse the src
    const data = response.data;

    // Make sure the data is a string (and hopefully HTML)
    if (typeof data !== 'string' || data.length < 1)
        return headerPlatforms;

    const srcPlatforms = parseSrc(response.data);

    // Combine the platforms
    const platforms = [...headerPlatforms, ...srcPlatforms];

    // Remove duplicates
    return platforms.filter(
        (platform, index) =>
            platforms.findIndex((p) => p.name === platform.name) ===
            index
    );
}

export async function getCategorized(url: string) {
    // Returns platforms sorted by type
    const platforms = await get(url);

    // Sort platforms by type
    const categorizedPlatforms: {
        [key: string]: Platform[];
    } = {};

    platforms.forEach((platform) => {
        if (!categorizedPlatforms[platform.type])
            categorizedPlatforms[platform.type] = [];

        categorizedPlatforms[platform.type].push(platform);
    });

    return categorizedPlatforms;
}
