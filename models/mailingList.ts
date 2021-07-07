import mongoose from 'mongoose';

const MailinglistSchema = new mongoose.Schema({
    email: {
        type: String,
    },
});

export default mongoose.models.Mailinglist ||
    mongoose.model('Mailinglist', MailinglistSchema);
