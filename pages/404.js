import React from "react";
import Link from "next/link";
import { FiWifiOff } from "react-icons/fi";
import { IoIosRefreshCircle } from "react-icons/io";
import Logo from "../components/Icons/Logo";
import styles from "../styles/errorpage.module.css";

const ErrorPage = () => {
    return (
        <div className="network-error">
            <Logo />
            <span className={styles.wifi}>
                <FiWifiOff />
            </span>
            <h3>Oops, Network Issues</h3>
            <p>Hello customer, please try reconnecting again</p>
            <span className={styles.retry}>
                <Link href="/" passHref>
                    <a>
                        <IoIosRefreshCircle />
                    </a>
                </Link>
            </span>

            <style jsx>
                {`
                    .network-error {
                        background-color: white;
                        height: 100%;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        margin: auto;
                    }
                    span {
                        display: flex;
                        justify-content: center;
                    }
                    span svg {
                        font-size: 25px;
                    }
                    h3 {
                        font-weight: bold;
                        font-size: 30px;
                    }
                    h3,
                    p {
                        text-align: center;
                    }
                    a {
                        text-decoration: none;
                    }
                `}
            </style>
        </div>
    );
};

export default ErrorPage;
