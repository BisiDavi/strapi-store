import React, { FC } from "react";
import { CartSidebarProps } from "../../types";
import Sidebar from "./Sidebar";
import { Button } from "..";
import ShowSidebarCart from "../Cart/ShowSidebarCart";
import Link from "next/link";
import { EmptyCart } from "../Cart";
import { getTotalAmount } from "../../utils";
import styles from "../../styles/CartSidebar.module.css";
import { useCart, useCurrency } from "../../hooks";

const CartSidebar: FC<CartSidebarProps> = ({
    onClose,
    btnClassName,
    pushRight,
}): JSX.Element => {
    const { products } = useCart();
    const { priceExchange, symbol } = useCurrency();

    const cartStyles = pushRight && { marginRight: "0px !important" };
    return (
        <div style={cartStyles} className="div">
            <Sidebar onClose={onClose} btnClassName={btnClassName} right>
                {products.length > 0 ? (
                    <div className={`content ${styles.sidebarContent}`}>
                        <ShowSidebarCart products={products} />
                        <div className="seller-instruction">
                            <form>
                                <label>Special Instructions for seller</label>
                                <textarea></textarea>
                            </form>
                        </div>
                        <div className="subtotal">
                            <h3>Subtotal</h3>
                            <p className={styles.price}>
                                {symbol}
                                {priceExchange(getTotalAmount(products))}
                            </p>
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
                    <EmptyCart />
                )}
            </Sidebar>
        </div>
    );
};

export default CartSidebar;
