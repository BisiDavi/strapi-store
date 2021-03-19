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
    data: any;
    seoData: {};
}

const Home: NextPage<HomeProps> = ({ data, seoData }): JSX.Element => {
    const [loader, setLoader] = useState(true);
    const { allProducts } = data;
    useEffect(() => {
        const startLoader = setTimeout(() => setLoader(false), 1000);
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
                    <div className="homepage">
                        <HomepageSlider />
                        <Collections />
                        <ProductsList products={allProducts} />
                        <Newsletter />
                        <SelfiesBanner />
                        <style jsx>
                            {`
                                .homepage {
                                    position: relative;
                                }
                            `}
                        </style>
                    </div>
                </Pagelayout>
            )}
        </>
    );
};

export async function getStaticProps() {
    const data = await request({
        query: HOMEPAGE_QUERY,
        variables: { limit: 8 },
    });
    const seoData = await request({
        query: SEO_QUERY,
    });
    return {
        props: {
            data,
            seoData,
        },
    };
}

export default Home;
