import React from "react";
import { NextPage } from "next";
import { ProductsList } from "../../components";
import { Pagelayout } from "../../container";
import { FETCH_ALL_PRODUCT_QUERY, request } from "../../lib";

interface AllWigsProps {
    products: {
        allProducts: [];
    };
}

const AllWigs: NextPage<AllWigsProps> = ({ products }): JSX.Element => {
    const { allProducts } = products;
    console.log("all_products, all wigs", allProducts);
    return (
        <Pagelayout title="Get awesome wigs at an affordable price">
            <ProductsList products={allProducts} />
        </Pagelayout>
    );
};

export async function getStaticProps() {
    const graphqlRequest = await request({
        query: FETCH_ALL_PRODUCT_QUERY,
    });

    if (!graphqlRequest) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            products: graphqlRequest,
        },
    };
}

export default AllWigs;
