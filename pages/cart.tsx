import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Pagelayout } from "../container";
import { useCart } from "../hooks";
import { CartTable, EmptyCartTable } from "../components/Cart";

const Cart = () => {
    const { productCount, products } = useCart();
    const [showTextarea, setShowTextarea] = useState(false);
    const displayShowTextarea = () => setShowTextarea(!showTextarea);

    return (
        <Pagelayout title={`(${productCount}) Your Shopping Cart`}>
            <Container>
                <Row>
                    {products.length > 0 ? (
                        <CartTable
                            products={products}
                            displayShowTextarea={displayShowTextarea}
                            showTextarea={showTextarea}
                        />
                    ) : (
                        <EmptyCartTable />
                    )}
                </Row>
            </Container>
        </Pagelayout>
    );
};

export default Cart;
