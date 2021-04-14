import { nanoid } from "nanoid";

export async function insertAuthToken(db, authToken) {
    return db
        .collections("token")
        .insertOne({
            _id: nanoid(12),
            authToken,
            createdAt: new Date(),
        })
        .then(({ ops }) => ops[0]);
}
