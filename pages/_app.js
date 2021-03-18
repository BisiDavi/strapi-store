import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import { renderMetaTags } from "react-datocms";
import "nprogress/nprogress.css"; //styles of nprogress
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { SITE_FAVICON_QUERY, request } from "../lib";

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp = ({ Component, pageProps, data }) => {
    return (
        <>
            <Head>
                {renderMetaTags(data.site.favicon)}
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
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export async function getStaticProps() {
    const data = await request({
        query: SITE_FAVICON_QUERY,
    });
    return {
        props: {
            data,
        },
    };
}

export default MyApp;
