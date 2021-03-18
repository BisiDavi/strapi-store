import React from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { Pagelayout } from "../../container";
import { Image } from "react-datocms";
import { Loading, ProductDetail } from "../../components";
import { PRODUCTPAGE_QUERY, PRODUCT_SEO_QUERY, request } from "../../lib";
import ErrorPage from "next/error";

interface ProductpageProps {
    product: any;
    seoData: {};
}

const ProductPage: NextPage<ProductpageProps> = ({
    seoData,
    product,
}): JSX.Element => {
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
        <Pagelayout metaTags={seoData} title={product.title} product>
            <ProductDetail product={product} />
            <h1>Hello, I am product {product.title}</h1>
            <Image data={product.image.responsiveImage} />
        </Pagelayout>
    );
};

export async function getStaticProps({ params }) {
    const productArr = await request({
        query: PRODUCTPAGE_QUERY,
        variables: { slug: params.slug },
    });
    const seoData = await request({
        query: PRODUCT_SEO_QUERY,
    });

    const { allProducts } = productArr;
    return {
        props: {
            product: allProducts[0],
            seoData,
        },
    };
}

export async function getStaticPaths() {
    const products = await request({
        query: PRODUCTPAGE_QUERY,
    });

    const { allProducts } = products;
    return {
        paths: allProducts?.map((product) => `/products/${product.slug}`) || [],
        fallback: true,
    };
}

export default ProductPage;
