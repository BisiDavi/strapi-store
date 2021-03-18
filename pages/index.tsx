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
import { HOMEPAGE_QUERY, PRODUCT_SEO_QUERY, request } from "../lib";
import { renderMetaTags } from "react-datocms";

interface HomeProps {
    data: any;
    seoData: any;
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
                <Pagelayout
                    metaTags={renderMetaTags(seoData.product.seo)}
                    title="Welcome"
                >
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
        query: PRODUCT_SEO_QUERY,
    });

    return {
        props: {
            data,
            seoData,
        },
    };
}

export default Home;
