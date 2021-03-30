import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sidebarProps } from "../../types";
import Sidebar from "./Sidebar";
import { Button } from "..";
import styles from "../../styles/CartSidebar.module.css";
import ShowSidebarCart from "../Cart/ShowSidebarCart";
import {
    DecrementCounterAction,
    IncrementCounterAction,
} from "../../store/actions/counterActions";
import Link from "next/link";

const CartSidebar: FC<sidebarProps> = ({
    onClose,
    btnClassName,
}): JSX.Element => {
    const dispatch = useDispatch();
    const cartState = useSelector((state) => state.cart);
    const { products } = cartState;
    const isCartEmpty = products.length > 0;

    const increaseCount = (index) => {
        dispatch(IncrementCounterAction({ products, index }));
    };
    const decreaseCount = (index) => {
        dispatch(DecrementCounterAction({ products, index }));
    };
    const getTotalAmount = () => {
        let totalAmount = 0;
        products.map((product) => (totalAmount += product.amount));
        console.log("total amount", totalAmount);
        return totalAmount;
    };

    return (
        <Sidebar onClose={onClose} btnClassName={btnClassName} right>
            {isCartEmpty ? (
                <div className={`content ${styles.sidebarContent}`}>
                    {products.map((product, index) => (
                        <ShowSidebarCart
                            key={index}
                            product={product}
                            increment={() => increaseCount(index)}
                            decrement={() => decreaseCount(index)}
                        />
                    ))}
                    <div className="seller-instruction">
                        <form>
                            <label>Special Instructions for seller</label>
                            <textarea></textarea>
                        </form>
                    </div>
                    <div className="subtotal">
                        <h3>Subtotal</h3>
                        <p>${getTotalAmount()}</p>
                    </div>
                    <p>
                        Tax included.{" "}
                        <span>
                            <Link href="/policy/delivery-policy" passHref>
                                <a>Shipping</a>
                            </Link>
                        </span>
                        calculated at checkout.
                    </p>
                    <Button
                        text="Proceed"
                        bgColor="black"
                        color="white"
                        btnClassName={styles.checkout}
                        width="30%"
                        height="50px"
                        linkTo="/cart"
                        asLink
                    />
                    <style jsx>{`
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
