import connectToDatabase from '../../middlewares/database';
import Newsletter from '../../models/newsletter';

export default async function handler(req, res) {
    const { method } = req;

    await connectToDatabase();

    switch (method) {
        case 'POST':
            try {
                const newsletterSubscribe = await Newsletter.create(req.body);
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
