import mongoose from 'mongoose';

const InstgramLongLivedSchema = new mongoose.Schema({
    access_token: {
        type: String,
    },
    expires_in: {
        type: Number,
    },
    token_type: {
        type: String,
    },
});

export default mongoose.models.InstagramToken ||
    mongoose.model('InstagramToken', InstgramLongLivedSchema);
