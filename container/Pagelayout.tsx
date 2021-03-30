import React, { FC, useState } from "react";
import Head from "next/head";
import { PagecontainerProps } from "../types";
import { Header, Footer, MailButton, Mailinglist } from "../components";
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
    const [mailModal, setMailModal] = useState(false);
    const pageTitle = product
        ? title
        : `Jenjen's Luxury hair & beauty | ${title}`;
    return (
        <div>
            <Head>
                <title>{pageTitle}</title>
                {metaTags
                    ? renderMetaTags(
                          metaTags.product.seo.concat(metaTags.site.favicon)
                      )
                    : null}
            </Head>
            <Header promoHandler={promoHandler} promoDisplay={promoDisplay} />
            <MailButton showMail={() => setMailModal(true)} />
            <Mailinglist show={mailModal} onHide={() => setMailModal(false)} />
            {children}
            <Whatsappchat />
            <Footer />
        </div>
    );
};

export default Pagelayout;
