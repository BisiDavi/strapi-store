if (process.env.NODE_ENV === "development") {
    module.exports = {
        images: {
            domains: ["localhost"],
        },
    };
} else if (process.env.NODE_ENV === "production") {
    module.exports = {
        images: {
            domains: ["res.cloudinary.com"],
        },
    };
}
