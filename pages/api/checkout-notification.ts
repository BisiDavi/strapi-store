import sgMail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from '../../utils';

export default async function CheckoutNotificationHandler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const { method } = req;
    const { products, email, totalPrice, symbol } = req.body;
    const data = { products, email, totalPrice, symbol };
    const checkoutNotificationID =
        process.env.NEXT_PUBLIC_CHECKOUT_NOTIFICATION_ID;
    console.log('req.body', data);

    switch (method) {
        case 'POST':
            try {
                sendEmail(sgMail, '', checkoutNotificationID, data, true);
                res.status(200).json({
                    success: true,
                    message: 'checkout email notification sent',
                });
            } catch (error) {
                res.status(400).json({ success: false, error });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}
