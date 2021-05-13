import React, { FC } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useDispatch } from 'react-redux';
import { PaypalProps } from '../../types';
import { PaymentAction } from '../../store/actions/PaymentAction';

const Paypal: FC<PaypalProps> = ({ amount, hasPaid }): JSX.Element => {
    const dispatch = useDispatch();

    const successfulPayment = (details) => dispatch(PaymentAction(details));

    return (
        <PayPalButton
            amount={amount}
            shippingPreference='NO_SHIPPING'
            onSuccess={(details, data) => {
                hasPaid(true);
                successfulPayment(details);
            }}
            options={{
                clientId:
                    'AcP5kjoPdLOpeNujacudxWPynh-ucYPekVXxWKdVk48JvhJErKVvVNo65BUrFNPETweN-zUz6Na5Y4aL',
            }}
        />
    );
};

export default Paypal;
