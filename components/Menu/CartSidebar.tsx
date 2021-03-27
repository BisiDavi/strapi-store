import React, { FC } from "react";
import { Image } from "react-datocms";
import { useSelector } from "react-redux";
import { sidebarProps } from "../../types";
import Sidebar from "./Sidebar";
import { useCounter } from "../../hooks";
import { Button } from "..";
import styles from "../../styles/CartSidebar.module.css";

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
                <div className={`content ${styles.sidebarContent}`}>
                    {products.map((product, index) => (
                        <div key={index} className={styles.productProfile}>
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
                                        <button
                                            onClick={() =>
                                                decrementCounter(index)
                                            }
                                        >
                                            -
                                        </button>
                                        <span>{counter}</span>
                                        <button
                                            onClick={() =>
                                                incrementCounter(index)
                                            }
                                        >
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
                        btnClassName={styles.checkout}
                        width="30%"
                        height="50px"
                    />
                    <style jsx>{`
                        .controls {
                            display: flex;
                            justify-content: space-evenly;
                            align-items: center;
                        }
                        .subtotal {
                            text-align: center;
                            display: flex;
                            align-items: center;
                            margin: 15px 0px;
                            justify-content: space-evenly;
                        }
                        .subtotal h3 {
                            font-size: 25px;
                        }
                        .subtotal p {
                            font-size: 20px;
                            margin: 0px;
                        }
                        form {
                            display: flex;
                            flex-direction: column;
                        }
                        form label {
                            font-size: 14px;
                            font-weight: bold;
                            margin: 20px 10px;
                            text-align: center;
                        }
                        textarea {
                            overflow: auto;
                            resize: vertical;
                            height: 100px;
                        }
                        .seller-instruction {
                            color: black;
                            margin: auto;
                            display: flex;
                            border: 1px solid #d1d1d1;
                            justify-content: center;
                            padding: 0px 0px 35px 0px;
                            background-color: #f7f7f7;
                        }
                        p {
                            color: black;
                            text-align: center;
                        }
                        p span {
                            color: pink;
                            margin: 0px 5px;
                            text-decoration: underline;
                        }

                        .controls button {
                            height: 50px;
                            width: 50px;
                            border: none;
                            font-weight: bold;
                            font-size: 30px;
                        }
                        .price {
                            font-size: 25px;
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
                            font-size: 25px;
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
