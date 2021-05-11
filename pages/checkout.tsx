import React from 'react';
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

const Checkout = () => {
    const { modal, loading, displayModal } = useAuthModal();

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
                                Shopping Cart &gt; <b>Checkout</b> &gt; Paid
                                Succeed
                            </p>
                        </div>
                        <div className='express-checkout'>
                            <p>Express checkout</p>

                            <button className='paypal-checkout'>
                                <img
                                    src='https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png'
                                    alt='Check out with PayPal'
                                />
                            </button>
                        </div>
                    </div>
                    <ShippingAddress />
                    <ShippingMethod />
                    <ShoppingBag />
                    <AdditionalInformation />
                    <OrderSummary />
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
