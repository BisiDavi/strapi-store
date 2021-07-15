import mongoose from 'mongoose';

const OrdersSchema = new mongoose.Schema({
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
});
