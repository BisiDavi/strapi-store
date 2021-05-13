import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { BsCheckCircle } from 'react-icons/bs';
import { PageModal } from '.';

const SuccessModal = ({ modal, onHide, content }) => {
    console.log('successModal loaded');
    return (
        <PageModal show={modal} onHide={onHide}>
            <div className='modal'>
                <div className='icon'>
                    <CSSTransition in={modal} timeout={300}>
                        <BsCheckCircle />
                    </CSSTransition>
                </div>
                <h1>
                    Hello ${content.payer.name.given_name}, Payment successfully
                    made, thanks for shopping with us.
                </h1>
            </div>
        </PageModal>
    );
};

export default SuccessModal;
