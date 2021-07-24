import connectToDatabase from '../../middlewares/database';
import Users from '../../models/users';

export default async function GetUsers(req, res) {
    const { method } = req;

    await connectToDatabase();

    switch (method) {
        case 'GET': {
            try {
                const getUsers = await Users.find();
                res.status(201).json({
                    success: true,
                    data: getUsers,
                });
            } catch (error) {
                res.status(400).json({
                    success: false,
                    message: 'failed to get users from db.',
                });
            }
            break;
        }
        default:
            res.status(400).json({ success: false });
            break;
    }
}
