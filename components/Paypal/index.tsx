import React, { FC } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { PaypalProps } from '../../types';

const Paypal: FC<PaypalProps> = ({ amount }): JSX.Element => {
    return (
        <PayPalButton
            amount={amount}
            shippingPreference='NO_SHIPPING'
            onSuccess={(details, data) => {
                alert(
                    'Transaction completed by ' + details.payer.name.given_name,
                );
            }}
            options={{
                clientId:
                    'AcP5kjoPdLOpeNujacudxWPynh-ucYPekVXxWKdVk48JvhJErKVvVNo65BUrFNPETweN-zUz6Na5Y4aL',
            }}
        />
    );
};

export default Paypal;
