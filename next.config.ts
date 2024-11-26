import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    basePath: '/wedding-invitation',
    output: 'export',
    sassOptions: {
        silenceDeprecations: ['legacy-js-api'],
    },
};

export default nextConfig;
