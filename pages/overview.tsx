import { useState, useEffect } from 'react';
import { Table, Card } from 'react-bootstrap';
import Head from 'next/head';
import Image from 'next/image';
import { FaCartPlus } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ComponentLoader } from '@components/loader';
import Logo from '@components/Icons/Logo';
import { axiosInstance } from '@axios/axiosInstance';
import { toast } from 'react-toastify';

export default function Overview() {
    const [orders, setOrders] = useState(null);
    const [showSidebar, setShowSidebar] = useState(false);
    const [orderProducts, setOrderProducts] = useState(null);
    let count = 0;
    function getSN() {
        count += 1;
        return count;
    }
    function getAllOrders() {
        axiosInstance
            .get('/save-order')
            .then((response) => {
                console.log('response from db', response.data.data);
                setOrders(response?.data.data);
            })
            .catch((error) => {
                console.error('error', error);
                toast.error('unable to fetch orders, check your network');
            });
    }

    useEffect(() => {
        getAllOrders();
    }, []);

    useEffect(() => {
        if (orders !== null) {
            orders.map((order) =>
                order.products.map((orderProduct) =>
                    setOrderProducts(orderProduct),
                ),
            );
        }
    }, [orders]);

    console.log('orders', orders);

    console.log('orderProducts', orderProducts);

    return (
        <>
            <Head>
                <title>Overview | Jenjen&#39;s Luxury Wigs</title>
            </Head>
            <div className='Overview container-fluid vh-100'>
                <div className='row vh-100'>
                    <nav className='nav w-100' col-12>
                        <GiHamburgerMenu size={50} />
                    </nav>
                    <div className='col-lg-2 col-3 d-none sidebar'>
                        <div className='logo'>
                            <Logo />
                        </div>
                    </div>
                    <div className='col-lg-10 col-12 content'>
                        <h3 className='text-center welcome-note'>
                            Hello, Welcome to Jenjen&#39;s Luxury Wig
                        </h3>
                        <p>
                            Get to know the number of users on your site, number
                            of visit, wigs sold and much more.
                        </p>
                        <div className='card-group d-flex my-3 mx-auto col-12'>
                            <div className='card w-25 col-lg-3 col-12 d-flex flex-row align-items-center justify-content-around py-5 px-1'>
                                <p className='card-text'>
                                    <FaCartPlus
                                        className='text-success'
                                        size={50}
                                    />
                                </p>
                                <p
                                    className='card-text font-weight-bold'
                                    style={{ fontSize: '20px' }}
                                >
                                    Total Number of Wigs Sold:{' '}
                                    <span className='text-success'>
                                        {' '}
                                        {orders?.length}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <h3 className='text-center'>Orders Table</h3>
                        {orders !== null ? (
                            <Table responsive>
                                <thead
                                    className='thead'
                                    style={{ fontSize: '14px' }}
                                >
                                    <tr>
                                        <th>S/N</th>
                                        <th>Wig Name</th>
                                        <th>Image</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Customer Name</th>
                                        <th>Customer Email</th>
                                        <th>Customer Phonenumber</th>
                                        <th>Customer Address</th>
                                        <th>Shipping Method</th>
                                        <th>Additional Information</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody style={{ fontSize: '13px' }}>
                                    {orders.map((order) => (
                                        <tr key={order._id}>
                                            <td>{getSN()}</td>
                                            <td>{orderProducts?.title}</td>
                                            <td>
                                                {order.products.map(
                                                    (orderProduct, index) => (
                                                        <Image
                                                            height={200}
                                                            width={200}
                                                            key={index}
                                                            src={
                                                                orderProduct
                                                                    .image
                                                                    .responsiveImage
                                                                    .src
                                                            }
                                                            alt={
                                                                orderProduct.alt
                                                            }
                                                        />
                                                    ),
                                                )}
                                            </td>
                                            <td>
                                                {order.symbol}
                                                {order.totalPrice}
                                            </td>
                                            <td>{orderProducts?.count}</td>
                                            <td>{order.fullName}</td>
                                            <td>{order.email}</td>
                                            <td>{order.telephone}</td>
                                            <td>{order.address}</td>
                                            <td>{order.shippingMethod}</td>
                                            <td>
                                                {order.additionalInformation}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        ) : (
                            <ComponentLoader />
                        )}
                        {orders?.length === 0 && (
                            <span className='text-danger'>No order yet.</span>
                        )}
                    </div>
                </div>
                <style jsx>
                    {`
                        .logo {
                            height: 150px;
                            width: 150px;
                            background-color: white;
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            margin: 50px auto;
                            justify-content: center;
                        }

                        .content {
                            font-family: 'Montserrat', sans-serif;
                        }

                        .sidebar {
                            height: 100%;
                            display: -webkit-box;
                            display: -webkit-flex;
                            display: -ms-flexbox;
                            display: flex;
                            background: #3494e6; /* fallback for old browsers */
                            background: -webkit-linear-gradient(
                                to top,
                                #ec6ead,
                                #3494e6
                            ); /* Chrome 10-25, Safari 5.1-6 */
                            background: linear-gradient(
                                to top,
                                #ec6ead,
                                #3494e6
                            ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                        }

                        h3.text-center {
                            margin: 50px auto;
                            color: black;
                            font-weight: bold;
                            font-size: 35px;
                            font-family: 'Open Sans';
                        }

                        p {
                            text-align: center;
                            font-style: italic;
                            font-family: 'Roboto';
                            font-size: 22px;
                        }
                        @media (max-width: 768px) {
                            .content h3 {
                                font-size: 18px;
                                line-height: 18px;
                                margin: 30px auto;
                            }
                            .content p {
                                font-size: 14px;
                                line-height: 168x;
                            }
                            .thead {
                                font-size: 12px;
                            }
                            .card-group {
                                font-size: 14px;
                            }
                        }
                    `}
                </style>
            </div>
        </>
    );
}
