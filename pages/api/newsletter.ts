import sgMail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';
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

    await connectToDatabase();

    const adminNewsletterId =
        process.env.NEXT_PUBLIC_ADMIN_NEWSLETTER_NOTIFICATION_ID;

    const userNewsletterId =
        process.env.NEXT_PUBLIC_USER_NEWSLETTER_NOTIFICATION_ID;

    const userEmail = { email };

    switch (method) {
        case 'POST': {
            try {
                const checkSubscriber = await Newsletter.find({
                    email: req.body.email,
                });
                console.log('checkSubscriber', checkSubscriber);
                if (!(checkSubscriber.length > 0)) {
                    const newsletterSubscribe = await Newsletter.create(
                        req.body,
                    );
                    const sendToAdmin = sendEmail(
                        '',
                        adminNewsletterId,
                        userEmail,
                        true,
                    );
                    await sgMail.send(sendToAdmin);

                    const sendToUser = sendEmail(
                        email,
                        userNewsletterId,
                        userEmail,
                        false,
                    );

                    await sgMail.send(sendToUser);

                    return res.status(200).json({
                        success: true,
                        data: newsletterSubscribe,
                    });
                } else {
                    return res.status(201).json({
                        success: false,
                        message: 'A subscriber with that email exist',
                    });
                }
            } catch (error) {
                console.log('error', error);
                res.status(400).json({ success: false, error });
            }
            break;
        }
        case 'GET': {
            try {
                const getNewsletterSubscribers = await Newsletter.find();
                res.status(201).json({
                    success: true,
                    data: getNewsletterSubscribers,
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
