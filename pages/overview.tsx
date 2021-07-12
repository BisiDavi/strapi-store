import Head from 'next/head';
import Logo from '@components/Icons/Logo';

export default function Overview() {
    return (
        <>
            <Head>
                <title>Overview | Jenjen&#39;s Luxury Wigs</title>
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
                            Hello, Welcome to Jenjen&#39;s Luxury Wig
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
                            margin: 50px auto;
                            justify-content: center;
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
                    `}
                </style>
            </div>
        </>
    );
}
