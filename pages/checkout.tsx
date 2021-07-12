import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import {
    AdditionalInformation,
    ShippingAddress,
    ShippingMethod,
    ShoppingBag,
    OrderSummary,
} from '../components/Checkout';
import { ClearCartAction } from '../store/actions/CartActions';
import { Pagelayout } from '../containers';
import { useAuthModal } from '../hooks';
import { Notify, Paypal, LoginModal, Loading } from '../components';
import { SuccessModal } from '../components/Modal';

export default function Checkout() {
    const { modal, loading, displayModal } = useAuthModal();
    const [paymentConfirmed, setPaymentConfirmed] = useState(false);
    const [paypalLoaded, setPaypalLoaded] = useState(false);
    const [showModal, setShowModal] = useState(true);

    const dispatch = useDispatch();
    const router = useRouter();

    const { details } = useSelector((state) => state.userDetails);
    const { method } = useSelector((state) => state.shipping);
    const { totalAmount } = useSelector((state) => state.totalAmount);
    const { payment, paymentDetails } = useSelector((state) => state.payment);

    console.log('payment', payment);
    const formCondition = details && method;

    const notifyUser = () => {
        return formCondition === null ? (
            <Notify
                variant='danger'
                text='The shipping address form and shipping method must be filled, thanks.'
            />
        ) : null;
    };

    useEffect(() => {
        !showModal && payment && router.push('/');
    }, [showModal, payment, router]);

    useEffect(() => {
        if (paymentConfirmed) {
            setShowModal(true);
            dispatch(ClearCartAction());
        }
    }, [paymentConfirmed, dispatch]);

    useEffect(() => setPaypalLoaded(true), []);

    return (
        <Pagelayout title='Checkout |'>
            <div className='container-fluid'>
                <div className='row w-100 m-0'>
                    {loading && <Loading />}
                    <LoginModal
                        show={modal}
                        onHide={() => displayModal(false)}
                    />
                    <div className='col-lg-12 info mt-2'>
                        <h3>Jenjen&#39;s Luxury Wigs</h3>
                        <div className='bread-crumb'>
                            <p>
                                Shopping Cart <span className='mx-1'>&gt;</span>{' '}
                                <b>Checkout</b>{' '}
                                <span className='mx-1'>&gt;</span> Paid Succeed
                            </p>
                        </div>
                    </div>
                </div>
                <div className='row alert'>{notifyUser()}</div>
                {paymentDetails !== null && (
                    <SuccessModal
                        modal={showModal}
                        content={paymentDetails}
                        onHide={() => setShowModal(false)}
                    />
                )}
                <div className='row checkout-field w-100 m-auto my-3'>
                    <ShippingAddress />
                    <ShippingMethod />
                    <ShoppingBag />
                    <AdditionalInformation />
                    <OrderSummary />
                    <div className='express-checkout'>
                        {console.log('paypalLoaded', paypalLoaded)}
                        {formCondition && paypalLoaded && (
                            <Paypal
                                amount={totalAmount}
                                hasPaid={(payment) =>
                                    setPaymentConfirmed(payment)
                                }
                            />
                        )}
                    </div>
                </div>
                <style jsx>
                    {`
                        .container-fluid {
                            padding: 0px 100px;
                        }
                        .alert,
                        .express-checkout {
                            display: flex;
                            margin: auto;
                            justify-content: center;
                        }
                        .info {
                            text-align: center;
                            margin: 0px auto;
                        }
                        @media (min-width: 768px) {
                            .row.checkout-field.w-100 {
                                display: grid;
                                grid-template-columns: repeat(2, 1fr);
                                grid-gap: 30px;
                            }
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
}
