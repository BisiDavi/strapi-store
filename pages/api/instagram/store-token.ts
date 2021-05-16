import { connectToDatabase } from '../../../middlewares/database';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        console.log('token', req.bodytoken);
        const token = req.body.token;
        console.log('token', token);
        const { db } = await connectToDatabase();
        db.instagram.insertOne({
            code: token,
        });
    }
    if (res.status(200)) {
        console.log('system fine');
    }
}
