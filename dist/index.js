"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategorized = exports.get = void 0;
const axios_1 = require("axios");
const parseHeaders_1 = require("./parseHeaders");
const parseSrc_1 = require("./parseSrc");
const utils_1 = require("./utils");
async function get(url) {
    const response = await axios_1.default.get(url, {
        headers: (0, utils_1.getRequestHeaders)(),
    });
    // Parse the headers ()
    const headers = Object.keys(response.headers).map((key) => {
        return `${key}: ${response.headers[key]}`;
    });
    // Parse the headers
    const headerPlatforms = (0, parseHeaders_1.parseHeaders)(headers);
    // Parse the src
    const data = response.data;
    // Make sure the data is a string (and hopefully HTML)
    if (typeof data !== 'string' || data.length < 1)
        return headerPlatforms;
    const srcPlatforms = (0, parseSrc_1.parseSrc)(response.data);
    // Combine the platforms
    const platforms = [...headerPlatforms, ...srcPlatforms];
    // Remove duplicates
    return platforms.filter((platform, index) => platforms.findIndex((p) => p.name === platform.name) ===
        index);
}
exports.get = get;
async function getCategorized(url) {
    // Returns platforms sorted by type
    const platforms = await get(url);
    // Sort platforms by type
    const categorizedPlatforms = {};
    platforms.forEach((platform) => {
        if (!categorizedPlatforms[platform.type])
            categorizedPlatforms[platform.type] = [];
        categorizedPlatforms[platform.type].push(platform);
    });
    return categorizedPlatforms;
}
exports.getCategorized = getCategorized;
