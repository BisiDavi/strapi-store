const withPWA = require('next-pwa');

module.exports = withPWA({
    images: {
        domains: [
            'localhost',
            'res.cloudinary.com',
            'scontent-lga3-1.cdninstagram.com',
            'video.cdninstagram.com',
            'scontent.cdninstagram.com',
        ],
    },
    pwa: {
        dest: 'public',
    },
});
