/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { renderMetaTags } from 'react-datocms';
import { useCart } from '@hooks/.';
import { useSession } from 'next-auth/client';
import { PagecontainerProps } from '../types';
import { Header, Footer, CatalogTab, SidebarIcon } from '@components/.';
import Whatsappchat from '@components/ChatWidget/Whatsappchat';

export default function Pagelayout({
    title,
    children,
    metaTags,
    productMetaTags,
    product,
    className,
}: PagecontainerProps): JSX.Element {
    const [promoDisplay, setPromoDisplay] = useState(true);
    const promoHandler = () => setPromoDisplay(false);
    const { persistCart } = useCart();

    useEffect(() => {
        persistCart();
    }, []);

    const pageTitle = product
        ? title
        : `Jenjen's Luxury hair & beauty | ${title}`;

    return (
        <div className={`pageLayout ${className}`}>
            <Head>
                <title>{pageTitle}</title>
                {metaTags && (
                    <>
                        {/* <meta
                            name='description'
                            content={metaTags.fallbackSeo.description}
                        />
                        <meta
                            property='og:image'
                            content={metaTags.fallbackSeo.image.url}
                            key='ogimage'
                        /> */}
                        <meta
                            property='og:site_name'
                            content={metaTags.siteName}
                            key='ogsitename'
                        />
                        <meta
                            property='og:title'
                            content={metaTags.titleSuffix}
                            key='ogtitle'
                        />
                        {/* <meta
                            property='og:description'
                            content={metaTags.fallbackSeo.description}
                            key='ogdesc'
                        /> */}
                    </>
                )}
                {productMetaTags && renderMetaTags(productMetaTags.product.seo)}
            </Head>

            <Header promoHandler={promoHandler} promoDisplay={promoDisplay} />
            <CatalogTab />
            <SidebarIcon />
            {children}
            <Whatsappchat />
            <Footer />

            <style jsx>
                {`
                    .pageLayout {
                        height: 100%;
                        width: 100%;
                        position: relative;
                    }
                `}
            </style>
        </div>
    );
}
