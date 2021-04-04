const withPurgeCss = require("next-purgecss");

const config = withPurgeCss({
    purgeCssPaths: ["pages/**/*", "components/**/*", "styles/**"],
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
            domains: ["localhost"],
        },
        config,
    };
} else if (process.env.NODE_ENV === "production") {
    module.exports = {
        images: {
            domains: ["res.cloudinary.com"],
        },
        config,
    };
}
