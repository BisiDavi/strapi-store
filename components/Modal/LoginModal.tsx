import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { PageModal } from ".";
import styles from "../../styles/loginModal.module.css";

const LoginModal = ({ show, onHide }) => {
    const router = useRouter();

    const userLogin = () => {
        onHide();
        router.push("/auth/login");
    };
    return (
        <PageModal
            onHide={onHide}
            show={show}
            backdrop="static"
            keyboard={false}
            modalstyle={styles.loginModal}
            header="Sign up to proceed with Order"
        >
            <div className="loginModal">
                <h3>Dear customer, please login to proceed with your order.</h3>
                <span onClick={userLogin}>Login</span>
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
                            text-align: center;
                            background-color: rgb(255, 166, 202);
                            font-weight: bold;
                            color: white;
                            padding: 10px 20px;
                            font-size: 25px;
                            font-weight: bold;
                            margin: 10px auto;
                        }
                        @media (max-width: 500px) {
                            h3,
                            span {
                                font-size: 16px;
                            }
                        }
                    `}
                </style>
            </div>
        </PageModal>
    );
};

export default LoginModal;
