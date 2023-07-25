"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseHeaders = void 0;
const platforms_1 = require("./platforms");
const parseHeaders = (headers) => {
    // Return an array of platforms that match the headers
    return Object.values(platforms_1.platforms).filter((platform) => {
        const headerRegex = platform.headerRegex;
        if (!headerRegex)
            return false;
        // If the platform has a headerRegex, check if any of the headers match
        return headers.some((header) => {
            if (Array.isArray(headerRegex))
                return headerRegex.some((regex) => regex.test(header));
            return headerRegex.test(header);
        });
    });
};
exports.parseHeaders = parseHeaders;
