import React, { FC } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { PaypalProps } from '../../types';

const Paypal: FC<PaypalProps> = ({ amount, loadPaypal }): JSX.Element => {
    return (
        <PayPalButton
            amount={amount}
            shippingPreference='NO_SHIPPING'
            onButtonReady={loadPaypal}
            onSuccess={(details, data) => {
                alert(
                    'Transaction completed by ' + details.payer.name.given_name,
                );
            }}
        />
    );
};

export default Paypal;
