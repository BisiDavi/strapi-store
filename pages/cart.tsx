import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Table } from "react-bootstrap";
import { Image } from "react-datocms";
import { FcFullTrash } from "react-icons/fc";
import { Pagelayout } from "../container";
import { useCart } from "../hooks";
import styles from "../styles/cart.module.css";
import { DeleteProductAction } from "../store/actions/counterActions";

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
                                    <td className={styles.productImage}>
                                        <Image
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
                                            value={product.count}
                                            type="number"
                                        />
                                    </td>
                                    <td>${product.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </Pagelayout>
    );
};

export default Cart;
