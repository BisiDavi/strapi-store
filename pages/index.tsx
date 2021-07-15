import { useEffect } from 'react';
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
} from '@lib/.';
import { Viewmore } from '@components/Button';
import { HomeProps } from '../types';
import { setNairaRateAction } from '@store/actions/currencyAction';

const InstaSlider = dynamic(() => import('../components/Slider/instaSlider'));

export default function Home({
    productData,
    seoData,
    currencyExchangeRate,
}: HomeProps): JSX.Element {
    const { allProducts } = productData;
    const { instagramMedia } = useInstagram();
    const { dispatch } = useRedux();

    const nairaRate = currencyExchangeRate.dollarToNairaRate.rate;
    console.log('currencyExchangeRate', nairaRate);

    useEffect(() => {
        dispatch(setNairaRateAction(nairaRate));
    }, [nairaRate, dispatch]);

    return (
        <>
            <Pagelayout metaTags={seoData} title='Welcome'>
                <div className='homepage position-relative'>
                    <HomepageSlider />
                    <Collections />
                    <ProductsList products={allProducts} />
                    <Viewmore />
                    <Newsletter />
                    {instagramMedia !== null ? (
                        <InstaSlider InstagramMedia={instagramMedia?.data} />
                    ) : (
                        'loading'
                    )}
                </div>
            </Pagelayout>
        </>
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
