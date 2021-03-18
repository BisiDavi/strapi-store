import React from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { Pagelayout } from "../../container";
import { getProducts, getProduct } from "../../utils/api";
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

export default ProductPage;

export async function getStaticProps({ params }) {
    const product = await getProduct(params.slug);
    return {
        props: {
            product,
        },
    };
}

export async function getStaticPaths() {
    const products = await getProducts();
    return {
        paths: products.map((_product) => {
            return {
                params: {
                    slug: _product.slug,
                },
            };
        }),
        fallback: true,
    };
}
