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
import connectToDatabase from "../middlewares/database";

const Home: NextPage<HomeProps> = ({
    productData,
    seoData,
    isConnected,
}): JSX.Element => {
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
    console.log("auth token", authToken);
    const authCode = authToken !== null && authToken;
    isConnected && console.log("You are connected to mongoDB!");
    const getToken = async () =>
        await axios
            .post(`/api/instagram/${authCode}`)
            .then((response) => console.log("response", response))
            .catch((error) => console.log("error", error));

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

export async function getServerSideProps(context) {
    const { client } = await connectToDatabase();
    const isConnected = await client.isConnected();
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
            isConnected,
        },
    };
}

export default Home;
