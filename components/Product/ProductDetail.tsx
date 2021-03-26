import React, { FC } from "react";
import { Button, DropdownButton } from "../Button";
import { Image, ResponsiveImageType } from "react-datocms";
import styles from "../../styles/ProductDetail.module.css";
import Link from "next/link";
import { Select } from "../Form";

interface ProductDetailProps {
    product: {
        title: string;
        price: number;
        image: {
            responsiveImage: ResponsiveImageType;
        };
        description: string;
    };
}

const ProductDetail: FC<ProductDetailProps> = ({ product }): JSX.Element => {
    const rushOrderDropdown = {
        title: "--Choose Rush Order--",
        options: ["--Choose Rush Order--", "Rush My Orders (+$55.00)"],
    };
    return (
        <div className="product">
            <div className="product-image">
                <Image
                    className={styles.product}
                    data={product.image.responsiveImage}
                />
            </div>
            <div className="product_column_1 flex-column">
                <h1>{product.title}</h1>
                <h4>${product.price}</h4>
                <p>{product.description}</p>
                <p>
                    Tax included.{" "}
                    <Link href="/policy/delivery-policy" passHref>
                        <a>Shipping</a>
                    </Link>{" "}
                    calculated at checkout.
                </p>
                <span className={styles.btnGrp}>
                    <Button
                        width="200px"
                        btnClassName={styles.addToCart}
                        height="40px"
                        bgColor="transparent"
                        color="black"
                        text="Add to cart"
                    />
                    <Button
                        text="Buy Now"
                        btnClassName={styles.buyNow}
                        width="200px"
                        height="40px"
                        bgColor="black"
                        color="white"
                    />
                    <Select content={rushOrderDropdown} />
                </span>
            </div>
            <style jsx>{`
                .product_column_1 {
                    justify-content: center;
                    display: flex;
                    flex-direction: column;
                }
                @media (min-width: 600px) {
                    .product {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                    }
                }
                @media (max-width: 599px) {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                }
            `}</style>
        </div>
    );
};

export default ProductDetail;
