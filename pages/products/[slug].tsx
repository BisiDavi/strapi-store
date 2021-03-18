import React from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { Pagelayout } from "../../container";
import { Image } from "react-datocms";
import { request } from "../../lib/datocms";
import { Loading, ProductDetail } from "../../components";

interface ProductpageProps {
    product: {
        title: string;
        price: number;
        image: {};
    };
}

const ProductPage: NextPage<ProductpageProps> = ({ product }): JSX.Element => {
    const router = useRouter();
    if (router.isFallback) {
        return (
            <div>
                <Loading />
            </div>
        );
    }
    console.log("slug product", product);
    return (
        <Pagelayout title={product.title} product>
            <ProductDetail product={product} />
            <h1>Hello, I am product {product.title}</h1>
        </Pagelayout>
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

export default ProductPage;
