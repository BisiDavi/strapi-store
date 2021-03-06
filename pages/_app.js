/* eslint-disable react-hooks/exhaustive-deps */
import { PersistGate } from 'redux-persist/integration/react';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { Provider } from 'react-redux';
import { Provider as AuthProvider } from 'next-auth/client';
import NProgress from 'nprogress';
import store, { persistor } from '@store/store';
import * as ga from '@lib/ga';
import { Loading } from '@components/.';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'nprogress/nprogress.css';
import '@styles/globals.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleRouteChange = (url) => {
            let title = window.document.title;
            ga.pageview(url, title);
        };
        Router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            Router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [Router.events]);

    useEffect(() => {
        const start = () => {
            setLoading(true);
        };
        const end = () => {
            setLoading(false);
        };
        Router.events.on('routeChangeStart', start);
        Router.events.on('routeChangeComplete', end);
        Router.events.on('routeChangeError', end);
        return () => {
            Router.events.on('routeChangeStart', start);
            Router.events.on('routeChangeComplete', end);
            Router.events.on('routeChangeError', end);
        };
    }, []);
		
    return (
        <AuthProvider
            options={{ clientMaxAge: 0, keepAlive: 0 }}
            session={pageProps.session}
        >
            <Head>
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link
                    rel='stylesheet'
                    href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css'
                    integrity='sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=='
                    crossOrigin='anonymous'
                />
            </Head>
            {loading && <Loading />}

            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Component {...pageProps} />
                </PersistGate>
            </Provider>
        </AuthProvider>
    );
};

export default MyApp;
