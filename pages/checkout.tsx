import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    AdditionalInformation,
    ShippingAddress,
    ShippingMethod,
    ShoppingBag,
    OrderSummary,
} from '../components/Checkout';
import { Pagelayout } from '../container';
import { useAuthModal } from '../hooks';
import { Loading } from '../components';
import { LoginModal } from '../components/Modal';
import Notify from '../components/Notify';

const Checkout = () => {
    const { modal, loading, displayModal } = useAuthModal();
    const { details } = useSelector((state) => state.userDetails);
    const { method } = useSelector((state) => state.shipping);

    const formCondition = details && method;
    console.log('formCondition', formCondition);

    const notifyUser = () => {
        return formCondition === null ? (
            <Notify
                variant='danger'
                text='The shipping address form and shipping method must be filled, thanks.'
            />
        ) : null;
    };

    return (
        <Pagelayout title='Checkout |'>
            <div className='container-fluid'>
                <div className='row w-100 m-0'>
                    {loading && <Loading />}
                    <LoginModal
                        show={modal}
                        onHide={() => displayModal(false)}
                    />
                    <div className='col-lg-12 info'>
                        <h3>Jenjen's Luxury Wigs</h3>
                        <div className='bread-crumb'>
                            <p>
                                Shopping Cart <span className='mx-1'>&gt;</span>{' '}
                                <b>Checkout</b>{' '}
                                <span className='mx-1'>&gt;</span> Paid Succeed
                            </p>
                        </div>
                    </div>
                    {notifyUser()}
                    <ShippingAddress />
                    <ShippingMethod />
                    <ShoppingBag />
                    <AdditionalInformation />
                    <OrderSummary />
                    <div className='express-checkout'>
                        {formCondition ? (
                            <button className='paypal-checkout'>
                                <img
                                    src='https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png'
                                    alt='Check out with PayPal'
                                />
                            </button>
                        ) : (
                            <button className='paypal-checkout' disabled>
                                <img
                                    src='https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png'
                                    alt='Check out with PayPal'
                                />
                            </button>
                        )}
                    </div>
                </div>
                <style jsx>
                    {`
                        .container-fluid {
                            padding: 0px 100px;
                        }
                        .info {
                            text-align: center;
                            margin: 20px auto;
                        }
                        @media (max-width: 768px) {
                            .container-fluid {
                                padding: 15px;
                            }
                        }
                    `}
                </style>
            </div>
        </Pagelayout>
    );
};

export default Checkout;
