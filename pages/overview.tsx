import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Head from 'next/head';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { ComponentLoader } from '@components/loader';
import Logo from '@components/Icons/Logo';
import { axiosInstance } from '@axios/axiosInstance';
import styles from '@styles/overview.module.css';
import OverviewCard from '@components/Card/OverviewCard';

export default function Overview() {
    const [orders, setOrders] = useState(null);
    const [users, setUsers] = useState(null);
    const [newsletterSubscribers, setNewsletterSubscribers] = useState(null);

    const [orderProducts, setOrderProducts] = useState(null);

    console.log('orders', orders);
    console.log('orderProducts', orderProducts);

    function snCounter(index) {
        let tempIndex = index + 1;
        return tempIndex;
    }

    function getRequest(route, setState) {
        axiosInstance
            .get(route)
            .then((response) => {
                setState(response.data.data);
            })
            .catch((error) => {
                console.error('error', error);
                toast.error('unable to fetch request, check your network');
            });
    }

    function getDate(createdAt) {
        let dateCreated = new Date(createdAt);
        return dateCreated.toLocaleDateString();
    }

    useEffect(() => {
        getRequest('/get-users', setUsers);
        getRequest('/save-order', setOrders);
        getRequest('/newsletter', setNewsletterSubscribers);
    }, []);

    useEffect(() => {
        if (orders !== null) {
            orders.map((order) => setOrderProducts(order.products));
        }
    }, [orders]);

    return (
        <>
            <Head>
                <title>Overview | Jenjen&#39;s Luxury Wigs</title>
            </Head>
            <div className='Overview container-fluid'>
                <div className='row'>
                    <nav className={styles.nav}>
                        <div className='logo'>
                            <Logo />
                        </div>
                    </nav>
                    <div className='col-lg-2 col-3 sidebar'>
                        <div className='logo'>
                            <Logo />
                        </div>
                    </div>
                    <div className='col-lg-10 col-12 content'>
                        <h3 className='text-center welcome-note'>
                            Hello, Welcome to Jenjen&#39;s Luxury Wig
                        </h3>
                        <p>Get to view list of wigs orders from your site.</p>
                        <div className='card-group my-5 d-flex mx-auto row justify-content-around'>
                            <OverviewCard data={orders} icon='wig' />
                            <OverviewCard data={users} icon='profile' />
                            <OverviewCard
                                data={newsletterSubscribers}
                                icon='newsletter'
                            />
                        </div>
                        <div className='table-group row'>
                            <div className='users-table col-lg-6 col-12'>
                                <h3>List of Registered Users</h3>
                                {users !== null && (
                                    <Table responsive striped bordered hover>
                                        <thead>
                                            <tr className='table-primary'>
                                                <th>S/N</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.map((user, index) => (
                                                <tr key={user._id}>
                                                    <td>{snCounter(index)}</td>
                                                    <td>{user?.name}</td>
                                                    <td>{user?.email}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                )}
                            </div>
                            <div className='newsletter-table col-lg-6 col-12'>
                                <h3>List of Newsletter Subscribers</h3>
                                {newsletterSubscribers !== null && (
                                    <Table responsive striped bordered hover>
                                        <thead>
                                            <tr className='table-primary'>
                                                <th>S/N</th>
                                                <th>Email</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {newsletterSubscribers.map(
                                                (
                                                    newsletterSubscriber,
                                                    index,
                                                ) => (
                                                    <tr
                                                        key={
                                                            newsletterSubscriber._id
                                                        }
                                                    >
                                                        <td>
                                                            {snCounter(index)}
                                                        </td>
                                                        <td>
                                                            {
                                                                newsletterSubscriber?.email
                                                            }
                                                        </td>
                                                    </tr>
                                                ),
                                            )}
                                        </tbody>
                                    </Table>
                                )}
                            </div>
                        </div>
                        <div className='orders-table col-12 col-lg-12'>
                            {orders?.length > 0 ? (
                                <>
                                    <h3 className='text-center'>
                                        Orders Table
                                    </h3>
                                    <Table responsive striped>
                                        <thead
                                            className='thead'
                                            style={{ fontSize: '14px' }}
                                        >
                                            <tr>
                                                <th>S/N</th>
                                                <th>Wig</th>
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
                                        <tbody>
                                            {orders.map((order, index) => (
                                                <tr key={order._id}>
                                                    <td>{snCounter(index)}</td>
                                                    <td>
                                                        {order.products.map(
                                                            (
                                                                orderProduct,
                                                                index,
                                                            ) => (
                                                                <div
                                                                    key={index}
                                                                >
                                                                    <Image
                                                                        height={
                                                                            100
                                                                        }
                                                                        width={
                                                                            100
                                                                        }
                                                                        key={
                                                                            index
                                                                        }
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
                                                                    <p>
                                                                        {
                                                                            orderProduct.title
                                                                        }
                                                                    </p>
                                                                </div>
                                                            ),
                                                        )}
                                                    </td>
                                                    <td>
                                                        {order.symbol}
                                                        {order.totalPrice}
                                                    </td>
                                                    <td>
                                                        {orderProducts?.count}
                                                    </td>
                                                    <td>{order.fullName}</td>
                                                    <td>{order.email}</td>
                                                    <td>{order.telephone}</td>
                                                    <td>{order.address}</td>
                                                    <td>
                                                        {order.shippingMethod}
                                                    </td>
                                                    <td>
                                                        {
                                                            order.additionalInformation
                                                        }
                                                    </td>
                                                    <td>
                                                        {getDate(
                                                            order.createdAt,
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </>
                            ) : orders === null ? (
                                <ComponentLoader />
                            ) : (
                                <span className='alert-danger justify-content-center d-flex mx-auto p-3 text-center align-items-center text-danger'>
                                    No order yet.
                                </span>
                            )}
                        </div>
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
                            background-color: rgb(249 249 249);
                        }

                        .sidebar {
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
                        nav {
                            border-bottom: 1px solid gray;
                            height: 100px;
                            background: linear-gradient(
                                to top,
                                #ec6ead,
                                #3494e6
                            );
                        }
                        .menuIcon {
                            color: red;
                        }
                        @media (min-width: 768px) {
                            nav {
                                display: none;
                            }
                        }
                        @media (max-width: 768px) {
                            .sidebar {
                                display: none;
                            }
                            nav .logo {
                                height: 70px;
                                width: 70px;
                                display: flex;
                                margin: auto;
                            }

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
