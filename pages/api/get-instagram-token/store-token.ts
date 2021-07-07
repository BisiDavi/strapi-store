import { connectToDatabase } from '../../../middlewares/database';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const token = req.body.token;
        console.log('token', token);
        const { db } = await connectToDatabase();
        db.collection('instagram').insertOne({
            code: token,
        });
    }
    if (res.status(200)) {
        console.log('system fine');
    }
}
