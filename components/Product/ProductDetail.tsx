import React, { FC } from "react";
import Link from "next/link";
import { Image, ResponsiveImageType } from "react-datocms";
import { useDispatch } from "react-redux";
import { Button } from "../Button";
import { Select } from "../Form";
import styles from "../../styles/ProductDetail.module.css";
import { AddToCartAction } from "../../store/actions/CartActions";
import { useCart } from "../../hooks";
import { displayCartSidebar } from "../../utils/menu";

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
    const dispatch = useDispatch();
    const { cart, displayCart, hideCart } = useCart();
    const rushOrderDropdown = {
        title: "--Choose Rush Order--",
        options: ["--Choose Rush Order--", "Rush My Orders (+$55.00)"],
    };
    const addToCartHandler = () => {
        const { image, title, price } = product;
        displayCart();
        console.log("I was clicked");
        console.log("product", product);
        dispatch(AddToCartAction({ image, title, price }));
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
                    <Select content={rushOrderDropdown} />

                    <Button
                        width="200px"
                        btnClassName={styles.addToCart}
                        height="40px"
                        bgColor="transparent"
                        color="black"
                        btnClick={addToCartHandler}
                        text="Add to cart"
                    />
                    {displayCartSidebar(cart, hideCart)}
                    <Button
                        text="Buy Now"
                        btnClassName={styles.buyNow}
                        width="200px"
                        height="40px"
                        bgColor="black"
                        color="white"
                    />
                </span>
            </div>
            <style jsx>{`
                .product_column_1 {
                    justify-content: center;
                    display: flex;
                    flex-direction: column;
                }
                .product p {
                    font-size: 25px;
                }
                .product h1 {
                    font-weight: bold;
                }
                .product h4 {
                    font-size: 35px;
                    font-weight: bold;
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
