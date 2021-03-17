import React, { FC } from "react";
import { Button } from "../Button";
import ProductDetailImage from "./ProductDetailImage";

interface ProductDetailProps {
    product: {
        title: string;
        price: number;
        image: {};
    };
}

const ProductDetail: FC<ProductDetailProps> = ({ product }): JSX.Element => {
    return (
        <div className="product">
            <div className="product-image">
                {/* <ProductDetailImage image={product.image} /> */}
            </div>
            <div className="product_column_1">
                <h1>{product.title}</h1>
                <h4>${product.price}</h4>
                <p>
                    Tax included. <span>Shipping</span> calculated at checkout.
                </p>
                <Button
                    bgColor="black"
                    width="200px"
                    height="40px"
                    text="Add to cart"
                />
            </div>
            <div className="product_column_2"></div>
        </div>
    );
};

export default ProductDetail;
