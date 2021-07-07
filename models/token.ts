import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const InstgramLongLivedSchema = new Schema({
    access_token: String,
    type: String,
    expires_at: String,
});

export default mongoose.models.InstagramToken ||
    mongoose.model('InstagramToken', InstgramLongLivedSchema);
