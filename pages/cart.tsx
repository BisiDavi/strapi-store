import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSession } from 'next-auth/client';
import { Pagelayout } from '../container';
import { useCart, useModal } from '../hooks';
import { CartTable, EmptyCartTable } from '../components/Cart';
import { LoginModal } from '../components/Modal';
import { Loading } from '../components';

const Cart = () => {
    const { productCount, products } = useCart();
    const { modal, displayModal } = useModal();
    const [showTextarea, setShowTextarea] = useState(false);
    const displayShowTextarea = () => setShowTextarea(!showTextarea);
    const [session, loading] = useSession();

    console.log('session', session);

    // useEffect(() => {
    //     session === null || session === undefined
    //         ? displayModal(true)
    //         : displayModal(false);
    // }, [session]);

    loading && <Loading />;

    return (
        <Pagelayout title={`(${productCount}) Your Shopping Cart`}>
            <Container>
                <Row>
                    <LoginModal
                        show={modal}
                        onHide={() => displayModal(false)}
                    />

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
