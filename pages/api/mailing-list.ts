import connectToDatabase from '../../middlewares/database';
import Mailinglist from '../../models/mailingList';

export default async function handler(req, res) {
    const { method } = req;

    await connectToDatabase();

    switch (method) {
        case 'POST':
            try {
                const MailinglistSubscriber = await Mailinglist.create(
                    req.body,
                );
                res.status(201).json({
                    success: true,
                    data: MailinglistSubscriber,
                });
            } catch (error) {
                res.status(400).json({ sucess: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}
