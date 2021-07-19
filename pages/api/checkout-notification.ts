import sgMail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from '../../utils';

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API);

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

    const adminEmailAddress = [
        process.env.NEXT_PUBLIC_ADMIN_EMAIL_ADDRESS,
        process.env.NEXT_PUBLIC_DEVELOPER_EMAIL_ADDRESS,
        'readydevfreelancer@gmail.com',
    ];
    //const email = isAdmin ? adminEmailAddress : userEmail;

    const msg = {
        to: adminEmailAddress,
        from: {
            email: process.env.NEXT_PUBLIC_SITE_EMAIL_ADDRESS,
            name: "Jenjen's Luxury Wigs",
        },
        templateId: checkoutNotificationID,
        dynamic_template_data: data,
    };

    switch (method) {
        case 'POST':
            try {
                await sgMail.send(msg);
                //sendEmail(sgMail, '', checkoutNotificationID, data, true)
                //    .then((response) => {
                //        console.log('response sendEmail', response);
                //    })
                //    .catch((error) => console.error('error sendEmail', error));
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
