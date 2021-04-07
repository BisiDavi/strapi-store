import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import { useCart } from "../hooks";
import { Pagelayout } from "../container";
import {
    SelfiesBanner,
    HomepageSlider,
    Collections,
    ProductsList,
    Newsletter,
    InstagramSlider,
} from "../components";
import { HOMEPAGE_QUERY, SEO_QUERY, request } from "../lib";
import { HomeProps } from "../types";
import { GetInstagramAuthCode } from "../utils";
import axios from "axios";

const Home: NextPage<HomeProps> = ({
    productData,
    seoData,
    query,
}): JSX.Element => {
    console.log("query", query);
    const { allProducts } = productData;
    const [authToken, setAuthToken] = useState(null);

    const { addtoCartFromStorage } = useCart();
    useEffect(() => addtoCartFromStorage());

    useEffect(() => {
        if (window.location.search.includes("code")) {
            const authToken = GetInstagramAuthCode();
            setAuthToken(authToken);
        }
    }, []);
    const authCode = authToken !== null && authToken;
    const url = `${process.env.NEXT_PUBLIC_TOKEN_BASE_URL}/oauth/access_token/client_id=${process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID}/client_secret=${process.env.NEXT_PUBLIC_CLIENT_SECRET}/grant_type=authorization_code/redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}/code=${authCode}`;
    console.log("url", url);
    const getToken = async () => {
        await axios
            .post(url)
            .then((response) => console.log("response", response))
            .catch((error) => console.log("error", error));
    };
    if (authToken !== null) getToken();
    return (
        <>
            <Pagelayout metaTags={seoData} title="Welcome">
                <div className="homepage position-relative">
                    <HomepageSlider />
                    <Collections />
                    <ProductsList products={allProducts} />
                    <Newsletter />
                    <SelfiesBanner />
                    <InstagramSlider />
                </div>
            </Pagelayout>
        </>
    );
};

export async function getStaticProps() {
    const graphqlRequest = await request({
        query: HOMEPAGE_QUERY,
        variables: { limit: 8 },
    });
    const seoRequest = await request({
        query: SEO_QUERY,
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
        },
    };
}

export default Home;
