import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Pagelayout } from "../container";
import { useCart, useModal } from "../hooks";
import { CartTable, EmptyCartTable } from "../components/Cart";
import { LoginModal } from "../components/Modal";

const Cart = () => {
    const { productCount, products } = useCart();
    const { modal, displayModal } = useModal();
    const [showTextarea, setShowTextarea] = useState(false);
    const displayShowTextarea = () => setShowTextarea(!showTextarea);

    useEffect(() => {
        const displayLoginModal = setTimeout(() => displayModal(true), 2000);
        return () => clearTimeout(displayLoginModal);
    }, []);

    return (
        <Pagelayout title={`(${productCount}) Your Shopping Cart`}>
            <Container>
                <Row>
                    {modal && (
                        <LoginModal
                            show={modal}
                            onHide={() => displayModal(false)}
                        />
                    )}
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
