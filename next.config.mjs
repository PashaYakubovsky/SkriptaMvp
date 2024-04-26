/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            bodySizeLimit: "5mb",
        },
    },
    webpack: config => {
        config.module.rules.push({
            test: /\.(glsl|frag|vert)$/,
            exclude: /node_modules/,
            use: ["raw-loader", "glslify-loader"],
        });

        return config;
    },
};

export default nextConfig;
