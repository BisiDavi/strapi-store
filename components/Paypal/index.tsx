import { PayPalButton } from 'react-paypal-button-v2';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { axiosInstance } from '@axios/axiosInstance';
import { PaypalProps } from '../../types';
import { toast } from 'react-toastify';
import { PaymentAction } from '@store/actions/PaymentAction';
import { useRedux } from '@hooks/.';

export default function Paypal({
    amount,
    hasPaid,
    checkoutDetails,
    setCheckoutDetails,
}: PaypalProps): JSX.Element {
    const dispatch = useDispatch();
    const router = useRouter();
    const { SelectState } = useRedux();
    function successfulPayment(details) {
        return dispatch(PaymentAction(details));
    }

    const { country } = SelectState('IP');
    function onCancelHandler() {
        toast.error('An error just occurred');
        return router.push('/checkout');
    }

    const currencyCode = country === 'NG' ? 'NGN' : 'USD';

    return (
        <PayPalButton
            amount={amount}
            currency={currencyCode}
            onError={() => toast.error('An error just occurred')}
            catchError={onCancelHandler}
            onSuccess={(details, data) => {
                console.log('data paypalbutton', data);
                hasPaid(true);
                successfulPayment(details);
                toast.success(
                    'Transaction completed by ' + details.payer.name.given_name,
                );

                setCheckoutDetails({
                    ...checkoutDetails,
                    orderId: data.orderID,
                });

                return axiosInstance
                    .post('/send-order-to-db', checkoutDetails)
                    .then((response) => {
                        console.log('response', response.data);
                    })
                    .catch((error) => console.error('error', error));
            }}
            options={{
                currency: currencyCode,
                clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
            }}
        />
    );
}
