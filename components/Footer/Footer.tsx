import React from "react";
import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

const Footer = () => {
    const footerLinks = [
        { name: "Search", link: "#link" },
        { name: "Privacy Policy", link: "/policy/privacy-policy" },
        { name: "Refund Policy", link: "/policy/refund-policy" },
        { name: "Delivery Policy", link: "/policy/delivery-policy" },
        { name: "Terms and Condition", link: "/policy/terms-and-conditions" },
    ];

    const socialLinks = [
        { icon: "fab fa-instagram", link: "#link" },
        { icon: "fab fa-youtube", link: "#link" },
    ];

    const paymentMethods = [
        { icon: "/mastercard.svg" },
        { icon: "/paypal.svg" },
    ];

    return (
        <div className="footer-section">
            <ul className="footerLinks row">
                {footerLinks.map((link) => (
                    <li key={uuidv4()}>
                        <Link href={link.link} passHref>
                            <a>{link.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="row social">
                <ul className="social-links">
                    {socialLinks.map((link) => (
                        <Link key={uuidv4()} href={link.link}>
                            <i className={link.icon}></i>
                        </Link>
                    ))}
                </ul>
                <div className="copyright">
                    <i className="far fa-copyright"></i>
                    <p>2021, JenJensLuxuryhair.</p>
                </div>

                <ul className="payment-gateway">
                    {paymentMethods.map((mthd) => (
                        <li key={uuidv4()}>
                            <Image src={mthd.icon} height={30} width={30} />
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
                    .footer {
                        background-color: rgb(189, 90, 188);
                        color: white;
                        text-align: center;
                        font-size: 1em;
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
                        font-weight: 700;
                        font-size: 18px;
                    }
                    .copyright i {
                        font-weight: 100 !important;
                        font-size: 12px !important;
                        margin-top: 2px !important;
                    }
                    p {
                        margin-bottom: 0px;
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
                    }
                    .footer-section i {
                        margin: 0px 10px;
                        font-size: 20px;
                    }
                    .social-links {
                        margin: 0px 10px;
                        font-size: 20px;
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
                    }
                `}
            </style>
        </div>
    );
};

export default Footer;
