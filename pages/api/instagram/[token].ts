import nc from 'next-connect';
import all from '../../../middlewares';
import { connectToDatabase } from '../../../middlewares/database';
import { insertAuthToken } from '../../../middlewares/instagram';

const handler = nc();

handler.use(all);

handler.post(async (req: any, res: any) => {
    console.log('req', req);
    const { token } = req.query;
    // const { db } = await connectToDatabase();
    const authToken = await insertAuthToken(req.db, token);
    console.log('authToken', authToken);
    // db.instagram.insertOne({
    //     code: token,
    // });
});

export const config = {
    api: {
        externalResolver: true,
    },
};

export default handler;
/*  */
