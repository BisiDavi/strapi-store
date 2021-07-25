/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { axiosInstance } from '@axios/axiosInstance';
import Image from 'next/image';
import Link from 'next/link';
import { useRedux, usePaymentData } from '@hooks/.';
import { Pagelayout } from '@containers/.';
import { request, HOMEPAGE_QUERY, updateProductAfterSales } from '@lib/.';
import ProductSlider from '@components/Slider/ProductSlider';
import { ClearCartAction } from '@store/actions/CartActions';

export default function Paymentsuccessful({ otherProducts }) {
    const [paymentStatus, setPaymentStatus] = useState(null);
    const { dispatch } = useRedux();
    const {
        saveOrderToDB,
        userNotificationData,
        adminNotificationData,
        productsData,
    } = usePaymentData();

    console.log('productsData', productsData);

    const other_Products = otherProducts?.allProducts;

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        setPaymentStatus(params);
    }, []);

    console.log('paymentStatus', paymentStatus);

    async function postPaymentNotification(route, data) {
        await axiosInstance
            .post(route, data)
            .then((response) => {
                console.log('response', response);
            })
            .catch((error) => console.error('error', error));
    }

    useEffect(() => {
        if (paymentStatus?.status === 'successful') {
            postPaymentNotification(
                '/payment-notification-admin',
                adminNotificationData,
            );
            postPaymentNotification(
                '/payment-notification-user',
                userNotificationData,
            );
            axiosInstance
                .post('/save-order', JSON.stringify(saveOrderToDB))
                .then((response) => {
                    console.log('response from db', response);
                })
                .catch((error) => {
                    console.log('error from db', error);
                });

            const productsDataKeyArray = Object.keys(productsData);
            productsDataKeyArray.map((product) =>
                updateProductAfterSales(productsData[product]),
            );

            dispatch(ClearCartAction());
        }
    }, [paymentStatus]);

    const paymentCondition = paymentStatus?.status === 'successful';

    const paymentTitle = paymentCondition ? 'successful' : 'cancelled';
    return (
        <Pagelayout title={`Payment-${paymentTitle}`}>
            <div className='paymentSuccessful d-flex flex-column container-fluid'>
                <>
                    {paymentCondition ? (
                        <div className='row d-flex mx-auto'>
                            <Image
                                src='/paymentMade.gif'
                                alt='payment successful'
                                height='250px'
                                width='300px'
                            />
                        </div>
                    ) : paymentStatus?.status === 'cancelled' ? (
                        <h3 className='text-center mt-3'>
                            Payment Cancelled, please try making payment again,
                            thanks
                        </h3>
                    ) : (
                        <h3 className='text-center mt-3'>
                            Payment not made, please make payment{' '}
                            <Link href='/make-payments' passHref>
                                <a className='text-danger mr-2'>here</a>
                            </Link>
                            thanks.
                        </h3>
                    )}
                </>
                {paymentCondition && (
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='text-center'>payment successful </h3>
                            <h5 className='my-2 text-center'>
                                Thanks for shopping with us
                            </h5>
                            <h3 className='text-center mb-5'>
                                To continue {'  '}
                                <Link href='/collection/all'>
                                    <a>shopping</a>
                                </Link>
                            </h3>
                        </div>
                    </div>
                )}
                <div className='row'>
                    <div className='col-12 py-3'>
                        <ProductSlider products={other_Products} />
                    </div>
                </div>
                <style jsx>
                    {`
                        .paymentSuccessful {
                            font: normal normal 22px/24px 'Montserrat',
                                sans-serif;
                        }
                        h3 a {
                            color: #ffa6ca;
                            font-weight: bold;
                            text-decoration: underline;
                        }
                    `}
                </style>
            </div>
        </Pagelayout>
    );
}

export async function getStaticProps() {
    const otherProducts = await request({
        query: HOMEPAGE_QUERY,
        variables: { limit: 20 },
    });

    return {
        props: {
            otherProducts,
        },
    };
}
