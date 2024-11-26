import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    output: 'export',
    reactStrictMode: true,
    sassOptions: {
        silenceDeprecations: ['legacy-js-api'],
    },
};

export default nextConfig;
