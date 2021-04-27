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
import { useCurrency } from "../../hooks";

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
    const { wigImages }: any = product;
    console.log("wigImages", wigImages);
    const dispatch = useDispatch();
    const { priceExchange, symbol } = useCurrency();
    const router = useRouter();
    const { cart, showCart, hideCart } = useCart();
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
        <div className="product-page">
            <div className="productGrid">
                <div className="mainWigImage">
                    <Image
                        className={styles.product}
                        data={product.image.responsiveImage}
                    />
                </div>
                {wigImages.map((wig, index) => (
                    <div key={index} className={`wigImage column-${index}`}>
                        <Image
                            className={styles.otherImages}
                            data={wig.responsiveImage}
                        />
                    </div>
                ))}
            </div>

            <ToastContainer
                position="top-left"
                closeOnClick
                draggable
                pauseOnHover
            />

            {displayCartSidebar(cart, hideCart)}
            <div className="product-description">
                <div className="product-text">
                    <span className={`${styles.info} info`}>
                        <h1>{product.title}</h1>
                        <h4>
                            {symbol}
                            {priceExchange(product.price)}
                        </h4>
                    </span>
                    <p className="description">{product.description}</p>
                    <p className="tax">
                        Tax included.{" "}
                        <Link href="/policy/delivery-policy" passHref>
                            <a>Shipping</a>
                        </Link>{" "}
                        calculated at checkout.
                    </p>
                </div>
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
                .product-image {
                    margin: 50px 0px 0px 0px;
                }
                .other-image {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    padding: 50px 0px;
                }

                .product-description {
                    display: flex;
                    width: 80%;
                    margin: 20px 80px;
                }
                .product-text {
                    width: 50%;
                    margin-right: 40px;
                }
                .info {
                    display: flex;
                    justify-content: space-between;
                    margin-right: 50px;
                }
                .product-description p {
                    font-size: 25px;
                }
                .product-description h1 {
                    font-weight: bold;
                }
                .product-description h4 {
                    font-size: 35px;
                    font-weight: bold;
                }
                @media (min-width: 1400px) {
                    .other-image {
                        grid-template-rows: 425px 425px;
                    }
                }
                @media (min-width: 600px) {
                    .productGrid {
                        display: grid;
                        grid-template-columns: 2fr 1fr 1fr;
                        grid-template-rows: 1fr 1fr;
                        grid-gap: 15px;
                        margin: 30px;
                    }
                    .mainWigImage {
                        grid-column: 1;
                        grid-row: 1/3;
                    }
                }
                @media (max-width: 600px) {
                    .product-description {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        margin: 0px auto;
                    }
                    .product-text {
                        padding: 20px;
                        width: 100%;
                        margin: 0px;
                    }
                    .product {
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                    }
                    .product-image {
                        margin: 20px;
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
                    .product-description p {
                        font-size: 20px;
                    }
                    .product .tax {
                        font-size: 15px;
                        text-align: center;
                    }
                    .tax a {
                        color: red;
                    }
                    .info h1,
                    .info h4 {
                        font-size: 25px;
                    }
                }
            `}</style>
        </div>
    );
};

export default ProductDetail;
