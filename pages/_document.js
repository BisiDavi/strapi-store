import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel='preconnect'
                        href='https://fonts.googleapis.com'
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Dancing+Script&family=Khula&family=Lato:wght@300;400&family=Montserrat:wght@300&display=swap'
                        rel='stylesheet'
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1:wght@500&display=swap'
                        rel='stylesheet'
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Karla:wght@500&family=Open+Sans&display=swap'
                        rel='stylesheet'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='512x512'
                        href='/android-chrome-512x512.png'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='192x192'
                        href='/android-chrome-192x192.png'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='180x180'
                        href='/apple-touch-icon.png'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='32x32'
                        href='/favicon-32x32.png'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='16x16'
                        href='/favicon-16x16.png'
                    />
                    <link rel='manifest' href='/site.webmanifest' />
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
										window.dataLayer = window.dataLayer || [];
										function gtag(){dataLayer.push(arguments);}
										gtag('js', new Date());
										gtag('config', '${process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID}', {
											page_path: window.location.pathname,
										});
									`,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
