import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    basePath: '/draniki-wedding',
    output: 'export',
    sassOptions: {
        silenceDeprecations: ['legacy-js-api'],
    },
};

module.exports = nextConfig;
