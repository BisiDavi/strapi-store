import Image from 'next/image';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

export default function Footer() {
    const footerLinks = [
        { name: 'Privacy Policy', link: '/policy/privacy-policy' },
        { name: 'Refund Policy', link: '/policy/refund-policy' },
        { name: 'Delivery Policy', link: '/policy/delivery-policy' },
        { name: 'Terms and Condition', link: '/policy/terms-and-conditions' },
    ];

    const socialLinks = [
        {
            icon: 'fab fa-instagram fa-2x',
            link: 'https://www.instagram.com/jenjensluxurywigs/',
        },
        {
            icon: 'fab fa-facebook fa-2x',
            link: 'https://web.facebook.com/jenjensluxurywigs.azonobi',
        },
    ];

    const paymentMethods = [
        {
            name: 'pay with visa mastercard discover american express',
            icon: '/paymentMethods.png',
        },
    ];

    return (
        <footer className='footer-section'>
            <ul className='footerLinks row'>
                {footerLinks.map((link) => (
                    <li key={uuidv4()}>
                        <Link href={link.link} passHref>
                            <a>{link.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className='row social'>
                <ul className='social-links'>
                    {socialLinks.map((link) => (
                        <a
                            target='_blank'
                            rel='noreferrer'
                            key={uuidv4()}
                            href={link.link}
                        >
                            <i className={link.icon}></i>
                        </a>
                    ))}
                </ul>
                <div className='copyright'>
                    <span>
                        <i className='far fa-copyright'></i>
                        <p>2021, Jenjens Luxury Wigs.</p>
                    </span>
                    <p>Philadelphia, Pennsylvania</p>
                </div>

                <ul className='payment-gateway'>
                    {paymentMethods.map((mthd) => (
                        <li key={uuidv4()}>
                            <Image
                                alt={mthd.name}
                                src={mthd.icon}
                                height={50}
                                width={150}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <style jsx>
                {`
                    .footer-section {
                        background-color: #ffa6ca;
                        color: #5c5c5c;
                        padding: 40px 20px;
                    }
                    footer {
                        background-color: rgb(189, 90, 188);
                        color: white;
                        text-align: center;
                        font-size: 1em;
                        font-family: 'Montserrat', sans-serif;
                        width: 100%;
                    }
                    ul.footerLinks.row li {
                        margin: 0px 10px;
                    }

                    ul.footerLinks {
                        display: flex;
                        justify-content: center;
                    }

                    ul.footerLinks.row li a {
                        margin: 0px 10px;
                        color: #5c5c5c;
                        font-size: 18px;
                        font-family: 'Montserrat', sans-serif;
                    }
                    .copyright i {
                        font-weight: 100;
                        margin-top: 2px;
                    }
                    .payment-gateway li img {
                        height: 70px;
                        width: 300px;
                    }
                    p {
                        margin-bottom: 0px;
                        font-size: 20px;
                        font-family: 'Montserrat', sans-serif;
                    }
                    .social {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin: 50px 0px 0px 0px;
                        padding: 0px 150px;
                    }
                    .copyright {
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                    }

                    .copyright span {
                        display: flex;
                        align-items: center;
                    }
                    .footer-section i {
                        margin: 0px 10px;
                    }
                    .social-links {
                        margin: 0px 10px;
                    }
                    .social-links i {
                        cursor: pointer;
                    }
                    .payment-gateway {
                        display: flex;
                    }
                    .payment-gateway li {
                        margin: 0px 10px;
                    }

                    @media (max-width: 576px) {
                        .row.social {
                            flex-direction: column;
                            margin: 0px;
                            padding: 0px;
                            position: relative;
                        }

                        .social-links {
                            display: flex;
                            margin: 5px auto;
                            position: absolute;
                            left: 0;
                        }

                        .copyright {
                            margin-top: 50px;
                        }

                        .payment-gateway {
                            position: absolute;
                            right: 0;
                        }
                        .footerLinks.row {
                            align-items: center;
                            justify-content: space-between;
                        }
                        .footer-section {
                            padding: 30px 20px 10px;
                        }
                        ul.footerLinks.row li a {
                            font-size: 16px;
                        }
                        .payment-gateway li img {
                            height: 50px;
                            width: 200px;
                        }
                        .copyright p {
                            font-size: 16px;
                        }
                    }
                `}
            </style>
        </footer>
    );
}
