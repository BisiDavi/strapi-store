import React, { useState, useEffect } from 'react';
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
import {
    axiosInstagramAPIInstance,
    axiosInstance,
} from '../axios/axiosInstance';

export default function Home({
    productData,
    seoData,
    isConnected,
}: HomeProps): JSX.Element {
    const { allProducts } = productData;
    const [authToken, setAuthToken] = useState(null);

    useEffect(() => {
        if (window.location.search.includes('code')) {
            const authToken = GetInstagramAuthCode();
            setAuthToken(authToken);
        }
    }, []);

    const authCode = authToken !== null && authToken;
    isConnected && console.log('You are connected to mongoDB!');

    console.log('authCode', authCode);

    async function getAccessToken() {
        await axiosInstagramAPIInstance
            .post('/oauth/access_token', {
                client_id: process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID,
                client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
                grant_type: 'authorization_code',
                redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
                code: authCode,
            })
            .then((response) =>
                console.log('response getAccessToken', response),
            )
            .catch((error) => console.error('error', error));
    }

    useEffect(() => {
        if (authToken !== null) {
            getAccessToken();
        }
    }, [authToken]);

    async function getToken() {
        await axiosInstance
            .post(`/instagram/store-token`, {
                token: authCode,
            })
            .then((response) => {
                console.log('response', response);
            })
            .catch((error) => console.log('error', error));
    }

    authToken !== null && getToken();

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
