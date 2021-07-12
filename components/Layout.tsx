import  { FC, useState } from 'react';
import Head from 'next/head';
import { PagecontainerProps } from '../types';
import { Header, Footer } from '.';

export default function Pagelayout({
    title,
    children,
}: PagecontainerProps): JSX.Element {
    const [promoDisplay, setPromoDisplay] = useState(true);
    function promoHandler() {
        return setPromoDisplay(false);
    }

    return (
        <div>
            <Head>
                <title>Jenjen&#39;s Luxury hair & beauty | {title}</title>
            </Head>
            <Header promoHandler={promoHandler} promoDisplay={promoDisplay} />
            {children}
            <Footer />
        </div>
    );
}
