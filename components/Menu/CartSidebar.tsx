import React, { FC } from "react";
import { Image } from "react-datocms";
import { useSelector } from "react-redux";
import { sidebarProps } from "../../types";
import Sidebar from "./Sidebar";
import { useCounter } from "../../hooks";
import { Button } from "..";
import styles from "../../styles/CartSidebar.module.css";
import { Products } from "../Product";

const CartSidebar: FC<sidebarProps> = ({
    onClose,
    btnClassName,
}): JSX.Element => {
    const { counter, incrementCounter, decrementCounter } = useCounter();
    const cartState = useSelector((state) => state.cart);
    console.log("cartState", cartState);
    const { products } = cartState;
    const isCartEmpty = products.length > 0;
    return (
        <Sidebar onClose={onClose} btnClassName={btnClassName} right>
            {isCartEmpty ? (
                <div className="content">
                    {products.map((product) => (
                        <div className="product-profile">
                            <Image
                                data={product.image.responsiveImage}
                                className={styles.productImg}
                            />
                            <div className="product-info">
                                <div className="text">
                                    <h1>{product.title}</h1>
                                    {/* <h3>Size: {product.size}</h3> */}
                                </div>
                                <div className="calculator">
                                    <div className="controls">
                                        <button onClick={decrementCounter}>
                                            -
                                        </button>
                                        <span>{counter}</span>
                                        <button onClick={incrementCounter}>
                                            +
                                        </button>
                                    </div>
                                    <div className="price">{product.price}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="seller-instruction">
                        <form>
                            <label>Special Instructions for seller</label>
                            <textarea></textarea>
                        </form>
                    </div>
                    <div className="subtotal">
                        <h3>Subtotal</h3>
                        <p>$price</p>
                    </div>
                    <p>
                        Tax included. <span>Shipping</span>calculated at
                        checkout.
                    </p>
                    <Button
                        text="Checkout"
                        bgColor="black"
                        color="white"
                        width="30%"
                        height="50px"
                    />
                    <style jsx>{`
                        .controls {
                            display: flex;
                            justify-content: space-evenly;
                            align-items: center;
                        }
                        .controls button {
                            height: 50px;
                            width: 50px;
                            border: none;
                            font-weight: bold;
                            font-size: 30px;
                        }
                        .price {
                            font-size: 40px;
                            color: black;
                        }
                        .controls {
                            width: 100%;
                        }

                        .calculator {
                            width: 100%;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                        }

                        .product-info {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            width: 100%;
                        }

                        .controls span {
                            font-size: 30px;
                            color: black;
                        }

                        .text h1 {
                            color: black;
                            font-weight: bold;
                        }
                    `}</style>
                </div>
            ) : (
                <div className="cart-empty">
                    <img height="70px" width="70px" src="/cartIcon.svg" />
                    <h1>
                        Dear customer, your cart is empty, please add a product
                        to your cart, thank you
                    </h1>
                    <style jsx>
                        {`
                            .cart-empty {
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                padding: 20px;
                            }
                            .cart-empty img {
                                margin: 20px 0px;
                            }
                            .cart-empty h1 {
                                font-size: 25px;
                            }
                        `}
                    </style>
                </div>
            )}
        </Sidebar>
    );
};

export default CartSidebar;
