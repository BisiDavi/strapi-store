import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
import connectToDatabase from '../../middlewares/database';
import Newsletter from '../../models/newsletter';
import { sendEmail } from '../../utils';

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const { method } = req;
    const { email } = req.body;

    console.log('userEmail', email);
    const adminNewsletterId =
        process.env.NEXT_PUBLIC_ADMIN_NEWSLETTER_NOTIFICATION_ID;

    const userNewsletterId =
        process.env.NEXT_PUBLIC_USER_NEWSLETTER_NOTIFICATION_ID;

    async function sendMessage(userEmail, id, data, isAdmin) {
        return sendEmail(sgMail, userEmail, id, data, isAdmin);
    }

    await connectToDatabase();

    switch (method) {
        case 'POST':
            try {
                const newsletterSubscribe = await Newsletter.create(req.body);
                sendMessage('', adminNewsletterId, email, true);
                sendMessage(email, userNewsletterId, email, false);
                res.status(201).json({
                    success: true,
                    data: newsletterSubscribe,
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
