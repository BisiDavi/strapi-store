import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
    providers: [
        Providers.Email({
            server: process.env.NEXT_PUBLIC_EMAIL_SERVER,
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
        signIn: "/auth/signin",
    },
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
