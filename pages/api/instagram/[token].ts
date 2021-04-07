import axios from "axios";
import Cors from "cors";

const cors = Cors({
    methods: ["POST", "HEAD", "OPTIONS"],
});

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }

            return resolve(result);
        });
    });
}

const InstagramtokenHandler = async (req, res) => {
    const { token } = req.query;
    console.log("token", token);
    const url = `${process.env.NEXT_PUBLIC_TOKEN_BASE_URL}/oauth/access_token/client_id=${process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID}/client_secret=${process.env.NEXT_PUBLIC_CLIENT_SECRET}/grant_type=authorization_code/redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}/code=${token}`;

    await runMiddleware(req, res, cors);
    axios
        .post(url)
        .then(({ data }) => console.log("data", data))
        .catch((error) => console.log("error", error));
};

export default InstagramtokenHandler;
