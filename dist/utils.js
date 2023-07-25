"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequestHeaders = void 0;
const getRequestHeaders = () => {
    // If running on browser, return no headers
    if (typeof window !== 'undefined')
        return [];
    // Imitate a browser request (Updated for Chromium 115 on 7/24/2021)
    return {
        'Sec-Ch-Ua': '"Chromium";v="115", "Not/A)Brand";v="99"',
        'Sec-Ch-Ua-Mobile': '?0',
        'Sec-Ch-Ua-Platform': '"Linux"',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-User': '?1',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
    };
};
exports.getRequestHeaders = getRequestHeaders;
