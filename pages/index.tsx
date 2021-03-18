import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { Pagelayout } from "../container";
import { getProducts } from "../utils/api";
import {
    SelfiesBanner,
    Loading,
    HomepageSlider,
    Collections,
    ProductsList,
    Newsletter,
} from "../components";

interface HomeProps {
    products: [];
}

const Home: NextPage<HomeProps> = ({ products }): JSX.Element => {
    console.log("products", products);
    const [loader, setLoader] = useState(true);

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
                        <ProductsList products={products} />
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
    const products = await getProducts();
    return {
        props: {
            products,
        },
    };
}

export default Home;
