import { Platform, platforms } from './platforms';
import { JSDOM } from 'jsdom';

export const parseSrc = (html: string): Platform[] => {
    const doc = new JSDOM(html).window.document;

    const scripts = Array.from(doc.querySelectorAll('script'));

    // Check <script> tags for srcs
    const srcs = scripts.map((script) => script.src);

    // Return an array of platforms that match the srcs
    const scriptPlatforms = Object.values(platforms).filter(
        (platform) => {
            const srcRegex = platform.scriptRegex;

            if (!srcRegex) return false;

            // If the platform has a srcRegex, check if any of the srcs match
            return srcs.some((src) => {
                if (Array.isArray(srcRegex))
                    return srcRegex.some((regex) => regex.test(src));

                return srcRegex.test(src);
            });
        }
    );

    // Check elements for classes
    const elements = Array.from(doc.querySelectorAll('*'));

    // Get all the classes
    const classes = elements.map((element) => element.className);

    // Return an array of platforms that match the classes
    const classPlatforms = Object.values(platforms).filter(
        (platform) => {
            const classRegex = platform.classRegex;

            if (!classRegex) return false;

            // If the platform has a classRegex, check if any of the classes match
            return classes.some((className) => {
                if (Array.isArray(classRegex))
                    return classRegex.some((regex) =>
                        regex.test(className)
                    );

                return classRegex.test(className);
            });
        }
    );

    // Parse the meta tags
    const metaTags = Array.from(doc.querySelectorAll('meta'));

    // Return an array of platforms that match the meta tags
    const metaPlatforms = Object.values(platforms).filter(
        (platform) => {
            const metaRegex = platform.metaRegex;

            if (!metaRegex) return false;

            // If the platform has a metaRegex, check if any of the meta tags match
            return metaTags.some((metaTag) => {
                const metaName = metaTag.getAttribute('name');

                if (!metaName) return false;

                const regex = metaRegex[metaName];

                if (!regex) return false;

                return regex.test(metaTag.getAttribute('content'));
            });
        }
    );

    // Combine the platforms
    const plats = [
        ...scriptPlatforms,
        ...classPlatforms,
        ...metaPlatforms,
    ];

    // Remove duplicates
    return plats.filter(
        (platform, index) =>
            plats.findIndex((p) => p.name === platform.name) === index
    );
};
