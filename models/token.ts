import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const InstgramLongLivedSchema = new Schema({
    access_token: String,
    expires_in: Number,
    token_type: String,
});

export default mongoose.models.InstagramToken ||
    mongoose.model('InstagramToken', InstgramLongLivedSchema);
