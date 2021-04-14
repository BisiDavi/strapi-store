import { MongoClient } from "mongodb";

let cached = global.mongo;

if (!cached) {
    cached = global.mongo = { conn: null, promise: null };
}

export default async function connectToDatabase() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        cached.promise = MongoClient.connect(
            process.env.NEXT_MONGODB_URI,
            opts
        ).then((client) => {
            return {
                client,
                db: client.db(process.env.NEXT_MONGODB),
            };
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}
