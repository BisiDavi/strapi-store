const withPurgeCss = require("next-purgecss");

const config = withPurgeCss({
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
            domains: ["localhost","scontent-lga3-1.cdninstagram.com"],
        },
        config,
    };
} else if (process.env.NODE_ENV === "production") {
    module.exports = {
        images: {
            domains: ["res.cloudinary.com", "scontent-lga3-1.cdninstagram.com"],
        },
        config,
    };
}
