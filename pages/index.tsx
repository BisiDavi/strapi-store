import React, { useEffect } from "react";
import { NextPage } from "next";
import { useCart } from "../hooks";
import { Pagelayout } from "../container";
import {
    SelfiesBanner,
    HomepageSlider,
    Collections,
    ProductsList,
    Newsletter,
} from "../components";
import { HOMEPAGE_QUERY, SEO_QUERY, request } from "../lib";
import { HomeProps } from "../types";

const Home: NextPage<HomeProps> = ({ productData, seoData }): JSX.Element => {
    const { allProducts } = productData;
    const { addtoCartFromStorage } = useCart();
    useEffect(() => addtoCartFromStorage());
    return (
        <>
            <Pagelayout metaTags={seoData} title="Welcome">
                <div className="homepage position-relative">
                    <HomepageSlider />
                    <Collections />
                    <ProductsList products={allProducts} />
                    <Newsletter />
                    <SelfiesBanner />
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
