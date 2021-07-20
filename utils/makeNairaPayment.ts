import { axiosInstanceFlutterwave } from '@axios/axiosInstance';
import { v4 as uuidv4 } from 'uuid';

export default async function makeNairaPayment(
    paymentDetails: paymentDetailsType,
    amount: string,
) {
    const data = {
        tx_ref: uuidv4(),
        amount: amount,
        currency: 'NGN',
        redirect_url: 'https://jenjensluxury.com/payment-successful',
        payment_options: ['card', 'account', 'banktransfer', 'barter'],
        customer: {
            email: paymentDetails.email,
            phonenumber: paymentDetails.telephone,
            name: paymentDetails.fullName,
        },
        customizations: {
            title: "Jenjen's Luxury Wigs",
            description: 'Payment for ordered wigs.',
            logo:
                'https://drive.google.com/uc?export=view&id=1P0oVjPA9dfO3Yq7SSukPOCfXidAracpQ',
        },
    };
    return await axiosInstanceFlutterwave
        .post('/payments', data)
        .then((response) => {
            console.log('response', JSON.stringify(response));
        })
        .catch((error) => console.error('error', error));
}

type paymentDetailsType = {
    email: string;
    telephone: string;
    fullName: string;
};
