const withPurgeCss = require("next-purgecss");

const cssConfig = withPurgeCss({
    purgeCssPaths: ["pages/**/*", "components/**/*"],
    purgeCss: {
        whitelist: () => ["player"],
        whitelistPatterns: () => [/Toastify/, /.*nprogress.*/],
        rejected: true,
    },
    purgeCssEnabled: ({ dev, isServer }) => true,
});

if (process.env.NODE_ENV === "development") {
    module.exports = {
        images: {
            domains: ["localhost", "scontent-lga3-1.cdninstagram.com"],
        },
        webpack: (config, { isServer }) => {
            if (!isServer) {
                config.node = {
                    fs: "empty",
                };
            }
            return config;
        },
        cssConfig,
        async rewrites() {
            return [
                {
                    source: `/api/instagram-access/:token`,
                    destination: `${process.env.NEXT_PUBLIC_TOKEN_BASE_URL}/oauth/access_token/client_id=${process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID}/client_secret=${process.env.NEXT_PUBLIC_CLIENT_SECRET}/grant_type=authorization_code/redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}/code=:token`,
                },
            ];
        },
    };
} else if (process.env.NODE_ENV === "production") {
    module.exports = {
        images: {
            domains: ["res.cloudinary.com", "scontent-lga3-1.cdninstagram.com"],
        },
        cssConfig,
        webpack: (config, { isServer }) => {
            if (!isServer) {
                config.node = {
                    fs: "empty",
                };
            }
            return config;
        },
        async rewrites() {
            return [
                {
                    source: `/api/instagram-access/:token`,
                    destination: `${process.env.NEXT_PUBLIC_TOKEN_BASE_URL}/oauth/access_token/client_id=${process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID}/client_secret=${process.env.NEXT_PUBLIC_CLIENT_SECRET}/grant_type=authorization_code/redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}/code=:token`,
                },
            ];
        },
    };
}
