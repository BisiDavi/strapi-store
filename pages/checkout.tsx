/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
    AdditionalInformation,
    ShippingAddress,
    ShippingMethod,
    ShoppingBag,
    OrderSummary,
} from '@components/Checkout';
import { ClearCartAction } from '@store/actions/CartActions';
import { Pagelayout } from '@containers/.';
import { useAuthModal, useRedux } from '@hooks/.';
import { Notify, Paypal, LoginModal, Loading } from '@components/.';
import { SuccessModal } from '@components/Modal';
import makeNairaPayment from '@utils/makeNairaPayment';
import { axiosInstance } from '@axios/axiosInstance';

export default function Checkout() {
    const { modal, loading, displayModal } = useAuthModal();
    const [totalPrice, setTotalPrice] = useState(null);
    const { dispatch, SelectState } = useRedux();
    const [checkoutDetails, setCheckoutDetails] = useState(null);
    const [paymentConfirmed, setPaymentConfirmed] = useState(false);
    const [paypalLoaded, setPaypalLoaded] = useState(false);
    const [showModal, setShowModal] = useState(true);

    const router = useRouter();

    const { details } = SelectState('userDetails');
    const { method } = SelectState('shipping');
    const { additionalInformation } = SelectState('information');
    const { totalAmount } = SelectState('totalAmount');
    const { products } = SelectState('cart');
    const { payment, paymentDetails } = SelectState('payment');

    useEffect(() => {
        if (
            details !== null &&
            method !== null &&
            additionalInformation !== null &&
            totalPrice !== null
        )
            setCheckoutDetails({
                ...checkoutDetails,
                method,
                details,
                additionalInformation,
                products,
                totalPrice,
            });
    }, [details, method, additionalInformation, totalPrice]);

    console.log('totalPrice', totalPrice);

    function nairaPayment() {
        if (checkoutDetails !== null) {
            const { details, totalPrice } = checkoutDetails;

            axiosInstance
                .post('/make-payments', {
                    paymentDetails: details,
                    amount: totalPrice.replace(',', ''),
                })
                .then((response) => {
                    console.log('response', response);
                })
                .catch((error) => {
                    console.error('error', error);
                });
        }
    }

    console.log('checkoutDetails', checkoutDetails);

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

    useEffect(() => {
        if (formCondition !== null) {
            setPaypalLoaded(true);
        }
    }, [formCondition]);

    return (
        <Pagelayout title='Checkout |'>
            <div className='container-fluid'>
                <div className='row w-100 m-0'>
                    {/*{loading && <Loading />}
                    <LoginModal
                        show={modal}
                        onHide={() => displayModal(false)}
                    />*/}
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
                    <OrderSummary setTotalPrice={setTotalPrice} />
                    <div className='express-checkout'>
                        {formCondition && (
                            <button
                                className='nairaPayment'
                                onClick={nairaPayment}
                            >
                                Make Payment
                            </button>
                        )}
                        {/*{console.log('paypalLoaded', paypalLoaded)}
                        {formCondition && paypalLoaded && (
                            <Paypal
                                amount={totalAmount}
                                setCheckoutDetails={setCheckoutDetails}
                                checkoutDetails={checkoutDetails}
                                hasPaid={(payment) => {
                                    setPaymentConfirmed(payment);
                                }}
                            />
                        )}*/}
                    </div>
                </div>
                <style jsx>
                    {`
                        .container-fluid {
                            padding: 0px 100px;
                        }
                        button.nairaPayment {
                            background-color: green;
                            color: white;
                            font-weight: bold;
                            font-size: 20px;
                            border-radius: 10px;
                            border: none;
                            padding: 15px 25px;
                            background: #642b73; /* fallback for old browsers */
                            background: -webkit-linear-gradient(
                                to right,
                                #c6426e,
                                #642b73
                            ); /* Chrome 10-25, Safari 5.1-6 */
                            background: linear-gradient(
                                to right,
                                #c6426e,
                                #642b73
                            ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
