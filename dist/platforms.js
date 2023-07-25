"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.platforms = void 0;
const types = [
    'library',
    'framework',
    'cms',
    'hosting',
    'cdn',
    'proxy',
    'language',
    'other',
];
exports.platforms = {
    vercel: {
        name: 'Vercel',
        description: 'Vercel is a cloud platform for static sites and Serverless Functions.',
        url: 'https://vercel.com',
        headerRegex: [/Server: Vercel/i, /x-vercel-id: */i],
        type: 'hosting',
    },
    nextjs: {
        name: 'Next.js',
        description: 'Next.js is a React framework for web applications with built-in server-side rendering and static site generation.',
        url: 'https://nextjs.org',
        scriptRegex: /\/_next\/static\/chunks\//,
        type: 'framework',
    },
    cloudflare: {
        name: 'Cloudflare',
        description: 'Cloudflare is a web infrastructure and website security company, providing content delivery network services, DDoS mitigation, Internet security, and distributed domain name server services.',
        url: 'https://cloudflare.com',
        headerRegex: /Server: cloudflare/i,
        type: 'cdn',
    },
    nginx: {
        name: 'NGINX',
        description: 'NGINX is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.',
        url: 'https://nginx.com',
        headerRegex: /Server: nginx/i,
        type: 'proxy',
    },
    sveltekit: {
        name: 'SvelteKit',
        description: 'SvelteKit is a framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing.',
        url: 'https://kit.svelte.dev',
        scriptRegex: /\/_app\/\w+\.js/,
        headerRegex: /x-sveltekit*/i,
        type: 'framework',
    },
    chakraui: {
        name: 'Chakra UI',
        description: 'Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.',
        url: 'https://chakra-ui.com',
        classRegex: /chakra-*/i,
        type: 'library',
    },
    php: {
        name: 'PHP',
        description: 'PHP is a general-purpose scripting language especially suited to web development.',
        url: 'https://php.net',
        headerRegex: /x-powered-by: PHP/i,
        type: 'language',
    },
    react: {
        name: 'React',
        description: 'React is a JavaScript library for building user interfaces.',
        url: 'https://reactjs.org',
        type: 'framework',
        // TODO: Add a regex for React
    },
    wordpress: {
        name: 'WordPress',
        description: 'WordPress is a free and open-source content management system written in PHP and paired with a MySQL or MariaDB database.',
        url: 'https://wordpress.org',
        metaRegex: {
            generator: /WordPress*/i,
        },
        type: 'cms',
    },
    elementor: {
        name: 'Elementor',
        description: 'Elementor is a WordPress page builder plugin for WordPress.',
        url: 'https://elementor.com',
        metaRegex: {
            generator: /Elementor*/i,
        },
        type: 'library',
    },
    googlesitekit: {
        name: 'Google Site Kit',
        description: 'Google Site Kit is a WordPress plugin that provides insights about how people find and use your site, how to improve, and monetize your content.',
        url: 'https://sitekit.withgoogle.com',
        metaRegex: {
            generator: /Site Kit by Google*/i,
        },
        type: 'library',
    },
};
