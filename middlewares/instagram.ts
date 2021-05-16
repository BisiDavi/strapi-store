import { nanoid } from 'nanoid';

export async function insertAuthToken(db, authToken) {
    return db
        .collections('instagram')
        .insertOne({
            _id: nanoid(12),
            code: authToken,
            createdAt: new Date(),
        })
        .then(({ ops }) => ops[0]);
}
