import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { axiosInstanceFlutterwave } from '../../axios/axiosInstance';

export default async function hander(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const { method } = req;

    const { paymentDetails, amount } = req.body;

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

    switch (method) {
        case 'POST': {
            try {
                await axiosInstanceFlutterwave
                    .post('/payments', JSON.stringify(data))
                    .then((response) => {
                        console.log('response', JSON.stringify(response));
                        res.status(200).json({ success: true, response });
                    })
                    .catch((error) => {
                        console.error('error', error);
                        res.status(400).json({ success: false, error });
                    });
            } catch (error) {
                console.log('error', error);
                res.status(400).json({ success: false, error });
            }
            break;
        }
        default:
            res.status(400).json({ success: false });
            break;
    }
}
