import { useEffect, useState } from 'react';
import { SiteClient } from 'datocms-client';
import dynamic from 'next/dynamic';
import { Pagelayout } from '@containers/.';
import { useInstagram, useRedux } from '@hooks/.';
import {
    HomepageSlider,
    Collections,
    ProductsList,
    Newsletter,
} from '@components/.';
import {
    HOMEPAGE_QUERY,
    HOMEPAGE_SEO_QUERY,
    request,
    DOLLAR_TO_NAIRA_RATE_QUERY,
    updateProductAfterSales,
} from '@lib/.';
import { Viewmore } from '@components/Button';
import { HomeProps } from '../types';
import { setCurrencyAction } from '@store/actions/currencyAction';
import getUserIP from '@utils/getUserIP';
import { IPAction } from '@store/actions/IPActions';

const InstaSlider = dynamic(() => import('../components/Slider/instaSlider'));

export default function Home({
    productData,
    seoData,
    currencyExchangeRate,
}: HomeProps): JSX.Element {
    const { allProducts } = productData;
    const { instagramMedia } = useInstagram();
    const { dispatch, SelectState } = useRedux();
    const userIP = SelectState('IP');

    const nairaRate = Number(currencyExchangeRate.dollarToNairaRate.rate);

    useEffect(() => {
        if (userIP.country === null) {
            getUserIP().then((response) => {
                dispatch(IPAction(response.country));
                if (response.country === 'NG') {
                    dispatch(
                        setCurrencyAction({
                            name: 'Naira',
                            value: nairaRate,
                        }),
                    );
                } else {
                    dispatch(setCurrencyAction({ name: 'Dollar', value: 1 }));
                }
            });
        }
    }, [dispatch, userIP.country, nairaRate]);

    //useEffect(() => {
    //    updateProductAfterSales('48403041', 0, 'sold');
    //}, []);

    return (
        <Pagelayout metaTags={seoData} title='Welcome'>
            <div className='homepage position-relative'>
                <HomepageSlider />
                <Collections />
                <ProductsList products={allProducts} />
                <Viewmore />
                <Newsletter />
                <InstaSlider InstagramMedia={instagramMedia?.data} />
            </div>
        </Pagelayout>
    );
}

export async function getServerSideProps() {
    const graphqlRequest = await request({
        query: HOMEPAGE_QUERY,
        variables: { limit: 12 },
    });
    const seoRequest = await request({
        query: HOMEPAGE_SEO_QUERY,
    });

    const dollarToNairaRateRequest = await request({
        query: DOLLAR_TO_NAIRA_RATE_QUERY,
    });

    if (!graphqlRequest) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            productData: graphqlRequest,
            seoData: seoRequest,
            currencyExchangeRate: dollarToNairaRateRequest,
        },
    };
}
