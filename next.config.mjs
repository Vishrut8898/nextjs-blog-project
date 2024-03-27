/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
            {
                protocol: 'http',
                hostname: 'localhost:3000',
            }
        ]
    }
};

export default nextConfig;
