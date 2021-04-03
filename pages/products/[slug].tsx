import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { ProductpageProps } from "../../types";
import { Pagelayout } from "../../container";
import { Loading, ProductDetail } from "../../components";
import {
    PRODUCTPAGE_QUERY,
    SEO_QUERY,
    request,
    HOMEPAGE_QUERY,
} from "../../lib";
import ErrorPage from "next/error";
import ProductSlider from "../../components/Slider/ProductSlider";
import PersistCart from "../../utils/persistCart";

const ProductPage: NextPage<ProductpageProps> = ({
    seoData,
    product,
    otherProducts,
}): JSX.Element => {
    const cartState = useSelector((state) => state.cart);
    const { products } = cartState;
    useEffect(() => {
        PersistCart(products);
    }, [cartState]);

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
    const other_Products = otherProducts.allProducts;
    console.log("product", product);
    return (
        <Pagelayout metaTags={seoData} title={product.title} product>
            <ProductDetail product={product} />
            <ProductSlider products={other_Products} />
        </Pagelayout>
    );
};

export async function getStaticProps({ params }) {
    const getproduct = await request({
        query: PRODUCTPAGE_QUERY,
        variables: { slug: params.slug },
    });
    const otherProducts = await request({
        query: HOMEPAGE_QUERY,
        variables: { limit: 8 },
    });
    const seoData = await request({
        query: SEO_QUERY,
    });

    const { allProducts } = getproduct;

    if (!getproduct) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            product: allProducts[0],
            otherProducts,
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
