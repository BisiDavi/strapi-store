import  connectToDatabase  from '../../middlewares/database';
import InstagramToken from '../../models/token';

export default async function handler(req, res) {
    const { method } = req;

    await connectToDatabase();

    switch (method) {
        case 'GET':
            try {
                const getInstagramLongLivedToken = await InstagramToken.find();
                if (!getInstagramLongLivedToken) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({
                    success: true,
                    data: getInstagramLongLivedToken,
                });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'POST':
            try {
                const postInstagramLongLivedToken = await InstagramToken.create(
                    req.body,
                );
                res.status(201).json({
                    success: true,
                    data: postInstagramLongLivedToken,
                });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}
