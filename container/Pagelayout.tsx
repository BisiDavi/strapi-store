import React, { FC, useState } from "react";
import Head from "next/head";
import { PagecontainerProps } from "../types";
import { Header, Footer, MailButton, Mailinglist } from "../components";

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
                {metaTags}
            </Head>
            <Header promoHandler={promoHandler} promoDisplay={promoDisplay} />
            <MailButton showMail={() => setMailModal(true)} />
            <Mailinglist show={mailModal} onHide={() => setMailModal(false)} />
            {children}
            <Footer />
        </div>
    );
};

export default Pagelayout;
