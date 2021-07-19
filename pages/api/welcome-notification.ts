import sgMail from '@sendgrid/mail';
import { sendEmail } from '../../utils';
import { NextApiRequest, NextApiResponse } from 'next';

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API);

const welcomeNotificationId =
    process.env.NEXT_PUBLIC_WELCOME_USER_NOTIFICATION_ID;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const { method } = req;
    const { email } = req.body;
    const data = { email };

    switch (method) {
        case 'POST':
            try {
                const sendToUser = sendEmail(
                    email,
                    welcomeNotificationId,
                    data,
                    false,
                );
                await sgMail.send(sendToUser);
                res.status(201).json({
                    success: true,
                    message: 'email sent',
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
