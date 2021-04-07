import React, { FC } from "react";
import Link from "next/link";
import { Image, ResponsiveImageType } from "react-datocms";
import { useDispatch } from "react-redux";
import { Button } from "../Button";
import { Select } from "../Form";
import { AddToCartAction } from "../../store/actions/CartActions";
import { useCart } from "../../hooks";
import { displayCartSidebar } from "../../utils/menu";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../styles/ProductDetail.module.css";

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
    const router = useRouter();
    const { displayCart, showCart, hideCart } = useCart();
    const rushOrderDropdown = {
        title: "--Choose Rush Order--",
        options: ["--Choose Rush Order--", "Rush My Orders (+$55.00)"],
    };
    const addToCartHandler = () => {
        const { image, title, price } = product;
        showCart();
        toast.success("Product added to Cart");
        dispatch(AddToCartAction({ image, title, price }));
    };
    const buyProductHandler = () => {
        const { image, title, price } = product;
        toast.success(
            `Thanks, for your interest in ${title}, now redirecting you to checkout`
        );
        dispatch(AddToCartAction({ image, title, price }));
        router.push("/checkout");
    };
    return (
        <div className="product">
            <div className="product-image">
                <Image
                    className={styles.product}
                    data={product.image.responsiveImage}
                />
                <ToastContainer
                    position="top-left"
                    closeOnClick
                    draggable
                    pauseOnHover
                />
            </div>
            <div className="product_column_1 flex-column">
                <span className="info">
                    <h1>{product.title}</h1>
                    <h4>${product.price}</h4>
                </span>
                <p className="description">{product.description}</p>
                <p className="tax">
                    Tax included.{" "}
                    <Link href="/policy/delivery-policy" passHref>
                        <a>Shipping</a>
                    </Link>{" "}
                    calculated at checkout.
                </p>
                {displayCartSidebar(displayCart, hideCart)}

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
                    <Button
                        text="Buy Now"
                        btnClassName={styles.buyNow}
                        width="200px"
                        height="40px"
                        btnClick={buyProductHandler}
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
                    .product {
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                    }
                    .product_column_1 .info {
                        display: flex;
                        align-items: center;
                        justify-content: space-around;
                        width: 100%;
                        flex-direction: row;
                    }
                    .product_column_1 .info h1,
                    .product_column_1 .info h4 {
                        width: unset;
                        font-size: 25px;
                    }
                    .product p {
                        font-size: 20px;
                        padding: 10px;
                    }
                    .product .tax {
                        font-size: 15px;
                        text-align: center;
                    }
                    .tax a {
                        color: red;
                    }
                }
            `}</style>
        </div>
    );
};

export default ProductDetail;
