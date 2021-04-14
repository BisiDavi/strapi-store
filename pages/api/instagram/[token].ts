import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import all from "../../../middlewares";
import { insertAuthToken } from "../../../middlewares/instagram";

const handler = nc();

handler.use(all);

handler.post(async (req: any, res: any) => {
    console.log("req", req);
    const authToken = await insertAuthToken(req.db, req.query.token);
    console.log("authToken", authToken);
});

export const config = {
    api: {
        externalResolver: true,
    },
};

export default handler;
