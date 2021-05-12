import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import styles from '../../styles/checkout.module.css';
import { AdditionalInformationAction } from '../../store/actions/AdditionalInformationAction';

const AdditionalInformation = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const textAreaHandler = (e) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        dispatch(AdditionalInformationAction(value));
    }, [value]);

    return (
        <div className={styles.form}>
            <div className={styles.title}>
                <span>4</span>ADDITIONAL INFORMATION (Optional)
            </div>
            <Form>
                <Form.Group controlId='textarea'>
                    <Form.Label>If you want to say something to us</Form.Label>
                    <Form.Control
                        onChange={textAreaHandler}
                        value={value}
                        as='textarea'
                        rows={3}
                    />
                </Form.Group>
            </Form>
        </div>
    );
};

export default AdditionalInformation;
