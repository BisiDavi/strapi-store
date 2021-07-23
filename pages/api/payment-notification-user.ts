import sgMail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API);

export default async function UserPaymentNotificationHandler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const { method } = req;
    const { products, email, shippingDays, totalPrice, symbol } = req.body;

    const data = { products, email, shippingDays, totalPrice, symbol };
    const userNotificationID =
        process.env.NEXT_PUBLIC_PAYMENT_NOTIFICATION_USER_ID;

    console.log('req.body', data);

    const adminEmailAddress = [
        process.env.NEXT_PUBLIC_ADMIN_EMAIL_ADDRESS,
        process.env.NEXT_PUBLIC_DEVELOPER_EMAIL_ADDRESS,
    ];
    const msg = {
        to: adminEmailAddress,
        from: {
            email: process.env.NEXT_PUBLIC_SITE_EMAIL_ADDRESS,
            name: "Jenjen's Luxury Wigs",
        },
        templateId: userNotificationID,
        dynamic_template_data: data,
    };

    switch (method) {
        case 'POST':
            try {
                await sgMail.send(msg);

                res.status(200).json({
                    success: true,
                    message: 'payment email notification sent to the user',
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
