import { PayPalButton } from 'react-paypal-button-v2';
import { useDispatch } from 'react-redux';
import { PaypalProps } from '../../types';
import { PaymentAction } from '../../store/actions/PaymentAction';

export default function Paypal ({ amount, hasPaid }:PaypalProps): JSX.Element{
    const dispatch = useDispatch();

    function successfulPayment(details){
			return dispatch(PaymentAction(details))
		}

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

