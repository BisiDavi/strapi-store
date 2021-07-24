import connectToDatabase from '../../middlewares/database';
import Orders from '../../models/orders';

export default async function SaveOrderHandler(req, res) {
    const { method } = req;

    await connectToDatabase();

    switch (method) {
        case 'POST': {
            try {
                const newOrder = await Orders.create(req.body);
                res.status(201).json({
                    success: true,
                    data: newOrder,
                });
            } catch (error) {
                res.status(400).json({
                    success: false,
                    message: 'failed to post to db',
                    error,
                });
            }
            break;
        }
        case 'GET': {
            try {
                const getOrders = await Orders.find();
                res.status(201).json({
                    success: true,
                    data: getOrders,
                });
            } catch (error) {
                res.status(400).json({
                    success: false,
                    message: 'failed to get from db',
                    error,
                });
            }
            break;
        }
        default:
            res.status(400).json({ success: false });
            break;
    }
}
