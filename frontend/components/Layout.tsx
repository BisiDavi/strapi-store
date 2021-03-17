import React, { FC, useState } from "react";
import Head from "next/head";
import { PagecontainerProps } from "../types";
import { Header, Footer } from ".";

const Pagelayout: FC<PagecontainerProps> = ({
    title,
    children,
}): JSX.Element => {
    const [promoDisplay, setPromoDisplay] = useState(true);
    const promoHandler = () => setPromoDisplay(false);

    return (
        <div>
            <Head>
                <title>Jenjen's Luxury hair & beauty | {title}</title>
            </Head>
            <Header promoHandler={promoHandler} promoDisplay={promoDisplay} />
            {children}
            <Footer />
        </div>
    );
};

export default Pagelayout;
