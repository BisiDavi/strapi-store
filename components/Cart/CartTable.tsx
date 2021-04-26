import React from "react";
import { Image } from "react-datocms";
import { FcFullTrash } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { useCurrency } from "../../hooks";
import { DeleteProductAction } from "../../store/actions/counterActions";
import { Button } from "../.";
import styles from "../../styles/cart.module.css";
import { getTotalAmount } from "../../utils";

const CartTable = (props) => {
    const { products, displayShowTextarea, showTextarea } = props;
    console.log("products", products);
    const { priceExchange, symbol } = useCurrency();

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
                            <div className={styles.price}>
                                {symbol}
                                {priceExchange(product.price)}
                            </div>
                            <div className={styles.input}>
                                <input
                                    onChange={inputHandler(index)}
                                    defaultValue={product.count}
                                    type="number"
                                />
                            </div>
                            <div className={styles.amount}>
                                {symbol}
                                {priceExchange(product.amount)}
                            </div>
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
                            <h2 className={styles.price}>
                                {symbol}
                                {priceExchange(getTotalAmount(products))}
                            </h2>
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
