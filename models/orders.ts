import mongoose from 'mongoose';

const OrdersSchema = new mongoose.Schema(
    {
        fullName: String,
        email: String,
        address: String,
        zip: String,
        telephone: String,
        country: String,
        region: String,
        shippingMethod: String,
        products: Array,
        totalPrice: String,
        additionalInformation: String,
        symbol: String,
    },
    {
        timestamps: true,
    },
);

export default mongoose.models.Orders || mongoose.model('Orders', OrdersSchema);
