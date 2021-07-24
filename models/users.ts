import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        image: String,
    },
    { timestamps: true, collection: 'users' },
);

export default mongoose.models.users || mongoose.model('users', userSchema);
