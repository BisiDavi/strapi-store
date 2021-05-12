import React, { FC } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { ShippingMethodAction } from '../../store/actions/ShippingMethodAction';
import styles from '../../styles/checkout.module.css';
import { shippingMethodArray } from '../../types';

const ShippingMethod: FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const methodArr: shippingMethodArray[] = [
        {
            name: 'localMethod',
            label: 'EXPRESS SHIPPING (US only) $20.00',
        },
        {
            name: 'foreignMethod',
            label: 'SHIP TO NIGERIA (Lagos only) ₦5,000',
        },
        {
            name: 'OthersMethod',
            label: 'SHIP TO MY ADDRESS (other countries) $50.00',
        },
    ];

    const radioBtnHandler = (e) => {
        dispatch(ShippingMethodAction(e.target.value));
        console.log('selected', e.target.value);
    };

    const displayRadioBtn = () => {
        return methodArr.map((formInput, index) => (
            <Form.Group key={index} controlId={formInput.name}>
                <Form.Check
                    className='d-flex align-items-center'
                    type='radio'
                    name='shipping'
                    onChange={radioBtnHandler}
                    value={formInput.label}
                    label={formInput.label}
                />
            </Form.Group>
        ));
    };

    

    return (
        <div className={styles.form}>
            <div className={styles.title}>
                <span>2</span>SHIPPING METHOD
            </div>
            <Form className='d-flex flex-column'>{displayRadioBtn()}</Form>
        </div>
    );
};

export default ShippingMethod;
