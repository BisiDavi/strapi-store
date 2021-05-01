import React, { useState, useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
import { Provider } from "react-redux";
import { Provider as AuthProvider } from "next-auth/client";
import NProgress from "nprogress";
import store from "../store/store";
import { Loading } from "../components";
import "bootstrap/dist/css/bootstrap.min.css";
import "nprogress/nprogress.css";
import "../styles/globals.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp = ({ Component, pageProps }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const start = () => {
            setLoading(true);
        };
        const end = () => {
            setLoading(false);
        };
        Router.events.on("routeChangeStart", start);
        Router.events.on("routeChangeComplete", end);
        Router.events.on("routeChangeError", end);
        return () => {
            Router.events.on("routeChangeStart", start);
            Router.events.on("routeChangeComplete", end);
            Router.events.on("routeChangeError", end);
        };
    }, []);
    return (
        <AuthProvider
            options={{ clientMaxAge: 0, keepAlive: 0 }}
            session={pageProps.session}
        >
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1:wght@500&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Karla:wght@500&family=Open+Sans&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
                    integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
                    crossOrigin="anonymous"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                >
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <script src="https://www.paypal.com/sdk/js?client-id=AcP5kjoPdLOpeNujacudxWPynh-ucYPekVXxWKdVk48JvhJErKVvVNo65BUrFNPETweN-zUz6Na5Y4aL"></script>
            </Head>
            {loading && <Loading />}

            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </AuthProvider>
    );
};

export default MyApp;
