import React, { FC, useEffect, useState } from "react";
import Head from "next/head";
import { useCart } from "../hooks";
import { PagecontainerProps } from "../types";
import { Header, Footer, CatalogTab, SidebarIcon } from "../components";
import { renderMetaTags } from "react-datocms";
import Whatsappchat from "../components/ChatWidget/Whatsappchat";

const Pagelayout: FC<PagecontainerProps> = ({
    title,
    children,
    metaTags,
    product,
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

    return (
        <div className="pageLayout">
            <Head>
                <title>{pageTitle}</title>
                {metaTags
                    ? renderMetaTags(
                          metaTags.product.seo.concat(metaTags.site.favicon)
                      )
                    : null}
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
