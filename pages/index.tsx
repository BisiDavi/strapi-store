import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pagelayout } from '../container';
import {
    HomepageSlider,
    Collections,
    ProductsList,
    Newsletter,
    InstagramSlider,
} from '../components';
import { HOMEPAGE_QUERY, HOMEPAGE_SEO_QUERY, request } from '../lib';
import { HomeProps } from '../types';
import { GetInstagramAuthCode } from '../utils';
import { connectToDatabase } from '../middlewares/database';
import { Viewmore } from '../components/Button';

export default function Home({
    productData,
    seoData,
    isConnected,
}: HomeProps): JSX.Element {
    const { allProducts } = productData;
    const [authCode, setAuthCode] = useState(null);
    const [instagramToken, setInstagramToken] = useState({
        shortTokenDetails: null,
        longTokenDetails: null,
    });

    useEffect(() => {
        if (window.location.search.includes('code')) {
            const authCode = GetInstagramAuthCode();
            setAuthCode(authCode);
        }
    }, []);

    isConnected && console.log('You are connected to mongoDB!');

    console.log('authCode', authCode);

    async function getShortLivedToken() {
        await axios
            .post(`/api/instagram/${authCode}`)
            .then((response) => {
                console.log('response getShortLivedToken', response.data);
                setInstagramToken({
                    ...instagramToken,
                    shortTokenDetails: response.data,
                });
            })
            .catch((error) => console.error('error', error));
    }

    async function getLongLivedToken() {
        console.log(
            'instagramToken?.shortTokenDetails?.access_token',
            instagramToken?.shortTokenDetails?.access_token,
        );
        await axios
            .get(
                `api/instagram/${instagramToken?.shortTokenDetails?.access_token}`,
            )
            .then((response) => {
                console.log('response getLongLivedToken', response);
                setInstagramToken({
                    ...instagramToken,
                    longTokenDetails: response.data,
                });
            })
            .catch((error) => console.error('error', error));
    }

    console.log('longTokenDetails', instagramToken);

    useEffect(() => {
        if (authCode !== null) {
            getShortLivedToken();
        }
    }, [authCode]);

    useEffect(() => {
        if (instagramToken.shortTokenDetails !== null) {
            getLongLivedToken();
        }
    }, [instagramToken]);

    return (
        <>
            <Pagelayout metaTags={seoData} title='Welcome'>
                <div className='homepage position-relative'>
                    <HomepageSlider />
                    <Collections />
                    <ProductsList products={allProducts} />
                    <Viewmore />
                    <Newsletter />
                    <InstagramSlider />
                </div>
            </Pagelayout>
        </>
    );
}

export async function getServerSideProps() {
    const { client } = await connectToDatabase();
    const isConnected = await client.isConnected();
    const graphqlRequest = await request({
        query: HOMEPAGE_QUERY,
        variables: { limit: 12 },
    });
    const seoRequest = await request({
        query: HOMEPAGE_SEO_QUERY,
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
            isConnected,
        },
    };
}
