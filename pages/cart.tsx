import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Table } from "react-bootstrap";
import { Image } from "react-datocms";
import { FcFullTrash } from "react-icons/fc";
import Link from "next/link";
import { Pagelayout } from "../container";
import { useCart } from "../hooks";
import { DeleteProductAction } from "../store/actions/counterActions";
import { Button } from "../components";
import { EmptyCart } from "../components/Cart";
import styles from "../styles/cart.module.css";

const Cart = () => {
    const { cartCount } = useCart();
    const [showTextarea, setShowTextarea] = useState(false);
    const dispatch = useDispatch();
    const cartState = useSelector((state) => state.cart);
    const { products } = cartState;
    const displayShowTextarea = () => setShowTextarea(!showTextarea);

    const deleteCount = (index) => {
        dispatch(DeleteProductAction({ products, index }));
    };
    console.log("products length", products.length);
    const tableTitle = ["Product", "Name", "Price", "Quantity", "Total"];
    return (
        <Pagelayout title={`(${cartCount}) Your Shopping Cart`}>
            <Container>
                <Row>
                    {products.length !== 0 ? (
                        <Table className={styles.table} hover>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr key={index}>
                                        <td>
                                            <Image
                                                className={styles.productImage}
                                                data={
                                                    product.image
                                                        .responsiveImage
                                                }
                                            />
                                        </td>
                                        <td className={styles.title}>
                                            <h3> "{product.title}"</h3>
                                            <FcFullTrash
                                                onClick={() =>
                                                    deleteCount(index)
                                                }
                                            />
                                        </td>
                                        <td>${product.price}</td>
                                        <td>
                                            <input
                                                defaultValue={product.count}
                                                type="number"
                                            />
                                        </td>
                                        <td>${product.amount}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td
                                        colSpan={3}
                                        className={styles.textareaRow}
                                    >
                                        <p onClick={displayShowTextarea}>
                                            Special instructons for seller
                                        </p>
                                        {showTextarea && <textarea></textarea>}
                                    </td>
                                    <td colSpan={2} className={styles.subtotal}>
                                        <div>
                                            <h3>Subtotal</h3>
                                            <p>$</p>
                                            <p>
                                                Tax included. Shipping
                                                calculated at checkout.
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
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    ) : (
                        <span className={styles.emptycart}>
                            <EmptyCart />
                            <Link href="/collection/all" passHref>
                                <a>View Wigs</a>
                            </Link>
                        </span>
                    )}
                </Row>
            </Container>
        </Pagelayout>
    );
};

export default Cart;
