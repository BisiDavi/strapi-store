import React from "react";
import { Image } from "react-datocms";
import { FcFullTrash } from "react-icons/fc";
import { useDispatch } from "react-redux";

import { DeleteProductAction } from "../../store/actions/counterActions";
import { Button } from "../.";
import styles from "../../styles/cart.module.css";
import { getTotalAmount } from "../../utils";

const CartTable = (props) => {
    const { products, displayShowTextarea, showTextarea } = props;
    console.log("products", products);
    const tableTitle = ["Product", "Name", "Price", "Quantity", "Total"];
    const dispatch = useDispatch();
    const deleteProduct = (index) => {
        dispatch(DeleteProductAction({ products, index }));
    };
    const inputHandler = (e) => (index) => {
        let productQty = e.target.value;
        let newAmount = productQty * products[index].price;
        console.log("newAMount", newAmount);
    };
    return (
        <div className={styles.cartTable}>
            <div className={styles.title}>
                {tableTitle.map((title, index) => (
                    <h3 key={index}>{title}</h3>
                ))}
            </div>
            <div className={styles.cartProduct}>
                {props.products &&
                    products.length > 0 &&
                    products.map((product, index) => (
                        <div className={styles.cartItem} key={index}>
                            <div className={styles.cartImage}>
                                <Image
                                    className={styles.productImage}
                                    data={product.image.responsiveImage}
                                />
                            </div>
                            <div className={styles.name}>
                                <h3> "{product.title}"</h3>
                                <FcFullTrash
                                    onClick={() => deleteProduct(index)}
                                />
                            </div>
                            <div>${product.price}</div>
                            <div>
                                <input
                                    onChange={inputHandler(index)}
                                    defaultValue={product.count}
                                    type="number"
                                />
                            </div>
                            <div>${product.amount}</div>
                        </div>
                    ))}
                <div className={styles.calculator}>
                    <div className={styles.textareaRow}>
                        <p onClick={displayShowTextarea}>
                            Special instructons for seller
                        </p>
                        {showTextarea && <textarea></textarea>}
                    </div>
                    <div className={styles.subtotal}>
                        <div>
                            <h3>Subtotal</h3>
                            <h2>${getTotalAmount(products)}</h2>
                            <p>
                                Tax included. Shipping calculated at checkout.
                            </p>
                        </div>

                        <Button
                            color="white"
                            btnClassName={styles.checkout}
                            linkTo="/checkout"
                            bgColor="black"
                            text="Check out"
                            asLink
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartTable;
