import React from "react";
import { Container, Row, Table } from "react-bootstrap";
import { Pagelayout } from "../container";
import { useCart } from "../hooks";

const Cart = () => {
    const { cartCount } = useCart();
    console.log("cartCount", cartCount);
    return (
        <Pagelayout title={`(${cartCount}) Your Shopping Cart`}>
            <Container>
                <Row>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                net::ERR_EMPTY_RESPONSE <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </Pagelayout>
    );
};

export default Cart;
