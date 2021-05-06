import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

console.log('EMAIL_SERVER', process.env.EMAIL_SERVER);
const options = {
    providers: [
        Providers.Email({
            server: {
                port: 465,
                host: 'smtppro.zoho.com',
                secure: true,
                auth: {
                    user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
                    pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
                },
                tls: {
                    rejectUnauthorized: false,
                },
            },
            from: process.env.NEXT_PUBLIC_EMAIL_FROM,
        }),
        Providers.Google({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
        }),
        Providers.Facebook({
            clientId: process.env.NEXT_PUBLIC_FACEBOOK_ID,
            clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_SECRET,
        }),
        Providers.Instagram({
            clientId: process.env.NEXT_PUBLIC_INSTAGRAM_ID,
            clientSecret: process.env.NEXT_PUBLIC_INSTAGRAM_SECRET,
        }),
    ],
    pages: {
        signIn: '/auth/signin',
    },
    site:process.env.NEXT_PUBLIC_NEXTAUTH_URL,
    database: process.env.NEXT_MONGODB_URI,
    secret: process.env.NEXT_PUBLIC_SECRET,
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60,
    },
    events: {},
    debug: true,
};

export default (req, res) => NextAuth(req, res, options);
