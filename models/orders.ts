import mongoose from 'mongoose';

const OrdersSchema = new mongoose.Schema({
    orderId: {
        type: String,
    },
    fullName: {
        type: String,
    },
    email: {
        type: String,
    },
    address: {
        type: String,
    },
    zip: {
        type: String,
    },
    telephone: {
        type: String,
    },
    country: {
        type: String,
    },
    region: {
        type: String,
    },
    shippingMethod: {
        type: String,
    },
    products: {
        type: Array,
    },
    totalPrice: {
        type: String,
    },
    additionalInformation: {
        type: String,
    },
});

export default mongoose.models.Orders || mongoose.model('Orders', OrdersSchema);
