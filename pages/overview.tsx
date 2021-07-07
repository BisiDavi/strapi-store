import React from 'react';
import Head from 'next/head';
import Logo from '@components/Icons/Logo';

export default function Overview() {
    return (
        <>
            <Head>
                <title>Overview | Jenjen's Luxury Wigs</title>
            </Head>
            <div className='Overview container-fluid vh-100'>
                <div className='row vh-100'>
                    <div className='col-lg-2 sidebar'>
                        <div className='logo'>
                            <Logo />
                        </div>
                    </div>
                    <div className='col-lg-10 content'>
                        <h3 className='text-center'>
                            Hello, Welcome to Jenjen's Luxury Wig
                        </h3>
                        <p>
                            Get to know the number of users on your site, number
                            of visit, wigs sold and much more.
                        </p>
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
                            justify-content: center;
                        }

                        .sidebar {
                            height: 100%;
                            display: -webkit-box;
                            display: -webkit-flex;
                            display: -ms-flexbox;
                            display: flex;
                            background-color: #ffa6ca;
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
                    `}
                </style>
            </div>
        </>
    );
}
