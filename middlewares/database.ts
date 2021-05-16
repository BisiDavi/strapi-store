import { MongoClient } from 'mongodb';

const { NEXT_MONGODB_URI, NEXT_MONGODB } = process.env;

if (!NEXT_MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
}

if (!NEXT_MONGODB) {
    throw new Error('Please define the MONGODB_DB environment variable');
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */

let cached = (global as any).mongo;

if (!cached) {
    cached = (global as any).mongo = { conn: null, promise: null };
}

export async function connectToDatabase() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        cached.promise = MongoClient.connect(NEXT_MONGODB_URI, options).then(
            (client) => {
                return {
                    client,
                    db: client.db(NEXT_MONGODB),
                };
            },
        );
    }
    cached.conn = await cached.promise;
    return cached.conn;
}
