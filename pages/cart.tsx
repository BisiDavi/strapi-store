import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Table } from "react-bootstrap";
import { Image } from "react-datocms";
import { FcFullTrash } from "react-icons/fc";
import { Pagelayout } from "../container";
import { useCart } from "../hooks";
import styles from "../styles/cart.module.css";
import { DeleteProductAction } from "../store/actions/counterActions";
import { Button } from "../components";

const Cart = () => {
    const { cartCount } = useCart();
    const dispatch = useDispatch();
    const cartState = useSelector((state) => state.cart);
    const { products } = cartState;

    const deleteCount = (index) => {
        dispatch(DeleteProductAction({ products, index }));
    };
    return (
        <Pagelayout title={`(${cartCount}) Your Shopping Cart`}>
            <Container>
                <Row>
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
                                            data={product.image.responsiveImage}
                                        />
                                    </td>
                                    <td className={styles.title}>
                                        <h3> "{product.title}"</h3>
                                        <FcFullTrash
                                            onClick={() => deleteCount(index)}
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
                                <td>
                                    <p>Special instructons for seller</p>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <div className="subtotal">
                                        <h3>Subtotal</h3>
                                        <p>$</p>
                                        <p>
                                            Tax included. Shipping calculated at
                                            checkout.
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
                </Row>
            </Container>
        </Pagelayout>
    );
};

export default Cart;
