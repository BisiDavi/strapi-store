import React from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { Pagelayout } from "../../container";
import { Image } from "react-datocms";
import { request } from "../../lib/datocms";
import { Loading, ProductDetail } from "../../components";

interface ProductpageProps {
    data: any;
}

const PRODUCTPAGE_QUERY = `query Homepage($limit:IntType){
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
}`;

const ProductPage: NextPage<ProductpageProps> = ({ data }): JSX.Element => {
    const router = useRouter();
    if (router.isFallback) {
        return (
            <div>
                <Loading />
            </div>
        );
    }
    console.log("slug product", data);

    return (
        <Pagelayout title={data.title} product>
            {/* <ProductDetail product={product} /> */}
            <h1>Hello, I am product {data.title}</h1>
            <Image data={data.image.responsiveImage} />
        </Pagelayout>
    );
};

export async function getStaticProps() {
    const data = await request({
        query: PRODUCTPAGE_QUERY,
    });

    return {
        props: {
            data,
        },
    };
}

export default ProductPage;
