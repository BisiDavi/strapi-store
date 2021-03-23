import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import WhatsAppWidget from "react-whatsapp-widget";
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
import "react-whatsapp-widget/dist/index.css";

interface HomeProps {
    data: any;
    seoData: {};
}

const Home: NextPage<HomeProps> = ({ data, seoData }): JSX.Element => {
    const [loader, setLoader] = useState(true);
    const { allProducts } = data;
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
                    <div className="homepage">
                        <HomepageSlider />
                        <Collections />
                        <ProductsList products={allProducts} />
                        <Newsletter />
                        <SelfiesBanner />
                        <div className="chat">
                            <WhatsAppWidget
                                phoneNumber="2347031653411"
                                textReplyTime="Typically replies within a day"
                                companyName="JenJen's Luxury Wig"
                            />
                        </div>
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
