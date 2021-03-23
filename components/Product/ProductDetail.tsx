import React, { FC } from "react";
import { Button } from "../Button";
import { Image, ResponsiveImageType } from "react-datocms";
import styles from "../../styles/ProductDetail.module.css";

interface ProductDetailProps {
    product: {
        title: string;
        price: number;
        image: {
            responsiveImage: ResponsiveImageType;
        };
    };
}

const ProductDetail: FC<ProductDetailProps> = ({ product }): JSX.Element => {
    return (
        <div className="product">
            <div className="product-image">
                <Image
                    className={styles.product}
                    data={product.image.responsiveImage}
                />
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
            <style jsx>{`
                .product {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                }
            `}</style>
        </div>
    );
};

export default ProductDetail;
