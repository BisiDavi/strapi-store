import React from "react";
import { ProductsList } from "..";

const OtherProducts = ({ products }) => {
    return (
        <div className="OtherProducts">
            <h4>You may also like</h4>
            <span>
                <ProductsList products={products} />
            </span>
        </div>
    );
};

export default OtherProducts;
