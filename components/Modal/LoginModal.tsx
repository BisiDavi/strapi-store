import Link from "next/link";
import React from "react";
import { PageModal } from ".";
import styles from "../../styles/loginModal.module.css";

const LoginModal = ({ show, onHide }) => {
    return (
        <PageModal
            onHide={onHide}
            show={show}
            modalstyle={styles.loginModal}
            header="Sign up to proceed with Order"
        >
            <div className="loginModal">
                <h3>Dear customer, please login to proceed with your order.</h3>
                <span>
                    <Link href="/auth/login" passHref>
                        <a>Login</a>
                    </Link>
                </span>
                <style jsx>
                    {`
                        .loginModal {
                            display: flex;
                            flex-direction: column;
                        }
                        h3 {
                            text-align: center;
                        }
                        span {
                            background-color: #ffa6ca;
                            font-weight: bold;
                            color: white;
                            height: 100px;
                            width: 100px;
                            margin: 10px auto;
                        }
                    `}
                </style>
            </div>
        </PageModal>
    );
};

export default LoginModal;
