import { axiosInstance } from '@axios/axiosInstance';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
    providers: [
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
        Providers.Email({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM,
        }),
    ],
    pages: {
        signIn: '/auth/signin',
        verifyRequest: '/auth/verify-request',
    },
    callbacks: {
        async signIn(user, account, profile) {
            window.localStorage.setItem('callbackSignin user', user);
            window.localStorage.setItem('callbackSignin account', account);
            axiosInstance.post('welcome-notification', user?.email);
            console.log('signIn callback', user, account, profile);
        },
    },
    database: process.env.DATABASE_URL,
    secret: process.env.NEXT_PUBLIC_SECRET,
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60,
    },
    events: {},
    debug: true,
};

export default function CustomNextAuth(req, res) {
    return NextAuth(req, res, options);
}
