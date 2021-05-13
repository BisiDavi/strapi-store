import React, { FC } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { PageModal } from '.';
import Logo from '../Icons/Logo';
import styles from '../../styles/Pagemodal.module.css';
import { SuccessModalProps } from '../../types';

const SuccessModal: FC<SuccessModalProps> = ({ modal, onHide, content }) => {
    return (
        <PageModal modalLogo={<Logo />} show={modal} onHide={onHide} icon>
            <div className='modal-content'>
                <div className='icon my-1'>
                    <BsCheckCircle className={styles.checkIcon} />
                </div>
                <h1>
                    Hello {content.payer.name.given_name}, Payment successfully
                    made, thanks for shopping with us.
                </h1>
                <p className='my-1'>
                    Expect your ordered item delivered to you within 4 - 10
                    working days
                </p>
                <style jsx>
                    {`
                        .modal-content {
                            display: flex;
                            flex-direction: column;
                            margin-top: -20px;
                        }
                        .icon {
                            margin: auto;
                        }
                        h1 {
                            font-size: 22px;
                        }
                        .modal-content h1,
                        p {
                            text-align: center;
                            color: black;
                        }
                    `}
                </style>
            </div>
        </PageModal>
    );
};

export default SuccessModal;
