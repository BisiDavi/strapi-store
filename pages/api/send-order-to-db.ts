import connectToDatabase from '../../middlewares/database';
import Orders from '../../models/orders';

export default async function handler(req, res) {
    const { method } = req;

    await connectToDatabase();

    switch (method) {
        case 'POST':
            try {
                const {
                    orderId,
                    method,
                    additionalInformation,
                    details,
                    products,
                    totalPrice,
                } = req.body;
                const orderData = {
                    orderId,
                    fullName: details.fullName,
                    email: details.email,
                    address: details.address,
                    zip: details.zip,
                    telephone: details.telephone,
                    country: details.country,
                    region: details.region,
                    shippingMethod: method,
                    products,
                    totalPrice,
                    additionalInformation,
                };
                const sendUserOrder = await Orders.create(orderData);
                res.status(201).json({
                    success: true,
                    data: sendUserOrder,
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
