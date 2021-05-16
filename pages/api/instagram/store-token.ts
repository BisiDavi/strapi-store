import { connectToDatabase } from '../../../middlewares/database';

export default async function handler(req, res) {
    console.log('req', req);
    if (req.method === 'POST') {
        console.log('token', req.token);
        const token = req.token;
        console.log('token', token);
        const { db } = await connectToDatabase();
        db.instagram.insertOne({
            code: token,
        });
    }
    if (res.status(200)) {
        console.log('system fine', req.token);
    }
}
