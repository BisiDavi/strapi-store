import mongoose from 'mongoose';

const NewsletterSchema = new mongoose.Schema(
    {
        email: String,
    },
    { timestamps: true },
);

export default mongoose.models.Newsletter ||
    mongoose.model('Newsletter', NewsletterSchema);
