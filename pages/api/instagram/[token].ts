import axios from "axios";

const InstagramtokenHandler = async (req, res) => {
    const { token } = req.query;
    const url = `${process.env.NEXT_PUBLIC_TOKEN_BASE_URL}/oauth/access_token/client_id=${process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID}/client_secret=${process.env.NEXT_PUBLIC_CLIENT_SECRET}/grant_type=authorization_code/redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}/code=${token}`;

    if (req.method === "POST") {
        res.setHeader("Access-Control-Allow-Origin", "*");
        axios
            .post(url)
            .then(({ data }) => res.status(200).json({ data }))
            .catch((error) => res.status(400).json({ error }));
    }
};

export default InstagramtokenHandler;
