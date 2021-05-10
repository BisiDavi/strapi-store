import React from 'react';
import { Form } from 'react-bootstrap';
import styles from '../../styles/checkout.module.css';

const AdditionalInformation = () => {
    return (
        <div className={styles.form}>
            <div className={styles.title}>
                <span>4</span>ADDITIONAL INFORMATION (Optional)
            </div>
            <Form>
                <Form.Group controlId='textarea'>
                    <Form.Label>If you want to say something to us</Form.Label>
                    <Form.Control as='textarea' rows={3} />
                </Form.Group>
            </Form>
        </div>
    );
};

export default AdditionalInformation;
