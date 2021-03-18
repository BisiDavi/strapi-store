import React from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";
import ErrorPage from "next/error";
import { Pagelayout } from "../../container";
import { Image } from "react-datocms";
import { request } from "../../lib/datocms";
import { Loading, ProductDetail } from "../../components";

interface ProductpageProps {
    product: any;
}

const PRODUCTPAGE_QUERY = `query Productpage($limit:IntType){
    allProducts(first:$limit) {
        description
        title
        price
        slug
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
const ProductPage: NextPage<ProductpageProps> = ({ product }): JSX.Element => {
    const router = useRouter();
    if (!router.isFallback && !product?.slug) {
        return <ErrorPage statusCode={404} />;
    }
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
            <Image data={product.image.responsiveImage} />
        </Pagelayout>
    );
};

export async function getStaticProps({ params, preview = false }) {
    const product = await request({
        query: PRODUCTPAGE_QUERY,
        variables: { limit: 10 },
    });

    return {
        props: {
            product,
        },
    };
}

export async function getStaticPaths() {
    const products = await request({
        query: PRODUCTPAGE_QUERY,
    });
    const { allProducts } = products;
    return {
        paths:
            [
                allProducts?.map((product) => {
                    params: {
                        slug: {
                            `/products/${product.slug}`;
                        }
                    }
                }),
            ] || [],
        fallback: true,
    };
}

export default ProductPage;
