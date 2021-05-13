import React, { FC } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useRouter } from 'next/router';
import { useModal } from '../../hooks';
import { PaypalProps } from '../../types';
import { SuccessModal } from '../Modal';

const Paypal: FC<PaypalProps> = ({ amount, hasPaid }): JSX.Element => {
    const { modal, displayModal } = useModal();
    const router = useRouter();

    const redirectUser = () => {
        !modal && router.push('/');
    };
    return (
        <PayPalButton
            amount={amount}
            shippingPreference='NO_SHIPPING'
            onSuccess={(details, data) => {
                () => displayModal(true);
                hasPaid(true);
                <SuccessModal
                    modal={modal}
                    content={details}
                    onHide={() => displayModal(false)}
                />;
                redirectUser();
            }}
            options={{
                clientId:
                    'AcP5kjoPdLOpeNujacudxWPynh-ucYPekVXxWKdVk48JvhJErKVvVNo65BUrFNPETweN-zUz6Na5Y4aL',
            }}
        />
    );
};

export default Paypal;
