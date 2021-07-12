import { useRouter } from 'next/router';
import React from 'react';
import { Modal } from 'react-bootstrap';
import styles from '@styles/loginModal.module.css';

export default function LoginModal({ show, onHide }) {
    const router = useRouter();

    const userLogin = () => {
        onHide();
        router.push('/auth/login');
    };
    return (
        <Modal
            onHide={onHide}
            show={show}
            backdrop='static'
            size='lg'
            centered
            keyboard={false}
            contentClassName={styles.loginModal}
        >
            <Modal.Header>
                <h1 className='header'>Sign up to proceed with Order</h1>
            </Modal.Header>
            <Modal.Body>
                <div className='loginModal'>
                    <h3>
                        Dear customer, please login to proceed with your order.
                    </h3>
                    <span onClick={userLogin}>Login</span>
                </div>
            </Modal.Body>

            <style jsx>
                {`
                    h1.header {
                        color: rgb(255, 166, 202);
                        font-family: Anton, Helvetica, Arial, 'Sans Serif',
                            serif;
                        display: flex;
                        justify-content: center;
                        text-align: center;
                        margin: auto;
                        font-weight: 1000;
                    }
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
        </Modal>
    );
}
