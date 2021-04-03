import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { Pagelayout } from "../container";
import {
    SelfiesBanner,
    Loading,
    HomepageSlider,
    Collections,
    ProductsList,
    Newsletter,
} from "../components";
import { HOMEPAGE_QUERY, SEO_QUERY, request } from "../lib";

interface HomeProps {
    productData: any;
    seoData: {};
}

const Home: NextPage<HomeProps> = ({ productData, seoData }): JSX.Element => {
    const [loader, setLoader] = useState(true);
    const { allProducts } = productData;
    useEffect(() => {
        const startLoader = setTimeout(() => setLoader(false), 2000);
        return () => {
            clearTimeout(startLoader);
        };
    }, []);
    return (
        <>
            {loader ? (
                <Loading />
            ) : (
                <Pagelayout metaTags={seoData} title="Welcome">
                    <div className="homepage position-relative">
                        <HomepageSlider />
                        <Collections />
                        <ProductsList products={allProducts} />
                        <Newsletter />
                        <SelfiesBanner />
                    </div>
                </Pagelayout>
            )}
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
