/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { axiosInstance } from '@axios/axiosInstance';
import Image from 'next/image';
import Link from 'next/link';
import { useCurrency, useFormatProduct, useUserDetails } from '@hooks/.';
import { Pagelayout } from '@containers/.';
import { request, HOMEPAGE_QUERY } from '@lib/.';
import ProductSlider from '@components/Slider/ProductSlider';

export default function Paymentsuccessful({ otherProducts }) {
    const [paymentStatus, setPaymentStatus] = useState(null);
    const {
        details,
        method,
        products,
        totalAmount,
        additionalInformation,
    } = useUserDetails();
    const { currencySymbol } = useCurrency();
    const other_Products = otherProducts?.allProducts;
    const { formatProduct }: any = useFormatProduct();

    const productsArray = formatProduct(products);
    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        setPaymentStatus(params);
    }, []);

    console.log('productsArray', productsArray);

    const shippingDays = method.includes('14 working days')
        ? '14 working days'
        : '5 working days';

    const adminNotificationData = {
        products: productsArray,
        email: details?.email,
        phonenumber: details?.phonenumber,
        shippingMethod: method,
        totalPrice: totalAmount,
        additionalInformation,
        symbol: currencySymbol,
    };
    const userNotificationData = {
        products: productsArray,
        email: details?.email,
        shippingDays,
        totalPrice: totalAmount,
        symbol: currencySymbol,
    };

    const saveOrderToDB = {
        fullName: details.fullName,
        email: details.email,
        address: details.address,
        zip: details.zip,
        telephone: details.telephone,
        country: details.country,
        region: details.region,
        shippingMethod: method,
        products,
        totalPrice: totalAmount,
        additionalInformation,
        symbol: currencySymbol,
    };

    console.log('paymentStatus', paymentStatus);
    console.log('saveOrderToDB', saveOrderToDB);
    console.log('adminNotificationData', adminNotificationData);
    console.log('userNotificationData', userNotificationData);

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
        }
    }, [paymentStatus]);

    const paymentCondition = paymentStatus?.status === 'successful';

    const paymentTitle = paymentCondition ? 'cancelled' : 'successful';
    return (
        <Pagelayout title={`Payment-${paymentTitle}`}>
            <div className='paymentSuccessful d-flex flex-column container-fluid'>
                {paymentCondition ? (
                    <div className='row d-flex mx-auto'>
                        <Image
                            src='/paymentMade.gif'
                            alt='payment successful'
                            height='250px'
                            width='300px'
                        />
                    </div>
                ) : (
                    <h3 className='text-center'>
                        Payment Cancelled, please try making payment again,
                        thanks
                    </h3>
                )}
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

export async function getStaticProps({ params }) {
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
