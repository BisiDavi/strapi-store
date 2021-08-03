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
   
    return (
        <Pagelayout metaTags={seoData} title='Welcome'>
            <div data-cy="homepage" className='homepage position-relative'>
                <HomepageSlider data-cy="homepageSlider" />
                <Collections data-cy="collections" />
                <ProductsList products={allProducts} data-cy="productsList" />
                <Viewmore data-cy="viewmore" />
                <Newsletter data-cy="newsletter" />
                <InstaSlider data-cy="instaslider" InstagramMedia={instagramMedia?.data} />
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
