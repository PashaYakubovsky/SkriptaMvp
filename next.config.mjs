/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            bodySizeLimit: "5mb",
        },
    },
    ignoreBuildErrors: true,
};

export default nextConfig;
