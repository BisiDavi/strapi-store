import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Pagelayout } from '../container';
import { useAuthModal, useCart, useModal } from '../hooks';
import { CartTable, EmptyCartTable } from '../components/Cart';
import { LoginModal } from '../components/Modal';
import { Loading } from '../components';

const Cart = () => {
    const { productCount, products } = useCart();
    const { modal, loading, displayModal } = useAuthModal();

    return (
        <Pagelayout title={`(${productCount}) Your Shopping Cart`}>
            <Container>
                <Row>
                    {loading && <Loading />}
                    <LoginModal
                        show={modal}
                        onHide={() => displayModal(false)}
                    />

                    {products.length > 0 ? (
                        <CartTable products={products} />
                    ) : (
                        <EmptyCartTable />
                    )}
                </Row>
            </Container>
        </Pagelayout>
    );
};

export default Cart;
