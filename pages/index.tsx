import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import { Pagelayout } from '../container';
import {
    HomepageSlider,
    Collections,
    ProductsList,
    Newsletter,
    InstagramSlider,
    Loading,
} from '../components';
import { HOMEPAGE_QUERY, HOMEPAGE_SEO_QUERY, request } from '../lib';
import { HomeProps } from '../types';
import { GetInstagramAuthCode } from '../utils';
import { connectToDatabase } from '../middlewares/database';
import { Viewmore } from '../components/Button';
import { axiosInstance } from '../axios/axiosInstance';

const Home: NextPage<HomeProps> = ({
    productData,
    seoData,
    isConnected,
}): JSX.Element => {
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

    async function getToken() {
        await axiosInstance
            .post(`/instagram/${authCode}`)
            .then((response) => {
                console.log('response', response);
            })
            .catch((error) => console.log('error', error));
    }

    if (authToken !== null) getToken();

    return (
        <>
            <Pagelayout metaTags={seoData} title='Welcome'>
                <div className='homepage position-relative'>
                    <HomepageSlider />
                    {authCode === false && <Loading />}
                    <Collections />
                    <ProductsList products={allProducts} />
                    <Viewmore />
                    <Newsletter />
                    <InstagramSlider />
                </div>
            </Pagelayout>
        </>
    );
};

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

export default Home;
