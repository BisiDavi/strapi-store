import { axiosInstanceFlutterwave } from '@axios/axiosInstance';
import { v4 as uuidv4 } from 'uuid';

export default function makeNairaPayment() {
    const data = {
        tx_ref: uuidv4(),
        amount: '14000',
        currency: 'NGN',
        redirect_url: 'https://jenjensluxury.com/payment-successful',
        payment_options: ['card', 'account', 'banktransfer', 'barter'],
        customer: {
            email: 'oludavidconnect@gmail.com',
            phonenumber: '07031653411',
            name: 'Olubisi David',
        },
        customizations: {
            title: "Jenjen's Luxury Wigs",
            description: 'Payment for ordered wigs.',
            logo:
                'https://drive.google.com/uc?export=view&id=1P0oVjPA9dfO3Yq7SSukPOCfXidAracpQ',
        },
    };
    return axiosInstanceFlutterwave
        .post('/payments', data)
        .then((response) => {
            console.log('response', JSON.stringify(response));
        })
        .catch((error) => console.error('error', error));
}
