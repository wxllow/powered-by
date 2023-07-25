import { Platform, platforms } from './platforms';

export const parseHeaders = (headers: string[]): Platform[] => {
    // Return an array of platforms that match the headers
    return Object.values(platforms).filter((platform) => {
        const headerRegex = platform.headerRegex;

        if (!headerRegex) return false;

        // If the platform has a headerRegex, check if any of the headers match
        return headers.some((header) => {
            if (Array.isArray(headerRegex))
                return headerRegex.some((regex) =>
                    regex.test(header)
                );

            return headerRegex.test(header);
        });
    });
};
