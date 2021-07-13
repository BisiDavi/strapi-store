import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { ProductpageProps } from '../../types';
import { Pagelayout } from '@containers/.';
import { Loading, ProductDetail } from '@components/.';
import {
    PRODUCTPAGE_QUERY,
    PRODUCT_SEO_QUERY,
    request,
    HOMEPAGE_QUERY,
} from '@lib/.';
import ProductSlider from '@components/Slider/ProductSlider';

export default function ProductPage({
    seoData,
    product,
    otherProducts,
}: ProductpageProps): JSX.Element {
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
    return (
        <Pagelayout productMetaTags={seoData} title={product.title} product>
            <ProductDetail product={product} />
            <ProductSlider products={other_Products} />
        </Pagelayout>
    );
}

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
        query: PRODUCT_SEO_QUERY,
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
