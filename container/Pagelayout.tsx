import React, { FC, useEffect, useState } from 'react';
import Head from 'next/head';
import { useCart } from '../hooks';
import { PagecontainerProps } from '../types';
import { Header, Footer, CatalogTab, SidebarIcon } from '../components';
import { renderMetaTags } from 'react-datocms';
import Whatsappchat from '../components/ChatWidget/Whatsappchat';

const Pagelayout: FC<PagecontainerProps> = ({
    title,
    children,
    metaTags,
    productMetaTags,
    product,
    className,
}): JSX.Element => {
    const [promoDisplay, setPromoDisplay] = useState(true);
    const promoHandler = () => setPromoDisplay(false);
    const { persistCart } = useCart();

    useEffect(() => {
        persistCart();
    }, []);

    const pageTitle = product
        ? title
        : `Jenjen's Luxury hair & beauty | ${title}`;
    console.log('metaTags', metaTags);
    const { siteName, titleSuffix, fallbackSeo } = metaTags.site.seo;
    return (
        <div className={`pageLayout ${className}`}>
            <Head>
                <title>{pageTitle}</title>
                {renderMetaTags(metaTags.site.favicon)}
                {metaTags && (
                    <>
                        <meta
                            name='description'
                            content={fallbackSeo.description}
                        />
                        <meta
                            property='og:image'
                            content={fallbackSeo.image.url}
                            key='ogimage'
                        />
                        <meta
                            property='og:site_name'
                            content={siteName}
                            key='ogsitename'
                        />
                        <meta
                            property='og:title'
                            content={titleSuffix}
                            key='ogtitle'
                        />
                        <meta
                            property='og:description'
                            content={fallbackSeo.description}
                            key='ogdesc'
                        />
                    </>
                )}
                {productMetaTags &&
                    renderMetaTags(productMetaTags.site.product.seo)}
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
};

export default Pagelayout;
