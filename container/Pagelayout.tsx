import React, { FC, useEffect, useState } from "react";
import Head from "next/head";
import { useSession } from "next-auth/client";
import { useCart } from "../hooks";
import { toast, ToastContainer } from "react-toastify";
import { PagecontainerProps } from "../types";
import {
    Header,
    Footer,
    MailButton,
    Mailinglist,
    CatalogTab,
    SelectCurrencyDropdown,
    Loading,
} from "../components";
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
    const { persistCart } = useCart();
    const [session, loading] = useSession();

    useEffect(() => {
        persistCart();
    }, []);
    useEffect(() => {
        !session && logoutNotification();
    }, [session]);

    const logoutNotification = () => toast.error("You're logged out!.");

    const pageTitle = product
        ? title
        : `Jenjen's Luxury hair & beauty | ${title}`;

    loading && <Loading />;
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
            <ToastContainer
                position="top-left"
                closeOnClick
                draggable
                pauseOnHover
            />
            <MailButton showMail={() => setMailModal(true)} />
            <Mailinglist show={mailModal} onHide={() => setMailModal(false)} />
            {children}
            <Whatsappchat />
            <SelectCurrencyDropdown />
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
