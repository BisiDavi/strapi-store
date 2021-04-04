import React from "react";
import { NextPage } from "next";
import { ProductsList } from "../../components";
import { Pagelayout } from "../../container";
import { FETCH_ALL_PRODUCT_QUERY, request } from "../../lib";
import { AllWigsProps } from "../../types";

const AllWigs: NextPage<AllWigsProps> = ({ products }): JSX.Element => {
    const { allProducts } = products;
    return (
        <Pagelayout title="Get awesome wigs at an affordable price">
            <div className="allproducts">
                <ProductsList products={allProducts} />
                <style jsx>
                    {`
                        .allproducts {
                            margin: 20px;
                        }
                    `}
                </style>
            </div>
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
