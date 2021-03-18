import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { Pagelayout } from "../container";
import { request } from "../lib/datocms";
import {
    SelfiesBanner,
    Loading,
    HomepageSlider,
    Collections,
    ProductsList,
    Newsletter,
} from "../components";

interface HomeProps {
    data: any;
}

const HOMEPAGE_QUERY = `query Homepage($limit:IntType){
    allProducts(first:$limit) {
        description
        title
        price
        productTag
        id
        image {
            responsiveImage {
                srcSet
                webpSrcSet
                sizes
                src
                width
                height
                aspectRatio
                alt
                title
                base64
                bgColor
            }
        }
    }
}`;

const Home: NextPage<HomeProps> = ({ data }): JSX.Element => {
    console.log("data", data);
    const [loader, setLoader] = useState(true);
    const { allProducts } = data;
    console.log("allProducts", allProducts);
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
                <Pagelayout title="Welcome">
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
        variables: { limit: 10 },
    });

    return {
        props: {
            data,
        },
    };
}

export default Home;
