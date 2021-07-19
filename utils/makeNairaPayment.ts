import { axiosInstanceFlutterwave } from '@axios/axiosInstance';
import useRedux from '@hooks/useRedux';
import { v4 as uuidv4 } from 'uuid';

export default function makeNairaPayment(amount, user) {
    const data = {
        tx_ref: uuidv4(),
        amount: amount,
        currency: 'NGN',
        redirect_url: 'https://jenjensluxury.com/payment-successful',
        payment_options: ['card', 'account', 'banktransfer', 'barter'],
        customer: {
            email: user.email,
            phonenumber: user.phonenumber,
            name: user.name,
        },
        customizations: {
            title: "Jenjen's Luxury Wigs",
            description: 'Payment for ordered wigs.',
            logo:
                'https://drive.google.com/uc?export=view&id=1P0oVjPA9dfO3Yq7SSukPOCfXidAracpQ',
        },
    };
    axiosInstanceFlutterwave.post('/payments', data);
}
