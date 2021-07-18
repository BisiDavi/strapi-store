import sgMail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API);

export default async function CheckoutNotificationHandler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const { method } = req;
    const { products, email, totalPrice, symbol } = req.body;
    const msg = {
        to: 'oludavidconnect@gmail.com',
        from: {
            email: 'info@jenjensluxury.com',
            name: "Jenjen's Luxury Wigs",
        },
        templateId: 'd-577176f8bf46404d9751b9e99b1defa3',
        dynamic_template_data: {
            products,
            email,
            totalPrice,
            symbol,
        },
    };
    switch (method) {
        case 'POST':
            try {
                const sendNotification = await sgMail.send(msg);
                res.status(200).json({
                    success: true,
                    message: 'checkout email notification sent',
                    data: sendNotification,
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
