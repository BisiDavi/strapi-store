import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { PageModal } from '.';

const SuccessModal = ({ modal, onHide, content }) => {
    console.log('successModal loaded');
    return (
        <PageModal show={modal} onHide={onHide}>
            <div className='modal-content'>
                <div className='icon my-3'>
                    <BsCheckCircle />
                </div>
                <h1>
                    Hello ${content.payer.name.given_name}, Payment successfully
                    made, thanks for shopping with us.
                </h1>
                <p className='my-3'>
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
