import connectToDatabase from '../../middlewares/database';
import Newsletter from '../../models/newsletter';
import { sendEmail } from '../../utils';

export default async function handler(req, res) {
    const { method } = req;
    const { email } = req.body;

    console.log('userEmail', email);
    const adminNewsletterId =
        process.env.NEXT_PUBLIC_ADMIN_NEWSLETTER_NOTIFICATION_ID;

    const userNewsletterId =
        process.env.NEXT_PUBLIC_USER_NEWSLETTER_NOTIFICATION_ID;

    await connectToDatabase();

    switch (method) {
        case 'POST':
            try {
                const newsletterSubscribe = await Newsletter.create(req.body);
                sendEmail('', adminNewsletterId, email, true)
                    .then((response) => {
                        console.log('response sendToAdmin', response);
                    })
                    .catch((error) =>
                        console.error('error sendToAdmin', error),
                    );
                sendEmail(email, userNewsletterId, email, false)
                    .then((response) => {
                        console.log('response sendToUser', response);
                    })
                    .catch((error) => console.error('error sendToUser', error));
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
